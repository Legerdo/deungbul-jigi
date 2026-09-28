(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(`Galmuri11-DfQIlyDK.woff2`,import.meta.url).href,t=new URL(`Galmuri11-Bold-QdFGsJ3v.woff2`,import.meta.url).href,n=new URL(`Galmuri14-BIHuh8Vm.woff2`,import.meta.url).href,r=new URL(`Galmuri9-B9HMP827.woff2`,import.meta.url).href,i=1e3,a=1001,o=1002,s=1003,c=1004,l=1005,u=1006,d=1007,f=1008,p=1009,m=1010,h=1011,g=1012,_=1013,v=1014,y=1015,b=1016,x=1017,S=1018,C=1020,w=35902,T=35899,E=1021,D=1022,O=1023,k=1026,A=1027,ee=1028,te=1029,ne=1030,j=1031,re=1033,M=33776,ie=33777,ae=33778,oe=33779,se=35840,ce=35841,le=35842,ue=35843,N=36196,de=37492,fe=37496,pe=37488,me=37489,he=37490,ge=37491,_e=37808,ve=37809,ye=37810,be=37811,xe=37812,Se=37813,Ce=37814,we=37815,Te=37816,Ee=37817,De=37818,Oe=37819,ke=37820,Ae=37821,je=36492,Me=36494,Ne=36495,Pe=36283,P=36284,Fe=36285,Ie=36286,Le=2300,F=2301,Re=2302,I=2303,ze=2400,Be=2401,Ve=2402,He=3200,Ue=3201,We=`srgb`,Ge=`srgb-linear`,Ke=`linear`,qe=`srgb`,Je=7680,Ye=35044,Xe=35048,Ze=2e3;function Qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function $e(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function et(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function tt(){let e=et(`canvas`);return e.style.display=`block`,e}var nt={};function rt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function it(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=it(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function at(...e){let t=e.join(` `);t in nt||(nt[t]=!0,L(...e))}function ot(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var st={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ct=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},lt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ut=1234567,dt=Math.PI/180,ft=180/Math.PI;function pt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(lt[e&255]+lt[e>>8&255]+lt[e>>16&255]+lt[e>>24&255]+`-`+lt[t&255]+lt[t>>8&255]+`-`+lt[t>>16&15|64]+lt[t>>24&255]+`-`+lt[n&63|128]+lt[n>>8&255]+`-`+lt[n>>16&255]+lt[n>>24&255]+lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]).toLowerCase()}function mt(e,t,n){return Math.max(t,Math.min(n,e))}function ht(e,t){return(e%t+t)%t}function gt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function _t(e,t,n){return e===t?0:(n-e)/(t-e)}function vt(e,t,n){return(1-n)*e+n*t}function yt(e,t,n,r){return vt(e,t,1-Math.exp(-n*r))}function bt(e,t=1){return t-Math.abs(ht(e,t*2)-t)}function xt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function St(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ct(e,t){return e+Math.floor(Math.random()*(t-e+1))}function wt(e,t){return e+Math.random()*(t-e)}function Tt(e){return e*(.5-Math.random())}function Et(e){e!==void 0&&(ut=e);let t=ut+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dt(e){return e*dt}function Ot(e){return e*ft}function kt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function At(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function jt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Nt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ft={DEG2RAD:dt,RAD2DEG:ft,generateUUID:pt,clamp:mt,euclideanModulo:ht,mapLinear:gt,inverseLerp:_t,lerp:vt,damp:yt,pingpong:bt,smoothstep:xt,smootherstep:St,randInt:Ct,randFloat:wt,randFloatSpread:Tt,seededRandom:Et,degToRad:Dt,radToDeg:Ot,isPowerOfTwo:kt,ceilPowerOfTwo:At,floorPowerOfTwo:jt,setQuaternionFromProperEuler:Mt,normalize:Pt,denormalize:Nt},z=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lt.copy(this).projectOnVector(e),this.sub(Lt)}reflect(e){return this.sub(Lt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lt=new B,Rt=new It,V=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return at(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(zt.makeScale(e,t)),this}rotate(e){return at(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(zt.makeRotation(-e)),this}translate(e,t){return at(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(zt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zt=new V,Bt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ht(){let e={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Wt(e.r),e.g=Wt(e.g),e.b=Wt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Gt(e.r),e.g=Gt(e.g),e.b=Gt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ke:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return at(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return at(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ge]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:Bt,fromXYZ:Vt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),e}var Ut=Ht();function Wt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Kt,qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kt===void 0&&(Kt=et(`canvas`)),Kt.width=e.width,Kt.height=e.height;let t=Kt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Kt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=et(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Wt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Wt(t[e]/255)*255):t[e]=Wt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Jt=0,Yt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jt++}),this.uuid=pt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Xt(r[t].image)):e.push(Xt(r[t]))}else e=Xt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Xt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Zt=0,Qt=new B,$t=class e extends ct{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=a,i=a,o=u,s=f,c=O,l=p,d=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=pt(),this.name=``,this.source=new Yt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=o,this.minFilter=s,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=l,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qt).x}get height(){return this.source.getSize(Qt).y}get depth(){return this.source.getSize(Qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case i:e.x-=Math.floor(e.x);break;case a:e.x=e.x<0?0:1;break;case o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case i:e.y-=Math.floor(e.y);break;case a:e.y=e.y<0?0:1;break;case o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=300,$t.DEFAULT_ANISOTROPY=1;var en=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tn=class extends ct{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:u,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let r=new $t({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:u,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Yt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},nn=class extends tn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rn=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},an=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=s,this.minFilter=s,this.wrapR=a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},on=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/sn.setFromMatrixColumn(e,0).length(),i=1/sn.setFromMatrixColumn(e,1).length(),a=1/sn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ln,e,un)}lookAt(e,t,n){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),dn.crossVectors(n,pn),dn.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),dn.crossVectors(n,pn)),dn.normalize(),fn.crossVectors(pn,dn),r[0]=dn.x,r[4]=fn.x,r[8]=pn.x,r[1]=dn.y,r[5]=fn.y,r[9]=pn.y,r[2]=dn.z,r[6]=fn.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*j,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*j,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*j,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*j,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=sn.set(r[0],r[1],r[2]).length(),o=sn.set(r[4],r[5],r[6]).length(),s=sn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),cn.copy(this);let c=1/a,l=1/o,u=1/s;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=l,cn.elements[5]*=l,cn.elements[6]*=l,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ze,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sn=new B,cn=new on,ln=new B(0,0,0),un=new B(1,1,1),dn=new B,fn=new B,pn=new B,mn=new on,hn=new It,gn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-mt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hn.setFromEuler(this),this.setFromQuaternion(hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER=`XYZ`;var _n=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},vn=0,yn=new B,bn=new It,xn=new on,Sn=new B,Cn=new B,wn=new B,Tn=new It,En=new B(1,0,0),Dn=new B(0,1,0),On=new B(0,0,1),kn={type:`added`},An={type:`removed`},jn={type:`childadded`,child:null},Mn={type:`childremoved`,child:null},Nn=class e extends ct{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vn++}),this.uuid=pt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new gn,r=new It,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new on},normalMatrix:{value:new V}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _n,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(En,e)}rotateY(e){return this.rotateOnAxis(Dn,e)}rotateZ(e){return this.rotateOnAxis(On,e)}translateOnAxis(e,t){return yn.copy(e).applyQuaternion(this.quaternion),this.position.add(yn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(En,e)}translateY(e){return this.translateOnAxis(Dn,e)}translateZ(e){return this.translateOnAxis(On,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sn.copy(e):Sn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Cn,Sn,this.up):xn.lookAt(Sn,Cn,this.up),this.quaternion.setFromRotationMatrix(xn),r&&(xn.extractRotation(r.matrixWorld),bn.setFromRotationMatrix(xn),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(An),Mn.child=e,this.dispatchEvent(Mn),Mn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kn),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,e,wn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cn,Tn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Nn.DEFAULT_UP=new B(0,1,0),Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=class extends Nn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Fn={type:`move`},In=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ln={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},zn={h:0,s:0,l:0};function Bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ut.workingColorSpace){if(e=ht(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bn(i,r,e+1/3),this.g=Bn(i,r,e),this.b=Bn(i,r,e-1/3)}return Ut.colorSpaceToWorking(this,r),this}setStyle(e,t=We){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){let n=Ln[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wt(e.r),this.g=Wt(e.g),this.b=Wt(e.b),this}copyLinearToSRGB(e){return this.r=Gt(e.r),this.g=Gt(e.g),this.b=Gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return Ut.workingToColorSpace(Vn.copy(this),e),Math.round(mt(Vn.r*255,0,255))*65536+Math.round(mt(Vn.g*255,0,255))*256+Math.round(mt(Vn.b*255,0,255))}getHexString(e=We){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Vn.copy(this),t);let n=Vn.r,r=Vn.g,i=Vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=We){Ut.workingToColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,r=Vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(zn);let n=vt(Rn.h,zn.h,t),r=vt(Rn.s,zn.s,t),i=vt(Rn.l,zn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new H;H.NAMES=Ln;var Hn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Un=class extends Nn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Wn=new B,Gn=new B,Kn=new B,qn=new B,Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new en,tr=new en,nr=new en,rr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wn.subVectors(e,t),r.cross(Wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Wn.subVectors(r,t),Gn.subVectors(n,t),Kn.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(Gn),s=Wn.dot(Kn),c=Gn.dot(Gn),l=Gn.dot(Kn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)!==null&&qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,qn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,qn.x),s.addScaledVector(a,qn.y),s.addScaledVector(o,qn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(er,i.x),a.addScaledVector(tr,i.y),a.addScaledVector(nr,i.z),a}static isFrontFacing(e,t,n,r){return Wn.subVectors(n,t),Gn.subVectors(e,t),Wn.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Wn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Jn.subVectors(r,n),Yn.subVectors(i,n),Zn.subVectors(e,n);let s=Jn.dot(Zn),c=Yn.dot(Zn);if(s<=0&&c<=0)return t.copy(n);Qn.subVectors(e,r);let l=Jn.dot(Qn),u=Yn.dot(Qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Jn,a);$n.subVectors(e,i);let f=Jn.dot($n),p=Yn.dot($n);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Yn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Xn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Xn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Jn,a).addScaledVector(Yn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ir=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,or):or.fromBufferAttribute(r,t),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),hr.subVectors(this.max,mr),cr.subVectors(e.a,mr),lr.subVectors(e.b,mr),ur.subVectors(e.c,mr),dr.subVectors(lr,cr),fr.subVectors(ur,lr),pr.subVectors(cr,ur);let t=[0,-dr.z,dr.y,0,-fr.z,fr.y,0,-pr.z,pr.y,dr.z,0,-dr.x,fr.z,0,-fr.x,pr.z,0,-pr.x,-dr.y,dr.x,0,-fr.y,fr.x,0,-pr.y,pr.x,0];return!vr(t,cr,lr,ur,hr)||(t=[1,0,0,0,1,0,0,0,1],!vr(t,cr,lr,ur,hr))?!1:(gr.crossVectors(dr,fr),t=[gr.x,gr.y,gr.z],vr(t,cr,lr,ur,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new B,new B,new B,new B,new B,new B,new B,new B],or=new B,sr=new ir,cr=new B,lr=new B,ur=new B,dr=new B,fr=new B,pr=new B,mr=new B,hr=new B,gr=new B,_r=new B;function vr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_r.fromArray(e,a);let o=i.x*Math.abs(_r.x)+i.y*Math.abs(_r.y)+i.z*Math.abs(_r.z),s=t.dot(_r),c=n.dot(_r),l=r.dot(_r);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var yr=new B,br=new z,xr=0,Sr=class extends ct{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ye,this.updateRanges=[],this.gpuType=y,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix4(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyNormalMatrix(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.transformDirection(e),this.setXYZ(t,yr.x,yr.y,yr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),r=Pt(r,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Cr=class extends Sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wr=class extends Sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Tr=class extends Sr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Er=new ir,Dr=new B,Or=new B,kr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Er.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Dr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(Or)),this.expandByPoint(Dr.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ar=0,jr=new on,Mr=new Nn,Nr=new B,Pr=new ir,Fr=new ir,Ir=new B,Lr=class e extends ct{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ar++}),this.uuid=pt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Qe(e)?wr:Cr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jr.makeRotationFromQuaternion(e),this.applyMatrix4(jr),this}rotateX(e){return jr.makeRotationX(e),this.applyMatrix4(jr),this}rotateY(e){return jr.makeRotationY(e),this.applyMatrix4(jr),this}rotateZ(e){return jr.makeRotationZ(e),this.applyMatrix4(jr),this}translate(e,t,n){return jr.makeTranslation(e,t,n),this.applyMatrix4(jr),this}scale(e,t,n){return jr.makeScale(e,t,n),this.applyMatrix4(jr),this}lookAt(e){return Mr.lookAt(e),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Pr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(this.boundingBox.min,Pr.min),this.boundingBox.expandByPoint(Ir),Ir.addVectors(this.boundingBox.max,Pr.max),this.boundingBox.expandByPoint(Ir)):(this.boundingBox.expandByPoint(Pr.min),this.boundingBox.expandByPoint(Pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Fr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ir.addVectors(Pr.min,Fr.min),Pr.expandByPoint(Ir),Ir.addVectors(Pr.max,Fr.max),Pr.expandByPoint(Ir)):(Pr.expandByPoint(Fr.min),Pr.expandByPoint(Fr.max))}Pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ir.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ir));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ir.fromBufferAttribute(a,t),o&&(Nr.fromBufferAttribute(e,t),Ir.add(Nr)),r=Math.max(r,n.distanceToSquared(Ir))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Sr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Sr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ir.fromBufferAttribute(e,t),Ir.normalize(),e.setXYZ(t,Ir.x,Ir.y,Ir.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Sr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Rr=new B,zr=new B,Br=new V,Vr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rr.subVectors(n,t).cross(zr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Rr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Br.getNormalMatrix(e),r=this.coplanarPoint(Rr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hr=0,Ur=class extends ct{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hr++}),this.uuid=pt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Je,this.stencilZFail=Je,this.stencilZPass=Je,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Wr=new B,Gr=new B,Kr=new B,qr=new B,Jr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Gr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),o=qr.dot(this.direction),s=-qr.dot(Kr),c=qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gr).addScaledVector(Kr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Wr.subVectors(e.center,this.origin);let n=Wr.dot(this.direction),r=Wr.dot(Wr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=O-j*A,se=k-re*A,ce=ee-j*ne,le=te-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*A+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yr=class extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xr=new on,Zr=new Jr,Qr=new kr,$r=new B,ei=new B,ti=new B,ni=new B,ri=new B,ii=new B,ai=new B,oi=new B,si=class extends Nn{constructor(e=new Lr,t=new Yr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ii.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ri.fromBufferAttribute(s,e),a?ii.addScaledVector(ri,r):ii.addScaledVector(ri.sub(t),r))}t.add(ii)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Zr.copy(e.ray).recast(e.near),!(Qr.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Qr,$r)===null||Zr.origin.distanceToSquared($r)>(e.far-e.near)**2))&&(Xr.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(Xr),(n.boundingBox===null||Zr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=li(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=li(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=li(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=li(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ci(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;oi.copy(s),oi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(oi);return l<n.near||l>n.far?null:{distance:l,point:oi.clone(),object:e}}function li(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ei),e.getVertexPosition(c,ti),e.getVertexPosition(l,ni);let u=ci(e,t,n,r,ei,ti,ni,ai);if(u){let e=new B;rr.getBarycoord(ai,ei,ti,ni,e),i&&(u.uv=rr.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=rr.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=rr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};rr.getNormal(ei,ti,ni,t.normal),u.face=t,u.barycoord=e}return u}var ui=class extends $t{constructor(e=null,t=1,n=1,r,i,a,o,c,l=s,u=s,d,f){super(null,a,o,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class extends Sr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fi=new on,pi=new on,mi=[],hi=new ir,gi=new on,_i=new si,vi=new kr,yi=class extends si{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,gi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),hi.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(hi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),vi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(_i.geometry=this.geometry,_i.material=this.material,_i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vi.copy(this.boundingSphere),vi.applyMatrix4(n),e.ray.intersectsSphere(vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,fi),pi.multiplyMatrices(n,fi),_i.matrixWorld=pi,_i.raycast(e,mi);for(let e=0,n=mi.length;e<n;e++){let n=mi[e];n.instanceId=i,n.object=this,t.push(n)}mi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(r*this.count),r,this.count,ee,y));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new kr,xi=new z(.5,.5),Si=new B,Ci=class{constructor(e=new Vr,t=new Vr,n=new Vr,r=new Vr,i=new Vr,a=new Vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ze,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476+xi.distanceTo(e.center),bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Si.x=r.normal.x>0?e.max.x:e.min.x,Si.y=r.normal.y>0?e.max.y:e.min.y,Si.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Si)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wi=class extends Ur{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ti=new on,Ei=new Jr,Di=new kr,Oi=new B,ki=class extends Nn{constructor(e=new Lr,t=new wi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Di.radius+=i,e.ray.intersectsSphere(Di)===!1)return;Ti.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Ti);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Oi.fromBufferAttribute(l,n),Ai(Oi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Oi.fromBufferAttribute(l,a),Ai(Oi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=Ei.distanceSqToPoint(e);if(s<n){let n=new B;Ei.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ji=class extends $t{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mi=class extends $t{constructor(e,t,n=v,r,i,a,o=s,c=s,l,u=k,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ni=class extends Mi{constructor(e,t=v,n=301,r,i,a=s,o=s,c,l=k){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends Lr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Tr(c,3)),this.setAttribute(`normal`,new Tr(l,3)),this.setAttribute(`uv`,new Tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class e extends Lr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Tr(u,3)),this.setAttribute(`normal`,new Tr(d,3)),this.setAttribute(`uv`,new Tr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class e extends Lr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ri=class e extends Lr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Tr(p,3)),this.setAttribute(`normal`,new Tr(m,3)),this.setAttribute(`uv`,new Tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function zi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Vi(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Vi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Bi(e){let t={};for(let n=0;n<e.length;n++){let r=zi(e[n]);for(let e in r)t[e]=r[e]}return t}function Vi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Hi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ui(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}var Wi={clone:zi,merge:Bi},Gi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ki=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qi=class extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gi,this.fragmentShader=Ki,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Hi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new en().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new on().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ji=class extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Yi=class extends Ur{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xi=class extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zi=class extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function $i(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ta=class extends ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},na=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ra=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ia=class extends ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=sa(n,t,g,y,r);i[p]=aa(x,o,_,b,m)}return i}};function aa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function oa(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function sa(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=aa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=oa(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ca=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),$i(e.settings)&&(n.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Le:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break;case I:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Le;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return Re;case this.InterpolantFactoryMethodBezier:return I}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;$i(this.settings)&&(la(this.settings.inTangents,e),la(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&$e(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,$i(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function la(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ca.prototype.ValueTypeName=``,ca.prototype.TimeBufferType=Float32Array,ca.prototype.ValueBufferType=Float32Array,ca.prototype.DefaultInterpolation=F;var ua=class extends ca{constructor(e,t,n){super(e,t,n)}};ua.prototype.ValueTypeName=`bool`,ua.prototype.ValueBufferType=Array,ua.prototype.DefaultInterpolation=Le,ua.prototype.InterpolantFactoryMethodLinear=void 0,ua.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};da.prototype.ValueTypeName=`color`;var fa=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};fa.prototype.ValueTypeName=`number`;var pa=class extends ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)It.slerpFlat(i,0,a,c-o,a,c,s);return i}},ma=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName=`quaternion`,ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends ca{constructor(e,t,n){super(e,t,n)}};ha.prototype.ValueTypeName=`string`,ha.prototype.ValueBufferType=Array,ha.prototype.DefaultInterpolation=Le,ha.prototype.InterpolantFactoryMethodLinear=void 0,ha.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}};ga.prototype.ValueTypeName=`vector`;var _a=class extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},va=class extends _a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ya=new on,ba=new B,xa=new B,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=p,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(ba),xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ca=new B,wa=new It,Ta=new B,Ea=class extends Nn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ca,wa,Ta),Ta.x===1&&Ta.y===1&&Ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,wa,Ta.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ca,wa,Ta),Ta.x===1&&Ta.y===1&&Ta.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,wa,Ta.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Da=new B,Oa=new z,ka=new z,Aa=class extends Ea{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ft*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(dt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ft*2*Math.atan(Math.tan(dt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,t){return this.getViewBounds(e,Oa,ka),t.subVectors(ka,Oa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(dt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ja=class extends Sa{constructor(){super(new Aa(90,1,.5,500)),this.isPointLightShadow=!0}},Ma=class extends _a{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ja}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Na=class extends Ea{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pa=class extends Sa{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fa=class extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Pa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ia=-90,La=1,Ra=class extends Nn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Aa(Ia,La,e,t);r.layers=this.layers,this.add(r);let i=new Aa(Ia,La,e,t);i.layers=this.layers,this.add(i);let a=new Aa(Ia,La,e,t);a.layers=this.layers,this.add(a);let o=new Aa(Ia,La,e,t);o.layers=this.layers,this.add(o);let s=new Aa(Ia,La,e,t);s.layers=this.layers,this.add(s);let c=new Aa(Ia,La,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},za=class extends Aa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ba=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Va.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Va(){this._document.hidden===!1&&this.reset()}var Ha=`\\[\\]\\.:\\/`,Ua=RegExp(`[\\[\\]\\.:\\/]`,`g`),Wa=`[^\\[\\]\\.:\\/]`,Ga=`[^`+Ha.replace(`\\.`,``)+`]`,Ka=`((?:WC+[\\/:])*)`.replace(`WC`,Wa),qa=`(WCOD+)?`.replace(`WCOD`,Ga),Ja=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Wa),Ya=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Wa),Xa=RegExp(`^`+Ka+qa+Ja+Ya+`$`),Za=[`material`,`materials`,`bones`,`map`],Qa=class{constructor(e,t,n){let r=n||$a.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$a=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ua,``)}static parseTrackName(e){let t=Xa.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Za.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$a.Composite=Qa,$a.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$a.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$a.prototype.GetterByBindingType=[$a.prototype._getValue_direct,$a.prototype._getValue_array,$a.prototype._getValue_arrayElement,$a.prototype._getValue_toArray],$a.prototype.SetterByBindingTypeAndVersioning=[[$a.prototype._setValue_direct,$a.prototype._setValue_direct_setNeedsUpdate,$a.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_array,$a.prototype._setValue_array_setNeedsUpdate,$a.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_arrayElement,$a.prototype._setValue_arrayElement_setNeedsUpdate,$a.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$a.prototype._setValue_fromArray,$a.prototype._setValue_fromArray_setNeedsUpdate,$a.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function eo(e,t,n,r){let i=to(r);switch(n){case E:return e*t;case ee:return e*t/i.components*i.byteLength;case te:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case D:return e*t*3/i.components*i.byteLength;case O:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case M:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:case ue:return Math.max(e,16)*Math.max(t,8)/4;case se:case le:return Math.max(e,8)*Math.max(t,8)/2;case N:case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case je:case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pe:case P:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function to(e){switch(e){case p:case m:return{byteLength:1,components:1};case g:case h:case b:return{byteLength:2,components:1};case x:case S:return{byteLength:2,components:4};case v:case _:case y:return{byteLength:4,components:1};case w:case T:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function no(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ro(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var U={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},io={basic:{uniforms:Bi([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:U.meshbasic_vert,fragmentShader:U.meshbasic_frag},lambert:{uniforms:Bi([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:U.meshlambert_vert,fragmentShader:U.meshlambert_frag},phong:{uniforms:Bi([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:U.meshphong_vert,fragmentShader:U.meshphong_frag},standard:{uniforms:Bi([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag},toon:{uniforms:Bi([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new H(0)}}]),vertexShader:U.meshtoon_vert,fragmentShader:U.meshtoon_frag},matcap:{uniforms:Bi([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:U.meshmatcap_vert,fragmentShader:U.meshmatcap_frag},points:{uniforms:Bi([W.points,W.fog]),vertexShader:U.points_vert,fragmentShader:U.points_frag},dashed:{uniforms:Bi([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:U.linedashed_vert,fragmentShader:U.linedashed_frag},depth:{uniforms:Bi([W.common,W.displacementmap]),vertexShader:U.depth_vert,fragmentShader:U.depth_frag},normal:{uniforms:Bi([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:U.meshnormal_vert,fragmentShader:U.meshnormal_frag},sprite:{uniforms:Bi([W.sprite,W.fog]),vertexShader:U.sprite_vert,fragmentShader:U.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:U.background_vert,fragmentShader:U.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:U.backgroundCube_vert,fragmentShader:U.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:U.cube_vert,fragmentShader:U.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:U.equirect_vert,fragmentShader:U.equirect_frag},distance:{uniforms:Bi([W.common,W.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:U.distance_vert,fragmentShader:U.distance_frag},shadow:{uniforms:Bi([W.lights,W.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:U.shadow_vert,fragmentShader:U.shadow_frag}};io.physical={uniforms:Bi([io.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:U.meshphysical_vert,fragmentShader:U.meshphysical_frag};var ao={r:0,b:0,g:0},oo=new on,so=new V;so.set(-1,0,0,0,1,0,0,0,1);function co(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new si(new Fi(1,1,1),new qi({name:`BackgroundCubeMaterial`,uniforms:zi(io.backgroundCube.uniforms),vertexShader:io.backgroundCube.vertexShader,fragmentShader:io.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(so),l.material.toneMapped=Ut.getTransfer(i.colorSpace)!==qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new si(new Li(2,2),new qi({name:`BackgroundMaterial`,uniforms:zi(io.background.uniforms),vertexShader:io.background.vertexShader,fragmentShader:io.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ut.getTransfer(i.colorSpace)!==qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ao,Ui(e)),n.buffers.color.setClear(ao.r,ao.g,ao.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function lo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function uo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function po(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Vr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mo=4,ho=6,go=20,_o=256,vo=new Na,yo=new H,bo=null,xo=0,So=0,Co=!1,wo=new B,To=new B,Eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wo}=i;bo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=No(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,xo,So),this._renderer.xr.enabled=Co,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:u,minFilter:u,generateMipmaps:!1,type:b,format:O,colorSpace:Ge,depthBuffer:!1},r=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Do(r)),this._blurMaterial=jo(r,e,t),this._ggxMaterial=Ao(r,e,t)}return r}_compileMaterial(e){let t=new si(new Lr,e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,r,i){let a=new Aa(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(yo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new Fi,new Yr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(yo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ko(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=No()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ko(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-mo?n-d+mo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ko(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,vo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ko(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,vo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ko(t,3*l*(r>this._lodMax-mo?r-this._lodMax+mo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,vo)}};function Do(e){let t=[],n=[],r=e,i=e-mo+1+ho;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?To.set(1,r,n):e===1?To.set(-n,1,-r):e===2?To.set(-n,r,1):e===3?To.set(-1,r,-n):e===4?To.set(-n,-1,r):To.set(n,r,-1),To.toArray(l,(e*6+t)*3)}}let u=new Lr;u.setAttribute(`position`,new Sr(c,3)),u.setAttribute(`outputDirection`,new Sr(l,3)),n.push(new si(u,null)),r>mo&&r--}return{lodMeshes:n,sizeLods:t}}function Oo(e,t,n){let r=new nn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ko(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ao(e,t,n){return new qi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:_o,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jo(e,t,n){return new qi({name:`SphericalGaussianBlur`,defines:{SAMPLES:go,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return new qi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function No(){return new qi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fo=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ji(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),i=new qi({name:`CubemapFromEquirect`,uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new si(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=u),new Ra(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Io(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Fo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Eo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Eo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Lo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&at(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ro(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?wr:Cr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function zo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Vo(e,t,n){let r=new WeakMap,i=new en;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new rn(h,p,m,u);g.type=y,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ho(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Uo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Wo(e,t,n,r,i,a){let o=new nn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Lr;l.setAttribute(`position`,new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Tr([0,2,0,0,2,0],2));let u=new Ji({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new si(l,u),f=new Na(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new nn(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}),c=new nn(t,n,{type:b,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ut.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Uo[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Go=new $t,Ko=new Mi(1,1),qo=new rn,Jo=new an,Yo=new ji,Xo=[],Zo=[],Qo=new Float32Array(16),$o=new Float32Array(9),es=new Float32Array(4);function ts(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Xo[i];if(a===void 0&&(a=new Float32Array(i),Xo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ns(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function rs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function is(e,t){let n=Zo[t];n===void 0&&(n=new Int32Array(t),Zo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function as(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2fv(this.addr,t),rs(n,t)}}function ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ns(n,t))return;e.uniform3fv(this.addr,t),rs(n,t)}}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4fv(this.addr,t),rs(n,t)}}function ls(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;es.set(r),e.uniformMatrix2fv(this.addr,!1,es),rs(n,r)}}function us(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;$o.set(r),e.uniformMatrix3fv(this.addr,!1,$o),rs(n,r)}}function ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ns(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rs(n,t)}else{if(ns(n,r))return;Qo.set(r),e.uniformMatrix4fv(this.addr,!1,Qo),rs(n,r)}}function fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2iv(this.addr,t),rs(n,t)}}function ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ns(n,t))return;e.uniform3iv(this.addr,t),rs(n,t)}}function hs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4iv(this.addr,t),rs(n,t)}}function gs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ns(n,t))return;e.uniform2uiv(this.addr,t),rs(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ns(n,t))return;e.uniform3uiv(this.addr,t),rs(n,t)}}function ys(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ns(n,t))return;e.uniform4uiv(this.addr,t),rs(n,t)}}function bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ko.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ko):a=Go,n.setTexture2D(t||a,i)}function xs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Jo,i)}function Ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Yo,i)}function Cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||qo,i)}function ws(e){switch(e){case 5126:return as;case 35664:return os;case 35665:return ss;case 35666:return cs;case 35674:return ls;case 35675:return us;case 35676:return ds;case 5124:case 35670:return fs;case 35667:case 35671:return ps;case 35668:case 35672:return ms;case 35669:case 35673:return hs;case 5125:return gs;case 36294:return _s;case 36295:return vs;case 36296:return ys;case 35678:case 36198:case 36298:case 36306:case 35682:return bs;case 35679:case 36299:case 36307:return xs;case 35680:case 36300:case 36308:case 36293:return Ss;case 36289:case 36303:case 36311:case 36292:return Cs}}function Ts(e,t){e.uniform1fv(this.addr,t)}function Es(e,t){let n=ts(t,this.size,2);e.uniform2fv(this.addr,n)}function Ds(e,t){let n=ts(t,this.size,3);e.uniform3fv(this.addr,n)}function Os(e,t){let n=ts(t,this.size,4);e.uniform4fv(this.addr,n)}function ks(e,t){let n=ts(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function As(e,t){let n=ts(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function js(e,t){let n=ts(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ms(e,t){e.uniform1iv(this.addr,t)}function Ns(e,t){e.uniform2iv(this.addr,t)}function Ps(e,t){e.uniform3iv(this.addr,t)}function Fs(e,t){e.uniform4iv(this.addr,t)}function Is(e,t){e.uniform1uiv(this.addr,t)}function Ls(e,t){e.uniform2uiv(this.addr,t)}function Rs(e,t){e.uniform3uiv(this.addr,t)}function zs(e,t){e.uniform4uiv(this.addr,t)}function Bs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ko:Go;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Vs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Jo,a[e])}function Hs(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Yo,a[e])}function Us(e,t,n){let r=this.cache,i=t.length,a=is(n,i);ns(r,a)||(e.uniform1iv(this.addr,a),rs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||qo,a[e])}function Ws(e){switch(e){case 5126:return Ts;case 35664:return Es;case 35665:return Ds;case 35666:return Os;case 35674:return ks;case 35675:return As;case 35676:return js;case 5124:case 35670:return Ms;case 35667:case 35671:return Ns;case 35668:case 35672:return Ps;case 35669:case 35673:return Fs;case 5125:return Is;case 36294:return Ls;case 36295:return Rs;case 36296:return zs;case 35678:case 36198:case 36298:case 36306:case 35682:return Bs;case 35679:case 36299:case 36307:return Vs;case 35680:case 36300:case 36308:case 36293:return Hs;case 36289:case 36303:case 36311:case 36292:return Us}}var Gs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ws(t.type)}},Ks=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ws(t.type)}},qs=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Js=/(\w+)(\])?(\[|\.)?/g;function Ys(e,t){e.seq.push(t),e.map[t.id]=t}function Xs(e,t,n){let r=e.name,i=r.length;for(Js.lastIndex=0;;){let a=Js.exec(r),o=Js.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ys(n,l===void 0?new Gs(s,e,t):new Ks(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new qs(s),Ys(n,e)),n=e}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Xs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Qs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var $s=37297,ec=0;function tc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var nc=new V;function rc(e){Ut._getMatrix(nc,Ut.workingColorSpace,e);let t=`mat3( ${nc.elements.map(e=>e.toFixed(4))} )`;switch(Ut.getTransfer(e)){case Ke:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ic(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+tc(e.getShaderSource(t),r)}return i}function ac(e,t){let n=rc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var oc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function sc(e,t){let n=oc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var cc=new B;function lc(){return Ut.getLuminanceCoefficients(cc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${cc.x.toFixed(4)}, ${cc.y.toFixed(4)}, ${cc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function uc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(pc).join(`
`)}function dc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function fc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function pc(e){return e!==``}function mc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var gc=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(e){return e.replace(gc,yc)}var vc=new Map;function yc(e,t){let n=U[t];if(n===void 0){let e=vc.get(t);if(e!==void 0)n=U[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return _c(n)}var bc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(e){return e.replace(bc,Sc)}function Sc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Cc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var wc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Tc(e){return wc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ec={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Dc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ec[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Oc={302:`ENVMAP_MODE_REFRACTION`};function kc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Oc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ac={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function jc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ac[e.combine]||`ENVMAP_BLENDING_NONE`}function Mc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Nc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Tc(n),l=Dc(n),u=kc(n),d=jc(n),f=Mc(n),p=uc(n),m=dc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(pc).join(`
`),_.length>0&&(_+=`
`)):(g=[Cc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(pc).join(`
`),_=[Cc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:U.tonemapping_pars_fragment,n.toneMapping===0?``:sc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,U.colorspace_pars_fragment,ac(`linearToOutputTexel`,n.outputColorSpace),lc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(pc).join(`
`)),o=_c(o),o=mc(o,n),o=hc(o,n),s=_c(s),s=mc(s,n),s=hc(s,n),o=xc(o),s=xc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Qs(i,i.VERTEX_SHADER,y),S=Qs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ic(i,x,`vertex`),n=ic(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Zs(i,h),T=fc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,$s)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ec++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Pc=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=Pc++,this.code=e,this.usedTimes=0}};function Lc(e){return e===1030||e===37490||e===36285}function Rc(e,t,n,r,i,a){let o=new _n,s=new Fc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=io[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=h.isInstancedMesh===!0,j=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:j,batchingColor:j&&h._colorsTexture!==null,instancing:ne,instancingColor:ne&&h.instanceColor!==null,instancingMorph:ne&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Lc(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Ut.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||j)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=io[t];n=Wi.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Nc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function zc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Bc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Hc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Bc),r.length>1&&r.sort(t||Vc),i.length>1&&i.sort(t||Vc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Uc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Hc,e.set(t,[i])):n>=r.length?(i=new Hc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Gc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Kc=0;function qc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Jc(e){let t=new Wc,n=Gc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new on,o=new on;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(qc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Kc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Yc(e){let t=new Jc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Xc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Yc(e),t.set(n,[a])):r>=i.length?(a=new Yc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$c=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],el=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],tl=new on,nl=new B,rl=new B;function il(e,t,n){let r=new Ci,i=new z,a=new z,o=new en,c=new Xi,l=new Zi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Zc,fragmentShader:Qc}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Lr;g.setAttribute(`position`,new Sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new si(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let l=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let l=0,d=t.length;l<d;l++){let d=t[l],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=_,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new nn(i.x,i.y,{format:ne,type:b,minFilter:u,magFilter:u,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Mi(i.x,i.y,y),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=k,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s}else d.isPointLight?(p.map=new Fo(i.x),p.map.depthTexture=new Ni(i.x,v)):(p.map=new nn(i.x,i.y),p.map.depthTexture=new Mi(i.x,i.y,v)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=k,this.type===1?(p.map.depthTexture.compareFunction=_?518:515,p.map.depthTexture.minFilter=u,p.map.depthTexture.magFilter=u):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==i.x||p.map.height!==i.y)&&p.map.setSize(i.x,i.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,c);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),nl.setFromMatrixPosition(d.matrixWorld),e.position.copy(nl),rl.copy(e.position),rl.add($c[t]),e.up.copy(el[t]),e.lookAt(rl),e.updateMatrixWorld(),n.makeTranslation(-nl.x,-nl.y,-nl.z),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}r=p.getFrustum(t),T(n,c,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(l,d,p)};function C(n,r){let a=t.update(_);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new nn(i.x,i.y,{format:ne,type:b}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,_,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,_,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function al(e,t){function n(){let t=!1,n=new en,r=null,i=new en(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=st[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new en().fromArray(ae),ce=new en().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+te-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function ol(e,t,n,r,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):et(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ke:Ut.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function re(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],h.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[i]:e.REPEAT,[a]:e.CLAMP_TO_EDGE,[o]:e.MIRRORED_REPEAT},he={[s]:e.NEAREST,[c]:e.NEAREST_MIPMAP_NEAREST,[l]:e.NEAREST_MIPMAP_LINEAR,[u]:e.LINEAR,[d]:e.LINEAR_MIPMAP_NEAREST,[f]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,i){if(i.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[i.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||r.get(i).__currentAnisotropy){let a=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,p.getMaxAnisotropy())),r.get(i).__currentAnisotropy=i.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ue(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,i,a){let o=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(o=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(o=e.TEXTURE_3D);let s=ve(t,i),c=i.source;n.bindTexture(o,t.__webglTexture,e.TEXTURE0+a);let l=r.get(c);if(c.version!==l.__version||s===!0){if(n.activeTexture(e.TEXTURE0+a),!(typeof ImageBitmap<`u`&&i.image instanceof ImageBitmap)){let t=Ut.getPrimaries(Ut.workingColorSpace),r=i.colorSpace===``?null:Ut.getPrimaries(i.colorSpace),a=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment);let t=T(i.image,!1,p.maxTextureSize);t=Fe(i,t);let r=m.convert(i.format,i.colorSpace),u=m.convert(i.type),d=k(i.internalFormat,r,u,i.normalized,i.colorSpace,i.isVideoTexture);_e(o,i);let f,h=i.mipmaps,g=i.isVideoTexture!==!0,_=l.__version===void 0||s===!0,v=c.dataReady,y=te(i,t);if(i.isDepthTexture)d=ee(i.format===A,i.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,null));else if(i.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data);i.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&be(i,t,r,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,r,u,t.data)}else if(i.isCompressedTexture){if(i.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let a=0,o=h.length;a<o;a++)if(f=h[a],i.format!==1023){if(r!==null){if(g){if(v){if(i.layerUpdates.size>0){let t=eo(f.width,f.height,i.format,i.type);for(let o of i.layerUpdates){let i=f.data.subarray(o*t/f.data.BYTES_PER_ELEMENT,(o+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,f.width,f.height,1,r,i)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,f.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,f.width,f.height,t.depth,r,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,d,f.width,f.height,t.depth,0,r,u,f.data);i.layerUpdates.size>0&&i.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,a=h.length;t<a;t++)f=h[t],i.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,r,u,f.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,r,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}}else if(i.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v){if(i.layerUpdates.size>0){let a=eo(t.width,t.height,i.format,i.type);for(let o of i.layerUpdates){let i=t.data.subarray(o*a/t.data.BYTES_PER_ELEMENT,(o+1)*a/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,r,u,i)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,r,u,t.data)}else if(i.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,r,u,t.data);else if(i.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,i,a,0,r,u,null),i>>=1,a>>=1}}}else if(i.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(i),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,u,f):n.texImage2D(e.TEXTURE_2D,t,d,r,u,f);i.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,r,u,t);E(i)&&D(o),l.__version=c.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Se(t,i,a){if(i.image.length!==6)return;let o=ve(t,i),s=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+a);let c=r.get(s);if(s.version!==c.__version||o===!0){n.activeTexture(e.TEXTURE0+a);let t=Ut.getPrimaries(Ut.workingColorSpace),r=i.colorSpace===``?null:Ut.getPrimaries(i.colorSpace),l=i.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=i.isCompressedTexture||i.image[0].isCompressedTexture,d=i.image[0]&&i.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(i.image[e],!0,p.maxCubemapSize):f[e]=d?i.image[e].image:i.image[e],f[e]=Fe(i,f[e]);let h=f[0],g=m.convert(i.format,i.colorSpace),_=m.convert(i.type),v=k(i.internalFormat,g,_,i.normalized,i.colorSpace),y=i.isVideoTexture!==!0,b=c.__version===void 0||o===!0,x=s.dataReady,S=te(i,h);_e(e.TEXTURE_CUBE_MAP,i);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let a=C[r];i.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,g,_,a.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,a.width,a.height,0,a.data)}}}else{if(C=i.mipmaps,y&&b){C.length>0&&S++;let t=Ie(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(i)&&D(e.TEXTURE_CUBE_MAP),c.__version=s.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function Ce(t,i,a,o,s,c){let l=m.convert(a.format,a.colorSpace),u=m.convert(a.type),d=k(a.internalFormat,l,u,a.normalized,a.colorSpace),f=r.get(i),p=r.get(a);if(p.__renderTarget=i,!f.__hasExternalTextures){let t=Math.max(1,i.width>>c),r=Math.max(1,i.height>>c);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?n.texImage3D(s,c,d,t,r,i.depth,0,l,u,null):n.texImage2D(s,c,d,t,r,0,l,u,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,o,s,p.__webglTexture,0,Ne(i)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,o,s,p.__webglTexture,c),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.normalized,a.colorSpace);Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=r.get(i.depthTexture);if(s.__renderTarget=i,(!s.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),o){if(s.__webglInit===void 0&&(s.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ne)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=m.convert(i.depthTexture.format),r=m.convert(i.depthTexture.type),a;i.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let c=s.__webglTexture,l=Ne(i),u=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,d=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else if(i.depthTexture.format===1027)Pe(i)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,d,u,c,0,l):e.framebufferTexture2D(e.FRAMEBUFFER,d,u,c,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,a=r.get(t),o=r.get(i);t.addEventListener(`dispose`,j);let s=t.textures,c=t.isWebGLCubeRenderTarget===!0,l=s.length>1;if(l||(o.__webglTexture===void 0&&(o.__webglTexture=e.createTexture()),o.__version=i.version,h.memory.textures++),c){a.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)a.__webglFramebuffer[t][n]=e.createFramebuffer()}else a.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){a.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)a.__webglFramebuffer[t]=e.createFramebuffer()}else a.__webglFramebuffer=e.createFramebuffer();if(l)for(let t=0,n=s.length;t<n;t++){let n=r.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Pe(t)===!1){a.__webglMultisampledFramebuffer=e.createFramebuffer(),a.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,a.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let r=s[n];a.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,a.__webglColorRenderbuffer[n]);let i=m.convert(r.format,r.colorSpace),o=m.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,a.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(a.__webglDepthRenderbuffer=e.createRenderbuffer(),we(a.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(c){n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(a.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(l){for(let i=0,o=s.length;i<o;i++){let o=s[i],c=r.get(o),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(l,c.__webglTexture),_e(l,o),Ce(a.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0+i,l,0),E(o)&&D(l)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,o.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(a.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(a.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=r.get(t),u=i.length>1;if(u)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(c),je.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ut.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sl(e,t){function n(n,r=``){let i,a=Ut.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var cl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ll=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qi({vertexShader:cl,fragmentShader:ll,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends ct{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,m=null,h=typeof XRWebGLBinding<`u`,g=new ul,_={},y=t.getContextAttributes(),b=null,x=null,S=[],w=[],T=new z,E=null,D=null,ee=new Aa;ee.viewport=new en;let te=new Aa;te.viewport=new en;let ne=[ee,te],j=new za,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=S[e];return t===void 0&&(t=new In,S[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=S[e];return t===void 0&&(t=new In,S[e]=t),t.getGripSpace()},this.getHand=function(e){let t=S[e];return t===void 0&&(t=new In,S[e]=t),t.getHandSpace()};function ie(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=S[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<S.length;e++){let t=w[e];t!==null&&(w[e]=null,S[e].disconnect(t))}re=null,M=null,g.reset();for(let e in _)delete _[e];if(e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),D!==null){let e=D.camera;e.fov=D.fov,e.zoom=D.zoom,e.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?A:k,a=y.stencil?C:v);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new nn(d.textureWidth,d.textureHeight,{format:O,type:p,depthTexture:new Mi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new nn(f.framebufferWidth,f.framebufferHeight,{format:O,type:p,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,S[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<S.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=S[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=te.near=ee.near=t,j.far=te.far=ee.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,ee.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ue(j,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(j,ee,te):j.projectionMatrix.copy(ee.projectionMatrix),D===null&&e.isPerspectiveCamera&&(D={camera:e,fov:e.fov,zoom:e.zoom}),N(e,j,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ft*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return _[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=ne[n];o===void 0&&(o=new Aa,o.layers.enable(n),o.viewport=new en,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=_[n];e||(e=new Pi,_[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<S.length;e++){let t=w[e],n=S[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new no;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},fl=new on,pl=new V;pl.set(-1,0,0,0,1,0,0,0,1);function ml(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ui(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(fl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(pl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var gl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_l=null;function vl(){return _l===null&&(_l=new ui(gl,16,16,ne,b),_l.name=`DFG_LUT`,_l.minFilter=u,_l.magFilter=u,_l.wrapS=a,_l.wrapT=a,_l.generateMipmaps=!1,_l.needsUpdate=!0),_l}var yl=class{constructor(e={}){let{canvas:t=tt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:m=p}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);h=n.getContextAttributes().alpha}else h=a;let _=m,y=new Set([re,j,te]),w=new Set([p,v,g,C,x,S]),T=new Uint32Array(4),E=new Int32Array(4),D=new B,O=null,k=null,A=[],ee=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=We;let le=0,ue=0,N=null,de=-1,fe=null,pe=new en,me=new en,he=null,ge=new H(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new en(0,0,ve,ye),we=new en(0,0,ve,ye),Te=!1,Ee=new Ci,De=!1,Oe=!1,ke=new on,Ae=new B,je=new en,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,ze,Be,Ve,He,Ue,Ge,Ke,qe,Je,Ye,Xe,Qe,$e,et,nt,it,at,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ct(){Ie=new Lo(P),Ie.init(),it=new sl(P,Ie),Le=new fo(P,Ie,e,it),F=new al(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new Bo(P),I=new zc,ze=new ol(P,Ie,F,I,Le,it,Re),Be=new Io(M),Ve=new ro(P),at=new lo(P,Ve),He=new Ro(P,Ve,Re,at),Ue=new Ho(P,He,Ve,at,Re),$e=new Vo(P,Le,ze),Ye=new po(I),Ge=new Rc(M,Be,Ie,Le,at,Ye),Ke=new ml(M,I),qe=new Uc,Je=new Xc(Ie),Qe=new co(M,Be,F,Ue,h,s),Xe=new il(M,Ue,Le),st=new hl(P,Re,Le,F),et=new uo(P,Ie,Re),nt=new zo(P,Ie,Re),Re.programs=Ge.programs,M.capabilities=Le,M.extensions=Ie,M.properties=I,M.renderLists=qe,M.shadowMap=Xe,M.state=F,M.info=Re}_!==1009&&(ne=new Wo(_,t.width,t.height,o,r,i));let lt=new dl(M,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){if(lt.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(_===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=y.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Qe.dispose(),qe.dispose(),Je.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),at.dispose(),st.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,yt),lt.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),rt(`WebGLRenderer: Context Lost.`),ie=!0}function dt(){rt(`WebGLRenderer: Context Restored.`),ie=!1;let e=Re.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;ct(),Re.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=Ve.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),De===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),k=Je.get(n),k.init(t),ee.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),ae!==null&&ae.updateLights(k.state.lightsArray),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),De===!0&&Ye.setGlobalState(this.clippingPlanes,t),ae!==null&&Xe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=ee.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new no;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,lt.setAnimationLoop(e),e===null?xt.stop():xt.start()},lt.addEventListener(`sessionstart`,yt),lt.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=ne!==null&&(N===null||n)&&ne.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),k=Je.get(e,ee.length),k.init(t),k.state.textureUnits=ze.getTextureUnits(),ee.push(k),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,Ze,t.reversedDepth),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),O=qe.get(e,A.length),O.init(),A.push(O),lt.enabled===!0&&lt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(k.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Ne=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ne&&Qe.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Xe.render(i,e,t),De===!0&&Ye.endShadows(),(r&&ne.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&Qe.render(e),Ct(O,e,t)}N!==null&&ue===0&&(ze.updateMultisampleRenderTarget(N),ze.updateRenderTargetMipmap(N)),r&&ne.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),at.resetDefaultState(),de=-1,fe=null,ee.pop(),ee.length>0?(k=ee[ee.length-1],ze.setTextureUnits(k.state.textureUnits),De===!0&&Ye.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,ae!==null&&ae.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ue.update(e),a=e.material;a.visible&&O.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,je.z,s,t)}}else a.visible&&O.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),De===!0&&Ye.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new nn(1,1,{generateMipmaps:!0,type:e?b:p,minFilter:f,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&Qe.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),De===!0&&Ye.setGlobalState(M.clippingPlanes,r),Tt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),M.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ge.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Zs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ut.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=k.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=At(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,ze),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=vl()),C){if(T.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&Ke.refreshFogUniforms(E,a),Ke.refreshMaterialUniforms(E,r,be,ye,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Zs.upload(P,Ot(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Zs.upload(P,Ot(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,x),st.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ot(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}};function bl(e,t=255){let n=e.replace(`#`,``);return[parseInt(n.slice(0,2),16),parseInt(n.slice(2,4),16),parseInt(n.slice(4,6),16),t]}function xl(e,t,n){return{name:e,outline:bl(t),colors:n.map(e=>bl(e))}}bl(`#120d1a`);var G={ink:xl(`ink`,`#0a0710`,[`#120d1a`,`#1d1628`,`#2b2238`]),dusk:xl(`dusk`,`#15101f`,[`#2c2440`,`#463a5e`,`#6b5a82`,`#9a86a8`,`#c9b8c8`]),stone:xl(`stone`,`#15121d`,[`#262233`,`#3b3649`,`#565166`,`#787486`,`#9f9ba7`,`#c9c4c4`]),stoneWarm:xl(`stoneWarm`,`#1a1414`,[`#2e2626`,`#4a3f3c`,`#6a5d56`,`#8e8074`,`#b3a594`,`#d8cbb4`]),moss:xl(`moss`,`#0f1a12`,[`#1b2a1f`,`#2a4430`,`#3e6240`,`#5d8448`,`#8aa856`,`#b8c86a`]),grass:xl(`grass`,`#101c14`,[`#1c2e24`,`#2c4a30`,`#406838`,`#5a8840`,`#7ea84c`,`#a8c860`]),leafWarm:xl(`leafWarm`,`#200c10`,[`#3a1818`,`#6a2420`,`#9c3a24`,`#cc5c2c`,`#e8883c`,`#f8b858`]),leafRed:xl(`leafRed`,`#1e0810`,[`#2e0e18`,`#521626`,`#86202c`,`#b23630`,`#d85a3a`,`#f08c4c`]),pine:xl(`pine`,`#081214`,[`#0f1f22`,`#173236`,`#22484a`,`#316460`,`#4a8478`,`#6ea890`]),wood:xl(`wood`,`#120a08`,[`#1e120e`,`#34201a`,`#523226`,`#744a32`,`#986a46`,`#bc9060`]),woodDark:xl(`woodDark`,`#0c0708`,[`#170e0e`,`#261716`,`#3a2420`,`#523428`,`#6c4834`]),plaster:xl(`plaster`,`#241c22`,[`#3a3238`,`#6a5e62`,`#9a8e8a`,`#c4b8ae`,`#e6dccc`,`#f6efe2`]),roof:xl(`roof`,`#0a0b12`,[`#14161f`,`#1f2330`,`#2e3446`,`#444d62`,`#62708a`,`#8a98ae`]),earth:xl(`earth`,`#150d0a`,[`#231812`,`#3c281c`,`#5a3e2a`,`#7c5a3c`,`#a07c54`,`#c4a070`]),sand:xl(`sand`,`#2a2018`,[`#4a3e34`,`#7a6a58`,`#a8967c`,`#d0c0a0`,`#ece0c4`]),water:xl(`water`,`#060e18`,[`#0c1a2a`,`#12304a`,`#1c4a6a`,`#2c6a8a`,`#4a90a8`,`#8cc4d0`,`#d8f0f0`]),teal:xl(`teal`,`#08171a`,[`#0f2327`,`#173a3e`,`#22595a`,`#327b74`,`#4f9e8c`,`#82c4a8`]),amber:xl(`amber`,`#260e0a`,[`#3d1a12`,`#7a2e1b`,`#b8512a`,`#e0833a`,`#f7b85a`,`#ffe29a`]),linen:xl(`linen`,`#1e1820`,[`#2e2830`,`#5e5458`,`#8e8288`,`#bcb0a8`,`#e2d8c8`,`#f8f0e4`]),skin:xl(`skin`,`#2a1414`,[`#3a1f1c`,`#6e3c30`,`#a8664e`,`#d8966e`,`#f4c49c`]),hair:xl(`hair`,`#08050a`,[`#120c10`,`#261818`,`#3e2826`,`#5a3c34`]),steel:xl(`steel`,`#0c0f16`,[`#161a24`,`#343c4e`,`#5e6a80`,`#95a3b8`,`#d0dcea`,`#ffffff`]),brass:xl(`brass`,`#1a0f06`,[`#2a1a0c`,`#5e3e16`,`#946426`,`#c8903a`,`#ecc060`,`#fff0a8`]),indigo:xl(`indigo`,`#08080f`,[`#10101c`,`#1e2036`,`#2e3252`,`#444a70`,`#5e6690`]),plum:xl(`plum`,`#120812`,[`#1e1020`,`#3a1e38`,`#5a2e52`,`#7e4470`,`#a8628e`]),mustard:xl(`mustard`,`#1e1408`,[`#3a2a10`,`#6e5018`,`#a07a24`,`#cca63a`,`#eed070`]),whiteHair:xl(`whiteHair`,`#1e1a24`,[`#4a4450`,`#8a8290`,`#bab2bc`,`#e4dee6`,`#fbf8fb`]),hide:xl(`hide`,`#100806`,[`#1e1210`,`#3a221a`,`#5a3624`,`#7e4e30`,`#a26c44`]),bone:xl(`bone`,`#1c1812`,[`#3a3228`,`#7a6c58`,`#b8a88a`,`#e6dcc0`,`#fffaf0`]),ember:xl(`ember`,`#2a0a04`,[`#5a1a08`,`#c04a10`,`#ff8a2a`,`#ffc060`,`#fff0c8`]),cold:xl(`cold`,`#04121e`,[`#0a2a40`,`#1a5a80`,`#3aa0c8`,`#7ae0f0`,`#d8ffff`]),mist:xl(`mist`,`#0c1520`,[`#1c2a3a`,`#2e4658`,`#4a6a80`,`#7a9aac`,`#b0ccd8`,`#e0f0f4`]),rune:xl(`rune`,`#050a18`,[`#102040`,`#2050a0`,`#40a0ff`,`#a0e0ff`,`#e8f8ff`]),danger:xl(`danger`,`#1c0406`,[`#3a0c10`,`#8a1a1a`,`#d83a2a`,`#ff7a4a`,`#ffc090`]),rose:xl(`rose`,`#1e0a10`,[`#3a1422`,`#6a2438`,`#a8445a`,`#d8707a`,`#f4a8a8`])};function Sl(e){return`rgb(${e[0]}, ${e[1]}, ${e[2]})`}var Cl=[`down`,`side`,`up`],wl={down:0,side:Math.PI/2,up:Math.PI};function Tl(e,t,n,r,i,a,o=16){let s=a.reduce((e,t)=>e+t.frames.length,0),c=Math.min(o,s),l=Math.ceil(s/c),u=c*t,d=l*n,f=new Uint8Array(u*d*4),p=new Uint8Array(u*d*4);for(let e=0;e<u*d;e++)p[e*4]=128,p[e*4+1]=128,p[e*4+2]=255;let m={},h=0;for(let e of a){m[e.key]={start:h,count:e.frames.length,durations:e.durations,loop:e.loop};for(let r of e.frames){let e=h%c*t,i=Math.floor(h/c)*n;for(let a=0;a<n;a++)for(let n=0;n<t;n++){let t=(a*r.w+n)*4,o=((i+a)*u+e+n)*4;for(let e=0;e<4;e++)f[o+e]=r.color[t+e],p[o+e]=r.normal[t+e]}h++}}return El(f,u,d,3),Dl(p,f,u,d),{name:e,frameW:t,frameH:n,cols:c,rows:l,width:u,height:d,color:f,normal:p,pivotX:r,pivotY:i,anims:m,frameCount:s}}function El(e,t,n,r){let i=new Uint8Array(t*n);for(let r=0;r<t*n;r++)i[r]=+(e[r*4+3]>0);for(let a=0;a<r;a++){let r=new Uint8Array(i);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=a*t+o;if(i[s])continue;let c=0,l=0,u=0,d=0;for(let r=-1;r<=1;r++)for(let s=-1;s<=1;s++){let f=o+s,p=a+r;if(f<0||p<0||f>=t||p>=n)continue;let m=p*t+f;i[m]&&(c+=e[m*4],l+=e[m*4+1],u+=e[m*4+2],d++)}d>0&&(e[s*4]=Math.round(c/d),e[s*4+1]=Math.round(l/d),e[s*4+2]=Math.round(u/d),r[s]=1)}i.set(r)}}function Dl(e,t,n,r){for(let i=0;i<r;i++)for(let a=0;a<n;a++){let o=i*n+a;if(!(t[o*4+3]>0))for(let s=1;s<=2;s++){let c=-1;for(let e=-s;e<=s&&c<0;e++)for(let o=-s;o<=s;o++){let s=a+o,l=i+e;if(s<0||l<0||s>=n||l>=r)continue;let u=l*n+s;if(t[u*4+3]>0){c=u;break}}if(c>=0){e[o*4]=e[c*4],e[o*4+1]=e[c*4+1],e[o*4+2]=e[c*4+2];break}}}}var K=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ol=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],q=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],kl=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Al=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],jl=e=>Math.hypot(e[0],e[1],e[2]),Ml=e=>{let t=jl(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},Nl=(e,t,n)=>e<t?t:e>n?n:e;function Pl(e,t,n,r,i){let a=Ol(t,e),o=jl(a),s=Math.abs(n-r)+.01,c=n+r-.01;o=Nl(o,s,c);let l=Ml(a),u=Nl((n*n+o*o-r*r)/(2*n*o),-1,1),d=Math.sqrt(1-u*u),f=Ol(i,q(l,kl(i,l)));return jl(f)<1e-4&&(f=[0,0,1]),f=Ml(f),K(e,K(q(l,n*u),q(f,n*d)))}var Fl=()=>[1,0,0,0,1,0,0,0,1];function Il(e){let t=Math.cos(e),n=Math.sin(e);return[1,0,0,0,t,-n,0,n,t]}function Ll(e){let t=Math.cos(e),n=Math.sin(e);return[t,0,n,0,1,0,-n,0,t]}function Rl(e){let t=Math.cos(e),n=Math.sin(e);return[t,-n,0,n,t,0,0,0,1]}function zl(e,t){let n=Array(9);for(let r=0;r<3;r++)for(let i=0;i<3;i++)n[r*3+i]=e[r*3]*t[i]+e[r*3+1]*t[3+i]+e[r*3+2]*t[6+i];return n}function J(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}function Bl(e){return[J(e,[1,0,0]),J(e,[0,1,0]),J(e,[0,0,1])]}function Vl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Hl=class{next;constructor(e){this.next=Vl(e)}float(){return this.next()}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(e+(t-e+1)*this.next())}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)%e.length]}};function Ul(e,t,n=0){let r=Math.imul(e|0,374761393)+Math.imul(t|0,668265263)+Math.imul(n|0,2147483647)|0;return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function Wl(e){return e*e*(3-2*e)}function Gl(e,t,n,r=0,i=0){let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=(e,t)=>t>0?(e%t+t)%t:e,u=Ul(l(a,r),l(o,i),n),d=Ul(l(a+1,r),l(o,i),n),f=Ul(l(a,r),l(o+1,i),n),p=Ul(l(a+1,r),l(o+1,i),n),m=Wl(s),h=Wl(c);return u+(d-u)*m+(f-u)*h+(u-d-f+p)*m*h}function Kl(e,t,n,r){let i=Math.floor(n),a=Wl(n-i),o=Gl(e+i*17.3,t-i*9.1,r);return o+(Gl(e+(i+1)*17.3,t-(i+1)*9.1,r)-o)*a}function ql(e,t,n,r,i=.85){let a=Math.floor(e),o=Math.floor(t),s=1e9,c=1e9,l=0,u=0,d=0;for(let f=-1;f<=1;f++)for(let p=-1;p<=1;p++){let m=a+p,h=o+f,g=(m%n+n)%n,_=(h%n+n)%n,v=m+.5+(Ul(g,_,r)-.5)*i,y=h+.5+(Ul(g,_,r+77)-.5)*i,b=v-e,x=y-t,S=Math.sqrt(b*b+x*x);S<s?(c=s,s=S,l=g+_*n,u=v,d=y):S<c&&(c=S)}return{d1:s,d2:c,id:l,cx:u,cy:d}}var Jl=Ml([-.55,.7,.55]),Yl=Ml([-.62,-.78,0]),Xl=.62,Zl=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Ql=class{w;h;ox;oy;m=new Float64Array(9);t=[0,0,0];depth;matId;nrm;part;bias;fixed;emis;mats=[];matIndex=new Map;partCounter=1;constructor(e,t,n,r){this.w=e,this.h=t,this.ox=n,this.oy=r;let i=e*t;this.depth=new Float32Array(i),this.matId=new Int16Array(i),this.nrm=new Float32Array(i*3),this.part=new Int32Array(i),this.bias=new Int8Array(i),this.fixed=new Int8Array(i),this.emis=new Float32Array(i),this.clear(),this.setView(0,.38)}clear(){this.depth.fill(-1e9),this.matId.fill(-1),this.nrm.fill(0),this.part.fill(0),this.bias.fill(0),this.fixed.fill(-1),this.emis.fill(0),this.partCounter=1}setView(e,t,n=0,r=[0,0],i=[0,0]){let a=Math.cos(e),o=Math.sin(e),s=Math.cos(t),c=Math.sin(t),l=Math.cos(n),u=Math.sin(n),d=[a,0,o,0,1,0,-o,0,a],f=[1,0,0,0,s,-c,0,c,s],p=$l([l,-u,0,u,l,0,0,0,1],$l(f,d));for(let e=0;e<9;e++)this.m[e]=p[e];let m=r[0],h=r[1];this.t=[m-(l*m-u*h)+i[0],h-(u*m+l*h)+i[1],0]}toView(e){let t=this.m;return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+this.t[0],t[3]*e[0]+t[4]*e[1]+t[5]*e[2]+this.t[1],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]+this.t[2]]}dirToView(e){let t=this.m;return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]}fromView(e){let t=this.m,n=e[0]-this.t[0],r=e[1]-this.t[1],i=e[2]-this.t[2];return[t[0]*n+t[3]*r+t[6]*i,t[1]*n+t[4]*r+t[7]*i,t[2]*n+t[5]*r+t[8]*i]}dirFromView(e){let t=this.m;return[t[0]*e[0]+t[3]*e[1]+t[6]*e[2],t[1]*e[0]+t[4]*e[1]+t[7]*e[2],t[2]*e[0]+t[5]*e[1]+t[8]*e[2]]}newPart(){return this.partCounter++}idOf(e){let t=this.matIndex.get(e);return t===void 0&&(t=this.mats.length,this.mats.push(e),this.matIndex.set(e,t)),t}pixelToView(e,t){return[e+.5-this.ox,this.oy-(t+.5)]}viewBox(e,t,n){return[Math.max(0,Math.floor(e+this.ox-n-1)),Math.min(this.w-1,Math.ceil(e+this.ox+n+1)),Math.max(0,Math.floor(this.oy-t-n-1)),Math.min(this.h-1,Math.ceil(this.oy-t+n+1))]}write(e,t,n,r,i,a,o,s,c,l=0){let u=t*this.w+e;if(n<=this.depth[u])return;let d=i,f=(o?.bias??0)+l;if(s){if(d.coverage){let n=d.coverage(s);if(n<1&&n<=(Zl[(t&3)*4+(e&3)]+.5)/16)return}if(d.alt){let e=d.alt;(e.upOnly===void 0||c!==null&&c[1]>=e.upOnly)&&Kl(s[0]*e.scale,s[1]*e.scale,s[2]*e.scale,e.seed)>e.threshold&&(d=e.mat)}if(d.speckle){let e=d.speckle,t=Kl(s[0]*e.scale+3.1,s[1]*e.scale,s[2]*e.scale,e.seed);t>1-e.amount?f+=1:t<e.amount&&--f}}this.depth[u]=n,this.matId[u]=this.idOf(d),this.nrm[u*3]=r[0],this.nrm[u*3+1]=r[1],this.nrm[u*3+2]=r[2],this.part[u]=a,this.bias[u]=f,this.fixed[u]=o?.tone??-1,this.emis[u]=o?.emissive??d.emissive??0}sphere(e,t,n,r){return this.ellipsoid(e,[t,t,t],n,r)}ellipsoid(e,t,n,r){let i=r?.part??this.newPart(),a=r?.axes??[[1,0,0],[0,1,0],[0,0,1]],o=this.toView(e),s=Math.max(t[0],t[1],t[2]),[c,l,u,d]=this.viewBox(o[0],o[1],s),f=this.dirFromView([0,0,-1]),p=[kl(f,a[0])/t[0],kl(f,a[1])/t[1],kl(f,a[2])/t[2]],m=kl(p,p);for(let o=u;o<=d;o++)for(let s=c;s<=l;s++){let[c,l]=this.pixelToView(s,o),u=Ol(this.fromView([c,l,1e3]),e),d=[kl(u,a[0])/t[0],kl(u,a[1])/t[1],kl(u,a[2])/t[2]],f=2*kl(d,p),h=kl(d,d)-1,g=f*f-4*m*h;if(g<0)continue;let _=Math.sqrt(g),v=(-f-_)/(2*m),y=[d[0]+p[0]*v,d[1]+p[1]*v,d[2]+p[2]*v],b=n,x=1,S=0;if(r?.opening&&r.opening(y)){if(v=(-f+_)/(2*m),y=[d[0]+p[0]*v,d[1]+p[1]*v,d[2]+p[2]*v],r.opening(y))continue;b=r.innerMat??n,x=-1}else r?.rim&&(S=r.rim(y));let C=[y[0]/t[0],y[1]/t[1],y[2]/t[2]],w=Ml([a[0][0]*C[0]+a[1][0]*C[1]+a[2][0]*C[2],a[0][1]*C[0]+a[1][1]*C[1]+a[2][1]*C[2],a[0][2]*C[0]+a[1][2]*C[1]+a[2][2]*C[2]]);x<0&&(w=[-w[0],-w[1],-w[2]]);let T=this.dirToView(w),E=1e3-v,D=this.fromView([c,l,E]);this.write(s,o,E,T,b,i,r,D,w,S)}return i}capsule(e,t,n,r,i,a){let o=a?.part??this.newPart(),s=this.toView(e),c=this.toView(t),l=Math.min(s[0]-n,c[0]-r),u=Math.max(s[0]+n,c[0]+r),d=Math.min(s[1]-n,c[1]-r),f=Math.max(s[1]+n,c[1]+r),p=Math.max(0,Math.floor(l+this.ox-1)),m=Math.min(this.w-1,Math.ceil(u+this.ox+1)),h=Math.max(0,Math.floor(this.oy-f-1)),g=Math.min(this.h-1,Math.ceil(this.oy-d+1)),_=c[0]-s[0],v=c[1]-s[1],y=_*_+v*v;for(let e=h;e<=g;e++)for(let t=p;t<=m;t++){let[l,u]=this.pixelToView(t,e),d=y<1e-6?0:((l-s[0])*_+(u-s[1])*v)/y;d=d<0?0:d>1?1:d;let f=s[0]+_*d,p=s[1]+v*d,m=n+(r-n)*d,h=l-f,g=u-p,b=h*h+g*g;if(b>=m*m)continue;let x=Math.sqrt(m*m-b),S=s[2]+(c[2]-s[2])*d+x,C=[h/m,g/m,x/m],w=this.fromView([l,u,S]),T=this.dirFromView(C);this.write(t,e,S,C,i,o,a,w,T)}return o}box(e,t,n,r,i){let a=i?.part??this.newPart(),o=i?.bevel??.9,s=1e9,c=-1e9,l=1e9,u=-1e9;for(let r=0;r<8;r++){let i=[e[0]+n[0][0]*t[0]*(r&1?1:-1)+n[1][0]*t[1]*(r&2?1:-1)+n[2][0]*t[2]*(r&4?1:-1),e[1]+n[0][1]*t[0]*(r&1?1:-1)+n[1][1]*t[1]*(r&2?1:-1)+n[2][1]*t[2]*(r&4?1:-1),e[2]+n[0][2]*t[0]*(r&1?1:-1)+n[1][2]*t[1]*(r&2?1:-1)+n[2][2]*t[2]*(r&4?1:-1)],a=this.toView(i);s=Math.min(s,a[0]),c=Math.max(c,a[0]),l=Math.min(l,a[1]),u=Math.max(u,a[1])}let d=Math.max(0,Math.floor(s+this.ox-1)),f=Math.min(this.w-1,Math.ceil(c+this.ox+1)),p=Math.max(0,Math.floor(this.oy-u-1)),m=Math.min(this.h-1,Math.ceil(this.oy-l+1)),h=this.dirFromView([0,0,-1]),g=[kl(h,n[0]),kl(h,n[1]),kl(h,n[2])];for(let s=p;s<=m;s++)for(let c=d;c<=f;c++){let[l,u]=this.pixelToView(c,s),d=Ol(this.fromView([l,u,1e3]),e),f=[kl(d,n[0]),kl(d,n[1]),kl(d,n[2])],p=-1e9,m=1e9,h=0,_=!1;for(let e=0;e<3;e++){if(Math.abs(g[e])<1e-9){if(Math.abs(f[e])>t[e]){_=!0;break}continue}let n=(-t[e]-f[e])/g[e],r=(t[e]-f[e])/g[e];if(n>r){let e=n;n=r,r=e}n>p&&(p=n,h=e),r<m&&(m=r)}if(_||p>m)continue;let v=[f[0]+g[0]*p,f[1]+g[1]*p,f[2]+g[2]*p],y=g[h]>0?-1:1,b=[n[h][0]*y,n[h][1]*y,n[h][2]*y],x=this.dirToView(b),S=0,C=(h+1)%3,w=(h+2)%3,T=t[C]-Math.abs(v[C]),E=t[w]-Math.abs(v[w]);if(Math.min(T,E)<o){let e=T<E?C:w,t=[n[e][0]*Math.sign(v[e]),n[e][1]*Math.sign(v[e]),n[e][2]*Math.sign(v[e])],r=this.dirToView(t),i=r[0]*Jl[0]+r[1]*Jl[1];S=i>.15?1:i<-.15?-1:0}let D=1e3-p,O=this.fromView([l,u,D]);this.write(c,s,D,x,r,a,i,O,b,S)}return a}poly(e,t,n){let r=n?.part??this.newPart(),i=e.map(e=>this.toView(e)),a=n?.normals?.map(e=>this.dirToView(Ml(e)));for(let e=1;e+1<i.length;e++)this.tri(i[0],i[e],i[e+1],a?[a[0],a[e],a[e+1]]:null,t,r,n);return r}cloth(e,t,n){let r=n?.part??this.newPart();for(let i=0;i+1<e.length;i++)for(let a=0;a+1<e[i].length;a++){let o=e[i][a],s=e[i][a+1],c=e[i+1][a],l=e[i+1][a+1],u=n?.gridNormals,d=u?[u[i][a],u[i][a+1],u[i+1][a+1]]:void 0,f=u?[u[i][a],u[i+1][a+1],u[i+1][a]]:void 0;this.poly([o,s,l],t,{...n,part:r,normals:d}),this.poly([o,l,c],t,{...n,part:r,normals:f})}return r}tri(e,t,n,r,i,a,o){let s=Ml(Al(Ol(t,e),Ol(n,e))),c=!1;s[2]<0&&(s=[-s[0],-s[1],-s[2]],c=!0);let l=c&&o?.backMat?o.backMat:i,u=Math.min(e[0],t[0],n[0]),d=Math.max(e[0],t[0],n[0]),f=Math.min(e[1],t[1],n[1]),p=Math.max(e[1],t[1],n[1]),m=Math.max(0,Math.floor(u+this.ox)),h=Math.min(this.w-1,Math.ceil(d+this.ox)),g=Math.max(0,Math.floor(this.oy-p)),_=Math.min(this.h-1,Math.ceil(this.oy-f)),v=(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]);if(!(Math.abs(v)<1e-6))for(let i=g;i<=_;i++)for(let u=m;u<=h;u++){let[d,f]=this.pixelToView(u,i),p=((t[0]-d)*(n[1]-f)-(t[1]-f)*(n[0]-d))/v,m=((n[0]-d)*(e[1]-f)-(n[1]-f)*(e[0]-d))/v,h=1-p-m;if(p<-1e-6||m<-1e-6||h<-1e-6)continue;let g=p*e[2]+m*t[2]+h*n[2],_=s;if(r){let e=[p*r[0][0]+m*r[1][0]+h*r[2][0],p*r[0][1]+m*r[1][1]+h*r[2][1],p*r[0][2]+m*r[1][2]+h*r[2][2]];e=Ml(e),c&&(e=[-e[0],-e[1],-e[2]]),e[2]<.05&&(e=Ml([e[0],e[1],.05])),_=e}let y=this.fromView([d,f,g]);this.write(u,i,g,_,l,a,o,y,this.dirFromView(_))}}line(e,t,n,r){let i=r?.part??this.newPart(),a=this.toView(e),o=this.toView(t),s=r?.normal?this.dirToView(Ml(r.normal)):[0,0,1],c=Math.floor(a[0]+this.ox),l=Math.floor(this.oy-a[1]),u=Math.floor(o[0]+this.ox),d=Math.floor(this.oy-o[1]),f=Math.abs(u-c),p=-Math.abs(d-l),m=c<u?1:-1,h=l<d?1:-1,g=f+p,_=Math.max(f,-p)||1,v=0,y=r?.width??1;for(;;){let e=v/_,t=a[2]+(o[2]-a[2])*e+.2,b=(e,a)=>{if(e<0||a<0||e>=this.w||a>=this.h)return;let o=this.fromView([e+.5-this.ox,this.oy-(a+.5),t]);this.write(e,a,t,s,n,i,r,o,null)};if(b(c,l),y>1&&(f>-p?b(c,l+1):b(c+1,l)),c===u&&l===d)break;let x=2*g;x>=p&&(g+=p,c+=m),x<=f&&(g+=f,l+=h),v++}return i}dot(e,t,n){let r=this.toView(e),i=Math.floor(r[0]+this.ox),a=Math.floor(this.oy-r[1]),[o,s]=n?.size??[1,1],c=!1;for(let e=0;e<s;e++)for(let s=0;s<o;s++){let o=i+s,l=a-e;if(o<0||l<0||o>=this.w||l>=this.h)continue;let u=l*this.w+o;if(n?.surface!==!1){if(this.matId[u]<0||Math.abs(this.depth[u]-r[2])>(n?.tol??1.6))continue;let e=[this.nrm[u*3],this.nrm[u*3+1],this.nrm[u*3+2]],i=this.part[u];this.depth[u]-=.001,this.write(o,l,this.depth[u]+.002,e,t,i,n,null,null),c=!0}else this.write(o,l,r[2],[0,0,1],t,n?.part??this.newPart(),n,null,null),c=!0}return c}resolve(){let{w:e,h:t}=this,n=e*t,r=new Int16Array(n).fill(-1),i=new Int8Array(n);for(let e=0;e<n;e++){let t=this.matId[e];if(t<0)continue;let n=this.mats[t];if(this.fixed[e]>=0){r[e]=this.fixed[e],i[e]=-1;continue}let a;if(n.flat)a=1;else{let t=this.nrm[e*3],r=this.nrm[e*3+1],i=this.nrm[e*3+2],o=(t*Jl[0]+r*Jl[1]+i*Jl[2])*.5+.5+(n.bias??0)*.1;a=o<.42?0:o<.66?1:o<.87?2:3}a+=this.bias[e],i[e]=a}for(let n=0;n<t;n++)for(let r=0;r<e;r++){let a=n*e+r,o=this.matId[a];if(o<0||i[a]<0)continue;let s=this.mats[o];if(s.receive===!1||s.flat)continue;let c=this.depth[a],l=!1;for(let i=1;i<=4&&!l;i++){let o=Math.round(r+Yl[0]*i),s=Math.round(n+Yl[1]*i);if(o<0||s<0||o>=e||s>=t)break;let u=s*e+o;this.matId[u]<0||this.part[u]!==this.part[a]&&this.depth[u]>c+1.4+Xl*i&&(l=!0)}l&&--i[a]}for(let e=0;e<n;e++){let t=this.matId[e];if(t<0||i[e]===-1&&this.fixed[e]>=0)continue;let n=this.mats[t].tones,a=i[e];a<0?r[e]=Math.max(0,n[0]-1):r[e]=n[Math.min(n.length-1,a)]}let a=new Int16Array(r);for(let n=1;n<t-1;n++)for(let t=1;t<e-1;t++){let i=n*e+t,o=this.matId[i];if(o<0||this.fixed[i]>=0)continue;let s=[i-1,i+1,i-e,i+e],c=!0,l=r[s[0]];for(let e of s)if(this.matId[e]!==o||r[e]!==l||this.fixed[e]>=0){c=!1;break}c&&l!==r[i]&&(a[i]=l)}r.set(a);let o=new Int16Array(r);for(let n=0;n<t;n++)for(let i=0;i<e;i++){let a=n*e+i,s=this.matId[a];if(s<0)continue;let c=this.mats[s];if(c.inner===!1||this.fixed[a]>=0)continue;let l=this.depth[a],u=!1,d=e=>{this.matId[e]<0||this.part[e]!==this.part[a]&&this.mats[this.matId[e]].outline!==!1&&this.depth[e]-l>2.6&&(u=!0)};i>0&&d(a-1),i<e-1&&d(a+1),n>0&&d(a-e),n<t-1&&d(a+e),u&&(o[a]=Math.max(0,Math.min(r[a]-1,c.tones[0])))}r.set(o);let s=new Uint8Array(n*4),c=new Uint8Array(n*4);for(let e=0;e<n;e++){c[e*4]=128,c[e*4+1]=128,c[e*4+2]=255,c[e*4+3]=0;let t=this.matId[e];if(t<0)continue;let n=this.mats[t],i=n.ramp.colors[Math.max(0,Math.min(n.ramp.colors.length-1,r[e]))];s[e*4]=i[0],s[e*4+1]=i[1],s[e*4+2]=i[2],s[e*4+3]=255,c[e*4]=Math.round((this.nrm[e*3]*.5+.5)*255),c[e*4+1]=Math.round((this.nrm[e*3+1]*.5+.5)*255),c[e*4+2]=Math.round((this.nrm[e*3+2]*.5+.5)*255),c[e*4+3]=Math.round(Math.max(0,Math.min(1,this.emis[e]))*255)}let l=new Uint8Array(s),u=new Uint8Array(c);for(let n=0;n<t;n++)for(let r=0;r<e;r++){let i=n*e+r;if(this.matId[i]>=0)continue;let a=-1,o=-1e9,s=!1,d=(e,t)=>{let n=this.matId[e];n<0||this.mats[n].outline!==!1&&this.depth[e]>o&&(o=this.depth[e],a=e,s=t)};if(r>0&&d(i-1,!0),r<e-1&&d(i+1,!1),n>0&&d(i-e,!1),n<t-1&&d(i+e,!0),a<0)continue;let f=this.mats[this.matId[a]],p=f.ramp.outline;if(s){let e=f.ramp.colors[0];p=[p[0]+e[0]>>1,p[1]+e[1]>>1,p[2]+e[2]>>1,255]}l[i*4]=p[0],l[i*4+1]=p[1],l[i*4+2]=p[2],l[i*4+3]=255,u[i*4]=c[a*4],u[i*4+1]=c[a*4+1],u[i*4+2]=c[a*4+2],u[i*4+3]=0}return{w:e,h:t,color:l,normal:u}}};function $l(e,t){let n=Array(9);for(let r=0;r<3;r++)for(let i=0;i<3;i++)n[r*3+i]=e[r*3]*t[i]+e[r*3+1]*t[3+i]+e[r*3+2]*t[6+i];return n}function eu(e,t,n,r={}){let i=new Ql(e.w,e.h,e.ox,e.oy);return i.setView(wl[t],r.pitch??.38,r.roll??0,r.rollPivot??[0,0],r.shift??[0,0]),n(i),i.resolve()}function tu(e,t,n,r,i,a=16){let o=[];for(let e of r)for(let t of n){let n=[];for(let r=0;r<e.frames;r++)n.push(i(e.pose(r,t),t));o.push({key:`${e.name}_${t}`,frames:n,durations:e.durations,loop:e.loop})}return Tl(e,t.w,t.h,t.ox,t.oy,o,a)}[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(e=>(e+.5)/16);var nu={w:64,h:48,ox:32,oy:44},ru={ramp:G.moss,tones:[1,2,3,4]},iu={hide:{ramp:G.hide,tones:[1,2,3,4],alt:{mat:ru,scale:.34,threshold:.46,upOnly:.3,seed:11},speckle:{seed:4,scale:.8,amount:.12}},hideDark:{ramp:G.hide,tones:[0,1,2,3]},moss:ru,mossHi:{ramp:G.moss,tones:[2,3,4,5]},snout:{ramp:G.rose,tones:[1,2,3,3]},tusk:{ramp:G.bone,tones:[2,3,4,5]},eye:{ramp:G.ember,tones:[3,4,4,4],emissive:.9,flat:!0,inner:!1,receive:!1},eyeDim:{ramp:G.ember,tones:[1,1,1,1],flat:!0,inner:!1},hoof:{ramp:G.ink,tones:[0,1,2,2]},mane:{ramp:G.hair,tones:[0,1,2,3]},cap:{ramp:G.danger,tones:[2,3,4,4]},stem:{ramp:G.bone,tones:[2,3,3,4]}},au=[[3.6,1,5.8],[-3.6,1,5.8],[3.8,1,-6.8],[-3.8,1,-6.8]];function ou(){return{body:[0,10.6,-.4],pitch:0,head:.05,headYaw:0,legs:au.map(e=>[...e]),tail:0,phase:0}}function su(e,t){let n=Il(t.pitch),r=Bl(n),i=e=>K(t.body,J(n,e)),a=[i([4.2,-2.6,5.6]),i([-4.2,-2.6,5.6]),i([4.4,-2.2,-6.8]),i([-4.4,-2.2,-6.8])];for(let n=0;n<4;n++){let r=[t.legs[n][0]*1.16,t.legs[n][1],t.legs[n][2]],i=Pl(a[n],r,4.4,4.2,n<2?[0,0,1]:[0,0,-1]);e.capsule(a[n],i,2.1,1.6,iu.hide),e.capsule(i,r,1.5,1.2,iu.hideDark),e.ellipsoid(K(r,[0,-.2,.4]),[1.3,.9,1.5],iu.hoof)}e.ellipsoid(i([0,0,0]),[7.2,6,10.6],iu.hide,{axes:r}),e.ellipsoid(i([0,2.6,4.6]),[6.6,4.8,5.2],iu.hide,{axes:r}),e.capsule(i([0,2.4,-10.2]),i([Math.sin(t.tail)*1.3,.6+Math.cos(t.tail)*.4,-12.2]),.85,.5,iu.hideDark);for(let t=0;t<7;t++){let r=i([0,5.3+(t<3?1.6:.6)-t*.1,8.2-t*1.5]);e.line(r,K(r,J(n,[(t%2-.5)*.8,2,-1.1])),iu.mane,{tone:t%2})}e.ellipsoid(i([1.3,5.6,1.4]),[2.6,1.3,2.6],iu.moss,{axes:r}),e.ellipsoid(i([-1.8,5.2,-3.2]),[2.2,1.2,2.4],iu.moss,{axes:r}),e.ellipsoid(i([.2,6.6,5.2]),[3,1.4,2.6],iu.moss,{axes:r});let o=i([.8,7.4,3.6]);for(let[t,r]of[[-1.4,-1.2],[.3,-2.2],[1.6,-.9]]){let i=K(o,J(n,[t,3.2,r]));e.line(o,i,iu.mossHi,{tone:2}),e.dot(K(i,[0,-.6,.3]),iu.mossHi,{tone:3,surface:!1})}let s=i([-2.6,6.2,-5.2]);e.line(s,K(s,[0,1.6,0]),iu.stem,{tone:2}),e.ellipsoid(K(s,[0,2,0]),[1.5,.8,1.5],iu.cap);let c=i([0,1,8.4]),l=zl(n,zl(Ll(t.headYaw),Il(t.head))),u=Bl(l),d=e=>K(c,J(l,e)),f=[5.4,4.6,4.8],p=[0,0,2.8];e.ellipsoid(d(p),f,iu.hide,{axes:u}),e.capsule(d([0,-1.3,5.6]),d([0,-1.9,9]),3,2.5,iu.hide),e.ellipsoid(d([0,-2,9.6]),[2.4,2.05,.8],iu.snout,{axes:u});for(let t of[1,-1])e.dot(d([t*.9-.5,-2.1,10.3]),iu.hoof,{tone:0,tol:2});for(let t of[1,-1])e.capsule(d([t*2.5,-2.8,7.4]),d([t*3.9,.9,9.2]),1,.45,iu.tusk);for(let n of[1,-1]){let r=[n*.62,.28,.73],i=Math.hypot(r[0],r[1],r[2]),a=[p[0]+r[0]/i*f[0],p[1]+r[1]/i*f[1],p[2]+r[2]/i*f[2]];e.dot(d(a),t.dim?iu.eyeDim:iu.eye,{size:[2,1],tol:2.6})}for(let t of[1,-1]){let n=Bl(zl(l,Rl(-t*.55)));e.ellipsoid(d([t*3.9,4,1.3]),[1.4,2.2,.9],iu.hideDark,{axes:n})}}function cu(e,t,n){if(e=(e%1+1)%1,e<.5)return[t-4*t*e,0];let r=(e-.5)/.5;return[-t+2*t*(.5-.5*Math.cos(Math.PI*r)),n*Math.sin(Math.PI*r)]}function lu(e){let t=ou(),n=[0,.3,.55,.3][e];return t.body=[0,10.6-n,-.4],t.head=.05+n*.12,t.tail=[0,.8,0,-.8][e],t.phase=e,t}function uu(e){let t=ou(),n=e/6,r=[0,.5,.5,0];return t.legs=au.map((e,t)=>{let[i,a]=cu(n+r[t],2.6,1.7);return[e[0],e[1]+a,e[2]+i]}),t.body=[0,10.6+.4*Math.cos(n*Math.PI*4),-.4],t.head=.08+.06*Math.sin(n*Math.PI*4),t.tail=Math.sin(n*Math.PI*2)*.7,t}function du(e){let t=ou();t.body=[0,9.4,-1.6],t.pitch=.1,t.head=.42,t.tail=1;let n=e%2==1;return t.legs[0]=n?[3.6,2.4,3.2]:[3.6,1,6.6],t.legs[2]=[3.8,1,-7.8],t.legs[3]=[-3.8,1,-7.8],t.headYaw=[.05,-.05,.05,-.05][e],t}function fu(e){let t=ou(),n=e%2==0;if(t.body=[0,[10.2,11.4,10.2,11][e],.6],t.pitch=[.14,.04,.14,.06][e],t.head=.36,t.tail=-.8,t.legs=n?[[3.6,1.6,9.8],[-3.6,1,8.4],[3.8,1,-10.6],[-3.8,1.8,-9.4]]:[[3.6,3,2.8],[-3.6,2.6,3.8],[3.8,3.2,-2.6],[-3.8,2.8,-3.8]],e>=2){let[e,n,r,i]=t.legs;t.legs=[n.map((e,t)=>t===0?-e:e),e.map((e,t)=>t===0?-e:e),i.map((e,t)=>t===0?-e:e),r.map((e,t)=>t===0?-e:e)]}return t}function pu(e){let t=ou();return t.body=[0,9.8,-.4],t.head=.28,t.headYaw=[.32,.1,-.32,-.1][e],t.pitch=-.04,t.tail=0,t.dim=!0,t.legs[0]=[4.2,1,6.4],t.legs[1]=[-4.2,1,5.2],t}function mu(e){let t=ou();return t.body=[0,e===0?10:10.4,-1.4],t.pitch=-.12,t.head=-.2,t.tail=1.2,t}function hu(e){let t=ou();return t.dim=e>=2,t.head=[.1,.3,.35,.4,.4][e],t.body=[0,[10.4,9.8,9.4,9.2,9.2][e],-.4],t.roll=[0,.35,.95,1.38,1.52][e],e>=2&&(t.legs=[[4.4,3,8.2],[-3,2,7.6],[4.6,3,-9.2],[-3.2,2,-8.6]]),t}var gu=[{name:`idle`,frames:4,durations:[200,180,220,180],loop:!0,pose:e=>lu(e)},{name:`walk`,frames:6,durations:[,,,,,,].fill(95),loop:!0,pose:e=>uu(e)},{name:`windup`,frames:4,durations:[130,110,130,110],loop:!0,pose:e=>du(e)},{name:`charge`,frames:4,durations:[60,60,60,60],loop:!0,pose:e=>fu(e)},{name:`stun`,frames:4,durations:[150,150,150,150],loop:!0,pose:e=>pu(e)},{name:`hurt`,frames:2,durations:[80,160],loop:!1,pose:e=>mu(e)},{name:`death`,frames:5,durations:[90,110,110,130,1400],loop:!1,pose:e=>hu(e)}];function _u(e,t){let n=e.roll??0;return eu(nu,t,t=>su(t,e),{roll:n*(t===`up`?-1:1),rollPivot:[0,4],shift:[0,-Math.sin(n)*1.5]})}function vu(){return tu(`boar`,nu,Cl,gu,_u)}var yu={w:128,h:128,ox:64,oy:124},bu={ramp:G.moss,tones:[1,2,3,4]},Y={stone:{ramp:G.stone,tones:[1,2,3,4],speckle:{seed:3,scale:.32,amount:.12},alt:{mat:bu,scale:.13,threshold:.56,upOnly:.35,seed:21}},stoneWarm:{ramp:G.stoneWarm,tones:[1,2,3,4],speckle:{seed:9,scale:.4,amount:.1}},roof:{ramp:G.stone,tones:[1,2,3,4],alt:{mat:bu,scale:.2,threshold:.42,upOnly:.3,seed:33}},stoneDark:{ramp:G.stone,tones:[0,1,1,2]},crack:{ramp:G.stone,tones:[0,0,0,0],flat:!0},moss:bu,eyeDormant:{ramp:G.stone,tones:[0,1,1,1]},eyeAwake:{ramp:G.rune,tones:[2,3,3,3],emissive:1,inner:!1,receive:!1},eyeRage:{ramp:G.cold,tones:[4,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1},coreDim:{ramp:G.rune,tones:[0,1,1,1],flat:!0,inner:!1},core:{ramp:G.rune,tones:[2,3,4,4],emissive:.9,flat:!0,inner:!1,receive:!1},coreHot:{ramp:G.cold,tones:[3,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1},rune:{ramp:G.rune,tones:[3,3,3,3],emissive:.85,flat:!0,inner:!1,receive:!1},runeDim:{ramp:G.rune,tones:[1,1,1,1],flat:!0,inner:!1}};function xu(){return{bob:0,lean:0,twist:0,headPitch:0,headYaw:0,handL:[29.5,27,5],handR:[-29.5,27,5],footL:[11,3,2],footR:[-11,3,2],eyes:1,core:1,sink:0,rubble:0,cracks:0}}function Su(e,t,n,r,i){let a=Math.sin(r)*Math.cos(i)*t[0],o=Math.sin(i)*t[1],s=Math.cos(r)*Math.cos(i)*t[2];return K(e,K(K(q(n[0],a),q(n[1],o)),q(n[2],s)))}function Cu(e,t,n,r){for(let i=0;i+1<t.length;i++){let a=t[i],o=t[i+1],s=Math.max(2,Math.ceil(jl(Ol(o,a))*1.3));for(let t=0;t<=s;t++){let i=t/s;e.dot([a[0]+(o[0]-a[0])*i,a[1]+(o[1]-a[1])*i,a[2]+(o[2]-a[2])*i],n,{tone:r,tol:2.6})}}}function wu(e){let t=Al(e,[0,0,1]);jl(t)<.3&&(t=Al(e,[1,0,0])),t=Ml(t);let n=Ml(Al(t,e));return[t,e,n]}function Tu(e){return e>=2?Y.eyeRage:e>=1?Y.eyeAwake:Y.eyeDormant}function Eu(e){return e>=1.5?Y.coreHot:e>=.45?Y.core:Y.coreDim}function Du(e,t){if(t.rubble>0){Ou(e,t);return}let n=zl(Ll(t.twist),Il(t.lean)),r=Bl(n),i=[0,23-t.bob-t.sink,0],a=e=>K(i,J(n,e)),o=t.core>=.45?Y.rune:Y.runeDim;for(let n of[1,-1]){let r=K(i,J(Ll(t.twist*.3),[n*8.5,-2,0])),a=n>0?t.footL:t.footR,o=K(a,[0,3.4,-1]),s=Pl(r,o,9.8,9.2,[n*.2,0,1]);e.capsule(r,s,6.3,5.7,Y.stone),e.capsule(s,o,5.7,6.1,Y.stone),e.box(K(a,[0,.1,1.6]),[6.3,3.2,7.6],[[1,0,0],[0,1,0],[0,0,1]],Y.stoneDark,{bevel:1.5})}e.box(a([0,1,0]),[13.8,5.6,10.2],Bl(zl(Ll(t.twist*.5),Il(t.lean*.5))),Y.stone,{bevel:2});let s=a([0,17,0]),c=[19,16.5,13.5];e.ellipsoid(s,c,Y.stone,{axes:r}),e.ellipsoid(a([0,8.6,3.2]),[15,7,11],Y.stone,{axes:r});let l=a([0,19,12.6]);e.box(l,[7.3,7.7,2.6],r,Y.stoneDark,{bevel:1}),e.ellipsoid(K(l,J(n,[0,0,1.9])),[5.4,5.8,2.4],Eu(t.core),{axes:r}),e.line(K(l,J(n,[0,5.8,4.6])),K(l,J(n,[0,-5.8,4.6])),Y.stoneDark,{tone:1}),e.line(K(l,J(n,[-5.4,0,4.6])),K(l,J(n,[5.4,0,4.6])),Y.stoneDark,{tone:1}),e.box(K(l,J(n,[0,8.7,.6])),[9.4,1.5,3.6],r,Y.stoneWarm,{bevel:.8}),e.box(K(l,J(n,[0,-8.5,.4])),[8.6,1.2,3.2],r,Y.stoneWarm,{bevel:.8});for(let t of[1,-1])Cu(e,[Su(s,c,r,t*.95,.5),Su(s,c,r,t*1.02,.12),Su(s,c,r,t*.86,-.22)],o),Cu(e,[Su(s,c,r,t*1.02,.12),Su(s,c,r,t*1.25,.2)],o);let u=[];for(let e=0;e<=8;e++)u.push(Su(a([0,8.6,3.2]),[15,7,11],r,-.9+e*.225,-.05));Cu(e,u,o),t.cracks>0&&(Cu(e,[Su(s,c,r,-.35,.62),Su(s,c,r,-.22,.4),Su(s,c,r,-.42,.22)],Y.crack,0),t.cracks>1&&Cu(e,[Su(s,c,r,.5,-.1),Su(s,c,r,.62,-.42),Su(s,c,r,.44,-.6)],Y.crack,0));for(let t of[1,-1])e.ellipsoid(a([t*19.6,27.6,-.4]),[8.9,6.8,8.9],Y.stone,{axes:r});let d=a([0,33,1.6]),f=zl(n,zl(Ll(t.headYaw),Il(t.headPitch))),p=Bl(f),m=e=>K(d,J(f,e));e.ellipsoid(m([0,9.6,1.4]),[10.3,11.7,9.3],Y.stoneWarm,{axes:p});for(let t of[1,-1])e.ellipsoid(m([t*10.1,9.2,0]),[1.9,4.7,3.2],Y.stoneWarm,{axes:p});for(let n of[1,-1])e.ellipsoid(m([n*4.8,11.5,8.8]),[3.95,4.35,1.7],Y.stoneDark,{axes:p}),e.ellipsoid(m([n*4.8,11.5,9.5]),[3,3.4,1.45],Tu(t.eyes),{axes:p});e.ellipsoid(m([0,6.9,10.3]),[2.6,4.9,2.6],Y.stoneWarm,{axes:p}),Cu(e,[m([-3.4,1.8,9.1]),m([0,1.2,9.5]),m([3.4,1.8,9.1])],Y.crack,0),t.cracks>0&&Cu(e,[m([5.5,19,5.5]),m([6.8,15.5,6.8]),m([5.8,13.8,7.4])],Y.crack,0),e.ellipsoid(m([0,20.6,.8]),[15.6,2.9,13.6],Y.roof,{axes:p});for(let[t,n]of[[1,1],[-1,1],[1,-1],[-1,-1]])e.ellipsoid(m([t*13.4,21.9,n*10.9+.8]),[2.7,1.3,2.3],Y.roof,{axes:p});e.ellipsoid(m([0,23.4,.8]),[7.2,3.3,6.6],Y.roof,{axes:p}),e.sphere(m([0,27.6,.8]),2.7,Y.stoneWarm);for(let r of[1,-1]){let i=a([r*20.2,25,0]),s=r>0?t.handL:t.handR,c=Pl(i,s,14,13.2,J(n,[r*.8,-.35,-.6]));e.capsule(i,c,5.5,4.9,Y.stone),e.ellipsoid(c,[5.4,5.4,5.4],Y.stoneDark),e.capsule(c,s,5,5.9,Y.stone);let l=Ml(Ol(s,c)),u=wu(l),d=K(s,q(l,3.2));e.box(d,[6.5,6.5,6.5],u,Y.stone,{bevel:2});let f=[],p=K(c,q(Ol(s,c),.55));for(let e=0;e<=6;e++){let t=-1.2+e*.4;f.push(K(p,K(q(u[0],Math.sin(t)*5.4),q(u[2],Math.cos(t)*5.4))))}Cu(e,f,o)}}function Ou(e,t){let n=t.rubble,r=e=>e*(1-n)+0;e.ellipsoid([0,r(14)+7,0],[21,8+4*(1-n),15],Y.stone),e.ellipsoid([-9,r(10)+5,8],[9,5,7],Y.stone),e.ellipsoid([11,r(9)+4,6],[8,4.5,6],Y.stone),e.box([-24,5,10],[6.2,6.2,6.2],Bl(Ll(.5)),Y.stone,{bevel:2}),e.box([25,5,4],[6.2,6.2,6.2],Bl(zl(Ll(-.4),Rl(.3))),Y.stone,{bevel:2});let i=Bl(zl(Rl(1.3),Il(.2))),a=[4,r(20)+10,16];e.ellipsoid(a,[10,11.5,9],Y.stoneWarm,{axes:i});for(let t of[1,-1]){let n=K(a,J(zl(Rl(1.3),Il(.2)),[t*4.7,2,8.4]));e.ellipsoid(n,[3,3.3,1.4],Y.eyeDormant,{axes:i})}e.ellipsoid(K(a,J(zl(Rl(1.3),Il(.2)),[0,11,.8])),[15,2.8,13],Y.roof,{axes:i}),e.box([-4,r(12)+9,13],[6.6,6.8,2.4],Bl(Il(-.9)),Y.stoneDark,{bevel:1}),e.ellipsoid([-4,r(12)+10.4,14.2],[4.6,4.8,1.2],Eu(t.core),{axes:Bl(Il(-.9))});for(let t=0;t<7;t++){let n=t*2.4;e.box([Math.cos(n)*(18+t%3*5),1.6,Math.sin(n)*12+4],[2+t%2,1.6,2],Bl(Ll(n)),Y.stone,{bevel:.6})}}var ku=e=>[-e[0],e[1],e[2]];function Au(e){let t=xu();return t.bob=[0,.6,1.2,.6][e],t.handL=[29.5,27-t.bob*.8,5],t.handR=ku(t.handL),t.core=1+[0,.1,.2,.1][e],t}function ju(e){let t=xu(),n=e/6*Math.PI*2;return t.footL=[11,3+Math.max(0,Math.sin(n))*4.2,2+Math.cos(n)*5.2],t.footR=[-11,3+Math.max(0,-Math.sin(n))*4.2,2-Math.cos(n)*5.2],t.bob=Math.abs(Math.cos(n))*1.6,t.twist=Math.cos(n)*.07,t.lean=.05,t.handL=[29.5,27,5-Math.cos(n)*5],t.handR=[-29.5,27,5+Math.cos(n)*5],t}function Mu(e){let t=xu();return e<=1?(t.handL=[8,27,14.5],t.handR=[-8,21,14.5],t.headPitch=.28,t.eyes=+(e===1),t.core=e===1?.5:.2,t.lean=.06):e===2?(t.handL=[12,28,13],t.handR=[-12,23,13],t.headPitch=.12,t.core=.8):e===3?(t.handL=[22,31,12],t.handR=[-22,31,12],t.lean=-.08,t.headPitch=-.05,t.core=1.1):(t.handL=[33,36,6],t.handR=[-33,36,6],t.lean=-.12,t.headPitch=-.16,t.bob=-1,t.core=1.6,t.eyes=2),t}function Nu(e){let t=xu();return t.handL=[[18,50,8],[10,86,0],[8,96,-3]][e],t.handR=ku(t.handL),t.lean=[-.05,-.14,-.18][e],t.bob=[0,-1.5,-2][e],t.headPitch=[-.1,-.2,-.25][e],t.core=1.3,t}function Pu(e){let t=xu();return t.handL=[[11,52,16],[11,7,23],[12,8,22]][e],t.handR=ku(t.handL),t.lean=[.1,.36,.3][e],t.bob=[0,3.5,3][e],t.headPitch=[0,.2,.16][e],t.core=e===2?.9:1.3,t}function Fu(e){let t=xu();return t.twist=[.35,.52][e],t.handR=[[-34,38,-16],[-36,40,-21]][e],t.handL=[24,30,16],t.lean=-.05,t.bob=[.5,1.5][e],t.footR=[-12,3,-1],t}function Iu(e){let t=xu();return t.twist=[.1,-.35,-.52][e],t.handR=[[-28,32,20],[4,30,30],[30,30,18]][e],t.handL=[26,26,-4],t.lean=.18,t.bob=1.5,t.footR=[-12,3,5],t.footL=[11,3,-1],t}function Lu(e){let t=xu();return t.handL=[40,56+e%2*2,8],t.handR=ku(t.handL),t.headPitch=-.2,t.core=2,t.eyes=2,t.bob=[0,.8,1.2,.8][e],t.lean=-.06,t}function Ru(e){let t=xu();return t.lean=[-.18,-.26,-.12][e],t.bob=[1.5,3,2][e],t.handL=[26,18,-2],t.handR=ku(t.handL),t.headPitch=[-.3,-.35,-.1][e],t.eyes=[2,1,2][e],t.footR=[-11,3,-3],t.cracks=1,t.core=1.4,t}function zu(e){let t=xu();if(t.cracks=2,e===0){let e=Ru(1);return e.cracks=2,e.eyes=1,e}return e<=3?(t.sink=[0,3,7,12][e],t.lean=[0,.15,.3,.45][e],t.handL=[[0,0,0],[26,12,8],[24,4,12],[22,3,14]][e],t.handR=ku(t.handL),t.headPitch=[0,.3,.45,.6][e],t.eyes=+(e===1),t.core=[1,.6,.35,.15][e],t):(t.rubble=e===4?.55:1,t.core=0,t.eyes=0,t)}var Bu=[{name:`idle`,frames:4,durations:[240,220,240,220],loop:!0,pose:e=>Au(e)},{name:`walk`,frames:6,durations:[,,,,,,].fill(120),loop:!0,pose:e=>ju(e)},{name:`awaken`,frames:5,durations:[500,260,240,240,600],loop:!1,pose:e=>Mu(e)},{name:`slamWind`,frames:3,durations:[150,170,320],loop:!1,pose:e=>Nu(e)},{name:`slam`,frames:3,durations:[60,90,450],loop:!1,pose:e=>Pu(e)},{name:`sweepWind`,frames:2,durations:[170,360],loop:!1,pose:e=>Fu(e)},{name:`sweep`,frames:3,durations:[70,90,320],loop:!1,pose:e=>Iu(e)},{name:`cast`,frames:4,durations:[140,140,140,140],loop:!0,pose:e=>Lu(e)},{name:`stagger`,frames:3,durations:[90,160,320],loop:!1,pose:e=>Ru(e)},{name:`death`,frames:6,durations:[160,170,190,230,300,2e3],loop:!1,pose:e=>zu(e)}],Vu=[`down`,`side`];function Hu(e,t){return eu(yu,t,t=>Du(t,e))}function Uu(){return tu(`guardian`,yu,Vu,Bu,Hu,12)}var Wu={w:48,h:48,ox:24,oy:45},Gu=.38,X={cloak:{ramp:G.teal,tones:[1,2,3,4]},lining:{ramp:G.teal,tones:[0,0,1,1]},scarf:{ramp:G.amber,tones:[1,2,3,4]},tunic:{ramp:G.linen,tones:[2,3,4,4]},tunicDark:{ramp:G.linen,tones:[1,2,3,4]},leather:{ramp:G.wood,tones:[1,2,3,4]},boot:{ramp:G.wood,tones:[0,1,2,3]},pants:{ramp:G.indigo,tones:[0,1,2,3]},skin:{ramp:G.skin,tones:[1,2,3,4]},hair:{ramp:G.hair,tones:[0,1,2,3]},eye:{ramp:G.hair,tones:[0,0,0,0],flat:!0},steel:{ramp:G.steel,tones:[2,3,4,5]},brass:{ramp:G.brass,tones:[1,2,3,4]},glow:{ramp:G.ember,tones:[3,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1},smear:{ramp:G.steel,tones:[4,4,4,4],flat:!0,outline:!1,inner:!1,receive:!1,emissive:.55},smearCore:{ramp:G.steel,tones:[5,5,5,5],flat:!0,outline:!1,inner:!1,receive:!1,emissive:.8},smearTail:{ramp:G.cold,tones:[3,3,3,3],flat:!0,outline:!1,inner:!1,receive:!1,emissive:.45}};function Ku(e,t,n,r,i){return{pivot:Ju[e],e1:Yu(e,0),e2:Yu(e,Math.PI/2),a0:t,a1:n,r0:r,r1:i}}function qu(e,t,n,r,i){let a=Ml(t),o=Ml(n),s=Math.max(-1,Math.min(1,a[0]*o[0]+a[1]*o[1]+a[2]*o[2]));return{pivot:e,e1:a,e2:Ml(Ol(o,q(a,s))),a0:0,a1:Math.acos(s),r0:r,r1:i}}var Ju={fore:[0,14.6,.6],back:[0,14.4,.6],over:[-2,18.2,.2]};function Yu(e,t){return e===`fore`?J(Rl(.22),[Math.sin(t),0,Math.cos(t)]):e===`back`?J(Rl(.42),[Math.sin(t),-.05,Math.cos(t)]):J(Ll(-.55),[0,Math.cos(t),Math.sin(t)])}function Xu(){return{pelvis:[0,10.6,0],lean:0,sideLean:0,twist:0,headPitch:0,headYaw:0,footL:[2.3,1.3,.3],footR:[-2.3,1.3,.3],handL:[4.9,11.9,1],handR:[-5,11.8,1.8],blade:Ml([-.12,-.72,.68]),wind:[0,-.4,-.5],phase:0,squash:1,lantern:`hip`,lanternSwing:0}}function Zu(e,t){let n=t.roll?Il(t.roll.angle):Fl(),r=t.roll?t.roll.pivot:[0,0,0],i=e=>t.roll?K(r,J(n,Ol(e,r))):e,a=zl(Rl(t.sideLean),zl(Ll(t.twist),Il(t.lean))),o=t.squash,s=1/Math.sqrt(o),c=e=>i(K(t.pelvis,J(a,[e[0]*s,e[1]*o,e[2]*s]))),l=zl(n,a),u=Bl(l),d=[0,8.7,.3],f=zl(Ll(t.headYaw),Il(t.headPitch)),p=e=>c(K(d,J(f,e))),m=zl(l,f),h=Bl(m),g=J(n,t.wind),_=Math.min(1,jl(t.wind)/3.5);{let n=t.wind,r=[],i=[],a=[{y:8.3,x:4.3,z:-2.9,wrap:.5},{y:3.2,x:5,z:-3.6,wrap:.5},{y:-2.6,x:5.7,z:-4.6,wrap:.4}];for(let e=0;e<3;e++){let o=[],s=[],u=e/2;for(let r=0;r<5;r++){let i=r/4*2-1,d=a[e],f=Math.sin(t.phase+r*1.25+e*.7),p=i*d.x+n[0]*u*1.2+f*.25*u,m=d.y+n[1]*u*1.5+Math.abs(n[2])*u*u*.85,h=d.z-d.wrap*(1-i*i)+n[2]*u*1.35+f*.55*u*(.3+_);o.push(c([p,m,h]));let g=r%2==0?-.45:.45;s.push(J(l,Ml([g+i*.5,.25,-1])))}r.push(o),i.push(s)}e.cloth(r,X.cloak,{backMat:X.lining,gridNormals:i})}let v=Ll(t.twist*.4),y=[[J(v,[2,-.4,0]),t.footL,1],[J(v,[-2,-.4,0]),t.footR,-1]];for(let[r,a,o]of y){let s=i(K(t.pelvis,r)),c=i(a),l=Pl(s,c,5,4.6,J(n,J(Ll(t.twist*.3),[o*.25,.1,1]))),u=K(c,q(Ml(J(n,J(Ll(t.twist*.3),[o*.12,-.15,1]))),2.3));e.capsule(s,l,1.75,1.5,X.pants),e.capsule(l,c,1.45,1.35,X.boot),e.capsule(c,u,1.35,1.05,X.boot)}e.ellipsoid(c([0,-.9,-.1]),[4.4,2.5,3.3],X.tunicDark,{axes:u}),e.ellipsoid(c([0,4,0]),[3.9,4.6,2.8],X.tunic,{axes:u}),e.ellipsoid(c([0,1.4,0]),[4.05,.95,3],X.leather,{axes:u}),e.ellipsoid(c([0,8.7,.4]),[3.8,1.5,3.1],X.scarf,{axes:u});for(let t of[1,-1])e.ellipsoid(c([t*4,8.1,-.4]),[2.3,1.8,2.4],X.cloak,{axes:u});let b=p([0,5,1.1]),x=p([0,5.7,-.6]);e.ellipsoid(x,[5.8,5.7,5.9],X.cloak,{axes:h,opening:e=>e[2]>.2&&e[1]<.42&&e[1]>-.8&&Math.abs(e[0])<.78,innerMat:X.lining,rim:e=>{let t=Math.min(e[2]-.2,.42-e[1],e[1]+.8,.78-Math.abs(e[0]));return+(t<0&&t>-.16&&e[2]>0)}}),e.sphere(b,4.6,X.skin,{axes:h}),e.ellipsoid(p([0,7.7,3.4]),[3.7,1.7,2.1],X.hair,{axes:h});for(let t of[1,-1])e.ellipsoid(p([t*3.3,5.1,2.6]),[1.15,2.3,1.3],X.hair,{axes:h});let S=p([0,9,-4.6]),C=Ml(K(J(m,[0,-.35,-1]),q(g,.3)));e.capsule(S,K(S,q(C,4.2)),1.9,.6,X.cloak);for(let[n,r]of[[-1,0],[1,1.7]]){let i=c([n*1.1,8.4-(n>0?.6:0),-2.7]),a=n>0?1.8:2.2;for(let n=0;n<4;n++){let o=Math.sin(t.phase+n*1.4+r),s=Ml([g[0]+o*.35,g[1]-.6-n*.12*_+Math.cos(t.phase*1.1+n*1.2+r)*(.25+.55*_),g[2]-.15]),c=K(i,q(s,a));e.capsule(i,c,1-n*.1,.9-n*.1,X.scarf),i=c}}let w=c([4,7.9,-.1]),T=c([-4,7.9,-.1]),E=i(t.handL),D=i(t.handR);for(let[t,n,r]of[[w,E,1],[T,D,-1]]){let i=Pl(t,n,3.9,3.5,J(l,[r*.5,-.2,-1]));e.capsule(t,i,1.45,1.3,X.tunic),e.capsule(i,n,1.3,1.2,X.leather),e.sphere(n,1.3,X.skin)}{let r=Ml(J(n,t.blade)),i=D,a=K(i,q(r,1.3)),o=Al(r,[0,0,1]);jl(o)<.3&&(o=Al(r,[1,0,0])),o=Ml(o),e.line(K(i,q(r,-1.3)),a,X.leather,{tone:1}),e.dot(K(i,q(r,-1.9)),X.brass,{tone:4,surface:!1});let s=K(a,q(r,.8)),c=K(a,q(r,11.2)),l=e.toView(s),u=e.toView(c),d=-(u[1]-l[1]),f=u[0]-l[0],p=Math.hypot(d,f)||1;d/=p,f/=p,d*-.6+f*.8<0&&(d=-d,f=-f);let m=e.dirFromView([d,f,.05]);e.line(s,c,X.steel,{tone:3}),e.line(K(s,m),K(c,q(m,.6)),X.steel,{tone:5}),e.line(K(a,q(o,-2.2)),K(a,q(o,2.2)),X.brass,{tone:3})}{let r=t.lantern===`hip`?c([3.7,-.6,1.4]):K(E,[0,-.8,0]),i=t.lanternSwing,a=K(r,J(n,[Math.sin(i)*2.2,-2.4*Math.cos(i),0])),o=Bl(zl(n,Rl(i)));e.line(r,K(a,q(o[1],1.5)),X.brass,{tone:2}),e.box(a,[1.25,1.6,1.25],o,X.brass,{bevel:.5}),e.box(a,[1.35,.85,1.35],o,X.glow,{bevel:0})}for(let t of[1,-1]){let n=t*.38,r=-.06,i=K(b,J(m,q([Math.sin(n)*Math.cos(r),Math.sin(r),Math.cos(n)*Math.cos(r)],4.6)));e.dot(i,X.eye,{tone:0,size:[1,2],tol:1.8})}e.dot(c([0,1.4,3.05]),X.brass,{tone:4,tol:1.5}),t.smear&&$u(e,i,t.smear)}function Qu(e,t,n){let r=[0,7,0],i=Il(t),a=Bl(i),o=e=>K(r,J(i,e));e.ellipsoid(r,[5.2,5.5,5.5],X.cloak,{axes:a}),e.sphere(o([0,3.4,3.2]),4.2,X.cloak,{axes:a}),e.ellipsoid(o([0,3,5.6]),[2.6,1.2,1.4],X.lining,{axes:a});let s=o([0,6.4,.6]);e.capsule(s,K(s,q(Ml(J(i,[0,.35,-1])),3)),1.6,.5,X.cloak),e.ellipsoid(o([0,-1,3.7]),[3.7,2.9,2.3],X.tunic,{axes:a}),e.ellipsoid(o([0,-.1,4.3]),[3.9,.9,1.9],X.leather,{axes:a});for(let t of[1,-1]){let n=o([t*2,-2.7,4.5]),r=o([t*2.1,-5.1,2.4]);e.capsule(n,r,1.6,1.4,X.pants),e.capsule(r,o([t*2.1,-5.3,.2]),1.4,1.2,X.boot),e.sphere(o([t*2.8,-1.2,5.3]),1.2,X.skin)}e.ellipsoid(o([0,2.2,2.4]),[3.4,1.3,2.6],X.scarf,{axes:a});let c=o([0,3.2,-2]);for(let t=0;t<3;t++){let r=Ml([Math.sin(n+t)*.4,.25+Math.cos(n*1.3+t)*.35,-1]),i=K(c,q(r,2.2));e.capsule(c,i,.95-t*.1,.85-t*.1,X.scarf),c=i}let l=K(r,[-4.4,.8,.6]);e.line(l,K(r,[-9.8,1.2,1]),X.steel,{tone:3}),e.line(K(l,[0,1,0]),K(r,[-9.6,2.1,1]),X.steel,{tone:5}),e.line(K(l,[.2,-1.6,0]),K(l,[.2,2.2,0]),X.brass,{tone:3});let u=o([3.6,-2.4,3.2]);e.box(u,[1.2,1.5,1.2],a,X.brass,{bevel:.5}),e.box(u,[1.3,.8,1.3],a,X.glow,{bevel:0})}function $u(e,t,n){let r=(e,r)=>t(K(n.pivot,K(q(n.e1,Math.cos(e)*r),q(n.e2,Math.sin(e)*r))));for(let t=0;t<10;t++){let i=t/10,a=(t+1)/10,o=n.a0+(n.a1-n.a0)*i,s=n.a0+(n.a1-n.a0)*a,c=i**.8,l=a**.8,u=n.r1-(n.r1-n.r0)*c,d=n.r1-(n.r1-n.r0)*l,f=n.r1-1.6-(n.r1-n.r0)*.25*c,p=n.r1-1.6-(n.r1-n.r0)*.25*l,m=n.r1+.6,h=a<.35;e.poly([r(o,u),r(s,d),r(s,Math.max(d,p)),r(o,Math.max(u,f))],h?X.smearTail:X.smear),e.poly([r(o,Math.max(u,f)),r(s,Math.max(d,p)),r(s,m),r(o,m)],h?X.smear:X.smearCore)}}function ed(e,t,n){if(e=(e%1+1)%1,e<.5){let n=e/.5;return[t-2*t*n,0]}let r=(e-.5)/.5;return[-t+2*t*(.5-.5*Math.cos(Math.PI*r)),n*Math.sin(Math.PI*r)]}function td(e){let t=Xu(),n=[0,.35,.85,.35][e],r=e/4*Math.PI*2;return t.pelvis=[0,10.6-n,0],t.handR=[-5,11.8-n*.8,1.8],t.handL=[4.9,11.9-n*.8,1],t.wind=[.12*Math.sin(r),-.4,-.55-.25*Math.cos(r)],t.phase=r,t.lanternSwing=.1*Math.sin(r),t}var nd=4.2;function rd(e){let t=Xu(),n=e/8,[r,i]=ed(n,nd,2.4),[a,o]=ed(n+.5,nd,2.4);return t.footL=[2.1,1.3+i,r+.6],t.footR=[-2.1,1.3+o,a+.6],t.pelvis=[0,10.2+.55*Math.cos(n*Math.PI*4),.6],t.lean=.2,t.twist=.14*Math.sin(n*Math.PI*2),t.handL=[4.8,11.6,1.6-2.8*Math.cos(n*Math.PI*2)],t.handR=[-4.6,12.4,1.2+1.6*Math.cos(n*Math.PI*2)],t.blade=Ml([-.25,-.3,-.9]),t.wind=[0,.4,-3.6],t.phase=n*Math.PI*4,t.headPitch=.08,t.lanternSwing=.35*Math.sin(n*Math.PI*4),t}function id(e,t,n,r=5.4){let i=Yu(e,t);n.handR=K(Ju[e],q(i,r)),n.blade=Ml(K(i,[0,-.1,0]))}function ad(e){let t=Xu(),n=[-2.2,-2.45,.95,1.4,1.15][e];return t.twist=[-.4,-.5,.32,.45,.2][e],t.lean=[-.04,-.08,.16,.12,.05][e],t.pelvis=[0,[10.5,10.4,10,10.1,10.4][e],[0,-.3,1.2,1.5,1][e]],e>=2?(t.footL=[2.3,1.3,2.3],t.footR=[-2.3,1.3,-1.2]):(t.footL=[2.3,1.3,.9],t.footR=[-2.3,1.3,-.6]),id(`fore`,n,t),t.handL=e<2?[4.4,13.8,3.2]:[5.6,12.8,-2],t.wind=e===2?[2.5,.3,-1.5]:e===3?[3,.2,-1]:[-.6,-.3,-.8],t.phase=e*1.3,t.lanternSwing=[.1,.2,-.3,-.4,-.2][e],e===2&&(t.smear=Ku(`fore`,-1.8,.95,6,16.5)),t}function od(e){let t=Xu(),n=[1.8,2,-.95,-1.45,-1.15][e];return t.twist=[.42,.52,-.35,-.5,-.22][e],t.lean=[-.04,-.06,.16,.12,.05][e],t.pelvis=[0,[10.5,10.4,10,10.1,10.4][e],[.8,.6,1.8,2,1.5][e]],e>=2?(t.footL=[2.3,1.3,-.8],t.footR=[-2.3,1.3,2.5]):(t.footL=[2.3,1.3,2],t.footR=[-2.3,1.3,-.8]),id(`back`,n,t),t.handL=e<2?[5.2,12.5,-1.6]:[4.6,14,3],t.wind=e===2?[-2.5,.3,-1.5]:e===3?[-3,.2,-1]:[.6,-.3,-.8],t.phase=e*1.3+2,t.lanternSwing=[-.2,-.3,.3,.4,.2][e],e===2&&(t.smear=Ku(`back`,1.75,-.95,6,16.5)),t}var sd=[[-5.3,19.2,-.6],[-5.6,20.4,-1.3],[-.4,12.4,5.6],[.2,10.4,6],[-3,12,3.4]],cd=[Ml([-.25,.85,-.45]),Ml([-.32,.8,-.55]),Ml([.28,-.5,.82]),Ml([.22,-.75,.62]),Ml([-.2,-.7,.6])];function ld(e,t){let n=Xu();n.lean=[-.2,-.3,.3,.42,.15][e],n.pelvis=[0,[10.8,11.1,9.8,9,10][e],[0,-.4,1.8,2.3,1.6][e]],n.squash=[1,1.03,.97,.92,1][e],n.headPitch=[-.2,-.25,.15,.25,.1][e],e>=2?(n.footL=[2.4,1.3,3.2],n.footR=[-2.4,1.3,-1.6]):(n.footL=[2.3,1.3,1],n.footR=[-2.3,1.3,-.8]),n.handR=sd[e],n.blade=cd[e];let r=t!==`side`;if(r&&e>=2&&e<=3&&(n.handR=e===2?[-3.6,12.6,4.2]:[-2.8,10.6,4.8],n.blade=Ml(e===2?[-.32,-.9,.3]:[-.2,-.85,.5])),n.handL=K(K(n.handR,q(n.blade,-1.3)),[1.1,-.2,.3]),n.wind=e>=2?[0,1.2,-2.8]:[0,-.5,.6],n.phase=e*1.1,n.lanternSwing=[.2,.3,-.5,-.6,-.3][e],e===2){if(r){let e=[-1,15.5,3.2];n.smear=qu(e,[.12,1,.05],Ol(K(n.handR,q(n.blade,12.5)),e),5.5,15.5)}else n.smear=qu([-2.4,17,.6],[-.3,.82,-.5],cd[2],5.5,16.5)}return n}function ud(e){let t=Xu();if(e===0||e===5){let n=e===5;return t.pelvis=[0,n?9:8.6,n?0:.8],t.lean=n?.3:.62,t.headPitch=n?.1:.35,t.footL=n?[2.4,1.3,1.6]:[2.2,1.3,1.8],t.footR=n?[-2.4,1.3,-1.4]:[-2.2,1.3,-1.8],t.handL=n?[6.2,12.5,.5]:[3.4,10.5,5],t.handR=n?[-6,12,1]:[-3.4,10.8,4.6],t.blade=Ml([-.2,-.2,-1]),t.wind=n?[0,.6,1.2]:[0,.5,-2.5],t.phase=e,t}return t.ball=[.9,2.45,4,5.5][e-1],t.phase=e*1.7,t}function dd(e){let t=Xu(),n=e===0?1:.45;return t.lean=-.36*n,t.headPitch=-.4*n,t.pelvis=[0,10.4,-.8*n],t.handR=[-6.4,13.5+1.5*n,-1],t.handL=[6.4,13.8+1.5*n,-1],t.blade=Ml([-.6,.3,.6]),t.footL=[2.4,1.3,.8],t.footR=[-2.4,1.3,-.4],t.squash=e===0?.95:1,t.wind=[0,.3,1.2*n],t.phase=e*2,t.lanternSwing=-.5*n,t}function fd(e,t){let n=Xu(),r=t===`down`?-1:1;if(e===0){let e=dd(0);return e.lean=-.42,e}n.pelvis=[0,[0,8.2,7.6,7.2,6.9,6.9][e],-.4],n.lean=[0,.35,.3,.25,.1,.05][e],n.headPitch=[0,.5,.4,.3,.2,.2][e],n.footL=[2.4,1.3,1.2],n.footR=[-2.4,1.3,-.4],n.handL=[5.2,7,1.5],n.handR=[-5.2,7.2,2],n.blade=Ml([-.4,-.8,.4]),n.wind=[0,-1,0],n.phase=e;let i=[0,0,.45,1,1.42,1.57][e];return n.viewRoll=i*r,n.viewShift=[r*10*(i/1.57),0],n.lanternSwing=i*.8*r,n}function pd(e){let t=Xu();return t.lean=-.1,t.headPitch=-.28,t.handL=[3.4,25+e*.4,3.2],t.handR=[-5,11.8,1.8],t.lantern=`hand`,t.lanternSwing=e===0?.08:-.08,t.wind=[.2,.4,-.9],t.phase=e*2,t}var md=[{name:`idle`,frames:4,durations:[220,200,240,200],loop:!0,pose:e=>td(e)},{name:`run`,frames:8,durations:Array(8).fill(70),loop:!0,pose:e=>rd(e)},{name:`attack1`,frames:5,durations:[70,55,50,80,110],loop:!1,pose:e=>ad(e)},{name:`attack2`,frames:5,durations:[65,50,50,80,110],loop:!1,pose:e=>od(e)},{name:`attack3`,frames:5,durations:[120,140,55,120,160],loop:!1,pose:(e,t)=>ld(e,t)},{name:`dodge`,frames:6,durations:[40,55,55,55,55,85],loop:!1,pose:e=>ud(e)},{name:`hurt`,frames:2,durations:[90,160],loop:!1,pose:e=>dd(e)},{name:`death`,frames:6,durations:[130,150,110,100,130,1200],loop:!1,pose:(e,t)=>fd(e,t)},{name:`raise`,frames:2,durations:[320,320],loop:!0,pose:e=>pd(e)}];function hd(e,t){let{w:n,h:r,ox:i,oy:a}=Wu;if(e.roll||e.ball!==void 0){let o=new Ql(n,r+48,i,a+24);o.setView(wl[t],Gu),e.ball===void 0?Zu(o,e):Qu(o,e.ball,e.phase);let s=o.resolve(),c=0;for(let e=0;e<r+48;e++)for(let t=0;t<n;t++)s.color[(e*n+t)*4+3]&&(c=e);let l=c-(a-1);return gd(s,Math.max(0,Math.min(48,l)),r)}let o=new Ql(n,r,i,a);return o.setView(wl[t],Gu,e.viewRoll??0,[0,5.5],e.viewShift??[0,0]),Zu(o,e),o.resolve()}function gd(e,t,n){let r=e.w,i=new Uint8Array(r*n*4),a=new Uint8Array(r*n*4);for(let o=0;o<n;o++){let n=o+t;for(let t=0;t<r;t++){let s=(o*r+t)*4;if(n<0||n>=e.h){a[s]=128,a[s+1]=128,a[s+2]=255;continue}let c=(n*r+t)*4;for(let t=0;t<4;t++)i[s+t]=e.color[c+t],a[s+t]=e.normal[c+t]}}return{w:r,h:n,color:i,normal:a}}function _d(){let e=[];for(let t of md)for(let n of Cl){let r=[];for(let e=0;e<t.frames;e++)r.push(hd(t.pose(e,n),n));e.push({key:`${t.name}_${n}`,frames:r,durations:t.durations,loop:t.loop})}return Tl(`hero`,Wu.w,Wu.h,Wu.ox,Wu.oy,e,16)}var vd={w:48,h:56,ox:24,oy:53},yd={robe:{ramp:G.plum,tones:[1,2,3,4]},robeDark:{ramp:G.plum,tones:[0,1,2,3]},inner:{ramp:G.linen,tones:[2,3,4,4]},sash:{ramp:G.mustard,tones:[1,2,3,4]},skin:{ramp:G.skin,tones:[1,2,3,4]},hair:{ramp:G.whiteHair,tones:[1,2,3,4]},brow:{ramp:G.whiteHair,tones:[2,3,4,4]},eye:{ramp:G.hair,tones:[0,0,0,0],flat:!0},hat:{ramp:G.sand,tones:[0,1,2,3],speckle:{seed:5,scale:.9,amount:.16}},hatBand:{ramp:G.indigo,tones:[1,2,3,4]},staff:{ramp:G.wood,tones:[1,2,3,4]},shoe:{ramp:G.woodDark,tones:[0,1,2,3]},silk:{ramp:G.rose,tones:[2,3,4,4],emissive:.55},silkBand:{ramp:G.indigo,tones:[2,3,4,4]},tassel:{ramp:G.mustard,tones:[2,3,3,4]},glow:{ramp:G.ember,tones:[3,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1}};function bd(){return{bob:0,lean:.22,headPitch:.05,headYaw:0,handL:[5.8,12.6,3.4],handR:[-2.2,10.6,4.4],swing:0,phase:0}}function xd(e,t){let n=Il(t.lean),r=Bl(n),i=[0,9.6-t.bob,.2],a=e=>K(i,J(n,e));e.ellipsoid([0,4.4,.2],[5.7,4.8,4.7],yd.robe),e.ellipsoid([0,8.4-t.bob*.5,.3],[5,4,4],yd.robe),e.line([.8,1.2,4.7],[.5,10.5,4.1],yd.robeDark,{tone:0});for(let t of[1,-1])e.capsule([t*2,.9,2.8],[t*2.1,.8,4.6],1.25,1.1,yd.shoe);e.ellipsoid(a([0,3.4,-.2]),[4.5,4.4,3.6],yd.robe,{axes:r}),e.ellipsoid(a([0,5.2,-2]),[3.8,3,2.6],yd.robe,{axes:r}),e.ellipsoid(a([0,.6,.2]),[4.9,1,4],yd.sash,{axes:r}),e.sphere(a([1.7,.6,3.9]),1.1,yd.sash),e.capsule(a([1.9,.2,4.1]),[2.6+Math.sin(t.phase)*.35,4.8,5.1],.9,.7,yd.sash),e.ellipsoid(a([0,6.6,2.3]),[2.1,1.6,1.3],yd.inner,{axes:r});let o=a([0,7.6,.8]),s=zl(n,zl(Ll(t.headYaw),Il(t.headPitch))),c=Bl(s),l=e=>K(o,J(s,e));e.ellipsoid(l([0,4.6,-1.5]),[4.6,3.8,3.8],yd.hair,{axes:c});let u=l([0,4.2,1.2]);e.sphere(u,4.3,yd.skin,{axes:c});let d=Math.sin(t.phase*1.3)*.35;e.ellipsoid(l([d,.9,4.1]),[2.9,3.5,1.8],yd.hair,{axes:c}),e.capsule(l([d,-1.8,4.6]),l([d*2.2,-4.4,4.9]),1.5,.55,yd.hair),e.ellipsoid(l([0,2.6,5.35]),[2.7,.8,.8],yd.hair,{axes:c});for(let t of[1,-1])e.ellipsoid(l([t*1.9,5.4,4.9]),[1.45,.7,.8],yd.brow,{axes:c});for(let t of[1,-1])e.dot(l([t*1.8-.5,4.5,5.4]),yd.eye,{size:[2,1],tol:2});e.sphere(l([0,3.5,5.35]),1,yd.skin);let f=Bl(zl(s,Il(-.34))),p=l([0,9.1,-.4]),m=e=>K(p,J(zl(s,Il(-.34)),e));e.ellipsoid(m([0,0,0]),[8.6,1.15,8],yd.hat,{axes:f}),e.ellipsoid(m([0,1.5,0]),[3.7,2.3,3.5],yd.hat,{axes:f}),e.ellipsoid(m([0,.7,0]),[3.9,.7,3.7],yd.hatBand,{axes:f});let h=[[a([4.3,5.3,.3]),t.handL,1],[a([-4.3,5.3,.3]),t.handR,-1]];for(let[t,n,r]of h){let i=Pl(t,n,4.3,3.9,[r*.6,-.4,-.5]),a=K(n,q(Ml(Ol(n,i)),-1.1));e.capsule(t,i,1.9,2,yd.robe),e.capsule(i,a,2,2.4,yd.robe),e.sphere(n,1.3,yd.skin)}let g=t.handL,_=[g[0]+.5,0,g[2]+.5],v=[g[0]-.2,31,g[2]-.5];e.capsule(_,v,.75,.62,yd.staff);let y=K(v,[3,1.8,0]),b=K(y,[2.7,-1.2,0]);e.capsule(v,y,.62,.6,yd.staff),e.capsule(y,b,.6,.55,yd.staff);let x=t.swing,S=Bl(Rl(x)),C=K(b,[0,-.5,0]),w=K(C,[Math.sin(x)*6.4,-Math.cos(x)*6.4,0]);e.line(C,K(w,q(S[1],3.4)),yd.tassel,{tone:1}),e.box(K(w,q(S[1],3.3)),[2.4,.5,2.4],S,yd.silkBand,{bevel:.4}),e.ellipsoid(w,[2.9,3.2,2.9],yd.silk,{axes:S}),e.box(K(w,q(S[1],-3.3)),[2.4,.5,2.4],S,yd.silkBand,{bevel:.4}),e.ellipsoid(K(w,J(Rl(x),[.3,.3,1.9])),[1.4,1.9,1.2],yd.glow,{axes:S}),e.line(K(w,q(S[1],-3.8)),K(w,K(q(S[1],-6),[Math.sin(x)*.8,0,0])),yd.tassel,{tone:2})}function Sd(e){let t=bd();return t.bob=[0,.3,.6,.3][e],t.swing=[.08,.03,-.06,-.02][e],t.phase=e/4*Math.PI*2,t.handR=[-2.2,10.6-t.bob*.6,4.4],t.handL=[5.8,12.6-t.bob*.5,3.4],t}function Cd(e){let t=bd();return t.bob=[0,.4,.1,.5][e],t.headPitch=[.02,-.12,.06,-.08][e],t.headYaw=[0,.06,-.04,.03][e],t.lean=.18,t.handR=[[-5.6,15.4,5.2],[-5.2,16.4,5.6],[-5.8,15,5],[-5,16,5.4]][e],t.swing=[.1,-.04,.06,-.08][e],t.phase=e*1.7,t}var wd=[{name:`idle`,frames:4,durations:[280,240,300,240],loop:!0,pose:e=>Sd(e)},{name:`talk`,frames:4,durations:[150,150,150,150],loop:!0,pose:e=>Cd(e)}];function Td(e,t){return eu(vd,t,t=>xd(t,e))}function Ed(){return tu(`sol`,vd,Cl,wd,Td)}var Dd={w:48,h:56,ox:24,oy:53};function Od(e,t){let n=(n,r)=>i=>Math.max(0,Math.min(1,(i[1]-t-n)/(r-n)))*(1-e);return{shroud:{ramp:G.mist,tones:[2,3,4,5],coverage:n(12,22)},shroudBody:{ramp:G.mist,tones:[2,3,4,5],coverage:n(13,21),speckle:{seed:8,scale:.6,amount:.12}},lining:{ramp:G.indigo,tones:[0,1,1,2],coverage:n(12,22)},hood:{ramp:G.mist,tones:[2,3,4,5],coverage:()=>1-e*.95},void:{ramp:G.ink,tones:[0,0,1,1],flat:!0,coverage:()=>1-e},tail:{ramp:G.mist,tones:[1,2,3,4],coverage:n(1,16)},eye:{ramp:G.cold,tones:[4,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1,coverage:()=>1-e},core:{ramp:G.cold,tones:[2,3,4,4],emissive:.85,flat:!0,inner:!1,receive:!1,coverage:()=>1-e},coreHot:{ramp:G.cold,tones:[3,4,4,4],emissive:1,flat:!0,inner:!1,receive:!1,coverage:()=>1-e}}}function kd(e,t){let n=t.hover,r=Od(t.fade,n),i=Il(t.lean),a=[0,25+n,0],o=e=>K(a,J(i,e)),s=[{y:4.6,r:4.4},{y:.5,r:6},{y:-4.5,r:7.4},{y:-9.5,r:8.3},{y:-13,r:8.8}],c=[],l=[];for(let e=0;e<s.length;e++){let n=[],r=[],a=e/(s.length-1);for(let c=0;c<=12;c++){let l=-(c/12)*Math.PI*2,u=Math.sin(t.phase+c*1.1+e*.8)*a,d=s[e].r+u*.9,f=e===s.length-1?c%2==0?1.6:-.6:0;n.push(o([Math.sin(l)*d,s[e].y-f+u*.6,Math.cos(l)*d-a*1.5]));let p=c%2==0?.25:-.25;r.push(Ml(J(i,[Math.sin(l+p),.3,Math.cos(l+p)])))}c.push(n),l.push(r)}e.cloth(c,r.shroudBody,{backMat:r.lining,gridNormals:l});let u=o([0,-9,-1.2]);for(let n=0;n<3;n++){let i=K(u,[Math.sin(t.phase*1.2+n*1.3)*1.6,-4.4,-.8]);e.capsule(u,i,4.2-n*1.2,3-n*1,r.tail),u=i}for(let n of[1,-1]){let i=o([n*5,3.4,.2]),a=o([n*7.8,-4.2+Math.sin(t.phase+n)*.6,2.4]),s=o([n*3.2,1.2,8.6]),c=[a[0]+(s[0]-a[0])*t.arms,a[1]+(s[1]-a[1])*t.arms,a[2]+(s[2]-a[2])*t.arms],l=K(q(K(i,c),.5),[n*1.2,.6,-.4]);e.capsule(i,l,2,1.8,r.shroud),e.capsule(l,c,1.8,1.4,r.shroud);let u=Ml(Ol(c,l));for(let t=-1;t<=1;t++)e.line(c,K(c,K(q(u,2.2),[t*.9,-.6,0])),r.shroud,{tone:1})}let d=o([0,.8,6.9]);e.sphere(d,1.7+t.core*.8,t.core>.6?r.coreHot:r.core);let f=o([0,9.2,.4]),p=Bl(Ll(0));e.ellipsoid(f,[5.7,6.2,5.5],r.hood,{axes:p,opening:e=>e[2]>.28&&e[1]<.34&&e[1]>-.72&&Math.abs(e[0])<.66,innerMat:r.void});let m=o([0,14.2,-2.4]),h=K(m,[Math.sin(t.phase)*1.4,2.4,-3.6]);e.capsule(m,h,2.3,.5,r.hood);for(let t of[1,-1])e.sphere(K(f,[t*1.8,-.8,1]),.95,r.eye)}function Ad(e){let t=e/6*Math.PI*2;return{hover:4+Math.sin(t)*1.2,lean:.05,arms:.05,core:.2+.15*Math.sin(t),phase:t,fade:0}}function jd(e){let t=[.3,.7,1,1,.6,.25][e],n=[.3,.6,.9,1,.4,.2][e];return{hover:[4.4,5.2,5.8,4.6,4.2,4.1][e],lean:[0,-.08,-.12,.2,.12,.05][e],arms:t,core:n,phase:e*1.1,fade:0}}function Md(e){return{hover:4.6,lean:-.3+e*.12,arms:0,core:.1,phase:e*2,fade:e===0?.25:0}}function Nd(e){return{hover:4-e*.6,lean:-.2+e*.08,arms:.1,core:Math.max(0,.8-e*.2),phase:e*1.4,fade:[.1,.25,.42,.6,.78,.93][e]}}var Pd=[{name:`float`,frames:6,durations:[,,,,,,].fill(115),loop:!0,pose:e=>Ad(e)},{name:`cast`,frames:6,durations:[90,90,110,120,110,140],loop:!1,pose:e=>jd(e)},{name:`hurt`,frames:2,durations:[80,150],loop:!1,pose:e=>Md(e)},{name:`death`,frames:6,durations:[80,90,100,110,120,600],loop:!1,pose:e=>Nd(e)}];function Fd(e,t){return eu(Dd,t,t=>kd(t,e))}function Id(){return tu(`wisp`,Dd,Cl,Pd,Fd)}var Ld=class e{w;h;data;constructor(e,t){this.w=e,this.h=t,this.data=new Uint8Array(e*t*4)}idx(e,t){let n=(e%this.w+this.w)%this.w;return((t%this.h+this.h)%this.h*this.w+n)*4}set(e,t,n){let r=this.idx(Math.floor(e),Math.floor(t));this.data[r]=n[0],this.data[r+1]=n[1],this.data[r+2]=n[2],this.data[r+3]=n[3]}put(e,t,n){if(e=Math.floor(e),t=Math.floor(t),e<0||t<0||e>=this.w||t>=this.h)return;let r=(t*this.w+e)*4;this.data[r]=n[0],this.data[r+1]=n[1],this.data[r+2]=n[2],this.data[r+3]=n[3]}get(e,t){let n=this.idx(Math.floor(e),Math.floor(t));return[this.data[n],this.data[n+1],this.data[n+2],this.data[n+3]]}alpha(e,t){return e=Math.floor(e),t=Math.floor(t),e<0||t<0||e>=this.w||t>=this.h?0:this.data[(t*this.w+e)*4+3]}fill(e){for(let t=0;t<this.w*this.h;t++)this.data[t*4]=e[0],this.data[t*4+1]=e[1],this.data[t*4+2]=e[2],this.data[t*4+3]=e[3]}each(e){for(let t=0;t<this.h;t++)for(let n=0;n<this.w;n++){let r=e(n,t);r&&this.set(n,t,r)}}rect(e,t,n,r,i,a=!0){for(let o=t;o<t+r;o++)for(let t=e;t<e+n;t++)a?this.set(t,o,i):this.put(t,o,i)}line(e,t,n,r,i,a=!0){e=Math.round(e),t=Math.round(t),n=Math.round(n),r=Math.round(r);let o=Math.abs(n-e),s=-Math.abs(r-t),c=e<n?1:-1,l=t<r?1:-1,u=o+s;for(;a?this.set(e,t,i):this.put(e,t,i),e!==n||t!==r;){let n=2*u;n>=s&&(u+=s,e+=c),n<=o&&(u+=o,t+=l)}}disc(e,t,n,r,i=!0){for(let a=Math.floor(t-n);a<=Math.ceil(t+n);a++)for(let o=Math.floor(e-n);o<=Math.ceil(e+n);o++){let s=o+.5-e,c=a+.5-t;s*s+c*c<=n*n&&(i?this.set(o,a,r):this.put(o,a,r))}}clone(){let t=new e(this.w,this.h);return t.data.set(this.data),t}blit(e,t,n,r=!1){for(let i=0;i<e.h;i++)for(let a=0;a<e.w;a++){let o=(i*e.w+a)*4;if(e.data[o+3]===0)continue;let s=[e.data[o],e.data[o+1],e.data[o+2],e.data[o+3]];r?this.set(t+a,n+i,s):this.put(t+a,n+i,s)}}},Rd=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(e=>(e+.5)/16);function zd(e,t){return Rd[(t%4+4)%4*4+(e%4+4)%4]}function Bd(e,t,n,r,i,a,o=.05){let s=r-n+1,c=Math.max(0,Math.min(.9999,t))*s+(zd(i,a)-.5)*o*s,l=Math.max(0,Math.min(s-1,Math.floor(c)));return e.colors[n+l]}function Vd(e,t){let n=e.clone();for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++)n.alpha(i,r)>0||(n.alpha(i-1,r)||n.alpha(i+1,r)||n.alpha(i,r-1)||n.alpha(i,r+1))&&e.put(i,r,t)}var Hd={mapleA:0,mapleB:1,mapleC:2,bushA:3,bushB:4,pineA:5,pineB:6,dead:7,tuftA:8,tuftB:9,flowersA:10,flowersB:11,reeds:12,fern:13,mushroom:14,vine:15,pineDark:16,mossClump:17,lotus:18,pebbleClump:19,crop:20,cropB:21};function Ud(e,t,n,r,i,a){for(let o=0;o<a;o++)for(let a=0;a<i;a++)e.put(t+a,n+o,r)}function Wd(e,t,n={}){let r=new Ld(32,32),i=new Hl(t),a=n.r??12.5,o=n.count??150,s=n.lo??1,c=n.hi??e.colors.length-2,l=n.cy??16,u=[];for(let e=0;e<o;e++){let e=i.float()*Math.PI*2,t=Math.sqrt(i.float())*a,r=16+Math.cos(e)*t,o=l+Math.sin(e)*t*(n.flat??.85),d=(r-16)/a,f=(o-16)/a,p=-d*.45-f*.75+(1-Math.hypot(d,f))*.35+(i.float()-.5)*.35;p=(p+.8)/1.6;let m=Math.max(s,Math.min(c,s+Math.floor(p*(c-s+1))));u.push({x:r,y:o,tone:m,w:i.chance(.6)?2:3,h:2})}u.sort((e,t)=>e.tone-t.tone);for(let t of u)Ud(r,Math.floor(t.x),Math.floor(t.y),e.colors[t.tone],t.w,t.h),t.tone===c&&i.chance(.3)&&r.put(Math.floor(t.x),Math.floor(t.y)-1,e.colors[Math.min(e.colors.length-1,c+1)]);if(n.outline===!1){let t=r.clone();for(let n=0;n<32;n++)for(let i=0;i<32;i++)t.alpha(i,n)&&(!t.alpha(i,n+1)||!t.alpha(i+1,n))&&r.put(i,n,e.colors[Math.max(0,s-1)])}else Vd(r,e.outline);return r}function Gd(e,t,n=!1){let r=new Ld(32,32),i=new Hl(t),a=[],o=[];for(let e=0;e<32;e++){let n=(e+t)%6;a.push(n<2?1.5:n<4?0:-1+i.float()),o.push((e+t+3)%6<2?1.5:(e+t+3)%6<4?0:-1+i.float())}for(let s=3;s<=27;s++){let c=(s-3)/24,l=2+c*12.5;for(let u=0;u<32;u++){let d=u+.5-16;if(d<0&&-d>l+a[s]*c||d>=0&&d>l+o[s]*c)continue;let f=(u*7+t)%5;if(s>24&&f>1+(27-s))continue;let p=-d/16*.55-(c-.5)*.7+(i.float()-.5)*.25;(u+s*2+t)%7==0&&(p-=.35),p=(p+.7)/1.4;let m=+!n,h=n?3:4,g=Math.max(m,Math.min(h,m+Math.floor(p*(h-m+1))));r.put(u,s,e.colors[g])}}return Vd(r,e.outline),r}function Kd(e,t,n){let r=new Ld(32,32),i=new Hl(t);for(let t=0;t<12;t++){let t=16+(i.float()-.5)*11,n=(t-16)*.3+(i.float()-.5)*2.5,a=i.int(5,10),o=i.int(2,4);for(let i=0;i<a;i++){let s=i/a,c=t+n*s*s,l=30-i;r.put(c,l,e.colors[i>a-3?Math.min(5,o+1):o])}}if(n)for(let e=0;e<4;e++){let e=i.int(10,21),t=i.int(20,25),n=i.pick([G.amber.colors[4],G.rose.colors[4],G.linen.colors[5],G.mustard.colors[4]]);r.put(e,t,n),r.put(e+1,t,n),r.put(e,t-1,n),r.put(e+1,t+1,G.grass.colors[1])}return Vd(r,e.outline),r}function qd(e){let t=new Ld(32,32),n=new Hl(e);for(let e=0;e<9;e++){let e=8+n.float()*16,r=(n.float()-.5)*4,i=n.int(16,27);for(let n=0;n<i;n++){let a=n/i;t.put(e+r*a,31-n,G.moss.colors[n<4?1:3])}if(n.chance(.5)){let n=e+r,a=31-i;for(let e=0;e<4;e++)t.put(n,a+e,G.wood.colors[e===0?4:3])}}return Vd(t,G.moss.outline),t}function Jd(e){let t=new Ld(32,32),n=new Hl(e);for(let e=0;e<6;e++){let r=-Math.PI/2+(e-2.5)*.45+(n.float()-.5)*.2,i=n.int(10,14);for(let e=0;e<i;e++){let n=16+Math.cos(r)*e,a=29+Math.sin(r)*e+e*e/40;t.put(n,a,G.moss.colors[3]),e%2==0&&e>2&&(t.put(n-1,a+1,G.moss.colors[e>i-4?4:2]),t.put(n+1,a+1,G.moss.colors[2]))}}return Vd(t,G.moss.outline),t}function Yd(e,t,n,r){let i=new Ld(32,32),a=new Hl(e);for(let e=0;e<5;e++){let e=a.int(8,22),o=a.int(3,7),s=a.int(2,3);for(let t=0;t<o;t++)i.put(e,30-t,G.bone.colors[2]);for(let a=-s;a<=s;a++){let c=30-o-(Math.abs(a)===s?0:1);i.put(e+a,c,G.cold.colors[a<0?4:3]),i.put(e+a,c+1,G.cold.colors[2]),t.put(n+e+a,r+c,[255,255,255,255]),t.put(n+e+a,r+c+1,[200,200,200,255])}}return Vd(i,G.cold.outline),i}function Xd(e){let t=new Ld(32,32),n=new Hl(e);for(let e=0;e<4;e++){let r=6+e*6+n.int(-1,1),i=n.int(14,30);for(let e=0;e<i;e++)t.put(r,e,G.moss.colors[2]),e%3==0&&(t.put(r+1,e,G.moss.colors[3]),t.put(r-1,e+1,G.moss.colors[4])),n.chance(.2)&&(r+=n.int(-1,1))}return Vd(t,G.moss.outline),t}function Zd(e){let t=new Ld(32,32),n=new Hl(e);for(let e=18;e<30;e++)for(let n=4;n<28;n++){let r=(n+.5-16)/12,i=(e+.5-24)/5;r*r+i*i>1||Math.abs(n-16)<1&&e<24||t.put(n,e,G.moss.colors[i<-.3?4:i>.4?2:3])}if(n.chance(1))for(let e=0;e<4;e++)t.put(15+e%2,20-e,G.rose.colors[4-(e>>1)]),t.put(17-e%2,20-e,G.rose.colors[3]);return Vd(t,G.moss.outline),t}function Qd(){let e=new Ld(256,96),t=new Ld(256,96);t.fill([0,0,0,255]);let n=(t,n)=>e.blit(n,t%8*32,Math.floor(t/8)*32),r=e=>[e%8*32,Math.floor(e/8)*32];n(Hd.mapleA,Wd(G.leafWarm,301,{lo:1,hi:4,outline:!1})),n(Hd.mapleB,Wd(G.leafWarm,302,{lo:2,hi:4,r:11.5,outline:!1})),n(Hd.mapleC,Wd(G.leafWarm,303,{lo:1,hi:3,r:13,outline:!1})),n(Hd.bushA,Wd(G.grass,304,{lo:1,hi:4,r:11,flat:.72,cy:21.5})),n(Hd.bushB,Wd(G.moss,305,{lo:1,hi:4,r:10,flat:.78,cy:22})),n(Hd.pineA,Gd(G.pine,306)),n(Hd.pineB,Gd(G.pine,307)),n(Hd.dead,Wd(G.stoneWarm,308,{lo:1,hi:3,r:11,count:90})),n(Hd.tuftA,Kd(G.grass,309,!1)),n(Hd.tuftB,Kd(G.moss,310,!1)),n(Hd.flowersA,Kd(G.grass,311,!0)),n(Hd.flowersB,Kd(G.moss,312,!0)),n(Hd.reeds,qd(313)),n(Hd.fern,Jd(314));let[i,a]=r(Hd.mushroom);return n(Hd.mushroom,Yd(315,t,i,a)),n(Hd.vine,Xd(316)),n(Hd.pineDark,Gd(G.pine,317,!0)),n(Hd.mossClump,Wd(G.moss,318,{lo:1,hi:4,r:10,flat:.6,count:110,cy:24})),n(Hd.lotus,Zd(319)),n(Hd.pebbleClump,Wd(G.stone,320,{lo:2,hi:4,r:9,flat:.55,count:40,cy:25})),n(Hd.crop,Wd(G.grass,321,{lo:2,hi:5,r:6.5,flat:.7,count:60,cy:26})),n(Hd.cropB,Wd(G.moss,322,{lo:2,hi:5,r:5.5,flat:.8,count:50,cy:26.5})),{color:e,glow:t}}function $d(){let e=new Ld(192,32);for(let t=0;t<3;t++){let n=t*64;for(let r=0;r<32;r++)for(let i=0;i<64;i++){let a=i+.5-32,o=r+.5-34,s=Math.hypot(a,o),c=Math.atan2(-o,a);if(c<.12||c>Math.PI-.12)continue;let l=1-c/Math.PI,u=2+l*7-t*1.5,d=29-t*.5,f=d-u;if(s>d||s<f)continue;let p=(s-f)/Math.max(.01,d-f),m=p>.62?G.steel.colors[5]:p>.3?G.cold.colors[4]:G.cold.colors[3];l<.25&&(m=G.cold.colors[3]);let h=t===0?0:t===1?.35+(1-l)*.3:.7+(1-l)*.25;zd(i,r)<h||e.set(n+i,r,m)}}return e}function ef(e=`danger`){let t=new Ld(64,64),n=e===`danger`?G.danger:e===`cold`?G.cold:G.ember,r=new Hl(9);for(let e=0;e<64;e++)for(let i=0;i<64;i++){let a=Math.hypot(i+.5-32,e+.5-32);if(a>31||a<26)continue;let o=(a-26)/5,s=o>.6?n.colors[4]:o>.3?n.colors[3]:n.colors[2];r.chance(.06)||t.set(i,e,s)}return t}function tf(e){let t=new Ld(16,16),n=e===`cold`?G.cold:e===`ember`?G.ember:G.rune;for(let e=0;e<16;e++)for(let r=0;r<16;r++){let i=Math.hypot(r+.5-8,e+.5-8);if(i>7.2)continue;let a=i<2.5?n.colors[4]:i<4.5?n.colors[3]:i<6?n.colors[2]:n.colors[1];i>6&&zd(r,e)>.5||t.set(r,e,a)}return t}function nf(){let e=new Ld(96,32);for(let t=0;t<3;t++){let n=t*32,r=[13,15,11][t],i=[2,1,1][t];for(let a=-r;a<=r;a++){let o=1-Math.abs(a)/r,s=o>.6?G.steel.colors[5]:o>.3?G.amber.colors[5]:G.amber.colors[4];for(let r=-i;r<=i;r++)Math.abs(r)===i&&o<.5||t===2&&zd(a+16,r+16)>o||(e.set(n+16+a,16+r,s),e.set(n+16+r,16+a,s))}let a=[7,9,6][t];for(let r=2;r<=a;r++){let i=r<a-2?G.amber.colors[5]:G.amber.colors[4];(t!==2||r%2!=0)&&(e.set(n+16+r,16+r,i),e.set(n+16-r,16+r,i),e.set(n+16+r,16-r,i),e.set(n+16-r,16-r,i))}if(t===0)for(let t=-3;t<=3;t++)for(let r=-3;r<=3;r++)r*r+t*t<=9&&e.set(n+16+r,16+t,G.steel.colors[5])}return e}function rf(){let e=new Ld(32,16);for(let t=0;t<2;t++){let n=t*16;for(let r=0;r<16;r++)for(let i=0;i<16;i++){let a=i+.5-8,o=r+.5-8,s=Math.abs(a)+Math.abs(o),c=t===0?7:6;if(s>c)continue;let l=s<2?G.rune.colors[4]:s<4?G.rune.colors[3]:s<c-1?G.rune.colors[2]:G.rune.colors[1];e.set(n+i,r,l)}}return e}function af(){let e=new Ld(32,8),t=new Hl(77);return[[[3.6,5.3,1.9]],[[2.8,4.9,2.1],[5,5.1,1.8]],[[1.8,4.3,1.45],[4.2,3.6,1.55],[6.1,4.9,1.15]],[[1.5,3.2,.95],[4.4,2.6,1.05],[6.4,4,.8]]].forEach((n,r)=>{let i=r*8,a=n.map(([e,n,r])=>[e+(t.float()-.5)*.4,n+(t.float()-.5)*.4,r]);for(let t=0;t<8;t++)for(let n=0;n<8;n++){let o=!1,s=!1;for(let[e,r,i]of a){let a=Math.hypot(n+.5-e,t+.5-r);a>i||(o=!0,a<i*.72&&t+.5<r-i*.15&&(s=!0))}if(!o)continue;let c=r===3?G.sand.colors[2]:s&&r<2?G.sand.colors[4]:G.sand.colors[3];e.set(i+n,t,c)}}),e}var of=64;function sf(e,t,n,r){return Gl(e/of*n,t/of*n,r,n,n)}function cf(e,t,n,r,i=3){let a=0,o=.5,s=0,c=n;for(let n=0;n<i;n++)a+=o*sf(e,t,c,r+n*17),s+=o,o*=.5,c*=2;return a/s}function lf(e,t,n,r,i,a,o){for(let o=0;o<r;o++)e.set(t,n-o,o===r-1?a:i);e.set(t,n+1,o)}function uf(e,t,n,r,i,a,o){let s=o.int(2,3);for(let o=0;o<i;o++)for(let c=0;c<r;c++){if((c===0||c===r-1)&&(o===0||o===i-1)&&r>2&&i>2)continue;let l=a.colors[s];(o===0||c===0)&&(l=a.colors[s+1]),o===i-1&&(l=a.colors[s-1]),e.set(t+c,n+o,l)}e.set(t+1,n+i,a.colors[Math.max(0,s-2)])}function df(e=11){let t=new Ld(of,of),n=G.grass;t.each((t,r)=>{let i=cf(t,r,4,e,2);return Bd(n,i*1.1-.05,2,4,t,r,.04)});let r=new Hl(e);for(let i=0;i<48;i++){let i=r.int(0,63),a=r.int(0,63),o=sf(i,a,4,e)>.45,s=r.int(3,5);for(let e=0;e<s;e++)lf(t,i+e-(s>>1),a-e%2,r.int(2,3),n.colors[o?4:3],n.colors[o?5:4],n.colors[1])}for(let e=0;e<40;e++){let e=r.int(0,63),i=r.int(0,63);t.set(e,i,n.colors[1]),t.set(e+1,i,n.colors[1])}for(let e=0;e<9;e++){let e=r.int(0,63),i=r.int(0,63),a=r.pick([G.amber.colors[4],G.rose.colors[4],G.linen.colors[5],G.mustard.colors[4]]);t.set(e,i,a),t.set(e,i+1,n.colors[1])}return t}function ff(e=23){let t=new Ld(of,of),n=G.pine,r=G.moss;t.each((t,i)=>{let a=cf(t,i,4,e),o=sf(t,i,6,e+9);return o>.66?Bd(r,(o-.66)*3,1,3,t,i,.06):Bd(n,a,1,3,t,i,.06)});let i=new Hl(e);for(let e=0;e<90;e++){let e=i.int(0,63),n=i.int(0,63),r=i.chance(.5)?1:-1,a=i.chance(.5)?G.earth.colors[3]:G.earth.colors[2];t.set(e,n,a),t.set(e+r,n+1,a)}for(let e=0;e<80;e++)lf(t,i.int(0,63),i.int(0,63),i.int(1,2),r.colors[3],r.colors[4],n.colors[0]);return t}function pf(e=31){let t=new Ld(of,of),n=G.earth,r=G.sand;t.each((t,i)=>{let a=cf(t,i,4,e,2)*.85+sf(t,i,16,e+3)*.15;return a<.36?n.colors[3]:Bd(r,(a-.36)/.64,1,3,t,i,.05)});let i=new Hl(e);for(let e=0;e<26;e++){let e=i.int(2,3);uf(t,i.int(0,63),i.int(0,63),e,2,G.stoneWarm,i)}for(let e=0;e<50;e++)t.set(i.int(0,63),i.int(0,63),i.chance(.5)?n.colors[2]:r.colors[4]);return t}function mf(e=41){let t=new Ld(of,of),n=G.stoneWarm;t.each((t,r)=>{let i=t/of*5,a=r/of*5,o=ql(i,a,5,e,.8),s=o.d2-o.d1;if(s<.09)return G.earth.colors[Ul(t,r,e)>.8?2:1];let c=3+ +(Ul(o.id,0,e)>.6)-(Ul(o.id,1,e)>.8),l=i-o.cx,u=a-o.cy,d=c;return s<.2&&(d+=l+u<0?1:-1),sf(t,r,16,e+7)>.8&&--d,n.colors[Math.max(1,Math.min(5,d))]});let r=new Hl(e);for(let n=0;n<40;n++){let n=r.int(0,63),i=r.int(0,63),a=ql(n/of*5,i/of*5,5,e,.8);a.d2-a.d1<.1&&lf(t,n,i,2,G.grass.colors[3],G.grass.colors[4],G.grass.colors[1])}return t}function hf(e=53){let t=new Ld(of,of),n=G.stone;t.each((t,r)=>{let i=Math.floor(r/16),a=i%2==0?0:8,o=((t+a)%16+16)%16,s=r%16,c=Math.floor((t+a)/16)+i*7,l=o===0||s===0,u=sf(t,r,6,e+3);if(l)return u>.55?G.moss.colors[2]:n.colors[0];let d=3+ +(Ul(c,3,e)>.65)-(Ul(c,4,e)>.75);return(o===1||s===1)&&(d+=1),(o===15||s===15)&&--d,cf(t,r,8,e)<.3&&--d,u>.68&&(o<3||s<3||o>12||s>12)?Bd(G.moss,(u-.68)*3,2,4,t,r,.08):n.colors[Math.max(1,Math.min(5,d))]});let r=new Hl(e);for(let e=0;e<7;e++){let e=r.int(0,63),i=r.int(0,63);for(let a=0;a<r.int(4,9);a++)t.set(e,i,n.colors[0]),t.set(e+1,i,n.colors[2]),e+=r.int(-1,1),i+=1}return t}function gf(e=61){let t=new Ld(of,of);t.each((t,n)=>Bd(G.sand,cf(t,n,4,e),1,3,t,n,.06));let n=new Hl(e);for(let e=0;e<70;e++){let e=n.int(2,4),r=n.int(2,3);uf(t,n.int(0,63),n.int(0,63),e,r,n.chance(.5)?G.stone:G.stoneWarm,n)}return t}function _f(e=71){let t=pf(e),n=new Hl(e+1);for(let e=0;e<70;e++){let e=n.int(0,63),r=n.int(0,63),i=G.leafWarm.colors[n.int(2,5)];t.set(e,r,i),n.chance(.6)&&t.set(e+1,r,i),t.set(e,r+1,G.leafWarm.colors[1])}return t}function vf(){return[df(),ff(),pf(),mf(),hf(),gf(),_f()]}var yf=[-.55,.7,.55],bf=Math.hypot(yf[0],yf[1],yf[2]);function xf(e,t,n,r,i,a,o,s={}){let c=e*t,l=s.jag??0,u=s.gaps??0,d=e=>s.ramps&&s.lobeRamp?s.ramps[s.lobeRamp[e]??0]:r,f=new Uint8Array(c*4),p=new Uint8Array(c*4),m=new Int16Array(c).fill(-1),h=new Float32Array(c).fill(-1e9),g=new Float32Array(c*3),_=new Int8Array(c).fill(-1);for(let r=0;r<t;r++)for(let i=0;i<e;i++){let o=r*e+i,s=Gl(i/2.6,r/2.6,a,0,0)*3.4-1.7+(l>0?(Gl(i/1.25,r/1.25,a+3,0,0)-.5)*2*l:0);for(let e=0;e<n.length;e++){let a=n[e],c=i+.5-a.x,l=r+.5-a.y,u=a.r+s,d=c*c+l*l;if(d>=u*u)continue;let f=Math.sqrt(u*u-d),p=f+a.r*.35-a.y/t*4;p>h[o]&&(h[o]=p,m[o]=e,g[o*3]=c/u,g[o*3+1]=-l/u,g[o*3+2]=f/u)}}for(let n=0;n<c;n++){if(m[n]<0)continue;let r=n%e,o=Math.floor(n/e),s=g[n*3],c=g[n*3+1],l=g[n*3+2],d=(s*yf[0]+c*yf[1]+l*yf[2])/bf*.5+.5,f=Gl(r/2.2,o/1.8,a+7,0,0);d+=(f-.5)*.28,d-=Math.max(0,o/t-.55)*.55;let p=d<.36?0:d<.55?1:d<.74?2:d<.9?3:4;u>0&&Gl(r/1.15,o/1.15,a+11,0,0)<u&&(p=Math.max(0,p-(o/t>.5?2:1))),_[n]=i[Math.min(i.length-1,p)]}let v=new Int8Array(_);for(let n=1;n<t-1;n++)for(let t=1;t<e-1;t++){let r=n*e+t;if(!(m[r]<0))for(let t of[r-e,r-1])m[t]>=0&&m[t]!==m[r]&&h[t]-h[r]>2.2&&(v[r]=Math.max(0,Math.min(_[r]-1,i[0])))}let y=new Hl(a);for(let e=0;e<c;e++){if(m[e]<0){p[e*4]=128,p[e*4+1]=128,p[e*4+2]=255;continue}let t=d(m[e]).colors[v[e]];f[e*4]=t[0],f[e*4+1]=t[1],f[e*4+2]=t[2],f[e*4+3]=255,p[e*4]=Math.round((g[e*3]*.5+.5)*255),p[e*4+1]=Math.round((g[e*3+1]*.5+.5)*255),p[e*4+2]=Math.round((g[e*3+2]*.5+.5)*255)}for(let n=0;n<e*t*.004;n++){let n=y.int(2,e-3),r=y.int(2,Math.floor(t*.6))*e+n;if(f[r*4+3]&&v[r]>=i[2]){let e=d(m[r]),t=e.colors[Math.min(e.colors.length-1,i[i.length-1]+1)];f[r*4]=t[0],f[r*4+1]=t[1],f[r*4+2]=t[2]}}let b=new Uint8Array(f);for(let n=0;n<t;n++)for(let i=0;i<e;i++){let a=n*e+i;if(f[a*4+3]||![[i-1,n],[i+1,n],[i,n-1],[i,n+1]].filter(([n,r])=>n>=0&&r>=0&&n<e&&r<t&&f[(r*e+n)*4+3]).length)continue;let o=r.outline;b[a*4]=o[0],b[a*4+1]=o[1],b[a*4+2]=o[2],b[a*4+3]=255}return{w:e,h:t,color:b,normal:p}}function Sf(e,t,n,r){let i=new Hl(r),a=e*t,o=new Int8Array(a).fill(-1),s=new Float32Array(a*3),c=e/2+i.range(-1,1),l=t-11;for(let t=5;t>=0;t--){let n=t/5,i=3+(l-3)*(t/6)*.92,u=3+(l-3)*((t+1)/6)+2,d=5+n*(e/2-6);for(let l=Math.floor(i);l<=Math.ceil(u)+3;l++)for(let f=0;f<e;f++){let p=(l-i)/(u-i);if(p<0)continue;let m=d*Math.min(1,Math.max(0,p)**.75*1.05),h=f+.5-c,g=h/Math.max(1,d);if(Math.abs(h)>m+.5)continue;let _=(f+t*3+r)%5/5,v=_<.4?2.5:+(_<.6),y=u+Math.abs(g)*2.2+v-1;if(l>y)continue;let b=l*e+f;if(b<0||b>=a)continue;let x=g*.75,S=.55-p*.5,C=Math.sqrt(Math.max(.05,1-x*x-S*S)),w=(x*yf[0]+S*yf[1]+C*yf[2])/bf*.5+.5,T=Gl(f/1.6+l/3.1,l/1.3,r+5,0,0);T>.7?w+=.17:T<.22&&(w-=.17),l>y-2.2&&(w-=.3),w+=(n-.5)*-.12,o[b]=w<.3?0:w<.48?1:w<.66?2:w<.84?3:4,s[b*3]=x,s[b*3+1]=S,s[b*3+2]=C}}let u=new Uint8Array(a*4),d=new Uint8Array(a*4);for(let e=0;e<a;e++){if(o[e]<0){d[e*4]=128,d[e*4+1]=128,d[e*4+2]=255;continue}let t=n.colors[Math.min(n.colors.length-1,o[e])];u.set([t[0],t[1],t[2],255],e*4),d.set([Math.round((s[e*3]*.5+.5)*255),Math.round((s[e*3+1]*.5+.5)*255),Math.round((s[e*3+2]*.5+.5)*255),0],e*4)}let f=new Uint8Array(u);for(let r=0;r<t;r++)for(let i=0;i<e;i++){let a=r*e+i;u[a*4+3]||[[i-1,r],[i+1,r],[i,r-1],[i,r+1]].some(([n,r])=>n>=0&&r>=0&&n<e&&r<t&&u[(r*e+n)*4+3])&&f.set([n.outline[0],n.outline[1],n.outline[2],255],a*4)}return{w:e,h:t,color:f,normal:d}}function Cf(e,t,n,r){let i=[],a=t/2,o=n*.52,s=e===`zelkova`?13:e===`dead`?5:9,c=t*.34,l=n*.3;for(let t=0;t<s;t++){let n=t/s*Math.PI*2+r.range(-.3,.3),u=r.range(.45,1);i.push({x:a+Math.cos(n)*c*u,y:o+Math.sin(n)*l*u-2,r:(e===`zelkova`?14:e===`dead`?8:11)+r.range(-2,3)})}return i.push({x:a-4,y:o-6,r:e===`zelkova`?18:14}),i.push({x:a+6,y:o+2,r:e===`zelkova`?16:12}),i}var wf={maple:{w:80,h:64,ramp:G.leafWarm,tones:[1,2,3,4,5],pivotY:58},zelkova:{w:112,h:88,ramp:G.amber,tones:[1,2,3,4,5],pivotY:80},pine:{w:64,h:100,ramp:G.pine,tones:[0,1,2,3,4],pivotY:96}};function Tf(e){let t=wf[e],n=[0,1,2].map(n=>{let r=1e3+n*13+e.length,i;if(e===`pine`)i=Sf(t.w,t.h,t.ramp,r);else{let a=new Hl(900+n*31+e.length*7),o=Cf(e,t.w,t.h,a),s={};if(e===`maple`){let e=new Hl(4200+n*17),r=t.h*.52,i=o.map(t=>{let n=e.float();return t.y<r-4?n<.28?2:0:t.y>r+3?+(n<.7):+(n<.45)});s={ramps:[G.leafWarm,G.leafRed,G.amber],lobeRamp:i,jag:1.1,gaps:.16}}i=xf(t.w,t.h,o,t.ramp,[...t.tones],r,t.pivotY,s)}return{key:`v${n}_down`,frames:[i],durations:[1e3],loop:!0}});return Tl(`canopy_${e}`,t.w,t.h,t.w/2,t.pivotY,n,3)}function Ef(e,t,n,r,i){let a=0;for(let o=0;o<r.length;o++)a+=Gl(e/t*r[o],.5+o*3.1,n+o*11,r[o],0)*i[o];return a}function Df(e,t=401){let n=new Ld(512,128),r=[{base:34,freqs:[3,7,17],amps:[40,18,6],ramp:G.dusk,tones:[2,3,4],rim:G.rose.colors[4]},{base:52,freqs:[4,11,29],amps:[34,14,5],ramp:G.dusk,tones:[1,2,3],rim:G.rose.colors[3]},{base:70,freqs:[5,13,37],amps:[30,12,6],ramp:G.ink,tones:[1,2,2],rim:G.plum.colors[3]}][e],i=[];for(let n=0;n<512;n++)i.push(r.base+Ef(n,512,t+e*97,r.freqs,r.amps));for(let a=0;a<512;a++){let o=128-i[a],s=i[(a+1)%512]-i[(a-1+512)%512];for(let i=Math.max(0,Math.floor(o));i<128;i++){let c=i-o,l;if(c<1.5&&s>.3)l=r.rim;else if(c<3&&s>.9)l=r.ramp.colors[r.tones[2]];else{let n=c/(128-o+1),u=Gl(a/512*40,i/128*10,t+5+e,40,0),d=.55-n*.5+(u-.5)*.4+(s>0?.12:-.08);l=r.ramp.colors[d+(zd(a,i)-.5)*.2>.45?r.tones[1]:r.tones[0]]}n.set(a,i,l)}}return n}function Of(e=431){let t=new Ld(256,64),n=new Hl(e);for(let r=0;r<9;r++){let i=n.float()*256,a=10+n.float()*42,o=40+n.float()*70,s=3+n.float()*5;for(let n=Math.floor(a-s-3);n<=a+s+2;n++)for(let c=-o/2-4;c<=o/2+4;c++){let l=i+c,u=c/(o/2),d=Math.sqrt(Math.max(0,1-u*u))*s,f=Gl(l/9,n/4,e+r,256/9,0)*3,p=a-d*.8-f,m=a+d*.35+f*.3;if(n<p||n>m)continue;let h=(n-p)/Math.max(1,m-p),g;g=h>.72?G.amber.colors[4]:h>.5?G.rose.colors[4]:h>.25?G.rose.colors[3]:G.dusk.colors[3],t.set(l,n,g)}}return t}function kf(e,t,n,r,i,a,o){return Gl(e/n*i,t/r*a,o,i,a)}function Af(e=101){let t=new Ld(64,64),n=G.stoneWarm,r=G.earth;t.each((t,i)=>{let a=kf(t,i,64,64,4,2,e)*10,o=Math.floor((i+a)/7),s=(i+a)%7/7,c=Ul(o&7,1,e),l=c>.55?n:r,u=c>.8?3:2;s<.18&&(u+=1),s>.85&&--u;let d=kf(t,i,64,64,8,8,e+4);return d>.72&&(u+=1),d<.22&&--u,l.colors[Math.max(0,Math.min(l.colors.length-1,u))]});let i=new Hl(e);for(let e=0;e<6;e++){let e=i.int(0,63),r=i.int(0,63);for(let a=0;a<i.int(5,12);a++)t.set(e,r,G.ink.colors[1]),t.set(e+1,r,n.colors[1]),r++,i.chance(.3)&&(e+=i.int(-1,1))}return t}function jf(e=111){let t=new Ld(64,64),n=G.stoneWarm;t.fill(G.earth.colors[1]);let r=new Hl(e),i=0,a=0;for(;i<64;){let o=r.int(6,8),s=a%2==0?0:-r.int(3,6);for(;s<64;){let a=r.int(7,12),c=r.int(2,4);for(let r=0;r<o-1;r++)for(let l=0;l<a-1;l++){let u=(l+.5)/(a-1)-.5,d=(r+.5)/(o-1)-.5;if(u*u*1.1+d*d*1.3>.27)continue;let f=c;(d<-.25||u<-.36)&&(f+=1),(d>.28||u>.38)&&--f,Ul(s+l,i+r,e)>.93&&--f,t.set(s+l,i+r,n.colors[Math.max(1,Math.min(5,f))])}s+=a}i+=o,a++}for(let n=0;n<40;n++){let n=r.int(0,63),i=r.int(0,63);Gl(n/8,i/8,e,8,8)>.6&&t.set(n,i,G.moss.colors[r.int(2,3)])}return t}function Mf(e=121){let t=new Ld(64,64),n=G.stone;return t.each((t,r)=>{let i=Math.floor(r/8),a=i%2==0?0:8,o=((t+a)%16+16)%16,s=r%8,c=Math.floor((t+a)/16)+i*5;if(o===0||s===7)return n.colors[0];let l=2+ +(Ul(c,9,e)>.5);(s===0||o===1)&&(l+=1),(s===6||o===15)&&--l,kf(t,r,64,64,8,8,e)<.25&&--l;let u=kf(t,r,64,64,4,4,e+2)+(1-r/64)*.25;return u>.78?Bd(G.moss,(u-.78)*4,1,3,t,r,.3):n.colors[Math.max(1,Math.min(4,l))]}),t}function Nf(e=131){let t=new Ld(64,64);t.each((t,n)=>Bd(G.earth,kf(t,n,64,64,4,4,e)*.8+kf(t,n,64,64,16,16,e+1)*.2,1,3,t,n,.25));let n=new Hl(e);for(let e=0;e<8;e++){let e=n.int(0,63),r=n.int(0,20);for(let i=0;i<n.int(6,14);i++)t.set(e,r,G.wood.colors[2]),e+=n.int(-1,1),r+=1}for(let e=0;e<30;e++){let e=n.int(0,63),r=n.int(0,63);t.set(e,r,G.stoneWarm.colors[3]),t.set(e+1,r,G.stoneWarm.colors[2])}return t}function Pf(e=141){let t=new Ld(64,64);t.each((t,n)=>{let r=kf(t,n,64,64,3,3,e)*.8+kf(t,n,64,64,8,8,e+1)*.2;return G.plaster.colors[r>.56?4:3]});let n=new Hl(e);for(let e=0;e<22;e++)t.set(n.int(0,63),n.int(0,63),G.plaster.colors[2]);for(let e=0;e<2;e++){let e=n.int(0,63),r=n.int(0,63);for(let i=0;i<6;i++)t.set(e,r,G.plaster.colors[2]),e+=n.int(0,1),r+=1}return t}function Ff(e=151,t=G.wood){let n=new Ld(64,64),r=new Hl(e),i=0;for(;i<64;){let a=r.int(4,6),o=r.int(2,3),s=r.int(0,63);for(let r=0;r<a;r++)for(let c=0;c<64;c++){let l=t.colors[o];r===a-1?l=t.colors[0]:r===0?l=t.colors[o+1]:Gl(r*.7,(c+s)/6,e+i,0,0)>.72&&(l=t.colors[o-1]),n.set(i+r,c,l)}if(r.chance(.5)){let e=r.int(0,60);n.set(i+1,e,t.colors[0]),n.set(i+2,e,t.colors[1]),n.set(i+1,e+1,t.colors[1])}let c=r.int(2,10);n.set(i+1,c,G.stone.colors[4]),n.set(i+1,c+32,G.stone.colors[4]),i+=a}return n}function If(e=161){let t=new Ld(32,32),n=G.woodDark;return t.each((t,r)=>{let i=Gl(t/2.5,r/32*3,e,0,3);return n.colors[i>.66?4:i>.33?3:2]}),t}function Lf(e=171){let t=new Ld(64,64),n=G.roof;t.each((t,r)=>{let i=t%6,a=r%8,o;return o=i===0?1:i===1?4:i===2||i===3?3:2,a===7?o=0:a===6?--o:a===0&&i>0&&(o+=1),Ul(Math.floor(t/6),Math.floor(r/8),e)>.85&&--o,n.colors[Math.max(0,Math.min(5,o))]});let r=new Hl(e);for(let e=0;e<14;e++){let e=r.int(0,63),n=r.int(0,63);t.set(e,n,G.moss.colors[2]),t.set(e+1,n,G.moss.colors[3])}return t}function Rf(e=181,t=G.woodDark){let n=new Ld(32,64);return n.each((n,r)=>{let i=Gl(n/3,r/10,e,32/3,6.4),a=Gl(n/1.5,r/22,e+3,0,0),o=i>.6?3:i>.3?2:1;return a>.78&&(o=0),n%8==3&&i>.45&&(o+=1),t.colors[Math.max(0,Math.min(t.colors.length-1,o))]}),n}function zf(){let e=new Ld(32,32),t=G.amber.colors[5],n=G.amber.colors[4],r=G.woodDark.colors[1],i=G.woodDark.colors[2];return e.each((e,a)=>{if(e<2||a<2||e>29||a>29)return r;let o=e-2,s=a-2;return o%7==0||s%9==0||s===13||s===14?i:(e+a)%11==0?n:t}),e}function Bf(){let e=new Ld(32,48),t=G.woodDark;return e.each((e,n)=>{if(e<2||n<2||e>29||n>45)return t.colors[1];if(e===15||e===16)return t.colors[0];if(n<26){let r=(e-2)%5,i=(n-2)%6;return r===0||i===0?t.colors[2]:G.amber.colors[3]}return n===26||n===27?t.colors[1]:t.colors[(e+(n>>2))%7==0?2:3]}),e}function Vf(e=191){let t=new Ld(64,16),n=G.grass,r=new Hl(e),i=[];for(let t=0;t<64;t++)i.push(3+Math.floor(Gl(t/5,0,e,64/5,0)*5)+(r.chance(.2)?2:0));for(let e=0;e<64;e++){for(let r=0;r<i[e];r++){let a=r===0?4:r<2?3:r===i[e]-1?1:2;t.set(e,r,n.colors[a])}t.put(e,i[e],n.outline)}return t}function Hf(e=201,t=G.stone){let n=new Ld(64,64);n.each((n,r)=>{let i=kf(n,r,64,64,4,4,e)*.75+kf(n,r,64,64,16,8,e+1)*.25;return t.colors[i>.62?4:i>.36?3:2]});let r=new Hl(e);for(let e=0;e<30;e++){let e=r.int(0,63),i=r.int(0,63);n.set(e,i,t.colors[1]),r.chance(.4)&&n.set(e+1,i,t.colors[2])}return n}function Uf(e=211){let t=Mf(e),n=new Ld(64,64);n.fill([0,0,0,255]);let r=new Hl(e);for(let e=0;e<8;e+=2)for(let i=0;i<4;i++){if(!r.chance(.55))continue;let a=i*16+(e%4==0?4:12)-4,o=e*8+1,s=Wf[r.int(0,3)];for(let[e,r,i,c]of s)t.line(a+e,o+r,a+i,o+c,G.stone.colors[0]),n.line(a+e,o+r,a+i,o+c,[255,255,255,255])}return{color:t,glow:n}}var Wf=[[[3,0,5,2],[5,2,3,4],[3,4,1,2],[1,2,3,0],[3,4,3,5]],[[1,0,1,5],[5,0,5,5],[1,2,5,3]],[[3,0,1,2],[3,0,5,2],[3,0,3,5],[1,5,5,5]],[[1,0,5,0],[3,0,3,3],[1,3,5,3],[1,3,1,5],[5,3,5,5]]],Gf={hero:_d,sol:Ed,boar:vu,wisp:Id,guardian:Uu},Kf=`deungbul.muted`,qf=[293.66,329.63,392,440,493.88,587.33,659.25,783.99,880,987.77],Jf=class{ctx=null;master;sfxBus;ambBus;musBus;noise;muted=!1;loops={};nextChirp=0;nextOwl=0;nextChime=0;nextNote=0;beat=0;boss=!1;victory=!1;zone={village:1,forest:0,ruins:0,river:0};lastPlay=new Map;constructor(){try{this.muted=localStorage.getItem(Kf)===`1`}catch{this.muted=!1}}unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext??window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=12,n.ratio.value=4,n.attack.value=.004,n.release.value=.2,this.master=t.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(n).connect(t.destination),this.sfxBus=this.bus(.85),this.ambBus=this.bus(.55),this.musBus=this.bus(.4);let r=t.sampleRate*2;this.noise=t.createBuffer(1,r,t.sampleRate);let i=this.noise.getChannelData(0),a=0;for(let e=0;e<r;e++){let t=Math.random()*2-1;a=a*.6+t*.4,i[e]=a*1.4}this.buildLoops()}bus(e){let t=this.ctx.createGain();return t.gain.value=e,t.connect(this.master),t}toggleMute(){return this.setMuted(!this.muted),this.muted}setMuted(e){this.muted=e;try{localStorage.setItem(Kf,e?`1`:`0`)}catch{}this.ctx&&this.master.gain.setTargetAtTime(e?0:.9,this.ctx.currentTime,.05)}env(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}tone(e,t,n,r,i,a={}){let o=this.ctx,s=o.currentTime+(a.at??0),c=o.createOscillator();c.type=e,c.frequency.setValueAtTime(t,s),n!==t&&c.frequency.exponentialRampToValueAtTime(Math.max(20,n),s+r),a.detune&&(c.detune.value=a.detune);let l=o.createGain();this.env(l,s,a.a??.004,i,r);let u=c;if(a.lp){let e=o.createBiquadFilter();e.type=`lowpass`,e.frequency.value=a.lp,u.connect(e),u=e}u.connect(l).connect(a.bus??this.sfxBus),c.start(s),c.stop(s+(a.a??.004)+r+.05)}burst(e,t,n,r,i,a,o={}){let s=this.ctx,c=s.currentTime+(o.at??0),l=s.createBufferSource();l.buffer=this.noise,l.loop=!0,l.playbackRate.value=.9+Math.random()*.2;let u=s.createBiquadFilter();u.type=e,u.Q.value=r,u.frequency.setValueAtTime(t,c),n!==t&&u.frequency.exponentialRampToValueAtTime(Math.max(30,n),c+i);let d=s.createGain();this.env(d,c,o.a??.003,a,i),l.connect(u).connect(d).connect(o.bus??this.sfxBus),l.start(c,Math.random()*1.5),l.stop(c+(o.a??.003)+i+.05)}bell(e,t,n,r=0,i){this.tone(`sine`,e,e,n,t,{a:.005,at:r,bus:i}),this.tone(`sine`,e*2.01,e*2.01,n*.5,t*.35,{a:.003,at:r,bus:i}),this.tone(`triangle`,e*3.02,e*3.02,n*.25,t*.12,{a:.002,at:r,bus:i})}pluck(e,t,n=0){this.tone(`triangle`,e*1.005,e,1.4,t,{a:.003,at:n,bus:this.musBus,lp:2400}),this.tone(`sine`,e*2,e*2,.35,t*.25,{a:.002,at:n,bus:this.musBus})}play(e,t={}){if(!this.ctx||this.ctx.state!==`running`)return;let n=this.ctx.currentTime;if(n-(this.lastPlay.get(e)??-1)<.025)return;this.lastPlay.set(e,n);let r=t.vol??1,i=t.pitch??1,a=.94+Math.random()*.12;switch(e){case`swing`:this.burst(`bandpass`,2400*i*a,700,1.4,.13,.5*r),this.tone(`sine`,520*a,260,.1,.05*r);break;case`swingHeavy`:this.burst(`bandpass`,1600*a,320,1.1,.24,.7*r),this.tone(`sine`,300*a,120,.2,.08*r);break;case`hit`:this.tone(`sine`,190*a,55,.13,.55*r),this.burst(`highpass`,2600,2600,.7,.05,.35*r),this.tone(`square`,1200*a,700,.04,.05*r,{lp:3e3});break;case`hitHeavy`:this.tone(`sine`,150*a,38,.24,.75*r),this.burst(`highpass`,1800,1800,.7,.09,.45*r),this.tone(`triangle`,980*a,900,.18,.08*r);break;case`bossHit`:this.burst(`bandpass`,3200*a,1400,2,.08,.5*r),this.tone(`sine`,100*a,48,.2,.5*r),this.tone(`triangle`,1450*a,1300,.12,.05*r);break;case`hurt`:this.tone(`square`,420*a,150,.2,.18*r,{lp:1800}),this.burst(`lowpass`,1400,400,.7,.12,.4*r);break;case`dodge`:this.burst(`bandpass`,1100*a,380,.9,.22,.4*r,{a:.02});break;case`step`:this.burst(`lowpass`,900*i*a,400,.8,.045,.11*r);break;case`boarAlert`:this.tone(`sawtooth`,620*a,1150,.12,.12*r,{lp:2400}),this.tone(`sawtooth`,1100*a,520,.22,.12*r,{lp:2400,at:.12});break;case`boarCharge`:this.burst(`lowpass`,420,220,.8,.5,.55*r,{a:.05}),this.tone(`sawtooth`,90*a,70,.45,.08*r,{lp:400,a:.05});break;case`wall`:this.tone(`sine`,95*a,32,.34,.8*r),this.burst(`lowpass`,700,200,.8,.25,.6*r);break;case`wispCast`:for(let[e,t]of[[880,0],[1320,.05],[1760,.1]])this.tone(`sine`,e*a,e*a*1.02,.45,.05*r,{a:.18,at:t});break;case`wispShot`:this.tone(`sine`,900*a,420,.14,.18*r),this.burst(`bandpass`,2e3,900,2,.12,.2*r);break;case`orbPop`:this.tone(`sine`,1100*a,380,.1,.16*r),this.burst(`highpass`,3e3,3e3,.7,.06,.18*r);break;case`runeBolt`:this.tone(`triangle`,1500*a,720,.12,.05*r);break;case`enemyDie`:this.tone(`sine`,640*a,110,.4,.22*r),this.burst(`bandpass`,900,300,.8,.35,.35*r,{a:.02});break;case`bossSlam`:this.tone(`sine`,78,26,.75,1*r),this.burst(`lowpass`,520,120,.7,.6,.9*r),this.burst(`bandpass`,2600,900,1.5,.25,.3*r,{at:.03});break;case`bossSweep`:this.burst(`bandpass`,700*a,180,.9,.45,.7*r,{a:.06}),this.tone(`sine`,140,60,.4,.2*r,{a:.05});break;case`bossRoar`:this.tone(`sawtooth`,78,62,1.3,.22*r,{lp:700,a:.12}),this.tone(`sawtooth`,81,60,1.3,.22*r,{lp:600,a:.12}),this.burst(`lowpass`,800,250,.8,1.2,.5*r,{a:.1});break;case`barrier`:this.tone(`sine`,220,880,.9,.12*r,{a:.2}),this.tone(`sine`,330,1320,.9,.06*r,{a:.25}),this.burst(`bandpass`,1200,3e3,3,.8,.12*r,{a:.3});break;case`lanternLight`:this.burst(`bandpass`,380,2200,1.1,.6,.45*r,{a:.08}),this.bell(1318.5,.16*r,1.6,.25),this.bell(1975.5,.1*r,1.4,.4);break;case`checkpoint`:this.bell(587.33,.14*r,1.8,0),this.bell(739.99,.1*r,1.6,.12),this.bell(880,.1*r,1.6,.24);break;case`pickup`:this.tone(`sine`,660*a,660*a,.12,.12*r),this.tone(`sine`,990*a,990*a,.18,.1*r,{at:.07});break;case`uiMove`:this.tone(`square`,880,880,.03,.03*r,{lp:2500});break;case`uiSelect`:this.tone(`square`,660,660,.05,.04*r,{lp:2500}),this.tone(`square`,990,990,.08,.04*r,{lp:2500,at:.05});break;case`text`:this.tone(`square`,1300*a,1300,.012,.012*r,{lp:3e3});break;case`death`:[587.33,493.88,440,392,293.66].forEach((e,t)=>this.bell(e,.12*r,1.2,t*.28,this.musBus));break;case`victory`:[293.66,369.99,440,587.33,739.99,880,1174.66].forEach((e,t)=>this.bell(e,.12*r,2.2,t*.16,this.musBus));break;case`gateBlock`:this.tone(`square`,150,130,.18,.06*r,{lp:900})}}noiseLoop(e,t,n){let r=this.ctx,i=r.createBufferSource();i.buffer=this.noise,i.loop=!0;let a=r.createBiquadFilter();a.type=e,a.frequency.value=t,a.Q.value=n;let o=r.createGain();o.gain.value=0;let s=r.createOscillator();s.frequency.value=.07+Math.random()*.06;let c=r.createGain();return c.gain.value=t*.35,s.connect(c).connect(a.frequency),s.start(),i.connect(a).connect(o).connect(this.ambBus),i.start(0,Math.random()),{gain:o,target:0}}droneLoop(e,t,n){let r=this.ctx,i=r.createGain();i.gain.value=0;let a=r.createBiquadFilter();a.type=`lowpass`,a.frequency.value=600,a.connect(i).connect(n);for(let n of e){let i=r.createOscillator();i.type=`sine`,i.frequency.value=n,i.detune.value=(Math.random()-.5)*8;let o=r.createGain();o.gain.value=t/e.length,i.connect(o).connect(a),i.start()}return{gain:i,target:0}}buildLoops(){this.loops.wind=this.noiseLoop(`bandpass`,420,.6),this.loops.stream=this.noiseLoop(`bandpass`,1100,.35),this.loops.coldWind=this.noiseLoop(`bandpass`,260,.8),this.loops.drone=this.droneLoop([55,82.4,110.2],.5,this.ambBus),this.loops.pad=this.droneLoop([146.83,220,293.66,369.99],.35,this.musBus)}setZone(e,t,n,r){this.zone={village:e,forest:t,ruins:n,river:r}}setBoss(e){this.boss=e}setVictory(e){this.victory=e}update(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=e.currentTime,n=this.zone,r=(e,n)=>{let r=this.loops[e];r&&Math.abs(r.target-n)>.002&&(r.target=n,r.gain.gain.setTargetAtTime(n,t,.6))};if(r(`wind`,.16*n.village+.06*n.forest),r(`stream`,.05*n.forest+.28*n.river),r(`coldWind`,.2*n.ruins),r(`drone`,(this.boss?.5:.22)*n.ruins*(this.victory?.2:1)),r(`pad`,this.victory?.5:0),t>this.nextChirp){let e=n.village*.8+n.forest;if(e>.1&&!this.boss){let t=3900+Math.random()*900;for(let n=0;n<3;n++)this.tone(`sine`,t,t*.98,.035,.012*e,{at:n*.07,bus:this.ambBus})}this.nextChirp=t+.5+Math.random()*1.6}if(t>this.nextOwl&&(n.forest>.5&&!this.boss&&(this.tone(`sine`,410,360,.32,.05*n.forest,{a:.05,bus:this.ambBus,lp:900}),this.tone(`sine`,400,350,.42,.05*n.forest,{a:.05,at:.5,bus:this.ambBus,lp:900})),this.nextOwl=t+9+Math.random()*10),t>this.nextChime&&(n.ruins>.5&&!this.boss&&this.bell(qf[5+Math.floor(Math.random()*4)]*2,.02,2.5,0,this.ambBus),this.nextChime=t+5+Math.random()*6),t>this.nextNote){if(this.boss){let e=[1,0,.5,0,1,.4,.6,0],n=e[this.beat%e.length];n>0&&(this.tone(`sine`,72,38,.28,.5*n,{bus:this.musBus}),this.burst(`lowpass`,900,300,.8,.08,.25*n,{bus:this.musBus})),this.beat%4==2&&this.burst(`highpass`,5e3,5e3,.8,.03,.06,{bus:this.musBus}),this.beat++,this.nextNote=t+.33}else if(this.victory||n.village>.6){let e=this.victory?.07:.045*n.village,r=this.victory?2:Math.random()<.7?1:2;for(let t=0;t<r;t++)this.pluck(qf[Math.floor(Math.random()*(this.victory?10:7))],e,t*.22);this.nextNote=t+(this.victory?.9+Math.random()*.6:1.6+Math.random()*2.4)}else this.nextNote=t+1}}},Yf=`
vec2 pixelUv(vec2 uv, vec2 size) {
  vec2 px = uv * size;
  vec2 fw = max(fwidth(px), vec2(1e-4));
  vec2 seam = floor(px + 0.5);
  px = seam + clamp((px - seam) / fw, -0.5, 0.5);
  return px / size;
}
vec4 texPixel(sampler2D t, vec2 uv, vec2 size) {
  return textureGrad(t, pixelUv(uv, size), dFdx(uv), dFdy(uv));
}
vec4 texPixelArr(sampler2DArray t, vec2 uv, float layer, vec2 size) {
  return textureGrad(t, vec3(pixelUv(uv, size), layer), dFdx(uv), dFdy(uv));
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
`;function Xf(e,t,n,r={}){let o=new Uint8Array(e*t*4);for(let r=0;r<t;r++)o.set(n.subarray((t-1-r)*e*4,(t-r)*e*4),r*e*4);let s=new ui(o,e,t,O,p),c=r.mipmaps??!0;return s.magFilter=u,s.minFilter=c?f:u,s.generateMipmaps=c,s.wrapS=s.wrapT=r.repeat?i:a,s.colorSpace=r.srgb===!1?``:We,s.anisotropy=4,s.needsUpdate=!0,s}function Zf(e,t={}){return Xf(e.w,e.h,e.data,t)}function Qf(e,t={}){let n=e[0].w,r=e[0].h,o=new Uint8Array(n*r*4*e.length);e.forEach((e,t)=>{for(let i=0;i<r;i++)o.set(e.data.subarray((r-1-i)*n*4,(r-i)*n*4),t*n*r*4+i*n*4)});let s=new rn(o,n,r,e.length);return s.format=O,s.type=p,s.magFilter=u,s.minFilter=f,s.generateMipmaps=!0,s.wrapS=s.wrapT=t.repeat===!1?a:i,s.colorSpace=t.srgb===!1?``:We,s.anisotropy=4,s.needsUpdate=!0,s}var $f=`
  {
    vec2 uvC = (floor(vMapUv * uMapSize) + 0.5) / uMapSize;
    vec2 dU = uvC - vMapUv;
    vec2 ux = dFdx(vMapUv);
    vec2 uy = dFdy(vMapUv);
    float det = ux.x * uy.y - ux.y * uy.x;
    if (abs(det) > 1e-14) {
      gSnapA = clamp((dU.x * uy.y - dU.y * uy.x) / det, -12.0, 12.0);
      gSnapB = clamp((ux.x * dU.y - ux.y * dU.x) / det, -12.0, 12.0);
    }
  }`;function ep(){let e=U.lights_fragment_begin;return e=e.replace(`vec3 geometryPosition = - vViewPosition;`,`vec3 geometryPosition = - ( vViewPosition + gSnapA * dFdx( vViewPosition ) + gSnapB * dFdy( vViewPosition ) );`),e=e.replace(/vDirectionalShadowCoord\[ i \] \)/g,`gSnapShadow[ i ] )`),`
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
  vec4 gSnapShadow[ NUM_DIR_LIGHT_SHADOWS ];
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
    gSnapShadow[ i ] = vDirectionalShadowCoord[ i ] + gSnapA * dFdx( vDirectionalShadowCoord[ i ] ) + gSnapB * dFdy( vDirectionalShadowCoord[ i ] );
  }
  #pragma unroll_loop_end
#endif
`+e}function tp(e,t){e.onBeforeCompile=e=>{t.uniforms&&Object.assign(e.uniforms,t.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${t.vertexPars??``}`),t.vertexBegin&&(e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${t.vertexBegin}`)),t.vertexEnd&&(e.vertexShader=e.vertexShader.replace(`#include <fog_vertex>`,`#include <fog_vertex>\n${t.vertexEnd}`)),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Yf}\n${t.snapLight?`float gSnapA = 0.0; float gSnapB = 0.0;`:``}\n${t.fragmentPars??``}`),t.snapLight&&(e.fragmentShader=e.fragmentShader.replace(`#include <lights_fragment_begin>`,ep())),t.map!==void 0&&(e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,t.map)),t.afterMap&&(e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>\n${t.afterMap}`)),t.normal!==void 0&&(e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,t.normal)),t.emissive!==void 0&&(e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,t.emissive)),t.afterLights&&(e.fragmentShader=e.fragmentShader.replace(`#include <aomap_fragment>`,`#include <aomap_fragment>\n${t.afterLights}`))},e.customProgramCacheKey=()=>t.cacheKey}function np(e){let{key:t,...n}=e,r=new Yi(n),i=n.map,a=n.emissiveMap,o={value:new z(i?.image.width??1,i?.image.height??1)},s={value:new z(a?.image.width??1,a?.image.height??1)};return tp(r,{cacheKey:`pixel-lambert-${t??``}`,uniforms:{uMapSize:o,uEmSize:s},fragmentPars:`uniform vec2 uMapSize; uniform vec2 uEmSize;`,map:`
      #ifdef USE_MAP
        diffuseColor *= texPixel(map, vMapUv, uMapSize);
      #endif`,emissive:`
      #ifdef USE_EMISSIVEMAP
        totalEmissiveRadiance *= texPixel(emissiveMap, vEmissiveMapUv, uEmSize).rgb;
      #endif`}),r}var rp=512,ip=128;function ap(e,t,n,r,i,a){let o=[];for(let a=0;a<i;a++)o.push([e+a*n,t,n,r]);return{frames:o,dur:a}}var op={slash:ap(0,0,64,32,3,.045),impact:ap(192,0,32,32,3,.04),dust:ap(288,0,8,8,4,.09),bolt:ap(352,0,16,16,2,.08),orbCold:ap(384,0,16,16,1,1),orbEmber:ap(400,0,16,16,1,1),orbRune:ap(416,0,16,16,1,1),alert:ap(432,0,8,16,1,1),star:ap(440,0,8,8,1,1),ringDanger:ap(0,32,64,64,1,1),ringCold:ap(64,32,64,64,1,1),ringEmber:ap(128,32,64,64,1,1)};function sp(){let e=new Ld(rp,ip);e.blit($d(),0,0),e.blit(nf(),192,0),e.blit(af(),288,0),e.blit(rf(),352,0),e.blit(tf(`cold`),384,0),e.blit(tf(`ember`),400,0),e.blit(tf(`rune`),416,0);let t=G.ink.colors[0],n=G.amber.colors[5],r=G.danger.colors[3];for(let t=1;t<15;t++)for(let i=1;i<7;i++)(i>=2&&i<=5&&t>=1&&t<=9||i>=2&&i<=5&&t>=11&&t<=14)&&e.put(432+i,t,t<5?n:r);for(let n=0;n<16;n++)for(let r=0;r<8;r++)e.alpha(432+r,n)||(e.alpha(432+r-1,n)||e.alpha(432+r+1,n)||e.alpha(432+r,n-1)||e.alpha(432+r,n+1))&&e.put(432+r,n,t);return[`...#....`,`...#....`,`..###...`,`#######.`,`.#####..`,`.##.##..`,`.#...#..`,`........`].forEach((t,n)=>[...t].forEach((t,r)=>t===`#`&&e.put(440+r,n,G.amber.colors[5]))),e.blit(ef(`danger`),0,32),e.blit(ef(`cold`),64,32),e.blit(ef(`ember`),128,32),e}var cp=160,lp=class{mesh;rect;col;par;list=[];m=new on;constructor(e,t){let n=new Li(1,1);this.rect=new di(new Float32Array(640),4),this.col=new di(new Float32Array(640),4),this.par=new di(new Float32Array(640),4),n.setAttribute(`iRect`,this.rect),n.setAttribute(`iColor`,this.col),n.setAttribute(`iPar`,this.par);let r=new qi({uniforms:{uMap:{value:e},uSize:{value:new z(rp,ip)}},vertexShader:`
        attribute vec4 iRect; attribute vec4 iColor; attribute vec4 iPar;
        varying vec2 vUv; varying vec4 vColor; varying float vGlow;
        void main() {
          vec3 c = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
          vec2 q = position.xy * iPar.yz;
          ${t?`vec3 fwd = vec3(sin(iPar.x), 0.0, cos(iPar.x));
                 vec3 right = vec3(-cos(iPar.x), 0.0, sin(iPar.x));
                 vec3 wp = c + right * q.x + fwd * q.y;`:`float cr = cos(iPar.x); float sr = sin(iPar.x);
                 q = vec2(q.x * cr - q.y * sr, q.x * sr + q.y * cr);
                 vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
                 vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
                 vec3 wp = c + right * q.x + up * q.y;`}
          vec4 mv = viewMatrix * vec4(wp, 1.0);
          ${t?``:`mv.xyz *= max(0.01, length(mv.xyz) - 0.6) / length(mv.xyz);`}
          gl_Position = projectionMatrix * mv;
          vUv = iRect.xy + uv * iRect.zw;
          vColor = iColor;
          vGlow = iPar.w;
        }`,fragmentShader:`
        uniform sampler2D uMap; uniform vec2 uSize;
        varying vec2 vUv; varying vec4 vColor; varying float vGlow;
        ${Yf}
        void main() {
          vec4 t = texture2D(uMap, pixelUv(vUv, uSize));
          if (t.a < 0.5) discard;
          gl_FragColor = vec4(t.rgb * vColor.rgb * vGlow, vColor.a);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,side:2});t&&(r.polygonOffset=!0,r.polygonOffsetFactor=-3,r.polygonOffsetUnits=-3),this.mesh=new yi(n,r,cp),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=t?3:28}update(e){let t=0;for(let n=0;n<this.list.length;n++){let r=this.list[n];if(r.t+=e,r.t>=r.life)continue;let i=r.o;i.x+=(i.vx??0)*e,i.y+=(i.vy??0)*e,i.z+=(i.vz??0)*e,this.list[t++]=r}this.list.length=t;let n=Math.min(cp,t);for(let e=0;e<n;e++){let t=this.list[e],n=t.o,r=t.t/t.life,i=n.frameDur??t.sprite.dur,a=Math.floor(t.t/i);a=n.loop?a%t.sprite.frames.length:Math.min(t.sprite.frames.length-1,a);let[o,s,c,l]=t.sprite.frames[a];this.rect.setXYZW(e,o/rp,1-(s+l)/ip,c/rp,l/ip);let u=1+((n.grow??1)-1)*r,d=n.size*u;this.par.setXYZW(e,n.rot??0,c/l*d,d,n.glow??1);let f=(n.alpha??1)*(n.fade?1-r*r:1);this.col.setXYZW(e,t.color.r,t.color.g,t.color.b,f),this.m.makeTranslation(n.x,n.y,n.z),this.mesh.setMatrixAt(e,this.m)}this.mesh.count=n,this.mesh.instanceMatrix.needsUpdate=!0,this.rect.needsUpdate=!0,this.col.needsUpdate=!0,this.par.needsUpdate=!0}},up=class{group=new Pn;bill;ground;tele=[];teleTime={value:0};constructor(){let e=Zf(sp(),{mipmaps:!1});this.bill=new lp(e,!1),this.ground=new lp(e,!0),this.group.add(this.bill.mesh,this.ground.mesh)}spawn(e,t){let n=t.ground?this.ground:this.bill,r=t.life??e.frames.length*(t.frameDur??e.dur);n.list.push({sprite:e,o:t,t:0,life:r,color:new H(t.color??16777215)})}telegraph(e){let t=e.shape===`circle`?(e.r??1)*2:e.width??1,n=e.shape===`circle`?(e.r??1)*2:e.len??1,r=new Li(t,n);r.rotateX(-Math.PI/2),e.shape===`line`&&r.translate(0,0,n/2);let i={uShape:{value:e.shape===`circle`?0:1},uProgress:{value:0},uFlash:{value:0},uColor:{value:new H(e.color??16734778)},uSize:{value:new z(t,n)},uTime:this.teleTime,uAlpha:{value:1}},a=new si(r,new qi({uniforms:i,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uShape; uniform float uProgress; uniform float uFlash; uniform vec3 uColor; uniform vec2 uSize; uniform float uTime; uniform float uAlpha;
        varying vec2 vUv;
        void main() {
          vec2 texel = uSize * 16.0;
          vec2 p = (floor(vUv * texel) + 0.5) / texel;
          vec2 c = (p - 0.5) * 2.0;
          float border; float inside; float fill;
          if (uShape < 0.5) {
            float r = length(c);
            if (r > 1.0) discard;
            float px = 2.0 / texel.x;
            border = step(1.0 - px * 1.5, r);
            fill = step(r, uProgress);
            inside = 1.0;
          } else {
            float along = 1.0 - p.y;
            float across = abs(c.x);
            float px = 2.0 / texel.x;
            border = max(step(1.0 - px * 1.5, across), step(1.0 - 1.5 / texel.y, along));
            fill = step(along, uProgress);
            inside = 1.0;
          }
          // 사선 줄무늬가 흘러가며 위험 구역을 알린다
          float stripe = step(0.5, fract((p.x * uSize.x + p.y * uSize.y) * 1.6 - uTime * 2.4));
          float a = border * 0.95 + fill * (0.36 + stripe * 0.12) + (1.0 - fill) * inside * (0.1 + stripe * 0.05);
          vec3 col = mix(uColor, vec3(1.0, 0.95, 0.85), uFlash * 0.7 + border * 0.15);
          gl_FragColor = vec4(col * (1.0 + uFlash), clamp(a + uFlash * 0.4, 0.0, 1.0) * uAlpha);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));a.position.set(e.x,e.y+.04,e.z),e.shape===`line`&&(a.rotation.y=e.angle??0),a.renderOrder=4,this.group.add(a);let o={mesh:a,u:i,t:0,dur:e.dur,hold:e.hold??.12,done:!1};return this.tele.push(o),o}cancel(e){e.done=!0}update(e,t){this.bill.update(e),this.ground.update(e),this.teleTime.value=t;let n=0;for(let t of this.tele){t.t+=e;let r=Math.min(1,t.t/t.dur);if(t.u.uProgress.value=r,t.u.uFlash.value=t.t>t.dur?1-Math.min(1,(t.t-t.dur)/t.hold):0,t.done||t.t>t.dur+t.hold){this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();continue}this.tele[n++]=t}this.tele.length=n}clear(){this.bill.list.length=0,this.ground.list.length=0;for(let e of this.tele)e.done=!0}},dp={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},fp=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},pp=new Na(-1,1,1,-1,0,1),mp=new class extends Lr{constructor(){super(),this.setAttribute(`position`,new Tr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Tr([0,2,0,0,2,0],2))}},hp=class{constructor(e){this._mesh=new si(mp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},gp=class extends fp{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new qi({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},_p=class extends fp{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},vp=class extends fp{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},yp=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:b}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gp(dp),this.copyPass.material.blending=0,this.timer=new Ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}_p!==void 0&&(r instanceof _p?n=!0:r instanceof vp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},bp={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},xp=class extends fp{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wi.clone(bp.uniforms),this.material=new Ji({name:bp.name,uniforms:this.uniforms,vertexShader:bp.vertexShader,fragmentShader:bp.fragmentShader}),this._fsQuad=new hp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ut.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Sp=class extends fp{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Cp={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},wp=class e extends fp{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(i,a,{type:b,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new nn(i,a,{type:b,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new nn(i,a,{type:b,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Cp;this.highPassUniforms=Wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qi({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone(dp.uniforms),this.blendMaterial=new qi({uniforms:this.copyUniforms,vertexShader:dp.vertexShader,fragmentShader:dp.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new Yr,this._fsQuad=new hp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new qi({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qi({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};wp.BlurDirectionX=new z(1,0),wp.BlurDirectionY=new z(0,1);var Tp={uniforms:{tDiffuse:{value:null},uDir:{value:new z(1,0)},uAmount:{value:1.1},uFocus:{value:.46},uBand:{value:.27}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uDir; uniform float uAmount; uniform float uFocus; uniform float uBand; varying vec2 vUv;
    void main(){
      float d = abs(vUv.y - uFocus);
      float k = smoothstep(uBand, uBand + 0.32, d) * uAmount;
      if (k < 0.05) { gl_FragColor = texture2D(tDiffuse, vUv); return; }
      vec4 s = vec4(0.0); float ws = 0.0;
      for (int i = -4; i <= 4; i++) {
        float w = exp(-float(i * i) / 7.0);
        s += texture2D(tDiffuse, vUv + uDir * float(i) * k) * w;
        ws += w;
      }
      gl_FragColor = s / ws;
    }`},Ep={uniforms:{tDiffuse:{value:null},uTint:{value:new H(1,1,1)},uSat:{value:1},uVig:{value:.35},uLift:{value:new H(.012,.008,.02)}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec3 uTint; uniform float uSat; uniform float uVig; uniform vec3 uLift; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb * uTint + uLift;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat);
      vec2 q = vUv - 0.5;
      q.x *= 1.3;
      col *= 1.0 - smoothstep(0.25, 0.85, length(q)) * uVig;
      gl_FragColor = vec4(col, c.a);
    }`},Dp=class{composer;bloom;tiltH;tiltV;grade;enabled=!0;renderer;scene;camera;constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n;let r=e.getDrawingBufferSize(new z),i=new nn(r.x,r.y,{type:b,samples:4});this.composer=new yp(e,i),this.composer.addPass(new Sp(t,n)),this.bloom=new wp(new z(r.x,r.y),.45,.55,.82);let a=this.bloom.materialHighPassFilter;a.fragmentShader=a.fragmentShader.replace(`vec4 texel = texture2D( tDiffuse, vUv );`,`vec4 texel = clamp( texture2D( tDiffuse, vUv ), vec4( 0.0 ), vec4( 16.0 ) );`),a.needsUpdate=!0,this.composer.addPass(this.bloom),this.tiltH=new gp(Tp),this.tiltV=new gp(Tp),this.tiltV.uniforms.uDir.value=new z(0,1),this.composer.addPass(this.tiltH),this.composer.addPass(this.tiltV),this.grade=new gp(Ep),this.composer.addPass(this.grade),this.composer.addPass(new xp),this.setSize(r.x,r.y)}setSize(e,t){this.composer.setSize(e/this.renderer.getPixelRatio(),t/this.renderer.getPixelRatio()),this.tiltH.uniforms.uDir.value.set(1/e,0),this.tiltV.uniforms.uDir.value.set(0,1/t)}apply(e,t=.46){this.bloom.strength=e.bloom,this.grade.uniforms.uTint.value.copy(e.tint),this.grade.uniforms.uSat.value=e.saturation,this.grade.uniforms.uVig.value=e.vignette,this.tiltH.uniforms.uFocus.value=t,this.tiltV.uniforms.uFocus.value=t}render(){this.enabled?this.composer.render():this.renderer.render(this.scene,this.camera)}},Op={fov:30,pitchDeg:34,distance:23,yaw:0,targetLift:1.1,followLerp:7},kp=1/Math.cos(Op.pitchDeg*Math.PI/180),Ap={speed:4.4,accel:38,radius:.42,maxHp:10,dodgeSpeed:11.5,dodgeTime:.34,dodgeIFrameStart:.02,dodgeIFrameEnd:.3,dodgeCooldown:.12,hurtIFrames:.9,stepHeight:.42},jp={enabled:typeof location<`u`&&new URLSearchParams(location.search).has(`debug`)};function Mp(e){return{data:e,color:Xf(e.width,e.height,e.color,{mipmaps:!1}),normal:Xf(e.width,e.height,e.normal,{mipmaps:!1,srgb:!1})}}var Np={uBasisR:{value:new B(1,0,0)},uBasisU:{value:new B(0,1,0)},uBasisF:{value:new B(0,0,1)},uRimDir:{value:new z(-.7,.3)},uRimColor:{value:new H(1,.62,.35)},uRimStrength:{value:.55},uNormalStrength:{value:.75},uOcc:{value:[0,1,2,3].map(()=>new en(-9999,-9999,0,0))}},Pp=null;function Fp(){if(Pp)return Pp;let e=new Uint8Array(2048);for(let t=0;t<16;t++)for(let n=0;n<32;n++){let r=(n+.5-16)/16,i=(t+.5-8)/8,a=r*r+i*i,o=a<.45?1:a<.75?.66:a<1?.33:0,s=(t*32+n)*4;e[s]=10,e[s+1]=6,e[s+2]=18,e[s+3]=Math.round(o*255)}return Pp=Xf(32,16,e,{mipmaps:!1}),Pp.magFilter=s,Pp}var Ip={value:0},Lp=`
  {
    vec4 mvB = mvPosition;
    float lB = length(mvB.xyz);
    mvB.xyz *= max(0.01, lB - uDepthBias) / lB;
    vec4 cB = projectionMatrix * mvB;
    gl_Position.z = cB.z / cB.w * gl_Position.w;
  }`,Rp=class{root=new Pn;body=new Pn;mesh;shadow;silhouette=null;asset;map;u={uFlash:{value:0},uFlashColor:{value:new H(1,1,1)},uFlip:{value:1},uEmissive:{value:1},uDissolve:{value:0},uMapSize:{value:new z},uNormalTex:{value:null},uTint:{value:new H(1,1,1)},uDepthBias:{value:.35},uSway:{value:0},uPhase:{value:0},uHeight:{value:1},uOccluder:{value:0},uSelfPos:{value:new B},uSelfColor:{value:new H(0,0,0)},uSelfRadius:{value:0}};anim=``;dir=`down`;flipX=!1;frame=0;t=0;speed=1;finished=!1;hover=0;shadowScale=1;shadowBaseOpacity;constructor(e,t={}){this.asset=e;let n=e.data,r=n.frameW/16,i=n.frameH/16*kp,a=new Li(r,i),o=(n.pivotX/n.frameW-.5)*r,s=(.5-n.pivotY/n.frameH)*i;a.translate(-o,-s,0),this.map=e.color.clone(),this.map.matrixAutoUpdate=!1,this.u.uMapSize.value.set(n.width,n.height),this.u.uNormalTex.value=e.normal,this.u.uEmissive.value=t.emissive??1.6,this.u.uDepthBias.value=t.depthBias??.35,this.u.uSway.value=t.sway??0,this.u.uHeight.value=i,this.u.uOccluder.value=+!!t.occluder;let c=new Yi({map:this.map,alphaTest:.5,alphaToCoverage:!0});if(tp(c,{cacheKey:`sprite-actor`,uniforms:{...this.u,...Np,uTime:Ip},vertexPars:`uniform float uDepthBias; uniform float uSway; uniform float uPhase; uniform float uHeight; uniform float uTime; uniform float uOccluder;`,vertexBegin:`
        if (uSway > 0.0) {
          float hk = clamp(position.y / uHeight, 0.0, 1.0);
          transformed.x += (sin(uTime * 1.3 + uPhase) + 0.4 * sin(uTime * 2.7 + uPhase * 1.7)) * uSway * hk * hk;
        }`,vertexEnd:Lp,fragmentPars:`
        uniform vec2 uMapSize; uniform sampler2D uNormalTex; uniform float uFlash; uniform vec3 uFlashColor;
        uniform float uFlip; uniform float uEmissive; uniform float uDissolve; uniform vec3 uTint;
        uniform vec3 uBasisR; uniform vec3 uBasisU; uniform vec3 uBasisF;
        uniform vec2 uRimDir; uniform vec3 uRimColor; uniform float uRimStrength; uniform float uNormalStrength;
        uniform vec4 uOcc[4]; uniform float uOccluder;
        uniform vec3 uSelfPos; uniform vec3 uSelfColor; uniform float uSelfRadius;
        vec4 gSpriteN;
        float bayerT(vec2 p) {
          vec2 q = mod(floor(p), 4.0);
          int i = int(q.y) * 4 + int(q.x);
          int b[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
          return (float(b[i]) + 0.5) / 16.0;
        }`,snapLight:!0,map:`
        ${$f}
        vec2 sUv = pixelUv(vMapUv, uMapSize);
        vec4 sC = textureGrad(map, sUv, dFdx(vMapUv), dFdy(vMapUv));
        gSpriteN = textureGrad(uNormalTex, sUv, dFdx(vMapUv), dFdy(vMapUv));
        // discard는 미분(조명 스냅·알파 테스트)이 모두 끝난 뒤 알파 테스트에서만 일어나도록 알파만 0으로 둔다
        float keep = 1.0;
        if (uDissolve > 0.0) {
          float hn = hash12(floor(vMapUv * uMapSize) + 0.37);
          if (hn < uDissolve) keep = 0.0;
        }
        if (uOccluder > 0.5) {
          // 플레이어·싸우는 적을 가리는 수관: 대상보다 카메라 쪽에 있는 조각만 텍셀 단위 디더로 비운다.
          // 가운데는 완전히 비우고 바깥 얇은 띠만 성기게 — 넓은 체커 띠는 그물 무늬처럼 보인다
          float cut = 0.0;
          for (int i = 0; i < 4; i++) {
            vec4 o = uOcc[i];
            if (o.z > 0.0 && vViewPosition.z < o.w - 0.6) {
              vec2 dq = (gl_FragCoord.xy - o.xy) / o.z;
              dq.y *= 0.75;
              cut = max(cut, (1.0 - smoothstep(0.72, 1.0, length(dq))) * 1.08);
            }
          }
          if (cut > 0.0 && bayerT(floor(vMapUv * uMapSize)) < cut) keep = 0.0;
        }
        diffuseColor *= vec4(sC.rgb * uTint, sC.a * keep);
        diffuseColor.rgb = mix(diffuseColor.rgb, uFlashColor, uFlash);`,normal:`
        vec3 nS = gSpriteN.xyz * 2.0 - 1.0;
        nS.x *= uFlip;
        nS = normalize(mix(vec3(0.0, 0.0, 1.0), nS, uNormalStrength));
        vec3 nW = uBasisR * nS.x + uBasisU * nS.y + uBasisF * nS.z;
        normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);`,emissive:`
        totalEmissiveRadiance += diffuseColor.rgb * gSpriteN.a * uEmissive + uFlashColor * uFlash * 0.8;`,afterLights:`
        {
          vec3 nR = gSpriteN.xyz * 2.0 - 1.0;
          nR.x *= uFlip;
          float edge = clamp(1.0 - nR.z, 0.0, 1.0);
          float side = max(0.0, dot(normalize(nR.xy + 1e-4), uRimDir));
          float rim = step(0.35, edge * side) * uRimStrength;
          reflectedLight.directDiffuse += diffuseColor.rgb * uRimColor * rim;
        }
        if (uSelfRadius > 0.0) {
          // 손에 든 등불: 실제 점광원은 판 뒤에 두어 몸이 하얗게 날지 않게 하고,
          // 몸은 텍셀 중심(geometryPosition) 기준 부드러운 감쇠 + 법선으로 4단계로 끊어 따뜻하게 비춘다
          vec3 sL = uSelfPos - geometryPosition;
          float sD = length(sL);
          float sF = 1.0 - smoothstep(uSelfRadius * 0.2, uSelfRadius, sD);
          float sN = max(0.0, dot(normal, sL / max(sD, 1e-3)));
          float sK = floor(sN * sF * 4.0 + 0.5) * 0.25;
          reflectedLight.directDiffuse += diffuseColor.rgb * uSelfColor * sK;
        }`}),this.mesh=new si(a,c),this.mesh.castShadow=t.castShadow??!1,this.mesh.receiveShadow=!0,this.mesh.customDepthMaterial=new Xi({depthPacking:Ue,map:this.map,alphaTest:.5}),this.body.add(this.mesh),this.root.add(this.body),t.silhouette){let e=this.u,n=new si(a,new qi({uniforms:{map:{value:this.map},uvT:{value:this.map.matrix},uMapSize:this.u.uMapSize,uDepthBias:{get value(){return e.uDepthBias.value+1.1}},uColor:{value:new H(t.silhouetteColor??8380624)}},vertexShader:`
          uniform mat3 uvT; uniform float uDepthBias; varying vec2 vUv; varying float vY;
          void main() {
            vUv = (uvT * vec3(uv, 1.0)).xy;
            vY = position.y;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            ${Lp}
          }`,fragmentShader:`
          uniform sampler2D map; uniform vec3 uColor; uniform vec2 uMapSize; varying vec2 vUv; varying float vY;
          void main() {
            if (vY < 0.3) discard;
            vec2 t = floor(vUv * uMapSize);
            vec4 c = texture2D(map, (t + 0.5) / uMapSize);
            if (c.a < 0.5) discard;
            // 가려진 부분: 옅은 단색 실루엣 + 가장자리만 조금 밝게
            float edge = 0.0;
            vec2 px1 = 1.0 / uMapSize;
            edge += step(texture2D(map, (t + vec2(1.5, 0.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(-0.5, 0.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(0.5, 1.5)) * px1).a, 0.5);
            edge += step(texture2D(map, (t + vec2(0.5, -0.5)) * px1).a, 0.5);
            gl_FragColor = vec4(uColor, edge > 0.0 ? 0.8 : 0.38);
          }`,transparent:!0,depthWrite:!1,depthFunc:6}));n.renderOrder=20,this.silhouette=n,this.body.add(n)}let[l,u]=t.shadowSize??[1.1,.55],d=new Yr({map:Fp(),transparent:!0,depthWrite:!1,opacity:t.shadowOpacity??.55,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.shadowBaseOpacity=d.opacity,this.shadow=new si(new Li(l,u*2),d),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=2,this.shadow.visible=!t.noShadow,this.root.add(this.shadow)}get material(){return this.mesh.material}has(e){return this.asset.data.anims[`${e}_${this.dir}`]!==void 0}play(e,t=!1){(this.anim!==e||t)&&(this.anim=e,this.frame=0,this.t=0,this.finished=!1)}setDir(e,t){this.dir=e,this.flipX=t}info(){return this.asset.data.anims[`${this.anim}_${this.dir}`]??this.asset.data.anims[`${this.anim}_down`]}duration(e=this.anim){let t=this.asset.data.anims[`${e}_down`];return t?t.durations.reduce((e,t)=>e+t,0):0}update(e){let t=this.info();if(t){for(this.t+=e*this.speed;;){let e=t.durations[this.frame%t.durations.length];if(this.t<e)break;if(this.t-=e,this.frame+1>=t.count){if(t.loop)this.frame=0;else{this.finished=!0,this.t=0;break}}else this.frame++}this.apply()}}setFrame(e){this.frame=e,this.t=0,this.apply()}apply(){let e=this.info();if(!e)return;let t=this.asset.data,n=e.start+Math.min(this.frame,e.count-1),r=n%t.cols,i=Math.floor(n/t.cols),a=t.frameW/t.width,o=t.frameH/t.height,s=r*a,c=1-(i+1)*o,l=this.flipX&&this.dir===`side`;l?this.map.matrix.setUvTransform(s+a,c,-a,o,0,0,0):this.map.matrix.setUvTransform(s,c,a,o,0,0,0),this.u.uFlip.value=l?-1:1}setSelfLight(e,t,n,r,i,a=.55){let o=this.u.uSelfPos.value.copy(e).applyMatrix4(t.matrixWorldInverse);o.z+=a,this.u.uSelfColor.value.copy(n).multiplyScalar(r),this.u.uSelfRadius.value=r>0?i:0}sync(e,t){this.mesh.rotation.y=e,this.silhouette&&(this.silhouette.rotation.y=e),this.mesh.position.y=this.hover,this.silhouette&&(this.silhouette.position.y=this.hover);let n=t-this.root.position.y;this.shadow.position.y=n+.03;let r=Math.max(0,this.root.position.y+this.hover-t),i=this.shadowScale*Math.max(.45,1-r*.18);this.shadow.scale.set(i,i,i),this.shadow.material.opacity=this.shadowBaseOpacity*Math.max(.25,1-r*.2)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function zp(e,t){let n=e.length,r=e[0].length,i=document.createElement(`canvas`);i.width=r,i.height=n;let a=i.getContext(`2d`);return e.forEach((e,n)=>[...e].forEach((e,r)=>{let i=t[e];i&&(a.fillStyle=i,a.fillRect(r,n,1,1))})),i.toDataURL()}var Bp=[`...oo...`,`..obbo..`,`.obbbbo.`,`oBGGGGBo`,`oBGHHGBo`,`oBGHHGBo`,`oBGGGGBo`,`oBGGGGBo`,`.obbbbo.`,`..oBBo..`];function Vp(e){let t={G:Sl(G.ember.colors[2]),H:Sl(G.ember.colors[4])},n={G:Sl(G.indigo.colors[1]),H:Sl(G.indigo.colors[2])};return zp(Bp.map((t,n)=>e===`half`&&n<6||e===`empty`?t.replace(/G/g,`g`).replace(/H/g,`h`):t),{o:Sl(G.ink.colors[0]),b:Sl(G.brass.colors[3]),B:Sl(G.brass.colors[2]),G:t.G,H:t.H,g:n.G,h:n.H})}function Hp(e,t,n,r=``){let i=document.createElement(e);return i.className=t,r&&(i.innerHTML=r),n.appendChild(i),i}var Up=`
  <div class="ctl"><span class="key">W A S D</span><span>이동</span></div>
  <div class="ctl"><span class="key">마우스</span><span>조준</span></div>
  <div class="ctl"><span class="key">좌클릭</span><span>공격 (연타 3단)</span></div>
  <div class="ctl"><span class="key">Space</span><span>구르기 (무적)</span></div>
  <div class="ctl"><span class="key">E</span><span>대화 · 등불 밝히기</span></div>
  <div class="ctl"><span class="key">Esc</span><span>메뉴</span></div>`,Wp=class{root;hp;pips=[];icons;objective;objText;boss;bossName;bossFill;bossTrail;zone;prompt;promptText;toastEl;dialog;dlgName;dlgText;controls;hurtEl;fadeEl;bars;caption;skip;banner;screens={};menuItems=[];menuDefs=[];menuIndex=0;debugEl;toastT=0;zoneT=0;bannerT=0;hurtT=0;trail=1;lastHp=-1;dlgFull=``;dlgShown=0;onTextTick=null;constructor(e){this.root=e,e.innerHTML=``,this.icons={full:Vp(`full`),half:Vp(`half`),empty:Vp(`empty`)};let t=Hp(`div`,`hud hidden`,e);this.hp=Hp(`div`,`hp`,t),this.hp.setAttribute(`aria-label`,`체력`),this.objective=Hp(`div`,`objective`,t,`<span class="obj-label">목표</span>`),this.objText=Hp(`span`,`obj-text`,this.objective),this.boss=Hp(`div`,`boss hidden`,e),this.bossName=Hp(`div`,`boss-name`,this.boss);let n=Hp(`div`,`boss-bar`,this.boss);this.bossTrail=Hp(`div`,`boss-trail`,n),this.bossFill=Hp(`div`,`boss-fill`,n),this.zone=Hp(`div`,`zone-title`,e,`<div class="zt-sub"></div><div class="zt-main"></div><div class="zt-rule"></div>`),this.banner=Hp(`div`,`boss-banner`,e,`<div class="bb-sub"></div><div class="bb-main"></div>`),this.prompt=Hp(`div`,`prompt hidden`,e,`<span class="key">E</span>`),this.promptText=Hp(`span`,`ptext`,this.prompt),this.toastEl=Hp(`div`,`toast`,e),this.dialog=Hp(`div`,`dialog hidden`,e),this.dlgName=Hp(`div`,`dlg-name`,this.dialog),this.dlgText=Hp(`div`,`dlg-text`,this.dialog),Hp(`div`,`dlg-next`,this.dialog,`E · 클릭 ▶`),this.controls=Hp(`div`,`controls hidden`,e,`<div class="ctl-title">조작</div>${Up}`),this.hurtEl=Hp(`div`,`hurt`,e),this.bars=Hp(`div`,`bars`,e,`<div class="bar-top"></div><div class="bar-bot"></div>`),this.caption=Hp(`div`,`caption`,e),this.skip=Hp(`div`,`skip hidden`,e,`Space · 클릭: 건너뛰기`),this.fadeEl=Hp(`div`,`fade`,e),this.debugEl=Hp(`div`,`debug hidden`,e),this.screens.loading=Hp(`div`,`screen loading`,e,`<div class="load-title">등불지기</div><div class="load-bar"><div class="load-fill"></div></div><div class="load-text">등불을 준비하는 중…</div>`),this.screens.title=Hp(`div`,`screen title hidden`,e,`<div class="t-wrap">
        <div class="t-sub">황혼의 계곡</div>
        <div class="t-main">등불지기</div>
        <div class="t-line"></div>
        <button class="t-start" data-act="start">시작하기</button>
        <div class="t-hint">Enter · Space · 클릭</div>
        <div class="t-controls">${Up}</div>
      </div>
      <div class="t-credit">그래픽·소리 모두 코드로 생성 · 글꼴 갈무리(SIL OFL)</div>`),this.screens.pause=Hp(`div`,`screen pause hidden`,e,`<div class="panel"><div class="p-title">일시정지</div><div class="menu"></div><div class="p-help hidden"></div></div>`),this.screens.death=Hp(`div`,`screen death hidden`,e,`<div class="d-main">등불이 꺼졌다</div><div class="d-tip"></div><button class="d-retry" data-act="retry">다시 일어서기</button><div class="t-hint">Enter · 클릭</div>`),this.screens.ending=Hp(`div`,`screen ending hidden`,e,`<div class="panel"><div class="e-sub">황혼의 계곡</div><div class="e-main">등불이 돌아왔다</div><div class="e-stats"></div><button class="e-again" data-act="again">처음부터 다시</button><div class="t-hint">Enter · 클릭</div></div>`)}show(e,t=!0){let n=this.screens[e];n&&n.classList.toggle(`hidden`,!t)}screen(e){return this.screens[e]}setLoading(e,t){let n=this.screens.loading;n.querySelector(`.load-fill`).style.width=`${Math.round(e*100)}%`,n.querySelector(`.load-text`).textContent=t}setHudVisible(e){this.root.querySelector(`.hud`).classList.toggle(`hidden`,!e)}setHp(e,t){if(e===this.lastHp&&this.pips.length===Math.ceil(t/2))return;let n=Math.ceil(t/2);for(;this.pips.length<n;){let e=Hp(`img`,`pip`,this.hp);e.alt=``,this.pips.push(e)}for(let t=0;t<n;t++){let n=e-t*2,r=n>=2?`full`:n===1?`half`:`empty`;this.pips[t].dataset.lvl!==r&&(this.pips[t].src=this.icons[r],this.pips[t].dataset.lvl=r,this.lastHp>=0&&e<this.lastHp&&this.pips[t].classList.add(`pop`))}this.hp.setAttribute(`aria-label`,`체력 ${e} / ${t}`),this.lastHp>=0&&e<this.lastHp&&(this.hurtT=.45,this.hp.classList.remove(`shake`),this.hp.offsetWidth,this.hp.classList.add(`shake`)),this.lastHp=e}setObjective(e){this.objText.textContent!==e&&(this.objText.textContent=e,this.objective.classList.toggle(`hidden`,!e),this.objective.classList.remove(`flash`),this.objective.offsetWidth,e&&this.objective.classList.add(`flash`))}setBoss(e,t=1,n=!1){this.boss.classList.toggle(`hidden`,e===null),e!==null&&(this.bossName.textContent=e,this.bossFill.style.width=`${(t*100).toFixed(2)}%`,this.boss.classList.toggle(`phase2`,n),this.trail=t<this.trail?Math.max(t,this.trail-.004):t,this.bossTrail.style.width=`${(this.trail*100).toFixed(2)}%`)}zoneTitle(e,t){this.zone.querySelector(`.zt-main`).textContent=e,this.zone.querySelector(`.zt-sub`).textContent=t,this.zone.classList.remove(`on`),this.zone.offsetWidth,this.zone.classList.add(`on`),this.zoneT=3.6}bossBanner(e,t){this.banner.querySelector(`.bb-main`).textContent=e,this.banner.querySelector(`.bb-sub`).textContent=t,this.banner.classList.remove(`on`),this.banner.offsetWidth,this.banner.classList.add(`on`),this.bannerT=3.2}toast(e,t=3){this.toastEl.textContent=e,this.toastEl.classList.add(`on`),this.toastT=t}setPrompt(e,t=0,n=0){if(!e){this.prompt.classList.add(`hidden`);return}this.promptText.textContent=e,this.prompt.classList.remove(`hidden`),this.prompt.style.transform=`translate(${Math.round(t)}px, ${Math.round(n)}px) translate(-50%, -100%)`}setControls(e){this.controls.classList.toggle(`hidden`,!e)}openDialog(e,t){this.dialog.classList.remove(`hidden`),this.dlgName.textContent=e,this.dlgFull=t,this.dlgShown=0,this.dlgText.textContent=``}get dialogDone(){return this.dlgShown>=this.dlgFull.length}completeDialog(){this.dlgShown=this.dlgFull.length,this.dlgText.textContent=this.dlgFull}closeDialog(){this.dialog.classList.add(`hidden`)}setBars(e){this.bars.classList.toggle(`on`,e)}setCaption(e){this.caption.textContent!==e&&(this.caption.classList.remove(`on`),this.caption.offsetWidth,this.caption.textContent=e,e&&this.caption.classList.add(`on`))}setSkip(e){this.skip.classList.toggle(`hidden`,!e)}setFade(e){this.fadeEl.style.opacity=String(Math.max(0,Math.min(1,e)))}buildMenu(e){let t=this.screens.pause.querySelector(`.menu`);t.innerHTML=``,this.menuItems=[],this.menuDefs=e,e.forEach((e,n)=>{let r=Hp(`button`,`m-item`,t);r.textContent=e.label(),r.addEventListener(`mouseenter`,()=>this.selectMenu(n)),r.addEventListener(`click`,()=>{this.selectMenu(n),e.action(),this.refreshMenu()}),this.menuItems.push(r)}),this.selectMenu(0)}refreshMenu(){this.menuItems.forEach((e,t)=>e.textContent=this.menuDefs[t].label())}selectMenu(e){this.menuIndex=(e+this.menuItems.length)%this.menuItems.length,this.menuItems.forEach((e,t)=>e.classList.toggle(`sel`,t===this.menuIndex))}activateMenu(){this.menuDefs[this.menuIndex]?.action(),this.refreshMenu()}setHelp(e){let t=this.screens.pause.querySelector(`.p-help`);t.innerHTML=Up+`<div class="p-tip">멧돼지는 앞발로 땅을 긁은 뒤 붉은 선을 따라 돌진합니다. 망령의 안개 구슬은 칼로 베어 흩을 수 있습니다. 붉은 장판이 차오르면 구르기로 피하세요.</div>`,t.classList.toggle(`hidden`,!e)}setDeathTip(e){this.screens.death.querySelector(`.d-tip`).textContent=e}setEndingStats(e){this.screens.ending.querySelector(`.e-stats`).innerHTML=e}setDebug(e){this.debugEl.classList.toggle(`hidden`,e===null),e!==null&&(this.debugEl.textContent=e)}update(e){if(this.toastT>0&&(this.toastT-=e,this.toastT<=0&&this.toastEl.classList.remove(`on`)),this.zoneT>0&&(this.zoneT-=e,this.zoneT<=0&&this.zone.classList.remove(`on`)),this.bannerT>0&&(this.bannerT-=e,this.bannerT<=0&&this.banner.classList.remove(`on`)),this.hurtT=Math.max(0,this.hurtT-e),this.hurtEl.style.opacity=String(Math.min(1,this.hurtT*2.4)),!this.dialog.classList.contains(`hidden`)&&this.dlgShown<this.dlgFull.length){let t=Math.floor(this.dlgShown);this.dlgShown=Math.min(this.dlgFull.length,this.dlgShown+e*34);let n=Math.floor(this.dlgShown);n!==t&&(this.dlgText.textContent=this.dlgFull.slice(0,n),n%2==0&&this.onTextTick?.())}}},Gp=Math.random;function Kp(e,t,n,r,i,a,o,s,c=7){let l=Math.atan2(a,i);for(let i=0;i<o;i++){let i=l+(Gp()-.5)*1.3,a=c*(.45+Gp()*.75);e.add.emit({x:t,y:n,z:r,vx:Math.cos(i)*a,vy:1.5+Gp()*3.5,vz:Math.sin(i)*a,life:.18+Gp()*.22,size:.07+Gp()*.05,color:s[Math.floor(Gp()*s.length)],gravity:16,drag:3,shrink:!0})}}function qp(e,t,n,r,i=1.1,a=16777215){e.fx.spawn(op.impact,{x:t,y:n,z:r,size:i,rot:Gp()*Math.PI,glow:1.6,color:a})}function Jp(e,t,n,r,i=4,a=.5,o=.9){for(let s=0;s<i;s++)e.fx.spawn(op.dust,{x:t+(Gp()-.5)*a,y:n+.12+Gp()*.15,z:r+(Gp()-.5)*a,size:Math.max(.34,o*.6*(.85+Gp()*.35)),vx:(Gp()-.5)*1.2,vy:.35+Gp()*.35,vz:(Gp()-.5)*.6,frameDur:.07+Gp()*.04,alpha:.55,fade:!0,color:12102296})}function Yp(e,t,n,r,i,a=[7894150,5656934,10460071,4088384]){for(let o=0;o<i;o++){let i=Gp()*Math.PI*2,o=2+Gp()*5;e.dust.emit({x:t,y:n+.2,z:r,vx:Math.cos(i)*o,vy:3+Gp()*5,vz:Math.sin(i)*o*.7,life:.6+Gp()*.5,size:.1+Gp()*.08,color:a[Math.floor(Gp()*a.length)],gravity:18,drag:1})}}function Xp(e,t,n,r){e.fx.spawn(op.alert,{x:t,y:n,z:r,size:.62,life:.55,vy:.9,fade:!0,glow:1.3})}var Zp=class{pos=new B;vel=new B;radius;dmg;life;alive=!0;kind;homing;homingT;light;trail=0;constructor(e,t,n,r,i,a,o={}){this.kind=e,this.pos.set(t,n,r),this.vel.set(i,0,a),this.radius=e===`mist`?.36:.3,this.dmg=1,this.life=o.life??(e===`mist`?3.2:2.6),this.homing=o.homing??0,this.homingT=o.homingT??0,this.light={pos:this.pos,color:new H(e===`mist`?9099519:6336767),intensity:e===`mist`?2.4:1.6,distance:3.2,flicker:.2,on:1,target:1,tag:`projectile`}}update(e,t){if(this.life-=e,this.life<=0){this.pop(t);return}let n=t.player;if(this.homingT>0&&this.homing>0){this.homingT-=e;let t=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,i=Math.atan2(r,t),a=Math.atan2(this.vel.z,this.vel.x),o=i-a;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;let s=Ft.clamp(o,-this.homing*e,this.homing*e),c=Math.hypot(this.vel.x,this.vel.z);this.vel.x=Math.cos(a+s)*c,this.vel.z=Math.sin(a+s)*c}this.pos.x+=this.vel.x*e,this.pos.z+=this.vel.z*e;let r=t.terrain.heightAt(this.pos.x,this.pos.z);if(!t.terrain.walkable(this.pos.x,this.pos.z)&&!t.terrain.isWater(this.pos.x,this.pos.z)){this.pop(t);return}if(r>this.pos.y-.2){this.pop(t);return}let i=this.kind===`mist`?op.orbCold:op.bolt;for(t.fx.spawn(i,{x:this.pos.x,y:this.pos.y,z:this.pos.z,size:this.kind===`mist`?.62:.55,life:e*1.01,glow:1.5,loop:!0,rot:this.kind===`rune`?t.time*6:0}),this.trail+=e*(this.kind===`mist`?40:30);this.trail>1;)--this.trail,t.glow.emit({x:this.pos.x+(Gp()-.5)*.15,y:this.pos.y+(Gp()-.5)*.15,z:this.pos.z+(Gp()-.5)*.15,vx:-this.vel.x*.08,vy:.2,vz:-this.vel.z*.08,life:.35,size:.1,color:this.kind===`mist`?Gp()<.5?11069695:5945568:Gp()<.5?7389439:14218495,alpha:.9,fade:1});let a=n.pos.x-this.pos.x,o=n.pos.z-this.pos.z;n.alive&&Math.hypot(a,o)<this.radius+.38&&Math.abs(n.pos.y+.9-this.pos.y)<1.4&&n.hurt(this.dmg,this.pos.x-this.vel.x,this.pos.z-this.vel.z,5)&&(t.onPlayerHurt(this.dmg),this.pop(t))}pop(e,t=!1){if(this.alive){this.alive=!1,this.light.on=0,e.fx.spawn(op.ringCold,{x:this.pos.x,y:this.pos.y,z:this.pos.z,size:.5,grow:2.4,life:.22,fade:!0,glow:1.4});for(let n=0;n<(t?14:8);n++){let t=Gp()*Math.PI*2,n=1+Gp()*2.5;e.glow.emit({x:this.pos.x,y:this.pos.y,z:this.pos.z,vx:Math.cos(t)*n,vy:(Gp()-.3)*2,vz:Math.sin(t)*n,life:.4+Gp()*.3,size:.1,color:this.kind===`mist`?13168895:8440063,alpha:1,fade:1,drag:3})}e.sfx.play(`orbPop`,{vol:t?1:.6})}}},Qp=Math.random,$p=class e{static seq=1;id=e.seq++;actor;pos=new B;vel=new B;home=new B;facing=new z(0,1);hp;maxHp;radius;hitHeight;state=`idle`;stateT=0;alive=!0;removed=!1;group;flash=0;dir=`down`;flip=!1;displayY=0;constructor(e,t,n,r,i,a,o,s){this.actor=new Rp(e,{shadowSize:s,emissive:1.3,depthBias:.4}),this.pos.set(t,0,n),this.home.set(t,0,n),this.group=r,this.hp=i,this.maxHp=i,this.radius=a,this.hitHeight=o}place(e){this.pos.y=e,this.home.y=e,this.displayY=e,this.actor.root.position.set(this.pos.x,e,this.pos.z),this.actor.setDir(this.dir,this.flip),this.actor.apply()}setState(e){this.state=e,this.stateT=0}face(e,t){let n=Math.hypot(e,t);if(n<1e-4)return;this.facing.set(e/n,t/n);let r=Math.abs(e),i=Math.abs(t),a=.15;this.dir=this.dir===`side`?r+a>i?`side`:t<0?`up`:`down`:r>i+a?`side`:t<0?`up`:`down`,this.dir===`side`&&r>.05&&(this.flip=e<0)}takeHit(e,t){return this.alive?(this.hp-=e.dmg,this.flash=1,this.actor.u.uFlashColor.value.setRGB(1,.97,.9),this.hp<=0&&(this.hp=0,this.die(t)),!0):!1}die(e){this.alive=!1,this.setState(`dead`),this.actor.play(`death`,!0),e.sfx.play(`enemyDie`),Qp()<.55&&e.dropEmber(this.pos.x,this.pos.y+.6,this.pos.z)}move(e,t,n=.45){let r=t.terrain.move(this.pos,this.vel.x*e,this.vel.z*e,this.radius,n);return this.displayY+=(this.pos.y-this.displayY)*Math.min(1,e*18),r}present(e){this.flash=Math.max(0,this.flash-e*(this.kind===`boss`?9:6)),this.actor.u.uFlash.value=this.flash,this.actor.setDir(this.dir,this.flip),this.actor.update(e*1e3),this.actor.root.position.set(this.pos.x,this.displayY,this.pos.z)}fadeOut(e,t,n){this.stateT>t&&(this.actor.u.uDissolve.value=Math.min(1,(this.stateT-t)/n)),this.stateT>t+n&&(this.removed=!0)}resetTo(){this.pos.copy(this.home),this.displayY=this.home.y,this.vel.set(0,0,0),this.hp=this.maxHp,this.alive=!0,this.removed=!1,this.setState(`idle`),this.actor.play(`idle`,!0),this.actor.u.uDissolve.value=0,this.flash=0}distTo(e,t){return Math.hypot(e-this.pos.x,t-this.pos.z)}},em={hp:5,aggro:7.5,leash:15,windup:.72,chargeSpeed:10.5,chargeTime:1.05,overshoot:2.6,stun:1.5,recover:1,skid:.45},tm=class extends $p{kind=`boar`;chargeDir=new z;tele=null;wanderT=1+Qp()*2;wanderTo=new z;dustT=0;hitPlayer=!1;starT=0;chargeFor=em.chargeTime;constructor(e,t,n,r){super(e,t,n,r,em.hp,.62,.7,[1.5,.6]),this.actor.play(`idle`),this.wanderTo.set(t,n)}takeHit(e,t){let n=(this.state===`charge`||this.state===`windup`)&&!e.heavy,r=this.state===`stun`,i=super.takeHit({...e,dmg:r?e.dmg+1:e.dmg},t);return!i||!this.alive||n||(this.cancelTele(),this.vel.set(e.dirX*e.knock*.9,0,e.dirZ*e.knock*.9),this.setState(`hurt`),this.actor.play(`hurt`,!0)),i}cancelTele(){this.tele&&=(this.tele.done=!0,null)}die(e){this.cancelTele(),super.die(e)}update(e,t){this.stateT+=e;let n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=n.alive&&n.targetable&&Math.abs(n.pos.y-this.pos.y)<1.6,s=1-Math.exp(-10*e);switch(this.state){case`idle`:{if(this.wanderT-=e,this.wanderT<=0){this.wanderT=2+Qp()*2.5;let e=Qp()*Math.PI*2;this.wanderTo.set(this.home.x+Math.cos(e)*2.2,this.home.z+Math.sin(e)*1.6)}let n=this.wanderTo.x-this.pos.x,r=this.wanderTo.y-this.pos.z,i=Math.hypot(n,r),c=i>.3?1.3:0;this.vel.x+=((i>.3?n/i:0)*c-this.vel.x)*s,this.vel.z+=((i>.3?r/i:0)*c-this.vel.z)*s,c>0&&this.face(n,r),this.actor.play(c>0?`walk`:`idle`),o&&a<em.aggro&&(this.setState(`alert`),Xp(t,this.pos.x,this.pos.y+1.7,this.pos.z),t.sfx.play(`boarAlert`));break}case`alert`:this.vel.multiplyScalar(Math.exp(-10*e)),this.face(r,i),this.actor.play(`idle`),this.stateT>.4&&this.beginWindup(t);break;case`windup`:if(this.vel.multiplyScalar(Math.exp(-12*e)),this.stateT<em.windup*.6&&(this.face(r,i),this.chargeDir.copy(this.facing),this.tele&&(this.tele.mesh.rotation.y=Math.atan2(this.chargeDir.x,this.chargeDir.y))),this.tele&&this.tele.mesh.position.set(this.pos.x,this.pos.y+.04,this.pos.z),this.dustT-=e,this.dustT<=0&&(this.dustT=.16,Jp(t,this.pos.x-this.chargeDir.x*.4,this.pos.y,this.pos.z-this.chargeDir.y*.4,1,.3,.6)),this.stateT>=em.windup){this.tele=null,this.hitPlayer=!1;let e=Math.max(1,r*this.chargeDir.x+i*this.chargeDir.y);this.chargeFor=Math.min(em.chargeTime,(e+em.overshoot)/em.chargeSpeed),this.setState(`charge`),this.actor.play(`charge`,!0),t.sfx.play(`boarCharge`)}break;case`charge`:this.vel.x=this.chargeDir.x*em.chargeSpeed,this.vel.z=this.chargeDir.y*em.chargeSpeed,this.dustT-=e,this.dustT<=0&&(this.dustT=.06,Jp(t,this.pos.x,this.pos.y,this.pos.z,1,.4,.7)),!this.hitPlayer&&n.alive&&a<this.radius+.55&&Math.abs(n.pos.y-this.pos.y)<1&&n.hurt(2,this.pos.x-this.chargeDir.x,this.pos.z-this.chargeDir.y,10)&&(this.hitPlayer=!0,t.onPlayerHurt(2),t.rig.shake(.35,this.chargeDir.x,.3));break;case`skid`:this.vel.multiplyScalar(Math.exp(-7*e)),this.actor.play(`walk`),this.stateT>em.skid&&this.setState(`recover`);break;case`stun`:if(this.vel.multiplyScalar(Math.exp(-10*e)),this.actor.play(`stun`),this.starT-=e,this.starT<=0){this.starT=.35;let e=t.time*4;t.fx.spawn(op.star,{x:this.pos.x+Math.cos(e)*.4,y:this.pos.y+1.45,z:this.pos.z+Math.sin(e)*.2,size:.3,life:.5,vy:.3,fade:!0,glow:1.3})}this.stateT>em.stun&&this.setState(`recover`);break;case`hurt`:this.vel.multiplyScalar(Math.exp(-8*e)),this.stateT>.32&&this.setState(`recover`);break;case`recover`:this.vel.multiplyScalar(Math.exp(-10*e)),this.actor.play(`idle`),o&&this.face(r,i),this.stateT>em.recover&&(o&&a<em.leash*.75?this.beginWindup(t):this.setState(`idle`));break;case`dead`:this.vel.multiplyScalar(Math.exp(-6*e)),this.fadeOut(e,1.2,.6)}this.state===`idle`&&this.distTo(this.home.x,this.home.z)>em.leash&&this.wanderTo.set(this.home.x,this.home.z);let c=this.pos.clone(),l=this.move(e,t);if(this.state===`charge`){let n=Math.hypot(this.pos.x-c.x,this.pos.z-c.z);l&&n<em.chargeSpeed*e*.5?(this.setState(`stun`),this.vel.set(-this.chargeDir.x*3,0,-this.chargeDir.y*3),t.rig.shake(.3,this.chargeDir.x,.2),t.sfx.play(`wall`),Jp(t,this.pos.x+this.chargeDir.x*.6,this.pos.y,this.pos.z+this.chargeDir.y*.6,6,.8,1.1),Kp(t,this.pos.x+this.chargeDir.x*.6,this.pos.y+.6,this.pos.z+this.chargeDir.y*.6,-this.chargeDir.x,-this.chargeDir.y,8,[14207152,11049088]),this.starT=0):this.stateT>this.chargeFor&&this.setState(`skid`)}this.present(e)}beginWindup(e){this.setState(`windup`),this.actor.play(`windup`,!0),this.chargeDir.copy(this.facing),this.cancelTele(),this.tele=e.fx.telegraph({shape:`line`,x:this.pos.x,y:this.pos.y,z:this.pos.z,len:em.chargeSpeed*em.chargeTime*.82,width:1.3,angle:Math.atan2(this.chargeDir.x,this.chargeDir.y),dur:em.windup,hold:.1,color:16738874})}resetTo(){this.cancelTele(),super.resetTo()}},nm={hp:3,aggro:9.5,prefer:5.4,speed:2.6,castTime:.62,release:.33},rm=class extends $p{kind=`wisp`;cd=1.2+Qp();strafe=Qp()<.5?1:-1;strafeT=2;hitsSinceBlink=0;fired=!1;bob=Qp()*6;blinkTo=new B;light={pos:new B,color:new H(8048895),intensity:1.6,distance:3.6,flicker:.25,on:1,target:1,tag:`wisp`};constructor(e,t,n,r){super(e,t,n,r,nm.hp,.5,1.7,[.9,.45]),this.actor.play(`float`),this.actor.shadowBaseOpacity=.35}takeHit(e,t){if(this.state===`blink`)return!1;let n=super.takeHit(e,t);return!n||!this.alive?n:(this.vel.set(e.dirX*e.knock*.7,0,e.dirZ*e.knock*.7),this.hitsSinceBlink++,this.setState(`hurt`),this.actor.play(`hurt`,!0),n)}die(e){super.die(e);for(let t=0;t<26;t++){let t=Qp()*Math.PI*2;e.glow.emit({x:this.pos.x,y:this.pos.y+1.2+Qp()*.8,z:this.pos.z,vx:Math.cos(t)*1.5,vy:.5+Qp(),vz:Math.sin(t)*.8,life:.9+Qp()*.6,size:.12,color:Qp()<.5?13166836:8042712,alpha:.8,fade:1,drag:2})}}update(e,t){this.stateT+=e,this.bob+=e;let n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=n.alive&&n.targetable&&Math.abs(n.pos.y-this.pos.y)<2.2,s=1-Math.exp(-4*e);switch(this.light.on=this.alive?1:Math.max(0,1-this.stateT),this.state){case`idle`:this.vel.multiplyScalar(Math.exp(-3*e)),this.actor.play(`float`),o&&a<nm.aggro&&(this.setState(`hunt`),Xp(t,this.pos.x,this.pos.y+2.9,this.pos.z));break;case`hunt`:{this.actor.play(`float`),this.face(r,i),this.strafeT-=e,this.strafeT<=0&&(this.strafeT=1.6+Qp()*1.6,this.strafe*=-1);let n=a>.001?r/a:0,c=a>.001?i/a:0,l=Ft.clamp((a-nm.prefer)*.8,-1,1),u=(n*l+-c*this.strafe*.6)*nm.speed,d=(c*l+n*this.strafe*.6)*nm.speed;this.vel.x+=(u-this.vel.x)*s,this.vel.z+=(d-this.vel.z)*s,this.cd-=e,this.cd<=0&&o&&a<nm.aggro+1&&(this.setState(`cast`),this.actor.play(`cast`,!0),this.fired=!1,t.sfx.play(`wispCast`)),(!o||a>nm.aggro*1.8)&&this.setState(`idle`);break}case`cast`:if(this.vel.multiplyScalar(Math.exp(-6*e)),this.face(r,i),!this.fired){let e=Qp()*Math.PI*2,n=1.1,r=this.pos.x+this.facing.x*.3,i=this.pos.z+this.facing.y*.3;t.glow.emit({x:r+Math.cos(e)*n,y:this.pos.y+1.6+Math.sin(e)*n*.6,z:i+.2,vx:-Math.cos(e)*n*2.4,vy:-Math.sin(e)*n*1.4,vz:0,life:.38,size:.09,color:12119295,alpha:.9,fade:1})}if(!this.fired&&this.stateT>=nm.release){this.fired=!0;let e=.25,r=n.pos.x+n.vel.x*e-this.pos.x,i=n.pos.z+n.vel.z*e-this.pos.z,a=Math.hypot(r,i)||1,o=6.4,s=new Zp(`mist`,this.pos.x+r/a*.5,this.pos.y+1.45,this.pos.z+i/a*.5,r/a*o,i/a*o,{homing:.9,homingT:.9});t.projectiles.push(s),t.lights.push(s.light),t.sfx.play(`wispShot`)}this.stateT>=nm.castTime&&(this.cd=1.8+Qp()*.9,this.setState(`hunt`));break;case`hurt`:this.vel.multiplyScalar(Math.exp(-6*e)),this.stateT>.3&&(this.hitsSinceBlink>=2?this.beginBlink(t):this.setState(`hunt`));break;case`blink`:{this.vel.set(0,0,0);let e=.28;this.stateT<e?this.actor.u.uDissolve.value=this.stateT/e:this.stateT<e*2?(this.blinkTo.lengthSq()>0&&(this.pos.copy(this.blinkTo),this.displayY=this.pos.y,this.blinkTo.set(0,0,0),Jp(t,this.pos.x,this.pos.y+.8,this.pos.z,3,.8,1.2)),this.actor.u.uDissolve.value=1-(this.stateT-e)/e):(this.actor.u.uDissolve.value=0,this.hitsSinceBlink=0,this.cd=Math.min(this.cd,.6),this.setState(`hunt`));break}case`dead`:this.vel.multiplyScalar(Math.exp(-4*e)),this.fadeOut(e,.7,.5)}this.move(e,t,.9),this.actor.hover=Math.sin(this.bob*2.1)*.08,this.light.pos.set(this.pos.x,this.displayY+1.5,this.pos.z+.2),this.present(e)}beginBlink(e){let t=e.player;for(let n=0;n<12;n++){let n=Qp()*Math.PI*2,r=3.6+Qp()*1.8,i=t.pos.x+Math.cos(n)*r,a=t.pos.z+Math.sin(n)*r;if(!e.terrain.walkable(i,a))continue;let o=e.terrain.heightAt(i,a);if(!(Math.abs(o-this.pos.y)>1.2)&&e.terrain.canStand(i,a,o,this.radius,.5)){this.blinkTo.set(i,o,a);break}}if(this.blinkTo.lengthSq()===0){this.hitsSinceBlink=0,this.setState(`hunt`);return}this.setState(`blink`),e.sfx.play(`wispCast`,{vol:.6})}resetTo(){super.resetTo(),this.actor.play(`float`,!0),this.hitsSinceBlink=0,this.cd=1.2+Qp()}},im=Math.random,am={hp:72,radius:1.9,walk:2.4,slamWind:.64,slamImpact:.06,slamR:2.8,slamReach:2.7,sweepWind:.56,sweepSpeed:17,sweepTime:.5,sweepHalf:2.1,waves:3,bolts:14},om=class extends $p{kind=`boss`;phase=1;tele=null;slamAt=new z;sweepDir=new z;slammed=!1;sweepHit=!1;wave=0;waveT=0;sinceBarrage=0;history=[];idleFor=.8;shock=null;stepT=0;get shockwave(){return this.shock}arena;coreLight;collider;onPhase2=null;onDefeated=null;recoverWeak=!1;constructor(e,t,n,r){super(e,t,n,99,am.hp,am.radius,3.2,[4.4,1.9]),this.arena=r,this.actor.u.uDepthBias.value=1.4,this.actor.u.uEmissive.value=1.8,this.actor.play(`awaken`),this.actor.setFrame(0),this.state=`dormant`,this.coreLight={pos:new B,color:new H(5944575),intensity:0,distance:9,flicker:.15,on:1,target:1,tag:`boss`},this.collider={kind:`circle`,x:t,z:n,r:1.55,y0:-10,y1:10}}get awake(){return this.state!==`dormant`&&this.state!==`awaken`}awaken(e){this.setState(`awaken`),this.actor.play(`awaken`,!0),e.sfx.play(`bossRoar`,{vol:.8})}takeHit(e,t){if(!this.awake||!this.alive)return!1;let n=this.state===`recover`&&this.recoverWeak,r=n?Math.ceil(e.dmg*1.5):e.dmg;return super.takeHit({...e,dmg:r},t)?(this.flash=n?.6:.4,this.actor.u.uFlashColor.value.setRGB(.8,.92,1),this.alive&&this.phase===1&&this.hp<=this.maxHp/2&&this.enterPhase2(t),!0):!1}die(e){this.alive=!1,this.cancelTele(),this.shock=null,this.setState(`dead`),this.actor.play(`death`,!0),e.sfx.play(`bossRoar`,{vol:.9,pitch:.8}),this.onDefeated?.()}cancelTele(){this.tele&&(this.tele.done=!0),this.tele=null}enterPhase2(e){this.phase=2,this.cancelTele(),this.shock=null;for(let t=0;t<3;t++){let n=t/3*Math.PI*2+im();e.dropEmber(this.pos.x+Math.cos(n)*3.2,this.pos.y+.6,this.pos.z+Math.sin(n)*2.6)}this.setState(`stagger`),this.actor.play(`stagger`,!0),e.sfx.play(`bossRoar`),e.rig.shake(.55,0,.6,.6),this.onPhase2?.()}choose(e){let t=this.history.slice(-2),n=e=>t.length===2&&t[0]===e&&t[1]===e;return this.phase===2&&this.sinceBarrage>=3?`barrage`:e>6.5?!n(`sweep`)&&im()<.72?`sweep`:`walk`:e<4.6?!n(`slam`)&&im()<.68||n(`sweep`)?`slam`:`sweep`:im()<.5&&!n(`sweep`)?`sweep`:`walk`}start(e,t){this.history.push(e),this.history.length>6&&this.history.shift(),this.sinceBarrage=e===`barrage`?0:this.sinceBarrage+1;let n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i)||1;if(e===`slam`){this.setState(`slamWind`),this.actor.play(`slamWind`,!0);let e=Math.min(am.slamReach,Math.max(1.4,a-.4));this.slamAt.set(this.pos.x+r/a*e,this.pos.z+i/a*e),this.slammed=!1,this.tele=t.fx.telegraph({shape:`circle`,x:this.slamAt.x,y:this.pos.y,z:this.slamAt.y,r:am.slamR,dur:am.slamWind+am.slamImpact,hold:.12}),t.sfx.play(`bossSweep`,{vol:.5,pitch:.7})}else e===`sweep`?(this.setState(`sweepWind`),this.actor.play(`sweepWind`,!0),this.sweepDir.set(r/a,i/a),this.sweepHit=!1,this.tele=t.fx.telegraph({shape:`line`,x:this.pos.x,y:this.pos.y,z:this.pos.z,len:am.sweepSpeed*am.sweepTime*.92+am.radius,width:am.sweepHalf*2,angle:Math.atan2(this.sweepDir.x,this.sweepDir.y),dur:am.sweepWind,hold:.1})):(this.setState(`hop`),this.actor.play(`walk`,!0))}update(e,t){this.stateT+=e;let n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=`down`;switch(this.state){case`dormant`:this.actor.setFrame(0);break;case`awaken`:this.actor.finished&&(this.setState(`idle`),this.idleFor=.6);break;case`idle`:if(this.vel.multiplyScalar(Math.exp(-8*e)),this.actor.play(`idle`),this.stateT>this.idleFor&&n.alive){let e=this.choose(a);e===`walk`?(this.setState(`walk`),this.actor.play(`walk`,!0)):this.start(e,t)}break;case`walk`:{let n=a||1;this.vel.x=r/n*am.walk,this.vel.z=i/n*am.walk,Math.abs(r)>Math.abs(i)*1.3&&(o=`side`,this.flip=r<0),this.stepT-=e,this.stepT<=0&&(this.stepT=.36,t.rig.shake(.06,0,.5,.1),Jp(t,this.pos.x+(im()-.5)*1.6,this.pos.y,this.pos.z+.4,2,.6,1),t.sfx.play(`wall`,{vol:.25})),(a<4.2||this.stateT>2.4)&&this.start(a<5.5?`slam`:`sweep`,t);break}case`slamWind`:this.vel.multiplyScalar(Math.exp(-10*e)),this.stateT>=am.slamWind&&(this.setState(`slam`),this.actor.play(`slam`,!0));break;case`slam`:!this.slammed&&this.stateT>=am.slamImpact&&(this.slammed=!0,this.tele=null,this.impact(t)),this.stateT>.6&&this.toRecover(this.phase===2?.7:.85,!0);break;case`sweepWind`:if(this.vel.multiplyScalar(Math.exp(-10*e)),this.stateT<am.sweepWind*.6&&a>.5){let t=Math.atan2(i,r),n=Math.atan2(this.sweepDir.y,this.sweepDir.x),a=t-n;for(;a>Math.PI;)a-=Math.PI*2;for(;a<-Math.PI;)a+=Math.PI*2;let o=n+Ft.clamp(a,-1.6*e,1.6*e);this.sweepDir.set(Math.cos(o),Math.sin(o)),this.tele&&(this.tele.mesh.rotation.y=Math.atan2(this.sweepDir.x,this.sweepDir.y))}this.tele&&this.tele.mesh.position.set(this.pos.x,this.pos.y+.04,this.pos.z),this.stateT>=am.sweepWind&&(this.tele=null,this.setState(`sweep`),this.actor.play(`sweep`,!0),t.sfx.play(`bossSweep`));break;case`sweep`:{let e=this.stateT<am.sweepTime,r=e?am.sweepSpeed*(1-(this.stateT/am.sweepTime)**3*.6):0;this.vel.x=this.sweepDir.x*r,this.vel.z=this.sweepDir.y*r,e&&im()<.6&&Jp(t,this.pos.x,this.pos.y,this.pos.z,1,1.2,1.2),e&&!this.sweepHit&&n.alive&&a<am.sweepHalf+.3&&n.hurt(2,this.pos.x-this.sweepDir.x,this.pos.z-this.sweepDir.y,12)&&(this.sweepHit=!0,t.onPlayerHurt(2),t.rig.shake(.45,this.sweepDir.x,.2)),this.stateT>am.sweepTime+.25&&this.toRecover(this.phase===2?.55:.7,!0);break}case`hop`:{let e=this.arena.x-this.pos.x,n=this.arena.z-1.5-this.pos.z,r=Math.hypot(e,n);r>.4&&this.stateT<1.6?(this.vel.x=e/r*7,this.vel.z=n/r*7):(this.vel.set(0,0,0),this.setState(`barrage`),this.actor.play(`cast`,!0),this.wave=0,this.waveT=.35,t.sfx.play(`barrier`,{vol:.7}));break}case`barrage`:if(this.vel.multiplyScalar(Math.exp(-10*e)),this.waveT-=e,this.waveT<=0&&this.wave<am.waves&&(this.fireWave(t,this.wave),this.wave++,this.waveT=.78),this.wave>=am.waves&&this.waveT<=0&&this.toRecover(1.25,!0),im()<.8){let e=im()*Math.PI*2;t.glow.emit({x:this.pos.x+Math.cos(e)*3,y:this.pos.y+.3,z:this.pos.z+Math.sin(e)*2,vx:-Math.cos(e)*4,vy:2.4,vz:-Math.sin(e)*2.6,life:.6,size:.1,color:8440063,alpha:1,fade:1})}break;case`recover`:this.vel.multiplyScalar(Math.exp(-8*e)),this.stateT>this.idleFor&&(this.recoverWeak=!1,this.setState(`idle`),this.idleFor=this.phase===2?.2+im()*.25:.35+im()*.3);break;case`stagger`:this.vel.multiplyScalar(Math.exp(-8*e)),this.stateT>1.5&&(this.sinceBarrage=9,this.setState(`idle`),this.idleFor=.1);break;case`dead`:this.vel.multiplyScalar(Math.exp(-5*e)),this.stateT<2.4&&im()<.5&&Yp(t,this.pos.x+(im()-.5)*3,this.pos.y+2.5*im(),this.pos.z+(im()-.5)*1.5,2)}if(this.shock){let r=this.shock;r.r+=7.5*e;let i=Math.hypot(n.pos.x-r.x,n.pos.z-r.z);!r.hit&&Math.abs(i-r.r)<.45&&n.alive&&n.hurt(1,r.x,r.z,7)&&(r.hit=!0,t.onPlayerHurt(1)),r.r>8&&(this.shock=null)}let s=t.terrain.dynamic,c=s.indexOf(this.collider);c>=0&&s.splice(c,1);let l=this.move(e,t,.6),u=this.pos.x-this.arena.x,d=this.pos.z-this.arena.z,f=Math.hypot(u,d),p=this.arena.r-1.6;f>p&&(this.pos.x=this.arena.x+u/f*p,this.pos.z=this.arena.z+d/f*p),this.state===`sweep`&&l&&this.stateT<am.sweepTime&&(this.stateT=am.sweepTime,t.rig.shake(.3,this.sweepDir.x,.2),t.sfx.play(`wall`,{vol:.8})),this.collider.x=this.pos.x,this.collider.z=this.pos.z,c>=0&&s.push(this.collider),this.dir=o,o===`down`&&(this.flip=!1);let m=this.state===`dormant`?0:this.state===`dead`?Math.max(0,1-this.stateT/1.4):this.state===`recover`&&this.recoverWeak?1.6:1;this.coreLight.intensity=3.2*m*(this.phase===2?1.3:1),this.coreLight.pos.set(this.pos.x,this.pos.y+2.4,this.pos.z+1.1),this.present(e)}toRecover(e,t){this.setState(`recover`),this.actor.play(`idle`,!0),this.idleFor=e,this.recoverWeak=t}impact(e){let t=this.slamAt.x,n=this.slamAt.y,r=this.pos.y,i=e.player;e.rig.shake(.75,0,1,.35),e.hitstop(.05),e.sfx.play(`bossSlam`),Yp(e,t,r,n,26),Jp(e,t,r,n,10,3.2,1.6),e.fx.spawn(op.ringDanger,{x:t,y:r+.06,z:n,size:1.2,ground:!0,grow:5.2,life:.35,fade:!0,glow:1.4}),Kp(e,t,r+.3,n,0,-1,10,[10543359,16777215,10460071],6),i.alive&&Math.hypot(i.pos.x-t,i.pos.z-n)<am.slamR+.2&&i.hurt(2,t,n,9)&&e.onPlayerHurt(2),this.phase===2&&(this.shock={x:t,z:n,r:am.slamR,hit:!1},e.fx.spawn(op.ringCold,{x:t,y:r+.08,z:n,size:am.slamR*2,ground:!0,grow:8/am.slamR,life:(8-am.slamR)/7.5,glow:1.6}))}fireWave(e,t){let n=am.bolts,r=t*Math.PI/n+(t===1?.12:0),i=this.pos.y+1.1;e.fx.spawn(op.ringCold,{x:this.pos.x,y:this.pos.y+.08,z:this.pos.z,size:2,ground:!0,grow:3.4,life:.3,fade:!0,glow:1.5});for(let a=0;a<n;a++){let o=r+a/n*Math.PI*2,s=6.2+(t===2?1.2:0),c=new Zp(`rune`,this.pos.x+Math.cos(o)*1.8,i,this.pos.z+Math.sin(o)*1.4,Math.cos(o)*s,Math.sin(o)*s,{life:2.4});c.light.on=+(a%4==0),e.projectiles.push(c),c.light.on&&e.lights.push(c.light)}e.sfx.play(`runeBolt`,{vol:1.2}),e.rig.shake(.12,0,.3,.12)}resetTo(){this.cancelTele(),this.shock=null,super.resetTo(),this.phase=1,this.history=[],this.sinceBarrage=0,this.state=`dormant`,this.actor.play(`awaken`,!0),this.actor.setFrame(0),this.collider.x=this.pos.x,this.collider.z=this.pos.z}},sm=class{mesh;u;level=0;target=0;constructor(e,t,n,r){let i=new Ii(r,r,3.2,72,1,!0);i.translate(0,1.6,0),this.u={uTime:{value:0},uLevel:{value:0},uR:{value:r}};let a=new qi({uniforms:this.u,vertexShader:`varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
        uniform float uTime; uniform float uLevel; uniform float uR; varying vec2 vUv; varying vec3 vW;
        float hh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        void main(){
          float h = vUv.y;
          if (h > uLevel) discard;
          // 8텍셀/유닛 격자: 아래에서 위로 흐르는 빛줄기 + 가운데 높이에 드문드문 룬 글자
          vec2 px = floor(vec2(vUv.x * uR * 6.2832 * 8.0, h * 3.2 * 8.0));
          float fall = 1.0 - h;
          float cr = hh(vec2(px.x, 3.1));
          float period = 18.0 + floor(cr * 14.0);
          float ph = mod(px.y - uTime * (6.0 + cr * 10.0) + cr * 50.0, period);
          float dash = step(cr, 0.3) * step(ph, 2.0 + floor(cr * 5.0));
          vec2 cell = floor(px / vec2(6.0, 8.0));
          vec2 q = px - cell * vec2(6.0, 8.0) - vec2(1.0, 2.0);
          float inG = step(0.0, q.x) * step(q.x, 2.0) * step(0.0, q.y) * step(q.y, 4.0);
          float bit = step(0.45, hh(cell * 7.3 + vec2(min(q.x, 2.0 - q.x), q.y)));
          float glyph = step(0.88, hh(cell + 0.5)) * step(1.0, cell.y) * step(cell.y, 2.0) * inG * bit;
          float gp = 0.55 + 0.45 * sin(uTime * 2.0 + hh(cell) * 6.28);
          float base = step(px.y, 1.0);
          float a = (fall * fall * 0.42 + dash * 0.3 * fall + glyph * 0.42 * gp + base * 0.45) * uLevel;
          vec3 col = mix(vec3(0.25, 0.6, 1.0), vec3(0.78, 0.94, 1.0), max(glyph, dash * 0.6));
          gl_FragColor = vec4(col * 1.3, a);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,side:1,blending:2});this.mesh=new si(i,a),this.mesh.position.set(e,t,n),this.mesh.renderOrder=26,this.mesh.visible=!1}update(e,t){this.level+=(this.target-this.level)*(1-Math.exp(-3*e)),Math.abs(this.target-this.level)<.002&&(this.level=this.target),this.u.uLevel.value=this.level,this.u.uTime.value=t,this.mesh.visible=this.level>.01}},cm=class{mesh;u;glow=.15;glowTarget=.15;warm=0;constructor(e,t,n,r){let i=new Li(r*2,r*2);i.rotateX(-Math.PI/2),this.u={uTime:{value:0},uGlow:{value:.15},uWarm:{value:0},uR:{value:r}};let a=new qi({uniforms:this.u,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime; uniform float uGlow; uniform float uWarm; uniform float uR; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        void main(){
          float texel = uR * 2.0 * 16.0;
          vec2 p = (floor(vUv * texel) + 0.5) / texel;
          vec2 c = (p - 0.5) * 2.0;
          float r = length(c);
          if (r > 1.0) discard;
          float a = atan(c.y, c.x);
          float px = 2.0 / texel;
          float ring1 = step(abs(r - 0.955), px * 1.1);
          float ring2 = step(abs(r - 0.64), px * 1.1);
          float ring3 = step(abs(r - 0.25), px * 1.1);
          // 두 고리 사이의 룬 칸
          float seg = floor((a + 3.14159) / 6.28318 * 24.0);
          float band = step(0.7, r) * step(r, 0.9);
          vec2 cell = vec2(seg, floor(r * 18.0));
          float glyph = band * step(0.55, h(cell)) * step(0.3, fract((a + 3.14159) / 6.28318 * 24.0)) * step(fract((a + 3.14159) / 6.28318 * 24.0), 0.8);
          float spoke = step(0.25, r) * step(r, 0.64) * step(abs(fract((a + 3.14159) / 6.28318 * 8.0) - 0.5) * r * 6.28 / 8.0 * 2.0, px * 1.2);
          float star = step(r, 0.12) * step(0.5, h(floor(c * 8.0)));
          float line = max(max(max(ring1, ring2), max(ring3, glyph)), max(spoke, star));
          if (line < 0.5) discard;
          float pulse = 0.85 + 0.15 * sin(uTime * 2.2 - r * 6.0);
          vec3 cold = vec3(0.3, 0.72, 1.0);
          vec3 warm = vec3(1.0, 0.62, 0.28);
          vec3 col = mix(cold, warm, uWarm) * (0.35 + uGlow * 1.9) * pulse;
          gl_FragColor = vec4(col, 0.55 + uGlow * 0.45);
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new si(i,a),this.mesh.position.set(e,t+.02,n),this.mesh.renderOrder=2}update(e,t){this.glow+=(this.glowTarget-this.glow)*(1-Math.exp(-2.5*e)),this.u.uGlow.value=this.glow,this.u.uWarm.value=this.warm,this.u.uTime.value=t}},lm=[{x:-36.2,z:-3.7,act:`talk`},{x:-30,z:-1.6},{x:-21,z:-1.2},{x:-16,z:-3},{x:-16,z:-8.2},{x:-10,z:-6.6},{x:-3.8,z:-6.1},{x:2,z:-5},{x:8,z:-3.6},{x:14,z:-1.8},{x:19.2,z:-1},{x:26.8,z:-1},{x:29.6,z:3.1,act:`cp0`},{x:37,z:-1.2},{x:42,z:-1},{x:47,z:-1},{x:54,z:-1.2},{x:57.5,z:4,act:`cp1`},{x:62,z:-2.4},{x:66.5,z:-3.6,act:`boss`},{x:72,z:-11.8},{x:72,z:-16.6,act:`lantern`}],um=class{enabled=!1;i=0;t=0;dodgeCd=0;strafe=1;strafeT=0;stuckT=0;lastX=0;lastZ=0;pressT=0;passive=!1;log=[];reset(){this.i=0}resyncTo(e){let t=0;for(let n=0;n<lm.length;n++)lm[n].x<=e+.5&&(t=n);this.i=t}control(e,t){this.t+=t,this.dodgeCd=Math.max(0,this.dodgeCd-t),this.pressT=Math.max(0,this.pressT-t);let n={move:[0,0],aim:null,attack:!1,dodge:!1,interact:!1,confirm:!1},r=e.player;if(e.mode===`intro`)return n;if(e.mode===`title`||e.mode===`dead`||e.mode===`results`)return this.pressT<=0&&(n.confirm=!0,this.pressT=.5),n;if(e.mode===`dialog`)return this.pressT<=0&&(n.interact=!0,this.pressT=.35),n;if(e.mode!==`play`||!r.alive||this.passive)return n;let i=this.threat(e);if(i)return n.move=i.move,i.dodge&&this.dodgeCd<=0&&(n.dodge=!0,this.dodgeCd=.55),i.aim&&(n.aim=i.aim),n;let a=this.pickFoe(e);if(a){let e=a.pos.x-r.pos.x,i=a.pos.z-r.pos.z,o=Math.hypot(e,i)||1;n.aim=[e/o,i/o];let s=a.radius+(a.kind===`boss`?1.3:1.25);this.strafeT-=t,this.strafeT<=0&&(this.strafeT=1.2+Math.random(),this.strafe*=-1),o>s?n.move=[e/o,i/o]:o<s*.55&&(n.move=[-e/o*.6,-i/o*.6]);let c=a.kind===`boss`&&![`recover`,`idle`,`walk`,`stagger`].includes(a.state);return o<s+.25&&!c&&(n.attack=this.t%.16<t*1.5),n}let o=lm[Math.min(this.i,lm.length-1)],s=o.x-r.pos.x,c=o.z-r.pos.z,l=Math.hypot(s,c);if(Math.hypot(r.pos.x-this.lastX,r.pos.z-this.lastZ)<.02?this.stuckT+=t:this.stuckT=0,this.lastX=r.pos.x,this.lastZ=r.pos.z,l>.45){let e=s/l,t=c/l;if(this.stuckT>.6){let n=Math.floor(this.t)%2==0?1:-1;[e,t]=[e*.3-t*n,t*.3+e*n]}return n.move=[e,t],n}let u=()=>{this.i++,this.log.push(`wp ${this.i}`)};switch(o.act){case`talk`:e.talked?u():e.prompt&&this.pressT<=0&&(n.interact=!0,this.pressT=.5);break;case`cp0`:case`cp1`:{let t=o.act===`cp0`?0:1;e.checkpointsLit[t]?u():e.prompt&&this.pressT<=0&&(n.interact=!0,this.pressT=.5);break}case`boss`:e.bossDefeated?u():e.bossActive||(n.move=[1,-.1]);break;case`lantern`:e.prompt&&this.pressT<=0&&(n.interact=!0,this.pressT=.6);break;default:u()}return n}pickFoe(e){let t=e.player;if(e.bossActive&&e.boss.alive&&e.boss.awake)return e.boss;let n=null,r=8.5;for(let i of e.enemies){if(!i.alive||i.removed||Math.abs(i.pos.y-t.pos.y)>1.4)continue;let e=i.distTo(t.pos.x,t.pos.z);e<r&&(r=e,n=i)}return n}threat(e){let t=e.player;for(let n of e.projectiles){if(!n.alive)continue;let e=n.pos.x-t.pos.x,r=n.pos.z-t.pos.z,i=Math.hypot(e,r),a=e*n.vel.x+r*n.vel.z<0;if(i<1.9&&a){let t=Math.hypot(n.vel.x,n.vel.z)||1,a=-n.vel.z/t,o=n.vel.x/t,s=a*-e+o*-r>=0?1:-1;return{move:[a*s,o*s],dodge:i<1.3,aim:[e/(i||1),r/(i||1)]}}}for(let n of e.enemies){if(!n.alive||n.kind!==`boar`||n.state!==`windup`&&n.state!==`charge`)continue;let e=n.facing.x,r=n.facing.y,i=t.pos.x-n.pos.x,a=t.pos.z-n.pos.z,o=i*e+a*r,s=Math.abs(i*-r+a*e);if(o>-.5&&o<9.5&&s<1.6){let t=i*-r+a*e>=0?1:-1,s=n.state===`charge`||n.stateT>.5;return{move:[-r*t,e*t],dodge:s&&o<5}}}let n=e.boss;if(e.bossActive&&n.alive){let e=t.pos.x-n.pos.x,r=t.pos.z-n.pos.z,i=Math.hypot(e,r)||1,a=n.shockwave;if(a){let e=Math.hypot(t.pos.x-a.x,t.pos.z-a.z);if(a.r<e&&e-a.r<1.1)return{move:[(t.pos.x-a.x)/(e||1),(t.pos.z-a.z)/(e||1)],dodge:!0}}if((n.state===`hop`||n.state===`barrage`)&&i<5.5)return{move:[e/i,r/i],dodge:!1};if(n.state===`slamWind`||n.state===`slam`&&n.stateT<.1)return{move:[e/i,r/i],dodge:n.state===`slamWind`&&n.stateT>.42&&i<5.2};if(n.state===`sweepWind`||n.state===`sweep`&&n.stateT<.45){let t=e/i,a=r/i,o=n.state===`sweepWind`&&n.stateT>.4||n.state===`sweep`&&i<5;return{move:[-a*this.strafe,t*this.strafe],dodge:o}}}return null}},dm=class{camera;target=new B;pitch=Op.pitchDeg*Math.PI/180;yaw=Op.yaw;distance=Op.distance;fov=Op.fov;shakeT=0;shakeAmp=0;shakeDir=new z;kick=new B;shot=null;lookAhead=new B;bounds={minX:-35.5,maxX:84,minZ:-12,maxZ:6};constructor(e){this.camera=new Aa(this.fov,e,.5,2e3)}follow(e,t,n=0,r=0){let i=1-Math.exp(-Op.followLerp*t);this.lookAhead.x+=(n-this.lookAhead.x)*(1-Math.exp(-2.5*t)),this.lookAhead.z+=(r-this.lookAhead.z)*(1-Math.exp(-2.5*t));let a=Ft.clamp(e.x+this.lookAhead.x,this.bounds.minX,this.bounds.maxX),o=e.y+Op.targetLift,s=Ft.clamp(e.z+this.lookAhead.z,this.bounds.minZ,this.bounds.maxZ);this.target.x+=(a-this.target.x)*i,this.target.y+=(o-this.target.y)*(1-Math.exp(-4*t)),this.target.z+=(s-this.target.z)*i}snap(e){this.target.set(Ft.clamp(e.x,this.bounds.minX,this.bounds.maxX),e.y+Op.targetLift,Ft.clamp(e.z,this.bounds.minZ,this.bounds.maxZ)),this.lookAhead.set(0,0,0)}shake(e,t=0,n=0,r=.18){e*1<this.shakeAmp*(this.shakeT/.2)||(this.shakeAmp=e,this.shakeT=r,this.shakeDir.set(t,n),this.kick.set(t*e*.6,-Math.abs(n)*e*.3,0))}update(e,t){let n=this.target,r=this.pitch,i=this.distance,a=this.yaw,o=this.fov;this.shot&&(n=this.shot.target,r=this.shot.pitch,i=this.shot.distance,a=this.shot.yaw,o=this.shot.fov),Math.abs(this.camera.fov-o)>.001&&(this.camera.fov=o,this.camera.updateProjectionMatrix());let s=Math.cos(r),c=Math.sin(r),l=new B(Math.sin(a)*s*i,c*i,Math.cos(a)*s*i);if(this.camera.position.copy(n).add(l),this.camera.lookAt(n),this.shakeT>0){this.shakeT=Math.max(0,this.shakeT-e);let n=this.shakeT>0?this.shakeT/.2:0,r=this.shakeAmp*n*n,i=Math.sin(t*90)*r,a=Math.cos(t*71)*r*.6,o=new B(1,0,0).applyQuaternion(this.camera.quaternion),s=new B(0,1,0).applyQuaternion(this.camera.quaternion);this.camera.position.addScaledVector(o,i*(.4+Math.abs(this.shakeDir.x))+this.kick.x*n),this.camera.position.addScaledVector(s,a*(.4+Math.abs(this.shakeDir.y))+this.kick.y*n)}this.camera.updateMatrixWorld()}project(e,t,n,r=new z){let i=e.clone().project(this.camera);return r.set((i.x*.5+.5)*t,(-i.y*.5+.5)*n),r}unproject(e,t,n,r,i){let a=new B(e/n*2-1,-(t/r)*2+1,.5);a.unproject(this.camera);let o=a.sub(this.camera.position).normalize();if(Math.abs(o.y)<1e-5)return null;let s=(i-this.camera.position.y)/o.y;return s<0?null:this.camera.position.clone().addScaledVector(o,s)}},fm=class{down=new Set;pressed=new Set;mouseX=0;mouseY=0;mouseDown=!1;clickQueued=!1;lastActivity=0;enabled=!0;constructor(e){window.addEventListener(`keydown`,e=>{let t=this.norm(e);[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Tab`].includes(t)&&e.preventDefault(),this.down.has(t)||this.pressed.add(t),this.down.add(t),this.lastActivity=performance.now()}),window.addEventListener(`keyup`,e=>{this.down.delete(this.norm(e))}),window.addEventListener(`blur`,()=>{this.down.clear(),this.mouseDown=!1}),e.addEventListener(`mousemove`,e=>{this.mouseX=e.clientX,this.mouseY=e.clientY}),window.addEventListener(`mousemove`,e=>{this.mouseX=e.clientX,this.mouseY=e.clientY}),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0,this.clickQueued=!0,this.lastActivity=performance.now())}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1)}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}norm(e){return e.code}isDown(e){return this.enabled&&this.down.has(e)}wasPressed(e){return this.enabled&&this.pressed.has(e)}consumeClick(){let e=this.clickQueued&&this.enabled;return this.clickQueued=!1,e}peekClick(){return this.clickQueued&&this.enabled}moveVector(){let e=0,t=0;(this.isDown(`KeyW`)||this.isDown(`ArrowUp`))&&--t,(this.isDown(`KeyS`)||this.isDown(`ArrowDown`))&&(t+=1),(this.isDown(`KeyA`)||this.isDown(`ArrowLeft`))&&--e,(this.isDown(`KeyD`)||this.isDown(`ArrowRight`))&&(e+=1);let n=Math.hypot(e,t);return n>0?[e/n,t/n]:[0,0]}endFrame(){this.pressed.clear()}clearAll(){this.pressed.clear(),this.clickQueued=!1}},pm=class{actor;pos=new B;talking=!1;lantern;dir=`down`;flip=!1;constructor(e,t,n){this.actor=new Rp(e,{shadowSize:[1,.5],emissive:1.6,silhouette:!1}),this.pos.copy(t),this.pos.y=n.heightAt(t.x,t.z),this.actor.play(`idle`),this.lantern={pos:new B,color:new H(16747098),intensity:1.6,distance:4.2,flicker:.18,on:1,target:1,tag:`npc`},n.addCircle(this.pos.x,this.pos.z,.45)}update(e,t){let n=t.x-this.pos.x,r=t.z-this.pos.z;Math.hypot(n,r)<4.5||this.talking?Math.abs(n)>Math.abs(r)+.3?(this.dir=`side`,this.flip=n<0):this.dir=r<0?`up`:`down`:this.dir=`down`,this.actor.play(this.talking?`talk`:`idle`),this.actor.setDir(this.dir,this.flip),this.actor.update(e*1e3),this.actor.root.position.copy(this.pos);let i=this.dir===`side`?this.flip?.35:-.35:this.dir===`up`?-.7:.7;this.lantern.pos.set(this.pos.x+i,this.pos.y+1.85,this.pos.z+.25)}},mm=[{anim:`attack1`,active:[.118,.2],total:.365,cancel:.24,dmg:1,knock:5.5,lunge:3.2,hitstop:.065,reach:1.75,arc:2.2},{anim:`attack2`,active:[.108,.19],total:.355,cancel:.23,dmg:1,knock:5.5,lunge:3.2,hitstop:.065,reach:1.75,arc:2.2},{anim:`attack3`,active:[.255,.33],total:.595,cancel:.46,dmg:2,knock:10,lunge:6.5,hitstop:.12,reach:2.05,arc:2}],hm=class{actor;pos=new B;vel=new B;displayY=0;facing=new z(0,1);aim=new z(0,1);state=`move`;stateT=0;hp=Ap.maxHp;maxHp=Ap.maxHp;iframes=0;combo=0;queued=!1;hitIds=new Set;dodgeDir=new z;dodgeCd=0;moving=!1;lantern;events=[];dir=`down`;flip=!1;stepPhase=0;afterimage=0;constructor(e){this.actor=new Rp(e,{silhouette:!0,shadowSize:[1,.5],emissive:1.5}),this.actor.play(`idle`),this.lantern={pos:new B,color:new H(16756832),intensity:1.9,distance:5.5,flicker:.12,on:1,target:1,tag:`player`}}spawn(e,t){this.pos.copy(e),this.pos.y=t.heightAt(e.x,e.z),this.displayY=this.pos.y,this.vel.set(0,0,0),this.hp=this.maxHp,this.state=`move`,this.iframes=0,this.facing.set(0,1),this.actor.play(`idle`,!0),this.actor.u.uDissolve.value=0,this.actor.u.uFlash.value=0,this.actor.mesh.visible=!0}get alive(){return this.state!==`dead`}get targetable(){return this.state!==`dead`&&this.state!==`locked`}lock(){this.state!==`dead`&&(this.state=`locked`,this.stateT=0,this.combo=0,this.actor.play(`idle`),this.actor.speed=1)}unlock(){this.state===`locked`&&(this.state=`move`,this.stateT=0)}get invulnerable(){return this.iframes>0?!0:this.state===`dodge`?this.stateT>=Ap.dodgeIFrameStart&&this.stateT<=Ap.dodgeIFrameEnd:this.state===`locked`}currentAttack(){return this.state===`attack`?mm[this.combo]:null}attackActive(){let e=this.currentAttack();return!!e&&this.stateT>=e.active[0]&&this.stateT<=e.active[1]}chooseDir(e,t){let n=Math.abs(e),r=Math.abs(t),i=.18,a;a=this.dir===`side`?n+i>r?`side`:t<0?`up`:`down`:n>r+i?`side`:t<0?`up`:`down`,this.dir=a,a===`side`&&Math.abs(e)>.05&&(this.flip=e<0)}startAttack(){this.state=`attack`,this.stateT=0,this.queued=!1,this.hitIds.clear();let e=mm[this.combo];this.facing.copy(this.aim),this.chooseDir(this.aim.x,this.aim.y),this.actor.play(e.anim,!0),this.events.push(this.combo===2?`windup-heavy`:`windup`)}hurt(e,t,n,r=6){if(!this.alive||this.invulnerable)return!1;this.hp=Math.max(0,this.hp-e);let i=this.pos.x-t,a=this.pos.z-n,o=Math.hypot(i,a)||1;return this.vel.set(i/o*r,0,a/o*r),this.actor.u.uFlash.value=1,this.actor.u.uFlashColor.value.setRGB(1,.25,.2),this.hp<=0?(this.state=`dead`,this.stateT=0,this.actor.play(`death`,!0),this.events.push(`death`)):(this.state=`hurt`,this.stateT=0,this.iframes=Ap.hurtIFrames,this.actor.play(`hurt`,!0),this.events.push(`hurt`)),!0}heal(e){this.hp=Math.min(this.maxHp,this.hp+e)}update(e,t,n){this.events.length=0,this.stateT+=e,this.iframes=Math.max(0,this.iframes-e),this.dodgeCd=Math.max(0,this.dodgeCd-e);let[r,i]=t.move;if(this.moving=r!==0||i!==0,this.state!==`dead`&&this.state!==`locked`){if(t.dodge&&this.dodgeCd<=0&&this.state!==`dodge`&&this.state!==`hurt`){this.state=`dodge`,this.stateT=0;let e=this.moving?r:this.facing.x,t=this.moving?i:this.facing.y,n=Math.hypot(e,t)||1;this.dodgeDir.set(e/n,t/n),this.facing.copy(this.dodgeDir),this.chooseDir(this.dodgeDir.x,this.dodgeDir.y),this.actor.play(`dodge`,!0),this.events.push(`dodge`),this.afterimage=0}else t.attack&&(this.state===`move`?(this.combo=0,this.startAttack()):this.state===`attack`&&(this.queued=!0))}let a=0,o=0,s=0;switch(this.state){case`move`:{a=Ap.speed,o=r*a,s=i*a;let t=1-Math.exp(-Ap.accel*e*.35);this.vel.x+=(o-this.vel.x)*t,this.vel.z+=(s-this.vel.z)*t,this.moving&&(this.facing.set(r,i),this.chooseDir(r,i));let n=Math.hypot(this.vel.x,this.vel.z);n>.6?(this.actor.play(`run`),this.actor.speed=Ft.clamp(n/Ap.speed,.55,1.25),this.stepPhase+=e*this.actor.speed):(this.actor.play(`idle`),this.actor.speed=1);break}case`attack`:{let t=mm[this.combo];this.actor.speed=1;let n=this.stateT>=t.active[0]-.03&&this.stateT<=t.active[0]+.06,a=1-Math.exp(-18*e),o=n?this.facing.x*t.lunge:r*.8,s=n?this.facing.y*t.lunge:i*.8;this.vel.x+=(o-this.vel.x)*a,this.vel.z+=(s-this.vel.z)*a,this.queued&&this.stateT>=t.cancel&&this.combo<2?(this.combo++,this.startAttack()):this.stateT>=t.total&&(this.state=`move`,this.combo=0,this.stateT=0);break}case`dodge`:{let t=Ap.dodgeTime,n=Math.min(1,this.stateT/t),r=Ap.dodgeSpeed*(1-n)**.55;this.vel.x=this.dodgeDir.x*r,this.vel.z=this.dodgeDir.y*r,this.actor.speed=1,this.afterimage+=e,this.stateT>=t&&(this.state=`move`,this.stateT=0,this.dodgeCd=Ap.dodgeCooldown,this.vel.multiplyScalar(.3));break}case`hurt`:this.vel.multiplyScalar(Math.exp(-9*e)),this.stateT>.26&&(this.state=`move`,this.stateT=0);break;case`dead`:this.vel.multiplyScalar(Math.exp(-8*e));break;case`locked`:this.vel.multiplyScalar(Math.exp(-12*e))}n.move(this.pos,this.vel.x*e,this.vel.z*e,Ap.radius,Ap.stepHeight),this.displayY+=(this.pos.y-this.displayY)*Math.min(1,e*22),this.actor.setDir(this.dir,this.flip),this.actor.update(e*1e3),this.actor.root.position.set(this.pos.x,this.displayY,this.pos.z),this.actor.u.uFlash.value=Math.max(0,this.actor.u.uFlash.value-e*7);let c=this.iframes>0&&this.state!==`dead`&&Math.floor(this.iframes*18)%2==0;this.actor.mesh.visible=!c,this.lantern.pos.set(this.pos.x+(this.flip?-.35:.35),this.displayY+.75,this.pos.z-.15)}setDirTo(e,t){this.facing.set(e,t),this.chooseDir(e,t),this.actor.setDir(this.dir,this.flip)}get spriteDir(){return this.dir}get spriteFlip(){return this.flip}},gm={hero:`리안`,sol:`솔`,boss:`석상 수호자`,bossSub:`잊힌 신전의 문지기`},_m=[`리안, 왔구나. 해가 저문 지 벌써 사흘째란다. 노을이 이렇게 오래 머무는 건 처음 보는구나.`,`골짜기 끝 잊힌 신전의 큰 등불이 꺼진 뒤로, 숲에는 물안개 망령이 떠돌고 멧돼지들까지 사나워졌지.`,`신전을 지키던 석상 수호자가 꺼진 불씨를 품은 채 깨어나 길을 막고 있다는구나.`,`네 허리춤의 등불이라면 큰 등불을 다시 밝힐 수 있을 게다. 가는 길의 석등을 밝혀 두면 쉬어 갈 수도 있고.`,`마을 동쪽 문을 지나 숲으로 가거라. 조심하고… 꼭 돌아오너라.`],vm=[[`멧돼지는 앞발로 땅을 긁은 다음 곧장 달려든단다. 붉은 선을 피해 옆으로 구르거라. 벽에 박으면 한동안 비틀거리지.`],[`망령이 쏘는 안개 구슬은 칼로 베어 흩어 버릴 수 있다더구나. 가까이 붙으면 금세 달아나니 끈질기게 쫓거라.`],[`수호자는 큰 공격 뒤에 가슴의 불집이 드러난다. 그때가 기회란다.`]],ym={talk:`솔 할아버지와 이야기하기`,gate:`동쪽 마을 문을 지나 물안개 숲으로`,forest:`숲을 지나 강 건너 쉼터로`,ruins:`폐허를 지나 잊힌 신전으로`,boss:`석상 수호자를 쓰러뜨리기`,lantern:`신전의 큰 등불 밝히기`},bm=[`황혼의 계곡 끝, 잊힌 신전의 큰 등불이 꺼졌다.`,`물안개가 숲을 삼키고, 짐승들은 빛을 잃고 사나워졌다.`,`마을의 마지막 등불지기, 리안이 길을 나선다.`],xm=[`꺼졌던 신전의 등불이 다시 타오른다.`,`황혼의 계곡에 따스한 빛이 돌아왔다.`],Sm=[`구르는 동안에는 공격을 받지 않습니다. 붉은 장판이 가득 차기 직전에 굴러 보세요.`,`석등을 밝히면 그 자리에서 다시 일어서고 체력도 모두 채워집니다.`,`쓰러진 적이 떨어뜨린 불씨를 주우면 체력이 조금 돌아옵니다.`,`3단 베기의 마지막 일격은 멧돼지의 돌진 준비도 끊어 냅니다.`,`수호자가 내려찍은 뒤나 돌진을 마친 뒤, 드러난 불집을 노리세요.`],Cm={gateBlocked:`먼저 솔 할아버지께 인사를 드리자.`,checkpoint:e=>`${e}의 석등을 밝혔다 — 쓰러지면 여기서 다시 일어선다`,bossDown:`수호자가 잠들었다. 결계가 걷힌다.`,heal:`불씨가 몸을 데운다`},wm=`
float bayer4(vec2 p) {
  vec2 q = mod(floor(p), 4.0);
  int i = int(q.y) * 4 + int(q.x);
  int b[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
  return (float(b[i]) + 0.5) / 16.0;
}`,Tm=class{group=new Pn;dome;layers=[];clouds;u={uTop:{value:new H},uHorizon:{value:new H},uGlow:{value:new H},uSunDir:{value:new B(-.8,.2,-.5)},uStars:{value:0},uTime:{value:0}};constructor(){let e=new qi({uniforms:this.u,vertexShader:`
        varying vec3 vDir;
        void main() { vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
        uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uGlow; uniform vec3 uSunDir; uniform float uStars; uniform float uTime;
        varying vec3 vDir;
        ${Yf}
        void main() {
          vec3 d = normalize(vDir);
          float h = d.y;
          float t = clamp(h * 1.5 + 0.12, 0.0, 1.0);
          t = floor(t * 14.0) / 14.0;
          vec3 col = mix(uHorizon, uTop, t);
          vec3 sd3 = normalize(uSunDir);
          float sd = max(dot(d, sd3), 0.0);
          float g = floor(pow(sd, 6.0) * 6.0) / 6.0;
          col += uGlow * g * 0.55;
          col += uGlow * step(0.9985, sd) * 2.0;
          vec2 sp = floor(vec2(atan(d.z, d.x), asin(clamp(d.y, -1.0, 1.0))) * 160.0);
          float s = hash12(sp);
          float tw = 0.6 + 0.4 * sin(uTime * 2.0 + s * 40.0);
          col += vec3(0.9, 0.95, 1.0) * step(0.9965, s) * uStars * tw * smoothstep(0.02, 0.25, h);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,side:1,depthWrite:!1,fog:!1});this.dome=new si(new Ri(900,32,16),e),this.dome.renderOrder=-100,this.dome.frustumCulled=!1,this.group.add(this.dome);for(let e of[{z:-330,y:-30,w:1400,h:350,tex:0,fog:.72},{z:-230,y:-40,w:1e3,h:250,tex:1,fog:.45},{z:-150,y:-34,w:700,h:175,tex:2,fog:.22}]){let t=Zf(Df(e.tex),{repeat:!0});t.wrapT=a;let n=new qi({uniforms:{map:{value:t},uHorizon:this.u.uHorizon,uTop:this.u.uTop,uGlow:this.u.uGlow,uFogAmt:{value:e.fog},uRepeat:{value:e.w/512/1.6}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
          uniform sampler2D map; uniform vec3 uHorizon; uniform vec3 uTop; uniform vec3 uGlow; uniform float uFogAmt; uniform float uRepeat;
          varying vec2 vUv;
          void main(){
            vec2 uv = vec2(vUv.x * uRepeat, vUv.y);
            vec4 c = texture2D(map, uv);
            if (c.a < 0.5) discard;
            vec3 col = mix(c.rgb * 0.9, uHorizon, uFogAmt);
            col = mix(col, uTop * 0.8, (1.0 - vUv.y) * 0.25 * (1.0 - uFogAmt));
            gl_FragColor = vec4(col, 1.0);
            #include <colorspace_fragment>
          }`,depthWrite:!0,fog:!1});t.magFilter=s;let r=new si(new Li(e.w,e.h),n);r.position.set(10,e.y+e.h/2,e.z),r.renderOrder=-50,this.layers.push(r),this.group.add(r)}let t=Zf(Of(),{repeat:!0});t.magFilter=s;let n=new qi({uniforms:{map:{value:t},uTime:this.u.uTime,uTint:{value:new H(1,1,1)},uHorizon:this.u.uHorizon},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform sampler2D map; uniform float uTime; uniform vec3 uTint; uniform vec3 uHorizon; varying vec2 vUv;
        void main(){
          vec4 c = texture2D(map, vec2(vUv.x * 3.0 + uTime * 0.004, vUv.y));
          if (c.a < 0.5) discard;
          gl_FragColor = vec4(mix(c.rgb * uTint, uHorizon, 0.35), 1.0);
          #include <colorspace_fragment>
        }`,transparent:!1,depthWrite:!1,fog:!1});this.clouds=new si(new Li(1600,140),n),this.clouds.position.set(0,150,-420),this.clouds.renderOrder=-60,this.group.add(this.clouds)}update(e,t,n){this.u.uTop.value.copy(e.skyTop),this.u.uHorizon.value.copy(e.skyHorizon),this.u.uGlow.value.copy(e.sunGlow),this.u.uSunDir.value.copy(e.sunDir).setY(Math.max(.02,e.sunDir.y*.25)),this.u.uStars.value=e.stars,this.u.uTime.value=n,this.dome.position.copy(t.position)}},Em=class{mesh;u;constructor(e,t,n,r,i){this.u=Wi.merge([W.fog,{uTime:{value:0},uX0:{value:e},uX1:{value:t},uDeep:{value:new H(928324)},uMid:{value:new H(1989240)},uHi:{value:new H(5940412)},uFoam:{value:new H(13166828)},uSky:{value:new H(4876944)},uLight:{value:new H(1,.8,.6)},uBridgeZ:{value:-1}}]);let a=new qi({uniforms:this.u,vertexShader:`
        #include <fog_pars_vertex>
        varying vec3 vW;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vec4 mvPosition = viewMatrix * w;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <fog_pars_fragment>
        ${Yf}
        uniform float uTime; uniform float uX0; uniform float uX1; uniform float uBridgeZ;
        uniform vec3 uDeep; uniform vec3 uMid; uniform vec3 uHi; uniform vec3 uFoam; uniform vec3 uSky; uniform vec3 uLight;
        varying vec3 vW;
        void main() {
          // 텍셀 격자(16/유닛)에 맞춘 물결
          vec2 p = (floor(vW.xz * 16.0) + 0.5) / 16.0;
          float t = uTime;
          float n1 = vnoise(p * vec2(1.1, 0.33) + vec2(0.0, -t * 0.55));
          float n2 = vnoise(p * vec2(2.4, 0.75) + vec2(t * 0.12, -t * 1.25) + 7.1);
          float n3 = vnoise(p * vec2(5.0, 1.6) + vec2(0.0, -t * 2.2) + 3.7);
          float n = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
          float edge = min(p.x - uX0, uX1 - p.x);
          float depthK = smoothstep(0.0, 2.6, edge);
          vec3 col = mix(uMid, uDeep, depthK);
          col = mix(col, uSky * 0.55 + uMid * 0.45, 0.35);
          float band = step(0.6, n);
          float hi = step(0.74, n) * step(0.5, n3);
          col = mix(col, uMid * 1.25 + uSky * 0.1, band * 0.8);
          col = mix(col, uHi + uLight * 0.25, hi);
          float foamN = vnoise(p * 3.0 + vec2(0.0, -t * 1.5));
          float foam = step(edge, 0.28 + foamN * 0.35);
          col = mix(col, uFoam, foam * 0.85);
          // 다리 그림자 띠
          float bz = abs(p.y - uBridgeZ);
          col *= 1.0 - step(bz, 1.35) * 0.35;
          float alpha = mix(0.72, 0.93, depthK) + foam * 0.1;
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,transparent:!0,fog:!0,depthWrite:!1}),o=new Li(t-e,r-n);o.rotateX(-Math.PI/2),this.mesh=new si(o,a),this.mesh.position.set((e+t)/2,i,(n+r)/2),this.mesh.renderOrder=1}update(e,t){this.u.uTime.value=e,this.u.uSky.value.copy(t.hemiSky),this.u.uLight.value.copy(t.sunColor).multiplyScalar(Math.min(1,t.sunIntensity))}},Dm=class{mesh;u;constructor(e,t,n,r,i){this.u=Wi.merge([W.fog,{uTime:{value:0},uTint:{value:new H(1,1,1)}}]);let a=new qi({uniforms:this.u,vertexShader:`
        #include <fog_pars_vertex>
        varying vec3 vW; varying vec2 vUv;
        void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <fog_pars_fragment>
        ${Yf}
        uniform float uTime; uniform vec3 uTint; varying vec3 vW; varying vec2 vUv;
        void main(){
          vec2 p = (floor(vec2(vW.x, vW.y) * 16.0) + 0.5) / 16.0;
          float s = vnoise(vec2(p.x * 3.5, p.y * 0.6 + uTime * 3.2));
          float s2 = vnoise(vec2(p.x * 7.0 + 3.0, p.y * 1.2 + uTime * 4.5));
          vec3 deep = vec3(0.10, 0.28, 0.42);
          vec3 mid = vec3(0.35, 0.62, 0.74);
          vec3 hi = vec3(0.85, 0.95, 0.98);
          vec3 col = mix(deep, mid, step(0.45, s));
          col = mix(col, hi, step(0.72, s * 0.6 + s2 * 0.4));
          float edgeX = min(vUv.x, 1.0 - vUv.x);
          col = mix(col, hi, step(edgeX, 0.04) * 0.6);
          col *= uTint;
          float a = 0.92;
          if (edgeX < 0.015) discard;
          gl_FragColor = vec4(col, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,transparent:!0,fog:!0,depthWrite:!1});this.mesh=new si(new Li(t-e,r-i),a),this.mesh.position.set((e+t)/2,(r+i)/2,n),this.mesh.renderOrder=2}update(e,t){this.u.uTime.value=e,this.u.uTint.value.copy(t.hemiSky).lerp(new H(1,1,1),.55)}},Om=class{mesh;u;base;constructor(e,t,n,r,i,a=1,o=0){this.base=a,this.u=Wi.merge([W.fog,{uTime:{value:0},uDensity:{value:a},uColor:{value:new H(10533064)},uSeed:{value:o}}]);let s=new qi({uniforms:this.u,vertexShader:`
        #include <fog_pars_vertex>
        varying vec3 vW; varying vec2 vUv;
        void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        #include <common>
        #include <fog_pars_fragment>
        ${Yf}
        ${wm}
        uniform float uTime; uniform float uDensity; uniform vec3 uColor; uniform float uSeed;
        varying vec3 vW; varying vec2 vUv;
        void main(){
          vec2 p = (floor(vW.xz * 8.0) + 0.5) / 8.0;
          float n = vnoise(p * 0.32 + vec2(uTime * 0.045 + uSeed, uTime * 0.018)) * 0.62
                  + vnoise(p * 0.85 + vec2(-uTime * 0.07, uSeed * 3.0)) * 0.38;
          float e = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
          float edge = smoothstep(0.0, 0.22, e);
          float a = smoothstep(0.3, 0.85, n) * edge * uDensity;
          if (a <= 0.004) discard;
          // 노이즈 입력은 텍셀 격자(8/유닛)로 끊고, 불투명도는 부드럽게 — 픽셀 결을 가진 옅은 안개
          gl_FragColor = vec4(uColor, clamp(a, 0.0, 1.0) * 0.3);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!0}),c=new Li(n,r);c.rotateX(-Math.PI/2),this.mesh=new si(c,s),this.mesh.position.set(e,i,t),this.mesh.renderOrder=5}update(e,t,n){this.u.uTime.value=e,this.u.uDensity.value=this.base*t,this.u.uColor.value.copy(n),this.mesh.visible=this.base*t>.02}},km={uTime:{value:0},uWind:{value:1},uPlayer:{value:new B(0,-100,0)},uStretch:{value:kp},uGlowColor:{value:new H(.35,.9,1)},uGlowBoost:{value:1.2}};function Am(e){return{pars:`
    attribute float aCell; attribute float aSize; attribute vec3 aTint; attribute vec3 aNrm; attribute vec2 aSway;
    uniform float uTime; uniform float uWind; uniform vec3 uPlayer; uniform float uStretch;
    varying vec2 vUvF; varying vec3 vTint;
    vec3 gFolWp;`,project:`
    vec4 wc = modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 camU = ${e?`vec3(0.0, 1.0, 0.0)`:`vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1])`};
    vec2 off = position.xy * aSize;
    ${e?`off.y *= uStretch;`:``}
    float hk = ${e?`position.y`:`(position.y + 0.5)`};
    float swy = sin(uTime * 1.6 + aSway.y + wc.x * 0.37 + wc.z * 0.21) + 0.45 * sin(uTime * 2.9 + aSway.y * 1.7);
    float sw = swy * aSway.x * uWind * hk;
    vec3 wp = wc.xyz + camR * (off.x + sw) + camU * off.y;
    ${e?`vec2 pd = wp.xz - uPlayer.xz; float pdl = length(pd);
           float push = (1.0 - smoothstep(0.0, 1.3, pdl)) * hk * 0.45 * step(abs(wp.y - uPlayer.y), 1.5);
           wp.xz += pd / max(pdl, 1e-3) * push; wp.y -= push * 0.3;`:``}
    gFolWp = wp;
    vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    float col = mod(aCell, ${8 .toFixed(1)});
    float row = floor(aCell / ${8 .toFixed(1)});
    vec2 luv = vec2(position.x + 0.5, ${e?`position.y`:`position.y + 0.5`});
    vUvF = vec2((col + luv.x) / ${8 .toFixed(1)}, (${2 .toFixed(1)} - row + luv.y) / ${3 .toFixed(1)});
    vTint = aTint;`,world:`
    #if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
      worldPosition = vec4(gFolWp, 1.0);
    #endif`}}var jm=class{mesh;constructor(e,t,n,r){let i=new Li(1,1);r&&i.translate(0,.5,0);let a=n.length,o=new Float32Array(a),s=new Float32Array(a),c=new Float32Array(a*3),l=new Float32Array(a*3),u=new Float32Array(a*2);n.forEach((e,t)=>{o[t]=e.cell,s[t]=e.size??2;let n=e.tint??[1,1,1];c.set(n,t*3);let i=e.normal??[0,1,.6],a=Math.hypot(i[0],i[1],i[2])||1;l.set([i[0]/a,i[1]/a,i[2]/a],t*3),u[t*2]=e.sway??(r?.12:.08),u[t*2+1]=e.phase??(e.x*1.3+e.z*.7)%6.28}),i.setAttribute(`aCell`,new di(o,1)),i.setAttribute(`aSize`,new di(s,1)),i.setAttribute(`aTint`,new di(c,3)),i.setAttribute(`aNrm`,new di(l,3)),i.setAttribute(`aSway`,new di(u,2));let d=new Yi({map:e,alphaTest:.5,alphaToCoverage:!0}),f=new z(e.image.width,e.image.height),p=Am(r);d.onBeforeCompile=e=>{Object.assign(e.uniforms,km,{uAtlasSize:{value:f},uGlow:{value:t}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${p.pars}`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = normalize(aNrm);
#ifdef USE_TANGENT
vec3 objectTangent = vec3( tangent.xyz );
#endif`).replace(`#include <project_vertex>`,p.project).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>\n${p.world}`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Yf}\nuniform vec2 uAtlasSize; uniform sampler2D uGlow; uniform vec3 uGlowColor; uniform float uGlowBoost; varying vec2 vUvF; varying vec3 vTint;`).replace(`#include <map_fragment>`,`vec4 fc = texPixel(map, vUvF, uAtlasSize); diffuseColor *= vec4(fc.rgb * vTint, fc.a);`).replace(`#include <emissivemap_fragment>`,t?`totalEmissiveRadiance += uGlowColor * texPixel(uGlow, vUvF, uAtlasSize).r * uGlowBoost;`:``)},d.customProgramCacheKey=()=>`foliage-${r?`u`:`s`}-${t?`g`:`n`}`,this.mesh=new yi(i,d,a);let m=new on;n.forEach((e,t)=>{m.makeTranslation(e.x,e.y,e.z),this.mesh.setMatrixAt(t,m)}),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;let h=new Xi({depthPacking:Ue,map:e,alphaTest:.5});h.onBeforeCompile=e=>{Object.assign(e.uniforms,km,{uAtlasSize:{value:f}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${p.pars}`).replace(`#include <project_vertex>`,p.project),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vUvF; varying vec3 vTint;`).replace(`#include <map_fragment>`,`diffuseColor *= texture2D(map, vUvF);`)},h.customProgramCacheKey=()=>`foliage-depth-${r?`u`:`s`}`,this.mesh.customDepthMaterial=h}},Mm=class{lights=[];radius;windowScale=1;lanternScale=1;constructor(e,t=12,n=24){this.radius=n;for(let n=0;n<t;n++){let t=new Ma(16777215,0,6,1.6);t.castShadow=!1,e.add(t),this.lights.push(t)}}update(e,t,n,r){let i=[],a=this.radius,o=[];for(let e of t){if(e.on<=.001||e.intensity<=0)continue;let t=e.pos.distanceTo(n);t>a||o.push({e,d:t})}o.sort((e,t)=>e.d-t.d);for(let e=0;e<Math.min(6,o.length);e++)i.push({e:o[e].e,d:-1+o[e].d*.001});for(let t of e){if(t.on<=.001||t.intensity<=0)continue;let e=t.pos.distanceTo(n);e>a||i.push({e:t,d:e})}i.sort((e,t)=>e.d-t.d);for(let e=0;e<this.lights.length;e++){let t=this.lights[e],n=i[e];if(!n){t.intensity=0;continue}let o=n.e;t.position.copy(o.pos),t.color.copy(o.color),t.distance=o.distance;let s=n.d<0?1:1-Ft.smoothstep(n.d,a*.72,a),c=o.pos.x*1.7+o.pos.z*.9,l=1+(Math.sin(r*7.3+c)*.5+Math.sin(r*13.1+c*2.3)*.3+Math.sin(r*2.1+c)*.2)*o.flicker,u=1;o.tag===`window`?u=this.windowScale:o.tag===`lantern`&&(u=this.lanternScale),t.intensity=o.intensity*o.on*s*l*u}}},Nm=class{points;max;pos;col;size;vel;life;maxLife;baseSize;baseAlpha;grav;drag;fade;shrink;wander;count=0;uScale={value:800};tmpColor=new H;constructor(e,t,n=!1){this.max=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.baseSize=new Float32Array(e),this.baseAlpha=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.fade=new Uint8Array(e),this.shrink=new Uint8Array(e),this.wander=new Float32Array(e);let r=new Lr;r.setAttribute(`position`,new Sr(this.pos,3).setUsage(Xe)),r.setAttribute(`aColor`,new Sr(this.col,4).setUsage(Xe)),r.setAttribute(`aSize`,new Sr(this.size,1).setUsage(Xe)),r.setDrawRange(0,0);let i=new qi({uniforms:{uScale:this.uScale},vertexShader:`
        attribute vec4 aColor; attribute float aSize; uniform float uScale; varying vec4 vColor;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.0, floor(aSize * uScale / -mv.z + 0.5));
          vColor = aColor;
        }`,fragmentShader:n?`
        varying vec4 vColor;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float r = max(abs(c.x), abs(c.y)) * 2.0;
          float d = length(c) * 2.0;
          float a = d < 0.42 ? 1.0 : (r < 0.95 && d < 1.0 ? 0.3 : 0.0);
          if (a <= 0.0) discard;
          gl_FragColor = vec4(vColor.rgb * a, vColor.a * a);
          #include <colorspace_fragment>
        }`:`
        varying vec4 vColor;
        void main() {
          gl_FragColor = vColor;
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,blending:t?2:1});this.points=new ki(r,i),this.points.frustumCulled=!1,this.points.renderOrder=t?30:25}emit(e){let t=this.count;t>=this.max?t=Math.floor(Math.random()*this.max):this.count++,this.pos[t*3]=e.x,this.pos[t*3+1]=e.y,this.pos[t*3+2]=e.z,this.vel[t*3]=e.vx??0,this.vel[t*3+1]=e.vy??0,this.vel[t*3+2]=e.vz??0,this.life[t]=e.life,this.maxLife[t]=e.life,this.baseSize[t]=e.size,this.baseAlpha[t]=e.alpha??1,this.grav[t]=e.gravity??0,this.drag[t]=e.drag??0,this.fade[t]=e.fade??0,this.shrink[t]=+!!e.shrink,this.wander[t]=e.wander??0,this.tmpColor.set(e.color),this.col[t*4]=this.tmpColor.r,this.col[t*4+1]=this.tmpColor.g,this.col[t*4+2]=this.tmpColor.b,this.col[t*4+3]=this.baseAlpha[t]}update(e,t){let n=this.count;for(let r=0;r<n;r++){if(this.life[r]-=e,this.life[r]<=0){n--,this.copy(n,r),r--;continue}let i=this.life[r]/this.maxLife[r],a=Math.exp(-this.drag[r]*e);if(this.vel[r*3]*=a,this.vel[r*3+1]=this.vel[r*3+1]*a-this.grav[r]*e,this.vel[r*3+2]*=a,this.wander[r]>0){let n=this.wander[r];this.vel[r*3]+=Math.sin(t*2.3+r*1.7)*n*e,this.vel[r*3+1]+=Math.sin(t*1.7+r*2.9)*n*.6*e,this.vel[r*3+2]+=Math.cos(t*2.1+r*1.1)*n*e}this.pos[r*3]+=this.vel[r*3]*e,this.pos[r*3+1]+=this.vel[r*3+1]*e,this.pos[r*3+2]+=this.vel[r*3+2]*e;let o=this.fade[r]===1?Math.sin(Math.PI*i):Math.min(1,i*1.6);this.col[r*4+3]=this.baseAlpha[r]*o,this.size[r]=this.baseSize[r]*(this.shrink[r]?.35+.65*i:1)}this.count=n;let r=this.points.geometry;r.setDrawRange(0,n),r.getAttribute(`position`).needsUpdate=!0,r.getAttribute(`aColor`).needsUpdate=!0,r.getAttribute(`aSize`).needsUpdate=!0}copy(e,t){if(e!==t){for(let n=0;n<3;n++)this.pos[t*3+n]=this.pos[e*3+n],this.vel[t*3+n]=this.vel[e*3+n];for(let n=0;n<4;n++)this.col[t*4+n]=this.col[e*4+n];this.size[t]=this.size[e],this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.baseSize[t]=this.baseSize[e],this.baseAlpha[t]=this.baseAlpha[e],this.grav[t]=this.grav[e],this.drag[t]=this.drag[e],this.fade[t]=this.fade[e],this.shrink[t]=this.shrink[e],this.wander[t]=this.wander[e]}}get active(){return this.count}clear(){this.count=0}};function Pm(e){let t=e.buildGeometry(),n=Qf(vf()),r=new ui(e.typeMapData(),e.W,e.D,O,p);r.magFilter=s,r.minFilter=s,r.generateMipmaps=!1,r.colorSpace=``,r.needsUpdate=!0;let i=new Yi({vertexColors:!0});tp(i,{cacheKey:`terrain-top`,uniforms:{tGround:{value:n},tType:{value:r},uGrid:{value:new en(e.x0,e.z0,e.W,e.D)}},vertexPars:`varying vec3 vWorldT;`,vertexEnd:`vWorldT = (modelMatrix * vec4(transformed, 1.0)).xyz;`,fragmentPars:`uniform sampler2DArray tGround; uniform sampler2D tType; uniform vec4 uGrid; varying vec3 vWorldT;`,map:`
      vec2 wp = vWorldT.xz;
      vec2 tq = (floor(wp * 16.0) + 0.5) / 16.0;
      vec2 jit = vec2(vnoise(tq * 2.1), vnoise(tq * 2.1 + 17.3)) - 0.5;
      vec2 jit2 = vec2(vnoise(tq * 6.0 + 3.1), vnoise(tq * 6.0 + 9.7)) - 0.5;
      vec2 cellUv = (tq + jit * 0.7 + jit2 * 0.25 - uGrid.xy) / uGrid.zw;
      float layer = floor(texture2D(tType, cellUv).r * 255.0 + 0.5);
      vec2 guv = vec2(wp.x, -wp.y) / 4.0;
      vec4 g = texPixelArr(tGround, guv, layer, vec2(64.0));
      diffuseColor.rgb *= g.rgb;`});let a=new si(t.top,i);a.receiveShadow=!0;let o=Qf([Af(),jf(),Mf(),Nf(),Hf(203,void 0)]),c=new Yi({vertexColors:!0});tp(c,{cacheKey:`terrain-side`,uniforms:{tSide:{value:o}},vertexPars:`attribute float aLayer; flat varying float vLayer; varying vec2 vUvS;`,vertexBegin:`vLayer = aLayer; vUvS = uv;`,fragmentPars:`uniform sampler2DArray tSide; flat varying float vLayer; varying vec2 vUvS;`,map:`
      vec4 g = texPixelArr(tSide, vUvS, vLayer, vec2(64.0));
      diffuseColor.rgb *= g.rgb;`});let l=new si(t.sides,c);l.receiveShadow=!0,l.castShadow=!0;let u=np({map:Zf(Vf(),{repeat:!0}),alphaTest:.5,key:`lip`}),d=new si(t.lip,u);return d.receiveShadow=!0,a.name=`terrain-top`,l.name=`terrain-sides`,d.name=`terrain-lip`,{top:a,sides:l,lip:d,typeTex:r}}function Fm(e){return{sunColor:new H(e.sun),sunIntensity:e.sunI,sunDir:new B(...e.dir).normalize(),hemiSky:new H(e.sky),hemiGround:new H(e.ground),hemiIntensity:e.hemiI,fogColor:new H(e.fog),fogNear:e.near,fogFar:e.far,rimColor:new H(e.rim),rimStrength:e.rimS,mist:e.mist,mistColor:new H(e.mistC),skyTop:new H(e.skyTop),skyHorizon:new H(e.skyHor),sunGlow:new H(e.glow),stars:e.stars,tint:new H(e.tint),saturation:e.sat,vignette:e.vig,bloom:e.bloom,exposure:e.exp,windowScale:e.win,fireflies:e.ff,embers:e.emb}}var Im=[{x:-40,a:Fm({sun:16757880,sunI:2.5,dir:[-.6,.6,.52],sky:9342152,ground:6178872,hemiI:1.55,fog:9202818,near:32,far:100,rim:16757370,rimS:.6,mist:.1,mistC:13150392,skyTop:3025498,skyHor:15768170,glow:16760960,stars:.05,tint:16773862,sat:1.05,vig:.3,bloom:.36,exp:1.06,win:1,ff:0,emb:1})},{x:-10,a:Fm({sun:16754800,sunI:2.2,dir:[-.64,.56,.5],sky:8552636,ground:5521460,hemiI:1.45,fog:8414338,near:30,far:95,rim:16754808,rimS:.58,mist:.18,mistC:12099768,skyTop:2762840,skyHor:14715502,glow:16756864,stars:.1,tint:16773352,sat:1.04,vig:.32,bloom:.36,exp:1.06,win:1,ff:.1,emb:.8})},{x:8,a:Fm({sun:15904922,sunI:1.85,dir:[-.7,.5,.5],sky:7640248,ground:3951168,hemiI:1.9,fog:6191764,near:24,far:78,rim:10934015,rimS:.55,mist:.55,mistC:11060436,skyTop:1976910,skyHor:9075352,glow:13671056,stars:.3,tint:15660287,sat:1.04,vig:.32,bloom:.42,exp:1.12,win:1,ff:.8,emb:0})},{x:30,a:Fm({sun:12109036,sunI:1.65,dir:[-.62,.52,.58],sky:6850734,ground:3425354,hemiI:1.85,fog:5008006,near:20,far:68,rim:10014975,rimS:.6,mist:.9,mistC:10271952,skyTop:1318464,skyHor:5134976,glow:10133696,stars:.6,tint:15266047,sat:1.02,vig:.34,bloom:.46,exp:1.14,win:1,ff:1,emb:0})},{x:52,a:Fm({sun:11847412,sunI:1.6,dir:[.42,.7,.58],sky:4871288,ground:2762800,hemiI:1.25,fog:4082288,near:22,far:72,rim:11586815,rimS:.62,mist:.45,mistC:9084100,skyTop:922672,skyHor:3029604,glow:8425664,stars:.9,tint:15265023,sat:1,vig:.36,bloom:.46,exp:1.12,win:1,ff:.2,emb:0})},{x:72,a:Fm({sun:11058416,sunI:1.55,dir:[.38,.72,.6],sky:4476532,ground:2499632,hemiI:1.2,fog:3555174,near:22,far:70,rim:11060479,rimS:.64,mist:.55,mistC:8162492,skyTop:659496,skyHor:2502746,glow:7372984,stars:1,tint:15133439,sat:1,vig:.38,bloom:.5,exp:1.12,win:1,ff:0,emb:0})}],Lm=Fm({sun:16763024,sunI:2.3,dir:[-.2,.62,.76],sky:11573944,ground:8016440,hemiI:1.6,fog:11042440,near:32,far:104,rim:16766106,rimS:.75,mist:.15,mistC:15777952,skyTop:3812966,skyHor:16756864,glow:16767136,stars:.5,tint:16773344,sat:1.1,vig:.28,bloom:.6,exp:1.1,win:1.6,ff:1,emb:1});function Rm(e,t,n,r){e.sunColor.copy(t.sunColor).lerp(n.sunColor,r),e.sunIntensity=t.sunIntensity+(n.sunIntensity-t.sunIntensity)*r,e.sunDir.copy(t.sunDir).lerp(n.sunDir,r).normalize(),e.hemiSky.copy(t.hemiSky).lerp(n.hemiSky,r),e.hemiGround.copy(t.hemiGround).lerp(n.hemiGround,r),e.hemiIntensity=t.hemiIntensity+(n.hemiIntensity-t.hemiIntensity)*r,e.fogColor.copy(t.fogColor).lerp(n.fogColor,r),e.fogNear=t.fogNear+(n.fogNear-t.fogNear)*r,e.fogFar=t.fogFar+(n.fogFar-t.fogFar)*r,e.rimColor.copy(t.rimColor).lerp(n.rimColor,r),e.rimStrength=t.rimStrength+(n.rimStrength-t.rimStrength)*r,e.mist=t.mist+(n.mist-t.mist)*r,e.mistColor.copy(t.mistColor).lerp(n.mistColor,r),e.skyTop.copy(t.skyTop).lerp(n.skyTop,r),e.skyHorizon.copy(t.skyHorizon).lerp(n.skyHorizon,r),e.sunGlow.copy(t.sunGlow).lerp(n.sunGlow,r),e.stars=t.stars+(n.stars-t.stars)*r,e.tint.copy(t.tint).lerp(n.tint,r),e.saturation=t.saturation+(n.saturation-t.saturation)*r,e.vignette=t.vignette+(n.vignette-t.vignette)*r,e.bloom=t.bloom+(n.bloom-t.bloom)*r,e.exposure=t.exposure+(n.exposure-t.exposure)*r,e.windowScale=t.windowScale+(n.windowScale-t.windowScale)*r,e.fireflies=t.fireflies+(n.fireflies-t.fireflies)*r,e.embers=t.embers+(n.embers-t.embers)*r}function zm(e){let t={...e};for(let n of Object.keys(e)){let r=e[n];(r instanceof H||r instanceof B)&&(t[n]=r.clone())}return t}var Bm=zm(Im[0].a),Vm=zm(Im[0].a);function Hm(e,t,n=0){let r=0;for(;r<Im.length-1&&e>Im[r+1].x;)r++;let i=Im[r],a=Im[Math.min(Im.length-1,r+1)],o=i===a?0:Ft.smoothstep(e,i.x,a.x);return Rm(Bm,i.a,a.a,o),n>0&&(Bm.sunIntensity*=1-n*.35,Bm.fogNear*=1-n*.3,Bm.fogFar*=1-n*.2,Bm.mist+=n*.5,Bm.vignette+=n*.1),Rm(Vm,Bm,Lm,t),Vm}function Um(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Lr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Wm(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Wm(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Wm(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Sr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Z(e,t,n,r=4){let i=new Fi(e,t,n),a=i.getAttribute(`position`),o=i.getAttribute(`normal`),s=i.getAttribute(`uv`);for(let i=0;i<a.count;i++){let c=a.getX(i)+e/2,l=a.getY(i)+t/2,u=a.getZ(i)+n/2,d=o.getX(i),f=o.getY(i),p,m;Math.abs(d)>.5?(p=d>0?n-u:u,m=l):Math.abs(f)>.5?(p=c,m=f>0?n-u:u):(p=o.getZ(i)>0?c:e-c,m=l),s.setXY(i,p/r,m/r)}return i}function Gm(e,t,n,r=8,i=4,a=!1){let o=new Ii(e,t,n,r,1,a),s=o.getAttribute(`uv`),c=2*Math.PI*Math.max(e,t);for(let e=0;e<s.count;e++)s.setXY(e,s.getX(e)*c/i,s.getY(e)*n/i);return o}function Km(e,t){return new Li(e,t)}function qm(e,t,n,r,i=4){let a=e/2+r,o=t/2+r,s=[],c=[],l=[],u=Math.hypot(o,n);for(let e of[1,-1]){let t=s.length/3;for(let t=0;t<=4;t++){let r=t/4;for(let t=0;t<=12;t++){let l=t/12,d=-a+l*a*2,f=(Math.abs(d)/a)**3*.45*(1-r),p=Math.sin(r*Math.PI)*-.12,m=e*o*(1-r),h=n*r+f+p-.05*(1-r);s.push(d,h,m),c.push((d+a)/i,r*u/i)}}for(let n=0;n<4;n++)for(let r=0;r<12;r++){let i=t+n*13+r,a=i+1,o=i+12+1,s=o+1;e>0?l.push(i,a,s,i,s,o):l.push(i,s,a,i,o,s)}}let d=new Lr;return d.setAttribute(`position`,new Tr(s,3)),d.setAttribute(`uv`,new Tr(c,2)),d.setIndex(l),d.computeVertexNormals(),d.toNonIndexed()}function Jm(e,t,n=4){let r=new Lr,i=[-e/2,0,0,e/2,0,0,0,t,0];return r.setAttribute(`position`,new Tr(i,3)),r.setAttribute(`uv`,new Tr([0,0,e/n,0,e/2/n,t/n],2)),r.computeVertexNormals(),r}var Ym=class{parts=new Map;castMap=new Map;add(e,t,n,r=!0){let i=t.index?t.toNonIndexed():t.clone();i.applyMatrix4(n);for(let e of Object.keys(i.attributes))[`position`,`normal`,`uv`].includes(e)||i.deleteAttribute(e);i.getAttribute(`normal`)||i.computeVertexNormals(),i.getAttribute(`uv`)||i.setAttribute(`uv`,new Tr(new Float32Array(i.getAttribute(`position`).count*2),2));let a=this.parts.get(e)??[];a.push(i),this.parts.set(e,a),r?this.castMap.set(e,!0):this.castMap.has(e)||this.castMap.set(e,!1)}build(e){let t=[];for(let[n,r]of this.parts){let i=Um(r,!1);if(!i)continue;i.computeBoundingSphere();let a=new si(i,n);a.castShadow=this.castMap.get(n)??!0,a.receiveShadow=!0,e.add(a),t.push(a)}return this.parts.clear(),t}},Xm=new on,Zm=new It,Qm=new gn,$m=new B,eh=new B;function Q(e,t,n,r=0,i=0,a=0,o=1,s=1,c=1){return Qm.set(i,r,a,`YXZ`),Zm.setFromEuler(Qm),eh.set(e,t,n),$m.set(o,s,c),Xm.clone().compose(eh,Zm,$m)}var th=class{plaster;beam;roof;planks;stone;stoneWarm;stoneWall;ruin;rune;window;lanternGlow;coldGlow;door;bark;barkPine;jar;cloth;constructor(){let e={repeat:!0};this.plaster=np({map:Zf(Pf(),e),key:`plaster`}),this.beam=np({map:Zf(If(),e),key:`beam`}),this.roof=np({map:Zf(Lf(),e),key:`roof`,side:2}),this.planks=np({map:Zf(Ff(),e),key:`planks`}),this.stone=np({map:Zf(Hf(201,G.stone),e),key:`stone`}),this.stoneWarm=np({map:Zf(Hf(207,G.stoneWarm),e),key:`stonewarm`}),this.stoneWall=np({map:Zf(jf(),e),key:`stonewall`}),this.ruin=np({map:Zf(Mf(),e),key:`ruin`});let t=Uf();this.rune=np({map:Zf(t.color,e),emissiveMap:Zf(t.glow,{...e,srgb:!1}),emissive:new H(.25,.6,1),emissiveIntensity:.25,key:`rune`});let n=Zf(zf(),e);this.window=np({map:n,emissiveMap:n,emissive:new H(1,.72,.42),emissiveIntensity:1.25,key:`window`}),this.lanternGlow=np({map:n,emissiveMap:n,emissive:new H(1,.62,.3),emissiveIntensity:1.6,key:`lglow`}),this.coldGlow=new Yi({color:1718864,emissive:new H(.3,.75,1),emissiveIntensity:0}),this.door=np({map:Zf(Bf(),e),emissiveMap:Zf(Bf(),e),emissive:new H(.45,.28,.12),emissiveIntensity:.6,key:`door`}),this.bark=np({map:Zf(Rf(),e),key:`bark`}),this.barkPine=np({map:Zf(Rf(187,G.wood),e),key:`barkpine`}),this.jar=new Yi({color:4860962}),this.cloth=new Yi({color:13154464})}},nh=class{batch=new Ym;emitters=[];canopy=[];upright=[];smokeSources=[];canopies=[];kit;t;lanternChambers=[];constructor(e,t){this.kit=e,this.t=t}add(e,t,n,r=!0){this.batch.add(e,t,n,r)}emitter(e,t,n,r,i,a,o=.1,s=``,c=1){let l={pos:new B(e,t,n),color:new H(r),intensity:i,distance:a,flicker:o,on:c,target:c,tag:s};return this.emitters.push(l),l}house(e,t,n,r,i={}){let a=this.kit,o=this.t.groundAt(e,t),s=i.h??2.1;this.add(a.stoneWarm,Z(n+.7,.45,r+.7),Q(e,o+.225,t));let c=o+.45;this.add(a.plaster,Z(n-.04,s,r-.04),Q(e,c+s/2,t));let l=[-n/2,-n/6,n/6,n/2];for(let i of l)this.add(a.beam,Z(.24,s+.1,.24,2),Q(e+i,c+(s+.1)/2,t+r/2)),(i===-n/2||i===n/2)&&this.add(a.beam,Z(.24,s+.1,.24,2),Q(e+i,c+(s+.1)/2,t-r/2));this.add(a.beam,Z(n+.3,.22,.2,2),Q(e,c+s-.05,t+r/2+.02)),this.add(a.beam,Z(n+.3,.22,.2,2),Q(e,c+s-.05,t-r/2-.02)),this.add(a.beam,Z(.2,.22,r+.3,2),Q(e-n/2-.02,c+s-.05,t)),this.add(a.beam,Z(.2,.22,r+.3,2),Q(e+n/2+.02,c+s-.05,t)),this.add(a.beam,Z(n,.12,.16,2),Q(e,c+.62,t+r/2+.03));let u=i.windows??2;[-n/3,0,n/3].forEach((n,i)=>{i===1?this.add(a.door,Km(.86,1.3),Q(e+n,c+.66,t+r/2+.03),!1):u>0&&(this.add(a.window,Km(.9,.9),Q(e+n,c+1.28,t+r/2+.03),!1),this.emitter(e+n,c+1.25,t+r/2+.9,16752720,5.5,5.5,.08,`window`))}),this.add(a.window,Km(.7,.7),Q(e+n/2+.03,c+1.3,t,Math.PI/2),!1);let d=1.25,f=c+s+.08;this.add(a.roof,qm(n,r,d,.8),Q(e,f,t)),this.add(a.roof,Z(n+1.9,.26,.34),Q(e,f+d+.08,t)),this.add(a.plaster,Jm(r-.1,d*.92),Q(e-n/2+.02,f,t,-Math.PI/2)),this.add(a.plaster,Jm(r-.1,d*.92),Q(e+n/2-.02,f,t,Math.PI/2)),this.add(a.planks,Z(n-.4,.14,.7,4),Q(e,c-.05,t+r/2+.38)),i.chimney&&(this.add(a.stoneWarm,Z(.4,1,.4),Q(e+n/2+.55,o+.5,t-r/2+.3)),this.smokeSources.push(new B(e+n/2+.55,o+1.1,t-r/2+.3))),this.t.addBox(e-n/2-.4,t-r/2-.4,e+n/2+.4,t+r/2+.75)}stoneLantern(e,t,n={}){let r=this.kit,i=n.scale??1,a=this.t.groundAt(e,t),o=n.cold?r.stone:r.stoneWarm;this.add(o,Gm(.44*i,.48*i,.2*i,8),Q(e,a+.1*i,t)),this.add(o,Gm(.26*i,.36*i,.22*i,8),Q(e,a+.31*i,t)),this.add(o,Gm(.13*i,.15*i,.8*i,8),Q(e,a+.82*i,t)),this.add(o,Gm(.34*i,.24*i,.16*i,8),Q(e,a+1.3*i,t));let s=a+1.62*i;for(let[n,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.add(o,Z(.1*i,.46*i,.1*i,2),Q(e+n*.2*i,s,t+r*.2*i));let c=n.lit??!0,l=c?null:new Yi({color:n.cold?1714746:2760740,emissive:new H(n.cold?4897023:16752720),emissiveIntensity:0}),u=l??(n.cold?r.coldGlow:r.lanternGlow),d=Z(.34*i,.4*i,.34*i,1);this.add(u,d,Q(e,s,t),!1),this.add(o,Gm(.05*i,.52*i,.26*i,8),Q(e,a+1.98*i,t)),this.add(o,Gm(.08*i,.12*i,.18*i,6),Q(e,a+2.18*i,t)),this.t.addCircle(e,t,.42*i);let f=this.emitter(e,s+.1,t+.35,n.cold?6342911:16752712,7*i,6.5*i,.14,n.tag??`lantern`,+!!c);return this.lanternChambers.push({pos:new B(e,s,t),emitter:f,mat:l??void 0}),f}stoneWallSeg(e,t,n,r,i=.95){let a=this.kit,o=(e+n)/2,s=(t+r)/2,c=Math.hypot(n-e,r-t),l=Math.atan2(-(r-t),n-e),u=this.t.groundAt(o,s);this.add(a.stoneWall,Z(c,i,.5),Q(o,u+i/2,s,l)),this.add(a.roof,Z(c+.2,.16,.7),Q(o,u+i+.08,s,l)),this.t.addBox(Math.min(e,n)-.25,Math.min(t,r)-.25,Math.max(e,n)+.25,Math.max(t,r)+.25)}fence(e,t,n,r){let i=this.kit,a=Math.hypot(n-e,r-t),o=Math.max(1,Math.round(a/1.1)),s=Math.atan2(-(r-t),n-e);for(let a=0;a<=o;a++){let s=a/o,c=e+(n-e)*s,l=t+(r-t)*s,u=this.t.groundAt(c,l);this.add(i.beam,Z(.13,.85,.13,2),Q(c,u+.42,l))}let c=(e+n)/2,l=(t+r)/2,u=this.t.groundAt(c,l);this.add(i.planks,Z(a,.09,.06,4),Q(c,u+.62,l,s)),this.add(i.planks,Z(a,.09,.06,4),Q(c,u+.32,l,s)),this.t.addBox(Math.min(e,n)-.12,Math.min(t,r)-.12,Math.max(e,n)+.12,Math.max(t,r)+.12)}well(e,t){let n=this.kit,r=this.t.groundAt(e,t);this.add(n.stoneWarm,Gm(.62,.66,.72,10),Q(e,r+.36,t)),this.add(n.beam,Gm(.5,.5,.05,10),Q(e,r+.7,t),!1);for(let i of[-1,1])this.add(n.beam,Z(.13,1.6,.13,2),Q(e+i*.72,r+.8,t));this.add(n.beam,Z(1.6,.12,.12,2),Q(e,r+1.55,t)),this.add(n.roof,qm(1.3,.7,.35,.2),Q(e,r+1.62,t)),this.add(n.planks,Gm(.14,.12,.22,6,2),Q(e+.2,r+1.15,t)),this.t.addCircle(e,t,.72)}jars(e,t,n=5,r=1){let i=this.kit,a=this.t.groundAt(e,t);this.add(i.stoneWarm,Z(1.8,.3,1.1),Q(e,a+.15,t));let o=r;for(let r=0;r<n;r++){o=(o*9301+49297)%233280;let n=o/233280,s=e-.65+r%3*.62+(r>=3?.3:0),c=t+(r>=3?.28:-.22),l=.45+n*.25;this.add(i.jar,Gm(.2,.18,l,8),Q(s,a+.3+l/2,c)),this.add(i.jar,Gm(.13,.24,.14,8),Q(s,a+.3+l+.05,c)),this.add(i.jar,Gm(.14,.14,.05,8),Q(s,a+.3+l+.14,c))}this.t.addBox(e-.95,t-.6,e+.95,t+.6)}crate(e,t,n=.7,r=0){let i=this.t.groundAt(e,t);this.add(this.kit.planks,Z(n,n,n,4),Q(e,i+n/2,t,r)),this.t.addBox(e-n*.6,t-n*.6,e+n*.6,t+n*.6)}rock(e,t,n=.6,r=0,i=!1){let a=this.t.groundAt(e,t),o=i?this.kit.stone:this.kit.stoneWarm;this.add(o,Z(n*1.2,n*.7,n,4),Q(e,a+n*.3,t,r,.12,.08)),this.add(o,Z(n*.7,n*.5,n*.6,4),Q(e+n*.35,a+n*.62,t-n*.1,r+.6,-.1,.15)),n>.45&&this.t.addCircle(e,t,n*.6)}laundry(e,t,n,r){let i=this.kit;for(let a of[e,t]){let e=this.t.groundAt(a,n);this.add(i.beam,Z(.1,r-e+.1,.1,2),Q(a,(r+e)/2,n)),this.t.addCircle(a,n,.15)}for(let a=0;a<4;a++){let o=e+(a+.6)/4.2*(t-e);this.add(i.cloth,Km(.45,.6),Q(o,r-.33,n,0),!1)}this.add(i.beam,Z(Math.abs(t-e),.03,.03,2),Q((e+t)/2,r,n),!1)}tree(e,t,n,r=1,i=1){let a=this.kit,o=this.t.groundAt(e,t),s=i*7919,c=()=>(s=s*16807%2147483647,s/2147483647);if(n===`pine`){let n=2.2;this.add(a.barkPine,Gm(.14,.24,n,7,2),Q(e,o+n/2,t)),this.canopies.push({kind:`pine`,variant:i%3,x:e,y:o+.95,z:t,sway:.05}),this.t.addCircle(e,t,.32);return}if(n===`dead`){let n=3.2*r;this.add(a.bark,Gm(.1*r,.22*r,n,6,2),Q(e,o+n/2,t,0,0,.08)),this.add(a.bark,Gm(.05,.09,1.4*r,5,2),Q(e+.45*r,o+n*.72,t,0,0,-.8)),this.add(a.bark,Gm(.05,.08,1.1*r,5,2),Q(e-.35*r,o+n*.6,t,0,0,.9));for(let r=0;r<4;r++)this.canopy.push({x:e+(c()-.5)*1.6,y:o+n+(c()-.3)*.8,z:t+(c()-.5)*.8,cell:Hd.dead,size:2,tint:[.9,.9,.95],sway:.05});this.t.addCircle(e,t,.28*r);return}let l=n===`zelkova`?3:2.4;this.add(a.bark,Gm(.2,.36,l,8,2),Q(e,o+l/2,t)),this.add(a.bark,Gm(.08,.14,1.4,6,2),Q(e+.5,o+l*.82,t,0,0,-.75)),this.add(a.bark,Gm(.08,.13,1.3,6,2),Q(e-.45,o+l*.78,t+.1,0,.2,.8)),this.canopies.push({kind:n===`zelkova`?`zelkova`:`maple`,variant:i%3,x:e,y:o+l*.62,z:t+.05,sway:.07}),this.t.addCircle(e,t,.4)}grass(e,t,n,r=1){let i=this.t.groundAt(e,t);this.upright.push({x:e,y:i-.05,z:t,cell:n,size:2,tint:[r,r,r],normal:[0,1,.5],sway:.14})}bush(e,t,n=Hd.bushA,r=1){let i=this.t.groundAt(e,t);this.upright.push({x:e,y:i-.1,z:t,cell:n,size:2,tint:[r,r,r],normal:[0,1,.7],sway:.05})}bridge(e,t,n,r,i,a,o){let s=this.kit,c=t-e,l=t=>i+Math.sin((t-e)/c*Math.PI)*a,u=Math.round(c/.34);for(let t=0;t<u;t++){let i=e+(t+.5)*(c/u),a=l(i),o=Math.atan2(l(i+.05)-l(i-.05),.1);this.add(s.planks,Z(c/u-.03,.1,r,4),Q(i,a-.05,n+t*37%5*.004,0,0,o))}for(let t of[-1,1])for(let i=0;i<6;i++){let a=e+i/6*c,o=e+(i+1)/6*c,u=l(a)-.16,d=l(o)-.16,f=Math.atan2(d-u,o-a);this.add(s.beam,Z(Math.hypot(o-a,d-u)+.02,.16,.16,2),Q((a+o)/2,(u+d)/2,n+t*(r/2-.1),0,0,f))}let d=[e+.1,e+c*.33,e+c*.66,t-.1];for(let e of d){let t=l(e);for(let i of[-1,1]){let a=n+i*(r/2-.05);this.add(s.beam,Z(.18,t-o+1,.18,2),Q(e,(t+.9+o-.1)/2,a))}}for(let i of[-1,1]){let a=n+i*(r/2-.05);for(let t=0;t<8;t++){let n=e+t/8*c,r=e+(t+1)/8*c,i=l(n)+.78,o=l(r)+.78,u=Math.atan2(o-i,r-n);this.add(s.planks,Z(Math.hypot(r-n,o-i)+.02,.1,.1,4),Q((n+r)/2,(i+o)/2,a,0,0,u))}this.t.addBox(e-.2,a-.08,t+.2,a+.08,-5,10)}this.t.surfaces.push({x0:e-.3,z0:n-r/2,x1:t+.3,z1:n+r/2,height:n=>l(Math.max(e,Math.min(t,n)))})}pillar(e,t,n,r={}){let i=this.kit,a=this.t.groundAt(e,t),o=r.r??.42;this.add(i.ruin,Z(o*2.6,.36,o*2.6),Q(e,a+.18,t));let s=r.rune?i.rune:i.stone,c=r.tilt??0;this.add(s,Gm(o,o*1.05,n,10),Q(e,a+.36+n/2,t,0,0,c)),r.broken?this.add(i.stone,Gm(o*.8,o,.35,10),Q(e+.05,a+.36+n+.12,t,.4,.25,.2)):(this.add(i.ruin,Z(o*2.5,.3,o*2.5),Q(e,a+.36+n+.15,t)),this.add(i.ruin,Z(o*2.9,.22,o*2.9),Q(e,a+.36+n+.4,t))),this.t.addCircle(e,t,o+.08)}block(e,t,n,r,i,a=0,o){let s=this.t.groundAt(e,t);this.add(o??this.kit.ruin,Z(n,r,i),Q(e,s+r/2-.02,t,a)),r>.3&&this.t.addBox(e-n/2,t-i/2,e+n/2,t+i/2)}fallenPillar(e,t,n,r,i=.4){let a=this.t.groundAt(e,t);this.add(this.kit.stone,Gm(i,i,n,10),Q(e,a+i*.85,t,r,0,Math.PI/2));let o=Math.cos(r)*n*.5,s=-Math.sin(r)*n*.5;for(let n=0;n<=4;n++){let r=n/4-.5;this.t.addCircle(e+o*r*2,t+s*r*2,i+.05)}}build(e){return this.batch.build(e)}},$={grass:0,forest:1,dirt:2,paving:3,ruin:4,pebbles:5,litter:6},rh={cliff:0,stonewall:1,ruinwall:2,soil:3,carved:4},ih=class{x0;z0;W;D;hc;top;side;flags;stair;surfaces=[];colliders=[];dynamic=[];constructor(e,t,n,r){this.x0=e,this.z0=t,this.W=n,this.D=r,this.hc=new Float32Array(n*r*4),this.top=new Uint8Array(n*r),this.side=new Uint8Array(n*r),this.flags=new Uint8Array(n*r),this.stair=new Int8Array(n*r)}index(e,t){let n=Math.floor(e-this.x0),r=Math.floor(t-this.z0);return n<0||r<0||n>=this.W||r>=this.D?-1:r*this.W+n}forCells(e,t,n,r,i){let a=Math.max(0,Math.floor(e-this.x0)),o=Math.min(this.W-1,Math.ceil(n-this.x0)-1),s=Math.max(0,Math.floor(t-this.z0)),c=Math.min(this.D-1,Math.ceil(r-this.z0)-1);for(let e=s;e<=c;e++)for(let t=a;t<=o;t++)i(e*this.W+t,this.x0+t,this.z0+e)}fill(e,t,n,r,i,a,o){this.forCells(e,t,n,r,e=>{this.hc.fill(i,e*4,e*4+4),a!==void 0&&(this.top[e]=a),o!==void 0&&(this.side[e]=o),this.stair[e]=0,this.flags[e]&=-2})}ramp(e,t,n,r,i,a,o,s,c){let l=i===`x`?e:t,u=i===`x`?n:r,d=e=>a+(o-a)*(e-l)/(u-l);this.forCells(e,t,n,r,(e,t,n)=>{i===`x`?(this.hc[e*4]=d(t),this.hc[e*4+1]=d(t+1),this.hc[e*4+2]=d(t),this.hc[e*4+3]=d(t+1)):(this.hc[e*4]=d(n),this.hc[e*4+1]=d(n),this.hc[e*4+2]=d(n+1),this.hc[e*4+3]=d(n+1)),s!==void 0&&(this.top[e]=s),c!==void 0&&(this.side[e]=c),this.stair[e]=0})}stairs(e,t,n,r,i,a,o,s,c){this.ramp(e,t,n,r,i,a,o,c,s);let l=o>a?1:-1;this.forCells(e,t,n,r,e=>{this.stair[e]=(i===`x`?1:2)*l})}water(e,t,n,r,i){this.forCells(e,t,n,r,e=>{this.hc.fill(i,e*4,e*4+4),this.flags[e]|=1,this.top[e]=$.pebbles,this.side[e]=rh.soil,this.stair[e]=0})}block(e,t,n,r){this.forCells(e,t,n,r,e=>{this.flags[e]|=2})}paintTop(e,t,n,r,i){this.forCells(e,t,n,r,e=>{this.top[e]=i})}paintSide(e,t,n,r,i){this.forCells(e,t,n,r,e=>{this.side[e]=i})}paintPath(e,t,n,r){for(let i=0;i<this.D;i++)for(let a=0;a<this.W;a++){let o=this.x0+a+.5,s=this.z0+i+.5,c=1e9;for(let t=0;t+1<e.length;t++)c=Math.min(c,oh(o,s,e[t],e[t+1]));let l=i*this.W+a;c<t/2&&(r===void 0||this.top[l]===r)&&(this.top[l]=n)}}paintCircle(e,t,n,r){this.forCells(e-n,t-n,e+n,t+n,(i,a,o)=>{Math.hypot(a+.5-e,o+.5-t)<n&&(this.top[i]=r)})}undulate(e,t,n,r,i,a,o){this.forCells(e,t,n,r,(e,t,n)=>{this.stair[e]!==0||this.flags[e]&1||[[t,n],[t+1,n],[t,n+1],[t+1,n+1]].forEach(([t,n],r)=>{this.hc[e*4+r]+=(o(t*a,n*a)-.5)*2*i})})}surfaceAt(e,t){for(let n of this.surfaces)if(e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1)return n;return null}groundAt(e,t){let n=this.index(e,t);if(n<0)return-8;let r=e-Math.floor(e),i=t-Math.floor(t),a=this.hc,o=this.stair[n];if(o!==0){let e=Math.sign(o),t=Math.abs(o)===1,s=t?r:i,c=e>0?s:1-s,l=(Math.min(1,Math.floor(c*2))+1)/2,u=t?e>0?a[n*4]:a[n*4+1]:e>0?a[n*4]:a[n*4+2];return u+((t?e>0?a[n*4+1]:a[n*4]:e>0?a[n*4+2]:a[n*4])-u)*l}let s=a[n*4]+(a[n*4+1]-a[n*4])*r;return s+(a[n*4+2]+(a[n*4+3]-a[n*4+2])*r-s)*i}heightAt(e,t){let n=this.surfaceAt(e,t);return n?n.height(e,t):this.groundAt(e,t)}walkable(e,t){if(this.surfaceAt(e,t))return!0;let n=this.index(e,t);return n<0?!1:!(this.flags[n]&3)}isWater(e,t){let n=this.index(e,t);return n>=0&&!!(this.flags[n]&1)&&!this.surfaceAt(e,t)}canStand(e,t,n,r,i){let a=[[e,t],[e+r,t],[e-r,t],[e,t+r],[e,t-r],[e+r*.7,t+r*.7],[e-r*.7,t+r*.7],[e+r*.7,t-r*.7],[e-r*.7,t-r*.7]];for(let[o,s]of a)if(!this.walkable(o,s)||Math.abs(this.heightAt(o,s)-n)>i+(o===e&&s===t?0:r*.9))return!1;return!0}move(e,t,n,r,i){let a=!1,o=e.y,s=Math.max(1,Math.ceil(Math.hypot(t,n)/.2)),c=t/s,l=n/s,u=o;for(let t=0;t<s;t++)this.canStand(e.x+c,e.z,u,r,i)?e.x+=c:a=!0,this.canStand(e.x,e.z+l,u,r,i)?e.z+=l:a=!0,this.pushOut(e,r,u)&&(a=!0),u=this.heightAt(e.x,e.z);return e.y=this.heightAt(e.x,e.z),a}pushOut(e,t,n){let r=!1,i=this.dynamic.length?this.colliders.concat(this.dynamic):this.colliders;for(let a of i)if(!(n+1.6<a.y0||n>a.y1)){if(a.kind===`circle`){let n=e.x-a.x,i=e.z-a.z,o=Math.hypot(n,i),s=a.r+t;if(o<s&&o>1e-5){let t=e.x+n/o*(s-o),a=e.z+i/o*(s-o);this.walkable(t,a)&&(e.x=t,e.z=a),r=!0}}else{let n=Math.max(a.x0,Math.min(e.x,a.x1)),i=Math.max(a.z0,Math.min(e.z,a.z1)),o=e.x-n,s=e.z-i,c=Math.hypot(o,s);if(c<t){if(c>1e-5)e.x=n+o/c*t,e.z=i+s/c*t;else{let n=e.x-a.x0,r=a.x1-e.x,i=e.z-a.z0,o=a.z1-e.z,s=Math.min(n,r,i,o);s===n?e.x=a.x0-t:s===r?e.x=a.x1+t:e.z=s===i?a.z0-t:a.z1+t}r=!0}}}return r}addCircle(e,t,n,r=-10,i=10){this.colliders.push({kind:`circle`,x:e,z:t,r:n,y0:r,y1:i})}addBox(e,t,n,r,i=-10,a=10){this.colliders.push({kind:`box`,x0:Math.min(e,n),z0:Math.min(t,r),x1:Math.max(e,n),z1:Math.max(t,r),y0:i,y1:a})}buildGeometry(){let e=new sh(!1),t=new sh(!0),n=new sh(!1),{W:r,D:i,hc:a}=this,o=(e,t)=>a[e*4+t],s=e=>Math.max(a[e*4],a[e*4+1],a[e*4+2],a[e*4+3]),c=(e,t,n)=>{let r=0;for(let[i,a]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let o=this.index(e+i+.5,t+a+.5);o<0||s(o)>n+.35&&r++}return 1-.2*Math.min(2,r)};for(let a=0;a<i;a++)for(let s=0;s<r;s++){let l=a*r+s,u=this.x0+s,d=this.z0+a,f=u+1,p=d+1,m=o(l,0),h=o(l,1),g=o(l,2),_=o(l,3),v=this.stair[l],y=this.side[l];if(v===0)e.quad([u,m,d],[f,h,d],[f,_,p],[u,g,p],[c(u,d,m),c(f,d,h),c(f,p,_),c(u,p,g)],0,`top`,[0,1,0]);else{let n=Math.abs(v)===1,r=Math.sign(v);for(let i=0;i<2;i++){let a=i/2,o=(i+1)/2;if(n){let n=r>0?u:f,i=r>0?m:h,s=r>0?h:m,c=n+r*a,l=n+r*o,g=i+(s-i)*a,_=i+(s-i)*o,v=Math.min(c,l),y=Math.max(c,l);e.quad([v,_,d],[y,_,d],[y,_,p],[v,_,p],[1,1,1,1],0,`top`,[0,1,0]),t.quad([c,_,p],[c,_,d],[c,g,d],[c,g,p],[1,1,.8,.8],rh.carved,`z`,[-r,0,0])}else{let n=r>0?d:p,i=r>0?m:g,s=r>0?g:m,c=n+r*a,l=n+r*o,h=i+(s-i)*a,_=i+(s-i)*o,v=Math.min(c,l),y=Math.max(c,l);e.quad([u,_,v],[f,_,v],[f,_,y],[u,_,y],[1,1,1,1],0,`top`,[0,1,0]),t.quad([u,_,c],[f,_,c],[f,h,c],[u,h,c],[1,1,.8,.8],rh.carved,`x`,[0,0,-r])}}}let b=[],x=(e,t)=>e<0||t<0||e>=r||t>=i?-1:t*r+e;{let e=x(s,a+1);b.push({ni:e,nk:0,a:[u,g,p],b:[f,_,p],nA:e<0?-6:o(e,0),nB:e<0?-6:o(e,1),axis:`x`})}{let e=x(s,a-1);b.push({ni:e,nk:1,a:[f,h,d],b:[u,m,d],nA:e<0?-6:o(e,3),nB:e<0?-6:o(e,2),axis:`x`})}{let e=x(s+1,a);b.push({ni:e,nk:2,a:[f,_,p],b:[f,h,d],nA:e<0?-6:o(e,2),nB:e<0?-6:o(e,0),axis:`z`})}{let e=x(s-1,a);b.push({ni:e,nk:3,a:[u,m,d],b:[u,g,p],nA:e<0?-6:o(e,1),nB:e<0?-6:o(e,3),axis:`z`})}for(let e of b){let r=e.a[1],i=e.b[1];if(r<=e.nA+.001&&i<=e.nB+.001)continue;let a=Math.min(e.nA,r),o=Math.min(e.nB,i),s=[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0]][e.nk];if(v!==0&&(Math.abs(v)===1&&e.axis===`x`||Math.abs(v)===2&&e.axis===`z`)){for(let n=0;n<2;n++){let c=n/2,l=(n+1)/2,u=[ah(e.a[0],e.b[0],c),0,ah(e.a[2],e.b[2],c)],d=[ah(e.a[0],e.b[0],l),0,ah(e.a[2],e.b[2],l)],f=Math.max(ah(r,i,c),ah(r,i,l)),p=Math.min(f,ah(a,o,c)),m=Math.min(f,ah(a,o,l));t.quad([u[0],f,u[2]],[d[0],f,d[2]],[d[0],m,d[2]],[u[0],p,u[2]],[1,1,.72,.72],rh.carved,e.axis,s)}continue}t.quad([e.a[0],r,e.a[2]],[e.b[0],i,e.b[2]],[e.b[0],o,e.b[2]],[e.a[0],a,e.a[2]],[1,1,.72,.72],y,e.axis,s);let c=this.top[l];if((c===$.grass||c===$.forest)&&e.nk!==1&&Math.min(r-a,i-o)>.3){let t=e.nk===0?[0,0,.03]:e.nk===2?[.03,0,0]:[-.03,0,0],a=.9;n.quadUV([e.a[0]+t[0],r+.02,e.a[2]+t[2]],[e.b[0]+t[0],i+.02,e.b[2]+t[2]],[e.b[0]+t[0],i-a,e.b[2]+t[2]],[e.a[0]+t[0],r-a,e.a[2]+t[2]],e.axis,a,s)}}}return{top:e.build(),sides:t.build(),lip:n.build()}}typeMapData(){let e=new Uint8Array(this.W*this.D*4);for(let t=0;t<this.W*this.D;t++)e[t*4]=this.top[t],e[t*4+3]=255;return e}};function ah(e,t,n){return e+(t-e)*n}function oh(e,t,n,r){let i=r[0]-n[0],a=r[1]-n[1],o=i*i+a*a,s=o>0?((e-n[0])*i+(t-n[1])*a)/o:0;return s=Math.max(0,Math.min(1,s)),Math.hypot(e-(n[0]+i*s),t-(n[1]+a*s))}var sh=class{pos=[];nrm=[];uv=[];col=[];layer=[];withLayer;constructor(e){this.withLayer=e}quad(e,t,n,r,i,a,o,s){let c=ch(e,t,n),l=[e,t,n,r];c[0]*s[0]+c[1]*s[1]+c[2]*s[2]<0&&(l=[e,r,n,t],i=[i[0],i[3],i[2],i[1]],c=[-c[0],-c[1],-c[2]]);let u=l.map(e=>o===`top`?[e[0]/4,-e[2]/4]:o===`x`?[e[0]/4,e[1]/4]:[e[2]/4,e[1]/4]);o===`x`&&c[2]<0&&u.forEach(e=>e[0]=-e[0]),o===`z`&&c[0]>0&&u.forEach(e=>e[0]=-e[0]);for(let e of[0,1,2,0,2,3]){let t=l[e];this.pos.push(t[0],t[1],t[2]),this.nrm.push(c[0],c[1],c[2]),this.uv.push(u[e][0],u[e][1]);let n=i[e];this.col.push(n,n,n),this.withLayer&&this.layer.push(a)}}quadUV(e,t,n,r,i,a,o){let s=e=>(i===`x`?e[0]:e[2])/4,c=[e,t,n,r],l=[[s(e),1],[s(t),1],[s(n),1-a],[s(r),1-a]],u=ch(e,t,n);u[0]*o[0]+u[1]*o[1]+u[2]*o[2]<0&&(c=[e,r,n,t],l=[l[0],l[3],l[2],l[1]],u=[-u[0],-u[1],-u[2]]);for(let e of[0,1,2,0,2,3]){let t=c[e];this.pos.push(t[0],t[1],t[2]),this.nrm.push(u[0],u[1],u[2]),this.uv.push(l[e][0],l[e][1]),this.col.push(1,1,1)}}build(){let e=new Lr;return e.setAttribute(`position`,new Tr(this.pos,3)),e.setAttribute(`normal`,new Tr(this.nrm,3)),e.setAttribute(`uv`,new Tr(this.uv,2)),e.setAttribute(`color`,new Tr(this.col,3)),this.withLayer&&e.setAttribute(`aLayer`,new Tr(this.layer,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}};function ch(e,t,n){let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.hypot(l,u,d)||1;return l/=f,u/=f,d/=f,[l,u,d]}function lh(e){let t=new ih(-64,-30,176,50),n=new nh(e,t),r=(e,t)=>Gl(e,t,777,0,0);t.fill(-64,-30,112,20,0,$.grass,rh.cliff),t.fill(-64,-30,112,-14,3.5,$.grass,rh.cliff),t.fill(-64,-30,-22,-15.5,4.5,$.grass,rh.cliff),t.fill(8,-30,44,-13,4.5,$.forest,rh.cliff),t.fill(46,-30,112,-18,7,$.grass,rh.ruinwall),t.fill(-64,-30,-46,20,1.4,$.grass,rh.stonewall),t.fill(-64,-30,-51,20,3.2,$.grass,rh.cliff),t.fill(-64,-30,-57,20,5.5,$.grass,rh.cliff),t.fill(90,-30,112,20,5,$.grass,rh.ruinwall),t.fill(-46,11,90,20,-1.6,$.grass,rh.cliff),t.paintPath([[-46,.5],[-36,.2],[-28,.8],[-20,.2],[-16,-1.8]],3.2,$.dirt),t.paintCircle(-31,0,4.2,$.paving),t.paintPath([[-38,-2],[-36,-5.5]],1.6,$.paving),t.paintPath([[-28,-2],[-27,-6]],1.6,$.paving),t.fill(-21,-15,-3,-4,1.5,$.grass,rh.stonewall),t.stairs(-17,-8,-15,-4,`z`,1.5,0,rh.stonewall,$.paving),t.paintPath([[-16,-8],[-12,-6.5],[-6,-6.2],[-3,-6]],2.8,$.dirt),t.paintTop(-17,-9,-15,-8,$.paving),t.fill(-44,6.5,-20,11,-.35,$.dirt,rh.soil),t.paintPath([[-22,4],[-18,3]],2.4,$.litter),t.fill(-3,-14,20,11,.5,$.forest,rh.cliff),t.ramp(-3,-14,11,11,`x`,1.5,.5,$.forest,rh.cliff),t.undulate(-2,-13,19,10,.12,.35,r),t.paintPath([[-3,-6],[2,-5],[8,-3.5],[14,-1.6],[20,-1]],2.6,$.dirt);let i={x0:20,x1:26,z0:-14,z1:20,y:-.95};t.water(i.x0,-13,i.x1,20,-1.8),t.fill(i.x0,-30,i.x1,-13,4.5,$.forest,rh.cliff),t.fill(26,-13,46,11,.5,$.forest,rh.cliff),t.undulate(27,-12,42,10,.1,.4,r),t.paintPath([[26,-1],[31,-.5],[37,-1.2],[42,-1]],2.6,$.dirt),t.paintCircle(35,-1,3.2,$.grass),t.paintTop(i.x0-1,-13,i.x0,11,$.pebbles),t.paintTop(i.x1,-13,i.x1+1,11,$.pebbles),t.fill(46,-18,94,11,2.5,$.grass,rh.ruinwall),t.stairs(42,-3,46,1,`x`,.5,2.5,rh.ruinwall,$.ruin),t.paintPath([[46,-1],[54,-1.2],[62,-2.5],[66,-3.5]],3.4,$.ruin);let a={x:72,z:-4,r:9,gateX:62.5};t.paintCircle(a.x,a.z,a.r+.5,$.ruin),t.fill(64,-22,81,-14,4,$.ruin,rh.ruinwall),t.stairs(70,-17,74,-14,`z`,4,2.5,rh.ruinwall,$.ruin),t.fill(88,-18,112,11,4.5,$.grass,rh.ruinwall),t.paintTop(46,5,88,11,$.forest),t.block(-64,-30,-46,20),t.block(90,-30,112,20),n.house(-37,-9.4,5.2,3.4,{chimney:!0}),n.house(-27.5,-9.6,5.6,3.6,{chimney:!0}),n.house(-11.5,-11.8,4.8,3.2,{chimney:!0}),n.house(-43.6,-10,3.6,3.2),[[-48.5,-4,`maple`],[-48.8,5.5,`pine`],[-53.5,-8,`pine`],[-54,1,`maple`],[-53.2,8.5,`pine`],[-59,-3,`pine`],[-60,6,`pine`]].forEach(([e,t,r],i)=>n.tree(e,t,r,1,60+i)),n.stoneLantern(-47.5,.8),n.stoneLantern(-39.5,-4.8),n.stoneLantern(-24.2,-5),n.stoneLantern(-18.2,-3.2),n.stoneLantern(-7.5,-4.7),n.tree(-32.2,-6.8,`zelkova`,1.1,3),n.tree(-20.5,3.6,`maple`,1,5),n.tree(-44.2,3.4,`maple`,.9,7),n.tree(-5.5,-12,`maple`,1,9),n.tree(-19,-12.5,`maple`,.9,11);for(let e=0;e<9;e++)n.tree(-45+e*4.6,-18-e%2*2.5,e%3==0?`maple`:`pine`,1.05,20+e);n.well(-30.5,2.2),n.jars(-41.1,-6.4,5,2),n.laundry(-24.8,-21.8,-6.4,1.9),n.crate(-22.8,-7.4),n.crate(-22.1,-7.3,.55,.5),n.crate(-43.7,-6.3,.6,.3),n.stoneWallSeg(-45,5.6,-35.5,5.6),n.stoneWallSeg(-32.5,5.6,-22.5,5.6),n.fence(-22,6.4,-16,6.4),n.fence(-46,6.8,-46,10.5);for(let e=0;e<3;e++)for(let t=0;t<18;t++)n.bush(-42.5+t*1.2+e%2*.5,7.4+e*1.2,(t+e)%3==0?Hd.cropB:Hd.crop,.95);let o=-3.8,s=t.groundAt(o,-6),c=[new B(o,s,-8.4),new B(o,s,-3.9)],l=new Yi({color:9054752});for(let e of c)n.batch.add(l,Gm(.14,.17,3.4,8),Q(e.x,e.y+1.7,e.z)),t.addCircle(e.x,e.z,.22);n.stoneWallSeg(o,-14.7,o,-8.85),n.batch.add(l,Z(.2,.2,5.6),Q(o,s+3.1,-6.15)),n.batch.add(l,Z(.14,.14,5),Q(o,s+2.6,-6.15));for(let e=0;e<9;e++)n.batch.add(l,Z(.05,.5,.05,1),Q(o,s+2.85,-8.1+e*.49));let u=[];for(let e=0;e<70;e++){let t=-46+e*37.3%44,n=-5+e*17.9%10.5;u.push([t,n,e])}for(let[e,r,i]of u){let a=t.index(e,r);a<0||t.top[a]!==$.grass||n.grass(e,r,i%5==0?Hd.flowersA:i%3==0?Hd.flowersB:Hd.tuftA)}[[1,-11,1.1],[4.5,-9.5,1],[9,-11.5,1.15],[13,-9,1],[16.5,-11,1.1],[3.2,10.2,1.05],[11.2,10.3,1],[-1.5,9.6,1.1],[14.8,9.7,1],[7.2,9.5,1.15],[18.2,10.2,1],[29,-10.5,1.1],[33,-8.2,1],[38,-10.8,1.15],[41.5,-7.5,1],[26.9,10.2,1.1],[35.2,9.6,1],[38.6,10.3,1.05],[42,9.7,1],[44.8,10.2,.9]].forEach(([e,t,r],i)=>n.tree(e,t,`pine`,r,40+i));for(let e=0;e<14;e++)n.tree(-1+e*3.4,-15.5-e%3*1.4,`pine`,1.1,80+e);n.rock(10.5,-5.8,.7,.4),n.rock(18.2,2.8,.55,1.2),n.rock(27.8,-4.2,.6,.2,!0),n.rock(40.5,2.2,.8,.9,!0);for(let e=0;e<60;e++){let r=-2+e*29.7%46,a=-12+e*13.3%21;if(r>i.x0-1.2&&r<i.x1+1.2)continue;let o=t.index(r,a);if(o<0||t.top[o]===$.dirt)continue;let s=e%7==0?Hd.fern:e%5==0?Hd.mushroom:e%3==0?Hd.bushB:Hd.tuftB;s===Hd.bushB?n.bush(r,a,s,.85):n.grass(r,a,s,.9)}for(let e=0;e<16;e++){let t=e%2==0?i.x0-.5:i.x1+.5,r=-11+e*1.3;Math.abs(r+1)<2||n.grass(t,r,Hd.reeds,.95)}for(let[e,t]of[[21.2,4],[24.6,6.5],[22.4,-6],[25,-8.5],[21,9]])n.upright.push({x:e,y:i.y-.25,z:t,cell:Hd.lotus,size:2,normal:[0,1,.4],sway:.02});n.bridge(19.4,26.6,-1,2.6,.62,.38,i.y);let d=n.stoneLantern(29.6,1.9,{lit:!1,tag:`checkpoint`});n.pillar(48.5,-4.4,3.8,{r:.5,rune:!0}),n.pillar(48.5,2.2,3.1,{r:.5,broken:!0}),n.batch.add(e.ruin,Z(.9,.5,5.4),Q(48.4,6.85,-1.5,0,0,.12)),n.fallenPillar(53,4.2,3.2,.3),n.fallenPillar(58.5,-8.5,2.8,-.5),n.block(51.5,-7.5,1.2,.8,1,.3),n.block(55.5,6.5,1.4,.6,1.2,-.2),n.block(60.2,3.8,.9,1.1,.9,.7),n.tree(52,-11.5,`dead`,1.1,3),n.tree(60.5,7.8,`dead`,1,4),n.tree(84,6,`dead`,1.2,5),n.tree(86.5,-9,`pine`,1.15,6),n.tree(57,-13.5,`pine`,1.1,7);let f=n.stoneLantern(57.5,2.8,{lit:!1,tag:`checkpoint`,cold:!0}),p=[];for(let e=0;e<8;e++){let t=e/8*Math.PI*2+Math.PI/8,r=a.x+Math.cos(t)*(a.r+1.2),i=a.z+Math.sin(t)*(a.r*.85+1);if(i<-13)continue;let o=e%3==1;n.pillar(r,i,o?1.6+e%2*.8:3.4,{broken:o,rune:!o}),o||p.push(n.emitter(r,6.9,i+.4,7002367,0,7,.2,`brazier`,0))}for(let e=0;e<6;e++){let t=65.5+e*2.6;e!==2&&e!==3&&n.pillar(t,-14.8,e===5?2.2:4.4,{r:.46,broken:e===5,rune:!0})}n.batch.add(e.ruin,Z(9.5,.7,2.4),Q(68.6,9.2,-15.4,0,0,.04)),n.batch.add(e.roof,Z(10.5,.3,3.2),Q(68.4,9.7,-15.6,0,.08,.05)),n.batch.add(e.rune,Z(15,3.2,.6),Q(72,5.6,-21.2));let m=n.stoneLantern(72,-18.2,{lit:!1,scale:1.8,tag:`great`,cold:!0});for(let e=0;e<40;e++){let r=47+e*23.1%40,i=-12+e*11.7%21,a=t.index(r,i);a<0||t.top[a]===$.ruin||n.grass(r,i,e%4==0?Hd.fern:Hd.tuftB,.8)}for(let e=0;e<t.W*t.D;e++){let n=e%t.W,r=Math.floor(e/t.W);(r===0||r===t.D-1)&&(t.flags[e]|=2),(n===0||n===t.W-1)&&(t.flags[e]|=2)}let h=e=>n.lanternChambers.find(t=>t.emitter===e)?.mat,g=[{x:29.6,z:1.9,emitter:d,lit:!1,name:`강가 쉼터`,mat:h(d),respawn:new B(29.6,0,3.3)},{x:57.5,z:2.8,emitter:f,lit:!1,name:`폐허 입구`,mat:h(f),respawn:new B(57.5,0,4.2)}];return{terrain:t,props:n,spawn:new B(-38.5,0,.6),npc:new B(-35.6,0,-5.2),enemies:[{kind:`boar`,x:7,z:-3.2,group:1},{kind:`boar`,x:12.5,z:-.6,group:1},{kind:`wisp`,x:34.5,z:-2.5,group:2},{kind:`boar`,x:38.5,z:.8,group:2},{kind:`wisp`,x:37.5,z:-5,group:2},{kind:`wisp`,x:54,z:-3.5,group:3},{kind:`boar`,x:56,z:.5,group:3}],checkpoints:g,arena:a,boss:new B(a.x,2.5,a.z-3.2),greatLantern:{pos:new B(72,4,-18.2),emitter:m,flame:new B(72,6.9,-18.2),mat:h(m)},gateBlock:{x0:-4.25,z0:-8.3,x1:-3.3499999999999996,z1:-3.95},river:i,waterfall:{x0:i.x0+.5,x1:i.x1-.5,z:-13.05,top:4.5,bottom:i.y},zoneTitles:[{x:-40,title:`노을골 마을`,sub:`황혼의 계곡`},{x:2,title:`물안개 숲`,sub:`안개에 잠긴 옛길`},{x:47,title:`잊힌 신전 터`,sub:`꺼진 등불의 폐허`}],arenaBraziers:p,gatePosts:c}}var uh=class{scene=new Un;level;kit;sky;water;waterfall;mists=[];sun;hemi;fog;lights;dust;glow;additive;fx;atmo;victory=0;bossDark=0;dynamicEmitters=[];emitAcc=new Map;sunTarget=new Nn;canopyActors=[];constructor(){this.kit=new th,this.level=lh(this.kit);let e=this.scene,t=this.level,n=Pm(t.terrain);e.add(n.top,n.sides,n.lip),t.props.build(e);let r=Qd(),i=Zf(r.color,{mipmaps:!1}),a=Zf(r.glow,{mipmaps:!1,srgb:!1});if(t.props.canopy.length){let n=new jm(i,null,t.props.canopy,!1);e.add(n.mesh)}let o=new jm(i,a,t.props.upright,!0);e.add(o.mesh);let s=new Map;for(let n of t.props.canopies){let t=s.get(n.kind);t||(t=Mp(Tf(n.kind)),s.set(n.kind,t));let r=new Rp(t,{noShadow:!0,depthBias:0,sway:n.sway,castShadow:!0,emissive:0,occluder:!0});r.play(`v${n.variant}`),r.apply(),r.u.uPhase.value=n.x*.7+n.z*1.3,r.root.position.set(n.x,n.y,n.z),e.add(r.root),this.canopyActors.push(r)}this.sky=new Tm,e.add(this.sky.group);let c=t.river;this.water=new Em(c.x0-.05,c.x1+.05,-13,18,c.y),e.add(this.water.mesh);let l=t.waterfall;this.waterfall=new Dm(l.x0,l.x1,l.z,l.top,l.bottom),e.add(this.waterfall.mesh),[[23,-2,10,30,c.y+.35,.8],[23,-6,12,14,c.y+.9,.6],[8,-2,22,18,.95,.5],[35,-1,18,18,.85,.9],[35,-4,22,12,1.6,.55],[56,-2,22,18,3,.45],[74,-4,24,20,2.95,.6],[-10,-4,20,14,1.9,.25]].forEach(([t,n,r,i,a,o],s)=>{let c=new Om(t,n,r,i,a,o,s*3.7);this.mists.push(c),e.add(c.mesh)}),this.hemi=new va(8417440,4206634,1.2),e.add(this.hemi),this.sun=new Fa(16754792,1.8),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let u=this.sun.shadow.camera;u.left=-30,u.right=30,u.top=30,u.bottom=-30,u.near=1,u.far=140,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.sun.shadow.radius=1.5,e.add(this.sun),e.add(this.sunTarget),this.sun.target=this.sunTarget,this.fog=new Hn(8413296,30,95),e.fog=this.fog,this.lights=new Mm(e,12,26),this.dust=new Nm(1400,!1),this.glow=new Nm(600,!0,!0),this.additive=new Nm(900,!0),this.fx=new Nm(1400,!1),e.add(this.dust.points,this.glow.points,this.additive.points,this.fx.points),this.atmo=Hm(t.spawn.x,0)}vpW=1920;vpH=1080;occR=150;occTargets=[];setViewport(e,t,n){this.vpW=e,this.vpH=t,this.occR=t/1080*150;let r=t/(2*Math.tan(n*Math.PI/360));this.dust.uScale.value=r,this.glow.uScale.value=r,this.additive.uScale.value=r,this.fx.uScale.value=r}update(e,t,n,r,i){let a=Hm(i,this.victory,this.bossDark);this.atmo=a,this.sun.color.copy(a.sunColor),this.sun.intensity=a.sunIntensity;let o=a.sunDir,s=60/2048,c=new It().setFromUnitVectors(new B(0,0,1),o),l=c.clone().invert(),u=n.clone().applyQuaternion(l);u.x=Math.round(u.x/s)*s,u.y=Math.round(u.y/s)*s;let d=u.applyQuaternion(c);this.sunTarget.position.copy(d),this.sun.position.copy(d).addScaledVector(o,60),this.sunTarget.updateMatrixWorld(),this.hemi.color.copy(a.hemiSky),this.hemi.groundColor.copy(a.hemiGround),this.hemi.intensity=a.hemiIntensity,this.fog.color.copy(a.fogColor),this.fog.near=a.fogNear,this.fog.far=a.fogFar;let f=Math.atan2(r.position.x-n.x,r.position.z-n.z),p=new B(Math.cos(f),0,-Math.sin(f)),m=new B(Math.sin(f),0,Math.cos(f));Np.uBasisR.value.copy(p),Np.uBasisF.value.copy(m);let h=new z(o.dot(p),o.y);h.lengthSq()>1e-4&&h.normalize(),Np.uRimDir.value.copy(h),Np.uRimColor.value.copy(a.rimColor),Np.uRimStrength.value=a.rimStrength;{let e=Np.uOcc.value,t=new B,i=(e,n,i,a,o)=>{t.set(n,i,a);let s=-t.clone().applyMatrix4(r.matrixWorldInverse).z;t.project(r),e.set((t.x*.5+.5)*this.vpW,(t.y*.5+.5)*this.vpH,o,s)};i(e[0],n.x,n.y+1,n.z,this.occR);for(let t=1;t<e.length;t++){let n=this.occTargets[t-1];n?i(e[t],n.x,n.y,n.z,this.occR*.8):e[t].set(-9999,-9999,0,0)}}km.uTime.value=t,km.uPlayer.value.copy(n),km.uWind.value=1+Math.sin(t*.35)*.35,Ip.value=t;for(let e of this.canopyActors)e.mesh.rotation.y=f;this.sky.update(a,r,t),this.water.update(t,a),this.waterfall.update(t,a);for(let e of this.mists)e.update(t,a.mist,a.mistColor);this.lights.windowScale=a.windowScale,this.lights.update(this.level.props.emitters,this.dynamicEmitters,n,t),this.ambientParticles(e,t,n,a),this.dust.update(e,t),this.glow.update(e,t),this.additive.update(e,t),this.fx.update(e,t)}rate(e,t,n){let r=(this.emitAcc.get(e)??0)+t*n,i=Math.floor(r);return this.emitAcc.set(e,r-i),i}ambientParticles(e,t,n,r){let i=Math.random;for(let t=this.rate(`ember`,9*r.embers,e);t>0;t--){let e=n.x+(i()-.5)*30,t=n.z+(i()-.5)*16-2,r=this.level.terrain.heightAt(e,t)+.3+i()*2.5;this.glow.emit({x:e,y:r,z:t,vx:.15,vy:.25+i()*.2,vz:0,life:3+i()*3,size:.09,color:i()<.7?16756816:16769184,alpha:.85,fade:1,wander:.6})}for(let t=this.rate(`ff`,7*r.fireflies,e);t>0;t--){let e=n.x+(i()-.5)*32,t=n.z+(i()-.5)*18-2,r=this.level.terrain.heightAt(e,t)+.4+i()*2.2;this.glow.emit({x:e,y:r,z:t,vx:0,vy:.05,vz:0,life:4+i()*3,size:.11,color:i()<.6?14221168:10158016,alpha:1,fade:1,wander:1.2})}if(n.x<0){for(let t=this.rate(`leaf`,3.5,e);t>0;t--){let e=[[-32.2,-6.8,5.8],[-20.5,3.6,4.6],[-41.5,4.5,4.3],[-5.5,-12,5.4]],t=e[Math.floor(i()*e.length)],n=t[0]+(i()-.5)*3.4,r=t[1]+(i()-.5)*2.4;this.dust.emit({x:n,y:t[2]+i()*.8,z:r,vx:.3+i()*.3,vy:-.45,vz:.1,life:6,size:.1,color:[13392940,15239228,10238500,16300120][Math.floor(i()*4)],fade:0,wander:1.6})}for(let t of this.level.props.smokeSources)if(!(Math.abs(t.x-n.x)>26))for(let n=this.rate(`smoke${t.x}`,3,e);n>0;n--)this.dust.emit({x:t.x+(i()-.5)*.2,y:t.y,z:t.z,vx:.25+i()*.1,vy:.55+i()*.2,vz:0,life:3.2,size:.26,color:i()<.5?10128026:8022656,alpha:.45,fade:1,wander:.3})}let a=this.level.waterfall;if(Math.abs(n.x-(a.x0+a.x1)/2)<30)for(let t=this.rate(`spray`,26,e);t>0;t--){let e=a.x0+i()*(a.x1-a.x0);this.dust.emit({x:e,y:a.bottom+.1,z:a.z+.3+i()*.6,vx:(i()-.5)*.8,vy:.8+i()*1.2,vz:.4+i()*.6,life:.9,size:.1,color:i()<.5?14742776:11063516,alpha:.9,gravity:2.2,fade:0})}if(n.x>44)for(let t=this.rate(`rune`,4*(1-this.victory),e);t>0;t--){let e=n.x+(i()-.5)*26,t=n.z+(i()-.5)*14-2,r=this.level.terrain.heightAt(e,t)+.1;this.glow.emit({x:e,y:r,z:t,vx:0,vy:.5+i()*.4,vz:0,life:2.5,size:.08,color:7391487,alpha:.8,fade:1,wander:.4})}}},dh=class{steps;i=-1;t=0;done=!1;onDone=null;constructor(e){this.steps=e}update(e){if(!this.done)for(this.i<0&&this.next();!this.done;){let t=this.steps[this.i];if(this.t+=e,e=0,t.tick?.(Math.min(1,this.t/Math.max(1e-4,t.dur)),this.t),this.t<t.dur)break;e=this.t-t.dur,t.end?.(),this.next()}}next(){if(this.i++,this.t=0,this.i>=this.steps.length){this.done=!0,this.onDone?.();return}this.steps[this.i].start?.()}skip(){let e=0;for(;!this.done&&e++<100;){let e=this.steps[Math.max(0,this.i)];this.i<0?this.next():(e.tick?.(1,e.dur),e.end?.(),this.next())}}},fh=e=>e*e*(3-2*e),ph=()=>new Promise(e=>setTimeout(e,0)),mh=new H(1,.8,.6),hh=class e{renderer;rig;world;post;input;player;audio;fx;hud;npc;enemies=[];boss;wall;runeCircle;bot=new um;projectiles=[];embers=[];ctx;mode=`loading`;paused=!1;helpOpen=!1;timeline=null;last=0;time=0;frameTimes=[];workTimes=[];occPool=[new B,new B,new B];hitstopT=0;timeScale=1;gateBlock;interactables=[];promptLabel=null;currentInteract=null;dialogLines=[];dialogIdx=0;dialogName=``;onDialogEnd=null;solTalks=0;talked=!1;bossActive=!1;bossDefeated=!1;lanternLit=!1;bossSeen=!1;zoneShown=[!1,!1,!1];respawnAt=new B;checkpoints;deadT=0;deathShown=!1;stats={time:0,deaths:0,kills:0};slashSerial=-1;attackSerial=0;lastStep=0;controlsShownFor=0;bossFocus=0;deathFade=0;titleT=0;pendingTimeline=null;events=[];static async create(t,n){let r=new Wp(n);r.setLoading(.05,`지형과 마을을 세우는 중…`),await ph();let i=new uh;r.setLoading(.45,`인물과 짐승을 그리는 중…`),await ph();let a={},o=Object.keys(Gf);for(let e=0;e<o.length;e++)a[o[e]]=Mp(Gf[o[e]]()),r.setLoading(.45+.45*(e+1)/o.length,`인물과 짐승을 그리는 중…`),await ph();return r.setLoading(.95,`등불을 켜는 중…`),await ph(),new e(t,r,i,a)}constructor(e,t,n,r){this.hud=t,this.world=n,this.renderer=new yl({canvas:e,antialias:!1,powerPreference:`high-performance`,stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=We,this.rig=new dm(window.innerWidth/window.innerHeight),this.post=new Dp(this.renderer,n.scene,this.rig.camera),this.input=new fm(e),this.audio=new Jf,this.fx=new up,n.scene.add(this.fx.group);let i=n.level;this.player=new hm(r.hero),n.scene.add(this.player.actor.root),this.player.spawn(i.spawn,i.terrain),this.respawnAt.copy(i.spawn),this.checkpoints=i.checkpoints,this.npc=new pm(r.sol,i.npc,i.terrain),n.scene.add(this.npc.actor.root);for(let e of i.enemies){let t=e.kind===`boar`?new tm(r.boar,e.x,e.z,e.group):new rm(r.wisp,e.x,e.z,e.group);t.place(i.terrain.heightAt(e.x,e.z)),this.enemies.push(t),n.scene.add(t.actor.root)}this.boss=new om(r.guardian,i.boss.x,i.boss.z,{x:i.arena.x,z:i.arena.z,r:i.arena.r+1.2}),this.boss.place(i.terrain.heightAt(i.boss.x,i.boss.z)),n.scene.add(this.boss.actor.root),i.terrain.dynamic.push(this.boss.collider),this.boss.onPhase2=()=>this.onBossPhase2(),this.boss.onDefeated=()=>this.onBossDefeated(),this.wall=new sm(i.arena.x,i.terrain.heightAt(i.arena.x,i.arena.z),i.arena.z,i.arena.r+1.2),n.scene.add(this.wall.mesh),this.runeCircle=new cm(i.arena.x,i.terrain.heightAt(i.arena.x,i.arena.z),i.arena.z,3.4),n.scene.add(this.runeCircle.mesh);let a=i.gateBlock;this.gateBlock={kind:`box`,x0:a.x0,z0:a.z0,x1:a.x1,z1:a.z1,y0:-10,y1:10},i.terrain.dynamic.push(this.gateBlock);let o=this;this.ctx={get time(){return o.time},terrain:i.terrain,player:this.player,fx:this.fx,dust:n.dust,glow:n.glow,add:n.additive,rig:this.rig,sfx:{play:(e,t)=>this.audio.play(e,t)},lights:n.dynamicEmitters,projectiles:this.projectiles,hitstop:e=>{this.hitstopT=Math.max(this.hitstopT,e)},onPlayerHurt:e=>this.onPlayerHurt(e),dropEmber:(e,t,n)=>this.embers.push({x:e,y:t,z:n,t:0,alive:!0})},this.buildInteractables(),this.hud.onTextTick=()=>this.audio.play(`text`),this.hud.buildMenu([{label:()=>`계속하기`,action:()=>this.setPaused(!1)},{label:()=>this.helpOpen?`조작법 닫기`:`조작법 보기`,action:()=>this.toggleHelp()},{label:()=>`소리: ${this.audio.muted?`꺼짐`:`켜짐`}`,action:()=>this.audio.toggleMute()},{label:()=>`화면 효과: ${this.post.enabled?`켜짐`:`꺼짐`}`,action:()=>this.post.enabled=!this.post.enabled},{label:()=>`처음부터 다시`,action:()=>location.reload()}]),this.wireButtons();let s=()=>this.audio.unlock();window.addEventListener(`keydown`,s),window.addEventListener(`pointerdown`,s),window.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&(this.mode===`play`||this.mode===`dialog`)&&this.setPaused(!0)}),this.resize(),this.exposeDebug(),jp.enabled&&new URLSearchParams(location.search).has(`bot`)&&(this.bot.enabled=!0)}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.rig.camera.aspect=e/t,this.rig.camera.updateProjectionMatrix();let n=this.renderer.getDrawingBufferSize(new z);this.post.setSize(n.x,n.y),this.world.setViewport(n.x,n.y,this.rig.camera.fov)}start(){this.hud.show(`loading`,!1),this.enterTitle(),this.last=performance.now(),this.renderer.info.autoReset=!1;let e=t=>{let n=t-this.last;this.last=t,this.frameTimes.push(n),this.frameTimes.length>8e3&&this.frameTimes.splice(0,4e3);let r=Math.min(.05,n/1e3),i=performance.now();this.update(r),this.renderer.info.reset(),this.post.render(),this.workTimes.push(performance.now()-i),this.workTimes.length>8e3&&this.workTimes.splice(0,4e3),this.captureFrame(),this.input.endFrame(),requestAnimationFrame(e)};requestAnimationFrame(e)}cap=null;captureFrames(e,t,n,r,i=1){return new Promise(a=>{let o=document.createElement(`canvas`);o.width=t*r,o.height=n*Math.ceil(e/r),this.cap={n:e,i:0,w:t,h:n,cols:r,canvas:o,resolve:a,every:i,skip:0}})}captureFrame(){let e=this.cap;if(!e)return;if(e.skip>0){e.skip--;return}e.skip=e.every-1;let t=this.renderer.domElement,n=this.rig.project(new B(this.player.pos.x,this.player.pos.y+1,this.player.pos.z),t.width,t.height),r=Math.round(Math.max(0,Math.min(t.width-e.w,n.x-e.w/2))),i=Math.round(Math.max(0,Math.min(t.height-e.h,n.y-e.h/2))),a=e.canvas.getContext(`2d`);a.imageSmoothingEnabled=!1,a.drawImage(t,r,i,e.w,e.h,e.i%e.cols*e.w,Math.floor(e.i/e.cols)*e.h,e.w,e.h),a.fillStyle=`rgba(0,0,0,0.6)`,a.fillRect(e.i%e.cols*e.w,Math.floor(e.i/e.cols)*e.h,150,22),a.fillStyle=`#fff`,a.font=`14px monospace`,a.fillText(`#${e.i} ${this.player.actor.anim}:${this.player.actor.frame}`,e.i%e.cols*e.w+6,Math.floor(e.i/e.cols)*e.h+16),e.i++,e.i>=e.n&&(this.cap=null,e.resolve(e.canvas.toDataURL(`image/png`)))}wireButtons(){let e=(e,t)=>this.hud.root.querySelector(e)?.addEventListener(`click`,()=>{this.audio.unlock(),t()});e(`.t-start`,()=>this.mode===`title`&&this.startIntro()),e(`.d-retry`,()=>this.mode===`dead`&&this.deathShown&&this.respawn()),e(`.e-again`,()=>location.reload())}setPaused(e){e!==this.paused&&(this.paused=e,this.hud.show(`pause`,e),e?(this.hud.selectMenu(0),this.hud.refreshMenu()):(this.helpOpen=!1,this.hud.setHelp(!1)),this.audio.play(e?`uiSelect`:`uiMove`))}toggleHelp(){this.helpOpen=!this.helpOpen,this.hud.setHelp(this.helpOpen)}readControl(e){if(this.bot.enabled){let t=this.bot.control({player:this.player,enemies:this.enemies,boss:this.boss,projectiles:this.projectiles,mode:this.mode,prompt:this.promptLabel,bossActive:this.bossActive,bossDefeated:this.bossDefeated,talked:this.talked,checkpointsLit:this.checkpoints.map(e=>e.lit)},e);return this.input.consumeClick(),t}let t=this.input.consumeClick();return{move:this.input.moveVector(),aim:null,attack:t,dodge:this.input.wasPressed(`Space`),interact:this.input.wasPressed(`KeyE`),confirm:this.input.wasPressed(`Enter`)||this.input.wasPressed(`Space`)||this.input.wasPressed(`NumpadEnter`)||t}}update(e){if(this.audio.update(),this.input.wasPressed(`KeyM`)){this.audio.unlock();let e=this.audio.toggleMute();this.hud.toast(e?`소리를 껐습니다 (M)`:`소리를 켰습니다 (M)`,1.6),this.hud.refreshMenu()}if(this.input.wasPressed(`KeyP`)&&(this.post.enabled=!this.post.enabled),this.input.wasPressed(`Escape`)&&(this.mode===`play`||this.mode===`dialog`||this.paused)&&this.setPaused(!this.paused),this.paused){(this.input.wasPressed(`KeyW`)||this.input.wasPressed(`ArrowUp`))&&(this.hud.selectMenu(this.hud.menuIndex-1),this.audio.play(`uiMove`)),(this.input.wasPressed(`KeyS`)||this.input.wasPressed(`ArrowDown`))&&(this.hud.selectMenu(this.hud.menuIndex+1),this.audio.play(`uiMove`)),(this.input.wasPressed(`Enter`)||this.input.wasPressed(`Space`)||this.input.wasPressed(`KeyE`))&&(this.audio.play(`uiSelect`),this.hud.activateMenu()),this.input.consumeClick(),this.hud.update(e);return}let t=this.readControl(e);switch(this.mode){case`title`:this.updateTitle(e,t);break;case`intro`:t.confirm?this.timeline?.skip():this.timeline?.update(e),this.simulate(e,null);break;case`play`:this.stats.time+=e,this.simulate(e,t),this.updatePlay(e,t);break;case`dialog`:this.simulate(e,null),(t.interact||t.confirm)&&this.advanceDialog();break;case`cutscene`:case`ending`:this.timeline?.update(e),this.simulate(e,null);break;case`dead`:this.simulate(e,null),this.updateDead(e,t);break;case`results`:this.simulate(e,null),t.confirm&&this.bot.enabled&&this.events.push(`results-confirm`)}this.hud.update(e),this.updateHud(e)}simulate(e,t){let n=this.hitstopT>0?0:e*this.timeScale;this.hitstopT=Math.max(0,this.hitstopT-e),this.timeScale<1&&(this.timeScale=Math.min(1,this.timeScale+e*.55)),this.time+=n;let r=this.world.level,i=this.player;t&&(t.aim?i.aim.set(t.aim[0],t.aim[1]):this.aimFromMouse()),i.update(n,t?{move:t.move,attack:t.attack,dodge:t.dodge}:{move:[0,0],attack:!1,dodge:!1},r.terrain);for(let e of i.events)this.onPlayerEvent(e);if(this.bossActive){let e=this.boss.arena,t=i.pos.x-e.x,n=i.pos.z-e.z,a=Math.hypot(t,n),o=e.r-.6;a>o&&(i.pos.x=e.x+t/a*o,i.pos.z=e.z+n/a*o,i.pos.y=r.terrain.heightAt(i.pos.x,i.pos.z))}n>0&&this.resolveAttacks();for(let e of this.enemies){if(e.removed){e.actor.root.visible=!1;continue}Math.abs(e.pos.x-i.pos.x)>34&&e.state===`idle`||e.update(n,this.ctx)}this.boss.update(n,this.ctx),this.separate();for(let e of this.projectiles)e.alive&&e.update(n,this.ctx);for(let e=this.projectiles.length-1;e>=0;e--)this.projectiles[e].alive||this.projectiles.splice(e,1);this.updateEmbers(n),this.npc.update(n,i.pos);let a=this.world.dynamicEmitters;a.length=0,a.push(i.lantern,this.npc.lantern,this.boss.coreLight);for(let e of this.enemies)e instanceof rm&&!e.removed&&a.push(e.light);for(let e of this.projectiles)e.alive&&e.light.on>0&&a.push(e.light);this.updateBraziers(n),this.wall.update(e,this.time),this.runeCircle.glowTarget=this.bossActive?this.boss.state===`barrage`||this.boss.state===`hop`?1:.42:this.lanternLit?.85:this.bossDefeated?.1:.18,this.runeCircle.warm=this.world.victory,this.runeCircle.update(e,this.time),this.fx.update(n,this.time);let o=i.pos;this.bossFocus=this.bossActive&&this.boss.alive?Math.min(1,this.bossFocus+e*1.5):Math.max(0,this.bossFocus-e*1.2),this.bossFocus>0&&(o=new B().copy(i.pos).lerp(this.boss.pos,.32*fh(this.bossFocus))),this.rig.distance=Op.distance+3*fh(this.bossFocus),this.rig.follow(o,e,i.vel.x*.25,i.vel.z*.15),this.rig.update(e,this.time);let s=this.rig.yaw;i.actor.sync(s,r.terrain.heightAt(i.pos.x,i.pos.z)),i.actor.setSelfLight(i.lantern.pos,this.rig.camera,mh,.62*i.lantern.on,1.7),this.npc.actor.sync(s,this.npc.pos.y);for(let e of this.enemies)e.removed||e.actor.sync(s,r.terrain.heightAt(e.pos.x,e.pos.z));this.boss.actor.sync(s,r.terrain.heightAt(this.boss.pos.x,this.boss.pos.z));let c=this.rig.shot?.target,l=c&&this.mode!==`play`?new B(c.x,c.y-1,c.z):i.pos,u=c&&this.mode!==`play`?c.x:i.pos.x;{let e=this.world.occTargets;e.length=0,this.enemies.filter(e=>e.alive&&e.state!==`idle`&&e.distTo(i.pos.x,i.pos.z)<11).sort((e,t)=>e.distTo(i.pos.x,i.pos.z)-t.distTo(i.pos.x,i.pos.z)).slice(0,3).forEach((t,n)=>e.push(this.occPool[n].set(t.pos.x,t.pos.y+t.hitHeight*.6,t.pos.z)))}this.world.update(n,this.time,l,this.rig.camera,u),this.post.apply(this.world.atmo),this.renderer.toneMappingExposure=this.world.atmo.exposure}aimFromMouse(){let e=window.innerWidth,t=window.innerHeight,n=this.rig.unproject(this.input.mouseX,this.input.mouseY,e,t,this.player.pos.y+.8);if(n){let e=n.x-this.player.pos.x,t=n.z-this.player.pos.z,r=Math.hypot(e,t);r>.05&&this.player.aim.set(e/r,t/r)}}onPlayerEvent(e){let t=this.player;e===`windup`||e===`windup-heavy`?(this.attackSerial++,this.audio.play(e===`windup`?`swing`:`swingHeavy`)):e===`dodge`?(this.audio.play(`dodge`),Jp(this.ctx,t.pos.x,t.pos.y,t.pos.z,3,.5,.8)):e===`death`&&this.audio.play(`death`)}resolveAttacks(){let e=this.player,t=e.currentAttack();if(!t||!e.attackActive())return;let n=e.combo===2;if(this.slashSerial!==this.attackSerial){this.slashSerial=this.attackSerial;let t=Math.atan2(e.facing.x,e.facing.y);this.fx.spawn(op.slash,{x:e.pos.x+e.facing.x*.75,y:e.pos.y+.06,z:e.pos.z+e.facing.y*.75,size:n?1.35:1.05,ground:!0,rot:t,glow:1.25,color:n?13168895:16777215,alpha:.9})}let r=[...this.enemies,this.boss];for(let i of r){if(!i.alive||i.removed||e.hitIds.has(i.id)||i===this.boss&&!this.boss.awake||Math.abs(i.pos.y-e.pos.y)>1.6)continue;let r=i.pos.x-e.pos.x,a=i.pos.z-e.pos.z,o=Math.hypot(r,a)||.001;if(o>t.reach+i.radius)continue;let s=(r*e.facing.x+a*e.facing.y)/o;if(o>i.radius+.35&&s<Math.cos(t.arc/2))continue;e.hitIds.add(i.id);let c=r/o,l=a/o;if(!i.takeHit({dmg:t.dmg,dirX:c,dirZ:l,knock:t.knock,heavy:n},this.ctx))continue;let u=i.pos.x-c*i.radius*.7,d=i.pos.z-l*i.radius*.7+.1,f=i.pos.y+(i.kind===`boss`?1.6:i.hitHeight);this.hitstopT=Math.max(this.hitstopT,t.hitstop+(i.alive?0:.05)),this.rig.shake(n?.26:.13,c,.15,n?.22:.15);let p=i.kind===`boss`?[10543359,14219519,10460071,7894150]:i.kind===`wisp`?[14218495,10148080,16777215]:[16769690,16777215,16234586,9087062];Kp(this.ctx,u,f,d,c,l,n?16:10,p,n?9:7),qp(this.ctx,u,f,d,n?1.5:1.1,i.kind===`boss`?14217471:16777215),this.audio.play(i.kind===`boss`?`bossHit`:n?`hitHeavy`:`hit`),!i.alive&&i.kind!==`boss`&&this.stats.kills++}for(let n of this.projectiles){if(!n.alive)continue;let r=n.pos.x-e.pos.x,i=n.pos.z-e.pos.z,a=Math.hypot(r,i)||.001;a>t.reach+.35||(r*e.facing.x+i*e.facing.y)/a<Math.cos(t.arc/2)&&a>.6||(n.pop(this.ctx,!0),this.hitstopT=Math.max(this.hitstopT,.035),Kp(this.ctx,n.pos.x,n.pos.y,n.pos.z,r/a,i/a,6,[14218495,16777215]))}}onPlayerHurt(e){this.events.push(`hurt:${this.bossActive?`boss-${this.boss.state}`:`enemy`}:${e}`),this.hitstopT=Math.max(this.hitstopT,.09),this.rig.shake(.3+e*.05,0,.6,.22),this.audio.play(`hurt`);let t=this.player;Kp(this.ctx,t.pos.x,t.pos.y+1,t.pos.z+.1,0,1,8,[16742986,16760976,16777215],5)}separate(){let e=this.enemies.filter(e=>e.alive&&!e.removed);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let r=e[t],i=e[n],a=i.pos.x-r.pos.x,o=i.pos.z-r.pos.z,s=Math.hypot(a,o),c=r.radius+i.radius;if(s>1e-4&&s<c){let e=(c-s)*.5,t=a/s,n=o/s;this.world.level.terrain.walkable(r.pos.x-t*e,r.pos.z-n*e)&&(r.pos.x-=t*e,r.pos.z-=n*e),this.world.level.terrain.walkable(i.pos.x+t*e,i.pos.z+n*e)&&(i.pos.x+=t*e,i.pos.z+=n*e)}}}updateEmbers(e){let t=this.player;for(let n of this.embers){if(!n.alive)continue;n.t+=e;let r=t.pos.x-n.x,i=t.pos.z-n.z,a=Math.hypot(r,i);n.t>.6&&a<2.4&&t.alive&&(n.x+=r/a*e*6,n.z+=i/a*e*6);let o=n.y+Math.sin(n.t*3)*.12;if(a<.6&&n.t>.4&&t.alive){n.alive=!1,t.hp<t.maxHp&&(t.heal(1),this.hud.toast(Cm.heal,1.4)),this.audio.play(`pickup`);for(let e=0;e<10;e++)this.world.glow.emit({x:n.x,y:o,z:n.z,vx:(Math.random()-.5)*2,vy:1+Math.random()*1.5,vz:(Math.random()-.5)*2,life:.6,size:.1,color:16760928,alpha:1,fade:1});continue}n.t>24&&(n.alive=!1),this.fx.spawn(op.orbEmber,{x:n.x,y:o,z:n.z,size:.42,life:Math.max(.016,e*1.01),glow:1.7}),Math.random()<.3&&this.world.glow.emit({x:n.x,y:o,z:n.z,vx:0,vy:.6,vz:0,life:.6,size:.08,color:16756816,alpha:.9,fade:1})}this.embers=this.embers.filter(e=>e.alive)}updateBraziers(e){let t=this.world.level,n=this.world.victory>.5;for(let r of t.arenaBraziers)r.on<=.01||Math.random()<e*22*r.on&&this.world.glow.emit({x:r.pos.x+(Math.random()-.5)*.3,y:r.pos.y-.2,z:r.pos.z-.35+(Math.random()-.5)*.3,vx:0,vy:1.2+Math.random(),vz:0,life:.6,size:.14,color:n?Math.random()<.5?16756816:16769184:Math.random()<.5?8050943:14219519,alpha:1,fade:1,wander:.5});if(this.lanternLit){let e=t.greatLantern.flame;for(let t=0;t<2;t++)this.world.glow.emit({x:e.x+(Math.random()-.5)*.4,y:e.y-1,z:e.z+.3,vx:(Math.random()-.5)*.3,vy:1.4+Math.random(),vz:0,life:.9,size:.16,color:Math.random()<.5?16756816:16773320,alpha:1,fade:1,wander:.6})}}enterTitle(){this.mode=`title`,this.hud.show(`title`,!0),this.hud.setHudVisible(!1),this.player.lock(),this.rig.shot={target:new B(-30,1.8,-3),pitch:.44,distance:25,yaw:0,fov:30}}updateTitle(e,t){this.titleT+=e,this.rig.shot.target.set(-31+Math.sin(this.titleT*.06)*7,1.8,-3.2+Math.sin(this.titleT*.045)*1.2),this.simulate(e,null),t.confirm&&(this.audio.unlock(),this.startIntro())}startIntro(){if(this.mode!==`title`)return;this.audio.play(`uiSelect`),this.hud.show(`title`,!1),this.mode=`intro`,this.hud.setBars(!0),this.hud.setSkip(!0);let e=this.rig.shot,t=this.player.pos,n=(t,n,r)=>{e.target.copy(t.target).lerp(n.target,r),e.pitch=t.pitch+(n.pitch-t.pitch)*r,e.distance=t.distance+(n.distance-t.distance)*r,e.fov=t.fov+(n.fov-t.fov)*r},r=(e,t,n,r,i)=>({target:new B(e,t,n),pitch:r,distance:i,yaw:0,fov:30}),i=Op.pitchDeg*Math.PI/180,a=[r(73,5.5,-13,.52,27),r(70,4.5,-8.5,.5,22),r(38,1.6,-2.5,.46,24),r(10,1.5,-3.5,.46,24),r(-24,2.2,-3,.46,24),r(t.x,t.y+Op.targetLift,t.z,i,Op.distance)];this.timeline=new dh([{dur:4.6,start:()=>this.hud.setCaption(bm[0]),tick:e=>n(a[0],a[1],fh(e))},{dur:4.6,start:()=>this.hud.setCaption(bm[1]),tick:e=>n(a[2],a[3],fh(e))},{dur:5.2,start:()=>this.hud.setCaption(bm[2]),tick:e=>n(a[4],a[5],fh(e))}]),this.timeline.onDone=()=>this.beginPlay()}beginPlay(){this.hud.setCaption(``),this.hud.setBars(!1),this.hud.setSkip(!1),this.rig.shot=null,this.rig.snap(this.player.pos),this.player.unlock(),this.mode=`play`,this.hud.setHudVisible(!0),this.hud.setControls(!0),this.controlsShownFor=0,this.hud.setObjective(ym.talk),this.showZone(0)}showZone(e){if(this.zoneShown[e])return;this.zoneShown[e]=!0;let t=this.world.level.zoneTitles[e];this.hud.zoneTitle(t.title,t.sub)}buildInteractables(){let e=this.world.level;this.interactables.push({x:this.npc.pos.x,y:this.npc.pos.y,z:this.npc.pos.z,r:2.1,h:2.6,label:()=>`대화하기`,act:()=>this.talkToSol()}),this.checkpoints.forEach(t=>{let n=e.terrain.heightAt(t.x,t.z);this.interactables.push({x:t.x,y:n,z:t.z,r:1.9,h:2.5,label:()=>t.lit?null:`석등 밝히기`,act:()=>this.lightCheckpoint(t)})});let t=e.greatLantern;this.interactables.push({x:t.pos.x,y:t.pos.y,z:t.pos.z,r:2.6,h:4.4,label:()=>this.bossDefeated&&!this.lanternLit?`큰 등불 밝히기`:null,act:()=>this.startEnding()})}updatePlay(e,t){let n=this.player,r=null,i=1e9;if(n.alive&&n.state===`move`)for(let e of this.interactables){if(!e.label())continue;let t=Math.hypot(e.x-n.pos.x,e.z-n.pos.z);t<e.r&&t<i&&Math.abs(e.y-n.pos.y)<2.2&&(i=t,r=e)}if(this.currentInteract=r,this.promptLabel=r?r.label():null,r&&t.interact&&(this.audio.play(`uiSelect`),r.act()),n.state===`move`&&n.moving){let e=Math.floor(n.stepPhase*1e3/280);e!==this.lastStep&&(this.lastStep=e,this.audio.play(`step`,{pitch:e%2?1:.85}))}!this.talked&&n.pos.x>-5.2&&n.pos.x<-4&&n.pos.z>-8.4&&n.pos.z<-3.9&&t.move[0]>.3&&(this.hud.root.querySelector(`.toast.on`)||(this.hud.toast(Cm.gateBlocked,2.2),this.audio.play(`gateBlock`)));let a=n.pos.x;a>1&&this.showZone(1),a>47&&this.showZone(2),!this.bossActive&&!this.bossDefeated&&(this.talked?a<-3?this.hud.setObjective(ym.gate):a<30&&!this.checkpoints[0].lit?this.hud.setObjective(ym.forest):this.hud.setObjective(ym.ruins):this.hud.setObjective(ym.talk));let o=this.boss.arena;!this.bossActive&&!this.bossDefeated&&n.alive&&Math.hypot(n.pos.x-o.x,n.pos.z-o.z)<o.r-1.8&&n.pos.y>2&&this.startBossIntro(),this.controlsShownFor+=e,(this.controlsShownFor>45||a>-2)&&this.hud.setControls(!1),n.alive||(this.mode=`dead`,this.deadT=0,this.deathShown=!1,this.stats.deaths++,this.hud.setPrompt(null));let s=1-Ft.smoothstep(a,-8,0),c=Ft.smoothstep(a,40,48),l=Math.max(0,1-s-c),u=1-Ft.smoothstep(Math.abs(a-23),3,14);this.audio.setZone(s,l,c,u)}talkToSol(){this.npc.talking=!0,this.player.lock();let e=this.npc.pos.x-this.player.pos.x,t=this.npc.pos.z-this.player.pos.z;this.player.setDirTo(e,t);let n=!this.talked,r=n?_m:vm[this.solTalks++%vm.length];this.openDialog(gm.sol,r,()=>{if(this.npc.talking=!1,this.player.unlock(),n){this.talked=!0;let e=this.world.level.terrain.dynamic.indexOf(this.gateBlock);e>=0&&this.world.level.terrain.dynamic.splice(e,1),this.hud.setObjective(ym.gate)}})}openDialog(e,t,n){this.mode=`dialog`,this.dialogLines=t,this.dialogIdx=0,this.dialogName=e,this.onDialogEnd=n,this.hud.setPrompt(null),this.hud.openDialog(e,t[0])}advanceDialog(){if(!this.hud.dialogDone){this.hud.completeDialog();return}if(this.dialogIdx++,this.audio.play(`uiMove`),this.dialogIdx>=this.dialogLines.length){this.hud.closeDialog(),this.mode=`play`,this.onDialogEnd?.();return}this.hud.openDialog(this.dialogName,this.dialogLines[this.dialogIdx])}lightCheckpoint(e){if(e.lit)return;e.lit=!0,e.emitter.on=1,e.emitter.color.set(16752712),e.mat&&(e.mat.emissive.set(16752720),e.mat.emissiveIntensity=1.8,e.mat.color.set(6963240));let t=this.world.level.terrain.heightAt(e.x,e.z);this.respawnAt.set(e.respawn.x,0,e.respawn.z),this.player.heal(this.player.maxHp),this.audio.play(`checkpoint`),this.audio.play(`lanternLight`,{vol:.6}),this.hud.toast(Cm.checkpoint(e.name),3.2);for(let n=0;n<30;n++){let n=Math.random()*Math.PI*2;this.world.glow.emit({x:e.x,y:t+1.7,z:e.z+.1,vx:Math.cos(n)*1.6,vy:1+Math.random()*2,vz:Math.sin(n)*1,life:.9+Math.random()*.5,size:.12,color:Math.random()<.6?16756816:16773320,alpha:1,fade:1,drag:1.5})}this.fx.spawn(op.ringEmber,{x:e.x,y:t+.08,z:e.z,size:1,ground:!0,grow:4,life:.5,fade:!0,glow:1.6})}startBossIntro(){let e=this.bossSeen;this.bossSeen=!0,this.mode=`cutscene`,this.player.lock(),this.hud.setPrompt(null),this.hud.setBars(!0),this.hud.setHudVisible(!1),this.wall.target=1,this.audio.play(`barrier`);let t=this.world.level,n=this.boss,r=()=>({target:this.rig.target.clone(),pitch:this.rig.pitch,distance:this.rig.distance,yaw:this.rig.yaw,fov:this.rig.fov}),i=r();this.rig.shot={target:i.target.clone(),pitch:i.pitch,distance:i.distance,yaw:0,fov:i.fov};let a={target:new B(n.pos.x,n.pos.y+2.8,n.pos.z),pitch:.46,distance:19,yaw:0,fov:30},o=this.rig.shot,s=(e,t,n)=>{o.target.copy(e.target).lerp(t.target,n),o.pitch=e.pitch+(t.pitch-e.pitch)*n,o.distance=e.distance+(t.distance-e.distance)*n},c=t.arenaBraziers;this.timeline=new dh([{dur:e?.5:1.3,tick:e=>s(i,a,fh(e))},{dur:e?1.6:2.2,start:()=>{n.awaken(this.ctx),this.audio.setBoss(!0)},tick:(e,t)=>{this.world.bossDark=fh(e),c.forEach((t,n)=>{+(e>n/c.length)&&t.on<1&&(t.on=1,t.intensity=6,t.color.set(7002367),this.audio.play(`orbPop`,{vol:.5}))}),Math.random()<.4&&this.world.dust.emit({x:n.pos.x+(Math.random()-.5)*4,y:n.pos.y+5+Math.random(),z:n.pos.z+.5,vx:0,vy:-2,vz:0,life:1.2,size:.1,color:10460071,gravity:4}),t>.5&&t<.55&&this.rig.shake(.35,0,1,.4),o.distance=a.distance-1.5*e},end:()=>{e||this.hud.bossBanner(gm.boss,gm.bossSub)}},{dur:e?.2:1.4},{dur:.8,tick:e=>{let t=r(),n={...a,distance:a.distance-1.5};s(n,t,fh(e))}}]),this.timeline.onDone=()=>{this.rig.shot=null,this.hud.setBars(!1),this.hud.setHudVisible(!0),this.player.unlock(),this.bossActive=!0,this.mode=`play`,this.hud.setObjective(ym.boss)}}onBossPhase2(){this.hud.toast(`수호자의 불집이 차갑게 타오른다!`,2.4);for(let e of this.world.level.arenaBraziers)e.intensity=9}onBossDefeated(){this.timeScale=.25,this.hitstopT=Math.max(this.hitstopT,.18),this.rig.shake(.8,0,1,.6),this.audio.setBoss(!1),this.bossDefeated=!0;let e=this.boss;for(let t=0;t<40;t++){let t=Math.random()*Math.PI*2;this.world.glow.emit({x:e.pos.x,y:e.pos.y+2.4,z:e.pos.z+1,vx:Math.cos(t)*4,vy:1+Math.random()*3,vz:Math.sin(t)*2,life:1.2+Math.random(),size:.13,color:Math.random()<.5?8050943:14219519,alpha:1,fade:1,drag:1.2})}this.pendingTimeline=new dh([{dur:2.6},{dur:.1,end:()=>{this.bossActive=!1,this.wall.target=0,this.hud.toast(Cm.bossDown,3.2),this.hud.setObjective(ym.lantern),this.audio.play(`barrier`,{vol:.6});for(let e of this.world.level.arenaBraziers)e.intensity=2.5}}])}updateHud(e){this.pendingTimeline&&this.mode!==`cutscene`&&(this.pendingTimeline.update(e),this.pendingTimeline.done&&(this.pendingTimeline=null));let t=this.player;if(this.hud.setHp(t.hp,t.maxHp),this.world.bossDark+=((this.bossActive||this.mode===`cutscene`?1:this.bossDefeated?.25:0)-this.world.bossDark)*Math.min(1,e*1.5),this.bossActive||this.bossDefeated&&this.boss.stateT<2.5&&this.mode===`play`?this.hud.setBoss(gm.boss,this.boss.hp/this.boss.maxHp,this.boss.phase===2):this.hud.setBoss(null),this.mode===`play`&&this.currentInteract&&this.promptLabel){let e=this.currentInteract,t=this.rig.project(new B(e.x,e.y+e.h,e.z),window.innerWidth,window.innerHeight);this.hud.setPrompt(this.promptLabel,t.x,t.y)}else this.hud.setPrompt(null);if(jp.enabled){let e=this.frameTimes.slice(-120),n=e.reduce((e,t)=>e+t,0)/Math.max(1,e.length),r=this.renderer.info.render;this.hud.setDebug(`${(1e3/n).toFixed(0)} fps  ${r.calls} calls  ${(r.triangles/1e3).toFixed(0)}k tri\n${this.mode}  x ${t.pos.x.toFixed(1)} z ${t.pos.z.toFixed(1)}${this.bot.enabled?`  [자동]`:``}`)}}updateDead(e,t){this.deadT+=e,this.deadT>1.7&&!this.deathShown&&(this.deathShown=!0,this.hud.setDeathTip(Sm[Math.floor(Math.random()*Sm.length)]),this.hud.show(`death`,!0),this.hud.setHudVisible(!1)),this.deathFade=Math.min(.55,this.deadT*.35),this.hud.setFade(this.deathFade),this.deathShown&&this.deadT>2.2&&t.confirm&&this.respawn()}respawn(){let e=this.world.level;if(this.hud.show(`death`,!1),this.hud.setHudVisible(!0),this.hud.setFade(0),this.audio.play(`lanternLight`,{vol:.5}),this.bossActive||this.bossSeen&&!this.bossDefeated){this.bossActive=!1,this.boss.resetTo(),this.boss.place(e.terrain.heightAt(e.boss.x,e.boss.z)),this.wall.target=0,this.wall.level=0,this.audio.setBoss(!1);for(let t of e.arenaBraziers)t.on=0}for(let e of this.enemies)e.alive&&e.resetTo();for(let e of this.projectiles)e.alive=!1;this.projectiles.length=0,this.fx.clear();let t=this.respawnAt;this.player.spawn(new B(t.x,0,t.z),e.terrain),this.player.iframes=1.2,this.rig.snap(this.player.pos),this.mode=`play`,this.bot.resyncTo(t.x),this.events.push(`respawn`)}startEnding(){if(!this.bossDefeated||this.lanternLit)return;this.mode=`ending`;let e=this.world.level,t=this.player,n=e.greatLantern;t.lock(),t.setDirTo(0,-1),t.actor.play(`raise`,!0),this.hud.setPrompt(null),this.hud.setHudVisible(!1),this.hud.setBars(!0);let r=new B(t.pos.x,t.pos.y+2.2,t.pos.z),i=n.flame.clone(),a=r.clone().lerp(i,.5);a.y+=2.5;let o={target:new B((r.x+i.x)/2,(r.y+i.y)/2,(r.z+i.z)/2),pitch:.5,distance:15,yaw:0,fov:30},s={target:new B(72,3.5,-10),pitch:.72,distance:34,yaw:0,fov:30};this.rig.shot={target:this.rig.target.clone(),pitch:this.rig.pitch,distance:this.rig.distance,yaw:0,fov:30};let c=this.rig.shot,l={target:this.rig.target.clone(),pitch:this.rig.pitch,distance:this.rig.distance,yaw:0,fov:30},u=(e,t,n)=>{c.target.copy(e.target).lerp(t.target,n),c.pitch=e.pitch+(t.pitch-e.pitch)*n,c.distance=e.distance+(t.distance-e.distance)*n},d=new B;this.timeline=new dh([{dur:1,tick:e=>u(l,o,fh(e)),start:()=>this.audio.play(`lanternLight`,{vol:.4})},{dur:1.5,tick:e=>{let t=fh(e);d.set((1-t)*(1-t)*r.x+2*(1-t)*t*a.x+t*t*i.x,(1-t)*(1-t)*r.y+2*(1-t)*t*a.y+t*t*i.y,(1-t)*(1-t)*r.z+2*(1-t)*t*a.z+t*t*i.z),this.fx.spawn(op.orbEmber,{x:d.x,y:d.y,z:d.z,size:.7,life:.03,glow:2});for(let e=0;e<3;e++)this.world.glow.emit({x:d.x,y:d.y,z:d.z,vx:Math.random()-.5,vy:Math.random()*.6,vz:Math.random()-.5,life:.7,size:.12,color:Math.random()<.5?16756816:16773320,alpha:1,fade:1})},end:()=>this.igniteGreatLantern()},{dur:5.2,start:()=>this.hud.setCaption(xm[0]),tick:(t,n)=>{u(o,s,fh(t)),this.world.victory=fh(Math.min(1,t*1.1)),this.audio.setVictory(!0);let r=fh(t);e.props.kit.coldGlow.emissive.setRGB(.3+.7*r,.75-.1*r,1-.7*r),e.props.kit.coldGlow.emissiveIntensity=1.4*r,e.props.kit.rune.emissive.setRGB(.25+.75*r,.6-.05*r,1-.72*r),e.props.kit.rune.emissiveIntensity=.25+.35*r,e.arenaBraziers.forEach((n,r)=>{t>r/e.arenaBraziers.length&&(n.on=1,n.intensity=7,n.color.set(16752720))}),n>2.6&&n<2.7&&this.hud.setCaption(xm[1])}},{dur:1.2}]),this.timeline.onDone=()=>this.showResults()}igniteGreatLantern(){let e=this.world.level,t=e.greatLantern;this.lanternLit=!0,t.emitter.on=1,t.emitter.color.set(16756832),t.emitter.intensity=16,t.emitter.distance=16,t.mat&&(t.mat.emissive.set(16754768),t.mat.emissiveIntensity=2.4,t.mat.color.set(8014376));for(let e of this.checkpoints)e.lit||this.lightCheckpoint(e);this.audio.play(`lanternLight`),this.audio.play(`victory`),this.rig.shake(.3,0,.5,.4);let n=t.flame;for(let e=0;e<80;e++){let e=Math.random()*Math.PI*2,t=2+Math.random()*5;this.world.glow.emit({x:n.x,y:n.y-.6,z:n.z+.4,vx:Math.cos(e)*t,vy:1+Math.random()*4,vz:Math.sin(e)*t*.6,life:1.2+Math.random()*1.2,size:.14,color:Math.random()<.6?16756816:16773320,alpha:1,fade:1,drag:1.2})}this.fx.spawn(op.ringEmber,{x:n.x,y:e.greatLantern.pos.y+.1,z:n.z,size:2,ground:!0,grow:7,life:.9,fade:!0,glow:1.8})}showResults(){this.mode=`results`,this.hud.setCaption(``),this.hud.setBars(!1);let e=Math.round(this.stats.time),t=Math.floor(e/60),n=String(e%60).padStart(2,`0`);this.hud.setEndingStats(`<div>걸린 시간</div><div class="v">${t}분 ${n}초</div><div>쓰러진 횟수</div><div class="v">${this.stats.deaths}번</div><div>잠재운 적</div><div class="v">${this.stats.kills}</div>`),this.hud.show(`ending`,!0),this.events.push(`ending`)}exposeDebug(){let e=this;window.__GAME__={get state(){return{mode:e.mode,paused:e.paused,x:e.player.pos.x,y:e.player.pos.y,z:e.player.pos.z,hp:e.player.hp,pstate:e.player.state,talked:e.talked,bossActive:e.bossActive,bossDefeated:e.bossDefeated,bossHp:e.boss.hp,bossPhase:e.boss.phase,bossState:e.boss.state,lanternLit:e.lanternLit,checkpoints:e.checkpoints.map(e=>e.lit),enemiesAlive:e.enemies.filter(e=>e.alive).length,enemiesNear:e.enemies.filter(t=>t.alive&&t.distTo(e.player.pos.x,e.player.pos.z)<10).map(e=>`${e.kind}:${e.state}`),enemiesClose:e.enemies.filter(t=>t.alive&&t.distTo(e.player.pos.x,e.player.pos.z)<5).map(e=>`${e.kind}:${e.state}`),projectiles:e.projectiles.length,stats:{...e.stats},events:e.events.slice(-20)}},frameTimes:()=>e.frameTimes.slice(),workTimes:()=>e.workTimes.slice(),clearFrameTimes:()=>{e.frameTimes.length=0,e.workTimes.length=0},renderer:()=>({calls:e.renderer.info.render.calls,triangles:e.renderer.info.render.triangles,textures:e.renderer.info.memory.textures,geometries:e.renderer.info.memory.geometries}),bot(t,n=!1){e.bot.enabled=t,e.bot.passive=n},botLog:()=>e.bot.log.slice(-30),teleport(t,n){e.player.pos.set(t,e.world.level.terrain.heightAt(t,n),n),e.rig.snap(e.player.pos),e.bot.resyncTo(t)},setPost(t){e.post.enabled=t},setHp(t){e.player.hp=t},skipTitle(){e.mode===`title`&&e.startIntro(),e.timeline?.skip()},captureFrames:(t,n,r,i,a=1)=>e.captureFrames(t,n,r,i,a)}}};async function gh(){let i=[new FontFace(`Galmuri11`,`url(${e}) format('woff2')`,{weight:`400`}),new FontFace(`Galmuri11`,`url(${t}) format('woff2')`,{weight:`700`}),new FontFace(`Galmuri14`,`url(${n}) format('woff2')`),new FontFace(`Galmuri9`,`url(${r}) format('woff2')`)];await Promise.all(i.map(async e=>{try{await e.load(),document.fonts.add(e)}catch{}}))}async function _h(){await gh();let e=document.getElementById(`view`),t=document.getElementById(`ui`);(await hh.create(e,t)).start()}_h().catch(e=>{console.error(e);let t=document.getElementById(`ui`);t&&(t.innerHTML=`<div class="fatal">게임을 시작하지 못했습니다.<br>${String(e)}</div>`)});