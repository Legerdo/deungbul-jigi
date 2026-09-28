// 키보드·마우스 입력. 이번 프레임에 눌린 키(edge)와 유지 상태를 구분한다.

export class Input {
  private down = new Set<string>();
  private pressed = new Set<string>();
  mouseX = 0;
  mouseY = 0;
  mouseDown = false;
  private clickQueued = false;
  /** 마지막 입력 장치 활동 시각 */
  lastActivity = 0;
  enabled = true;

  constructor(target: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      const k = this.norm(e);
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(k)) e.preventDefault();
      if (!this.down.has(k)) this.pressed.add(k);
      this.down.add(k);
      this.lastActivity = performance.now();
    });
    window.addEventListener('keyup', (e) => {
      this.down.delete(this.norm(e));
    });
    window.addEventListener('blur', () => {
      this.down.clear();
      this.mouseDown = false;
    });
    target.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    target.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.mouseDown = true;
        this.clickQueued = true;
        this.lastActivity = performance.now();
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseDown = false;
    });
    target.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private norm(e: KeyboardEvent): string {
    // 한글 자판 상태에서도 물리 키(code)로 판정
    return e.code;
  }

  isDown(code: string): boolean {
    return this.enabled && this.down.has(code);
  }

  wasPressed(code: string): boolean {
    return this.enabled && this.pressed.has(code);
  }

  /** 이번 프레임에 좌클릭이 있었는지 (소비) */
  consumeClick(): boolean {
    const c = this.clickQueued && this.enabled;
    this.clickQueued = false;
    return c;
  }

  peekClick(): boolean {
    return this.clickQueued && this.enabled;
  }

  moveVector(): [number, number] {
    let x = 0;
    let z = 0;
    if (this.isDown('KeyW') || this.isDown('ArrowUp')) z -= 1;
    if (this.isDown('KeyS') || this.isDown('ArrowDown')) z += 1;
    if (this.isDown('KeyA') || this.isDown('ArrowLeft')) x -= 1;
    if (this.isDown('KeyD') || this.isDown('ArrowRight')) x += 1;
    const l = Math.hypot(x, z);
    return l > 0 ? [x / l, z / l] : [0, 0];
  }

  endFrame(): void {
    this.pressed.clear();
  }

  clearAll(): void {
    this.pressed.clear();
    this.clickQueued = false;
  }
}
