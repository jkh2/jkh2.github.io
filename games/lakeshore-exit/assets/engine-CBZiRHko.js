import{a as e,c as t,d as n,f as r,g as i,h as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./index-COVmKBRl.js";var g=1e3,_=1001,v=1002,y=1003,b=1004,x=1005,S=1006,C=1007,w=1008,T=1009,E=1010,D=1011,O=1012,k=1013,A=1014,j=1015,M=1016,N=1017,ee=1018,te=1020,P=35902,ne=35899,re=1021,ie=1022,ae=1023,F=1026,oe=1027,se=1028,ce=1029,I=1030,L=1031,le=1033,R=33776,ue=33777,de=33778,fe=33779,pe=35840,me=35841,z=35842,he=35843,ge=36196,_e=37492,ve=37496,ye=37488,be=37489,xe=37490,Se=37491,Ce=37808,we=37809,Te=37810,Ee=37811,De=37812,Oe=37813,B=37814,ke=37815,Ae=37816,je=37817,V=37818,Me=37819,Ne=37820,Pe=37821,Fe=36492,Ie=36494,Le=36495,Re=36283,ze=36284,Be=36285,Ve=36286,H=2300,He=2301,Ue=2302,We=2303,Ge=2400,Ke=2401,qe=2402,Je=3200,Ye=`srgb`,Xe=`srgb-linear`,Ze=`linear`,Qe=`srgb`,$e=7680,et=35044,tt=35048,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function ut(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function dt(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ft(...e){let t=e.join(` `);t in st||(st[t]=!0,ut(...e))}function pt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var mt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ht=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},gt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),_t=1234567,vt=Math.PI/180,yt=180/Math.PI;function bt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gt[e&255]+gt[e>>8&255]+gt[e>>16&255]+gt[e>>24&255]+`-`+gt[t&255]+gt[t>>8&255]+`-`+gt[t>>16&15|64]+gt[t>>24&255]+`-`+gt[n&63|128]+gt[n>>8&255]+`-`+gt[n>>16&255]+gt[n>>24&255]+gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]).toLowerCase()}function xt(e,t,n){return Math.max(t,Math.min(n,e))}function St(e,t){return(e%t+t)%t}function Ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function wt(e,t,n){return e===t?0:(n-e)/(t-e)}function Tt(e,t,n){return(1-n)*e+n*t}function Et(e,t,n,r){return Tt(e,t,1-Math.exp(-n*r))}function Dt(e,t=1){return t-Math.abs(St(e,t*2)-t)}function Ot(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function kt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function At(e,t){return e+Math.floor(Math.random()*(t-e+1))}function jt(e,t){return e+Math.random()*(t-e)}function Mt(e){return e*(.5-Math.random())}function Nt(e){e!==void 0&&(_t=e);let t=_t+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function U(e){return e*vt}function Pt(e){return e*yt}function Ft(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function It(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Lt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Rt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:ut(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Bt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Vt={DEG2RAD:vt,RAD2DEG:yt,generateUUID:bt,clamp:xt,euclideanModulo:St,mapLinear:Ct,inverseLerp:wt,lerp:Tt,damp:Et,pingpong:Dt,smoothstep:Ot,smootherstep:kt,randInt:At,randFloat:jt,randFloatSpread:Mt,seededRandom:Nt,degToRad:U,radToDeg:Pt,isPowerOfTwo:Ft,ceilPowerOfTwo:It,floorPowerOfTwo:Lt,setQuaternionFromProperEuler:Rt,normalize:Bt,denormalize:zt},W=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:ut(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ut.copy(this).projectOnVector(e),this.sub(Ut)}reflect(e){return this.sub(Ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ut=new G,Wt=new Ht,K=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ft(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(q.makeScale(e,t)),this}rotate(e){return ft(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(q.makeRotation(-e)),this}translate(e,t){return ft(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(q.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},q=new K,Gt=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kt=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qt(){let e={enabled:!0,workingColorSpace:Xe,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ft(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ft(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Xe]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:r,transfer:Qe,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),e}var J=qt();function Jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xt,Zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xt===void 0&&(Xt=at(`canvas`)),Xt.width=e.width,Xt.height=e.height;let t=Xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jt(t[e]/255)*255):t[e]=Jt(t[e]);return{data:t,width:e.width,height:e.height}}return ut(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qt=0,$t=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=bt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(en(r[t].image)):e.push(en(r[t]))}else e=en(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function en(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ut(`Texture: Unable to serialize Texture.`),{})}var tn=0,nn=new G,rn=class e extends ht{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=_,i=_,a=S,o=w,s=ae,c=T,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=bt(),this.name=``,this.source=new $t(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nn).x}get height(){return this.source.getSize(nn).y}get depth(){return this.source.getSize(nn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?ut(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case g:e.x-=Math.floor(e.x);break;case _:e.x=e.x<0?0:1;break;case v:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case g:e.y-=Math.floor(e.y);break;case _:e.y=e.y<0?0:1;break;case v:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=300,rn.DEFAULT_ANISOTROPY=1;var an=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},on=class extends ht{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:S,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let r=new rn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:S,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $t(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=y,this.minFilter=y,this.wrapR=_,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=y,this.minFilter=y,this.wrapR=_,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},un=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],ee=r[7],te=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*ee,i[8]=a*C+o*D+s*j+c*te,i[12]=a*w+o*O+s*M+c*P,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*ee,i[9]=l*C+u*D+d*j+f*te,i[13]=l*w+u*O+d*M+f*P,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*ee,i[10]=p*C+m*D+h*j+g*te,i[14]=p*w+m*O+h*M+g*P,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*ee,i[11]=_*C+v*D+y*j+b*te,i[15]=_*w+v*O+y*M+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},dn=new G,fn=new un,pn=new G(0,0,0),mn=new G(1,1,1),hn=new G,gn=new G,_n=new G,vn=new un,yn=new Ht,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-xt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(xt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:ut(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Sn=0,Cn=new G,wn=new Ht,Tn=new un,En=new G,Dn=new G,On=new G,kn=new Ht,An=new G(1,0,0),Y=new G(0,1,0),jn=new G(0,0,1),Mn={type:`added`},Nn={type:`removed`},Pn={type:`childadded`,child:null},Fn={type:`childremoved`,child:null},In=class e extends ht{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=bt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new bn,r=new Ht,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new un},normalMatrix:{value:new K}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(Y,e)}rotateZ(e){return this.rotateOnAxis(jn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(Y,e)}translateZ(e){return this.translateOnAxis(jn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(dt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):dt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mn),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};In.DEFAULT_UP=new G(0,1,0),In.DEFAULT_MATRIX_AUTO_UPDATE=!0,In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=class extends In{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Rn={type:`move`},zn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Un(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var X=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,J.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=J.workingColorSpace){return this.r=e,this.g=t,this.b=n,J.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=J.workingColorSpace){if(e=St(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Un(i,r,e+1/3),this.g=Un(i,r,e),this.b=Un(i,r,e-1/3)}return J.colorSpaceToWorking(this,r),this}setStyle(e,t=Ye){function n(t){t!==void 0&&parseFloat(t)<1&&ut(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:ut(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);ut(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){let n=Bn[e.toLowerCase()];return n===void 0?ut(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return J.workingToColorSpace(Wn.copy(this),e),Math.round(xt(Wn.r*255,0,255))*65536+Math.round(xt(Wn.g*255,0,255))*256+Math.round(xt(Wn.b*255,0,255))}getHexString(e=Ye){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=J.workingColorSpace){J.workingToColorSpace(Wn.copy(this),t);let n=Wn.r,r=Wn.g,i=Wn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=J.workingColorSpace){return J.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Ye){J.workingToColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,r=Wn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Hn);let n=Tt(Vn.h,Hn.h,t),r=Tt(Vn.s,Hn.s,t),i=Tt(Vn.l,Hn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new X;X.NAMES=Bn;var Gn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new X(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Kn=class extends In{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new G,Jn=new G,Yn=new G,Xn=new G,Zn=new G,Qn=new G,$n=new G,er=new G,tr=new G,nr=new G,rr=new an,ir=new an,ar=new an,or=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){qn.subVectors(r,t),Jn.subVectors(n,t),Yn.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Jn),s=qn.dot(Yn),c=Jn.dot(Jn),l=Jn.dot(Yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Xn.x),s.addScaledVector(a,Xn.y),s.addScaledVector(o,Xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return rr.setScalar(0),ir.setScalar(0),ar.setScalar(0),rr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),ar.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rr,i.x),a.addScaledVector(ir,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Jn.subVectors(e,t),qn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),qn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Zn.subVectors(r,n),Qn.subVectors(i,n),er.subVectors(e,n);let s=Zn.dot(er),c=Qn.dot(er);if(s<=0&&c<=0)return t.copy(n);tr.subVectors(e,r);let l=Zn.dot(tr),u=Qn.dot(tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Zn,a);nr.subVectors(e,i);let f=Zn.dot(nr),p=Qn.dot(nr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return $n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector($n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Zn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,lr):lr.fromBufferAttribute(r,t),lr.applyMatrix4(e.matrixWorld),this.expandByPoint(lr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),vr.subVectors(this.max,_r),dr.subVectors(e.a,_r),fr.subVectors(e.b,_r),pr.subVectors(e.c,_r),mr.subVectors(fr,dr),hr.subVectors(pr,fr),gr.subVectors(dr,pr);let t=[0,-mr.z,mr.y,0,-hr.z,hr.y,0,-gr.z,gr.y,mr.z,0,-mr.x,hr.z,0,-hr.x,gr.z,0,-gr.x,-mr.y,mr.x,0,-hr.y,hr.x,0,-gr.y,gr.x,0];return!xr(t,dr,fr,pr,vr)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,dr,fr,pr,vr))?!1:(yr.crossVectors(mr,hr),t=[yr.x,yr.y,yr.z],xr(t,dr,fr,pr,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new G,new G,new G,new G,new G,new G,new G,new G],lr=new G,ur=new sr,dr=new G,fr=new G,pr=new G,mr=new G,hr=new G,gr=new G,_r=new G,vr=new G,yr=new G,br=new G;function xr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){br.fromArray(e,a);let o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),s=t.dot(br),c=n.dot(br),l=r.dot(br);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Sr=new G,Cr=new W,wr=0,Tr=class extends ht{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=et,this.updateRanges=[],this.gpuType=j,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix4(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyNormalMatrix(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.transformDirection(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),r=Bt(r,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Er=class extends Tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Dr=class extends Tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Or=class extends Tr{constructor(e,t,n){super(new Float32Array(e),t,n)}},kr=new sr,Ar=new G,jr=new G,Mr=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?kr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(jr)),this.expandByPoint(Ar.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nr=0,Pr=new un,Fr=new In,Ir=new G,Lr=new sr,Rr=new sr,zr=new G,Br=class e extends ht{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=bt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rt(e)?Dr:Er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pr.makeRotationFromQuaternion(e),this.applyMatrix4(Pr),this}rotateX(e){return Pr.makeRotationX(e),this.applyMatrix4(Pr),this}rotateY(e){return Pr.makeRotationY(e),this.applyMatrix4(Pr),this}rotateZ(e){return Pr.makeRotationZ(e),this.applyMatrix4(Pr),this}translate(e,t,n){return Pr.makeTranslation(e,t,n),this.applyMatrix4(Pr),this}scale(e,t,n){return Pr.makeScale(e,t,n),this.applyMatrix4(Pr),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Or(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&ut(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)dt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(this.boundingBox.min,Lr.min),this.boundingBox.expandByPoint(zr),zr.addVectors(this.boundingBox.max,Lr.max),this.boundingBox.expandByPoint(zr)):(this.boundingBox.expandByPoint(Lr.min),this.boundingBox.expandByPoint(Lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)dt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(Lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(Lr.min,Rr.min),Lr.expandByPoint(zr),zr.addVectors(Lr.max,Rr.max),Lr.expandByPoint(zr)):(Lr.expandByPoint(Rr.min),Lr.expandByPoint(Rr.max))}Lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)zr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(zr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)zr.fromBufferAttribute(a,t),o&&(Ir.fromBufferAttribute(e,t),zr.add(Ir)),r=Math.max(r,n.distanceToSquared(zr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Tr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let c=new G,l=new G,u=new G,d=new W,f=new W,p=new W,m=new G,h=new G;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new G,y=new G,b=new G,x=new G;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Tr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zr.fromBufferAttribute(e,t),zr.normalize(),e.setXYZ(t,zr.x,zr.y,zr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Tr(a,r,i)}if(this.index===null)return ut(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Vr=new G,Hr=new G,Ur=new K,Wr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vr.subVectors(n,t).cross(Hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ur.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gr=0,Kr=class extends ht{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gr++}),this.uuid=bt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$e,this.stencilZFail=$e,this.stencilZPass=$e,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?ut(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new X().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Wr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new W().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},qr=new G,Jr=new G,Yr=new G,Xr=new G,Zr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jr.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Xr.dot(this.direction),s=-Xr.dot(Yr),c=Xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jr).addScaledVector(Yr,d),f}intersectSphere(e,t){if(e.radius<0)return null;qr.subVectors(e.center,this.origin);let n=qr.dot(this.direction),r=qr.dot(qr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let ee=S/w,te=C/w,P=1/w,ne=T-ee*D,re=E-te*D,ie=O-ee*A,ae=k-te*A,F=j-ee*N,oe=M-te*N,se=F*ae-oe*ie,ce=ne*oe-re*F,I=ie*re-ae*ne;if(r){if(se<0||ce<0||I<0)return null}else if((se<0||ce<0||I<0)&&(se>0||ce>0||I>0))return null;let L=se+ce+I;if(L===0)return null;let le=P*(se*D+ce*A+I*N);return(L>0?le<0:le>0)?null:this.at(le/L,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qr=class extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new X(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$r=new un,ei=new Zr,ti=new Mr,ni=new G,ri=new G,ii=new G,ai=new G,oi=new G,si=new G,ci=new G,li=new G,Z=class extends In{constructor(e=new Br,t=new Qr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){si.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(oi.fromBufferAttribute(s,e),a?si.addScaledVector(oi,r):si.addScaledVector(oi.sub(t),r))}t.add(si)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ti.copy(n.boundingSphere),ti.applyMatrix4(i),ei.copy(e.ray).recast(e.near),!(ti.containsPoint(ei.origin)===!1&&(ei.intersectSphere(ti,ni)===null||ei.origin.distanceToSquared(ni)>(e.far-e.near)**2))&&($r.copy(i).invert(),ei.copy(e.ray).applyMatrix4($r),(n.boundingBox===null||ei.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ei)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=di(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=di(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=di(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=di(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ui(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;li.copy(s),li.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(li);return l<n.near||l>n.far?null:{distance:l,point:li.clone(),object:e}}function di(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ri),e.getVertexPosition(c,ii),e.getVertexPosition(l,ai);let u=ui(e,t,n,r,ri,ii,ai,ci);if(u){let e=new G;or.getBarycoord(ci,ri,ii,ai,e),i&&(u.uv=or.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=or.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=or.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};or.getNormal(ri,ii,ai,t.normal),u.face=t,u.barycoord=e}return u}var fi=class extends rn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=y,l=y,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class extends Tr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},mi=new un,hi=new un,gi=[],_i=new sr,vi=new un,yi=new Z,bi=new Mr,xi=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),_i.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(_i)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),bi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(bi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(n),e.ray.intersectsSphere(bi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,mi),hi.multiplyMatrices(n,mi),yi.matrixWorld=hi,yi.raycast(e,gi);for(let e=0,n=gi.length;e<n;e++){let n=gi[e];n.instanceId=i,n.object=this,t.push(n)}gi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fi(new Float32Array(r*this.count),r,this.count,se,j));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Si=new Mr,Ci=new W(.5,.5),wi=new G,Ti=class{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,i=new Wr,a=new Wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476+Ci.distanceTo(e.center),Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(wi.x=r.normal.x>0?e.max.x:e.min.x,wi.y=r.normal.y>0?e.max.y:e.min.y,wi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ei=class extends Kr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new X(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Di=new G,Oi=new G,ki=new un,Ai=new Zr,ji=new Mr,Mi=new G,Ni=new G,Pi=class extends In{constructor(e=new Br,t=new Ei){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Di.fromBufferAttribute(t,e-1),Oi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Di.distanceTo(Oi);e.setAttribute(`lineDistance`,new Or(n,1))}else ut(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),ji.radius+=i,e.ray.intersectsSphere(ji)===!1)return;ki.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(ki);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Fi(this,e,Ai,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Fi(this,e,Ai,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Fi(this,e,Ai,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Fi(this,e,Ai,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Fi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Di.fromBufferAttribute(s,i),Oi.fromBufferAttribute(s,a),n.distanceSqToSegment(Di,Oi,Mi,Ni)>r)return;Mi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Mi);if(!(c<t.near||c>t.far))return{distance:c,point:Ni.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ii=new G,Li=new G,Ri=class extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ii.fromBufferAttribute(t,e),Li.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ii.distanceTo(Li);e.setAttribute(`lineDistance`,new Or(n,1))}else ut(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},zi=class extends rn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=y,this.minFilter=y,this.generateMipmaps=!1,this.needsUpdate=!0}},Bi=class extends rn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vi=class extends rn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hi=class extends rn{constructor(e,t,n=A,r,i,a,o=y,s=y,c,l=F,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $t(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ui=class extends Hi{constructor(e,t=A,n=301,r,i,a=y,o=y,s,c=F){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wi=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gi=class e extends Br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Or(c,3)),this.setAttribute(`normal`,new Or(l,3)),this.setAttribute(`uv`,new Or(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ki=class e extends Br{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new G,l=new W;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Or(a,3)),this.setAttribute(`normal`,new Or(o,3)),this.setAttribute(`uv`,new Or(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qi=class e extends Br{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Or(u,3)),this.setAttribute(`normal`,new Or(d,3)),this.setAttribute(`uv`,new Or(f,2));function _(){let a=new G,_=new G,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new W,m=new G,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ji=class e extends qi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yi=class e extends Br{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Or(i,3)),this.setAttribute(`normal`,new Or(i.slice(),3)),this.setAttribute(`uv`,new Or(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new G,r=new G,i=new G;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new G;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new G;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new G,t=new G,n=new G,r=new G,o=new W,s=new W,c=new W;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Xi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new W:new G);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,r=[],i=[],a=[],o=new G,s=new un;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new G)}i[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(xt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(xt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Xi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new W){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qi=class extends Zi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function $i(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ea=new G,ta=new G,na=new $i,ra=new $i,ia=new $i,aa=class extends Xi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new G){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ta.subVectors(r[0],r[1]).add(r[0]),c=ta);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ea.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ea),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),na.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ra.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ia.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(na.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ra.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ia.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(na.calc(s),ra.calc(s),ia.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function sa(e,t){let n=1-e;return n*n*t}function ca(e,t){return 2*(1-e)*e*t}function la(e,t){return e*e*t}function ua(e,t,n,r){return sa(e,t)+ca(e,n)+la(e,r)}function da(e,t){let n=1-e;return n*n*n*t}function fa(e,t){let n=1-e;return 3*n*n*e*t}function pa(e,t){return 3*(1-e)*e*e*t}function ma(e,t){return e*e*e*t}function ha(e,t,n,r,i){return da(e,t)+fa(e,n)+pa(e,r)+ma(e,i)}var ga=class extends Xi{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Xi{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ha(e,r.x,i.x,a.x,o.x),ha(e,r.y,i.y,a.y,o.y),ha(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Xi{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Xi{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Xi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Xi{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ua(e,r.x,i.x,a.x),ua(e,r.y,i.y,a.y),ua(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new W){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(oa(o,s.x,c.x,l.x,u.x),oa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Qi,CatmullRomCurve3:aa,CubicBezierCurve:ga,CubicBezierCurve3:_a,EllipseCurve:Zi,LineCurve:va,LineCurve3:ya,QuadraticBezierCurve:ba,QuadraticBezierCurve3:xa,SplineCurve:Sa}),wa=class extends Xi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Ca[n.type]().fromJSON(n))}return this}},Ta=class extends wa{constructor(e){super(),this.type=`Path`,this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new W(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ba(this.currentPoint.clone(),new W(e,t),new W(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ga(this.currentPoint.clone(),new W(e,t),new W(n,r),new W(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Zi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class extends Ta{constructor(e){super(e),this.uuid=bt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ta().fromJSON(n))}return this}};function Da(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Oa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Fa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Aa(a,o,n,s,c,l,0),o}function Oa(e,t,n,r,i){let a;if(i===ao(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=no(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=no(i/r|0,e[i],e[i+1],a);return a&&Ja(a,a.next)&&(ro(a),a=a.next),a}function ka(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Ja(n,n.next)||qa(n.prev,n,n.next)===0)){if(ro(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Aa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ba(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ma(e,r,i,a):ja(e))t.push(c.i,e.i,l.i),ro(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Na(ka(e),t),Aa(e,t,n,r,i,a,2)):o===2&&Pa(e,t,n,r,i,a):Aa(ka(e),t,n,r,i,a,1);break}}}function ja(e){let t=e.prev,n=e,r=e.next;if(qa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ga(i,s,a,c,o,l,m.x,m.y)&&qa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ma(e,t,n,r){let i=e.prev,a=e,o=e.next;if(qa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Ha(p,m,t,n,r),v=Ha(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ga(s,u,c,d,l,f,y.x,y.y)&&qa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ga(s,u,c,d,l,f,b.x,b.y)&&qa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Na(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Ja(r,i)&&Ya(r,n,n.next,i)&&$a(r,i)&&$a(i,r)&&(t.push(r.i,n.i,i.i),ro(n),ro(n.next),n=e=i),n=n.next}while(n!==e);return ka(n)}function Pa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ka(o,e)){let s=to(o,e);o=ka(o,o.next),s=ka(s,s.next),Aa(o,t,n,r,i,a,0),Aa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Fa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Oa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ua(o))}i.sort(Ia);for(let e=0;e<i.length;e++)n=La(i[e],n);return n}function Ia(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function La(e,t){let n=Ra(e,t);if(!n)return t;let r=to(n,e);return ka(r,r.next),ka(n,n.next)}function Ra(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Ja(e,n))return n;do{if(Ja(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Wa(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);$a(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&za(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function za(e,t){return qa(e.prev,e,t.prev)<0&&qa(t.next,e,e.next)<0}function Ba(e,t,n,r){let i=e;do i.z===0&&(i.z=Ha(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Va(i)}function Va(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Ha(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ua(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Wa(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ga(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Wa(e,t,n,r,i,a,o,s)}function Ka(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Qa(e,t)&&($a(e,t)&&$a(t,e)&&eo(e,t)&&(qa(e.prev,e,t.prev)||qa(e,t.prev,t))||Ja(e,t)&&qa(e.prev,e,e.next)>0&&qa(t.prev,t,t.next)>0)}function qa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Ja(e,t){return e.x===t.x&&e.y===t.y}function Ya(e,t,n,r){let i=Za(qa(e,t,n)),a=Za(qa(e,t,r)),o=Za(qa(n,r,e)),s=Za(qa(n,r,t));return!!(i!==a&&o!==s||i===0&&Xa(e,n,t)||a===0&&Xa(e,r,t)||o===0&&Xa(n,e,r)||s===0&&Xa(n,t,r))}function Xa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Za(e){return e>0?1:e<0?-1:0}function Qa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ya(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function $a(e,t){return qa(e.prev,e,e.next)<0?qa(e,t,e.next)>=0&&qa(e,e.prev,t)>=0:qa(e,t,e.prev)<0||qa(e,e.next,t)<0}function eo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function to(e,t){let n=io(e.i,e.x,e.y),r=io(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function no(e,t,n,r){let i=io(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ro(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function io(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ao(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var oo=class{static triangulate(e,t,n=2){return Da(e,t,n)}},so=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];co(e),lo(n,e);let a=e.length;t.forEach(co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,lo(n,t[e]);let o=oo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function lo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var uo=class e extends Br{constructor(e=new Ea([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Or(r,3)),this.setAttribute(`uv`,new Or(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?fo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new G,b=new G,x=new G}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!so.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];so.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||dt(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new W(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new W(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,ee=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),ee=ee.concat(N)}let te;if(p===0)te=so.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);F(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);F(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}te=so.triangulateShape(e,t)}let P=te.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],ee[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),F(x.x,x.y,x.z)):F(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],ee[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),F(x.x,x.y,x.z)):F(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);F(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?F(i.x,i.y+g[s-1].y,g[s-1].x+n):F(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=te[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=te[e];oe(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=te[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function F(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){ce(e),ce(t),ce(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[2])}function se(e,t,i,a){ce(e),ce(t),ce(a),ce(t),ce(i),ce(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);I(s[0]),I(s[1]),I(s[3]),I(s[1]),I(s[2]),I(s[3])}function ce(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function I(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return po(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ca[i.type]().fromJSON(i)),new e(r,t.options)}},fo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new W(a,o),new W(s,c),new W(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new W(o,1-c),new W(l,1-d),new W(f,1-m),new W(h,1-_)]:[new W(s,1-c),new W(u,1-d),new W(p,1-m),new W(g,1-_)]}};function po(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var mo=class e extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ho=class e extends Br{constructor(e=[new W(0,-.5),new W(.5,0),new W(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=xt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new G,d=new W,f=new G,p=new G,m=new G,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Or(a,3)),this.setAttribute(`uv`,new Or(o,2)),this.setAttribute(`normal`,new Or(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},go=class e extends Br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Or(p,3)),this.setAttribute(`normal`,new Or(m,3)),this.setAttribute(`uv`,new Or(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class e extends Br{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new G,p=new W;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Or(s,3)),this.setAttribute(`normal`,new Or(c,3)),this.setAttribute(`uv`,new Or(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},vo=class e extends Br{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Or(p,3)),this.setAttribute(`normal`,new Or(m,3)),this.setAttribute(`uv`,new Or(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},yo=class e extends Br{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new G,f=new G,p=new G;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Or(c,3)),this.setAttribute(`normal`,new Or(l,3)),this.setAttribute(`uv`,new Or(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function bo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(So(i))i.isRenderTargetTexture?(ut(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(So(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function xo(e){let t={};for(let n=0;n<e.length;n++){let r=bo(e[n]);for(let e in r)t[e]=r[e]}return t}function So(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Co(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function wo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:J.workingColorSpace}var To={clone:bo,merge:xo},Eo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Do=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oo=class extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eo,this.fragmentShader=Do,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=Co(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new X().setHex(r.value);break;case`v2`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new an().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new un().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends Oo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Q=class extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new X(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ao=class extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Je,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function No(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Po=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Fo=class extends Po{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ge,endingEnd:Ge}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ke:i=e,o=2*t-n;break;case qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ke:a=e,s=2*n-t;break;case qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Io=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Lo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ro=class extends Po{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Vo(n,t,g,y,r);i[p]=zo(x,o,_,b,m)}return i}};function zo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Bo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Vo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=zo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Bo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ho=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),No(e.settings)&&(n.settings={inTangents:Mo(e.settings.inTangents,Array),outTangents:Mo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ro(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case H:t=this.InterpolantFactoryMethodDiscrete;break;case He:t=this.InterpolantFactoryMethodLinear;break;case Ue:t=this.InterpolantFactoryMethodSmooth;break;case We:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return ut(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return H;case this.InterpolantFactoryMethodLinear:return He;case this.InterpolantFactoryMethodSmooth:return Ue;case this.InterpolantFactoryMethodBezier:return We}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;No(this.settings)&&(Uo(this.settings.inTangents,e),Uo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(dt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(dt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){dt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){dt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){dt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ue,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,No(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ho.prototype.ValueTypeName=``,Ho.prototype.TimeBufferType=Float32Array,Ho.prototype.ValueBufferType=Float32Array,Ho.prototype.DefaultInterpolation=He;var Wo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Wo.prototype.ValueTypeName=`bool`,Wo.prototype.ValueBufferType=Array,Wo.prototype.DefaultInterpolation=H,Wo.prototype.InterpolantFactoryMethodLinear=void 0,Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Go.prototype.ValueTypeName=`color`;var Ko=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`number`;var qo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ht.slerpFlat(i,0,a,c-o,a,c,s);return i}},Jo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName=`quaternion`,Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Yo.prototype.ValueTypeName=`string`,Yo.prototype.ValueBufferType=Array,Yo.prototype.DefaultInterpolation=H,Yo.prototype.InterpolantFactoryMethodLinear=void 0,Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName=`vector`;var Zo={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Qo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Qo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Qo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var $o=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},es=class{constructor(e){this.manager=e===void 0?$o:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};es.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ts=new WeakMap,ns=class extends es{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Zo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ts.get(a);e===void 0&&(e=[],ts.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=at(`img`);function s(){l(),t&&t(this);let n=ts.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ts.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Zo.remove(`image:${e}`);let n=ts.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ts.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zo.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},rs=class extends es{constructor(e){super(e)}load(e,t,n,r){let i=new rn,a=new ns(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},is=class extends In{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new X(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},as=class extends is{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new X(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},os=new un,ss=new G,cs=new G,ls=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=T,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ss.setFromMatrixPosition(e.matrixWorld),t.position.copy(ss),cs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cs),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){os.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(os,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(os)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},us=new G,ds=new Ht,fs=new G,ps=class extends In{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(us,ds,fs),fs.x===1&&fs.y===1&&fs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(us,ds,fs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new G,hs=new W,gs=new W,_s=class extends ps{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yt*2*Math.atan(Math.tan(vt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,hs,gs),t.subVectors(gs,hs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=class extends ls{constructor(){super(new _s(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends is{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bs=class extends ps{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xs=class extends ls{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends is{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new xs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cs=class extends Br{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ws=-90,Ts=1,Es=class extends In{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new _s(ws,Ts,e,t);r.layers=this.layers,this.add(r);let i=new _s(ws,Ts,e,t);i.layers=this.layers,this.add(i);let a=new _s(ws,Ts,e,t);a.layers=this.layers,this.add(a);let o=new _s(ws,Ts,e,t);o.layers=this.layers,this.add(o);let s=new _s(ws,Ts,e,t);s.layers=this.layers,this.add(s);let c=new _s(ws,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ds=class extends _s{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Os=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ks.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ks(){this._document.hidden===!1&&this.reset()}var As=`\\[\\]\\.:\\/`,js=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ms=`[^\\[\\]\\.:\\/]`,Ns=`[^`+As.replace(`\\.`,``)+`]`,Ps=`((?:WC+[\\/:])*)`.replace(`WC`,Ms),Fs=`(WCOD+)?`.replace(`WCOD`,Ns),Is=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ms),Ls=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ms),Rs=RegExp(`^`+Ps+Fs+Is+Ls+`$`),zs=[`material`,`materials`,`bones`,`map`],Bs=class{constructor(e,t,n){let r=n||Vs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(js,``)}static parseTrackName(e){let t=Rs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);zs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ut(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){dt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){dt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){dt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){dt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){dt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){dt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){dt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;dt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){dt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){dt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vs.Composite=Bs,Vs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Vs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Vs.prototype.GetterByBindingType=[Vs.prototype._getValue_direct,Vs.prototype._getValue_array,Vs.prototype._getValue_arrayElement,Vs.prototype._getValue_toArray],Vs.prototype.SetterByBindingTypeAndVersioning=[[Vs.prototype._setValue_direct,Vs.prototype._setValue_direct_setNeedsUpdate,Vs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vs.prototype._setValue_array,Vs.prototype._setValue_array_setNeedsUpdate,Vs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vs.prototype._setValue_arrayElement,Vs.prototype._setValue_arrayElement_setNeedsUpdate,Vs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vs.prototype._setValue_fromArray,Vs.prototype._setValue_fromArray_setNeedsUpdate,Vs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Hs(e,t,n,r){let i=Us(r);switch(n){case re:return e*t;case se:return e*t/i.components*i.byteLength;case ce:return e*t/i.components*i.byteLength;case I:return e*t*2/i.components*i.byteLength;case L:return e*t*2/i.components*i.byteLength;case ie:return e*t*3/i.components*i.byteLength;case ae:return e*t*4/i.components*i.byteLength;case le:return e*t*4/i.components*i.byteLength;case R:case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:case he:return Math.max(e,16)*Math.max(t,8)/4;case pe:case z:return Math.max(e,8)*Math.max(t,8)/2;case ge:case _e:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case xe:case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Te:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case B:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case V:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Be:case Ve:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Us(e){switch(e){case T:case E:return{byteLength:1,components:1};case O:case D:case M:return{byteLength:2,components:1};case N:case ee:return{byteLength:2,components:4};case A:case k:case j:return{byteLength:4,components:1};case P:case ne:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?ut(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ws(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Gs(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ks={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},$={common:{diffuse:{value:new X(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new X(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new X(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},qs={basic:{uniforms:xo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Ks.meshbasic_vert,fragmentShader:Ks.meshbasic_frag},lambert:{uniforms:xo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},envMapIntensity:{value:1}}]),vertexShader:Ks.meshlambert_vert,fragmentShader:Ks.meshlambert_frag},phong:{uniforms:xo([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new X(0)},specular:{value:new X(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ks.meshphong_vert,fragmentShader:Ks.meshphong_frag},standard:{uniforms:xo([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new X(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ks.meshphysical_vert,fragmentShader:Ks.meshphysical_frag},toon:{uniforms:xo([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new X(0)}}]),vertexShader:Ks.meshtoon_vert,fragmentShader:Ks.meshtoon_frag},matcap:{uniforms:xo([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Ks.meshmatcap_vert,fragmentShader:Ks.meshmatcap_frag},points:{uniforms:xo([$.points,$.fog]),vertexShader:Ks.points_vert,fragmentShader:Ks.points_frag},dashed:{uniforms:xo([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ks.linedashed_vert,fragmentShader:Ks.linedashed_frag},depth:{uniforms:xo([$.common,$.displacementmap]),vertexShader:Ks.depth_vert,fragmentShader:Ks.depth_frag},normal:{uniforms:xo([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Ks.meshnormal_vert,fragmentShader:Ks.meshnormal_frag},sprite:{uniforms:xo([$.sprite,$.fog]),vertexShader:Ks.sprite_vert,fragmentShader:Ks.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ks.background_vert,fragmentShader:Ks.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Ks.backgroundCube_vert,fragmentShader:Ks.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ks.cube_vert,fragmentShader:Ks.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ks.equirect_vert,fragmentShader:Ks.equirect_frag},distance:{uniforms:xo([$.common,$.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ks.distance_vert,fragmentShader:Ks.distance_frag},shadow:{uniforms:xo([$.lights,$.fog,{color:{value:new X(0)},opacity:{value:1}}]),vertexShader:Ks.shadow_vert,fragmentShader:Ks.shadow_frag}};qs.physical={uniforms:xo([qs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new X(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new X(0)},specularColor:{value:new X(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Ks.meshphysical_vert,fragmentShader:Ks.meshphysical_frag};var Js={r:0,b:0,g:0},Ys=new un,Xs=new K;Xs.set(-1,0,0,0,1,0,0,0,1);function Zs(e,t,n,r,i,a){let o=new X(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Z(new Gi(1,1,1),new Oo({name:`BackgroundCubeMaterial`,uniforms:bo(qs.backgroundCube.uniforms),vertexShader:qs.backgroundCube.vertexShader,fragmentShader:qs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ys.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xs),l.material.toneMapped=J.getTransfer(i.colorSpace)!==Qe,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new go(2,2),new Oo({name:`BackgroundMaterial`,uniforms:bo(qs.background.uniforms),vertexShader:qs.background.vertexShader,fragmentShader:qs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=J.getTransfer(i.colorSpace)!==Qe,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Js,wo(e)),n.buffers.color.setClear(Js.r,Js.g,Js.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Qs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function $s(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ec(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(ut(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&ut(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function tc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wr,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var nc=4,rc=6,ic=20,ac=256,oc=new bs,sc=new X,cc=null,lc=0,uc=0,dc=!1,fc=new G,pc=new G,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fc}=i;cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=dc,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:S,minFilter:S,generateMipmaps:!1,type:M,format:ae,colorSpace:Xe,depthBuffer:!1},r=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hc(r)),this._blurMaterial=yc(r,e,t),this._ggxMaterial=vc(r,e,t)}return r}_compileMaterial(e){let t=new Z(new Br,e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,r,i){let a=new _s(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(sc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new Gi,new Qr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(sc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;_c(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;_c(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,oc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-nc?n-d+nc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,_c(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,oc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,_c(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,oc)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];_c(t,3*l*(r>this._lodMax-nc?r-this._lodMax+nc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,oc)}};function hc(e){let t=[],n=[],r=e,i=e-nc+1+rc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?pc.set(1,r,n):e===1?pc.set(-n,1,-r):e===2?pc.set(-n,r,1):e===3?pc.set(-1,r,-n):e===4?pc.set(-n,-1,r):pc.set(n,r,-1),pc.toArray(l,(e*6+t)*3)}}let u=new Br;u.setAttribute(`position`,new Tr(c,3)),u.setAttribute(`outputDirection`,new Tr(l,3)),n.push(new Z(u,null)),r>nc&&r--}return{lodMeshes:n,sizeLods:t}}function gc(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function _c(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function vc(e,t,n){return new Oo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ac,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function yc(e,t,n){return new Oo({name:`SphericalGaussianBlur`,defines:{SAMPLES:ic,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(){return new Oo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xc(){return new Oo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Cc=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gi(5,5,5),i=new Oo({name:`CubemapFromEquirect`,uniforms:bo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=S),new Es(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function wc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Cc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new mc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new mc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Tc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ft(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ec(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Dr:Er)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Dc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Oc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:dt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function kc(e,t,n){let r=new WeakMap,i=new an;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=j,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ac(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var jc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mc(e,t,n,r,i,a){let o=new sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Br;l.setAttribute(`position`,new Or([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Or([0,2,0,0,2,0],2));let u=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Z(l,u),f=new bs(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new sn(t,n,{type:M,depthBuffer:!1,stencilBuffer:!1}),c=new sn(t,n,{type:M,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},J.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=jc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Nc=new rn,Pc=new Hi(1,1),Fc=new cn,Ic=new ln,Lc=new Bi,Rc=[],zc=[],Bc=new Float32Array(16),Vc=new Float32Array(9),Hc=new Float32Array(4);function Uc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Rc[i];if(a===void 0&&(a=new Float32Array(i),Rc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Gc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Kc(e,t){let n=zc[t];n===void 0&&(n=new Int32Array(t),zc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2fv(this.addr,t),Gc(n,t)}}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wc(n,t))return;e.uniform3fv(this.addr,t),Gc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4fv(this.addr,t),Gc(n,t)}}function Zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Hc.set(r),e.uniformMatrix2fv(this.addr,!1,Hc),Gc(n,r)}}function Qc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Vc.set(r),e.uniformMatrix3fv(this.addr,!1,Vc),Gc(n,r)}}function $c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Gc(n,t)}else{if(Wc(n,r))return;Bc.set(r),e.uniformMatrix4fv(this.addr,!1,Bc),Gc(n,r)}}function el(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2iv(this.addr,t),Gc(n,t)}}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3iv(this.addr,t),Gc(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4iv(this.addr,t),Gc(n,t)}}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wc(n,t))return;e.uniform2uiv(this.addr,t),Gc(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wc(n,t))return;e.uniform3uiv(this.addr,t),Gc(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wc(n,t))return;e.uniform4uiv(this.addr,t),Gc(n,t)}}function cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Pc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Pc):a=Nc,n.setTexture2D(t||a,i)}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ic,i)}function ul(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Lc,i)}function dl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fc,i)}function fl(e){switch(e){case 5126:return qc;case 35664:return Jc;case 35665:return Yc;case 35666:return Xc;case 35674:return Zc;case 35675:return Qc;case 35676:return $c;case 5124:case 35670:return el;case 35667:case 35671:return tl;case 35668:case 35672:return nl;case 35669:case 35673:return rl;case 5125:return il;case 36294:return al;case 36295:return ol;case 36296:return sl;case 35678:case 36198:case 36298:case 36306:case 35682:return cl;case 35679:case 36299:case 36307:return ll;case 35680:case 36300:case 36308:case 36293:return ul;case 36289:case 36303:case 36311:case 36292:return dl}}function pl(e,t){e.uniform1fv(this.addr,t)}function ml(e,t){let n=Uc(t,this.size,2);e.uniform2fv(this.addr,n)}function hl(e,t){let n=Uc(t,this.size,3);e.uniform3fv(this.addr,n)}function gl(e,t){let n=Uc(t,this.size,4);e.uniform4fv(this.addr,n)}function _l(e,t){let n=Uc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vl(e,t){let n=Uc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yl(e,t){let n=Uc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function bl(e,t){e.uniform1iv(this.addr,t)}function xl(e,t){e.uniform2iv(this.addr,t)}function Sl(e,t){e.uniform3iv(this.addr,t)}function Cl(e,t){e.uniform4iv(this.addr,t)}function wl(e,t){e.uniform1uiv(this.addr,t)}function Tl(e,t){e.uniform2uiv(this.addr,t)}function El(e,t){e.uniform3uiv(this.addr,t)}function Dl(e,t){e.uniform4uiv(this.addr,t)}function Ol(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Pc:Nc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function kl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ic,a[e])}function Al(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Lc,a[e])}function jl(e,t,n){let r=this.cache,i=t.length,a=Kc(n,i);Wc(r,a)||(e.uniform1iv(this.addr,a),Gc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fc,a[e])}function Ml(e){switch(e){case 5126:return pl;case 35664:return ml;case 35665:return hl;case 35666:return gl;case 35674:return _l;case 35675:return vl;case 35676:return yl;case 5124:case 35670:return bl;case 35667:case 35671:return xl;case 35668:case 35672:return Sl;case 35669:case 35673:return Cl;case 5125:return wl;case 36294:return Tl;case 36295:return El;case 36296:return Dl;case 35678:case 36198:case 36298:case 36306:case 35682:return Ol;case 35679:case 36299:case 36307:return kl;case 35680:case 36300:case 36308:case 36293:return Al;case 36289:case 36303:case 36311:case 36292:return jl}}var Nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fl(t.type)}},Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ml(t.type)}},Fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Il=/(\w+)(\])?(\[|\.)?/g;function Ll(e,t){e.seq.push(t),e.map[t.id]=t}function Rl(e,t,n){let r=e.name,i=r.length;for(Il.lastIndex=0;;){let a=Il.exec(r),o=Il.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Ll(n,l===void 0?new Nl(s,e,t):new Pl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Fl(s),Ll(n,e)),n=e}}}var zl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Rl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Bl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Vl=37297,Hl=0;function Ul(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Wl=new K;function Gl(e){J._getMatrix(Wl,J.workingColorSpace,e);let t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(J.getTransfer(e)){case Ze:return[t,`LinearTransferOETF`];case Qe:return[t,`sRGBTransferOETF`];default:return ut(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Kl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ul(e.getShaderSource(t),r)}return i}function ql(e,t){let n=Gl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Jl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Yl(e,t){let n=Jl[t];return n===void 0?(ut(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Xl=new G;function Zl(){return J.getLuminanceCoefficients(Xl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Xl.x.toFixed(4)}, ${Xl.y.toFixed(4)}, ${Xl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Ql(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(tu).join(`
`)}function $l(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function eu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function tu(e){return e!==``}function nu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iu=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(e){return e.replace(iu,su)}var ou=new Map;function su(e,t){let n=Ks[t];if(n===void 0){let e=ou.get(t);if(e!==void 0)n=Ks[e],ut(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return au(n)}var cu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(e){return e.replace(cu,uu)}function uu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function du(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var fu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function pu(e){return fu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var mu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function hu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:mu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var gu={302:`ENVMAP_MODE_REFRACTION`};function _u(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:gu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var vu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function yu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:vu[e.combine]||`ENVMAP_BLENDING_NONE`}function bu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function xu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pu(n),l=hu(n),u=_u(n),d=yu(n),f=bu(n),p=Ql(n),m=$l(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(tu).join(`
`),_.length>0&&(_+=`
`)):(g=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(tu).join(`
`),_=[du(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ks.tonemapping_pars_fragment,n.toneMapping===0?``:Yl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ks.colorspace_pars_fragment,ql(`linearToOutputTexel`,n.outputColorSpace),Zl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(tu).join(`
`)),o=au(o),o=nu(o,n),o=ru(o,n),s=au(s),s=nu(s,n),s=ru(s,n),o=lu(o),s=lu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Bl(i,i.VERTEX_SHADER,y),S=Bl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Kl(i,x,`vertex`),n=Kl(i,S,`fragment`);dt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):ut(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new zl(i,h),T=eu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Vl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Su=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=Su++,this.code=e,this.usedTimes=0}};function Tu(e){return e===1030||e===37490||e===36285}function Eu(e,t,n,r,i,a){let o=new xn,s=new Cu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&ut(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=qs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,ee=h.isBatchedMesh===!0,te=!!i.map,P=!!i.matcap,ne=!!x,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,F=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,ce=!!i.metalnessMap,I=!!i.roughnessMap,L=i.anisotropy>0,le=i.clearcoat>0,R=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=L&&!!i.anisotropyMap,z=le&&!!i.clearcoatMap,he=le&&!!i.clearcoatNormalMap,ge=le&&!!i.clearcoatRoughnessMap,_e=de&&!!i.iridescenceMap,ve=de&&!!i.iridescenceThicknessMap,ye=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=pe&&!!i.transmissionMap,Te=pe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ee,batchingColor:ee&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:J.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:F,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:F&&i.normalMapType===1,normalMapTangentSpace:F&&i.normalMapType===0,packedNormalMap:F&&i.normalMapType===0&&Tu(i.normalMap.format),metalnessMap:ce,roughnessMap:I,anisotropy:L,anisotropyMap:me,clearcoat:le,clearcoatMap:z,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:R,retroreflection:ue,iridescence:de,iridescenceMap:_e,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:pe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:te&&m(i.map.channel),aoMapUv:re&&m(i.aoMap.channel),lightMapUv:ie&&m(i.lightMap.channel),bumpMapUv:ae&&m(i.bumpMap.channel),normalMapUv:F&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:ce&&m(i.metalnessMap.channel),roughnessMapUv:I&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:z&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(F||L),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(te||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&F===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&J.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&J.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||ee)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=qs[t];n=To.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new xu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Du(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ou(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ku(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Au(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ou),r.length>1&&r.sort(t||ku),i.length>1&&i.sort(t||ku)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ju(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Au,e.set(t,[i])):n>=r.length?(i=new Au,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Mu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new X};break;case`SpotLight`:n={position:new G,direction:new G,color:new X,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new X,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new X,groundColor:new X};break;case`RectAreaLight`:n={color:new X,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function Nu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Pu=0;function Fu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Iu(e){let t=new Mu,n=Nu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new un,o=new un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Fu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Lu(e){let t=new Iu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ru(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Lu(e),t.set(n,[a])):r>=i.length?(a=new Lu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bu=`uniform sampler2D shadow_pass;
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
}`,Vu=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Hu=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Uu=new un,Wu=new G,Gu=new G;function Ku(e,t,n){let r=new Ti,i=new W,a=new W,o=new an,s=new Ao,c=new jo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:zu,fragmentShader:Bu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Br;m.setAttribute(`position`,new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(ut(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){ut(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){ut(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new sn(i.x,i.y,{format:I,type:M,minFilter:S,magFilter:S,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Hi(i.x,i.y,j),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=F,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=y,d.map.depthTexture.magFilter=y}else l.isPointLight?(d.map=new Cc(i.x),d.map.depthTexture=new Ui(i.x,A)):(d.map=new sn(i.x,i.y),d.map.depthTexture=new Hi(i.x,i.y,A)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=F,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=y,d.map.depthTexture.magFilter=y);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Wu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Wu),Gu.copy(e.position),Gu.add(Vu[t]),e.up.copy(Hu[t]),e.lookAt(Gu),e.updateMatrixWorld(),n.makeTranslation(-Wu.x,-Wu.y,-Wu.z),Uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Uu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),x(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new sn(i.x,i.y,{format:I,type:M}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function qu(e,t){function n(){let t=!1,n=new an,r=null,i=new an(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=mt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ee=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),N=ee>=2):(ee=parseFloat(/^WebGL (\d)/.exec(te)[1]),N=ee>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new an().fromArray(re),F=new an().fromArray(ie);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),me(!1),z(1),ce(e.CULL_FACE),fe(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function L(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function R(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(I(e.BLEND),g=!1);else if(g===!1&&(ce(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:dt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:dt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:dt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:dt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?I(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function z(t){t===0?I(e.CULL_FACE):(ce(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function _e(t){t?ce(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),P!==t&&(e.activeTexture(t),P=t)}function ye(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+M-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function be(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){dt(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function Me(t){F.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),F.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new X(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ae.set(0,0,e.canvas.width,e.canvas.height),F.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:I,bindFramebuffer:L,drawBuffers:le,useProgram:R,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:z,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:Fe}}function Ju(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new W,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):at(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),ut(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&ut(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];ut(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||ut(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ze:J.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,ut(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),ee(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),P(t)}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&te(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function te(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function F(){let e=ne;return e>=i.maxTextures&&ut(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ce(t,i){let a=r.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)ut(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)ut(`WebGLRenderer: Texture marked for update but image is incomplete`);else{he(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function L(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ge(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let R={[g]:e.REPEAT,[_]:e.CLAMP_TO_EDGE,[v]:e.MIRRORED_REPEAT},ue={[y]:e.NEAREST,[b]:e.NEAREST_MIPMAP_NEAREST,[x]:e.NEAREST_MIPMAP_LINEAR,[S]:e.LINEAR,[C]:e.LINEAR_MIPMAP_NEAREST,[w]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&ut(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&te(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function z(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=me(n.start,r.width,4),c=me(t.start,r.width,4);n.start<=i+1&&a===c&&me(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function he(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=pe(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=ke(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=k(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);fe(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=j(o,t);if(o.isDepthTexture)m=A(o.format===oe,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&z(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=Hs(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else ut(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?ut(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Hs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Ae(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Ae(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,o,s){if(o.image.length!==6)return;let c=pe(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=J.getPrimaries(J.workingColorSpace),r=o.colorSpace===``?null:J.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=ke(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);fe(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?ut(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ae(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function _e(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,De(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Oe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ce(i.depthTexture,0);let u=l.__webglTexture,d=De(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Oe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ye(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(i.__webglFramebuffer[0],t,0):ye(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ve(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,i){let a=r.get(t);n!==void 0&&_e(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&be(t)}function Se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Oe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),fe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)_e(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else _e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),fe(c,a),_e(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),fe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)_e(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else _e(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(l),Te.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(i.maxSamples,e.samples)}function Oe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function B(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(J.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&ut(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):dt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=ce,this.setTexture2DArray=I,this.setTexture3D=L,this.setTextureCube=le,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Yu(e,t){function n(n,r=``){let i,a=J.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Xu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zu=`
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

}`,Qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Oo({vertexShader:Xu,fragmentShader:Zu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends ht{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Qu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new W,C=null,w=null,E=new _s;E.viewport=new an;let D=new _s;D.viewport=new an;let O=[E,D],k=new Ds,j=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new zn,b[e]=t),t.getHandSpace()};function N(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,N),r.removeEventListener(`selectstart`,N),r.removeEventListener(`selectend`,N),r.removeEventListener(`squeeze`,N),r.removeEventListener(`squeezestart`,N),r.removeEventListener(`squeezeend`,N),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,P);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}j=null,M=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&ut(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&ut(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,N),r.addEventListener(`selectstart`,N),r.addEventListener(`selectend`,N),r.addEventListener(`squeeze`,N),r.addEventListener(`squeezestart`,N),r.addEventListener(`squeezeend`,N),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?oe:F,a=_.stencil?te:A);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new sn(d.textureWidth,d.textureHeight,{format:ae,type:T,depthTexture:new Hi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new sn(f.framebufferWidth,f.framebufferHeight,{format:ae,type:T,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function P(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ne=new G,re=new G;function ie(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),k.near=D.near=E.near=t,k.far=D.far=E.far=n,(j!==k.near||M!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),j=k.near,M=k.far),k.layers.mask=e.layers.mask|6,E.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;let i=e.parent,a=k.cameras;se(k,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?ie(k,E,D):k.projectionMatrix.copy(E.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,k,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=yt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(k)},this.getCameraTexture=function(e){return g[e]};let I=null;function L(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==k.cameras.length&&(k.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=O[n];o===void 0&&(o=new _s,o.layers.enable(n),o.viewport=new an,O[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(k.matrix.copy(o.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),i===!0&&k.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Wi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let le=new Ws;le.setAnimationLoop(L),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},ed=new un,td=new K;td.set(-1,0,0,0,1,0,0,0,1);function nd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,wo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ed.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(td),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function rd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return dt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?ut(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):ut(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var id=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ad=null;function od(){return ad===null&&(ad=new fi(id,16,16,I,M),ad.name=`DFG_LUT`,ad.minFilter=S,ad.magFilter=S,ad.wrapS=_,ad.wrapT=_,ad.generateMipmaps=!1,ad.needsUpdate=!0),ad}var sd=class{constructor(e={}){let{canvas:t=ot(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=T}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([le,L,ce]),g=new Set([T,A,O,te,N,ee]),_=new Uint32Array(4),v=new Int32Array(4),y=new G,b=null,x=null,S=[],C=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,k=!1,j=null,P=null,ne=null,re=null;this._outputColorSpace=Ye;let ie=0,ae=0,F=null,oe=-1,se=null,I=new an,R=new an,ue=null,de=new X(0),fe=0,pe=t.width,me=t.height,z=1,he=null,ge=null,_e=new an(0,0,pe,me),ve=new an(0,0,pe,me),ye=!1,be=new Ti,xe=!1,Se=!1,Ce=new un,we=new G,Te=new an,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return F===null?z:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,H,He,Ue,We,Ge,Ke,qe,Je,Xe,Ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,et,!1),t.addEventListener(`webglcontextrestored`,tt,!1),t.addEventListener(`webglcontextcreationerror`,rt,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,et,!1),t.removeEventListener(`webglcontextrestored`,tt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),dt(`WebGLRenderer: `+e.message),e}function Qe(){Ae=new Tc(B),Ae.init(),Je=new Yu(B,Ae),je=new ec(B,Ae,e,Je),V=new qu(B,Ae),je.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),P=B.createFramebuffer(),ne=B.createFramebuffer(),re=B.createFramebuffer(),Me=new Oc(B),Ne=new Du,Pe=new Ju(B,Ae,V,Ne,je,Je,Me),Fe=new wc(D),Ie=new Gs(B),Xe=new Qs(B,Ie),Le=new Ec(B,Ie,Me,Xe),Re=new Ac(B,Le,Ie,Xe,Me),Ge=new kc(B,je,Pe),He=new tc(Ne),ze=new Eu(D,Fe,Ae,je,Xe,He),Be=new nd(D,Ne),Ve=new ju,H=new Ru(Ae),We=new Zs(D,Fe,V,Re,p,s),Ue=new Ku(D,Re,je),Ze=new rd(B,Me,je,V),Ke=new $s(B,Ae,Me),qe=new Dc(B,Ae,Me),Me.programs=ze.programs,D.capabilities=je,D.extensions=Ae,D.properties=Ne,D.renderLists=Ve,D.shadowMap=Ue,D.state=V,D.info=Me}m!==1009&&(E=new Mc(m,t.width,t.height,o,r,i));let $e=new $u(D,B);this.xr=$e,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(e){e!==void 0&&(z=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){$e.isPresenting?ut(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*z),t.height=Math.floor(n*z),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*z,me*z).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,z=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)dt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){ut(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(_e)},this.setViewport=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),V.viewport(I.copy(_e).multiplyScalar(z).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(R.copy(ve).multiplyScalar(z).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){he=e},this.setTransparentSort=function(e){ge=e},this.getClearColor=function(e){return e.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=h.has(t)}if(e){let e=F.texture.type,t=g.has(e),n=We.getClearColor(),r=We.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,B.clearBufferiv(B.COLOR,0,v))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,et,!1),t.removeEventListener(`webglcontextrestored`,tt,!1),t.removeEventListener(`webglcontextcreationerror`,rt,!1),We.dispose(),Ve.dispose(),H.dispose(),Ne.dispose(),Fe.dispose(),Re.dispose(),Xe.dispose(),Ze.dispose(),ze.dispose(),$e.dispose(),$e.removeEventListener(`sessionstart`,ht),$e.removeEventListener(`sessionend`,gt),_t.stop()};function et(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),k=!0}function tt(){ct(`WebGLRenderer: Context Restored.`),k=!1;let e=Me.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;Qe(),Me.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function rt(e){dt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function it(e){let t=e.target;t.removeEventListener(`dispose`,it),at(t)}function at(e){st(e),Ne.remove(e)}function st(e){let t=Ne.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Ie.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=Ne.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),xe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),x=H.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),j!==null&&j.updateLights(x.state.lightsArray),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),xe===!0&&He.setGlobalState(this.clippingPlanes,t),j!==null&&Ue.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),x=C.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Ne.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function mt(e){ft&&ft(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new Ws;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){ft=e,$e.setAnimationLoop(e),e===null?_t.stop():_t.start()},$e.addEventListener(`sessionstart`,ht),$e.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){dt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(k===!0)return;j!==null&&j.renderStart(e,t);let n=$e.enabled===!0&&$e.isPresenting===!0,r=E!==null&&(F===null||n)&&E.begin(D,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(t),t=$e.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,F),x=H.get(e,C.length),x.init(t),x.state.textureUnits=Pe.getTextureUnits(),C.push(x),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,nt,t.reversedDepth),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),b=Ve.get(e,S.length),b.init(),S.push(b),$e.enabled===!0&&$e.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,D.sortObjects)}vt(e,t,0,D.sortObjects),b.finish(),j!==null&&j.updateLights(x.state.lightsArray),D.sortObjects===!0&&b.sort(he,ge),De=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,De&&We.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&He.beginShadows();let i=x.state.shadowsArray;if(Ue.render(i,e,t),xe===!0&&He.endShadows(),(r&&E.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}De&&We.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(b,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),De&&We.render(e),yt(b,e,t)}F!==null&&ae===0&&(Pe.updateMultisampleRenderTarget(F),Pe.updateRenderTargetMipmap(F)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),Xe.resetDefaultState(),oe=-1,se=null,C.pop(),C.length>0?(x=C[C.length-1],Pe.setTextureUnits(x.state.textureUnits),xe===!0&&He.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,j!==null&&j.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Re.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Re.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Te.z,s,t)}}else a.visible&&b.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),xe===!0&&He.setGlobalState(D.clippingPlanes,n),r&&V.viewport(I.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:e?M:T,minFilter:w,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:J.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(de),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),De&&We.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),xe===!0&&He.setGlobalState(D.clippingPlanes,r),xt(e,n,r),Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Pe.updateMultisampleRenderTarget(a),Pe.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(de,fe),d!==void 0&&(r.viewport=d),D.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=Ee);let r=Ne.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,it),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=ze.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,D),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=zl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=Ne.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),Pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?D.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:J.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ne.get(r),y=x.state.lights;if(xe===!0&&(Se===!0||e!==se)){let t=e===se&&r.id===oe;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Ct(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(V.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==oe&&(oe=r.id,w=!0),v.needsLights){let e=Et(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||se!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(B,`projectionMatrix`,e.projectionMatrix),E.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&E.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(B,`sunShadowMap`,y.state.sunShadowMap,Pe),y.state.directionalShadowMap.length>0&&E.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,Pe),y.state.spotShadowMap.length>0&&E.setValue(B,`spotShadowMap`,y.state.spotShadowMap,Pe),y.state.pointShadowMap.length>0&&E.setValue(B,`pointShadowMap`,y.state.pointShadowMap,Pe)),i.isSkinnedMesh){E.setOptional(B,i,`bindMatrix`),E.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(B,`boneTexture`,e.boneTexture,Pe))}i.isBatchedMesh&&(E.setOptional(B,i,`batchingTexture`),E.setValue(B,`batchingTexture`,i._matricesTexture,Pe),E.setOptional(B,i,`batchingIdTexture`),E.setValue(B,`batchingIdTexture`,i._indirectTexture,Pe),E.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(B,`batchingColorTexture`,i._colorsTexture,Pe));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Ge.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=od()),w){if(E.setValue(B,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&Ot(O,T),a&&r.fog===!0&&Be.refreshFogUniforms(O,a),Be.refreshMaterialUniforms(O,r,z,me,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}zl.upload(B,wt(v),O,Pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(zl.upload(B,wt(v),O,Pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(B,`center`,i.center),E.setValue(B,`modelViewMatrix`,i.modelViewMatrix),E.setValue(B,`normalMatrix`,i.normalMatrix),E.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ze.update(n,S),Ze.bind(n,S)}}return S}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=Ne.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ne.get(e.texture).__webglTexture=t,Ne.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ne.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=Ne.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),R.copy(e.scissor),ue=e.scissorTest,V.viewport(I),V.scissor(R),V.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)Pe.setupRenderTarget(e);else if(o.__hasExternalTextures)Pe.rebindTextures(e,Ne.get(e.texture).__webglTexture,Ne.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ne.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ne.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Pe.useMultisampledRTT(e)===!1?Ne.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),R.copy(e.scissor),ue=e.scissorTest}else I.copy(_e).multiplyScalar(z).floor(),R.copy(ve).multiplyScalar(z).floor(),ue=ye;if(n!==0&&(r=P),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(I),V.scissor(R),V.setScissorTest(ue),i){let r=Ne.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ne.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ne.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function At(e){let t=Ne.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){dt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ne.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){dt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){dt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),a)}finally{let e=F===null?null:Ne.get(F).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ne.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Je.convert(l),Je.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=F===null?null:Ne.get(F).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await pt(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Pe.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Je.convert(t.format),_=Je.convert(t.type),v;t.isData3DTexture?(Pe.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Pe.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(Pe.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ne.get(e),r=Ne.get(t),h=Ne.get(n.__renderTarget),g=Ne.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ne.has(e)){let n=Ne.get(e),r=Ne.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,ne),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,re);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){Ne.get(e).__webglFramebuffer===void 0&&Pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Pe.setTextureCube(e,0):e.isData3DTexture?Pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Pe.setTexture2DArray(e,0):Pe.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){ie=0,ae=0,F=null,V.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=J._getDrawingBufferColorSpace(e),t.unpackColorSpace=J._getUnpackColorSpace()}};function cd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Br,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=ld(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=ld(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function ld(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Tr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ud=`./audio/cabin.mp3`,dd=22.69,fd=36.80245865490629;function pd(){let e=null,t=null,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null,u=!1,d=!1,f=typeof fetch==`function`?fetch(ud).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null):Promise.resolve(null),p=null,m=null;function h(){if(e&&t)return e;let u=window.AudioContext||window.webkitAudioContext;if(!u)throw Error(`no audio`);e=new u,t=e.createGain(),t.gain.value=.7,t.connect(e.destination);let d=e;f.then(e=>e?d.decodeAudioData(e):null).then(t=>{e===d&&(p=t)}).catch(()=>{});let m=e.createBuffer(1,e.sampleRate*2,e.sampleRate),h=m.getChannelData(0);for(let e=0;e<h.length;e++)h[e]=Math.random()*2-1;let g=e.createBufferSource();g.buffer=m,g.loop=!0,r=e.createBiquadFilter(),r.type=`bandpass`,r.frequency.value=420,r.Q.value=.65,n=e.createGain(),n.gain.value=0,g.connect(r),r.connect(n),n.connect(t),g.start();let _=e.createOscillator(),v=e.createOscillator();_.type=`sawtooth`,v.type=`sawtooth`,_.frequency.value=76,v.frequency.value=81;let y=e.createBiquadFilter();y.type=`lowpass`,y.frequency.value=240,i=e.createGain(),i.gain.value=0,_.connect(y),v.connect(y),y.connect(i),i.connect(t),_.start(),v.start();let b=e.createBufferSource();b.buffer=m,b.loop=!0;let x=e.createBiquadFilter();x.type=`lowpass`,x.frequency.value=190,x.Q.value=.9;let S=e.createGain();S.gain.value=1;let C=e.createOscillator();C.type=`sawtooth`,C.frequency.value=10.8;let w=e.createGain();w.gain.value=-.85,C.connect(w),w.connect(S.gain),a=e.createGain(),a.gain.value=0,b.connect(x),x.connect(S),S.connect(a),a.connect(t),b.start(0,.5),C.start();let T=e.createBufferSource();T.buffer=m,T.loop=!0;let E=e.createBiquadFilter();E.type=`bandpass`,E.frequency.value=340,E.Q.value=.45,o=e.createGain(),o.gain.value=0,T.connect(E),E.connect(o),o.connect(t),T.start(0,1.1);let D=e.createBufferSource();D.buffer=m,D.loop=!0,c=e.createBiquadFilter(),c.type=`lowpass`,c.frequency.value=300,c.Q.value=.7,s=e.createGain(),s.gain.value=0,D.connect(c),c.connect(s),s.connect(t),D.start(0,.3);let O=e.createOscillator(),k=e.createOscillator();O.type=`sawtooth`,k.type=`sawtooth`,O.frequency.value=92,k.frequency.value=95.5;let A=e.createBiquadFilter();return A.type=`lowpass`,A.frequency.value=520,l=e.createGain(),l.gain.value=0,O.connect(A),k.connect(A),A.connect(l),l.connect(t),O.start(),k.start(),e}function g(n,r,i,a,o=`square`){if(!e||!t||u)return;let s=e.currentTime+r,c=e.createOscillator(),l=e.createGain();c.type=o,c.frequency.setValueAtTime(n,s),l.gain.setValueAtTime(a,s),l.gain.exponentialRampToValueAtTime(1e-4,s+i),c.connect(l),l.connect(t),c.start(s),c.stop(s+i+.02)}return{resume(){try{let e=h();e.state===`suspended`&&e.resume()}catch{}},setMuted(n){u=n,t&&e&&t.gain.setTargetAtTime(n?0:.7,e.currentTime,.05)},update(t,a,o){try{if(!e||!n||!i||!r)return;let s=u?0:t,c=u?0:m?a*.7:a;n.gain.setTargetAtTime(s,e.currentTime,.12),i.gain.setTargetAtTime(c,e.currentTime,.15),r.frequency.setTargetAtTime(280+Math.min(o,90)*16,e.currentTime,.2)}catch{}},vehicle(t,n){try{if(!e||!a||!o)return;a.gain.setTargetAtTime(u?0:t*.9,e.currentTime,.2),o.gain.setTargetAtTime(u?0:n*.55,e.currentTime,.08)}catch{}},traffic(t,n){try{if(!e||!s||!c||!l)return;s.gain.setTargetAtTime(u?0:t*.5,e.currentTime,.25),c.frequency.setTargetAtTime(240+t*2200,e.currentTime,.25),l.gain.setTargetAtTime(u?0:n*.16,e.currentTime,.3)}catch{}},cabin(n,r){try{if(!e||!t)return;let i=e.currentTime;if(n&&!m&&p){let n=e.createBufferSource();n.buffer=p,n.loop=!0,n.loopStart=dd,n.loopEnd=Math.min(fd,p.duration);let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=18e3;let o=e.createGain();o.gain.setValueAtTime(0,i),o.gain.setTargetAtTime(.38,i,.12),n.connect(a),a.connect(o),o.connect(t);let s=r!==null&&r>=0&&r<dd;n.start(i,s?dd-r:dd),m={src:n,gain:o,lp:a}}else!n&&m&&(m.gain.gain.cancelScheduledValues(i),m.gain.gain.setTargetAtTime(0,i,.45),m.lp.frequency.setTargetAtTime(380,i,.35),m.src.stop(i+3),m=null)}catch{}},beep(e,t=.12,n=.07){try{h(),g(e,0,t,n)}catch{}},triple(){try{h(),g(860,0,.1,.08),g(860,.16,.1,.08),g(1040,.34,.16,.09)}catch{}},fabric(){try{if((!e||!t||u)&&h(),!e||!t||u)return;let n=.28,r=e.createBuffer(1,Math.floor(e.sampleRate*n),e.sampleRate),i=r.getChannelData(0);for(let e=0;e<i.length;e++){let t=e/i.length;i[e]=(Math.random()*2-1)*(1-t)}let a=e.createBufferSource();a.buffer=r;let o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=900;let s=e.createGain();s.gain.setValueAtTime(.2,e.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+n),a.connect(o),o.connect(s),s.connect(t),a.start()}catch{}},ring(n){try{if(!e||!t||u)return;let r=[0,2,4,7,9,12,14,16,19,21,24],i=523.25*2**((r[Math.min(r.length-1,Math.max(0,n-1))]??0)/12);g(i,0,.6,.075,`sine`),g(i*2.01,0,.32,.028,`sine`),g(i*1.5,.06,.42,.03,`triangle`)}catch{}},ringMiss(){try{if(!e||!t||u)return;g(196,0,.3,.06,`triangle`),g(147,.12,.38,.06,`triangle`)}catch{}},sweep(){try{if(!e||!t||u)return;[523.25,659.25,783.99,1046.5,1318.5].forEach((e,t)=>{g(e,.18+t*.11,.5,.05,`sine`),g(e*2,.18+t*.11,.25,.015,`sine`)})}catch{}},whoosh(n=1){try{if(!e||!t||u)return;let r=.7,i=e.currentTime,a=e.createBuffer(1,Math.floor(e.sampleRate*r),e.sampleRate),o=a.getChannelData(0);for(let e=0;e<o.length;e++)o[e]=Math.random()*2-1;let s=e.createBufferSource();s.buffer=a;let c=e.createBiquadFilter();c.type=`bandpass`,c.Q.value=1.4,c.frequency.setValueAtTime(380,i),c.frequency.exponentialRampToValueAtTime(1700,i+r*.45),c.frequency.exponentialRampToValueAtTime(520,i+r);let l=e.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.32*n,i+r*.4),l.gain.exponentialRampToValueAtTime(1e-4,i+r),s.connect(c),c.connect(l),l.connect(t),s.start()}catch{}},alarm(){try{h(),g(220,0,.22,.08,`sawtooth`),g(180,.18,.28,.08,`sawtooth`)}catch{}},death(){try{let e=h();if(u||d||!t)return;d=!0,e.state===`suspended`&&e.resume();let r=e.currentTime;n&&n.gain.setValueAtTime(0,r),i&&i.gain.setValueAtTime(0,r),a&&a.gain.setValueAtTime(0,r),o&&o.gain.setValueAtTime(0,r);let s=e.createOscillator(),c=e.createOscillator();s.type=`sawtooth`,c.type=`triangle`,s.frequency.setValueAtTime(820,r+.02),s.frequency.exponentialRampToValueAtTime(520,r+.22),s.frequency.exponentialRampToValueAtTime(190,r+.62),c.frequency.setValueAtTime(860,r+.02),c.frequency.exponentialRampToValueAtTime(210,r+.62);let l=e.createOscillator(),f=e.createGain();l.frequency.setValueAtTime(9,r+.02),l.frequency.linearRampToValueAtTime(22,r+.5),f.gain.value=42,l.connect(f),f.connect(s.frequency),l.start(r+.02),l.stop(r+.68);let p=e.createBiquadFilter();p.type=`bandpass`,p.Q.value=4.5,p.frequency.setValueAtTime(1800,r+.02),p.frequency.exponentialRampToValueAtTime(420,r+.6);let m=e.createGain();m.gain.setValueAtTime(1e-4,r),m.gain.exponentialRampToValueAtTime(.34,r+.06),m.gain.setValueAtTime(.28,r+.34),m.gain.exponentialRampToValueAtTime(1e-4,r+.66),s.connect(p),c.connect(p),p.connect(m),m.connect(t),s.start(r+.02),c.start(r+.02),s.stop(r+.7),c.stop(r+.7);let g=r+.5,_=.22,v=e.createBuffer(1,Math.floor(e.sampleRate*_),e.sampleRate),y=v.getChannelData(0);for(let e=0;e<y.length;e++){let t=e/y.length;y[e]=(Math.random()*2-1)*(1-t)*(1-t)}let b=e.createBufferSource();b.buffer=v;let x=e.createBiquadFilter();x.type=`lowpass`,x.frequency.setValueAtTime(1800,g),x.frequency.exponentialRampToValueAtTime(70,g+_);let S=e.createGain();S.gain.setValueAtTime(.85,g),S.gain.exponentialRampToValueAtTime(1e-4,g+_),b.connect(x),x.connect(S),S.connect(t),b.start(g);let C=e.createOscillator();C.type=`sine`,C.frequency.setValueAtTime(190,g),C.frequency.exponentialRampToValueAtTime(32,g+.28);let w=e.createGain();w.gain.setValueAtTime(.72,g),w.gain.exponentialRampToValueAtTime(1e-4,g+.3),C.connect(w),w.connect(t),C.start(g),C.stop(g+.32)}catch{}},resetDeath(){d=!1},dispose(){m=null,p=null,n=null,i=null,a=null,o=null,t=null,e&&e.close(),e=null}}}var md=1.6,hd=.3,gd=.29,_d=.43,vd=.42,yd={suit:`#2c5a8c`,suitDark:`#1d3d61`,helmet:`#e9ecef`},bd=`#17191c`,xd=`#2a2c30`,Sd=`#121417`;function Cd(e,t,n){if(n<=t[0][0])return e.set(t[0][1],t[0][2],t[0][3]);for(let r=1;r<t.length;r++){let i=t[r-1],a=t[r];if(n<=a[0]){let t=(n-i[0])/Math.max(1e-4,a[0]-i[0]);return t=t*t*(3-2*t),e.set(i[1]+(a[1]-i[1])*t,i[2]+(a[2]-i[2])*t,i[3]+(a[3]-i[3])*t)}}let r=t[t.length-1];return e.set(r[1],r[2],r[3])}var wd={pull:{dur:1.1,right:[[0,.37,-.08,-.34],[.22,.3,-.38,.12],[.38,.24,-.42,.36],[.62,.62,-.14,.3],[1.1,.3,.2,-.04]],left:[[0,-.37,-.08,-.34],[.2,-.12,.14,-.5],[.8,-.12,.14,-.5],[1.1,-.3,.2,-.04]]},cutaway:{dur:1,right:[[0,.37,-.08,-.34],[.18,.12,-.33,-.14],[.42,.12,-.33,-.14],[.62,.42,-.18,-.5],[1,.37,-.08,-.34]],left:[[0,-.37,-.08,-.34],[.18,-.12,-.33,-.14],[1,-.12,-.33,-.14]]},reserve:{dur:.9,right:[[0,.37,-.08,-.34],[.9,.3,.2,-.04]],left:[[0,-.12,-.33,-.14],[.12,-.12,-.34,-.13],[.4,-.44,-.14,-.52],[.9,-.3,.2,-.04]]}};function Td(){let e=document.createElement(`canvas`);e.width=256,e.height=256;let t=e.getContext(`2d`);if(!t)return null;t.fillStyle=`#c9ced3`,t.beginPath(),t.arc(128,128,126,0,Math.PI*2),t.fill(),t.fillStyle=`#0d0f12`,t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.fill();let n=(e,n,r)=>{t.strokeStyle=r,t.lineWidth=16,t.beginPath(),t.arc(128,128,106,-Math.PI/2+e/12*Math.PI*2,-Math.PI/2+n/12*Math.PI*2),t.stroke()};n(0,2,`#d92b2b`),n(2,4.5,`#f0a202`),t.fillStyle=`#f2f4f6`,t.textAlign=`center`,t.textBaseline=`middle`,t.font=`700 34px sans-serif`;for(let e=0;e<12;e++){let n=-Math.PI/2+e/12*Math.PI*2;t.fillText(String(e),128+Math.cos(n)*74,128+Math.sin(n)*74),t.fillRect(128+Math.cos(n)*94-2,128+Math.sin(n)*94-2,4,4)}t.font=`600 16px sans-serif`,t.fillStyle=`#8f9aa6`,t.fillText(`x1000 FT`,128,162);let r=new Vi(e);return r.colorSpace=Ye,r}function Ed(e={}){let t=e.thirdPerson??!1,n=e.look??yd,r=new Ln;r.matrixAutoUpdate=!1;let i=new Q({color:n.suit,roughness:.85}),a=new Q({color:n.suitDark,roughness:.85}),o=new Q({color:bd,roughness:.6}),s=new Q({color:xd,roughness:.7}),c=new Q({color:Sd,roughness:.7}),l=[],u=new qi(1,1,1,10,1,!0),d=new qi(1,.9,1,16,1,!1),f=new vo(1,12,8),p=new Gi(.1,.09,.27);l.push(u,d,f,p);let m=(e,t,n=t,i=u)=>{let a=new Z(i,e);return a.userData.r=t,a.userData.depth=n,a.frustumCulled=!1,r.add(a),a},h=(e,t)=>{let n=new Z(f,e);return n.scale.setScalar(t),n.frustumCulled=!1,r.add(n),n},g=[-1,1].map(e=>({side:e,upper:m(i,.055),fore:m(i,.047),cuff:m(o,.05),elbow:h(i,.055),shoulderBall:h(i,.06),hand:(()=>{let t=new Ln,n=new Z(f,o);n.scale.set(.046,.025,.05),n.position.set(0,0,-.045);let i=new Z(f,o);i.scale.set(.045,.02,.036),i.position.set(0,-.006,-.09),i.rotation.x=-.3;let a=new Z(f,o);a.scale.set(.015,.016,.032),a.position.set(-e*.04,-.004,-.05),a.rotation.y=e*.5;for(let e of[n,i,a])e.frustumCulled=!1;return t.add(n,i,a),r.add(t),t})(),target:new G(e*.36,-.12,-.42),shoulder:new G,elbowPos:new G,wrist:new G})),_=[-1,1].map(e=>({side:e,thigh:m(i,.08),shin:m(i,.062),knee:h(i,.068),foot:(()=>{let e=new Z(p,s);return e.frustumCulled=!1,r.add(e),e})(),footPos:new G(e*.12,-1.55,0),kneeAt:new G,ankleAt:new G})),v=m(i,.17,.11,d),y=h(a,.17),b=h(i,.17),x=new Z(new Gi(.3,.035,.02),c);x.frustumCulled=!1,r.add(x),l.push(x.geometry);let S=[-1,1].map(()=>m(c,.022)),C=[-1,1].map(()=>{let e=new Z(new yo(.09,.016,6,16),c);return e.frustumCulled=!1,r.add(e),l.push(e.geometry),e}),w=new Q({color:n.helmet,roughness:.35}),T=new Q({color:`#0b0d10`,roughness:.15,metalness:.4}),E=new Q({color:`#2b3138`,roughness:.8}),D=new Q({color:`#1c2026`,roughness:.8}),O=h(w,.125);O.scale.set(.12,.125,.135),O.position.set(0,.035,.07);let k=h(T,.1);k.scale.set(.1,.042,.06),k.position.set(0,0,-.025);let A=m(a,.05),j=new Gi(1,1,1);l.push(j);let M=new Z(j,E);M.scale.set(.34,.44,.13);let N=new Z(j,D);N.scale.set(.34,.14,.14);for(let e of[M,N])e.frustumCulled=!1,r.add(e);for(let e of[O,k,A,M,N])e.visible=t;let ee=`#f06a1e`,te=new Q({color:ee,roughness:.7}),P=new Q({color:`#ffffff`,vertexColors:!0,roughness:.75,side:2}),ne=[0,.45,.84,.87,1],re=[0,1,.3,.25,0],ie=ne.length,ae=[];for(let e=0;e<2;e++)for(let t=0;t<ie-1;t++){let n=e*ie+t;ae.push(n,n+ie,n+ie+1,n,n+ie+1,n+1)}let F=[-1,1].map(()=>{let e=new Br;e.setAttribute(`position`,new Tr(new Float32Array(3*ie*3),3));let t=new X(ee),n=new X(`#1f2a3c`),i=[0,1,2].flatMap(()=>ne.map((e,r)=>r<3?t:n));e.setAttribute(`color`,new Tr(new Float32Array(i.flatMap(e=>[e.r,e.g,e.b])),3)),e.setIndex(ae);let a=new Z(e,P);return a.frustumCulled=!1,a.visible=!1,r.add(a),l.push(e),a}),oe=(()=>{let e=new Br;e.setAttribute(`position`,new Tr(new Float32Array(15),3));let t=new X(ee),n=new X(`#1f2a3c`),i=[t,t,n,n,t];e.setAttribute(`color`,new Tr(new Float32Array(i.flatMap(e=>[e.r,e.g,e.b])),3)),e.setIndex([0,1,2,0,2,3,0,3,4]);let a=new Z(e,P);return a.frustumCulled=!1,a.visible=!1,r.add(a),l.push(e),a})(),se=(()=>{let e=new Br;e.setAttribute(`position`,new Tr(new Float32Array(18),3));let t=new X(ee),n=new X(`#1f2a3c`),i=[t,n,t,t,n,t];e.setAttribute(`color`,new Tr(new Float32Array(i.flatMap(e=>[e.r,e.g,e.b])),3)),e.setIndex([0,3,4,0,4,1,1,4,5,1,5,2]);let a=new Z(e,P);return a.frustumCulled=!1,a.visible=!1,r.add(a),l.push(e),a})(),ce=Td(),I=new Z(new Ki(.036,28),new Qr({map:ce??void 0})),L=new Z(new go(.004,.028),new Qr({color:`#f2f4f6`}));L.geometry.translate(0,.012,8e-4),I.add(L),I.frustumCulled=!1,L.frustumCulled=!1,I.visible=!t,r.add(I),l.push(I.geometry,L.geometry);let le=new G,R=new G,ue=new G,de=new G,fe=new G(0,1,0);function pe(e,t,n){de.subVectors(n,t);let r=de.length()||1e-4;e.position.addVectors(t,n).multiplyScalar(.5),e.quaternion.setFromUnitVectors(fe,de.multiplyScalar(1/r));let i=e.userData.r??.05;e.scale.set(i,r,e.userData.depth??i)}function me(e,t,n,r,i,a){le.subVectors(n,t);let o=le.length(),s=le.multiplyScalar(1/(o||1));o=Vt.clamp(o,Math.abs(i-a)+.001,i+a-.001);let c=(i*i+o*o-a*a)/(2*o),l=Math.sqrt(Math.max(0,i*i-c*c));return R.subVectors(r,t),R.addScaledVector(s,-R.dot(s)),R.lengthSq()<1e-8&&R.set(0,-1,0),R.normalize(),e.copy(t).addScaledVector(s,c).addScaledVector(R,l),o}let z=new G,he=new G,ge=new G,_e=new G(0,.2,-1).normalize(),ve=new G(1,0,0),ye=new G(0,0,-1),be=new Ht,xe=new Ht,Se=new G,Ce=new G,we=new G,Te=-.16,Ee=.07,De=(e,t,n,r)=>e.set(t,n-Te,r-Ee).applyQuaternion(be).add(de.set(0,Te,Ee));return{group:r,update(e,n,a){if(r.visible=n.mode!==`hidden`,!r.visible)return;r.matrix.copy(e),r.matrixWorldNeedsUpdate=!0;let o=n.mode!==`freefall`,s=t?n.lean??+!o:0,c=n.trackAmt??0;be.setFromAxisAngle(ve,-1.37*s);let l=1-Math.exp(-(n.gesture?22:11)*a),u=n.gesture?wd[n.gesture]:null;for(let e of g){let r=e.side;t?De(e.shoulder,r*.19,-.24,.07):o?e.shoulder.set(r*.19,-.24,.07):e.shoulder.set(r*.2,-.24,.12);let i=r<0?n.leftHand:n.rightHand;if(u&&n.gestureT<u.dur)Cd(z,r<0?u.left:u.right,n.gestureT);else if(i)z.copy(i);else if(n.mode===`freefall`&&t){let e=n.wing??0;n.reaching?z.set(r*.3,.2,-.04):z.set(r*.45,-.02,-.06).lerp(le.set(r*.3,-.3,.62),c),!n.reaching&&e>0&&(z.lerp(le.set(r*.72,-.12,.2),e),z.y+=n.turn*r*.06*e);let t=Math.min(n.air/55,1)*.015;z.x+=Math.sin(n.time*29+r)*t,z.y+=Math.cos(n.time*23+r*2)*t}else if(n.mode===`freefall`){let e=n.wing??0;n.reaching?z.set(r*.3,.2,-.04):e>0?(z.set(r*.37,-.08,-.34).lerp(le.set(r*.66,-.25,-.26),e),z.y+=n.turn*r*.07*e,z.z+=n.forward*.12*e,z.y-=Math.max(0,-n.forward)*.04*e):n.forward>.4?z.set(r*.43,-.04,-.33):n.forward<-.4?z.set(r*.27,-.44,.18):z.set(r*.37,-.08,-.34);let t=n.turn*r*(1-e);z.y+=t*.08,z.z+=t*.06;let i=Math.min(n.air/55,1)*.012;z.x+=Math.sin(n.time*31+r)*i,z.y+=Math.cos(n.time*27+r*2)*i}else if(n.mode===`seated`)z.set(r*.2,-.86,-.3);else if(n.mode===`perch`)z.set(r*.25,-.8,-.2);else if(n.mode===`cabin`){let e=Math.sin(n.walk)*.06*r;z.set(r*.2,-.7,-.2+e)}else z.set(r*.26,-.8,-.02);e.target.lerp(z,l),o?ge.set(e.shoulder.x+r*.7,e.shoulder.y-.4,e.shoulder.z+.4):t?ge.set(e.shoulder.x+r,e.shoulder.y-.15,e.shoulder.z+.1):ge.set(e.shoulder.x+r*1,e.shoulder.y+.1,e.shoulder.z+.1),me(e.elbowPos,e.shoulder,e.target,ge,hd,gd),he.subVectors(e.target,e.elbowPos).setLength(gd).add(e.elbowPos),pe(e.upper,e.shoulder,e.elbowPos),ue.copy(e.elbowPos).lerp(he,.82),pe(e.fore,e.elbowPos,ue),pe(e.cuff,ue,he),e.elbow.position.copy(e.elbowPos),e.shoulderBall.position.copy(e.shoulder),de.subVectors(he,e.elbowPos).normalize(),!o&&!u&&de.lerp(_e,.55).normalize(),e.wrist.copy(he),e.hand.position.copy(he),e.hand.quaternion.setFromUnitVectors(ye,de),e.hand.rotateZ(-r*.5),r<0&&!t&&(I.position.copy(e.elbowPos).lerp(he,.78),le.copy(I.position).multiplyScalar(-1).normalize(),I.position.addScaledVector(le,.05),I.quaternion.setFromUnitVectors(new G(0,0,1),le),L.rotation.z=-(Math.max(0,n.altFt)/12e3)*Math.PI*2)}let d=n.mode===`freefall`?n.wing??0:0;for(let e=0;e<2;e++){let r=g[e],a=F[e];a.visible=d>.02;let o=d>.5?te:i;if(r.upper.material=o,r.fore.material=o,r.elbow.material=o,r.shoulderBall.material=o,!a.visible)continue;let s=r.side,c=a.geometry.getAttribute(`position`),l=1-d,u=Math.sin(n.time*37+s)*.008*d;t?De(we,s*.2,-.84,.07):we.set(s*.24,-.33,.62);for(let e=0;e<3;e++){e===0?le.set(r.shoulder.x,r.shoulder.y+.06,r.shoulder.z+.03):le.copy(e===1?r.elbowPos:r.wrist),e===0?R.copy(we):e===2?R.copy(r.wrist).add(ue.set(-s*.03,-.02,.2)):(R.copy(r.wrist).add(ue.set(-s*.03,-.02,.2)),R.lerp(we,.5),R.x-=s*.03,R.y+=u),R.lerp(le,.6*l),R.y-=.08*l;let t=[.04,.045,.02][e]*d;for(let n=0;n<ie;n++)ue.copy(le).lerp(R,ne[n]),c.setXYZ(e*ie+n,ue.x,ue.y+re[n]*t,ue.z)}c.needsUpdate=!0,a.geometry.computeVertexNormals()}if(t){let e=d>.5?te:i;v.material=e,b.material=e;for(let t of _)t.thigh.material=e,t.shin.material=e,t.knee.material=e}if(oe.visible=t&&d>.02,se.visible=!t&&d>.02,se.visible){let e=se.geometry.getAttribute(`position`),t=g[0].shoulder;e.setXYZ(0,t.x,t.y+.06,t.z+.03),e.setXYZ(1,0,t.y+.04,t.z+.1),e.setXYZ(2,-t.x,t.y+.06,t.z+.03),e.setXYZ(3,-.24,-.33,.62),e.setXYZ(4,0,-.28,.62),e.setXYZ(5,.24,-.33,.62),e.needsUpdate=!0,se.geometry.computeVertexNormals()}let f=o||t;v.visible=f,y.visible=f,b.visible=f,x.visible=f,S.forEach(e=>e.visible=f),C.forEach(e=>e.visible=f);for(let e of _)e.thigh.visible=f,e.shin.visible=f,e.knee.visible=f,e.foot.visible=f;if(!f)return;De(le,0,-.22,.07),De(R,0,-.74,.07),pe(v,R,le),De(b.position,0,-.22,.07),b.quaternion.copy(be),b.scale.set(.17,.06,.11),De(y.position,0,-.76,.07),y.quaternion.copy(be),y.scale.set(.155,.1,.11),De(x.position,0,-.38,-.045),x.quaternion.copy(be),t&&(De(le,0,-.2,.07),pe(A,ue.set(0,-.08,.08),le),De(M.position,0,-.5,.245),M.quaternion.copy(be),De(N.position,0,-.24,.245),N.quaternion.copy(be));for(let e=0;e<2;e++){let t=e===0?-1:1;De(le,t*.1,-.24,-.04),De(R,t*.12,-.8,-.04),pe(S[e],le,R);let n=C[e];De(n.position,t*.1,-.86,.06),n.quaternion.copy(be).multiply(xe.setFromAxisAngle(ve,Math.PI/2))}let p=n.mode===`canopy`,m=t&&n.mode===`freefall`;for(let e of _){let t=e.side;if(De(Ce,t*.09,-.78,.07),m)z.set(t*.2,-1.38,.32).lerp(le.set(t*.13,-1.62,.12),c),d>0&&z.lerp(le.set(t*.27,-1.6,.1),d),De(z,z.x,z.y,z.z);else if(n.mode===`seated`)z.set(t*.33,-1.49,-.14);else if(n.mode===`perch`)z.set(t*.16,-1.25,-.6);else if(n.mode===`cabin`){let e=Math.sin(n.walk+(t>0?Math.PI:0))*.12;z.set(t*.12,-1.42,.02+e)}else if(p){let e=Math.sin(n.time*1.3+t)*.03;z.set(t*.11,-1.6,.1+e),z.lerp(le.set(t*.08,-1.5,-.32),n.flare),De(z,z.x,z.y,z.z)}else z.set(t*.13,-1.52,.05);e.footPos.lerp(z,1-Math.exp(-9*a)),m?De(ge,t*.24,-1.1,-.9):n.mode===`seated`?ge.set(Ce.x+t*.7,Ce.y-.05,Ce.z-.6):n.mode===`perch`?ge.set(Ce.x+t*.25,Ce.y+.35,Ce.z-.9):ge.set(Ce.x+t*.1,Ce.y-.2,Ce.z-.8),me(Se,Ce,e.footPos,ge,_d,vd);let r=le.subVectors(e.footPos,Se).setLength(vd).add(Se);pe(e.thigh,Ce,Se),pe(e.shin,Se,r),e.knee.position.copy(Se),e.kneeAt.copy(Se),e.ankleAt.copy(r),m?(R.subVectors(r,Se).normalize(),e.foot.quaternion.setFromUnitVectors(ye,R),e.foot.position.copy(r).addScaledVector(R,.07)):(e.foot.position.copy(r).add(R.set(0,-.03,-.08)),e.foot.rotation.set(p?.35-n.flare*.45:0,0,0))}if(oe.visible){let e=oe.geometry.getAttribute(`position`),[t,n]=_;De(le,0,-.9,.09),e.setXYZ(0,le.x,le.y,le.z),e.setXYZ(1,t.kneeAt.x,t.kneeAt.y,t.kneeAt.z),e.setXYZ(2,t.ankleAt.x,t.ankleAt.y,t.ankleAt.z),e.setXYZ(3,n.ankleAt.x,n.ankleAt.y,n.ankleAt.z),e.setXYZ(4,n.kneeAt.x,n.kneeAt.y,n.kneeAt.z),e.needsUpdate=!0,oe.geometry.computeVertexNormals()}},dispose(){l.forEach(e=>e.dispose()),[i,a,o,s,c,w,T,E,D,P,te].forEach(e=>e.dispose()),ce?.dispose(),I.material.dispose(),L.material.dispose()}}}var Dd=9,Od=19,kd=72,Ad=22,jd=6.4,Md=2.45,Nd=.5,Pd=.16,Fd=3.55,Id=-.5,Ld=-.11,Rd=.08,zd=[.05,.3,.56,.84],Bd=[`#b8262a`,`#f2f4f6`,`#b8262a`,`#f2f4f6`,`#24467a`,`#f2f4f6`,`#b8262a`,`#f2f4f6`,`#b8262a`],Vd=[`#e8a317`,`#e8a317`,`#f2f4f6`,`#e8a317`,`#e8a317`,`#e8a317`,`#f2f4f6`,`#e8a317`,`#e8a317`],Hd=.07,Ud=1.05,Wd=.24,Gd=.62,Kd={span:jd,chord:Md,y:Fd-Nd*.5,z:Id},qd=1.6;function Jd(e,t){e.scale.set(1,1-t*.93,1),!(t<=0)&&(e.translateZ(-t*3.4),e.position.y-=t*.9)}function Yd(e,t,n){return e.set(t*(.26+n*.04),.8300000000000001-n*1,.1-n*.28)}function Xd(e){return 5*Pd*(.2969*Math.sqrt(e)-.126*e-.3516*e*e+.2843*e**3-.1036*e**4)}var Zd=Xd(.3);function Qd(e){return-.2*Xd(e)-.012*Math.sin(Math.PI*e)}function $d(){let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);if(!t)return null;t.fillStyle=`#808080`,t.fillRect(0,0,64,64),t.fillStyle=`#a0a0a0`;for(let e=0;e<64;e+=8)t.fillRect(e,0,1,64),t.fillRect(0,e,64,1);let n=new Vi(e);return n.wrapS=g,n.wrapT=g,n}function ef(e=Bd){let t=new Ln,n=$d(),r=1679,i=4232,a=new Float32Array(i*3),o=new Float32Array(i*3),s=new Float32Array(i*2),c=[],l=r,u=r*2;for(let e of[0,l])for(let t=0;t<kd;t++)for(let n=0;n<Ad;n++){let r=e+t*23+n,i=r+Ad+1;e===0?c.push(r,r+1,i,i,r+1,i+1):c.push(r,i,r+1,i,i+1,r+1)}for(let e=0;e<Od;e++){let t=u+e*23*2;for(let e=0;e<Ad;e++){let n=t+e*2;c.push(n,n+1,n+2,n+2,n+1,n+3)}}let d=new Br;d.setAttribute(`position`,new Tr(a,3)),d.setAttribute(`color`,new Tr(o,3)),d.setAttribute(`uv`,new Tr(s,2)),d.setIndex(c);let f=new Q({vertexColors:!0,side:2,roughness:.72,metalness:0,bumpMap:n??void 0,bumpScale:.6});f.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vColor.rgb * 0.32;`)};let p=new Z(d,f);p.frustumCulled=!1,t.add(p);let m=[];for(let e=0;e<Od;e+=2)m.push(e);let h=[0,1,2,3,4,14,15,16,17,18],g=m.length*6+h.length+2+8,_=new Float32Array(g*6),v=new Br;v.setAttribute(`position`,new Tr(_,3));let y=new Ei({color:`#d8d2c4`,transparent:!0,opacity:.85}),b=new Ri(v,y);b.frustumCulled=!1,t.add(b);let x=new Q({color:`#1d232a`,roughness:.8}),S=new Q({color:`#e8a317`,roughness:.6}),C=[],w=[];for(let e of[-1,1]){for(let n of[-.07,Hd]){let r=new Z(new Gi(.026,.6,.007),x);r.position.set(e*.21,.75,n),r.rotation.z=e*.06,t.add(r),C.push(r)}let n=new Z(new Gi(.03,.11,.05),S);t.add(n),w.push(n)}let T=new Z(new go(.34,.2),new Q({color:`#3a4656`,roughness:.8,side:2,transparent:!0,opacity:.7}));T.rotation.x=-Math.PI/2,t.add(T);let E=new un().makeRotationX(Ld),D=new G,O=new X,k=e,A=!0,j=[-1,-1,-1];function M(e,t,n,r,i,a,o){let s=Nd*(.35+.65*i),c=jd*(.3+.7*i)/2/Math.sin(s),l=t*s,u=Math.sin(l),d=Math.cos(l),f=Md*(1-.13*t*t)*(.65+.35*i),p=.35+.65*i,m=(t+1)/2*18,h=m-Math.floor(m),g=Math.sin(Math.PI*h)*.045*i,_=0;_=r===1?Xd(n)*p+g*(Xd(n)/Zd):r===-1?Qd(n)*p-g*.35*Math.sin(Math.PI*n):0;let v=t<0?a:o,y=.35+.65*Math.abs(t),b=n>.62?-v*((n-.62)/.38)**2*.3*y:0,x=c*(d-1)+(_*f+b)*d,S=c*u+(_*f+b)*u,C=(n-.42)*f;return e.set(S,x,C).applyMatrix4(E),e.y+=Fd*(.55+.45*i),e.z+=Id,e}function N(e,t,n){for(let[r,i]of[[0,1],[l,-1]])for(let c=0;c<=kd;c++){let l=c/kd*2-1,u=Math.min(8,Math.floor((l+1)/2*Dd));A&&O.set(k[u]??`#ffffff`);for(let u=0;u<=Ad;u++){let d=u/Ad;d=d*d*(i===-1?.92:1)+(i===-1?Rd:0),i===1&&(d=(u/Ad)**1.6),M(D,l,d,i,e,t,n);let f=r+c*23+u;if(a.set([D.x,D.y,D.z],f*3),s.set([l*10,d*4],f*2),A){let e=i===-1?.82:1;o.set([O.r*e,O.g*e,O.b*e],f*3)}}}for(let r=0;r<Od;r++){let i=r/18*2-1,c=Math.min(8,Math.floor((i+1)/2*Dd));A&&O.set(k[c]??`#ffffff`);let l=u+r*23*2;for(let r=0;r<=Ad;r++){let c=(r/Ad)**1.6,u=Rd+.92*(r/Ad)**2;M(D,i,c,1,e,t,n),a.set([D.x,D.y,D.z],(l+r*2)*3),M(D,i,Math.max(c,u),-1,e,t,n),a.set([D.x,D.y,D.z],(l+r*2+1)*3),s.set([0,c*4],(l+r*2)*2),s.set([0,u*4],(l+r*2+1)*2),A&&(o.set([O.r*.7,O.g*.7,O.b*.7],(l+r*2)*3),o.set([O.r*.7,O.g*.7,O.b*.7],(l+r*2+1)*3))}}d.attributes.position.needsUpdate=!0,d.attributes.uv.needsUpdate=!0,A&&(d.attributes.color.needsUpdate=!0),A=!1,d.computeVertexNormals(),d.computeBoundingSphere();let r=Vt.lerp(Fd*.6,1.1300000000000001,Math.min(1,e*1.15));T.position.set(0,r,0);let i=Vt.lerp(2.8,1,Math.min(1,e*1.15));T.scale.set(i,i,1);let c=0,f=(e,t)=>{_.set([e.x,e.y,e.z,t.x,t.y,t.z],c*6),c++},p=new G,y=new G,b=new G,x=new G;for(let r of m){let i=r/18*2-1,a=i<0?-.24:Wd;for(let r of[[0,1],[2,3]]){let o=r[0]===0;x.set(a,Ud,o?-.07:Hd),M(p,i,zd[r[0]],-1,e,t,n),M(y,i,zd[r[1]],-1,e,t,n),b.addVectors(p,y).multiplyScalar(.5).lerp(x,.32),f(p,b),f(y,b),f(b,x)}}for(let r of[-1,1]){let i=r<0?t:n,a=Yd(new G,r,i),o=w[r<0?0:1];o&&o.position.copy(a),x.set(r*Wd,Ud,.09000000000000001);let s=h.filter(e=>r<0?e<Od/2:e>Od/2),c=new G;M(c,r*.78,1,0,e,t,n),c.lerp(x,.38);for(let r of s)M(p,r/18*2-1,1,0,e,t,n),f(p,c);f(c,a)}for(;c<g;)_.set([0,0,0,0,0,0],c*6),c++;v.attributes.position.needsUpdate=!0,v.computeBoundingSphere()}return{group:t,update(e,t,n){let r=Math.round(e*200)/200,i=Math.round(t*100)/100,a=Math.round(n*100)/100;(A||r!==j[0]||i!==j[1]||a!==j[2])&&(j=[r,i,a],N(r,i,a))},setReserve(t){let n=t?Vd:e;n!==k&&(k=n,A=!0)},dispose(){d.dispose(),f.dispose(),n?.dispose(),v.dispose(),y.dispose(),x.dispose(),S.dispose(),C.forEach(e=>e.geometry.dispose()),w.forEach(e=>e.geometry.dispose()),T.geometry.dispose(),T.material.dispose()}}}var tf=1.05;function nf(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);i&&n(i);let a=new Vi(r);return a.colorSpace=Ye,a.wrapS=g,a.wrapT=g,a.anisotropy=4,a}function rf(e,t,n,r,i){let a=i,o=()=>(a=a*16807%2147483647,a/2147483647);for(let i=0;i<t*n*.08;i++){let i=o()<.5?0:255;e.fillStyle=`rgba(${i},${i},${i},${o()*r})`,e.fillRect(o()*t,o()*n,1.5,1.5)}}function af(){return nf(256,256,e=>{for(let t=0;t<4;t++){let n=t*64,r=e.createLinearGradient(0,n,0,n+64);r.addColorStop(0,`#39424c`),r.addColorStop(.3,`#5c6772`),r.addColorStop(.55,`#626d79`),r.addColorStop(1,`#343c45`),e.fillStyle=r,e.fillRect(0,n,256,64),e.strokeStyle=`rgba(20,24,28,0.55)`,e.setLineDash([5,4]),e.lineWidth=1.5,e.beginPath(),e.moveTo(0,n+2),e.lineTo(256,n+2),e.stroke()}e.setLineDash([]),e.fillStyle=`rgba(18,22,26,0.6)`,e.fillRect(0,0,3,256),rf(e,256,256,.06,7)})}function of(){return nf(128,128,e=>{e.fillStyle=`#2a2f35`,e.fillRect(0,0,128,128);for(let t=0;t<128;t+=16)e.fillStyle=`#3a4048`,e.fillRect(t+3,0,6,128),e.fillStyle=`rgba(255,255,255,0.06)`,e.fillRect(t+3,0,2,128);rf(e,128,128,.12,3)})}function sf(){return nf(128,128,e=>{let t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,`#1b2c44`),t.addColorStop(.5,`#26405f`),t.addColorStop(1,`#1b2c44`),e.fillStyle=t,e.fillRect(0,0,128,128),e.fillStyle=`rgba(10,14,20,0.7)`,e.fillRect(0,0,128,3),e.fillRect(0,0,3,128),rf(e,128,128,.05,11)})}function cf(){return nf(128,32,e=>{e.fillStyle=`#f0b400`,e.fillRect(0,0,128,32),e.fillStyle=`#15181c`;for(let t=-32;t<160;t+=32)e.beginPath(),e.moveTo(t,32),e.lineTo(t+16,32),e.lineTo(t+32,0),e.lineTo(t+16,0),e.closePath(),e.fill()})}function lf(e,t,n,r=256,i=96){let a=nf(r,i,a=>{a.fillStyle=n,a.fillRect(0,0,r,i),a.fillStyle=t,a.font=`700 ${Math.round(i*.55)}px "Barlow Condensed", sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.fillText(e,r/2,i/2+2)});return a.wrapS=_,a.wrapT=_,a}function uf(e,t){let n=e.geometry,r=n.parameters;if(!r||n.userData.tiled)return;n.userData.tiled=!0;let i=n.getAttribute(`uv`),a=[[r.depth,r.height],[r.depth,r.height],[r.width,r.depth],[r.width,r.depth],[r.width,r.height],[r.width,r.height]],o=i.count/6;for(let e=0;e<6;e++){let[n,r]=a[e];for(let a=0;a<o;a++){let s=e*o+a;i.setXY(s,i.getX(s)*n/t,i.getY(s)*r/t)}}i.needsUpdate=!0}function df(e,t,n){let r=[],i=e=>(r.push(e),e),a=i(af()),o=i(of()),s=i(sf()),c=i(cf());t.inner.map=a,t.inner.bumpMap=a,t.inner.bumpScale=.9,t.inner.color.set(`#a3abb3`),t.inner.roughness=.82,t.floor.map=o,t.floor.color.set(`#ffffff`),t.seat.map=s,t.seat.color.set(`#ffffff`),t.seat.roughness=.5;for(let n of e.children){let e=n;e.isMesh&&e.geometry instanceof Gi&&(e.material===t.inner?uf(e,.62):e.material===t.floor?uf(e,.5):e.material===t.seat&&uf(e,.6))}let l=new Ln;e.add(l);let u=(e,t,n,r,i,a=l)=>{let o=new Z(e,t);return o.position.set(n,r,i),a.add(o),o},d=new Q({color:`#aeb6bd`,roughness:.35,metalness:.7}),f=new Q({color:`#2d343c`,roughness:.7}),p=new Q({color:`#d4621c`,roughness:.8}),m=new Q({map:c,roughness:.7}),h=new Q({color:`#fff6e8`,emissive:`#fff1dc`,emissiveIntensity:1.6}),g=new Q({color:`#d8e4ea`,transparent:!0,opacity:.55,roughness:.15,metalness:.1});for(let e of[-2.6,-1.95,-1.3,-.65,0,1.85,2.3]){for(let t of[-1,1])t<0&&e>-1.2&&e<.9||u(new Gi(.04,1.66,.05),f,t*1.1,.9,e);u(new Gi(2.2,.04,.05),f,0,1.76,e)}for(let e of[-.49,.19])u(new Gi(.05,.74,.06),f,-1.1,.95,e);u(new Gi(.05,.05,2.1),f,-1.1,1.31,-.15),u(new Gi(.05,.05,2.1),f,-1.1,.59,-.15),u(new Gi(.1,.02,4.6),h,0,1.765,-.45);let _=new yo(.07,.013,6,14,Math.PI);for(let e of[-2.3,-1.6,-.9,-.2])for(let t of[-1,1])u(_,d,t*.55,1.77,e).rotation.set(Math.PI,Math.PI/2,0);let v=new Gi(.57,.012,.05),y=new Gi(.06,.02,.07);for(let[e,t]of[[-.72,[-1.05,-.3,.45]],[.72,[-2.05,-1.25,-.5]]])for(let n of t)u(v,p,e,.678,n+.2),u(y,d,e+(e<0?.1:-.1),.69,n+.2);let b=u(new Gi(1.5,.012,.12),m,1.52,.086,.95);b.rotation.y=Math.PI/2,uf(b,.12),c.repeat.set(.25,1);let x=new Z(new qi(.1,.1,1.62,16),g);x.rotation.x=Math.PI/2,x.position.set(1.17,1.66,.95),l.add(x),u(new Gi(.012,.42,.05),f,1.12,1.42,.95);let S=new Z(new qi(.022,.022,1.3,8),d);S.rotation.x=Math.PI/2,S.position.set(.98,1.7,.95),l.add(S);let C=i(lf(`EXIT`,`#ffffff`,`#1d7a3c`,192,72)),w=u(new go(.3,.11),new Qr({map:C}),.86,1.66,1.76);w.rotation.y=Math.PI,u(new Gi(.32,.13,.02),f,.86,1.66,1.775);let T=document.createElement(`canvas`);T.width=256,T.height=128;let E=i(new Vi(T));E.colorSpace=Ye;let D=new Qr({map:E,toneMapped:!1}),O=u(new go(.34,.17),D,1.1,1.38,-.42);O.rotation.y=-Math.PI/2,u(new Gi(.03,.21,.38),f,1.115,1.38,-.42);let k=``,A=!1,j=(e,t)=>{let n=T.getContext(`2d`);n&&(n.fillStyle=`#081008`,n.fillRect(0,0,256,128),n.fillStyle=t?`#46e07a`:`#ff5a4a`,n.beginPath(),n.arc(30,32,13,0,Math.PI*2),n.fill(),n.font=`700 30px "Barlow Condensed", sans-serif`,n.textBaseline=`middle`,n.fillText(t?`GREEN`:`RED`,52,33),n.fillStyle=`#cfe9d2`,n.font=`700 44px "Barlow Condensed", sans-serif`,n.textAlign=`center`,n.fillText(e,128,88),n.textAlign=`left`,E.needsUpdate=!0)},M={suit:`#33404d`,suitDark:`#232c36`,helmet:`#2b3036`},N=[{suit:`#1f6f6a`,suitDark:`#124441`,helmet:`#e7eaee`},{suit:`#5a3d8c`,suitDark:`#382559`,helmet:`#f0c419`},{suit:`#3a4048`,suitDark:`#24282e`,helmet:`#c4322a`}],ee=[{look:n[0]??N[0],x:-.72,z:.45,yaw:Math.PI},{look:n[1]??N[1],x:.72,z:-1.25,yaw:Math.PI},{look:N[0],x:-.72,z:-.3,yaw:Math.PI},{look:N[1],x:-.72,z:-1.05,yaw:Math.PI},{look:N[2],x:.72,z:-2.05,yaw:Math.PI},{look:M,x:.15,z:-3.3,yaw:0}],te=ee.map((t,n)=>{let r=Ed({thirdPerson:!0,look:t.look});return e.add(r.group),{body:r,pose:{mode:`seated`,forward:0,turn:0,leftHand:null,rightHand:null,gesture:null,gestureT:0,walk:0,flare:0,air:0,altFt:0,time:0,reaching:!1},frame:new un,q:new Ht,at:new G,seat:t,eye:n===ee.length-1?1.25:1.55,phase:n*1.7}}),P=0,ne=new G(1,1,1),re=new G(0,1,0);return{update(e,n){let r=+!!n.green;P+=Math.sign(r-P)*Math.min(Math.abs(r-P),e/.6);let i=P*P*(3-2*P);t.bar.position.y=tf+.6099999999999999*i,(n.spot!==k||n.green!==A)&&(k=n.spot,A=n.green,j(n.green?`GO`:n.spot||`--`,n.green));for(let t of te){if(t.body.group.visible=n.aboard,!n.aboard){t.pose.mode=`hidden`,t.body.update(t.frame,t.pose,e);continue}t.pose.mode=`seated`,t.pose.time=n.time;let r=n.time+t.phase,i=Math.sin(r*.37)*.35+Math.sin(r*1.3)*.05;t.q.setFromAxisAngle(re,t.seat.yaw+i*.25),t.at.set(t.seat.x+Math.sin(r*2.1)*.006,t.eye+Math.sin(r*7.3)*.004,t.seat.z),t.frame.compose(t.at,t.q,ne),t.body.update(t.frame,t.pose,e)}},barOpen:()=>P,dispose(){for(let t of te)e.remove(t.body.group),t.body.dispose();r.forEach(e=>e.dispose())}}}var ff=24e3;function pf(e){let t={},n=``;for(let[r,i,a]of e)t[r]=n.length,n+=a.repeat(i);return{at:t,kinds:n,size:n.length}}var mf=pf([[`t`,1,`l`],[`phase`,1,`s`],[`eye`,3,`l`],[`q`,4,`q`],[`mode`,1,`s`],[`lean`,1,`l`],[`track`,1,`l`],[`wing`,1,`l`],[`reach`,1,`s`],[`gesture`,1,`s`],[`gestureT`,1,`l`],[`forward`,1,`l`],[`turn`,1,`l`],[`flare`,1,`l`],[`air`,1,`l`],[`walk`,1,`l`],[`brakeL`,1,`l`],[`brakeR`,1,`l`],[`canopy`,1,`l`],[`canopyPos`,3,`l`],[`canopyQ`,4,`q`],[`reserve`,1,`s`],[`streamer`,1,`s`],[`pos`,3,`l`],[`vel`,3,`l`],[`ride`,1,`s`],[`ridePos`,3,`l`],[`rideQ`,4,`q`],[`rideOn`,1,`s`],[`burn`,1,`l`],[`fleet`,12,`l`]]),hf=pf([[`pos`,3,`l`],[`yaw`,1,`a`],[`bank`,1,`l`],[`brake`,1,`l`],[`state`,1,`s`],[`openT`,1,`l`],[`stateT`,1,`l`],[`linked`,1,`s`],[`gesture`,1,`s`],[`gestureT`,1,`l`]]),gf=pf([[`started`,1,`s`],[`broken`,1,`s`],[`center`,3,`l`],[`angle`,1,`a`],[`docked`,1,`s`]]),_f=mf.size,vf=_f+gf.size,yf=mf.kinds+gf.kinds+hf.kinds.repeat(2),bf=yf.length;for(let e=0;e<yf.length;e++){let t=yf.slice(e,e+4);if(yf[e]===`q`){if(t!==`qqqq`)throw Error(`tape: quaternions are four in a row`);e+=3}}var xf=[`menu`,`cabin`,`aboard`,`roof`,`freefall`,`deploying`,`malfunction`,`canopy`,`down`,`impact`],Sf=[`hidden`,`cabin`,`seated`,`perch`,`freefall`,`canopy`,`down`],Cf=[null,`pull`,`cutaway`,`reserve`],wf=[`roof`,`plane`,`heli`,`balloon`],Tf=e=>xf[e[mf.at.phase]]??`menu`;function Ef(e,t,n,r){for(let i=0;i<yf.length;i++){let a=yf[i],o=e[i],s=t[i];if(a===`l`)r[i]=o+(s-o)*n;else if(a===`s`)r[i]=n<.5?o:s;else if(a===`a`){let e=Math.atan2(Math.sin(s-o),Math.cos(s-o));r[i]=o+e*n}else{let a=e[i]*t[i]+e[i+1]*t[i+1]+e[i+2]*t[i+2]+e[i+3]*t[i+3]<0?-1:1,o=0;for(let s=0;s<4;s++){let c=e[i+s]+(a*t[i+s]-e[i+s])*n;r[i+s]=c,o+=c*c}o=Math.sqrt(o)||1;for(let e=0;e<4;e++)r[i+e]=r[i+e]/o;i+=3}}return r}function Df(){let e=[],t=mf.at.t,n={frames:e,t0:0,reset(t){e.length=0,n.t0=t},push(n,r){if(e.push(n),r)for(;e.length>2&&n[t]-e[0][t]>4;)e.shift();e.length>ff&&e.splice(0,e.length-ff)},find(n){let r=0,i=e.length-1;if(i<0)return-1;if(n<=e[0][t])return 0;for(;r<i;){let a=r+i+1>>1;e[a][t]<=n?r=a:i=a-1}return r},sample(r,i){let a=n.find(r),o=e[Math.max(0,a)];if(!o)return i;let s=e[a+1];if(!s)return i.set(o),i;let c=s[t]-o[t];return Ef(o,s,c>0?Math.min(1,Math.max(0,(r-o[t])/c)):0,i)},duration:()=>e.length?e[e.length-1][t]-e[0][t]:0};return n}var Of=5500,kf=.72,Af=.32,jf=2.65,Mf=[`freefall`,`track`,`deploying`,`canopy`,`down`],Nf=[{suit:`#a3302b`,suitDark:`#5e1b18`,helmet:`#f1f3f5`},{suit:`#d8a31a`,suitDark:`#6b5210`,helmet:`#1b1e22`}],Pf=(e,t,n)=>Array.from({length:9},(r,i)=>n.includes(i)?t:e),Ff=[Pf(`#1f6f45`,`#f2f4f6`,[1,4,7]),Pf(`#4b2d7f`,`#f0c419`,[2,6])],If=[4300,4050],Lf=[[52,-40],[58,36]];function Rf(e,t){return Math.atan2(-e,-t)}function zf(e){return Math.atan2(Math.sin(e),Math.cos(e))}function Bf(e){let t=Vt.clamp(e,0,1);return t*t*(3-2*t)}function Vf(t){let n=new G,r=new G,o=!1,s=!1,c=0,l=!1,u=Nf.map((e,n)=>{let r=Ed({thirdPerson:!0,look:e}),i=ef(Ff[n]??Ff[0]);return t.add(r.group),t.add(i.group),r.group.visible=!1,i.group.visible=!1,{body:r,wing:i,pose:{mode:`hidden`,forward:0,turn:0,leftHand:null,rightHand:null,gesture:null,gestureT:0,walk:0,flare:0,air:0,altFt:0,time:0,reaching:!1,lean:1,trackAmt:0},pos:new G,vel:new G,rel:new G,yaw:0,bank:0,brake:0,state:`freefall`,angle:0,linked:!1,final:!1,openT:0,stateT:0,pullFt:If[n]??4200,landX:Lf[n]?.[0]??70,landZ:Lf[n]?.[1]??0,frame:new un,inv:new un,left:new G,right:new G}}),d=new G,f=new G,p=new G,m=new Ht,h=new G,g=new G,_=new G,v=new bn,y=new G(1,1,1),b=(e,t)=>e.set(Math.cos(t),0,Math.sin(t)),x=(e,t)=>b(e,t).multiplyScalar(kf).add(n);function S(e,t,r){return b(e,t).add(b(p,r)).normalize(),e.multiplyScalar(kf*.55).add(n).add(p.set(0,-.06,0))}function C(e,t,n,r,i){b(d,e);let a=f.copy(d).negate(),o=d.crossVectors(a,In.DEFAULT_UP);x(p,e),o.dot(p.subVectors(t,p))>0?(r.copy(t),i[1]=!0):(n.copy(t),i[0]=!0)}function w(e){if(e.state===`freefall`||e.state===`track`)d.copy(e.pos).y+=Af,v.set(-.18,e.yaw,0,`YXZ`);else if(e.state===`deploying`){let t=Bf(e.openT/jf);d.copy(e.pos).y+=Vt.lerp(Af,md,t),v.set(-.18*(1-t),e.yaw,e.bank*.45*t,`YXZ`)}else d.copy(e.pos).y+=md,v.set(0,e.yaw,e.state===`canopy`?e.bank*.45:0,`YXZ`);m.setFromEuler(v),e.frame.compose(d,m,y),e.inv.copy(e.frame).invert()}function T(e,t){x(d,e.angle),d.y-=Af;let i=f.subVectors(d,e.pos),a=i.length();if(e.linked||a<.25)e.linked=!0,e.pos.lerp(d.addScaledVector(r,-t),1-Math.exp(-10*t)),e.vel.copy(r);else{let n=Math.hypot(i.x,i.z),a=1.3,o=n>0?i.x/n*Math.min(n*a,7):0,s=n>0?i.z/n*Math.min(n*a,7):0,c=Vt.clamp(i.y*a,-7,7);e.rel.lerp(p.set(o,c,s),1-Math.exp(-2.6*t)),e.vel.copy(r).add(e.rel)}let o=Rf(n.x-e.pos.x,n.z-e.pos.z);e.yaw+=zf(o-e.yaw)*(1-Math.exp(-3*t))}function E(e,t){let n=e.pos.y;!e.final&&(n<30||n*1.15<=e.landX-e.pos.x+30)&&(e.final=!0);let r;if(e.final)r=Rf(1,Vt.clamp((e.landZ-e.pos.z)*.01,-.3,.3));else{let t=e.landX-150-e.pos.x,n=e.landZ-e.pos.z;r=Math.hypot(t,n)<40?e.yaw+.8:Rf(t,n)}let o=Vt.clamp(zf(r-e.yaw),-.7*t,.7*t);e.yaw+=o,e.bank+=(-(o/Math.max(t,1e-4))*.7-e.bank)*(1-Math.exp(-4*t));let s=+(n<12);e.brake+=(s-e.brake)*(1-Math.exp(-6*t));let c=10.5-e.brake*6.2,l=5.4-e.brake*3.15;s&&n<6&&(l=Math.min(l,1.3)),p.set(-Math.sin(e.yaw)*c+a,-l,-Math.cos(e.yaw)*c+i),e.vel.lerp(p,1-Math.exp(-2.5*t))}return{baseVel:r,exit(e,t,i,a){o=!0,s=!1,l=!1;let p=d.set(-Math.sin(a),0,-Math.cos(a));p.dot(i)<.2&&p.copy(i).setY(0).normalize(),n.copy(e).addScaledVector(p,10),n.y-=6,r.copy(t),c=Math.atan2(e.z-n.z,e.x-n.x),u.forEach((e,t)=>{e.state=`freefall`,e.angle=c+(t+1)*Math.PI*2/3,e.linked=!1,e.final=!1,e.openT=0,e.stateT=0,e.brake=0,e.bank=0,x(e.pos,e.angle),e.pos.y-=Af,e.pos.add(f.set(t===0?2.2:-1.8,t===0?1.4:-1.1,t===0?-1.6:2.4)),e.vel.copy(r),e.rel.set(0,0,0),e.yaw=a,e.body.group.visible=!0,e.wing.group.visible=!1,e.pose.gesture=null})},update(e,t){if(o){if(p.set(a,-51,i),r.lerp(p,1-Math.exp(-1.8*e)),n.addScaledVector(r,e),!s&&n.y*3.280839895<5500){s=!0,l=!1;for(let e of u)e.state===`freefall`&&(e.state=`track`,e.stateT=0,e.linked=!1)}for(let n of u){if(n.stateT+=e,n.state===`freefall`)T(n,e);else if(n.state===`track`){let t=Rf(Math.cos(n.angle),Math.sin(n.angle));n.yaw+=zf(t-n.yaw)*(1-Math.exp(-3.5*e));let r=Bf((n.stateT-.6)/1.5),o=17*r;p.set(-Math.sin(n.yaw)*o+a,-Vt.lerp(51,44,r),-Math.cos(n.yaw)*o+i),n.vel.lerp(p,1-Math.exp(-1.6*e)),n.pos.y*3.280839895<n.pullFt&&(n.state=`deploying`,n.openT=0,n.pose.gesture=`pull`,n.pose.gestureT=0)}else if(n.state===`deploying`){n.openT+=e;let t=Bf(n.openT/jf),r=Vt.lerp(6,10.5,t),o=Vt.lerp(Math.min(Math.abs(n.vel.y),55),5.2,t);p.set(-Math.sin(n.yaw)*r+a,-o,-Math.cos(n.yaw)*r+i),n.vel.lerp(p,1-Math.exp(-3*e)),n.openT>=jf&&(n.state=`canopy`,n.stateT=0)}else n.state===`canopy`&&E(n,e);n.state!==`down`&&n.pos.addScaledVector(n.vel,e),n.state===`canopy`&&n.pos.y<=0&&(n.state=`down`,n.stateT=0,n.pos.y=0,n.vel.set(0,0,0)),n.pose.time=t}}},draw(t,n){if(!o)return;let[r,i]=u,a=r.linked&&i.linked;for(let o of u){w(o);let s=o.pose;if(s.leftHand=null,s.rightHand=null,s.time=n,s.air=o.vel.length(),s.altFt=o.pos.y*e,s.reaching=!1,s.trackAmt=0,s.flare=0,s.gesture&&(s.gestureT+=t,s.gestureT>1.1&&(s.gesture=null)),o.state===`freefall`){s.mode=`freefall`,s.lean=1;let e=[!1,!1];if(a){let t=o===r?i:r;C(o.angle,S(h,o.angle,t.angle),g,_,e)}l&&o.linked&&C(o.angle,S(h,o.angle,c),g,_,e),e[0]&&(s.leftHand=o.left.copy(g).applyMatrix4(o.inv)),e[1]&&(s.rightHand=o.right.copy(_).applyMatrix4(o.inv))}else if(o.state===`track`)s.mode=`freefall`,s.lean=1,s.trackAmt=Bf((o.stateT-.4)/1.2);else if(o.state===`deploying`){let e=Bf(o.openT/jf);s.mode=o.openT>.9?`canopy`:`freefall`,s.lean=1-e,s.reaching=!0,s.mode===`canopy`&&(s.leftHand=Yd(o.left,-1,0),s.rightHand=Yd(o.right,1,0),s.leftHand.y-=Gd,s.rightHand.y-=Gd)}else o.state===`canopy`?(s.mode=`canopy`,s.lean=0,s.flare=o.brake,s.leftHand=Yd(o.left,-1,o.brake),s.rightHand=Yd(o.right,1,o.brake),s.leftHand.y-=Gd,s.rightHand.y-=Gd):(s.mode=`down`,s.lean=0);o.body.update(o.frame,s,t);let u=o.state===`canopy`||o.state===`deploying`&&o.openT>.35||o.state===`down`;if(o.wing.group.visible=u,u){let e=o.state===`down`?Bf(Math.min(1,o.stateT/qd)):0,t=o.state===`deploying`?Bf(Vt.clamp((o.openT-.3)/(jf*.8),.02,1)):1-e*.8;o.wing.group.position.copy(o.pos),o.wing.group.position.y+=md-Gd,o.wing.group.rotation.set(0,o.yaw,o.state===`canopy`?o.bank*.45:0),Jd(o.wing.group,e),o.wing.update(t,o.brake,o.brake)}}},active:()=>o&&!s&&u.every(e=>e.state===`freefall`),ready:()=>o&&!s&&u.every(e=>e.state===`freefall`&&e.linked),broken:()=>s,started:()=>o,slot:e=>x(e,c),center:e=>e.copy(n),slotYaw:()=>Rf(-Math.cos(c),-Math.sin(c)),setPlayerDocked(e){l=e},playerGrips(e,t){let n=[!1,!1];for(let r of u)C(c,S(h,c,r.angle),e,t,n)},nearest(e){let t=1/0;for(let n of u)n.state!==`canopy`&&n.state!==`down`&&(Math.abs(n.pos.y-e.y)>60||(t=Math.min(t,Math.hypot(n.pos.x-e.x,n.pos.z-e.z))));return t},casters(e){if(o)for(let t of u)t.body.group.visible&&e.push({feet:t.pos,wing:t.wing.group})},record(e){let t=gf.at;e[_f+t.started]=+!!o,e[_f+t.broken]=+!!s,e.set([n.x,n.y,n.z],_f+t.center),e[_f+t.angle]=c,e[_f+t.docked]=+!!l,u.forEach((t,n)=>{let r=vf+n*hf.size,i=hf.at;e.set([t.pos.x,t.pos.y,t.pos.z],r+i.pos),e[r+i.yaw]=t.yaw,e[r+i.bank]=t.bank,e[r+i.brake]=t.brake,e[r+i.state]=Mf.indexOf(t.state),e[r+i.openT]=t.openT,e[r+i.stateT]=t.stateT,e[r+i.linked]=+!!t.linked,e[r+i.gesture]=Cf.indexOf(t.pose.gesture),e[r+i.gestureT]=t.pose.gestureT})},play(e){let t=gf.at;o=e[_f+t.started]===1,s=e[_f+t.broken]===1,n.fromArray(e,_f+t.center),c=e[_f+t.angle],l=e[_f+t.docked]===1,u.forEach((t,n)=>{let r=vf+n*hf.size,i=hf.at;t.pos.fromArray(e,r+i.pos),t.yaw=e[r+i.yaw],t.bank=e[r+i.bank],t.brake=e[r+i.brake],t.state=Mf[e[r+i.state]]??`freefall`,t.openT=e[r+i.openT],t.stateT=e[r+i.stateT],t.linked=e[r+i.linked]===1,t.pose.gesture=Cf[e[r+i.gesture]]??null,t.pose.gestureT=e[r+i.gestureT],o||(t.body.group.visible=!1,t.wing.group.visible=!1,t.pose.mode=`hidden`)})},reset(){o=!1,s=!1,l=!1;for(let e of u)e.body.group.visible=!1,e.wing.group.visible=!1,e.pose.mode=`hidden`},dispose(){for(let e of u)t.remove(e.body.group,e.wing.group),e.body.dispose(),e.wing.dispose()}}}var Hf=class e extends Z{constructor(){let t=e.SkyShader,n=new Oo({name:t.name,uniforms:To.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new Gi(1,1,1),n),this.isSky=!0}};Hf.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new G},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Uf(e,t){let n=Vt.degToRad(e),r=Vt.degToRad(t);return new G(Math.sin(r)*Math.cos(n),Math.sin(n),-Math.cos(r)*Math.cos(n))}var Wf={day:{sun:new G(-.62,.5,.3).normalize(),sky:{turbidity:3.2,rayleigh:1.25,mieCoefficient:.0035,mieDirectionalG:.82,gain:.36},haze:[.8,.85,.9],hazeSun:[1,1,1],skyTint:[1,1,1],sunColor:`#fff1dc`,sunIntensity:2.6,hemiSky:`#cfe0f0`,hemiGround:`#5d6650`,hemiIntensity:.35,exposure:1.08,env:.85,cloudLit:[1.1,1.06,1],cloudShade:[.42,.48,.58],veil:[1,1,1],glint:[9,7.4,5.6],foam:[.78,.8,.8],lake:1,windows:.4,streets:0,glow:{threshold:.96,knee:.04,strength:.5,saturation:1.04,contrast:1.03,vignette:.12,lift:[0,0,0],gain:[1,1,1]}},golden:{sun:Uf(7,291),sky:{turbidity:3.6,rayleigh:1.9,mieCoefficient:.004,mieDirectionalG:.8,gain:.5},haze:[.86,.78,.72],hazeSun:[1.14,.98,.8],skyTint:[1,.94,1.08],sunColor:`#ffbe86`,sunIntensity:2.3,hemiSky:`#b9c3dc`,hemiGround:`#5a4c42`,hemiIntensity:.42,exposure:1.18,env:.8,cloudLit:[1,.76,.56],cloudShade:[.4,.4,.54],veil:[1,.9,.82],glint:[10,6.4,3.2],foam:[.74,.68,.62],lake:.8,windows:.7,streets:0,glow:{threshold:.93,knee:.05,strength:.5,saturation:1.06,contrast:1.04,vignette:.18,lift:[.012,.004,0],gain:[1.02,1,.97]}},dusk:{sun:Uf(1.2,296),sky:{turbidity:2.4,rayleigh:2.2,mieCoefficient:.004,mieDirectionalG:.78,gain:1.1},haze:[.6,.5,.56],hazeSun:[1.3,.92,.62],skyTint:[1,.82,1.26],sunColor:`#ff9a5c`,sunIntensity:1.1,hemiSky:`#8a93c0`,hemiGround:`#3b3440`,hemiIntensity:.6,exposure:1.3,env:.9,cloudLit:[.92,.52,.44],cloudShade:[.26,.26,.4],veil:[.62,.53,.58],glint:[8,3.8,1.6],foam:[.34,.31,.34],lake:.5,windows:1.6,streets:.6,glow:{threshold:.88,knee:.06,strength:.8,saturation:1.08,contrast:1.05,vignette:.24,lift:[0,.004,.02],gain:[1,.99,1.02]}}},Gf=Wf.day.sun.clone(),Kf={...Wf.day.sky},qf=new G(...Wf.day.haze),Jf=new X().setRGB(qf.x,qf.y,qf.z,Ye),Yf={hazeSun:new G(...Wf.day.hazeSun),skyTint:new G(...Wf.day.skyTint),cloudLit:new G(...Wf.day.cloudLit),cloudShade:new G(...Wf.day.cloudShade),veil:new G(...Wf.day.veil),glint:new G(...Wf.day.glint),foam:new G(...Wf.day.foam),lake:{value:Wf.day.lake}};function Xf(e){let t=Wf[e];return Gf.copy(t.sun),Object.assign(Kf,t.sky),qf.set(...t.haze),Jf.setRGB(qf.x,qf.y,qf.z,Ye),Yf.hazeSun.set(...t.hazeSun),Yf.skyTint.set(...t.skyTint),Yf.cloudLit.set(...t.cloudLit),Yf.cloudShade.set(...t.cloudShade),Yf.veil.set(...t.veil),Yf.glint.set(...t.glint),Yf.foam.set(...t.foam),Yf.lake.value=t.lake,t}function Zf(e){let t=e;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Qf(e){return Math.max(0,Math.min(1,e))}function $f(e,t){let n=[5804542996261093e-21,13562911419845635e-21,30265902468824876e-21],r=[183999185144339.78,277980239196605.28,407904795438610.94],i=1e3*Math.max(0,1-Math.exp(-((1.6110731556870734-Math.acos(Math.max(-1,Math.min(1,t.y))))/1.5))),a=.434*(.2*Kf.turbidity*1e-17),o=Math.acos(Math.max(0,e.y)),s=1/(Math.cos(o)+.15*(93.885-o*180/Math.PI)**-1.253),c=e.dot(t),l=.0596831036594608*(1+(c*.5+.5)**2),u=Kf.mieDirectionalG,d=.07957747154594767*(1-u*u)/(1-2*u*c+u*u)**1.5,f=Qf((1-t.y)**5),p=[0,3e-4,75e-5],m=new G;for(let e=0;e<3;e++){let t=(n[e]??0)*Kf.rayleigh,o=a*(r[e]??0)*Kf.mieCoefficient,c=Math.exp(-(t*8400*s+o*1250*s)),u=i*(t*l+o*d)/(t+o),h=(u*(1-c))**1.5;h*=1+(Math.sqrt(u*c)-1)*f;let g=(h+.1*c)*.04+(p[e]??0);m.setComponent(e,g*Kf.gain)}return m}function ep(e){let t=new Hf;t.scale.setScalar(4e4),t.frustumCulled=!1;let n=t.material,r=n.uniforms;r.turbidity.value=Kf.turbidity,r.rayleigh.value=Kf.rayleigh,r.mieCoefficient.value=Kf.mieCoefficient,r.mieDirectionalG.value=Kf.mieDirectionalG,r.sunPosition.value.copy(Gf),r.cloudCoverage.value=.32,r.cloudDensity.value=.5,r.cloudElevation.value=.55,r.cloudScale.value=16e-5;let i=new G,a=new G;for(let e=0;e<16;e++){let t=e/16*Math.PI*2;a.set(Math.cos(t),0,Math.sin(t)),i.add($f(a,Gf))}i.multiplyScalar(1/16),i.multiply(new G(.98,1,1.06));let o=$f(a.set(0,1,0),Gf);i.multiply(Yf.skyTint),o.multiply(Yf.skyTint);let s=new X().setRGB(i.x,i.y,i.z),c=new X().setRGB(o.x,o.y,o.z);r.skyGain={value:Kf.gain},r.hazeColor={value:qf.clone()},r.hazeSun={value:Yf.hazeSun.clone()},r.skyTint={value:Yf.skyTint.clone()},r.horizonY={value:0},n.fragmentShader=`uniform float skyGain;
uniform vec3 skyTint;
uniform vec3 hazeColor;
uniform vec3 hazeSun;
uniform float horizonY;
`+n.fragmentShader.replace(`gl_FragColor = vec4( texColor, 1.0 );`,`gl_FragColor = vec4( texColor * skyGain * skyTint, 1.0 );`).replace(`#include <colorspace_fragment>`,`#include <colorspace_fragment>
      float hz = 1.0 - smoothstep( horizonY - 0.004, horizonY + 0.12, direction.y );
      vec3 sunDir = vSunDirection;
      // A low sun keeps its disc and glow instead of sinking into the haze band.
      hz *= 1.0 - smoothstep( 0.93, 0.9995, dot( direction, sunDir ) );
      vec2 flatDir = normalize( direction.xz + 1e-5 );
      vec2 flatSun = normalize( sunDir.xz + 1e-5 );
      float toward = pow( max( dot( flatDir, flatSun ), 0.0 ), 3.0 ) * smoothstep( horizonY, horizonY + 0.05, direction.y );
      vec3 haze = hazeColor * mix( vec3( 1.0 ), hazeSun, toward );
      gl_FragColor.rgb = mix( gl_FragColor.rgb, haze, hz * hz * ( 3.0 - 2.0 * hz ) );`),n.needsUpdate=!0;let l=new Kn,u=new Hf;u.material.dispose(),u.material=n,u.scale.setScalar(100),l.add(u);let d=new Qr({color:new X().setRGB(.045,.05,.052)}),f=new Z(new Ki(80,24),d);f.rotation.x=-Math.PI/2,f.position.y=-3,l.add(f);let p=new mc(e),m=p.fromScene(l,.02,.1,400);return p.dispose(),f.geometry.dispose(),d.dispose(),{sky:t,fog:Jf.clone(),haze:s,zenith:c,envMap:m.texture,setViewHeight(e){r.horizonY.value=-Math.sqrt(2*Math.max(e,0)/6371e3)},update(e){r.time.value=e},dispose(){m.dispose()}}}function tp(e,t,n,r){let i=document.createElement(`canvas`);i.width=t,i.height=t;let a=i.getContext(`2d`);if(!a)return null;let o=Zf(e),s=t/1024;a.fillStyle=`#4a4f55`,a.fillRect(0,0,t,t);let c=t/n,l=c*.13,u=[`#6d6a66`,`#7a746c`,`#5d6268`,`#8a8580`,`#9a9288`,`#55585c`,`#a39d93`,`#6b5d52`,`#7c6f63`,`#5f5a55`],d=[`#3f5f37`,`#4a6b3e`,`#36532f`,`#56743f`],f=e=>e[Math.floor(o()*e.length)];for(let e=0;e<n;e++)for(let t=0;t<n;t++){let n=t*c+l/2,r=e*c+l/2,i=c-l,p=c-l,m=o();if(m<.08){a.fillStyle=f(d),a.fillRect(n,r,i,p);for(let e=0;e<40;e++)a.fillStyle=o()>.5?`rgba(30,52,28,0.7)`:`rgba(70,100,52,0.6)`,a.beginPath(),a.arc(n+o()*i,r+o()*p,(3+o()*7)*s,0,Math.PI*2),a.fill();continue}if(m<.15){a.fillStyle=`#575c61`,a.fillRect(n,r,i,p),a.fillStyle=`rgba(220,224,228,0.25)`;for(let e=0;e<6;e++)a.fillRect(n+4*s,r+(e+.5)*(p/6),i-8*s,1*s);for(let e=0;e<60;e++)a.fillStyle=f([`#c9ccd0`,`#2b2e33`,`#8b1e1e`,`#e4e6e8`,`#3c4a5c`]),a.fillRect(n+o()*(i-6*s),r+Math.floor(o()*6+.2)*(p/6)+2*s,3*s,5*s);continue}a.fillStyle=`#3f4348`,a.fillRect(n,r,i,p);let h=m>.85?2:3+Math.floor(o()*4),g=(p-4*s)/2;for(let e of[0,1]){let t=r+e*(g+4*s),c=n;for(let e=0;e<h;e++){let r=e===h-1?n+i-c:i/h*(.75+o()*.5);a.fillStyle=f(u);let l=(1+o()*2)*s;a.fillRect(c+l,t+l,r-l*2,g-l*2),a.fillStyle=`rgba(255,255,255,0.12)`,a.fillRect(c+l,t+l,r-l*2,2*s),a.fillStyle=`rgba(0,0,0,0.18)`,a.fillRect(c+l,t+g-l-3*s,r-l*2,3*s);let d=Math.floor(o()*4);for(let e=0;e<d;e++)a.fillStyle=o()>.5?`#b9bcbf`:`#8e9296`,a.fillRect(c+l+o()*(r-12*s),t+l+o()*(g-12*s),(3+o()*5)*s,(3+o()*5)*s);if(c+=r,c>=n+i-2)break}}for(let e=0;e<18;e++){if(o()>.6)continue;let e=o(),t=Math.floor(o()*4),c=t<2?n+e*i:t===2?n-2*s:n+i+2*s,l=t>=2?r+e*p:t===0?r-2*s:r+p+2*s;a.fillStyle=f([`rgba(52,84,44,0.85)`,`rgba(64,96,50,0.85)`,`rgba(44,70,40,0.85)`]),a.beginPath(),a.arc(c,l,(2.5+o()*3)*s,0,Math.PI*2),a.fill()}}a.fillStyle=`rgba(225,205,140,0.35)`;for(let e=0;e<=n;e++)a.fillRect(e*c-.5*s,0,1*s,t),a.fillRect(0,e*c-.5*s,t,1*s);let p=new Vi(i);return p.colorSpace=Ye,p.wrapS=g,p.wrapT=g,p.anisotropy=r,p}function np(e,t){let n=document.createElement(`canvas`);n.width=512,n.height=512;let r=n.getContext(`2d`);if(!r)return null;let i=Zf(21),a=512/e,o=a*.13;r.fillStyle=`#000`,r.fillRect(0,0,512,512),r.fillStyle=`rgba(255,140,50,0.07)`;for(let t=0;t<=e;t++)r.fillRect(t*a-o/2,0,o,512),r.fillRect(0,t*a-o/2,512,o);for(let t=0;t<=e;t++)for(let e=0;e<512;e+=a/5)for(let n of[-.4,.4]){let s=t*a+n*o;for(let[t,n]of[[s,e+i()*3],[e+i()*3,s]])i()<.3||(r.fillStyle=i()>.2?`#ffb257`:`#fff1cf`,r.globalAlpha=.5+i()*.5,r.fillRect(t-1,n-1,2,2))}r.globalAlpha=1;let s=new Vi(n);return s.colorSpace=Ye,s.wrapS=g,s.wrapT=g,s.anisotropy=t,s}function rp(e){let t=new Uint8Array(512),n=Zf(e),r=Array.from({length:256},(e,t)=>t);for(let e=255;e>0;e--){let t=Math.floor(n()*(e+1));[r[e],r[t]]=[r[t],r[e]]}for(let e=0;e<512;e++)t[e]=r[e&255];let i=(e,n)=>t[t[e&255]+n&511]/255;return(e,t)=>{let n=Math.floor(e),r=Math.floor(t),a=e-n,o=t-r,s=a*a*(3-2*a),c=o*o*(3-2*o),l=i(n,r),u=i(n+1,r),d=i(n,r+1),f=i(n+1,r+1);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}}function ip(e,t,n,r){e.wrapS=g,e.wrapT=g;let i={uTime:{value:0},uSun:{value:Gf.clone()},uGlint:{value:Yf.glint.clone()},uFoam:{value:Yf.foam.clone()},uLake:{value:Yf.lake.value},uCam:{value:new G},uNormals:{value:e},uHaze:{value:new G(t.r,t.g,t.b)},uFogColor:{value:qf.clone()},uZenith:{value:new G(n.r,n.g,n.b)},uFogNear:{value:400},uFogFar:{value:14e3},uShore:{value:r}};return{material:new Oo({uniforms:i,fog:!1,vertexShader:`varying vec3 vWorld;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`varying vec3 vWorld;
      uniform float uTime; uniform vec3 uSun; uniform vec3 uGlint; uniform vec3 uFoam; uniform float uLake; uniform vec3 uCam; uniform sampler2D uNormals;
      uniform vec3 uHaze; uniform vec3 uFogColor; uniform vec3 uZenith; uniform float uFogNear; uniform float uFogFar; uniform float uShore;
      vec3 nrm(vec2 p){ return texture2D(uNormals, p).rgb * 2.0 - 1.0; }
      void main(){
        vec3 toCam = uCam - vWorld;
        float dist = length(toCam);
        vec3 view = toCam / dist;
        vec2 p = vWorld.xz;
        vec3 t = nrm(p / 97.0 + vec2(uTime * 0.006, uTime * 0.004));
        t += nrm(p / 31.0 + vec2(-uTime * 0.011, uTime * 0.014));
        t += nrm(p / 9.0 + vec2(uTime * 0.026, -uTime * 0.019)) * 0.5;
        float k = mix(0.42, 0.12, smoothstep(150.0, 7000.0, dist));
        vec3 n = normalize(vec3(t.x * k, 1.0, t.y * k));
        vec3 r = reflect(-view, n);
        r.y = abs(r.y);
        vec3 skyRefl = mix(uHaze, uZenith, pow(clamp(r.y, 0.0, 1.0), 0.45));
        float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, view), 0.0), 5.0);
        float deep = smoothstep(uShore + 10.0, uShore + 900.0, vWorld.x);
        // Shallow water only glows teal in daylight; in low light it goes dark like the rest.
        vec3 body = mix(vec3(0.035, 0.20, 0.22) * uLake, vec3(0.006, 0.03, 0.055), deep);
        body *= (0.55 + 0.45 * max(uSun.y, 0.0)) * uLake;
        vec3 col = mix(body, skyRefl, fres);
        float rs = max(dot(r, uSun), 0.0);
        col += uGlint * pow(rs, 900.0);
        col += uGlint * 0.0178 * pow(rs, 28.0);
        float shore = smoothstep(uShore + 55.0, uShore - 2.0, vWorld.x);
        float breakers = texture2D(uNormals, p / 14.0 + vec2(uTime * 0.03, 0.0)).r;
        float foam = shore * smoothstep(0.45, 0.8, breakers + shore * 0.35) * (1.0 - smoothstep(600.0, 2500.0, dist));
        col = mix(col, uFoam, foam * 0.8);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        float fog = clamp((dist - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, fog);
      }`}),uniforms:i}}var ap=1850,op=1.6;function sp(e){let t=document.createElement(`canvas`);t.width=512,t.height=512;let n=t.getContext(`2d`);if(!n)return null;let r=rp(e),i=n.createImageData(512,512);for(let e=0;e<512;e++)for(let t=0;t<512;t++){let n=t/512,a=e/512,o=0,s=.5,c=3,l=14;for(let e=0;e<5;e++)o+=r(n*c+e*13,a*l)*s,s*=.5,c*=2,l*=2;let u=Math.max(0,1-Math.hypot(n-.5,a-.5)*2.1),d=Math.max(0,Math.min(1,(o-.5)*3.2))*u*u,f=(e*512+t)*4;i.data[f]=255,i.data[f+1]=255,i.data[f+2]=255,i.data[f+3]=Math.round(d*255)}n.putImageData(i,0,0);let a=new Vi(t);return a.colorSpace=Ye,a}function cp(e){let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`);if(!n)return null;let r=n.createImageData(256,256);for(let t=0;t<4;t++){let n=rp(e+t*31),i=t%2*128,a=Math.floor(t/2)*128;for(let e=0;e<128;e++)for(let t=0;t<128;t++){let o=(t+.5)/128-.5,s=(e+.5)/128-.5,c=0,l=.5,u=4;for(let e=0;e<4;e++)c+=n(o*u+7,s*u+3)*l,l*=.5,u*=2;let d=Math.hypot(o,s)*2,f=Math.max(0,Math.min(1,(1-d)*2.1+(c-.5)*1.3)),p=((a+e)*256+i+t)*4;r.data[p]=Math.round(c*255),r.data[p+1]=255,r.data[p+2]=255,r.data[p+3]=Math.round(f*f*(3-2*f)*255)}}n.putImageData(r,0,0);let i=new Vi(t);return i.colorSpace=``,i}function lp(e,t){let n=Zf(e),r=[],i=[[500,-30,230]];for(let e=0;i.length<22&&e<400;e++){let e=-1700+n()*4400,t=-2700+n()*5400,r=110+n()*170;i.every(([n,i,a])=>Math.hypot(n-e,i-t)>a+r+120)&&i.push([e,t,r])}for(let[e,a,o]of i){let i=o*(.5+n()*.35),s=ap+(n()-.5)*90,c=new G(e,s+i*.45,a),l=[],u=Math.round((20+o/5)*t);for(let r=0;r<u;r++){let r=n()*Math.PI*2,u=Math.sqrt(n())*o*.9,d=i*Math.sqrt(Math.max(0,1-(u/o)**2)),f=o*(.26+n()*.22)*(1-u/o*.3)/Math.sqrt(t),p=s+f*.35+n()*Math.max(0,d-f*.5),m=new G(e+Math.cos(r)*u,p,a+Math.sin(r)*u),h=m.clone().sub(c).normalize(),g=(p-s)/i;l.push({center:m,size:f,light:Math.min(1,Math.max(0,.18+.38*(.5+.5*h.dot(Gf))+.5*g)),variant:Math.floor(n()*4),rot:n()*Math.PI*2,alpha:.75+n()*.25,dist:0})}r.push({center:c,reach:o+i,puffs:l})}return r}function up(e,t=1){let n=lp(73,t),r=n.flatMap(e=>e.puffs),i=r.length,a=cp(73),o=new Cs;o.setAttribute(`position`,new Or([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),o.setIndex([0,1,2,0,2,3]);let s=new pi(new Float32Array(i*3),3),c=new pi(new Float32Array(i*4),4),l=new pi(new Float32Array(i*2),2);for(let e of[s,c,l])e.setUsage(tt);o.setAttribute(`iCenter`,s),o.setAttribute(`iData`,c),o.setAttribute(`iMore`,l),o.instanceCount=i;let u=new Map;for(let e of n){let t=Math.min(...e.puffs.map(e=>e.center.y-e.size*.35));for(let n of e.puffs)u.set(n,t)}let d={uTex:{value:a},uSun:{value:Gf.clone()},uFogColor:{value:qf.clone()},uLit:{value:Yf.cloudLit.clone()},uShade:{value:Yf.cloudShade.clone()},uFogNear:{value:500},uFogFar:{value:16e3}},f=new Oo({uniforms:d,transparent:!0,depthWrite:!1,fog:!1,vertexShader:`attribute vec3 iCenter; attribute vec4 iData; attribute vec2 iMore;
      uniform vec3 uSun;
      varying vec2 vUv; varying vec2 vDir; varying vec2 vSun; varying float vLight;
      varying float vAlpha; varying float vWorldY; varying float vBase; varying float vDist;
      void main(){
        float size = iData.x;
        float c = cos(iData.w);
        float s = sin(iData.w);
        vec2 corner = position.xy;
        vec2 rc = vec2(c * corner.x - s * corner.y, s * corner.x + c * corner.y);
        vec4 mv = viewMatrix * vec4(iCenter, 1.0);
        float dist = length(mv.xyz);
        // Fade a puff out as you enter it; the veil takes over from there.
        float near = smoothstep(size * 0.15, size * 0.75, dist);
        mv.xy += rc * size;
        vec3 worldOff = vec3(rc * size, 0.0) * mat3(viewMatrix);
        vWorldY = iCenter.y + worldOff.y;
        vBase = iMore.y;
        float v = iData.z;
        vUv = (corner * 0.5 + 0.5) * 0.5 + vec2(mod(v, 2.0), floor(v / 2.0)) * 0.5;
        vDir = rc;
        vec3 sunView = (viewMatrix * vec4(uSun, 0.0)).xyz;
        vSun = normalize(sunView.xy + 1e-4) * (1.0 - abs(sunView.z) * 0.5);
        vLight = iData.y;
        vAlpha = iMore.x * near;
        vDist = length(mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`uniform sampler2D uTex; uniform vec3 uFogColor; uniform vec3 uLit; uniform vec3 uShade; uniform float uFogNear; uniform float uFogFar;
      varying vec2 vUv; varying vec2 vDir; varying vec2 vSun; varying float vLight;
      varying float vAlpha; varying float vWorldY; varying float vBase; varying float vDist;
      void main(){
        vec4 t = texture2D(uTex, vUv);
        float a = t.a * vAlpha * smoothstep(vBase - 4.0, vBase + 26.0, vWorldY);
        if (a < 0.004) discard;
        float lit = clamp(vLight + 0.24 * dot(vDir, vSun) + (t.r - 0.5) * 0.3, 0.0, 1.0);
        vec3 col = mix(uShade, uLit, lit);
        gl_FragColor = vec4(col, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        float fog = clamp((vDist - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, fog);
      }`}),p=new Z(o,f);p.frustumCulled=!1,e.add(p);let m=new go(1,1),h=[.93,.95,.97,.93,.95,.97,.74,.78,.83,.74,.78,.83].map((e,t)=>e*Yf.veil.getComponent(t%3));m.setAttribute(`color`,new Or(h,3));let g=new Qr({vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}),_=new Z(m,g);_.frustumCulled=!1,_.renderOrder=10,e.add(_);let v=sp(19),y=new go(26e3,26e3),b=new Qr({map:v,color:`#f4f7fb`,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,side:2}),x=new Z(y,b);x.rotation.x=Math.PI/2,x.rotation.z=.35,x.position.set(600,6400,0),e.add(x);let S=r.slice(),C=new G(1e9,0,0),w=new G;function T(){for(let e=0;e<i;e++){let t=S[e];s.setXYZ(e,t.center.x,t.center.y,t.center.z),c.setXYZW(e,t.size,t.light,t.variant,t.rot),l.setXY(e,t.alpha,u.get(t)??0)}s.needsUpdate=!0,c.needsUpdate=!0,l.needsUpdate=!0}return{update(e,t,r){d.uFogNear.value=t,d.uFogFar.value=r;let i=e.position;if(i.distanceToSquared(C)>4){C.copy(i);for(let e of S)e.dist=e.center.distanceToSquared(i);S.sort((e,t)=>t.dist-e.dist),T()}let a=1;for(let e of n)if(!(e.center.distanceToSquared(i)>e.reach*e.reach))for(let t of e.puffs){let e=t.size*.7,n=t.center.distanceTo(i);if(n>e)continue;let r=1-Math.min(1,Math.max(0,(n-e*.3)/(e*.7)));a*=1-r*r*(3-2*r)*t.alpha}let o=1-a;if(g.opacity=Math.min(.94,o*1.1),_.visible=g.opacity>.005,_.visible){e.getWorldDirection(w),_.position.copy(i).addScaledVector(w,op),_.quaternion.copy(e.quaternion);let t=2*op*Math.tan(Vt.degToRad(e.fov)/2)*1.25;_.scale.set(t*e.aspect*1.25,t,1)}return o},dispose(){e.remove(p,_,x),y.dispose(),b.dispose(),v?.dispose(),o.dispose(),f.dispose(),a?.dispose(),m.dispose(),g.dispose()}}}var dp=new bs(-1,1,1,-1,0,1),fp=new class extends Br{constructor(){super(),this.setAttribute(`position`,new Or([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Or([0,2,0,0,2,0],2))}},pp=class{constructor(e){this._mesh=new Z(fp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},mp=.8,hp=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,gp=`
  uniform sampler2D tFrame; uniform vec2 uTexel; uniform float uThreshold; uniform float uKnee;
  varying vec2 vUv;
  vec3 pick(vec2 uv) {
    vec3 c = texture2D(tFrame, uv).rgb;
    float m = max(c.r, max(c.g, c.b));
    float w = smoothstep(uThreshold - uKnee, uThreshold + uKnee, m);
    return c * c * w;
  }
  void main() {
    // Four bilinear taps cover a 4x4 block, so lights a pixel or two wide still count.
    vec3 c = pick(vUv + uTexel * vec2(-1.0, -1.0)) + pick(vUv + uTexel * vec2(1.0, -1.0))
           + pick(vUv + uTexel * vec2(-1.0, 1.0)) + pick(vUv + uTexel * vec2(1.0, 1.0));
    gl_FragColor = vec4(c * 0.25, 1.0);
  }`,_p=`
  uniform sampler2D tSrc; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec2 h = uTexel;
    vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
    c += texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb;
    c += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb;
    c += texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb;
    c += texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb;
    gl_FragColor = vec4(c / 8.0, 1.0);
  }`,vp=`
  uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uWeight;
  varying vec2 vUv;
  void main() {
    vec2 h = uTexel;
    vec3 c = texture2D(tSrc, vUv + vec2(-2.0 * h.x, 0.0)).rgb;
    c += texture2D(tSrc, vUv + vec2(2.0 * h.x, 0.0)).rgb;
    c += texture2D(tSrc, vUv + vec2(0.0, -2.0 * h.y)).rgb;
    c += texture2D(tSrc, vUv + vec2(0.0, 2.0 * h.y)).rgb;
    c += texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb * 2.0;
    c += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb * 2.0;
    c += texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb * 2.0;
    c += texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb * 2.0;
    gl_FragColor = vec4(c / 12.0 * uWeight, 1.0);
  }`,yp=`
  uniform sampler2D tFrame; uniform sampler2D tBloom;
  uniform float uStrength; uniform float uNorm; uniform float uSaturation; uniform float uContrast; uniform float uVignette;
  uniform vec3 uLift; uniform vec3 uGain; uniform float uAspect;
  varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tFrame, vUv).rgb;
    // Screen blend keeps the glow from clipping bright areas to flat white.
    vec3 b = clamp(sqrt(texture2D(tBloom, vUv).rgb * uNorm) * uStrength, 0.0, 1.0);
    c = 1.0 - (1.0 - c) * (1.0 - b);
    c = (c - 0.5) * uContrast + 0.5;
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(vec3(l), c, uSaturation);
    c = c * uGain + uLift * (1.0 - c);
    vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
    c *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(p));
    // A whisper of noise hides banding in the dark gradients.
    float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    gl_FragColor = vec4(clamp(c, 0.0, 1.0) + (n - 0.5) / 255.0, 1.0);
  }`;function bp(e,t,n){return new Oo({vertexShader:hp,fragmentShader:e,uniforms:t,blending:n,depthTest:!1,depthWrite:!1,toneMapped:!1})}function xp(e,t,n){let r=e.extensions.has(`EXT_color_buffer_half_float`)||e.extensions.has(`EXT_color_buffer_float`)?M:T,i=new W,a=null,o=[],s=bp(gp,{tFrame:{value:null},uTexel:{value:new W},uThreshold:{value:t.threshold},uKnee:{value:t.knee}},0),c=bp(_p,{tSrc:{value:null},uTexel:{value:new W}},0),l=bp(vp,{tSrc:{value:null},uTexel:{value:new W},uWeight:{value:1}},2),u=bp(yp,{tFrame:{value:null},tBloom:{value:null},uStrength:{value:t.strength},uNorm:{value:1},uSaturation:{value:t.saturation},uContrast:{value:t.contrast},uVignette:{value:t.vignette},uLift:{value:new G(...t.lift)},uGain:{value:new G(...t.gain)},uAspect:{value:1}},0),d=new pp(s);function f(){if(e.getDrawingBufferSize(i),a&&a.image.width===i.x&&a.image.height===i.y)return;a?.dispose(),a=new zi(i.x,i.y),a.minFilter=S,a.magFilter=S;for(let e of o)e.dispose();o=[];let t=i.x,s=i.y;for(let e=0;e<n;e++)t=Math.max(1,Math.round(t/2)),s=Math.max(1,Math.round(s/2)),o.push(new sn(t,s,{type:r,depthBuffer:!1,minFilter:S,magFilter:S}));u.uniforms.uAspect.value=i.x/i.y;let c=0;for(let e=0;e<n;e++)c+=mp**e;u.uniforms.uNorm.value=1/c}function p(t,n){e.setRenderTarget(t),d.material=n,d.render(e)}return{render(){if(f(),!a||!o.length)return;e.setRenderTarget(null),e.copyFramebufferToTexture(a);let t=e.autoClear;e.autoClear=!1,s.uniforms.tFrame.value=a,s.uniforms.uTexel.value.set(1/i.x,1/i.y),p(o[0],s);for(let e=1;e<o.length;e++){let t=o[e-1];c.uniforms.tSrc.value=t.texture,c.uniforms.uTexel.value.set(.5/t.width,.5/t.height),p(o[e],c)}for(let e=o.length-1;e>0;e--){let t=o[e];l.uniforms.tSrc.value=t.texture,l.uniforms.uTexel.value.set(.5/t.width,.5/t.height),l.uniforms.uWeight.value=mp,p(o[e-1],l)}u.uniforms.tFrame.value=a,u.uniforms.tBloom.value=o[0].texture,p(null,u),e.autoClear=t},dispose(){a?.dispose();for(let e of o)e.dispose();for(let e of[s,c,l,u])e.dispose();d.dispose()}}}var Sp=4e3,Cp=25,wp=500,Tp=300,Ep=35,Dp=5,Op=10,kp=e=>`${Math.round(e).toLocaleString(`en-US`)} ft`,Ap=e=>`${e<10?e.toFixed(1):Math.round(e)} m`,jp=e=>e>=1e3?`${(e/1e3).toFixed(1)} km`:`${Math.round(e)} m`;function Mp(e,t,n,r){if(e===null)return 0;for(let i=0;i<4;i++)if(e>=n-r*i)return Math.round(t*(1-i*.2));return Math.round(t*.2)}function Np(e){let t=[],n=(e,n,r,i)=>t.push({label:e,pts:n,max:r,note:i}),r=e.mode===`base`,i=e.suit===`wing`,a=e.glide===null?`The suit never flew`:`Glide ${e.glide.toFixed(1)}`;if(r){if(n(`Exit`,e.running?10:6,10,e.running?`Ran off the edge`:`Stepped off`),i)n(`Flight`,Mp(e.glide,15,2,.4)+Math.min(Op,e.passes*Dp),25,a+(e.passes>0&&e.closestM!==null?` · ${e.passes} close pass${e.passes>1?`es`:``}, ${Ap(e.closestM)}`:``));else if(e.pullFt===null||e.delayS===null)n(`Delay`,0,25,`Never pulled`);else{let t=Math.min(25,Math.round(e.delayS*6));n(`Delay`,e.pullFt>=wp?t:e.pullFt>=Tp?Math.round(t/2):0,25,`${e.delayS.toFixed(1)} s`)}e.pullFt===null?n(`Pull`,0,15,`Never pulled`):e.pullFt>=wp?n(`Pull`,15,15,`Clean · ${kp(e.pullFt)}`):e.pullFt>=Tp?n(`Pull`,8,15,`Low · ${kp(e.pullFt)}`):n(`Pull`,0,15,`Too low · ${kp(e.pullFt)}`)}else{let t=e.ride===`heli`||e.ride===`balloon`;if(t){let t=e.ride===`balloon`?`Over the rim`:e.redLight?`Went before the pilot cleared you`:`Cleared by the pilot`;n(`Exit`,e.redLight?0:10,10,t)}else n(`Exit`,e.redLight?0:10,10,e.redLight?`Left on the red light`:`On the green light`);if(e.rings){let{got:t,total:r}=e.rings,a=i?`gates`:`rings`;n(`Rings`,r>0?Math.round(Ep*t/r):0,Ep,r===0?`Pulled before the ${a}`:`${t} of ${r} ${a}${t===r?` · clean sweep`:``}`)}else if(i){n(`Glide`,Mp(e.glide,20,2.5,.35),20,a);let t=e.flightM??0;n(`Range`,t>=4e3?15:t>=3e3?12:t>=2e3?9:t>=1e3?5:t>0?2:0,15,`${jp(t)} flown`)}else if(t){let t=e.stableS;if(n(`Stability`,t===null?0:t<=4?20:t<=6?14:t<=9?8:3,20,t===null?`Never got stable`:`Stable in ${t.toFixed(1)} s`),e.pullFt===null||e.delayS===null)n(`Delay`,0,15,`Never pulled`);else if(e.pullFt<3e3)n(`Delay`,0,15,`${e.delayS.toFixed(1)} s · pulled low`);else{let t=e.delayS;n(`Delay`,t>=20?15:t>=12?11:t>=6?7:3,15,`${t.toFixed(1)} s of freefall`)}}else n(`Dock`,e.dockedFt===null?0:20,20,e.dockedFt===null?`Never docked on the base`:`Docked at ${kp(e.dockedFt)}`),e.pullFt===null?n(`Separation`,0,15,`No pull`):e.sepM===null||e.sepM>=Cp?n(`Separation`,15,15,e.sepM===null?`Clear air`:`Clear air · ${Math.round(e.sepM)} m`):e.sepM>=15?n(`Separation`,6,15,`Tight · ${Math.round(e.sepM)} m`):n(`Separation`,0,15,`Opened ${Math.round(e.sepM)} m from a jumper`);e.pullFt===null?n(`Pull`,0,15,`Never pulled`):e.pullFt>=Sp?n(`Pull`,15,15,`On time · ${kp(e.pullFt)}`):e.pullFt>=3e3?n(`Pull`,8,15,`Late · ${kp(e.pullFt)}`):n(`Pull`,0,15,`Low · ${kp(e.pullFt)}`)}let o=e.kind===`landed`,s=e.kind===`water`,c=r?15:10;n(`Heading`,o&&e.intoWind?c:0,c,o?e.intoWind?`Into the wind`:`Downwind`:s?`In the lake`:`—`),n(`Touchdown`,o&&!e.hot?c:0,c,o?e.hot?`Hot and fast`:`Soft`:s?`In the lake`:`—`);let l=e.distanceM,u=0,d=s?`In the lake`:`—`;if(o&&e.onBeach)u=l<=2?20:l<=5?16:l<=16?10:l<=40?5:2,d=`${Ap(l)} from the disc`;else if(o&&e.area===`roof`&&e.padM!==null){let t=e.padM;u=t<=2?20:t<=5?16:t<=10?12:8,d=`${Ap(t)} from the ${e.roof??`roof`} mark`}else o&&r?e.area===`park`?[u,d]=[15,`In the park`]:e.area===`roof`?[u,d]=[10,`On ${e.roof??`a rooftop`}`]:[u,d]=[6,`In the street`]:o&&(d=e.area===`roof`?`Off the beach · on ${e.roof??`a rooftop`}`:`Off the beach`);if(n(`Accuracy`,u,20,d),e.kind===`impact`)for(let e of t)e.pts=0;let f=t.reduce((e,t)=>e+t.max,0),p=t.reduce((e,t)=>e+t.pts,0);return{total:p,max:f,stars:p>=85?3:p>=65?2:+(p>=40),items:t,newBest:!1}}var Pp=420,Fp=.0093,Ip=1.75,Lp=.5;function Rp(e,t,n,r){let i=document.createElement(`canvas`);i.width=e,i.height=t;let a=i.getContext(`2d`);if(a){a.shadowColor=`#fff`,a.shadowBlur=n,a.shadowOffsetX=e*4,a.translate(-e*4,0),a.fillStyle=`#fff`,r(a);let i=a.getImageData(0,0,e,t),o=i.data;for(let e=0;e<o.length;e+=4)o[e]=o[e+1]=o[e+2]=o[e+3],o[e+3]=255;a.putImageData(i,0,0)}let o=new Vi(i);return o.colorSpace=``,o}function zp(e,t=3){let n=Rp(256,128,10,e=>{e.beginPath(),e.roundRect(24,26,208,76,[30,30,18,18]),e.fill()}),r=Rp(64,128,8,e=>{e.beginPath(),e.ellipse(32,64,18,52,0,0,Math.PI*2),e.fill()}),i=new go(1,1).rotateX(-Math.PI/2),a=e=>new Qr({color:`#000`,alphaMap:e,transparent:!0,opacity:0,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-24}),o=t=>{let n=new Z(i,a(t));return n.visible=!1,n.renderOrder=1,n.frustumCulled=!1,e.add(n),n},s=Array.from({length:t},()=>o(n)),c=Array.from({length:t},()=>o(r)),l=new G,u=new G,d=new G,f=new G,p=new G,m=(e,t)=>e.copy(t).addScaledVector(Gf,-Math.max(0,t.y)/Gf.y).setY(.02),h=(e,t,n)=>(1-Vt.smoothstep(e,12,Pp))*(1-Vt.smoothstep(t.distanceTo(n),500,1100));return{update(e,n){for(let r=0;r<t;r++){let t=e[r],i=s[r],a=c[r];if(i.visible=!1,a.visible=!1,!t||t.feet.y>430)continue;if(t.wing?.visible){t.wing.updateWorldMatrix(!0,!1),l.set(0,Kd.y,Kd.z).applyMatrix4(t.wing.matrixWorld),t.wing.getWorldDirection(u),m(i.position,l);let e=l.y/Gf.y*Fp,r=h(l.y,i.position,n);r>.01&&(i.visible=!0,i.rotation.y=Math.atan2(u.x,u.z),i.scale.set((Kd.span+e)/.8,1,(Kd.chord+e)/.6),i.material.opacity=.42*r*(Kd.chord/(Kd.chord+e)))}m(f,t.feet),m(p,d.copy(t.feet).setY(t.feet.y+Ip));let o=h(t.feet.y,f,n);if(o>.01){let e=t.feet.y/Gf.y*Fp;p.sub(f),a.visible=!0,a.position.copy(f).addScaledVector(p,.5),a.rotation.y=Math.atan2(p.x,p.z),a.scale.set((Lp+e)/.56,1,(p.length()+Lp+e)/.81),a.material.opacity=.48*o*(Lp/(Lp+e))}}},dispose(){for(let t of[...s,...c])e.remove(t),t.material.dispose();i.dispose(),n.dispose(),r.dispose()}}}var Bp=20;function Vp(e,t=220){let n=Array.from({length:t},()=>new G(1e9,0,0)),r=Array.from({length:t},()=>Math.random()),i=new Float32Array(t*6),a=new Float32Array(t*8),o=new Br,s=new Tr(i,3).setUsage(tt),c=new Tr(a,4).setUsage(tt);o.setAttribute(`position`,s),o.setAttribute(`color`,c);let l=new Ei({vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!1}),u=new Ri(o,l);u.frustumCulled=!1,u.visible=!1,e.add(u);let d=new G,f=new G,p=new G,m=new G;function h(e,t,n){let r=n?(Math.random()*2-1)*Bp:Bp*(.35+Math.random()*.65);e.copy(t).addScaledVector(d,r).addScaledVector(f,(Math.random()*2-1)*Bp*.6).addScaledVector(p,(Math.random()*2-1)*Bp*.6)}return{update(e,o,l){let g=o.length();if(u.visible=l>.01&&g>2,!u.visible)return;d.copy(o).divideScalar(g),f.set(0,1,0).cross(d),f.lengthSq()<1e-4&&f.set(1,0,0),f.normalize(),p.crossVectors(d,f);let _=Math.min(.055,3/g),v=Math.floor(t*Math.min(1,l));for(let s=0;s<t;s++){let t=n[s];m.subVectors(t,e),m.lengthSq()>400*2.2&&h(t,e,m.lengthSq()>16e3),m.subVectors(t,e);let c=m.length(),u=s<v,d=Math.min(1,(Bp-c)/(Bp*.6))*Math.min(1,c/1.2),f=u?d*(.15+.3*r[s])*(.4+.6*l):0,p=s*6;i[p]=t.x,i[p+1]=t.y,i[p+2]=t.z,i[p+3]=t.x+o.x*_,i[p+4]=t.y+o.y*_,i[p+5]=t.z+o.z*_;let g=s*8;a.fill(.92,g,g+3),a[g+3]=Math.max(0,f),a.fill(.92,g+4,g+7),a[g+7]=0}s.needsUpdate=!0,c.needsUpdate=!0},dispose(){e.remove(u),o.dispose(),l.dispose()}}}var Hp=64,Up=4096,Wp=(e,t)=>(e+Up)*(Up*2)+(t+Up),Gp=class{list=[];grid=new Map;add(e){let t=this.list.push(e)-1;for(let n=Math.floor(e.x0/Hp);n<=Math.floor(e.x1/Hp);n++)for(let r=Math.floor(e.z0/Hp);r<=Math.floor(e.z1/Hp);r++){let e=Wp(n,r),i=this.grid.get(e);i?i.push(t):this.grid.set(e,[t])}}addMesh(e,t=new sr){if(t.setFromObject(e),t.isEmpty()||t.max.y-t.min.y<3||Math.min(t.max.x-t.min.x,t.max.z-t.min.z)<3)return;let n=Math.max(0,t.min.y),r=t.max.y,i=e.geometry;if(i instanceof uo){this.addPlan(i,e.matrixWorld,t,n,r);return}let a=i.userData.taper;if(a){let e=(t.min.x+t.max.x)/2,i=(t.min.z+t.max.z)/2,o=(t.max.x-t.min.x)/2,s=(t.max.z-t.min.z)/2;for(let t=0;t<4;t++){let c=(t+.5)/4,l=1+(a[0]-1)*c,u=1+(a[1]-1)*c;this.add({x0:e-o*l,x1:e+o*l,z0:i-s*u,z1:i+s*u,y0:n+(r-n)*t/4,y1:n+(r-n)*(t+1)/4})}}else this.add({x0:t.min.x,x1:t.max.x,z0:t.min.z,z1:t.max.z,y0:n,y1:r})}addPlan(e,t,n,r,i){let a=e.parameters.shapes,o=Array.isArray(a)?a[0]:a;if(!o)return;let s=o.extractPoints(8).shape.map(e=>new G(e.x,0,-e.y).applyMatrix4(t)),c=(e,t)=>{let n=!1;for(let r=0,i=s.length-1;r<s.length;i=r++){let a=s[r],o=s[i];a.z>t!=o.z>t&&e<(o.x-a.x)*(t-a.z)/(o.z-a.z)+a.x&&(n=!n)}return n};for(let e=n.min.z+3;e<n.max.z;e+=6){let t=null;for(let a=n.min.x+3;a<n.max.x+6;a+=6){let o=a<n.max.x&&c(a,e);o&&t===null&&(t=a),!o&&t!==null&&(this.add({x0:t-3,x1:a-3,z0:e-3,z1:e+3,y0:r,y1:i}),t=null)}}}*near(e,t){let n=this.grid.get(Wp(Math.floor(e/Hp),Math.floor(t/Hp)));if(n)for(let e of n)yield this.list[e]}top(e,t,n=1/0){let r=null;for(let i of this.near(e,t))e<i.x0||e>i.x1||t<i.z0||t>i.z1||i.y1>n||(!r||i.y1>r.y1)&&(r=i);return r}blocked(e,t,n,r,i){for(let a of this.near(e,n))if(!(e<a.x0-r||e>a.x1+r||n<a.z0-r||n>a.z1+r)&&t+i>a.y0&&t<a.y1-.02)return a;return null}nearest(e,t,n,r){let i=r,a=Math.ceil(r/Hp),o=Math.floor(e/Hp),s=Math.floor(n/Hp);for(let r=o-a;r<=o+a;r++)for(let o=s-a;o<=s+a;o++){let a=this.grid.get(Wp(r,o));if(a)for(let r of a){let a=this.list[r],o=Math.max(a.x0-e,0,e-a.x1),s=Math.max(a.z0-n,0,n-a.z1),c=Math.max(a.y0-t,0,t-a.y1),l=Math.hypot(o,c,s);l<i&&(i=l)}}return i}contact(e,t,n){let r=null,i=null;for(let a of this.near(t.x,t.z))t.x<a.x0-n||t.x>a.x1+n||t.z<a.z0-n||t.z>a.z1+n||t.y>=a.y1||t.y+1.6<a.y0||(t.x>=a.x0&&t.x<=a.x1&&t.z>=a.z0&&t.z<=a.z1&&e.y>=a.y1-.05?(!r||a.y1>r.y1)&&(r=a):i=a);return r?{top:!0,y:r.y1,solid:r}:i?{top:!1,solid:i}:null}},Kp=41.8638,qp=111050,Jp=82850,Yp=[[41.85,-87.614],[41.8885,-87.613],[41.8917,-87.611],[41.8945,-87.6115],[41.8975,-87.6165],[41.91,-87.625],[41.925,-87.63]];function Xp(e){let t=Yp[0];if(e<=t[0])return t[1];for(let n of Yp){if(e<=n[0])return t[1]+(e-t[0])/(n[0]-t[0]||1)*(n[1]-t[1]);t=n}return t[1]}function Zp(e,t){return{x:150+(t-Xp(e))*Jp,z:-(e-Kp)*qp}}var Qp={x0:-2508,x1:-8,z0:-5300,z1:3100,block:820/8},$p=12,em=16;function tm(e,t,n){let r=document.createElement(`canvas`);r.width=128,r.height=128;let i=r.getContext(`2d`);i&&n(i,Zf(e));let a=new Vi(r);return a.colorSpace=Ye,a.wrapS=g,a.wrapT=g,a.repeat.set(1/$p,1/em),a.anisotropy=t,a}var nm=[6,4,20,20],rm=[19,3,11,26],im=[2,3,28,17];function am(e,t,n){let r=document.createElement(`canvas`);r.width=256,r.height=256;let i=r.getContext(`2d`);if(i){let t=Zf(e+100);i.fillStyle=`#000`,i.fillRect(0,0,256,256);for(let e=0;e<8;e++){let r=t()<.18?.9:.1+t()*.35;for(let a=0;a<8;a++){if(t()>r)continue;let o=t();i.fillStyle=o<.55?`#ffcf8f`:o<.85?`#fff0d6`:`#d6e6ff`,i.globalAlpha=.55+t()*.45,i.fillRect(a*32+n[0],e*32+n[1],n[2],n[3])}}i.globalAlpha=1}let a=new Vi(r);return a.colorSpace=Ye,a.wrapS=g,a.wrapT=g,a.repeat.set(1/24,1/32),a.anisotropy=t,a}var om=(e,t)=>new X(e).multiplyScalar(t).getStyle();function sm(e,t,n,r=.22){return(i,a)=>{for(let t=0;t<4;t++){for(let n=0;n<4;n++)i.fillStyle=om(e,.85+a()*.3),i.fillRect(n*32,t*32,32,32);i.fillStyle=n,i.fillRect(0,t*32+32*(1-r),128,32*r)}i.fillStyle=t;for(let e=0;e<4;e++)i.fillRect(e*32,0,3,128)}}function cm(e,t){return(n,r)=>{n.fillStyle=e,n.fillRect(0,0,128,128);for(let e=0;e<4;e++)for(let i=0;i<4;i++)n.fillStyle=om(t,.8+r()*.4),n.fillRect(i*32+8,e*32+6,16,18)}}function lm(e,t){return n=>{n.fillStyle=t,n.fillRect(0,0,128,128),n.fillStyle=e;for(let e=0;e<4;e++)n.fillRect(e*32,0,18,128);n.fillStyle=`rgba(0,0,0,0.12)`;for(let e=0;e<4;e++)n.fillRect(0,e*32,128,2)}}function um(e,t,n){return r=>{r.fillStyle=e,r.fillRect(0,0,128,128),r.fillStyle=t;for(let e=0;e<4;e++){r.beginPath(),r.moveTo(0,e*32+32);for(let t=0;t<=128;t+=8)r.lineTo(t,e*32+22-Math.sin(t/128*Math.PI*2+e)*n);r.lineTo(128,e*32+32),r.closePath(),r.fill()}}}function dm(e,t,n,r){let i=new Gi(e,t,n),a=i.getAttribute(`uv`),o=[n,n,e,e,e,e],s=[t,t,n,n,t,t];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*(o[e]??1),a.getY(n)*(s[e]??1))}if(i.translate(0,t/2,0),r){let a=i.getAttribute(`position`);for(let i=0;i<a.count;i++)a.getY(i)>t/2&&a.setXYZ(i,a.getX(i)*r[0]/e,a.getY(i),a.getZ(i)*r[1]/n);i.computeVertexNormals(),i.userData.taper=[r[0]/e,r[1]/n]}return i}function fm(e,t,n,r){let i=new qi(e,t,n,r,1),a=i.getAttribute(`uv`),o=(r+1)*2,s=Math.PI*(e+t);for(let e=0;e<a.count;e++)e<o?a.setXY(e,a.getX(e)*s,a.getY(e)*n):a.setXY(e,a.getX(e)*t*2,a.getY(e)*t*2);return i.translate(0,n/2,0),i}function pm(e,t){let n=new uo(e,{depth:t,bevelEnabled:!1,curveSegments:24});return n.rotateX(-Math.PI/2),n}function mm(e,t){let n=[],r=new G(0,1,0),i=new G,a=new un,o=new Ht;for(let[s,c]of e){i.subVectors(c,s);let e=new qi(t,t,i.length()||1,5,1,!0);o.setFromUnitVectors(r,i.normalize()),a.compose(s.clone().add(c).multiplyScalar(.5),o,new G(1,1,1)),e.applyMatrix4(a),n.push(e)}let s=cd(n)??new Br;for(let e of n)e.dispose();return s}function hm(e,t,n,r,i,a,o=0){let s;s=n instanceof Kr?n:t instanceof Gi?[n.wall,n.wall,n.roof,n.roof,n.wall,n.wall]:t instanceof qi?[n.wall,n.roof,n.roof]:t instanceof uo?[n.roof,n.wall]:n.wall;let c=new Z(t,s);return c.position.set(r,i,a),c.rotation.y=o,e.add(c),c}function gm(e,t,n,r=0){let i=r;for(let[r,a,o]of n)hm(e,dm(r,o,a),t,0,i,0),i+=o;return i}function _m(e,t){let n=new Q({color:`#5d6266`,roughness:.92}),r=(n,r)=>t>0?{emissive:`#ffffff`,emissiveMap:am(n,e,r),emissiveIntensity:t}:{},i=(t,i,a={},o=nm)=>({wall:new Q({map:tm(t,e,i),roughness:.22,metalness:.62,...r(t,o),...a}),roof:n}),a=(t,i,a={},o=nm)=>({wall:new Q({map:tm(t,e,i),roughness:.78,...r(t,o),...a}),roof:n});return{roof:n,willis:i(1,sm(`#2a2622`,`#0d0f12`,`#121418`,.3),{metalness:.55,roughness:.3}),hancock:i(2,sm(`#2c2b29`,`#101215`,`#15171a`,.34),{metalness:.5,roughness:.32}),trump:i(3,sm(`#9fb4c4`,`#dfe6ea`,`#7d8d98`,.14),{metalness:.75,roughness:.14}),aon:a(4,lm(`#e9e7e2`,`#3a434b`),{roughness:.62},rm),regis:i(5,sm(`#5f9fae`,`#c9dde1`,`#4b7f8b`,.12),{metalness:.72,roughness:.14}),pru:a(6,cm(`#b9a99e`,`#3d434a`)),aqua:i(7,um(`#5e8ea6`,`#f2f3f1`,5),{metalness:.3,roughness:.4},im),marina:a(8,um(`#2a3138`,`#efeee8`,3),{roughness:.6},im),bronze:i(9,sm(`#3a2e24`,`#1a1612`,`#2a221c`,.25),{metalness:.65,roughness:.2}),marble:a(10,cm(`#e4e0d8`,`#4a525a`)),limestone:a(11,cm(`#d6cbb6`,`#3e444a`)),pink:a(12,cm(`#c19a8c`,`#30363d`)),brown:a(13,cm(`#6f5047`,`#22272d`)),granite:a(14,lm(`#8d9aa4`,`#2d363f`),{roughness:.55},rm),green:i(15,sm(`#5f9a86`,`#cfe0d8`,`#4a7a6b`,.1),{metalness:.7,roughness:.12}),blue:i(16,sm(`#5b7b96`,`#c5d2dc`,`#46607a`,.18)),silver:i(17,sm(`#8ea2b2`,`#e1e7eb`,`#6c7d8a`,.2)),dark:i(18,sm(`#2b3540`,`#11161c`,`#1a2129`,.24)),tan:a(19,cm(`#cdbb9f`,`#3d444b`)),terracotta:a(20,cm(`#f1ede4`,`#46505a`),{roughness:.5}),mast:new Q({color:`#d9dde0`,roughness:.45,metalness:.6}),steel:new Q({color:`#3a4047`,roughness:.4,metalness:.7}),lantern:new Q({color:`#f4f7fa`,emissive:new X(`#fff3df`),emissiveIntensity:.6+t*.8,roughness:.2})}}var vm=(e,t,n=0)=>r=>{let i=new Ln,a=gm(i,r[e],t);return n&&hm(i,fm(.25,1.2,n,6),r.mast,0,a,0),i},ym=[{lat:41.8789,lon:-87.6359,r:52,build:e=>{let t=new Ln,n=22.9,r=[[205,369,269],[442,442,369],[269,369,205]];for(let i=0;i<3;i++)for(let a=0;a<3;a++)hm(t,dm(n,r[i]?.[a]??200,n),e.willis,(a-1)*n,0,(i-1)*n);for(let r of[-20.61,n*.1])hm(t,fm(.5,1.3,85,6),e.mast,r,442,0);return t}},{lat:41.8989,lon:-87.6234,r:50,build:e=>{let t=new Ln;hm(t,dm(50,344,80,[30,49]),e.hancock,0,0,0);let n=e=>Vt.lerp(25,15,e/344)+.5,r=e=>Vt.lerp(40,24.5,e/344)+.5,i=[],a=(e,t,n)=>new G(e,t,n);for(let e=0;e<5;e++){let t=e*344/5,o=(e+1)*344/5;for(let e of[-1,1])i.push([a(e*n(t),t,-r(t)),a(e*n(o),o,r(o))]),i.push([a(e*n(t),t,r(t)),a(e*n(o),o,-r(o))]),i.push([a(e*n(o),o,-r(o)),a(e*n(o),o,r(o))]);for(let e of[-1,1])i.push([a(-n(t),t,e*r(t)),a(n(o),o,e*r(o))]),i.push([a(n(t),t,e*r(t)),a(-n(o),o,e*r(o))]),i.push([a(-n(o),o,e*r(o)),a(n(o),o,e*r(o))])}hm(t,mm(i,.9),e.steel,0,0,0);for(let n of[-11,11])hm(t,fm(.6,1.6,105,6),e.mast,0,344,n);return t}},{lat:41.8889,lon:-87.6264,r:45,build:vm(`trump`,[[74,40,70],[64,37,45],[54,33,80],[44,29,162]],66)},{lat:41.8853,lon:-87.6215,r:45,build:vm(`aon`,[[59,59,346]])},{lat:41.8872,lon:-87.6178,r:60,build:e=>{let t=new Ln,n=[245,363,165];for(let r=0;r<3;r++){let i=n[r]??200,a=Math.round(i/38),o=i/a;for(let n=0;n<a;n++){let i=n%2==0,a=i?1:.86,s=i?.86:1;hm(t,dm(30*a,o,36*a,[30*s,36*s]),e.regis,(r-1)*29,n*o,0)}}return t}},{lat:41.8852,lon:-87.6235,r:40,build:e=>{let t=new Ln,n=gm(t,e.pru,[[48,48,233],[40,40,14],[31,31,13],[22,22,11]]),r=hm(t,fm(0,15,18,4),e.pru,0,n,0,Math.PI/4);return r.material=e.roof,hm(t,fm(.3,1,22,6),e.mast,0,n+18,0),t}},{lat:41.8863,lon:-87.6198,r:35,build:vm(`aqua`,[[42,30,262]])},{lat:41.8882,lon:-87.6283,r:60,build:e=>{let t=new Ln;for(let n of[-30,30])hm(t,fm(16,16,179,24),e.marina,n,0,0);return t}},{lat:41.8917,lon:-87.6141,r:40,build:e=>{let t=new Ea;for(let e=0;e<=72;e++){let n=e/72*Math.PI*2,r=22+9*Math.cos(3*n);e===0?t.moveTo(Math.cos(n)*r,Math.sin(n)*r):t.lineTo(Math.cos(n)*r,Math.sin(n)*r)}let n=new Ln;return hm(n,pm(t,197),e.bronze,0,0,0,Math.PI/6),n}},{lat:41.8977,lon:-87.6245,r:40,build:vm(`marble`,[[44,32,262]])},{lat:41.8995,lon:-87.6248,r:40,build:e=>{let t=new Ln,n=gm(t,e.tan,[[46,46,228]]);for(let[r,i]of[[-17,-17],[17,-17],[-17,17],[17,17]])hm(t,dm(10,24,10),e.tan,r,n,i),hm(t,fm(0,6,9,4),e.roof,r,n+24,i,Math.PI/4);return hm(t,dm(14,37,14),e.lantern,0,n,0),t}},{lat:41.8966,lon:-87.6232,r:30,build:e=>{let t=new Ln,n=gm(t,e.silver,[[34,34,232]]);return hm(t,fm(0,21,25,4),e.roof,0,n,0,Math.PI/4),t}},{lat:41.8774,lon:-87.636,r:40,build:e=>{let t=new Ln,n=gm(t,e.pink,[[46,46,222],[38,38,30]]);return hm(t,fm(14,15,41,16),e.lantern,0,n,0),t}},{lat:41.8807,lon:-87.6345,r:42,build:e=>{let t=new Ln,n=gm(t,e.brown,[[52,52,200],[44,44,50],[34,34,37]]);for(let[r,i]of[[-13,-13],[13,-13],[-13,13],[13,13]])hm(t,fm(.4,2.2,22,6),e.brown,r,n,i);return t}},{lat:41.8818,lon:-87.6301,r:40,build:e=>{let t=new Ln;return hm(t,dm(62,259,40,[36,40]),e.granite,0,0,0),t}},{lat:41.8835,lon:-87.6372,r:36,build:e=>{let t=new Ln,n=gm(t,e.blue,[[44,44,222]]);return hm(t,dm(44,28,44,[8,44]),e.blue,0,n,0),t}},{lat:41.8858,lon:-87.6366,r:70,build:e=>{let t=new Ea,n=Vt.degToRad(102),r=Vt.degToRad(168);t.absarc(0,0,150,n,r,!1),t.absarc(0,0,118,r,n,!0),t.closePath();let i=new Ln;return hm(i,pm(t,149),e.green,95,0,95),i}},{lat:41.8826,lon:-87.6253,r:26,build:vm(`silver`,[[30,34,249]])},{lat:41.8849,lon:-87.619,r:35,build:vm(`dark`,[[45,30,227]])},{lat:41.8676,lon:-87.6243,r:30,build:vm(`blue`,[[36,30,140],[33,27,134]])},{lat:41.8669,lon:-87.6215,r:30,build:vm(`tan`,[[34,40,221]])},{lat:41.8892,lon:-87.6249,r:40,build:e=>{let t=new Ln;return hm(t,dm(56,72,30),e.terracotta,0,0,0),hm(t,dm(20,34,20),e.terracotta,-12,72,0),hm(t,fm(5,7,14,8),e.terracotta,-12,106,0),hm(t,fm(0,4,8,8),e.roof,-12,120,0),t}},{lat:41.8904,lon:-87.6235,r:30,build:e=>{let t=new Ln;hm(t,dm(32,104,30),e.limestone,0,0,0),hm(t,fm(9,11,26,8),e.limestone,0,104,0);for(let n=0;n<8;n++){let r=n/8*Math.PI*2;hm(t,dm(2.4,30,2.4,[1,1]),e.limestone,Math.cos(r)*13,100,Math.sin(r)*13)}return t}}],bm=[{x0:-1880,x1:-760,z0:-2600,z1:-1240,min:35,max:125,tall:.16,tallMax:210,fill:3},{x0:-840,x1:-735,z0:-2320,z1:-470,min:40,max:100,tall:.14,tallMax:150,fill:2},{x0:-735,x1:-100,z0:-2700,z1:-2320,min:40,max:145,tall:.25,tallMax:200,fill:2},{x0:-735,x1:-60,z0:-3700,z1:-2780,min:35,max:135,tall:.2,tallMax:195,fill:2},{x0:-1880,x1:-735,z0:-3700,z1:-2780,min:18,max:85,tall:.1,tallMax:160,fill:3},{x0:-1e3,x1:-60,z0:-4800,z1:-3700,min:18,max:95,tall:.14,tallMax:170,fill:2},{x0:-1880,x1:-735,z0:-1240,z1:-250,min:14,max:65,tall:.1,tallMax:160,fill:2},{x0:-2480,x1:-1950,z0:-3300,z1:-700,min:12,max:55,tall:.08,tallMax:120,fill:2}],xm={x0:0,x1:0,z0:0,z1:0,min:8,max:26,tall:.03,tallMax:55,fill:1},Sm={x0:-712,x1:-40,z0:-2320,z1:-700},Cm={x0:-440,x1:-40,z0:-700,z1:400},wm=[{x0:0,x1:136,z0:-3060,z1:-700},{x0:0,x1:136,z0:-3860,z1:-3400}],Tm=[Sm,Cm,...wm];function Em(e,t){let{aniso:n,coarse:r,onTop:i,windows:a,streets:o}=t,s=_m(n,a>.5?a*.8:0),c=new Ln;c.name=`skyline`,e.add(c);let l=[];for(let e of ym){let t=Zp(e.lat,e.lon),n=e.build(s);n.position.set(t.x,0,t.z),c.add(n),l.push({x:t.x,z:t.z,r:e.r})}let u=e=>e.map(([e,t])=>{let n=Zp(e,t);return new W(n.x,n.z)}),d=u([[41.8886,-87.6129],[41.8886,-87.6165],[41.8884,-87.621],[41.8881,-87.6245],[41.8876,-87.6285],[41.8871,-87.6335],[41.8868,-87.6378]]),f=u([[41.8868,-87.6378],[41.8845,-87.6382],[41.88,-87.6385],[41.8755,-87.6384],[41.8705,-87.6372],[41.865,-87.6352],[41.856,-87.6362],[41.848,-87.642]]),p=u([[41.8868,-87.6378],[41.8895,-87.6392],[41.8935,-87.6425],[41.8975,-87.646],[41.903,-87.65],[41.91,-87.656]]),m=[{pts:d,w:70},{pts:f,w:58},{pts:p,w:52}],h=i(new Q({color:`#2c463f`,roughness:.45,metalness:0}),2.5);for(let{pts:e,w:t}of m)c.add(km(e,t,.06,h));let g=(e,t,n)=>{let r=new W(e,t);for(let{pts:e,w:t}of m)for(let i=1;i<e.length;i++)if(Om(r,e[i-1],e[i])<t/2+n)return!0;return!1},_=i(new Q({color:`#4b7748`,roughness:1}),1.5),v=i(new Q({color:`#a9a693`,roughness:1}),2);for(let e of[Sm,Cm])c.add(Am(e.x1-e.x0,e.z1-e.z0,(e.x0+e.x1)/2,.08,(e.z0+e.z1)/2,_));let y=Zp(41.8758,-87.6189);c.add(Am(8,Sm.z1-Sm.z0,y.x,.1,(Sm.z0+Sm.z1)/2,v)),c.add(Am(Sm.x1-Sm.x0,8,(Sm.x0+Sm.x1)/2,.1,y.z,v)),c.add(Am(24,Sm.z1-Sm.z0,-420,.1,(Sm.z0+Sm.z1)/2,i(jm(),2))),Mm(c,y.x,y.z,i,o);let b=i(new Q({color:`#b3b0a6`,roughness:.9}),2.6);for(let e of wm)c.add(Am(e.x1-e.x0,e.z1-e.z0,(e.x0+e.x1)/2,.085,(e.z0+e.z1)/2,_)),c.add(Am(14,e.z1-e.z0,143,.1,(e.z0+e.z1)/2,b));let x=new Z(new vo(1,24,12),new Q({color:`#f2f4f6`,metalness:1,roughness:.06})),S=Zp(41.8827,-87.6233);x.scale.set(10,5,6.5),x.position.set(S.x,4,S.z),c.add(x);let C=Zf(23),w=[],T=r?260:520;for(let e=0;e<T*3&&w.length<T;e++){let e=C(),t=e<.6,n=t?Sm:e<.8?Cm:wm[0],r=C()<.6,i=n.x0+8+C()*(n.x1-n.x0-16),a=n.z0+8+C()*(n.z1-n.z0-16);r&&(C()<.5?i=Math.round(i/60)*60+10:a=Math.round(a/80)*80+10),!(Math.hypot(i-y.x,a-y.z)<70||g(i,a,6))&&(t&&Math.abs(i+420)<20||n===Cm&&(Pm(i,a)||i>-60)||n!==Cm&&!t&&(i<38||i>126)||w.push(new G(i,0,a)))}let E=new xi(new mo(5.5,0),new Q({color:`#2f6a3b`,roughness:.95,flatShading:!0}),w.length),D=new In;w.forEach((e,t)=>{let n=.8+C()*.6;D.position.set(e.x,5*n+2,e.z),D.scale.set(n,n*.85,n),D.rotation.set(0,C()*6,0),D.updateMatrix(),E.setMatrixAt(t,D.matrix)}),E.frustumCulled=!1,c.add(E),Fm(c,i);let O=Lm(c,o);o>0&&Vm(c),Rm(c,r);let k=new Gp,A=Hm(l,g,r?1500:2600,n,a,k);c.add(A),c.updateMatrixWorld(!0);let j=new sr,M=e=>!!e&&(e.userData.live===!0||e.userData.hollow===!0||M(e.parent));return c.traverse(e=>{let t=e;!t.isMesh||t.isInstancedMesh||M(t)||k.addMesh(t,j)}),Dm(c),{update(e){O(e)},solids:k}}function Dm(e){e.updateMatrixWorld(!0);let t=new Map,n=[],r=e=>!!e&&(e.userData.live===!0||r(e.parent));e.traverse(e=>{let i=e;if(!i.isMesh||i.isInstancedMesh||r(i)||!i.geometry.getAttribute(`uv`))return;let a=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();a.applyMatrix4(i.matrixWorld);let o=Array.isArray(i.material)?i.material:[i.material],s=a.getAttribute(`position`).count,c=Array.isArray(i.material)&&a.groups.length?a.groups:[{start:0,count:s,materialIndex:0}];for(let e of c){let n=o[e.materialIndex??0];if(!n)continue;let r=new Br;for(let t of[`position`,`normal`,`uv`]){let n=a.getAttribute(t),i=n.itemSize,o=Math.min(s,e.start+e.count);r.setAttribute(t,new Tr(n.array.slice(e.start*i,o*i),i))}let i=t.get(n)??[];i.push(r),t.set(n,i)}a.dispose(),n.push(i)});for(let e of n)e.removeFromParent(),e.geometry.dispose();for(let[n,r]of t){let t=cd(r);for(let e of r)e.dispose();t&&e.add(new Z(t,n))}}function Om(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=Vt.clamp(((e.x-t.x)*r+(e.y-t.y)*i)/(r*r+i*i||1),0,1);return Math.hypot(e.x-(t.x+r*a),e.y-(t.y+i*a))}function km(e,t,n,r){let i=[],a=[];for(let r=0;r<e.length;r++){let o=e[Math.max(0,r-1)],s=e[Math.min(e.length-1,r+1)],c=s.x-o.x,l=s.y-o.y,u=Math.hypot(c,l)||1,d=-l/u*(t/2),f=c/u*(t/2),p=e[r];if(i.push(p.x+d,n,p.y+f,p.x-d,n,p.y-f),r>0){let e=(r-1)*2;a.push(e,e+1,e+2,e+1,e+3,e+2)}}let o=new Br;o.setAttribute(`position`,new Or(i,3)),o.setIndex(a),o.computeVertexNormals();let s=o.getAttribute(`normal`);for(let e=0;e<s.count;e++)s.setXYZ(e,0,1,0);let c=new Z(o,r);return c.material.side=2,c.frustumCulled=!1,c}function Am(e,t,n,r,i,a){let o=new Z(new go(e,t,Math.ceil(e/100),Math.ceil(t/100)),a);return o.rotation.x=-Math.PI/2,o.position.set(n,r,i),o}function jm(){return new Q({color:`#3a4047`,roughness:.9})}function Mm(e,t,n,r,i){let a=new Z(new Ki(42,40),r(new Q({color:`#5d8fa6`,roughness:.15,metalness:.3}),3));a.rotation.x=-Math.PI/2,a.position.set(t,.12,n),e.add(a);let o=new Q({color:`#d8b4a6`,roughness:.7});hm(e,fm(15,17,2.4,24),o,t,0,n),hm(e,fm(9,10,2.2,20),o,t,2.4,n),hm(e,fm(4.5,5,2.2,16),o,t,4.6,n);let s=new Q({color:`#ffffff`,emissive:`#9fd2ff`,emissiveIntensity:i*1.2,transparent:!0,opacity:.55,roughness:.3,depthWrite:!1});hm(e,fm(.4,3.2,34,12),s,t,6.8,n)}var Nm={field:{x:-250,z:-320,w:200,d:100},shedd:{x:-120,z:-600,r:75},adler:{x:96,z:-330,r:30},soldier:{x:-270,z:215,rx:90,rz:130}};function Pm(e,t){let n=Nm.field;if(Math.abs(e-n.x)<n.w/2+12&&Math.abs(t-n.z)<n.d/2+12||Math.hypot(e-Nm.shedd.x,t-Nm.shedd.z)<Nm.shedd.r+10)return!0;let r=Nm.soldier;return((e-r.x)/(r.rx+15))**2+((t-r.z)/(r.rz+15))**2<1}function Fm(e,t){let n=new Q({color:`#e6e0d2`,roughness:.7}),r=new Q({color:`#8d918f`,roughness:.85}),i=new Q({color:`#6f9a8a`,roughness:.6,metalness:.2}),a={wall:n,roof:r},o=Nm.field;hm(e,dm(o.w,24,o.d),a,o.x,0,o.z),hm(e,dm(84,12,52),a,o.x,24,o.z);for(let t=0;t<8;t++)hm(e,fm(1.4,1.4,20,8),n,o.x-21+t*6,0,o.z-o.d/2-4);let s=Nm.shedd;hm(e,fm(30,32,22,8),a,s.x,0,s.z,Math.PI/8),hm(e,fm(0,31,13,8),i,s.x,22,s.z,Math.PI/8);for(let t=0;t<4;t++){let n=t/4*Math.PI*2;hm(e,dm(54,17,26),a,s.x+Math.cos(n)*52,0,s.z+Math.sin(n)*52,-n)}let c=Nm.adler,l=new Q({color:`#a58f78`,roughness:.75});hm(e,fm(24,26,12,12),l,c.x,0,c.z);let u=new Z(new vo(13,20,10,0,Math.PI*2,0,Math.PI/2),i);u.position.set(c.x,12,c.z),e.add(u),e.add(Am(80,90,c.x-6,.11,c.z,t(new Q({color:`#a9a59a`,roughness:1}),2)));let d=Nm.soldier,f=new Ea;f.absellipse(0,0,d.rx*.78,d.rz*.8,0,Math.PI*2,!1,0);let p=new Ta;p.absellipse(0,0,40,72,0,Math.PI*2,!0,0),f.holes.push(p);let m=new Q({color:`#9aa2a8`,roughness:.6,metalness:.3});hm(e,pm(f,34),m,d.x,0,d.z).userData.hollow=!0,e.add(Am(52,112,d.x,.3,d.z,t(new Q({map:Im(),roughness:1}),3)));for(let t of[-1,1]){for(let r=0;r<14;r++)hm(e,fm(1.3,1.5,19,8),n,d.x+t*d.rx,0,d.z-65+r*10);hm(e,dm(6,4,140),n,d.x+t*d.rx,19,d.z)}}function Im(){let e=document.createElement(`canvas`);e.width=64,e.height=128;let t=e.getContext(`2d`);if(t){for(let e=0;e<12;e++)t.fillStyle=e%2?`#3f8a3e`:`#4a9846`,t.fillRect(0,e*128/12,64,128/12);t.strokeStyle=`#f4f4f0`,t.lineWidth=2,t.strokeRect(3,3,58,122),t.beginPath(),t.moveTo(3,64),t.lineTo(61,64),t.stroke()}let n=new Vi(e);return n.colorSpace=Ye,n}function Lm(e,t){let n=Zp(41.8917,-87.6111),r=new Ln;r.position.set(n.x,0,n.z),e.add(r);let i=new Q({color:`#b8b2a6`,roughness:.9}),a=new Q({color:`#c2aa8c`,roughness:.8}),o=new Q({color:`#6f4a3c`,roughness:.75}),s=new Q({color:`#eef1f3`,roughness:.5}),c=1010;hm(r,dm(c,3.2,95),i,c/2,0,0);for(let e of[-28,28])hm(r,dm(640,11,22),a,640,3.2,e),hm(r,dm(644,1.6,25),o,640,14.2,e);hm(r,dm(70,24,84),{wall:a,roof:o},45,3.2,0);for(let e of[-30,30])hm(r,dm(11,40,11),a,45,3.2,e);hm(r,dm(70,16,50),new Q({color:`#9fb8c4`,roughness:.15,metalness:.6}),210,3.2,0),hm(r,fm(31,32,18,28),a,975,3.2,0);let l=new Z(new vo(33,28,10,0,Math.PI*2,0,Math.PI/2),s);l.scale.y=.5,l.position.set(975,21.2,0),r.add(l);let u=new G(Zp(41.8917,-87.6077).x-n.x,34,0),d=new Ln;d.userData.live=!0,d.position.copy(u),r.add(d);let f=new Q({color:`#f2f4f6`,roughness:.4,metalness:.3,emissive:`#cfe2ff`,emissiveIntensity:t*1.6});d.add(new Z(new yo(27,.6,6,48),f)),d.add(new Z(new yo(24,.35,6,48),f));let p=[];for(let e=0;e<21;e++){let t=e/21*Math.PI*2;p.push([new G(0,0,0),new G(Math.cos(t)*27,Math.sin(t)*27,0)])}d.add(new Z(mm(p,.18),f));let m=[];for(let e of[-1,1])for(let t of[-1,1])m.push([u.clone(),new G(u.x+e*14,3.2,t*9)]);let h=new Z(mm(m,.9),f);h.userData.hollow=!0,r.add(h);let g=new xi(new Gi(2.6,2.8,2.6),new Q({color:`#ffffff`,roughness:.3,metalness:.2}),42),_=new X;for(let e=0;e<42;e++)g.setColorAt(e,_.set(e%7==0?`#c4322a`:`#3b7fbf`));g.frustumCulled=!1,r.add(g);let v=new In,y=0,b=()=>{for(let e=0;e<42;e++){let t=y+e/42*Math.PI*2;v.position.set(u.x+Math.cos(t)*27,u.y+Math.sin(t)*27-1.6,0),v.updateMatrix(),g.setMatrixAt(e,v.matrix)}g.instanceMatrix.needsUpdate=!0};return b(),e=>{y+=e*.026,d.rotation.z=y,b()}}function Rm(e,t){let n=new Q({color:`#8a8c88`,roughness:.95});hm(e,dm(9,2.4,560),n,790,0,-1470),hm(e,dm(9,2.4,560),n,790,0,-2120);let r=Zp(41.8894,-87.591);hm(e,dm(8,2.4,1300),n,r.x,0,r.z-650);let i=new Q({color:`#f3f4f2`,roughness:.6}),a=new Q({color:`#b8332a`,roughness:.6});hm(e,dm(12,8,12),i,r.x,2.4,r.z),hm(e,fm(3.4,4,16,12),i,r.x,10.4,r.z),hm(e,fm(0,3.8,5,12),a,r.x,26.4,r.z);let o=Zf(31),s=[];for(let e=230;e<750;e+=26)for(let t=-2330;t<-1290;t+=13)o()<.62&&s.push([e,t]);let c=Math.min(s.length,t?150:320),l=new xi(new Gi(9,1.3,3),new Q({color:`#f4f6f8`,roughness:.45}),c),u=new xi(new qi(.1,.14,13,4),i,c),d=new In;for(let e=0;e<c;e++){let[t,n]=s[e],r=(o()-.5)*.5;d.position.set(t,.55,n),d.rotation.set(0,r,0),d.updateMatrix(),l.setMatrixAt(e,d.matrix),d.position.set(t+1,7.2,n),d.updateMatrix(),u.setMatrixAt(e,d.matrix)}l.frustumCulled=!1,u.frustumCulled=!1,e.add(l,u)}function zm(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=document.createElement(`canvas`);n.width=64,n.height=64;let r=t.getContext(`2d`),i=n.getContext(`2d`);if(!r||!i)return null;let a=Zf(3);r.fillStyle=`#c5ced6`,r.fillRect(0,0,64,64),i.fillStyle=`#000`,i.fillRect(0,0,64,64);for(let e=0;e<2;e++)for(let t=0;t<2;t++){let n=t*32,o=e*32;r.fillStyle=`#8d98a2`,r.fillRect(n,o,32,3),r.fillRect(n,o,3,32);let s=a()>.78;r.fillStyle=s?`#d7e7f4`:`#1c2934`,r.fillRect(n+6,o+5,20,22),r.fillStyle=`rgba(255,255,255,0.2)`,r.fillRect(n+6,o+5,7,22),s&&(i.fillStyle=`#ffc48a`,i.fillRect(n+6,o+5,20,22))}let o=new Vi(t),s=new Vi(n);for(let t of[o,s])t.colorSpace=Ye,t.wrapS=g,t.wrapT=g,t.anisotropy=e;return{map:o,lights:s}}function Bm(e,t,n,r){return t>e.x0-r&&t<e.x1+r&&n>e.z0-r&&n<e.z1+r}function Vm(e){let t=[];for(let e=-5200;e<=3e3;e+=42)t.push(e);let n=new xi(new vo(.8,6,4),new Qr({color:`#ffc27a`,toneMapped:!1}),t.length*2),r=new un,i=0;for(let e of t)for(let t of[-31,-5])n.setMatrixAt(i++,r.makeTranslation(t,9,e+(t>-20?21:0)));n.frustumCulled=!1,e.add(n)}function Hm(e,t,n,r,i,a){let o=zm(r),s=new Q({color:`#d5dde4`,map:o?.map,emissive:new X(`#ffb56a`),emissiveMap:o?.lights,emissiveIntensity:i,roughness:.62,metalness:.16});s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vRoof;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
         vRoof = step(0.5, normal.y);
         #ifdef USE_INSTANCING
           vec2 facadeUv = vec2(max(instanceMatrix[0][0], instanceMatrix[2][2]), instanceMatrix[1][1]) * vec2(0.085, 0.1);
           #ifdef USE_MAP
             vMapUv *= facadeUv;
           #endif
           #ifdef USE_EMISSIVEMAP
             vEmissiveMapUv *= facadeUv;
           #endif
         #endif`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vRoof;`).replace(`#include <map_fragment>`,`#include <map_fragment>
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.5), vRoof);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance *= 1.0 - vRoof;`)};let c=Zf(7),l=Qp.block,u=l*.86,d=Math.floor((Qp.x1-Qp.x0)/l),f=Math.floor((Qp.z1-Qp.z0)/l),p=[],m=(n,r,i)=>{if(n>-45-i||Bm(Sm,n,r,i+6)||Bm(Cm,n,r,i+6)||Pm(n,r)||t(n,r,i+8))return!0;for(let t of e)if(Math.hypot(n-t.x,r-t.z)<t.r+i+6)return!0;return!1};for(let e=0;e<f;e++)for(let t=0;t<d;t++){let n=Qp.x0+(t+.5)*l,r=Qp.z1-(e+.5)*l,i=bm.find(e=>n>e.x0&&n<e.x1&&r>e.z0&&r<e.z1)??xm,a=i===xm?+(c()<.55):Math.max(1,Math.round(i.fill*(.6+c()*.6))),o=[];for(let e=0;e<a*4&&o.length<a;e++){let e=c()<i.tall,t=e?26+c()*20:i===xm?14+c()*26:18+c()*(u/a),s=e?26+c()*20:i===xm?14+c()*26:18+c()*(u/a),l=n+(c()-.5)*(u-t),d=r+(c()-.5)*(u-s);if(o.some(e=>Math.abs(e.x-l)<(e.w+t)/2+3&&Math.abs(e.z-d)<(e.d+s)/2+3)||m(l,d,Math.max(t,s)/2))continue;let f=e?i.max+c()*(i.tallMax-i.max):i.min+c()**1.6*(i.max-i.min);o.push({x:l,z:d,w:t,d:s,h:f,hue:c()})}p.push(...o)}p.length>n&&(p.sort((e,t)=>t.h-e.h),p.length=n);let h=new xi(new Gi(1,1,1),s,p.length),g=new In,_=new X;return p.forEach((e,t)=>{a.add({x0:e.x-e.w/2,x1:e.x+e.w/2,z0:e.z-e.d/2,z1:e.z+e.d/2,y0:0,y1:e.h}),g.position.set(e.x,e.h/2,e.z),g.scale.set(e.w,e.h,e.d),g.updateMatrix(),h.setMatrixAt(t,g.matrix);let n=e.hue*7.31%1;e.hue<.3?_.setHSL(.09,.16,.5+n*.2):e.hue<.45&&e.h<70?_.setHSL(.03,.34,.32+n*.12):e.hue<.58?_.setHSL(.58,.12,.16+n*.1):_.setHSL(.57,.08,.3+n*.22),h.setColorAt(t,_)}),h.frustumCulled=!1,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h}var Um=e=>{let t=new X(e);return[t.r,t.g,t.b]};function Wm(e,t,n=1){let r=e.index?e.toNonIndexed():e;r!==e&&e.dispose();let i=r.getAttribute(`position`),a=new Float32Array(i.count*4);for(let e=0;e<i.count;e++){let r=typeof t==`function`?t(i.getX(e),i.getY(e),i.getZ(e)):t;a.set([r[0],r[1],r[2],n],e*4)}return r.setAttribute(`color`,new Or(a,4)),r.getAttribute(`uv`)&&r.deleteAttribute(`uv`),r}function Gm(e){let t=cd(e);for(let t of e)t.dispose();if(!t)throw Error(`aircraft: geometry merge failed`);return t}function Km(e,t,n,r,i,a,o){let s=new Gi(e,t,n);return s.translate(r,i,a),Wm(s,o)}function qm(e,t,n,r,i,a,o,s=12){let c=new qi(t,e,n,s);return c.rotateX(Math.PI/2),c.translate(r,i,a),Wm(c,o)}function Jm(e,t,n,r,i,a,o){let s=new vo(1,12,8);return s.scale(e,t,n),s.translate(r,i,a),Wm(s,o)}function Ym(e,t,n,r,i,a,o,s,c,l=!1){let u=new Gi(e,i,t,l?4:8,1,1),d=u.getAttribute(`position`),f=l?e:e/2;for(let i=0;i<d.count;i++){let a=d.getX(i),o=l?(a+e/2)/e:Math.abs(a)/f,s=(d.getZ(i)+t/2)/t,c=Vt.lerp(t,n,o);d.setZ(i,-t/2+o*f*Math.tan(r)+s*c),d.setY(i,d.getY(i)*Vt.lerp(1,.55,o)),l&&d.setX(i,a+e/2)}return u.computeVertexNormals(),u.translate(a,o,s),Wm(u,c)}function Xm(e,t,n,r,i,a,o,s,c,l=0){let u=Ym(e,t,n,r,i,0,0,0,c,!0);return u.rotateZ(Math.PI/2-l),u.translate(a,o,s),u}var Zm=Um(`#f3f5f7`),Qm=Um(`#c3c8ce`),$m=Um(`#b9bec5`),eh=Um(`#1c2733`),th=Um(`#2a2f36`),nh=Um(`#8f969e`),rh={x:17,y:-1.1,z:1+16.5*Math.tan(.44)};function ih(){let e=(e,t)=>t<-.5?Qm:Zm;return{body:Gm([qm(1.95,1.95,24,0,0,-1,e,14),qm(1.15,1.95,3.6,0,-.12,-14.8,e,14),Jm(1.15,1.1,2.2,0,-.22,-16.6,e),qm(1.95,.4,8,0,.55,15,e,14),Km(2.3,.4,1.1,0,.62,-15.4,eh),Km(3.96,.32,21,0,.42,-2,eh),Ym(34,6.4,1.6,.44,.5,0,-1.1,.8,$m),Ym(12.4,3.4,1.2,.52,.26,0,.75,16.4,$m),qm(1.05,.95,4.3,-5.8,-2.15,-2.4,nh),qm(1.05,.95,4.3,5.8,-2.15,-2.4,nh),Km(.3,1,2.6,-5.8,-1.45,-1.6,$m),Km(.3,1,2.6,5.8,-1.45,-1.6,$m),Km(1.6,.16,.16,-5.8,-2.15,-4.6,th),Km(1.6,.16,.16,5.8,-2.15,-4.6,th)]),colors:Gm([Xm(6.6,5.4,1.9,.68,.32,0,1.6,13.6,Zm),Km(3.98,.34,25,0,-.32,-.5,Zm)])}}function ah(){let e=rh;return Gm([Km(.9,.9,.9,-e.x,e.y,e.z,[1,.1,.08]),Km(.9,.9,.9,e.x,e.y,e.z,[.1,1,.3]),Km(.8,.8,.8,0,.6,19.2,[1,1,1]),Km(.7,.4,.7,0,-2.1,0,[1,.15,.1]),Km(.8,.5,.5,-2.6,-1.3,-2.2,[1,.95,.85]),Km(.8,.5,.5,2.6,-1.3,-2.2,[1,.95,.85])])}function oh(e){let t=[],n=[];for(let r=0;r<2;r++)for(let i=0;i<28;i++){let a=i/28,o=(i+1)/28,s=t=>({z:26+t**1.15*e,w:1.5+t*60,a:.55*Math.min(1,t*40)*(1-t)**1.4}),c=s(a),l=s(o),u=(e,i)=>{r?t.push(e*i.w*.5,-1.4,i.z):t.push(0,-1.4+e*i.w*.35,i.z),n.push(1,1,1,i.a)};u(-1,c),u(1,c),u(1,l),u(-1,c),u(1,l),u(-1,l)}let r=new Br;return r.setAttribute(`position`,new Or(t,3)),r.setAttribute(`color`,new Or(n,4)),r.computeVertexNormals(),r}function sh(){return{body:Gm([qm(.55,.62,3.2,0,0,-1.4,Zm,10),qm(.62,.2,4.2,0,.12,2.3,Zm,10),qm(.18,.55,.8,0,-.02,-3.4,nh,10),Km(1.12,.5,1.3,0,.42,-1.8,eh),Ym(11,1.6,1.15,0,.16,0,.82,-1,Zm),Ym(3.6,1,.7,.1,.1,0,.18,4,Zm),Xm(1.4,1.3,.7,.6,.1,0,.3,3.9,Zm),Km(.06,1,.1,-1.5,.15,-1.1,nh),Km(.06,1,.1,1.5,.15,-1.1,nh),Km(.18,.4,.4,-.9,-.95,-1,th),Km(.18,.4,.4,.9,-.95,-1,th),Km(.16,.36,.36,0,-.92,-3,th)]),colors:Gm([Km(1.28,.16,6.5,0,-.12,.2,Zm),Km(5.2,.17,.5,-2.9,.82,-1.55,Zm),Km(5.2,.17,.5,2.9,.82,-1.55,Zm)])}}function ch(){let e=new Ki(.95,18);return e.translate(0,-.02,-3.86),Wm(e,[.25,.27,.3],.35)}function lh(){let e=Um(`#41b6e6`),t=Um(`#d6202f`),n=(t,n)=>n>.35?e:Zm;return Gm([qm(.78,.82,7.5,0,0,.2,n,12),qm(.12,.78,3.8,0,-.05,-5.5,Zm,12),qm(.82,.6,3.4,0,.02,5.6,n,12),Jm(.5,.42,1.5,0,.62,-3.6,eh),Km(.5,.9,2.6,-.95,-.12,-1.4,nh),Km(.5,.9,2.6,.95,-.12,-1.4,nh),Ym(10,5.4,1.4,.62,.22,0,-.1,1.6,e=>Math.abs(e)>4.2?t:Zm),Ym(4.6,2,1,.55,.14,0,.05,6.4,Zm),Xm(2.6,2.6,1,.7,.14,-.75,.55,5.3,t,-.35),Xm(2.6,2.6,1,.7,.14,.75,.55,5.3,t,.35),qm(.55,.48,.8,0,0,7.5,th,12)])}var uh=new G(0,1,0),dh=new G,fh=new G,ph=new G,mh=new un;function hh(e,t,n){return ph.crossVectors(t,n).normalize(),fh.crossVectors(ph,t).normalize(),dh.copy(t).negate(),e.setFromRotationMatrix(mh.makeBasis(ph,fh,dh))}function gh(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);i&&n(i);let a=new Vi(r);return a.colorSpace=Ye,a.anisotropy=4,document.fonts?.load(`700 64px 'Barlow Condensed'`).then(()=>{i&&(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,e,t),n(i),a.needsUpdate=!0)}),a}function _h(e,t,n,r){e.beginPath();for(let i=0;i<12;i++){let a=i/12*Math.PI*2-Math.PI/2,o=i%2?r*.5:r;e.lineTo(t+Math.cos(a)*o,n+Math.sin(a)*o)}e.closePath(),e.fill()}var vh=`#41b6e6`,yh=`#e4002b`,bh=62,xh=8.6,Sh={x:1350,y:320,z:-1500,rx:420,rz:2500,mps:13};function Ch(e){let t=new Ln,n=[];for(let e=0;e<=28;e++){let t=-31+e/28*bh,r=2*t/bh,i=xh*Math.max(0,1-r*r)**(r>0?.42:.62);n.push(new W(Math.max(i,.01),t))}let r=new ho(n,32);r.rotateX(-Math.PI/2);let i=gh(1024,1024,e=>{e.fillStyle=`#f4f6f8`,e.fillRect(0,0,1024,1024);for(let[t,n]of[[256,-Math.PI/2],[768,Math.PI/2]]){e.fillStyle=vh,e.fillRect(t-92,170,22,700),e.fillRect(t+70,170,22,700),e.save(),e.translate(t,520),e.rotate(n),e.fillStyle=yh;for(let t of[-300,-250,250,300])_h(e,t,0,20);e.font=`bold 92px 'Barlow Condensed', 'Arial Narrow', sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`#1b2a3a`,e.fillText(`CHICAGO`,0,4),e.restore()}}),a=new Q({map:i,roughness:.55,emissive:e?new X(1,1,1):new X(0,0,0),emissiveMap:e?i:null,emissiveIntensity:e?.55:0});t.add(new Z(r,a));let o=Um(vh),s=Um(`#5d6670`),c=[];for(let e=0;e<4;e++){let t=Xm(6.2,8.5,5,.55,.45,0,3.2,21.5,o);t.rotateZ(e*Math.PI/2+Math.PI/4),c.push(t)}let l=Gm([...c,Km(3.2,2.4,11,0,-9.5,-6,Um(`#e9ecef`)),Km(3.3,.8,9,0,-9.2,-6.6,Um(`#1c2733`)),qm(.5,.7,2.6,-2.6,-9.2,-2.5,s,10),qm(.5,.7,2.6,2.6,-9.2,-2.5,s,10),Km(2,.2,.3,0,-9.2,-2.5,s)]),u=new Q({vertexColors:!0,roughness:.6});return t.add(new Z(l,u)),{group:t,tex:i,skin:a,frame:l,frameMat:u}}var wh={xIn:650,xOut:1250,zN:-5200,zS:2400,y:185,mps:38},Th=(wh.xOut-wh.xIn)/2,Eh=wh.zS-wh.zN,Dh=2*Eh+2*Math.PI*Th,Oh=50,kh=6,Ah=`BLUE SKIES · LAKESHORE EXIT`;function jh(e,t){let n=e.canvas.width,r=e.canvas.height;e.fillStyle=`#fbfbf7`,e.fillRect(0,0,n,r),t&&e.setTransform(-1,0,0,1,n,0);let i=e=>`bold ${e}px 'Barlow Condensed', 'Arial Narrow', sans-serif`;e.font=i(r*.82),e.font=i(Math.floor(r*.82*Math.min(1,n*.95/e.measureText(Ah).width))),e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=yh,e.fillText(Ah,n/2,r*.53)}var Mh=42;function Nh(e,t,n){e=(e%Dh+Dh)%Dh;let r=(wh.xIn+wh.xOut)/2;if(e<Eh){t.set(wh.xIn,wh.y,wh.zN+e),n.set(0,0,1);return}e-=Eh;let i=Math.PI*Th;if(e<i){let i=e/Th;t.set(r-Math.cos(i)*Th,wh.y,wh.zS+Math.sin(i)*Th),n.set(Math.sin(i),0,Math.cos(i));return}if(e-=i,e<Eh){t.set(wh.xOut,wh.y,wh.zS-e),n.set(0,0,-1);return}e-=Eh;let a=e/Th;t.set(r+Math.cos(a)*Th,wh.y,wh.zN-Math.sin(a)*Th),n.set(-Math.sin(a),0,-Math.cos(a))}function Ph(){let e=new Ln,t=sh(),n=new Q({vertexColors:!0,roughness:.45,color:yh}),r=new Q({vertexColors:!0,roughness:.45}),i=new Ln;i.add(new Z(t.body,r),new Z(t.colors,n));let a=new Qr({vertexColors:!0,transparent:!0,depthWrite:!1,side:2});i.add(new Z(ch(),a)),e.add(i);let o=gh(2048,256,e=>jh(e,!1)),s=new go(Oh,kh,24,1);s.rotateY(Math.PI/2),s.translate(0,0,Oh/2);let c=Float32Array.from(s.getAttribute(`position`).array),l=new Q({map:o,roughness:.8}),u=new Z(s,l);e.add(u);let d=gh(2048,256,e=>jh(e,!0)),f=new Q({map:d,side:1,roughness:.8});u.add(new Z(s,f));let p=new Br().setFromPoints([new G,new G]),m=new Ei({color:`#3a3f45`}),h=new Pi(p,m);return h.frustumCulled=!1,e.add(h),{group:e,plane:i,banner:u,rest:c,rope:h,texs:[o,d],mats:[n,r,a,l,f,m],geos:[t.body,t.colors,s,p]}}var Fh=20,Ih=165,Lh={x:520,y:300,z0:-7600,pullZ:-200},Rh=650,zh=480,Bh=(Lh.pullZ-Lh.z0)/Ih,Vh=Bh+Math.PI/2*(Rh/Ih),Hh=Vh+1.5,Uh=Math.ceil(Hh+30),Wh=[Bh,Hh+6],Gh=-5200,Kh=18,qh=[[0,0,0],[-11,-1,9],[11,-1,9],[0,-2.5,18]],Jh=[new G(0,0,-1),new G(1,0,0),new G(-1,0,0),new G(0,0,1)],Yh=[Um(`#f4f6f8`),Um(yh),Um(vh),Um(`#f4f6f8`)];function Xh(){let e=Uh*Fh+1,t=1/Fh,n=qh.map(()=>({pos:new Float32Array(e*3),quat:new Float32Array(e*4),smoke:new Uint8Array(e)})),r=new G(Lh.x,Lh.y,Lh.z0),i=new G(0,0,1),a=new G(-1,0,0),o=new G,s=new Ht,c=new G,l=qh.map(()=>({p:new G,up:new G,turn:0}));for(let u=0;u<e;u++){let e=u*t;e<Hh?(e>Bh&&i.applyAxisAngle(a,Math.min(e-Bh,t)*(Ih/Rh)*+(e<Vh)),e>=Vh&&i.set(0,1,0),o.crossVectors(a,i).normalize(),hh(s,i,o),qh.forEach(([e,t,d],f)=>{c.copy(r).addScaledVector(a,e).addScaledVector(o,t).addScaledVector(i,-d),l[f].p.copy(c),l[f].up.copy(o);let p=n[f];p.pos.set([c.x,c.y,c.z],u*3),p.quat.set([s.x,s.y,s.z,s.w],u*4),p.smoke[u]=+(r.z>Gh)}),r.addScaledVector(i,Ih*t)):l.forEach((r,i)=>{r.turn=Math.min(1.75,r.turn+Ih/zh*t);let a=Jh[i];dh.copy(uh).multiplyScalar(Math.cos(r.turn)).addScaledVector(a,Math.sin(r.turn)),r.turn<1.75?fh.copy(uh).multiplyScalar(-Math.sin(r.turn)).addScaledVector(a,Math.cos(r.turn)):fh.copy(uh).addScaledVector(dh,-dh.y).normalize(),r.up.lerp(fh,1-Math.exp(-(r.turn<1.75?7:2.4)*t)).normalize(),r.p.addScaledVector(dh,Ih*t),hh(s,dh,r.up);let o=n[i];o.pos.set([r.p.x,r.p.y,r.p.z],u*3),o.quat.set([s.x,s.y,s.z,s.w],u*4),o.smoke[u]=+(e<Hh+9)})}return n}var Zh=72,Qh=Kh/Zh;function $h(){let e=gh(256,128,e=>{let t=e.createLinearGradient(0,0,0,128);t.addColorStop(.12,`rgba(255,255,255,0)`),t.addColorStop(.5,`rgba(255,255,255,0.5)`),t.addColorStop(.88,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,256,128);let n=7,r=()=>(n=n*16807%2147483647)/2147483647;for(let t=0;t<56;t++){let t=12+r()*22,n=r()*256,i=64+(r()-.5)*(100-2*t),a=.22+r()*.36;for(let r of[-256,0,256]){let o=e.createRadialGradient(n+r,i,0,n+r,i,t);o.addColorStop(0,`rgba(255,255,255,${a})`),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.fillRect(n+r-t,i-t,t*2,t*2)}}});return e.wrapS=g,e}function eg(e){let t=new Br,n=new Float32Array(438),r=new Float32Array(584),i=new Float32Array(292);for(let t=0;t<=145;t++)r.set([e[0],e[1],e[2],0],t*4);for(let e=0;e<=Zh;e++)i.set([0,0,0,1],e*4);let a=[];for(let e=0;e<Zh;e++){let t=e*2;a.push(t,t+1,t+2,t+1,t+3,t+2)}return t.setIndex(a),t.setAttribute(`position`,new Tr(n,3)),t.setAttribute(`color`,new Tr(r,4)),t.setAttribute(`uv`,new Tr(i,2)),t}function tg(e,t){let n=new Ln;n.name=`airshow`,e.add(n);let r=Ch(t.night);n.add(r.group);let o=Ph();n.add(o.group);let s=Xh(),c=lh(),l=new Q({vertexColors:!0,roughness:.35,metalness:.25}),u=s.map(()=>{let e=new Z(c,l);return e.visible=!1,n.add(e),e}),d=new X(t.sunColor).lerp(new X(1,1,1),.5);t.night&&d.multiplyScalar(.55);let f=$h(),p=new Qr({map:f,vertexColors:!0,color:d,transparent:!0,depthWrite:!1,side:2}),m=s.map((e,t)=>{let r=new Z(eg(Yh[t]),p);return r.frustumCulled=!1,r.visible=!1,n.add(r),r}),h=[],g=new G,_=new G,v=new G,y=new G,b=new G,x=new Ht,S=new G,C=new G,w=new G,T=new G,E=new Ht,D=null;function O(e,t){if(t<0||t>Uh)return!1;let n=s[e],r=t*Fh,i=Math.min(Math.floor(r),Uh*Fh-1),a=r-i;return S.fromArray(n.pos,i*3).lerp(dh.fromArray(n.pos,i*3+3),a),x.fromArray(n.quat,i*4).slerp(E.fromArray(n.quat,i*4+4),a),!0}function k(e,t){return t<0||t>Uh?0:s[e].smoke[Math.min(Math.floor(t*Fh),Uh*Fh)]}function A(e){for(let t=h.length-1;t>=0;t--)if(h[t]<=e)return e-h[t]<=Uh+Kh?h[t]:null;return null}return{group:n,pass(e){let t=A(e);return t!==null&&e-t<Uh?!1:(h.push(e),h.sort((e,t)=>e-t),!0)},update(e,t){let n=e*Sh.mps/((Sh.rx+Sh.rz)/2)+2.85;r.group.position.set(Sh.x+Math.cos(n)*Sh.rx,Sh.y+Math.sin(e*.05)*6,Sh.z+Math.sin(n)*Sh.rz),g.set(-Math.sin(n)*Sh.rx,0,Math.cos(n)*Sh.rz).normalize(),r.group.quaternion.copy(hh(x,g,uh)),r.group.rotateX(Math.sin(e*.11)*.025);let s=e*wh.mps+1650;Nh(s,_,v),o.plane.position.copy(_),Nh(s+25,y,b);let c=Math.atan2(v.x*b.z-v.z*b.x,v.dot(b));o.plane.quaternion.copy(hh(x,v,uh)).multiply(E.setFromAxisAngle(fh.set(0,0,1),-c*5)),Nh(s-Mh,y,b),o.banner.position.copy(y),o.banner.position.y-=3,o.banner.quaternion.copy(hh(x,b,uh));let l=o.banner.geometry.getAttribute(`position`);for(let t=0;t<l.count;t++){let n=o.rest[t*3+2],r=n/Oh;l.setX(t,o.rest[t*3]+Math.sin(n*.32-e*7.5)*.55*r)}l.needsUpdate=!0,o.banner.geometry.computeVertexNormals();let d=o.rope.geometry.getAttribute(`position`);dh.set(0,-.2,4.4).applyQuaternion(o.plane.quaternion).add(_),d.setXYZ(0,dh.x,dh.y,dh.z),d.setXYZ(1,y.x,y.y-.4,y.z),d.needsUpdate=!0;let f=A(e);D=f;let p=f===null?-1:e-f;for(let e=0;e<u.length;e++){let n=u[e];n.visible=O(e,p),n.visible&&(n.position.copy(S),n.quaternion.copy(x));let r=m[e];if(r.visible=f!==null,!r.visible)continue;let o=r.geometry,s=o.getAttribute(`position`),c=o.getAttribute(`color`),l=o.getAttribute(`uv`);for(let n=0;n<=Zh;n++){let r=n*Qh,o=p-r,u=k(e,o)?.82*(1-r/Kh)**1.6*Math.min(1,r*6):0;O(e,Vt.clamp(o,0,Uh)),w.set(0,0,1).applyQuaternion(x),S.addScaledVector(w,8).add(fh.set(a*r,-.25*r,i*r)),T.subVectors(t,S),C.crossVectors(w,T).normalize().multiplyScalar(1.2+6*(1-Math.exp(-r/1.2))+r*1.4),s.setXYZ(n*2,S.x-C.x,S.y-C.y,S.z-C.z),s.setXYZ(n*2+1,S.x+C.x,S.y+C.y,S.z+C.z),c.setW(n*2,u),c.setW(n*2+1,u),l.setX(n*2,o*.55+e*.29),l.setX(n*2+1,o*.55+e*.29)}s.needsUpdate=!0,c.needsUpdate=!0,l.needsUpdate=!0}},noise(e){let t=0;if(D!==null)for(let n of u)n.visible&&(t=Math.max(t,Math.max(0,1-n.position.distanceTo(e)/5e3)**2));let n=Math.max(Math.max(0,1-o.plane.position.distanceTo(e)/900)**2,.6*Math.max(0,1-r.group.position.distanceTo(e)/500)**2);return{jets:t,props:n}},highlight(e,t){for(let n=h.length-1;n>=0;n--){let r=h[n]+Wh[0],i=h[n]+Wh[1];if(r>=e&&i<=t)return{from:r,to:i}}return null},team(e,t){let n=A(e);if(n===null)return!1;t.set(0,0,0);for(let r=0;r<u.length;r++){if(!O(r,e-n))return!1;t.addScaledVector(S,1/u.length)}return!0},dispose(){e.remove(n),r.group.traverse(e=>{e instanceof Z&&e.geometry.dispose()}),r.tex.dispose(),r.skin.dispose(),r.frameMat.dispose();for(let e of o.texs)e.dispose();for(let e of o.mats)e.dispose();for(let e of o.geos)e.dispose();c.dispose(),l.dispose(),p.dispose(),f.dispose();for(let e of m)e.geometry.dispose()}}}var ng=2.4,rg=`
  uniform float uTime;
  attribute vec4 aMove;
  // Distance along the path, +1 going out or -1 coming back, and a size that grows from
  // nothing over the first and last stretch of a path that wraps, so nothing pops in or out.
  // People standing still have no speed and keep their size.
  vec3 moverAt() {
    float t = aMove.z + uTime * aMove.x;
    if (aMove.w > 0.5) {
      float f = fract(t / aMove.y * 0.5);
      return f < 0.5 ? vec3(aMove.y * f * 2.0, 1.0, 1.0) : vec3(aMove.y * (2.0 - f * 2.0), -1.0, 1.0);
    }
    float d = mod(t, aMove.y);
    if (aMove.x == 0.0) return vec3(d, 1.0, 1.0);
    return vec3(d, 1.0, smoothstep(0.0, 40.0, d) * smoothstep(aMove.y, aMove.y - 40.0, d));
  }`;function ig(e,t,n,r=0){return e.onBeforeCompile=e=>{if(e.uniforms.uTime=t,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${rg}`).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
objectNormal.xz *= moverAt().y;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
         vec3 mv = moverAt();
         transformed *= mv.z;
         transformed.xz *= mv.y;
         transformed.z -= mv.x;`),r>0){let t=`#include <common>
varying float vNear;`;e.vertexShader=e.vertexShader.replace(`#include <common>`,t).replace(`#include <project_vertex>`,`#include <project_vertex>
         vNear = distance((modelMatrix * instanceMatrix * vec4(0.0, 0.0, -mv.x, 1.0)).xyz, cameraPosition);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,t).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>\nif (vNear < ${r.toFixed(2)}) discard;`)}},e.customProgramCacheKey=()=>`mover-${n}`,e}function ag(e,t,n,r,i,a,o,s=o,c=1){let l=new Gi(e,t,n).toNonIndexed();return l.translate(r,i,a),og(l,e=>e===2?o:s,c)}function og(e,t,n){let r=e.getAttribute(`position`).count,i=new Float32Array(r*4);for(let e=0;e<r;e++){let r=t(Math.floor(e/6));i.set([r[0],r[1],r[2],n],e*4)}return e.setAttribute(`color`,new Or(i,4)),e.getAttribute(`uv`)&&e.deleteAttribute(`uv`),e}function sg(e,t,n){let r=[],i=[];for(let a=1;a<e.length-1;a++)for(let o of[e[0],e[a],e[a+1]])r.push(o[0],t,o[1]),i.push(n[0],n[1],n[2],o[2]);let a=new Br;return a.setAttribute(`position`,new Or(r,3)),a.setAttribute(`normal`,new Or(r.map((e,t)=>+(t%3==1)),3)),a.setAttribute(`color`,new Or(i,4)),a}function cg(e){let t=cd(e.map(e=>e.index?e.toNonIndexed():e));if(!t)throw Error(`life: geometry merge failed`);return t}function lg(e,t,n){if(!t.length)return;let r=new pi(new Float32Array(t.length*4),4),i=new un,a=new Ht,o=new G(0,1,0),s=new G(1,1,1),c=new G;t.forEach((e,t)=>r.setXYZW(t,e.speed,Math.max(e.span,.01),e.phase,+!!e.pingpong));for(let l of n){let n=l.geo.clone();n.setAttribute(`aMove`,r);let u=new xi(n,l.mat,t.length);t.forEach((e,t)=>{a.setFromAxisAngle(o,e.yaw),u.setMatrixAt(t,i.compose(c.set(e.x,e.y,e.z),a,s)),l.tint&&u.setColorAt(t,e.color??new X(1,1,1))}),u.frustumCulled=!1,u.matrixAutoUpdate=!1,e.add(u)}}var ug=(e,t)=>t[Math.floor(e()*t.length)],dg=e=>new X(e),fg=[`#f2f3f4`,`#f2f3f4`,`#e9eaeb`,`#16181b`,`#16181b`,`#22262b`,`#9aa1a8`,`#8b9197`,`#5f666d`,`#1e3354`,`#7d1d1d`,`#a8261f`,`#2f4f3a`,`#d9b23a`].map(dg),pg=[`#e8463c`,`#f2a33a`,`#f4d35e`,`#2f8fd8`,`#1f4f8f`,`#f4f4f2`,`#2a2a2e`,`#43a36b`,`#d1497e`,`#8a5bd6`].map(dg),mg=[`#f1c7a1`,`#e0ac84`,`#c68a62`,`#9a6440`,`#6e4429`].map(dg),hg=[`#e8463c`,`#f2a33a`,`#f4d35e`,`#2f8fd8`,`#43a36b`,`#d1497e`,`#f4f4f2`,`#18a3a8`].map(dg);function gg(e,t){let{coarse:n,night:r,onTop:i}=t,a={value:0},o=new Ln;o.name=`life`,e.add(o);let s=Zf(91),c=(e,t=0,n=0)=>ig(new Q({vertexColors:!0,roughness:.5,metalness:.2,side:t}),a,e,n),l=i(c(`car`),4),u=e=>i(ig(new Qr({vertexColors:!0,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),a,e),6),d=[.18,.2,.23],f=cg([ag(1.8,.85,4.4,0,.55,0,[1,1,1]),ag(1.6,.6,2.3,0,1.27,.25,[1,1,1],d)]),p=cg([ag(2.55,2.9,12,0,1.6,0,[.92,.93,.94],[.92,.93,.94]),ag(2.6,.9,10.6,0,2.1,.2,[.92,.93,.94],d)]),m=(e,t)=>cg([sg([[0,e,.55],[-1.1,e-1,.5],[-3.6,e-20,0],[0,e-22,0],[3.6,e-20,0],[1.1,e-1,.5]],.22,[1,.84,.6]),ag(1.7,.08,.35,0,.75,e,[1,.93,.78],[1,.93,.78]),ag(1.7,.08,.3,0,.8,t,[1,.06,.04],[1,.06,.04]),sg([[0,t,.35],[-1.2,t,.3],[0,t+4,0],[1.2,t,.3]],.21,[1,.08,.04])]),h=m(-2.25,2.25),g=m(-6.05,6.05),_=[],v=[],y=e=>(s()<.03?v:_).push({...e,color:ug(s,fg)}),b=[{x:-15.2,north:!0,speed:24},{x:-12,north:!0,speed:27.5},{x:-8.8,north:!0,speed:30},{x:-20.8,north:!1,speed:30.5},{x:-24,north:!1,speed:27},{x:-27.2,north:!1,speed:23.5}],x=n?150:72;for(let e of b){let t=14e3;for(let n=s()*40;n<t;n+=x*(.35+s()*1.3))y({x:e.x,y:.07,z:e.north?6e3:-8e3,yaw:e.north?0:Math.PI,speed:e.speed,span:t,phase:n})}let S=Qp.block,C=(e,t)=>Tm.some(n=>e>n.x0-12&&e<n.x1+12&&t>n.z0-12&&t<n.z1+12),w=[],T=(e,t,n,r)=>{let i=null;for(let a=0;a<=n;a++){let o=e.clone().addScaledVector(t,a),s=!C(o.x,o.y)&&o.x<-60;if(s&&!i&&(i=o),(!s||a===n)&&i){let e=s?o:o.clone().addScaledVector(t,-1);e.distanceTo(i)>300&&w.push({a:i,b:e,major:r}),i=null}}},E=Math.round((Qp.x1-Qp.x0)/S),D=Math.round((Qp.z1-Qp.z0)/S);for(let e=1;e<D;e++)T(new W(Qp.x0+S,Qp.z1-e*S),new W(S,0),E-2,e%4==0);for(let e=1;e<E-1;e++)T(new W(Qp.x0+e*S,Qp.z1-S),new W(0,-S),D-2,e%4==0);let O=n?600:1700,k=w.reduce((e,t)=>e+t.a.distanceTo(t.b)*(t.major?1:.22),0),A=O/Math.max(k,1),j=new W;for(let e of w){let t=e.a.distanceTo(e.b);j.subVectors(e.b,e.a).normalize();let n=Math.round(t*A*(e.major?1:.22));for(let r=0;r<n;r++){let n=s()<.5,r=n?e.b:e.a,i=n?-1:1,a=-j.y*i*3.2,o=j.x*i*3.2;y({x:r.x+a,y:.07,z:r.y+o,yaw:Math.atan2(-j.x*i,-j.y*i),speed:(e.major?12:9)+s()*3,span:t,phase:s()*t})}}lg(o,_,[{geo:f,mat:l,tint:!0},...r?[{geo:h,mat:u(`car-lights`)}]:[]]),lg(o,v,[{geo:p,mat:l},...r?[{geo:g,mat:u(`bus-lights`)}]:[]]);let M=[.95,.96,.96],N=cg([ag(2.4,1,7,0,.4,0,M),ag(1.2,1,1.2,0,.4,-3.9,M),ag(1.8,.9,2.2,0,1.3,.6,M,[.25,.3,.35])]),ee=cg([ag(7,2.4,30,0,.7,0,M),ag(6.2,2.2,22,0,3,1.5,M,[.2,.24,.3]),ag(5.6,1.8,12,0,5,3,M,[.2,.24,.3])]),te=(()=>{let e=new Br;e.setAttribute(`position`,new Or([0,1.6,-.6,0,12.5,-.4,0,1.6,3.6],3)),e.setAttribute(`normal`,new Or([1,0,0,1,0,0,1,0,0],3)),og(e,()=>[.97,.96,.92],1);let t=new Br;return t.setAttribute(`position`,new Or([0,1.4,-3.8,0,11.5,-.7,0,1.4,-.9],3)),t.setAttribute(`normal`,new Or([1,0,0,1,0,0,1,0,0],3)),og(t,()=>[.95,.95,.93],1),cg([ag(2,.9,8,0,.35,0,M),ag(.12,12,.12,0,6.5,-.6,[.7,.7,.72]),e,t])})(),P=(e,t,n)=>cg([sg([[0,n,.55],[-t*.5,n+1,.5],[-t*4,n+e,0],[t*4,n+e,0],[t*.5,n+1,.5]],.25,[.92,.96,.97]),sg([[0,n,.6],[-t,n+.5,.55],[-t*.6,n+e*.6,0],[t*.6,n+e*.6,0],[t,n+.5,.55]],.27,[.97,.99,1])]),ne=ig(new Qr({vertexColors:!0,transparent:!0,depthWrite:!1}),a,`wake`),re=[],ie=[],ae=[],F=n?.5:1,oe=2050,se=(e,t,n)=>{let r=e-Math.sin(t)*n;return e+Math.max(0,oe-Math.min(e,r))};for(let e=0;e<Math.round(18*F);e++){let e=s()<.5,t=(e?0:Math.PI)+(s()-.5)*.24,n=9e3;re.push({x:se(oe+s()*3200,t,n),y:.35,z:e?4500:-4500,yaw:t,speed:9+s()*8,span:n,phase:s()*n,color:s()<.75?dg(`#ffffff`):ug(s,[dg(`#1f3a66`),dg(`#a8261f`),dg(`#262a30`)])})}for(let e=0;e<Math.round(22*F);e++){let e=s()*Math.PI*2;ie.push({x:se(2250+s()*3e3,e,1600),y:.3,z:-4200+s()*7e3,yaw:e,speed:2.5+s()*2.5,span:1600,phase:s()*3200,pingpong:!0})}for(let e=0;e<Math.round(8*F);e++){let t=e%2==0,n=9650;re.push({x:900+s()*950,y:.35,z:t?7e3:-2650,yaw:t?0:Math.PI,speed:8+s()*7,span:n,phase:s()*n,color:s()<.7?dg(`#ffffff`):ug(s,[dg(`#1f3a66`),dg(`#a8261f`)])})}for(let e=0;e<Math.round(14*F);e++){let e=s()*Math.PI*2,t=300+s()*400,n=450+s()*1300,r=-900+s()*3600,i=n-Math.sin(e)*t,a=r-Math.cos(e)*t;i<450||i>1850||a<-1e3||a>3e3||ie.push({x:n,y:.3,z:r,yaw:e,speed:2.5+s()*2.5,span:t,phase:s()*t*2,pingpong:!0})}for(let e=0;e<2;e++)ae.push({x:1e3+e*130,y:.4,z:-2900,yaw:Math.PI,speed:5.5,span:3600,phase:e*3600,pingpong:!0});lg(o,re,[{geo:N,mat:c(`motor`),tint:!0},{geo:P(38,1.2,3.6),mat:ne}]),lg(o,ie,[{geo:te,mat:c(`sail`,2)}]),lg(o,ae,[{geo:ee,mat:c(`tour`)},{geo:P(70,3.4,15),mat:ne}]);let ce=ig(new Q({vertexColors:!0,roughness:.35,metalness:.3}),a,`jet`),I=ig(new Q({vertexColors:!0,roughness:.4,metalness:.2}),a,`livery`),L=ig(new Qr({vertexColors:!0,toneMapped:!1}),a,`nav`),le=ih(),R=[`#1d3f8f`,`#c8202f`,`#0f6e8c`,`#e2a400`,`#5b2a86`,`#1f7a44`,`#20242b`].map(dg),ue=[{x:3e4,y:1250,z:-2600,yaw:Math.PI/2,speed:95,span:6e4,phase:0},{x:-3e4,y:2200,z:5e3,yaw:-Math.PI/2-.05,speed:130,span:6e4,phase:2e4},{x:3e4,y:1700,z:-9e3,yaw:Math.PI/2+.03,speed:110,span:6e4,phase:4e4},{x:-3e4,y:3200,z:12e3,yaw:-Math.PI/2,speed:160,span:6e4,phase:8e3},{x:3e4,y:1500,z:2500,yaw:Math.PI/2-.02,speed:100,span:6e4,phase:52e3},{x:6e3,y:2600,z:-3e4,yaw:Math.PI,speed:140,span:6e4,phase:3e4},{x:3500,y:3900,z:3e4,yaw:.04,speed:150,span:6e4,phase:14e3},{x:-3e4,y:950,z:-6e3,yaw:-Math.PI/2+.04,speed:88,span:6e4,phase:46e3}],de=[{x:7e4,y:10600,z:-26e3,yaw:Math.PI/2+.38,speed:235,span:15e4,phase:0},{x:-7e4,y:11200,z:9e3,yaw:-Math.PI/2+.22,speed:250,span:15e4,phase:62e3},{x:26e3,y:10900,z:7e4,yaw:-.36,speed:240,span:15e4,phase:104e3}];for(let e of[...ue,...de])e.color=ug(s,R);for(let e of[ue,de])lg(o,e,[{geo:le.body,mat:ce},{geo:le.colors,mat:I,tint:!0},...r?[{geo:ah(),mat:L}]:[]]);let fe=new X(t.sunColor).lerp(new X(1,1,1),.55);r&&fe.multiplyScalar(.62),lg(o,de,[{geo:oh(2600),mat:ig(new Qr({vertexColors:!0,color:fe,transparent:!0,depthWrite:!1,side:2,fog:!1}),a,`contrail`)}]);let pe=sh(),me=[{x:900,y:330,z:4e3,yaw:0,speed:52,span:16e3,phase:0,pingpong:!0},{x:1500,y:450,z:-12e3,yaw:Math.PI,speed:48,span:16e3,phase:9e3,pingpong:!0},{x:2200,y:380,z:4e3,yaw:0,speed:55,span:16e3,phase:21e3,pingpong:!0},{x:1200,y:520,z:-12e3,yaw:Math.PI,speed:50,span:16e3,phase:27e3,pingpong:!0}];for(let e of me)e.color=ug(s,R);lg(o,me,[{geo:pe.body,mat:ce},{geo:pe.colors,mat:I,tint:!0},{geo:ch(),mat:ig(new Qr({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}),a,`prop`)}]);let z=cg([ag(.22,.24,.22,0,1.6,0,[1,1,1]),ag(.13,.8,.13,-.11,.4,0,[1,1,1]),ag(.13,.8,.13,.11,.4,0,[1,1,1]),ag(.1,.55,.1,-.29,1.12,0,[1,1,1]),ag(.1,.55,.1,.29,1.12,0,[1,1,1])]),he=cg([ag(.46,.62,.26,0,1.15,0,[1,1,1]),ag(.42,.26,.24,0,.74,0,[.35,.37,.42])]),ge=e=>{let t=e.clone();return t.rotateX(-Math.PI/2),t.translate(0,.12,-.85),t},_e=ag(.9,.02,1.9,0,.03,0,[1,1,1]),ve=cg([og(new Ji(1.35,.55,10,1,!0).translate(0,2.25,0).toNonIndexed(),()=>[1,1,1],1),ag(.05,2.2,.05,0,1.1,0,[.85,.85,.85])]),ye=[],be=[],xe=[],Se=(e,t)=>Math.hypot(e-70,t-0)<48||Math.abs(e-60)<22&&Math.abs(t- -2)<26,Ce=(e,t=ye)=>t.push({...e,color:void 0}),we=n?.5:1;for(let e=0,t=0;e<400&&t<60*we;e++){let e=34+s()*112,n=-900+s()*1700;Se(e,n)||(Ce({x:e,y:.05,z:n,yaw:s()*6.28,speed:0,span:1,phase:0}),t++)}for(let e=0,t=0;e<400&&t<50*we;e++){let e=40+s()*100,n=60+s()*260,r=-900+s()*1500;Se(e,r)||Se(e,r-n)||Se(e,r-n/2)||(Ce({x:e,y:.05,z:r,yaw:0,speed:1.1+s()*.5,span:n,phase:s()*n*2,pingpong:!0}),t++)}for(let e=0;e<14*we;e++){let e=-700+s()*1300;Math.abs(e-0)<30||Ce({x:152+s()*22,y:-.55,z:e,yaw:s()*6.28,speed:0,span:1,phase:0})}for(let e=0;e<50*we;e++){let e=s()<.5,t=s()<.4;Ce({x:(e?8:4)+s()*1.5,y:.09,z:e?1600:-1600,yaw:e?0:Math.PI,speed:t?5.5+s()*2:2.6+s(),span:3200,phase:s()*3200})}for(let e=0;e<9;e++){let e=50+s()*9,t=18+s()*6;Ce({x:e,y:.05,z:t,yaw:Math.atan2(e-70,t-0)+(s()-.5)*.6,speed:0,span:1,phase:0})}for(let[e,t]of[[75,-56],[102,-47],[66,57],[106,45]])for(let n=0;n<5;n++){let n=e+(s()-.5)*7,r=t+(s()-.5)*5;Ce({x:n,y:.05,z:r,yaw:Math.atan2(n-70,r-0)+(s()-.5)*.7,speed:0,span:1,phase:0})}for(let e=0,t=0;e<300&&t<34*we;e++){let e=46+s()*80,n=-800+s()*1500;Se(e,n)||(Ce({x:e,y:.05,z:n,yaw:s()*6.28,speed:0,span:1,phase:0},be),s()<.6&&xe.push({x:e+1.4,y:0,z:n-.4,yaw:0,speed:0,span:1,phase:0,color:ug(s,hg)}),t++)}for(let e of ye)e.color=ug(s,pg);for(let e of be)e.color=ug(s,hg);let Te=e=>e.map(e=>({...e,color:ug(s,mg)})),Ee=c(`flesh`,0,ng),De=c(`cloth`,0,ng);return lg(o,Te(ye),[{geo:z,mat:Ee,tint:!0}]),lg(o,ye,[{geo:he,mat:De,tint:!0}]),lg(o,Te(be),[{geo:ge(z),mat:Ee,tint:!0}]),lg(o,be,[{geo:ge(he),mat:De},{geo:_e,mat:De,tint:!0}]),lg(o,xe,[{geo:ve,mat:c(`umbrella`,2,ng),tint:!0}]),{update(e){a.value=e}}}var _g=.35,vg=.6,yg=1.2;function bg(e,t,n,r){let i=e.blocked(t,r+vg,n,_g,1.1)!==null,a=e.top(t,n,r+vg);return{y:a?a.y1:0,wall:i}}function xg(e,t,n,r){let i=bg(e,t,n,r);if(i.wall)return{kind:`wall`,y:r,drop:0};let a=r-i.y;return a<=yg?{kind:`ok`,y:i.y,drop:a}:{kind:a>=100?`edge`:`ledge`,y:r,drop:a}}function Sg(e,t,n,r,i,a,o,s=.5){let c=n;for(let n=s;n<=o+1e-6;n+=s){let o=xg(e,t+i*n,r+a*n,c);if(o.kind===`ok`)c=o.y;else if(o.kind===`edge`){let s=o.drop;for(let o=n+.5;o<=n+4;o+=.5)s=Math.max(s,c-bg(e,t+i*o,r+a*o,c).y);return{kind:`edge`,dist:n,drop:s}}else return{kind:o.kind,dist:n,drop:o.drop}}return{kind:`roof`,dist:o,drop:0}}function Cg(e,t,n,r){if(n<100)return!1;for(let i=0;i<24;i++){let a=i/24*Math.PI*2;if(Sg(e,t,n,r,Math.cos(a),Math.sin(a),120,1).kind===`edge`)return!0}return!1}function wg(e,t){if(e>150)return`water`;if(e>=-8&&e<=156)return`beach`;for(let n of Tm)if(e>=n.x0&&e<=n.x1&&t>=n.z0&&t<=n.z1)return`park`;return`street`}function Tg(e,t,n){let r=Vt.clamp(e,10,126),i=t,a=Math.hypot(r-e,i-t);for(let n of Tm){let o=Vt.clamp(e,n.x0+20,n.x1-20),s=Vt.clamp(t,n.z0+20,n.z1-20),c=Math.hypot(o-e,s-t);c<a&&([a,r,i]=[c,o,s])}return n.set(r,0,i)}function Eg(e,t,r){let{onTop:i}=r,a=new Ln;a.name=`pads`,e.add(a);let o=e=>i(new Qr({color:e,side:2}),4),s=o(`#f4f7fa`),c=o(`#f0a202`),l=o(`#e23d3d`),u=i(new Q({color:`#262c33`,roughness:.95}),3),d=new Qr({vertexColors:!0,transparent:!0,opacity:r.night?.5:.22,blending:2,depthWrite:!1,side:2}),f=new qi(.9,1.6,160,12,4,!0),p=f.getAttribute(`position`),m=new X(`#ffb347`),h=new Float32Array(p.count*3);for(let e=0;e<p.count;e++){let t=(1-(p.getY(e)+80)/160)**2;h.set([m.r*t,m.g*t,m.b*t],e*3)}f.setAttribute(`color`,new Tr(h,3));let g=new vo(.45,10,8),_=[],v=(e,t,n,r,i)=>{let o=new Z(e,t);return o.rotation.x=-Math.PI/2,o.position.set(n,r,i),a.add(o),o},y=[];return n.forEach((e,n)=>{let r=Zp(e.lat,e.lon),i=r.x+e.dx,o=r.z+e.dz,p=t.top(i,o),m=p?p.y1:e.heightM,h=3;for(let e=3;e<=20;e+=.5){let n=!0;for(let r=0;r<16&&n;r++){let a=r/16*Math.PI*2,s=t.top(i+Math.cos(a)*e,o+Math.sin(a)*e,m+.1);n=!!s&&Math.abs(s.y1-m)<.1}if(!n)break;h=e}let b=Math.min(14,h-1.2);y.push({...e,x:i,z:o,y:m,r:b}),v(new go(2*b+3,2*b+3),u,i,m+.1,o),v(new _o(b-1,b,48),s,i,m+.14,o),b>8&&v(new _o(b*.55-.7,b*.55,40),c,i,m+.14,o),v(new _o(2.6,3.3,32),l,i,m+.14,o),v(new Ki(1.2,20),c,i,m+.15,o);let x=new Z(f,d);x.position.set(i,m+80,o),a.add(x);for(let e=0;e<4;e++){let t=Math.PI/4+e*Math.PI/2,r=b+.9,s=new Z(g,new Qr({color:new X(4,4,3.6),toneMapped:!1}));s.position.set(i+Math.cos(t)*r,m+.6,o+Math.sin(t)*r),a.add(s),_.push({mesh:s,phase:n*.37+e*.07})}}),{list:y,at(e,t,n){for(let r of y)if(Math.abs(r.y-t)<.5&&Math.hypot(r.x-e,r.z-n)<40)return r;return null},update(e){for(let t of _){let n=(e+t.phase)%1.5;t.mesh.visible=n<.06||n>.16&&n<.22}}}}var Dg=new G(-.88,.92,.25),Og=Math.PI/2,kg=new G(-1.55,.25,.25),Ag={x0:-.6,x1:.02,z0:-.6,z1:.6},jg=1.1;function Mg(e,t,n,r,i,a,o,s){let c=new Z(new Gi(t,n,r),s);return c.position.set(i,a,o),e.add(c),c}var Ng=new G(0,1,0),Pg=new G;function Fg(e,t,n,r,i){Pg.set(n.x-t.x,n.y-t.y,n.z-t.z);let a=Pg.length()||1,o=new Z(new qi(r,r,a,8),i);return o.position.set((t.x+n.x)/2,(t.y+n.y)/2,(t.z+n.z)/2),o.quaternion.setFromUnitVectors(Ng,Pg.multiplyScalar(1/a)),e.add(o),o}function Ig(e){return{mode:e,forward:0,turn:0,leftHand:null,rightHand:null,gesture:null,gestureT:0,walk:0,flare:0,air:0,altFt:0,time:0,reaching:!1}}function Lg(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);i&&n(i);let a=new Vi(r);return a.colorSpace=Ye,a.anisotropy=4,a}function Rg(e){e.traverse(e=>{let t=e;t.geometry?.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let e of n)e.map?.dispose(),e.dispose()})}var zg={suit:`#3d4a3a`,suitDark:`#262f25`,helmet:`#eef1f3`};function Bg(){let e=new Ln,t=new Q({color:`#f1f4f6`,roughness:.4,metalness:.2}),n=new Q({color:`#c4322a`,roughness:.45,metalness:.15}),r=new Q({color:`#4a535b`,roughness:.85}),i=new Q({color:`#2b3138`,roughness:.95}),a=new Q({color:`#3a3f45`,roughness:.8}),o=new Q({color:`#1d2227`,roughness:.5,metalness:.3}),s=new Q({color:`#aeb8c1`,roughness:.35,metalness:.6}),c=new Q({color:`#7fa9bf`,transparent:!0,opacity:.32,roughness:.05,metalness:.4,side:2,depthWrite:!1});Mg(e,2.3,.08,2.75,0,-.04,.1,i),Mg(e,2.2,.5,3.05,0,-.33,.13,t),Mg(e,2.06,.04,2.7,0,1.41,.1,r),Mg(e,2.3,.1,2.9,0,1.48,0,t),Mg(e,2.2,1.45,.08,0,.72,1.5,r),Mg(e,1.96,.42,.45,0,.21,1.22,a),Mg(e,1.96,.6,.1,0,.75,1.42,a);for(let r of[-1,1]){Mg(e,.1,1.45,.14,r*1.12,.72,-1.25,t),Mg(e,.1,1.45,.14,r*1.12,.72,1.48,t),Mg(e,.03,.14,3,r*1.115,-.2,.13,n),Mg(e,.05,1.36,1.3,r*1.2,.7,2.22,t);let i=new Z(new go(.85,.5),c);i.position.set(r*1.23,1.02,2.22),i.rotation.y=Math.PI/2*r,e.add(i),Fg(e,{x:r*1.05,y:.95,z:-1.18},{x:r*1.05,y:1.35,z:-1.18},.02,s)}Mg(e,2.2,1.55,1.4,0,.7,2.25,t),Mg(e,1.3,.55,3.4,0,1.8,1,t);let l=new Z(new qi(.2,.24,.5,12),o);l.rotation.x=Math.PI/2,l.position.set(0,1.86,2.85),e.add(l);let u=new qi(.2,.5,7.6,14);u.rotateX(Math.PI/2);let d=new Z(u,t);d.position.set(0,1.05,6.7),e.add(d);let f=Mg(e,.1,1.6,.9,0,1.8,10.35,n);f.rotation.x=.35,Mg(e,2,.06,.45,0,.95,7.3,t);let p=new Q({map:Lg(256,64,e=>{e.fillStyle=`#f1f4f6`,e.fillRect(0,0,256,64),e.fillStyle=`#1d2227`,e.font=`700 44px sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`N312LX`,128,34)}),roughness:.45});for(let t of[-1,1]){let n=new Z(new go(1.2,.3),p);n.position.set(t*.44,1.12,4.4),n.rotation.y=Math.PI/2*t,e.add(n)}Mg(e,2,.08,1.45,0,-.32,-2,i);for(let t of[-1,1])Mg(e,.48,.12,.5,t*.55,.42,-1.75,a),Mg(e,.48,.62,.08,t*.55,.74,-1.47,a);let m=Mg(e,1.9,.38,.1,0,.95,-2.45,o);m.rotation.x=-.4,Mg(e,.32,.5,.9,0,.28,-2.05,o);let h=-1.3,g=new Z(new vo(1.15,22,10,Math.PI,Math.PI,0,Math.PI/2),c);g.scale.set(1,.92,1.3),g.position.set(0,.45,h),g.renderOrder=2,e.add(g);let _=t.clone();_.side=2;let v=new Z(new vo(1.15,22,8,Math.PI,Math.PI,Math.PI/2,Math.PI/2),_);v.scale.set(1,.9,1.3),v.position.set(0,.45,h),e.add(v),Fg(e,{x:0,y:1.5,z:-1.32},{x:0,y:.5,z:-2.78},.03,o);for(let t of[-1,1]){Fg(e,{x:t*1.38,y:-.68,z:-1.95},{x:t*1.38,y:-.68,z:2.15},.05,s),Fg(e,{x:t*1.38,y:-.68,z:-1.95},{x:t*1.38,y:-.45,z:-2.35},.05,s);for(let n of[-1,1.2])Fg(e,{x:t*.95,y:-.45,z:n},{x:t*1.38,y:-.68,z:n},.045,s)}Fg(e,{x:0,y:2.05,z:.15},{x:0,y:2.66,z:.15},.09,o);let y=new Ln;y.position.set(0,2.62,.15),e.add(y),Mg(y,.55,.14,.3,0,0,0,o);let b=new Gi(14.6,.05,.53);[.85,.35,.15].forEach((e,t)=>{let n=new Q({color:`#262a2f`,roughness:.5,transparent:t>0,opacity:e,depthWrite:t===0}),r=new Z(b,n);r.rotation.y=t*.13,y.add(r)});let x=Lg(256,256,e=>{let t=e.createRadialGradient(128,128,8,128,128,127);t.addColorStop(0,`rgba(40,44,50,0.05)`),t.addColorStop(.8,`rgba(40,44,50,0.16)`),t.addColorStop(.97,`rgba(40,44,50,0.3)`),t.addColorStop(1,`rgba(40,44,50,0)`),e.fillStyle=t,e.fillRect(0,0,256,256)}),S=new Z(new Ki(7.3,48),new Qr({map:x,transparent:!0,side:2,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.set(0,2.62,.15),e.add(S);let C=new Ln;C.position.set(-.2,2.15,10.5),e.add(C),Mg(C,.05,2.6,.2,0,0,0,new Q({color:`#262a2f`,transparent:!0,opacity:.45,depthWrite:!1}));let w=new Z(new Ki(1.3,24),new Qr({color:`#d7dee4`,transparent:!0,opacity:.1,side:2,depthWrite:!1}));w.rotation.y=Math.PI/2,w.position.set(-.2,2.15,10.5),e.add(w);let T=new Z(new vo(.07,8,8),new Q({color:`#ff3b3b`,emissive:`#ff2020`,emissiveIntensity:1}));T.position.set(0,2.1,2.4),e.add(T);let E=Ed({thirdPerson:!0,look:zg});e.add(E.group);let D=Ig(`seated`),O=new un().makeTranslation(.55,1.22,-1.72),k=new G(.04,-.62,-.4),A=new G(-.32,-.72,-.06),j=new G(-.26,-.02,-.34),M=new G,N=new G;return{group:e,update(e,t,n){y.rotation.y+=e*13.8,C.rotation.x+=e*40,T.material.emissiveIntensity=Math.sin(t*7)>.6?2.2:.1,D.time=t,N.copy(k).x+=Math.sin(t*1.7)*.012,M.copy(n?j:A),D.rightHand=N,D.leftHand=M,E.update(O,D,e)},dispose(){E.dispose(),Rg(e)}}}var Vg={suit:`#7a2e26`,suitDark:`#4d1c17`,helmet:`#cdb48a`},Hg=4.6,Ug=[[1.7,0],[2.6,1.6],[4.3,4.2],[6.2,7.2],[7.7,10.4],[8.5,13.4],[8.6,15.6],[8,17.9],[6.6,19.9],[4.4,21.3],[2,22],[.01,22.2]];function Wg(){return new ho(new Sa(Ug.map(([e,t])=>new W(e,t))).getSpacedPoints(44),48)}function Gg(e,t,n,r,i){e.beginPath();for(let a=0;a<12;a++){let o=a/12*Math.PI*2-Math.PI/2,s=a%2?.52:1;e.lineTo(t+Math.cos(o)*r*s*i,n+Math.sin(o)*r*s)}e.closePath(),e.fill()}var Kg={sunrise:[`#f2a541`,`#e4572e`,`#f3d34a`,`#ad2e24`],ocean:[`#1d4e89`,`#00b2ca`,`#7dcfb6`,`#f2f4ef`],rainbow:[`#d7263d`,`#f46036`,`#f9c80e`,`#3bb273`,`#2e86de`,`#6c3fb5`]};function qg(e){return Lg(1024,512,t=>{let n=1024,r=e=>(1-e)*512;if(e===`chicago`){t.fillStyle=`#f4f5f2`,t.fillRect(0,0,n,512),t.fillStyle=`#41b6e6`;for(let[e,i]of[[.3,.37],[.63,.7]])t.fillRect(0,r(i),n,r(e)-r(i));t.fillStyle=`#e4002b`;for(let e=0;e<8;e++)Gg(t,(e+.5)/8*n,r(.5),30,1.23)}else{let i=Kg[e];for(let e=0;e<16;e++)t.fillStyle=i[e%i.length],t.fillRect(e/16*n,0,65,512);e===`ocean`&&(t.fillStyle=`#f2f4ef`,t.fillRect(0,r(.56),n,r(.48)-r(.56)))}t.fillStyle=`#33302c`,t.fillRect(0,r(.06),n,512-r(.06)),t.fillStyle=`rgba(0,0,0,0.14)`,t.fillRect(0,0,n,r(.955));for(let e=0;e<16;e++)t.fillRect(e/16*n-1,0,2.5,512);t.fillStyle=`rgba(0,0,0,0.05)`;for(let e=1;e<12;e++)t.fillRect(0,e/12*512,n,1.5)})}function Jg(){let e=Lg(256,256,e=>{e.fillStyle=`#8a6638`,e.fillRect(0,0,256,256);for(let t=0;t<32;t++)for(let n=0;n<16;n++){let r=n*16+t%2*8,i=t*8,a=150+(t*7+n*13)%30;e.fillStyle=`rgb(${a+20},${a-10},${a-70})`,e.beginPath(),e.ellipse(r+8,i+4,8,3.2,0,0,Math.PI*2),e.fill()}e.fillStyle=`rgba(60,40,20,0.35)`;for(let t=0;t<256;t+=16)e.fillRect(t,0,2,256)});return e.wrapS=g,e.wrapT=g,e.repeat.set(3,2),e}function Yg(e,t){let n=new Ln,r=new Q({map:Jg(),roughness:.95}),i=new Q({color:`#4a3324`,roughness:.9}),a=new Q({color:`#5a4632`,roughness:.95}),o=new Q({color:`#b9c2ca`,roughness:.3,metalness:.7}),s=new Q({color:`#7a6450`,roughness:.85}),c=new Q({color:`#d9dde0`,roughness:.35,metalness:.5});Mg(n,1.68,.06,1.68,0,-.03,0,a);for(let e of[-1,1])Mg(n,1.76,jg,.08,0,jg/2,e*.84,r),Mg(n,.08,jg,1.6,e*.84,jg/2,0,r),Mg(n,1.86,.12,.16,0,1.12,e*.84,i),Mg(n,.16,.12,1.86,e*.84,1.12,0,i);for(let e of[-.56,.56]){let t=new Z(new qi(.17,.17,.9,14),c);t.position.set(.56,.47,e),n.add(t)}let l=(e,t,n,r)=>({x:e*r,y:n,z:t*r});for(let e of[-1,1])for(let t of[-1,1])Fg(n,l(e,t,jg,.78),l(e,t,2.25,.42),.024,s);for(let[e,t]of[[l(-1,-1,2.25,.42),l(1,-1,2.25,.42)],[l(1,-1,2.25,.42),l(1,1,2.25,.42)],[l(1,1,2.25,.42),l(-1,1,2.25,.42)],[l(-1,1,2.25,.42),l(-1,-1,2.25,.42)]])Fg(n,e,t,.025,o);for(let e of[-.14,.14]){let t=new Z(new qi(.15,.13,.32,14),o);t.position.set(e,2.35,0),n.add(t);let r=new Z(new yo(.15,.03,6,16),o);r.rotation.x=Math.PI/2,r.position.set(e,2.5500000000000003,0),n.add(r)}let u=new G(.22,1.9300000000000002,.02);Fg(n,{x:.14,y:2.23,z:0},u,.018,o);let d=[];for(let e=0;e<16;e++){let t=e/16*Math.PI*2,n=Math.cos(t)*1.7,r=Math.sin(t)*1.7,i=l(n>0?1:-1,r>0?1:-1,2.25,.42);d.push(i.x,i.y,i.z,n,Hg,r)}let f=new Br;f.setAttribute(`position`,new Or(d,3)),n.add(new Ri(f,new Ei({color:`#3b3631`})));let p=Wg(),m=qg(e),h=new Q({map:m,roughness:.75,emissive:`#ff9a4a`,emissiveMap:m,emissiveIntensity:0}),g=new Z(p,h),_=new Q({map:m,side:1,roughness:.9,emissive:`#ffffff`,emissiveMap:m,emissiveIntensity:.2}),v=new Z(p,_);for(let e of[g,v])e.position.y=Hg,n.add(e);let y=new Ln;y.position.set(0,2.5500000000000003,0),n.add(y);let b=new Ji(.3,2,14,1,!0);b.translate(0,1,0);let x=new Ji(.13,1.1,12,1,!0);x.translate(0,.55,0);let S=(e,t,n)=>new Qr({color:e,transparent:!0,opacity:t,blending:n?2:1,depthWrite:!1,side:2});y.add(new Z(b,S(`#ff6a12`,.85,!1))),y.add(new Z(x,S(`#ffe9a8`,.95,!0))),y.visible=!1;let C=null,w=Ig(`down`),T=new un,E=new un,D=new G;t.pilot&&(C=Ed({thirdPerson:!0,look:Vg}),n.add(C.group),T.compose(new G(.4,1.6,.04),new Ht().setFromAxisAngle(Ng,Math.PI/2),new G(1,1,1)),E.copy(T).invert(),D.copy(u).applyMatrix4(E));let O=new X(`#ff9a4a`),k=new X(`#ffffff`);return{group:n,update(e,t,n){if(y.visible=n>.02,y.visible){let e=.9+Math.sin(t*37)*.06+Math.sin(t*23.7)*.05;y.scale.set(.8+.2*n,n*e,.8+.2*n)}_.emissiveIntensity=.2+n*.45,_.emissive.copy(k).lerp(O,n),h.emissiveIntensity=n*.22,C&&(w.time=t,w.rightHand=n>.02?D:null,C.update(T,w,e))},dispose(){C?.dispose(),Rg(n)}}}var Xg={door:`EXIT`,roof:`EXIT`,chase:`FREEFALL`,flyer:`FREEFALL`,orbit:`FREEFALL`,below:`FREEFALL`,formation:`FORMATION`,ringsDown:`RINGS`,wingChase:`WINGSUIT`,wingFront:`WINGSUIT`,flyby:`FLYBY`,opening:`OPENING`,canopyFront:`UNDER CANOPY`,canopyWide:`UNDER CANOPY`,airshow:`AIR SHOW`,canopySide:`UNDER CANOPY`,landing:`LANDING`,after:`DOWN`},Zg={door:70,roof:66,chase:62,flyer:60,orbit:60,below:62,formation:60,ringsDown:66,wingChase:60,wingFront:58,flyby:44,opening:60,canopyFront:58,canopyWide:45,airshow:64,canopySide:55,landing:48,after:55},Qg={flyby:[7,7],landing:[11,15]},$g=6,e_=.55,t_=3.2,n_={plane:{cam:new G(4.2,1.95,-.7),look:new G(1.22,.9,.95)},heli:{cam:new G(-2.7,1.25,-2.2),look:new G(-.9,.7,.25)}},r_=new Set([`freefall`,`deploying`,`malfunction`,`canopy`,`down`,`impact`]),i_=mf.at,a_=new G(0,1,0);function o_(e,t){let n=e.frames,r=n.findIndex(e=>r_.has(Tf(e)));if(r<0||n.length<10)return null;let i=e=>n[e][i_.t],a=e=>{for(let t=r;t<n.length;t++)if(e(n[t]))return i(t);return null},o=i(0),s=i(n.length-1),c=i(r),l=a(e=>Tf(e)===`deploying`||Tf(e)===`malfunction`),u=a(e=>Tf(e)===`canopy`),d=a(e=>Tf(e)===`down`||Tf(e)===`impact`)??s,f=Tf(n[n.length-1])===`impact`,p=wf[n[r][i_.ride]]??`roof`,m=n.some(e=>e[i_.wing]>.5),h=a(e=>e[_f+gf.at.started]===1),g=a(e=>e[_f+gf.at.broken]===1)??d,_=[],v=o,y=(e,t,n=1,r=Xg[e])=>{t=Math.min(t,s),!(t-v<.4)&&(_.push({kind:e,from:v,to:t,speed:n,title:r}),v=t)},b=Math.max(c+1,(l??d)-1.2);y(p===`roof`?`roof`:`door`,Math.min(c+2.8,b));let x=m?[`wingChase`,`flyby`,`wingFront`,`flyby`]:t.rings?[`ringsDown`,`chase`,`ringsDown`,`orbit`]:[`chase`,`flyer`,`orbit`,`below`],S=b-v>26;for(let e=0;b-v>.4;e++){let n=x[e%x.length];h!==null&&v>=h&&v<g-3&&!m&&e%2==0&&(n=`formation`);let r=e>0&&S&&n!==`flyby`?1.7:1,i=v+(n===`flyby`?4:6.5)*r;b-i<3*r&&(i=b),y(n,i,r,n===`ringsDown`||t.rings&&n===`wingChase`?m?`GATES`:`RINGS`:void 0)}if(u!==null){let e=Math.max(u+2.4,d-9);y(`opening`,Math.min(u+2.4,e)),y(`canopyFront`,Math.min(v+6,e));let n=e-5,r=t.show;r&&r.from>v&&r.to<n-1?(y(`canopyWide`,r.from,Math.max(2,(r.from-v)/4.5)),y(`airshow`,r.to,1.25),n-v>4&&y(`canopyWide`,n,Math.max(2,(n-v)/4.5))):n-v>8&&y(`canopyWide`,n,Math.max(2,(n-v)/9)),y(`canopySide`,e),y(`landing`,f?d+.3:d+.8,1,f?`IMPACT`:void 0),f||y(`after`,s)}else y(l===null?`chase`:`opening`,d+.3,1,f?`IMPACT`:void 0);if(!_.length)return null;let C=_[_.length-1].to,w=[[c-.3,c+1.2,.6]];l!==null&&w.push([l-.2,l+2.6,.5]),u!==null&&!f&&w.push([d-1.6,d+.4,.5]);for(let e of _){if(e.kind!==`flyby`)continue;let t=e.from+(e.to-e.from)*e_;w.push([t-.35,t+.5,.45])}let T=o,E=0,D=!0,O=()=>_[E]??_[_.length-1],k=e=>{let t=O().speed;for(let[n,r,i]of w)e>=n&&e<=r&&(t=Math.min(t,i));return t},A=new G,j=new G,M=new G,N=new G,ee=new G,te=new G,P=new G,ne=new G,re=new G,ie=new G,ae=new G,F=new G,oe=new G,se=new Ht,ce=new G,I=new Ht,L=new G,le=new G,R=new G,ue=new G,de=new Float32Array(n[0].length),fe=0,pe=0,me=0,z=0,he=o,ge=60,_e=e=>{re.set(-Math.sin(e),0,-Math.cos(e)),ie.set(-re.z,0,re.x)},ve=(t,n)=>n.fromArray(e.sample(t,de),i_.pos),ye=(t,n)=>n.fromArray(e.sample(t,de),i_.vel);function be(){return le.set(0,0,-1).applyQuaternion(se),Math.hypot(le.x,le.z)<.15&&le.set(F.x,0,F.z),Math.atan2(-le.x,-le.z)}function xe(e){return Math.hypot(F.x,F.z)>3?Math.atan2(-F.x,-F.z):e}function Se(e){if(me=0,z=Math.max(0,-F.y),pe=Math.random()*Math.PI*2,fe=e.kind.startsWith(`wing`)||e.kind===`flyby`?xe(be()):be(),e.kind===`door`||e.kind===`roof`){let t=ve(c,ue);ye(c+.4,L);let i=Math.hypot(L.x,L.z)>.5?Math.atan2(-L.x,-L.z):fe;_e(i),e.kind===`roof`?P.copy(t).addScaledVector(re,-.8).addScaledVector(ie,3.2).addScaledVector(a_,1.2):p===`balloon`&&(ce.fromArray(n[r],i_.ridePos),P.copy(t).addScaledVector(ie,3).addScaledVector(re,-.6).add(L.set(0,1.6,0)),P.sub(ce),ne.copy(t).sub(ce).add(L.set(0,1.2,0)))}else if(e.kind===`flyby`){let t=e.from+(e.to-e.from)*e_;ve(t,P),ye(t,L),_e(Math.atan2(-L.x,-L.z));let n=Math.random()<.5?-1:1;P.addScaledVector(ie,7*n).addScaledVector(re,4).addScaledVector(a_,2.2)}else if(e.kind===`landing`){ve(d,P),ve(d-5,L),L.subVectors(P,L),L.y=0,_e(L.lengthSq()>1?Math.atan2(-L.x,-L.z):fe);let e=Math.random()<.5?-1:1;P.addScaledVector(re,f?14:11).addScaledVector(ie,6*e).addScaledVector(a_,1.7)}else e.kind===`after`&&ve(d,P)}return{shots:_,start:o,end:C,time:()=>T,shot:O,speed:()=>k(T),advance(e){for(T+=e*k(T);E<_.length&&T>=O().to;)E+=1,D=!0;return E<_.length&&T<C},next(){return E+1>=_.length?!1:(E+=1,T=O().from,D=!0,!0)},aim(e,n,r){let i=O();ae.fromArray(e,i_.pos),F.fromArray(e,i_.vel),oe.fromArray(e,i_.eye),se.fromArray(e,i_.q);let a=Math.max(0,T-he);he=T,D&&Se(i);let o=Tf(e),s=o===`canopy`||o===`down`||o===`aboard`||o===`cabin`||o===`roof`;R.copy(oe).addScaledVector(a_,s?-.5:-.15);let l=e[i_.canopy]>.05?2.2*e[i_.canopy]:0,u=T-i.from,d=6,f=!1,h=i.kind.startsWith(`wing`)||i.kind===`flyby`?xe(fe):be();switch(fe+=Math.atan2(Math.sin(h-fe),Math.cos(h-fe))*(1-Math.exp(-2.2*r*i.speed)),_e(fe),i.kind){case`door`:case`roof`:{if(f=!0,ce.fromArray(e,i_.ridePos),I.fromArray(e,i_.rideQ),i.kind===`roof`){ee.copy(P),te.copy(R);break}let t;if(p===`plane`||p===`heli`){let e=n_[p];ee.copy(e.cam).applyQuaternion(I).add(ce),t=te.copy(e.look).applyQuaternion(I).add(ce)}else ee.copy(P).add(ce),t=te.copy(ne).add(ce);let n=Vt.smoothstep(T,c-.2,c+.6);te.copy(t).lerp(R,n);break}case`chase`:ee.copy(R).addScaledVector(re,-4.2).addScaledVector(a_,2.6).addScaledVector(ie,1),te.copy(R).addScaledVector(re,1.5);break;case`flyer`:ee.copy(R).addScaledVector(re,3.4).addScaledVector(a_,.5).addScaledVector(ie,-.9),te.copy(R);break;case`orbit`:{let e=pe+u*.45;ee.copy(R).add(P.set(Math.cos(e)*5.5,1.6,Math.sin(e)*5.5)),te.copy(R);break}case`below`:ee.copy(R).addScaledVector(re,2).addScaledVector(a_,-8),te.copy(R);break;case`formation`:P.fromArray(e,_f+gf.at.center),te.copy(P).lerp(R,.4),L.subVectors(P,R),L.y=0,L.lengthSq()<.25&&L.copy(re),L.normalize(),ee.copy(P).addScaledVector(L,5).add(ne.set(-L.z,0,L.x).multiplyScalar(4)).addScaledVector(a_,3);break;case`ringsDown`:ee.copy(R).addScaledVector(a_,5.5).addScaledVector(re,-2.2),te.copy(R).addScaledVector(a_,-14).addScaledVector(re,1.5);break;case`wingChase`:P.copy(F),P.lengthSq()<1&&P.copy(re),P.normalize(),ee.copy(R).addScaledVector(P,-6.5).addScaledVector(a_,1.6),te.copy(R).addScaledVector(P,25),d=8;break;case`wingFront`:ee.copy(R).addScaledVector(re,5).addScaledVector(ie,2.5).addScaledVector(a_,1),te.copy(R),d=8;break;case`flyby`:f=!0,ee.copy(P),te.copy(R);break;case`opening`:{me=Math.min(24,me+Math.max(0,z-Math.max(0,-F.y))*a);let e=p===`roof`&&!m;ee.copy(ae).addScaledVector(re,e?6:2.5).addScaledVector(ie,e?2:5).addScaledVector(a_,.6-me),te.copy(ae).addScaledVector(a_,.5+l),d=10;break}case`canopyFront`:ee.copy(ae).addScaledVector(re,7).addScaledVector(ie,2).addScaledVector(a_,1.2),te.copy(ae).addScaledVector(a_,2.3);break;case`canopyWide`:{let e=pe+u*.06;ee.copy(ae).add(P.set(Math.cos(e)*30,11,Math.sin(e)*30)),te.copy(ae).addScaledVector(a_,2),d=3*i.speed;break}case`airshow`:{t.show?.team(T,ne)||ne.copy(ae).addScaledVector(re,100),L.subVectors(ne,ae);let e=Math.max(1,Math.hypot(L.x,L.z)),n=Vt.clamp(L.y/e,-.35,.7);L.y=n*e,te.copy(L).setLength(80).add(R),L.y=0,L.lengthSq()<1&&L.copy(re),L.normalize(),ee.copy(ae).addScaledVector(L,-15).add(P.set(-L.z,0,L.x).multiplyScalar(4)).addScaledVector(a_,1.5-n*7),d=3;break}case`canopySide`:ee.copy(ae).addScaledVector(ie,9).addScaledVector(re,2).addScaledVector(a_,.5),te.copy(ae).addScaledVector(a_,2).addScaledVector(re,1.5);break;case`landing`:f=!0,ee.copy(P),te.copy(R).addScaledVector(a_,l*.6);break;case`after`:{f=!0;let e=pe+u*.3;ee.copy(P).add(ne.set(Math.cos(e)*6,1.9,Math.sin(e)*6)),te.copy(ae).addScaledVector(a_,1.2);break}}if(!f&&e[_f+gf.at.started]===1)for(let t=0;t<2;t++)L.fromArray(e,vf+t*hf.size+hf.at.pos),ee.distanceTo(L)<t_&&ee.sub(L).setLength(t_).add(L);t.clear(ee,te);let g=r*Math.max(1,i.speed);L.subVectors(ee,R),D||f?A.copy(L):A.lerp(L,1-Math.exp(-d*g)),L.subVectors(te,R),D?j.copy(L):j.lerp(L,1-Math.exp(-(f?7:10)*g)),M.addVectors(R,A),N.addVectors(R,j),n.position.copy(M),n.up.copy(a_),n.lookAt(N);let _=Zg[i.kind];if(n.aspect<1){let e=Math.tan(Vt.degToRad(_/2))/Math.sqrt(n.aspect);_=Math.min(80,Vt.radToDeg(2*Math.atan(e)))}let v=Qg[i.kind];if(v){let e=Math.max(1,M.distanceTo(R)),t=Math.max(v[1]/2/e,v[0]/2/e/n.aspect);_=Vt.clamp(Vt.radToDeg(2*Math.atan(t)),$g,_)}ge=D?_:ge+(_-ge)*(1-Math.exp(-5*g)),D=!1,Math.abs(n.fov-ge)>.01&&(n.fov=ge,n.updateProjectionMatrix())}}}var s_=7.5,c_=4;function l_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var u_=e=>Math.atan2(Math.sin(e),Math.cos(e));function d_(e){let t=l_(e.seed),n=[],r=e.from.y-e.firstDrop;if(r<e.floorY)return n;let i=Math.floor((r-e.floorY)/190)+1,a=e.toward.x-e.from.x,o=e.toward.z-e.from.z,s=Math.hypot(a,o),c=0,l=0;for(let u=0;u<i;u++){let i=r-u*190,d=2+(e.from.y-i)/53,f=s>1?Math.min(6*d,Math.max(0,s-120))/s:0;if(u===0){let e=t()*Math.PI*2,n=6+t()*6;c=Math.cos(e)*n,l=Math.sin(e)*n}else{let e=Math.hypot(c,l)>45?Math.atan2(-l,-c)+(t()-.5)*Math.PI*.9:t()*Math.PI*2,n=22+t()*26+Math.min(16,u*2);c+=Math.cos(e)*n,l+=Math.sin(e)*n}n.push({c:new G(e.from.x+e.windX*d+a*f+c,i,e.from.z+e.windZ*d+o*f+l),n:new G(0,-1,0),r:s_})}return n}function f_(e){let t=l_(e.seed),n=[],r=e.from.x,i=e.from.z,a=e.from.y,o=e.yaw;for(let s=0;s<40;s++){let c=s===0?378:420;if(s>0){let n=Math.atan2(-(e.toward.x-r),-(e.toward.z-i));o+=Vt.clamp(u_(n-o),-.35,.35)+(t()-.5)*.24}if(r+=-Math.sin(o)*c,i+=-Math.cos(o)*c,a-=c/2+(s===0?45:(t()-.5)*24),a<e.floorY)break;n.push({c:new G(r,a,i),n:new G(-Math.sin(o),0,-Math.cos(o)),r:13})}return n}var p_=new X(1,.62,.12),m_=new X(.62,.9,1),h_=new X(.25,1,.45),g_=new X(1,.22,.18),__=new G,v_=new G;function y_(){let e=new Ln;e.name=`rings`;let t={flat:{core:new yo(s_,.45,10,96),halo:new yo(s_,2,8,72)},gate:{core:new yo(13,.6,10,96),halo:new yo(13,2.6,8,72)}},n=[],r=0,i=0,a=0,o=!1,s=0,c=[];function l(){for(let t of n)e.remove(t.group),t.coreMat.dispose(),t.haloMat.dispose();n=[],r=0,i=0,a=0,o=!1,c.length=0,e.visible=!0}function u(e,t,r,i=r){let a=n[e];a&&(a.state=t,a.at=r,c.push({i:e,state:t,at:r,when:i}))}function d(e,t,r){let i=n[e];if(!i)return null;let{c:a,n:o}=i.spec,s=v_.subVectors(t,a).dot(o),c=v_.subVectors(r,a).dot(o);if(!(s<0&&c>=0))return null;let l=s/(s-c);return __.lerpVectors(t,r,l),__.distanceTo(a)<=i.spec.r}return{group:e,total:()=>n.length,got:()=>i,index:()=>r,streak:()=>a,laid:()=>o,lay(r,i,a){l(),o=!0,s=a;let c=t[i];for(let t of r){let r=new Qr({color:m_.clone(),transparent:!0,toneMapped:!1}),i=new Qr({color:m_.clone(),transparent:!0,opacity:.1,blending:2,depthWrite:!1,toneMapped:!1}),o=new Ln;o.add(new Z(c.core,r),new Z(c.halo,i)),o.position.copy(t.c),o.lookAt(v_.copy(t.c).add(t.n)),o.visible=!1,e.add(o),n.push({spec:t,group:o,coreMat:r,haloMat:i,state:0,at:a})}},clear:l,next:()=>n[r]?.spec??null,cross(e,t,o){let s=n[r];if(!s)return null;let c=d(r,e,t);if(c!==null)return u(r,c?1:2,o),r+=1,c?(i+=1,a+=1,`pass`):(a=0,`miss`);let l=d(r+1,e,t);return l!==null||t.y<s.spec.c.y-150?(u(r,2,o),r+=1,a=0,l?(u(r,1,o),r+=1,i+=1,a=1,`pass`):(l===!1&&(u(r,2,o),r+=1),`miss`)):null},close(e){let t=0;for(let i=r;i<n.length;i++,t++)u(i,3,i-r<=c_?e:e-9,e);return r=n.length,t},update(e,t){for(let i=0;i<n.length;i++){let a=n[i],o=e-a.at;if(a.state===1){let e=Math.min(1,o/.8);a.group.visible=e<1,a.group.scale.setScalar(1+e*.7),a.coreMat.color.copy(h_).multiplyScalar(3.2*(1-e)),a.coreMat.opacity=1-e,a.haloMat.color.copy(h_),a.haloMat.opacity=.35*(1-e);continue}if(a.state===2||a.state===3){let e=Math.min(1,o/(a.state===2?1.1:.8)),t=a.state===2?g_:m_;a.group.visible=e<1,a.group.scale.setScalar(1),a.coreMat.color.copy(t).multiplyScalar(1.4),a.coreMat.opacity=.8*(1-e),a.haloMat.color.copy(t),a.haloMat.opacity=.08*(1-e);continue}let s=i-r;if(a.group.visible=s<=c_,!a.group.visible)continue;let c=Math.min(1,Math.max(0,(o-s*.15)/.6)),l=Vt.smoothstep(a.spec.c.distanceTo(t),50,230);if(a.group.scale.setScalar(1),s===0){let t=.5+.5*Math.sin(e*5.5);a.coreMat.color.copy(p_).multiplyScalar(2.4+t*1.4),a.coreMat.opacity=c,a.haloMat.color.copy(p_),a.haloMat.opacity=(.14+t*.08+l*.5)*c}else a.coreMat.color.copy(m_).multiplyScalar(1.5),a.coreMat.opacity=(.95-s*.15)*c,a.haloMat.color.copy(m_),a.haloMat.opacity=(.06+l*.3)*(1-s*.12)*c}},rewind(t){e.visible=t>=s;for(let e of n)e.state=0,e.at=s;r=0;for(let e of c){if(e.when>t)break;let i=n[e.i];i&&(i.state=e.state,i.at=e.at,r=Math.max(r,e.i+1))}},dispose(){l(),t.flat.core.dispose(),t.flat.halo.dispose(),t.gate.core.dispose(),t.gate.halo.dispose()}}}var b_={lift:.00397,drag:.00153},x_={lift:8e-4,drag:.0011},S_={lift:.0062,drag:.0034},C_=9.81/2809,w_=1.6,T_=.7,E_=.35;function D_(e){return{t:0,bank:0,pitch:0,yaw:e}}function O_(e){let t=Vt.clamp((e.t-.3)/w_,0,1);return t*t*(3-2*t)}var k_=new G,A_=new G,j_=new G,M_=new G,N_=new G;function P_(e,t,n,r,i,a,o){e.t+=o;let s=O_(e),c=e=>1-Math.exp(-e*o);if(e.pitch+=(Vt.clamp(a,-1,1)-e.pitch)*c(3),e.bank+=(Vt.clamp(i,-1,1)*T_*s-e.bank)*c(2.5),k_.set(t.x-n,t.y,t.z-r),Math.hypot(k_.x,k_.z)>12&&s>.5){let t=Math.atan2(-k_.x,-k_.z)-e.yaw;e.yaw+=Math.atan2(Math.sin(t),Math.cos(t))*c(4)}else e.yaw+=i*1.25*(1-s)*o;let l=e.pitch,u=l>=0?x_:S_,d=Math.abs(l),f=(b_.lift+(u.lift-b_.lift)*d)*s,p=C_+(b_.drag+(u.drag-b_.drag)*d-C_)*s,m=k_.length();if(m>.5){A_.copy(k_).multiplyScalar(1/m);let n=Vt.clamp((-A_.y-.45)/.45,0,1)*s;j_.set(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),M_.set(j_.x*.6,1,j_.z*.6).normalize(),M_.addScaledVector(A_,-A_.dot(M_)),M_.lengthSq()<1e-6&&M_.copy(j_),M_.normalize(),N_.crossVectors(A_,M_),M_.multiplyScalar(Math.cos(e.bank)).addScaledVector(N_,-Math.sin(e.bank));let r=m*m;t.addScaledVector(M_,f*(1+3*n)*r*o),t.addScaledVector(A_,-p*(1+.6*n)*r*o);let i=(k_.x*Math.cos(e.yaw)-k_.z*Math.sin(e.yaw))*(1-Math.exp(-1.5*o));t.x-=Math.cos(e.yaw)*i,t.z+=Math.sin(e.yaw)*i}t.y-=9.81*o;let h=i*E_*s*o;if(h!==0){let e=Math.cos(h),i=Math.sin(h),a=t.x-n,o=t.z-r;t.x=n+a*e+o*i,t.z=r-a*i+o*e}return s}function F_(e,t,n){return Math.atan2(e.y,Math.hypot(e.x-t,e.z-n))}var I_=new G,L_=new G,R_=new G,z_=new Ht,B_=new bn(0,0,0,`YXZ`),V_=new G,H_=new G,U_=2.4,W_=4.8,G_=1.5,K_=1.25,q_=25,J_={x:320,z:-250},Y_=4,X_={skydive:{pull:o,now:r,hard:p},base:{pull:600,now:400,hard:250}},Z_=new G(1800,70,-1200),Q_=new G(-1078,227,-2047);function $_(e,t,n){return Math.max(t,Math.min(n,e))}function ev(e){let t=$_(e,0,1);return t*t*(3-2*t)}function tv(e,t,n){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*n}function nv(e,t){return Math.atan2(-e,-t)}function rv(e,t,n){return e&&!t?-1:t&&!e?1:$_(n,-1,1)}function iv(e,t){return!(!(e>=-.95&&e<=.95&&t>=-2.65&&t<=2.3)&&!(e>=.4&&e<=1.4&&t>=.16&&t<=1.78)||e>-1.06&&e<-.46&&t>-2.55&&t<2.28||e>.46&&e<1.08&&t>-2.55&&t<.02||e>.46&&e<1.08&&t>1.88&&t<2.35)}function av(e){let t=document.createElement(`canvas`);t.width=128,t.height=128;let n=t.getContext(`2d`);if(!n)return null;if(e===`city`)n.fillStyle=`#3a424a`,n.fillRect(0,0,128,128),n.fillStyle=`#5c6771`,n.fillRect(16,16,96,96),n.fillStyle=`#6e7882`,n.fillRect(24,22,36,28),n.fillRect(66,26,34,22),n.fillRect(22,60,32,38),n.fillRect(62,64,40,32),n.fillStyle=`#8b949e`,n.fillRect(30,28,10,6),n.fillRect(70,72,12,6);else if(e===`sand`){n.fillStyle=`#e4d2a8`,n.fillRect(0,0,128,128);for(let e=0;e<80;e++)n.fillStyle=e%2?`rgba(160,130,80,0.35)`:`rgba(255,248,230,0.3)`,n.fillRect(Math.random()*128,Math.random()*128,2,2)}else n.fillStyle=`#2a3036`,n.fillRect(0,0,128,128),n.fillStyle=`#d7c07a`,n.fillRect(60,0,6,128),n.fillStyle=`#e7eef4`,n.fillRect(6,0,3,128),n.fillRect(119,0,3,128);let r=new Vi(t);return r.colorSpace=Ye,r.wrapS=g,r.wrapT=g,r}function ov(e,t,n){let r=document.createElement(`canvas`);r.width=512,r.height=128;let i=r.getContext(`2d`);if(!i)return new Qr({color:n});i.fillStyle=n,i.fillRect(0,0,512,128),i.strokeStyle=t,i.lineWidth=6,i.strokeRect(8,8,496,112),i.fillStyle=t,i.font=`700 54px sans-serif`,i.textAlign=`center`,i.textBaseline=`middle`,i.fillText(e,256,64);let a=new Vi(r);return a.colorSpace=Ye,new Qr({map:a})}function sv(e,t,n,r){let i=[e],a=e;for(;a<t;)a=Math.min(t,a+Math.max(n,(Math.abs(a)-r)*.5)),i.push(a);return i}function cv(e,t,n,r,i=0){let a=sv(e,t,200,6e3),o=sv(n,r,200,6e3),s=[],c=[],l=[];for(let l of o)for(let o of a)s.push(o,i,l),c.push((o-e)/(t-e),(r-l)/(r-n));let u=a.length;for(let e=0;e<o.length-1;e++)for(let t=0;t<u-1;t++){let n=e*u+t;l.push(n,n+u,n+1,n+1,n+u,n+u+1)}let d=new Br;return d.setAttribute(`position`,new Or(s,3)),d.setAttribute(`normal`,new Or(s.map((e,t)=>+(t%3==1)),3)),d.setAttribute(`uv`,new Or(c,2)),d.setIndex(l),d}function lv(e,t,n,r,i,a,o,s,c=.045){let l=i-t,u=a-n,d=o-r,f=Math.hypot(l,u,d)||1,p=new Z(new qi(c,c,f,6),s);return p.position.set((t+i)/2,(n+a)/2,(r+o)/2),p.quaternion.setFromUnitVectors(new G(0,1,0),new G(l/f,u/f,d/f)),e.add(p),p}function uv(e,t,n,r,i,a,o,s){let c=new Z(new Gi(t,n,r),s);return c.position.set(i,a,o),e.add(c),c}function dv(e,t,n){let r=e.getContext(`2d`);if(!r)return;let i=e.width,a=e.height,o=i/84;r.clearRect(0,0,i,a),r.fillStyle=`rgba(14,20,27,0.78)`,r.fillRect(0,0,i,a);let s=a/2,c=a/1600,l=e=>s-(e-t)*c,u=l(n.hard),d=l(n.pull);r.fillStyle=`rgba(226,61,61,0.38)`,r.fillRect(0,Math.max(0,u),i,a-Math.max(0,u)),r.fillStyle=`rgba(240,162,2,0.28)`;let f=$_(d,0,a),p=$_(Math.max(u,d),0,a);p>f&&r.fillRect(0,f,i,p-f);let m=Math.max(0,Math.floor((t-900)/100)*100);r.textBaseline=`middle`,r.font=`${12*o}px sans-serif`;for(let e=m;e<=t+900;e+=100){let t=l(e);if(t<-10||t>a+10)continue;let n=e%500==0;r.fillStyle=n?`#e7eef4`:`#8fa0b3`,r.fillRect(i-(n?18:10)*o,t,(n?18:10)*o,Math.max(1,o)),n&&(r.textAlign=`right`,r.fillText(String(e),i-22*o,t))}let h=(e,t,n)=>{let s=l(e);s<-24||s>a+24||(r.fillStyle=n,r.fillRect(0,s-o,i,2*o),r.textAlign=`left`,r.font=`700 ${11*o}px sans-serif`,r.fillText(t,4*o,s-9*o))};h(n.pull,`PULL`,`#f0a202`),h(n.hard,`HARD`,`#e23d3d`),r.fillStyle=`#f0a202`,r.beginPath(),r.moveTo(i-2,s),r.lineTo(i-14*o,s-6*o),r.lineTo(i-14*o,s+6*o),r.fill()}function fv(n,r,o,p){let g=new sd({canvas:n,antialias:!0,alpha:!1,powerPreference:`high-performance`});g.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<800?1.25:1.6)),g.setSize(n.clientWidth||window.innerWidth,n.clientHeight||window.innerHeight,!1),g.outputColorSpace=Ye,g.toneMapping=4;let _=Xf(o.light);g.toneMappingExposure=_.exposure;let v=xp(g,_.glow,window.matchMedia(`(pointer: coarse)`).matches?4:5),y=new Kn,b=ep(g);y.background=b.fog.clone(),y.environment=b.envMap,y.environmentIntensity=_.env;let x=new Gn(b.fog.clone(),400,14e3);y.fog=x;let S=new _s(72,1,.12,45e3);S.rotation.order=`YXZ`;let C=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,w=window.matchMedia(`(pointer: coarse)`).matches,T=pd(),E=m();y.add(new as(_.hemiSky,_.hemiGround,_.hemiIntensity));let D=new Ss(_.sunColor,_.sunIntensity);D.position.copy(Gf).multiplyScalar(1e3),y.add(D);let O=b.sky;y.add(O);let k=g.capabilities.getMaxAnisotropy(),A=tp(5,w?1024:2048,8,k),j=tp(9,1024,8,k),M=av(`sand`),N=av(`road`),ee=Qp.x1-Qp.x0,te=Qp.z1-Qp.z0;A&&A.repeat.set(ee/820,te/820),j&&j.repeat.set(1,1);let P=new Q({map:A??void 0,color:`#d9dcdf`,roughness:.95}),ne=_.streets>0?np(8,k):null,re=ne?.clone()??null;ne&&(ne.repeat.copy(A?.repeat??new W(ee/820,te/820)),P.emissive.set(`#ffffff`),P.emissiveMap=ne,P.emissiveIntensity=_.streets);let ie=new Q({map:M??void 0,color:`#e6d3aa`,roughness:1}),ae=new Q({color:`#3f7a4a`,roughness:1}),F=new Q({map:N??void 0,color:`#2c333a`,roughness:.9}),oe=new rs().load(`./textures/waternormals.jpg`);oe.anisotropy=k;let se=ip(oe,b.haze,b.zenith,150),ce=se.uniforms,I=(e,t)=>(e.polygonOffset=!0,e.polygonOffsetFactor=-t,e.polygonOffsetUnits=-t*4,e),L=12e4,le=new Z(cv(110,120110,-12e4,L),se.material);le.frustumCulled=!1,y.add(le);let R=cd([cv(-12e4,Qp.x0,-12e4,L),cv(Qp.x0,110,-12e4,Qp.z0),cv(Qp.x0,110,Qp.z1,L)]),ue=R.getAttribute(`uv`),de=R.getAttribute(`position`);for(let e=0;e<ue.count;e++)ue.setXY(e,de.getX(e)/1400,-de.getZ(e)/1400);let fe=new Z(R,new Q({map:j??void 0,color:`#c9cdc8`,roughness:1,emissive:re?`#ffffff`:`#000000`,emissiveMap:re,emissiveIntensity:_.streets*.8}));fe.frustumCulled=!1,y.add(fe);let pe=new Z(cv(Qp.x0,Qp.x1,Qp.z0,Qp.z1),P);pe.frustumCulled=!1,y.add(pe),M&&M.repeat.set(18,L/3100*40);let me=new Z(cv(0,150,-12e4,L,.05),I(ie,1));me.frustumCulled=!1,y.add(me),N&&N.repeat.set(1,L/3100*80);let z=new Z(cv(-29,-7,-12e4,L,.07),I(F,3));z.frustumCulled=!1,y.add(z);let he=Em(y,{aniso:k,coarse:w,onTop:I,windows:_.windows,streets:_.streets}),ge=gg(y,{coarse:w,night:_.streets>0,sunColor:_.sunColor,onTop:I}),_e=tg(y,{night:_.streets>0,sunColor:_.sunColor}),ve=0,ye=!0,be=!1,xe=he.solids,Se=Eg(y,xe,{onTop:I,night:_.streets>0}),Ce=new Z(cv(-10,30,-12e4,L,.09),I(ae.clone(),2));Ce.frustumCulled=!1,y.add(Ce);let we=new Z(cv(131,149,-12e4,L,.07),I(new Q({color:`#b7a888`,roughness:.95}),2));we.frustumCulled=!1,y.add(we);let Te=new In,Ee=pv(11),De=new Q({color:`#6a5340`,roughness:1}),Oe=new Q({color:`#2d6a3e`,roughness:.92}),B=new xi(new qi(.22,.38,2.4,5),De,72),ke=new xi(new Ji(1.7,4.6,6),Oe,72);B.frustumCulled=!1,ke.frustumCulled=!1;let Ae=0;for(let e=0;e<160&&Ae<72;e++){let e=-8+Ee()*36,t=-1400+Ee()*2800;Math.abs(t)<55&&e>20||(Te.position.set(e,1.2,t),Te.scale.set(1,.8+Ee()*.7,1),Te.rotation.set(0,0,0),Te.updateMatrix(),B.setMatrixAt(Ae,Te.matrix),Te.position.y=3.4,Te.updateMatrix(),ke.setMatrixAt(Ae,Te.matrix),Ae++)}B.count=Ae,ke.count=Ae,B.instanceMatrix.needsUpdate=!0,ke.instanceMatrix.needsUpdate=!0,y.add(B,ke);let je=new Q({color:`#1b2128`,roughness:.55,metalness:.25}),V=new Q({color:`#c5ced6`,roughness:.35,metalness:.55}),Me=new Q({color:`#f4f7fa`,roughness:.45}),Ne=new Q({color:`#c4322a`,roughness:.5}),Pe=new Q({color:`#e0a020`,roughness:.5}),Fe=e=>I(new Qr({color:e,side:2}),4),Ie=(e,t,n)=>{let r=new Z(new _o(e,t,48),Fe(n));r.rotation.x=-Math.PI/2,r.position.set(70,.12,0),y.add(r)};Ie(31,33,`#f4f7fa`),Ie(15,16.4,`#f0a202`),Ie(4.2,5.2,`#e23d3d`);let Le=new Z(new Ki(1.6,20),Fe(`#f0a202`));Le.rotation.x=-Math.PI/2,Le.position.set(70,.13,0),y.add(Le),uv(y,26,.12,2.4,88,.16,0,Pe);let Re=new Z(new Ji(2.4,7,4),Pe);Re.rotation.z=-Math.PI/2,Re.position.set(104,.4,0),y.add(Re);let ze=new Z(new qi(.12,.12,8,6),V);ze.position.set(92,4,16),y.add(ze);let Be=new Z(new Ji(.45,2.4,8),Pe);Be.position.set(90.2,7.4,16),Be.rotation.z=Math.PI/2,y.add(Be);let Ve=new Z(new Gi(8,3.2,5),Me);Ve.position.set(54,1.6,14),y.add(Ve);for(let e=0;e<3;e++)uv(y,5.2,1.8,2.1,62+e*7,.9,-18,e===1?Ne:je);let H=new Ln;y.add(H);let He=new Q({color:`#f3f6f8`,roughness:.42,metalness:.22}),Ue=new Q({color:`#c4322a`,roughness:.48}),We=new Q({color:`#6a737c`,roughness:.86}),Ge=new Q({color:`#3c444c`,roughness:.95}),Ke=new Q({color:`#1c2430`,roughness:.75}),qe=new Q({color:`#8eb6cc`,transparent:!0,opacity:.45,roughness:.06,metalness:.35,side:2}),Je=new Q({color:`#e23d3d`,emissive:`#e23d3d`,emissiveIntensity:1.4});uv(H,2.5,.1,5.7,0,-.02,-.2,Ge),uv(H,2.5,.08,5.7,0,1.82,-.2,We),uv(H,.08,1.7,1.6,-1.16,.88,-2.15,We),uv(H,.08,1.7,1.15,-1.16,.88,1.85,We),uv(H,.08,.55,2.2,-1.16,.28,-.15,We),uv(H,.08,.42,2.2,-1.16,1.58,-.15,We);let Xe=new Z(new go(2.05,.7),qe);Xe.position.set(-1.12,.95,-.15),Xe.rotation.y=Math.PI/2,H.add(Xe),uv(H,.08,1.74,2.9,1.16,.88,-1.55,We),uv(H,.08,1.74,.7,1.16,.88,2.15,We),uv(H,.1,.7,2.3,0,.36,-2.92,We),uv(H,.55,.85,.08,-.55,1.15,-2.88,We),uv(H,.55,.85,.08,.55,1.15,-2.88,We),uv(H,.08,1.7,.4,0,.9,2.5,We),uv(H,.55,.42,1.9,-.72,.46,-.3,Ke),uv(H,.55,.42,2.2,.72,.46,-1.35,Ke),uv(H,.5,.42,.5,.72,.46,2.1,Ke);let Ze=He.clone();Ze.color.set(`#c5d0d8`),uv(H,2.15,.5,6.4,0,-.28,-.25,Ze),uv(H,2.35,.32,6.6,0,2.02,-.35,He),uv(H,.07,1.72,1.7,-1.22,.9,-2.2,He),uv(H,.07,1.72,1.15,-1.22,.9,1.85,He),uv(H,.07,.62,2.3,-1.22,.34,-.15,He),uv(H,.07,.38,2.3,-1.22,1.52,-.15,He),uv(H,.07,1.74,2.9,1.22,.88,-1.55,He),uv(H,.07,1.74,.7,1.22,.88,2.16,He);for(let e=0;e<5;e++)uv(H,.04,.68,.045,-1.24,.95,-.95+e*.42,V);uv(H,.04,.07,2.15,-1.36,.48,-.15,Ue),uv(H,.04,.07,2.15,1.34,.48,-1.2,Ue),uv(H,.04,.07,1.05,1.34,.48,1.7,Ue);let Qe=new Z(new vo(1.12,18,14),He);Qe.scale.set(1.02,.92,1.18),Qe.position.set(0,.78,-4.45),H.add(Qe);let $e=new Z(new go(1.7,.85),qe);$e.position.set(0,1.18,-3.08),$e.rotation.x=-.35,H.add($e);let et=uv(H,7.4,.14,1.9,-4.15,2.24,-1.4,He);et.rotation.z=-.07;let tt=uv(H,7.4,.14,1.9,4.15,2.24,-1.4,He);tt.rotation.z=.07;let nt=new qi(.36,.42,1.55,12);nt.rotateX(Math.PI/2);let rt=new Z(nt,He);rt.position.set(-3.55,2.02,-1.85);let it=rt.clone();it.position.x=3.55,H.add(rt,it);let at=new Ln;at.position.set(-3.55,2.02,-2.72),at.add(yv()),at.add(vv()),H.add(at);let ot=new Ln;ot.position.set(3.55,2.02,-2.72),ot.add(yv()),ot.add(vv()),H.add(ot),lv(H,-1.35,.35,-1.15,-3.5,2.05,-1.45,V,.05),lv(H,1.35,.35,-1.15,3.5,2.05,-1.45,V,.05),lv(H,-1.15,.45,.15,-2.4,2.12,-1.15,V,.035),lv(H,1.15,.45,.15,2.4,2.12,-1.15,V,.035);let st=uv(H,.12,2.15,1.35,0,2.55,3.15,He);st.rotation.x=.18,uv(H,3.6,.1,.85,0,2.15,3.05,He),uv(H,1.15,.42,.7,0,3.35,3.35,Ue),_v(H,-.95,-.72,-.35),_v(H,.95,-.72,-.35),_v(H,0,-.78,-3.55),uv(H,.08,1.5,.08,1.2,.78,.18,V),uv(H,.08,1.5,.08,1.2,.78,1.72,V);let ct=new Z(new qi(.035,.035,1.45,8),V);ct.rotation.x=Math.PI/2,ct.position.set(1.22,1.05,.95),H.add(ct),uv(H,.7,.08,1.45,1.25,.04,.95,Ge);let lt=new Z(new vo(.07,12,10),Je);lt.position.set(.95,1.62,.22),H.add(lt);let ut=new Z(new go(.78,.2),ov(`PULL BY 4,500`,`#f0a202`,`#141c24`));ut.position.set(.98,1.48,.22),ut.rotation.y=-Math.PI/2,H.add(ut);let dt=new Z(new go(.78,.18),ov(`HARD DECK 2,000`,`#e23d3d`,`#141c24`));dt.position.set(.98,1.24,.22),dt.rotation.y=-Math.PI/2,H.add(dt);let ft=new ys(`#ffd2a8`,6,7,2);ft.position.set(0,1.55,-.2),H.add(ft);let pt=new Z(new vo(.08,8,8),new Q({color:`#ff3b3b`,emissive:`#ff2020`,emissiveIntensity:1}));pt.position.set(0,3.15,3.3),H.add(pt);let mt=df(H,{inner:We,floor:Ge,seat:Ke,bar:ct},Nf),ht=Bg();ht.group.visible=!1,y.add(ht.group);let gt=Yg(`chicago`,{pilot:!0});gt.group.visible=!1,y.add(gt.group);let _t=[[`sunrise`,-240,35,-330],[`ocean`,210,-60,-520],[`rainbow`,-120,140,260]].map(([e,t,n,r],i)=>{let a=Yg(e,{pilot:!1});return a.group.visible=!1,y.add(a.group),{b:a,off:new G(t,n,r),phase:2.3+i*2.9,burn:0}}),vt=y_();y.add(vt.group);let yt=ef(),bt=yt.group,xt=Ed();y.add(xt.group);let St=Ed({thirdPerson:!0,look:yd});St.group.visible=!1,y.add(St.group);let Ct=Vf(y),wt=up(y,w?.6:1),Tt=Vp(y),Et=zp(y),Dt=[],Ot=0,kt=!1;bt.visible=!1,y.add(bt);let At=new Ln,jt=new Q({color:`#c4322a`,roughness:.6}),Mt=[];for(let e=0;e<8;e++){let e=new Z(new Gi(.35,.9,.12),jt);At.add(e),Mt.push(e)}At.visible=!1,y.add(At);let Nt=[new G(590,0,-1700),new G(590,0,1100),new G(1070,0,1450),new G(1070,0,-2e3),new G(590,0,-1700)],U=`menu`,Pt=0,Ft=0,It=Math.PI,Lt=0,Rt=new G,zt=-.05,Bt=1.05,Ut=-Math.PI/2,Wt=-.08,K=new G(590,3e3,0),q=new G,Gt=Math.PI/2,Kt=0,qt=0,J=0,Jt=0,Yt=0,Xt=`none`,Zt=.15,Qt=12500/e,$t=0,en=0,tn=null,nn=!1,rn=!1,an=0,on=!1,sn=null,cn=null,ln=null,dn=!1,fn=0,pn=null,mn=null,hn=0,gn=0,_n=0,vn=!1,yn=!1,xn=!1,Sn=!1,Cn=`none`,wn=!1,Tn=``,En=!1,Dn=!1,On=0,kn=0,An=``,Y=0,jn=0,Mn=!1,Nn=!1,Pn=!1,Fn=null,Rn=`skydive`,zn=!1,Bn=``,Vn=null,Hn=!1,Un=null,X=0,Wn=`rig`,qn=null,Jn=0,Yn=0,Xn=0,Zn=!1,Qn=0,$n=null,er=1/0,tr=!0,nr=0,rr=0,ir=0,ar=`plane`,or=!1,sr=0,cr=-1,lr=!1,ur=0,dr=new G,fr=0,pr=new G,mr=0,hr=new G,gr=0,_r=0,vr=0,yr=0,br=0,xr=0,Sr=0,Cr=null,wr=!1,Tr=Math.random()*2**31|0,Er=Df(),Dr=-1,Or=1/0,kr=0,Ar=null,jr=new Float32Array(bf),Mr=`menu`,Nr=new Float32Array(bf),Pr=-1,Fr=new G,Ir=new Set,Lr=null,Rr=new Set,zr=new Set,Br=null,Vr=0,Hr=0,Ur=!1,Wr=!1,Gr=!1,Kr=!1,qr=[],Jr={phase:`menu`,mode:`skydive`,suit:`rig`,altitudeFt:12500,fallMph:0,groundMph:0,compassDeg:0,banner:``,bannerLevel:0,pose:`BELLY`,green:!1,inDoor:!1,prompt:``,spot:``,doorU:.5,doorV:.5,doorVisible:!1,baseU:.5,baseV:.5,baseVisible:!1,baseLabel:``,dzRel:0,dzDist:0,dzLabel:`DZ`,dzVisible:!1,outcome:null,canopy:`none`,needsLook:!1,replay:null,save:{bestM:E.bestM,bestScore:E.bestScore,jumps:E.jumps,rides:E.rides,goals:{...E.goals}}};function Yr(){Jr.save={bestM:E.bestM,bestScore:E.bestScore,jumps:E.jumps,rides:E.rides,goals:{...E.goals}},l(E)}function Xr(){let e=Nt[0]??new G;Pt=0,Ft=Math.max(0,-970-e.z),H.position.set(e.x,e.y,e.z+Ft),It=Math.PI}function Zr(){ye=!be||Math.random()<.5,Fn=null,qr.length=0,Xt=`none`,yn=!1,xn=!1,Sn=!1,Cn=`none`,wn=!1,En=!1,Dn=!1,On=0,An=``,kt=!1,cn=null,pn=null,mn=null,ln=null,bt.visible=!1,At.visible=!1,ri(),qt=0,zn=!1,Vn=null,Hn=!1,Un=null,qn=null,Jn=0,Yn=0,Xn=0,Qn=0,$n=null,er=1/0,tr=!0,nr=0,Jt=0,Yt=0,or=!1,vr=0,yr=0,br=0,xr=0,Cr=null,vt.clear(),Er.reset(Y),Dr=-1,Or=1/0,kr=0,T.resetDeath(),T.resume()}function $r(){if(Zr(),E.ride=o.ride,E.roof=o.roof,E.suit=o.suit,Wn=o.suit,ar=o.ride,E.rings=o.rings,wr=o.rings&&ar!==`roof`,ar===`heli`||ar===`balloon`){ei(),Yr();return}let t=o.ride===`roof`?Se.list.find(e=>e.id===o.roof)??Se.list[0]:null;if(t){let e=-Math.sin(t.yaw),n=-Math.cos(t.yaw),r=Sg(xe,t.x,t.y,t.z,e,n,60),i=r.kind===`edge`?Math.max(0,r.dist-4):0;ti(t.x+e*i,t.z+n*i,t.yaw,t.name),Wt=-.3,Yr()}else U=`cabin`,Rn=`skydive`,zt=-.05,Bt=1.05,Ut=-Math.PI/2,Wt=-.08,Zt=$_(o.malChance,0,.4),Qt=$_(o.altitudeFt,8e3,2e4)/e,E.altitudeFt=Math.round(Qt*e),E.malPct=Math.round(Zt*100),Xr(),H.position.y=Qt,Yr()}function ei(){U=`aboard`,Rn=`skydive`,Zt=$_(o.malChance,0,.4),E.malPct=Math.round(Zt*100),E.hopFt=Math.round($_(o.hopFt,s,t)),ur=Math.max(E.hopFt,wr?d:0)/e,sr=0,cr=-1,_r=0,fr=0,mr=0,lr=ar===`balloon`,jn=0,ar===`heli`?(dr.set(400,ur,-120),Ut=Og+.3,Wt=-.7):(pr.set(590,ur,-160),zt=-.3,Bt=.2,Ut=1.15,Wt=-.2),ki(0),An=`${ar===`heli`?`HELICOPTER`:`BALLOON`} · ${Math.round(ur*e).toLocaleString(`en-US`)} FT`,kn=Y+3.5}function ti(t,n,r,i){U=`roof`,Rn=`base`;let a=xe.top(t,n);K.set(t,a?a.y1:0,n),q.set(0,0,0),Ut=r,Wt=-.1,Bn=i,zn=!1,jn=0,An=`${i.toUpperCase()} · ${Math.round(K.y*e).toLocaleString(`en-US`)} FT`,kn=Y+3.5}function ni(){if(!Fn?.canBase)return;let e=Fn.roof??`the roof`,{x:t,z:n}=K,r=J;Zr(),ar=`roof`,wr=!1,ti(t,n,r,e),Yr()}function ri(){Ct.reset(),nn=!1,on=!1,sn=null,dn=!1,an=0}function ii(){U=`menu`,Fn=null,bt.visible=!1,At.visible=!1,ri(),vt.clear(),Cn=`none`,document.pointerLockElement&&document.exitPointerLock()}function ai(e){qr.push(e),qr.length>10&&qr.shift()}function oi(){let e=Wn===`wing`;return{suit:Wn,flightM:e?Jn:null,glide:e&&Xn>30?Yn/Xn:null,passes:e?Qn:0,closestM:e?$n:null,rings:wr?{got:vt.got(),total:vt.total()}:null}}function si(e){let t=Np({...e,dockedFt:sn,pullFt:cn,sepM:ln,running:Hn});return e.kind!==`impact`&&t.total>(E.bestScore??0)&&(t.newBest=!0,E.bestScore=t.total),t}function ci(e){E.log.push({n:e.n,at:Date.now(),ride:e.ride,suit:e.suit,mode:e.mode,light:o.light,exitFt:pn,freefallS:mn===null?null:Math.round(mn*10)/10,pullFt:cn===null?null:Math.round(cn),kind:e.kind,area:e.area,from:e.from,roof:e.roof,distM:Math.round(e.distanceM*10)/10,padM:e.padM===null?null:Math.round(e.padM*10)/10,score:e.score.total,stars:e.score.stars,reserve:e.usedReserve}),E.log.length>100&&E.log.splice(0,E.log.length-100);let t=f(E.goals,{...e,score:e.score.total,jumps:E.jumps,dockedFt:sn,pullFt:cn},e.n);return e.earned=t.earned.map(e=>({title:e.title,license:e.license})),e.licensed=t.licensed,e.kind!==`impact`&&(t.licensed?T.sweep():t.earned.length>0&&T.ring(5)),e}function li(e){if(U===`impact`||U===`down`)return;U=`impact`,Or=Y,K.y=Math.max(K.y,0),q.set(0,0,0),ai(e);let t={kind:`impact`,mode:Rn,ride:ar,stableS:Cr,...oi(),area:`none`,roof:null,padM:null,canBase:!1,from:Vn,delayS:Un,distanceM:Math.hypot(K.x-70,K.z-0),usedReserve:Sn,redLight:wn,intoWind:!1,hot:!0,onBeach:!1};Fn=ci({...t,log:qr.slice(),reason:e,score:si(t),n:E.jumps,earned:[],licensed:null}),T.update(0,0,0),T.death(),Yr()}function ui(t=null){let n=Math.hypot(K.x-70,K.z-0),r=Math.hypot(q.x,q.z),i=-Math.sin(J)>.62,a=r>16||-q.y>7.2,o=t?`roof`:wg(K.x,K.z),s=o===`water`,c=o===`beach`;K.y=t?t.y1:0,q.y=0;let l=t?Se.at(K.x,K.y,K.z):null,u=l?l.name:t?K.x>150?`Navy Pier`:`a rooftop`:null,d={kind:s?`water`:`landed`,mode:Rn,ride:ar,stableS:Cr,...oi(),area:o,roof:u,padM:l?Math.hypot(K.x-l.x,K.z-l.z):null,canBase:!!t&&Cg(xe,K.x,K.y,K.z),from:Vn,delayS:Un,distanceM:n,usedReserve:Sn,redLight:wn,intoWind:i,hot:a,onBeach:c};Fn=ci({...d,log:qr.slice(),reason:s?`Water`:``,score:si(d),n:E.jumps,earned:[],licensed:null}),s||(E.rides+=1,c&&(E.bestM===null||n<E.bestM)&&(E.bestM=Math.round(n*10)/10)),ai(t?`Down on ${u??`a roof`} · ${Math.round(K.y*e).toLocaleString(`en-US`)} ft up`:s?`Water landing`:`Down · ${Math.round(n)} m`),Fn&&(Fn.log=qr.slice()),U=`down`,Or=Y+5,Yr()}function di(){Mn?(R_.set(zt,.05,Bt),H.localToWorld(R_),K.copy(R_),L_.set(1,0,0).applyQuaternion(H.quaternion),q.copy(Rt).addScaledVector(L_,2.2),q.y-=.6,B_.setFromQuaternion(S.quaternion,`YXZ`),Gt=B_.y,Kt=B_.x,qt=0,J=Gt,wn=!Nn,E.jumps+=1,ai(`Exit ${Math.round(K.y*e).toLocaleString(`en-US`)} ft ${Nn?`on green`:`on red`}`),U=`freefall`,Cn=`none`,Wn===`wing`?(ri(),pi(),fi(Gt)):wr?(ri(),pi(),Ni(`flat`,230)):(L_.set(1,0,0).applyQuaternion(H.quaternion),mi(L_)),Yr()):(An=`STEP INTO THE DOOR`,kn=Y+1.6)}function fi(e){qn=D_(e),ir=Kt,Jt=0,Yt=0,Jn=0,Yn=0,Xn=0,Zn=!1}function pi(){fn=Y,pn=Math.round(K.y*e)}function mi(e){ri(),pi(),Ct.exit(K,q,e,Gt)}function hi(e,t,n){if(nn||!Ct.active()||Y<an)return;Ct.slot(V_);let r=K.x-V_.x,o=K.z-V_.z,s=K.y+.32-V_.y,c=Math.hypot(r,o);if(c>14||c<.01||c>4&&Math.cos(Math.atan2(r,o)-Gt)<.2)return;let l=ev((14-c)/8),u=Math.min(c*.9,6);e.x+=(a-r/c*u-e.x)*l,e.z+=(i-o/c*u-e.z)*l,c<8&&(e.y+=(-51-$_(s,-3,3)*1.2-e.y)*l*.6),c<3&&Math.abs(n)<.1&&(Gt=tv(Gt,Ct.slotYaw(),1-Math.exp(-1.5*t)))}function gi(t,n){if(!Ct.active()){nn&&(nn=!1,Ct.setPlayerDocked(!1));return}Ct.slot(I_);let r=Ct.slotYaw();if(nn){let e=Math.abs(n.forward)<.3&&Math.abs(n.turn)<.3;if(!rn)rn=e;else if(Math.abs(n.forward)>.6||Math.abs(n.turn)>.6){nn=!1,Ct.setPlayerDocked(!1),An=`LOST THE GRIP`,kn=Y+1.4,an=Y+2,ai(`Lost the grip`);return}I_.y-=.32,K.lerp(I_.addScaledVector(Ct.baseVel,-t),1-Math.exp(-6*t)),q.copy(Ct.baseVel),Gt=tv(Gt,r,1-Math.exp(-4*t));return}if(Y<an||!Ct.ready())return;let i=K.x-I_.x,a=K.z-I_.z,o=K.y+.32-I_.y,s=Math.cos(r-Gt)>.45,c=Math.abs(q.y-Ct.baseVel.y)<8;Math.hypot(i,a)<1.9&&Math.abs(o)<1.7&&c&&s&&(nn=!0,rn=!1,Ct.setPlayerDocked(!0),An=`DOCKED`,kn=Y+1.8,T.beep(880,.1,.06),T.beep(1175,.14,.06),on||(on=!0,sn=K.y*e,ai(`Docked at ${Math.round(K.y*e).toLocaleString(`en-US`)} ft · ${(Y-fn).toFixed(1)} s after exit`)))}function _i(){if(U!==`freefall`||xn)return;let t=K.y*e;U=`deploying`,$t=0,vn=!1,tn=`pull`,hn=Y,yn=!1;let n=Rn===`base`;if(Xt=!n&&Math.random()<Zt?Math.random()<.62?`streamer`:`twist`:`none`,qn){Gt=qn.yaw,Kt=$_(Kt-Yt,-1.35,1.15),Jt=0,Yt=0;let e=Jn>=1e3?`${(Jn/1e3).toFixed(1)} km`:`${Math.round(Jn)} m`,t=oi().glide;ai(`Flew ${e} in the suit${t===null?``:` · glide ${t.toFixed(1)}`}`),qn=null}if(vt.next()){let e=vt.close(Y);ai(`Rings ${vt.got()} of ${vt.total()} · pulled with ${e} to go`)}if(J=Gt,(n||or)&&(Un=Y-fn),mn=Y-fn,ai(`Pull at ${Math.round(t).toLocaleString(`en-US`)} ft${n||or?` · ${(Un??0).toFixed(1)} s delay`:``}`),T.fabric(),!n&&t<700&&ai(`That pull is late`),nn&&(nn=!1,Ct.setPlayerDocked(!1)),cn=t,Ct.started()){let e=Ct.nearest(K);ln=Number.isFinite(e)?e:null,e<25?(ai(`Opened ${Math.round(e)} m from another jumper`),An=`TOO CLOSE — TRACK AWAY BEFORE YOU PULL`,kn=Y+2.4):ai(Number.isFinite(e)?`Clear air at pull · ${Math.round(e)} m`:`Clear air at pull`)}}function vi(){U===`malfunction`&&(U=`freefall`,Xt=`none`,xn=!0,Cn=`none`,bt.visible=!1,At.visible=!1,q.y=Math.min(q.y,-30),tn=`cutaway`,hn=Y,ai(`Cut away at ${Math.round(K.y*e).toLocaleString(`en-US`)} ft`),T.fabric(),An=`PULL RESERVE`,kn=Y+2.4)}function yi(){if(!xn||U!==`freefall`)return;let t=K.y*e;t<550?(ai(`Reserve pulled too low`),li(`Too low for the reserve`)):(U=`deploying`,Xt=`none`,yn=!0,xn=!1,Sn=!0,$t=0,vn=!1,tn=`reserve`,hn=Y,J=Gt,ai(`Reserve at ${Math.round(t).toLocaleString(`en-US`)} ft`),T.fabric())}function bi(e){if(Fn=null,ar=e.startsWith(`roof`)?`roof`:`plane`,wr=o.rings&&ar!==`roof`,e===`heli`||e===`balloon`)Zr(),Wn=o.suit,ar=e,ei();else if(e.startsWith(`roof`)){let t=Se.list.find(t=>t.id===e.split(`:`)[1])??Se.list[0];Zr(),Wn=o.suit,t&&ti(t.x,t.z,t.yaw,t.name)}else if(e===`wing`)Zr(),Wn=`wing`,Rn=`skydive`,U=`freefall`,Cn=`none`,Xt=`none`,K.set(390,2440,-1800),Gt=Math.PI,Kt=-.2,q.set(a,-17,44+i),pi(),fi(Math.PI),qn&&(qn.t=4),bt.visible=!1,At.visible=!1;else if(e===`padfinal`){let e=Se.list[0];if(!e)return;Zr(),U=`canopy`,Rn=`skydive`,Cn=`main`,K.set(e.x-40,e.y+30,e.z+2),J=-Math.PI/2,Gt=J,q.set(10.5+a,-5.4,i),bt.visible=!0,Jt=0,Yt=0}else if(Rn=`skydive`,e===`canopy`){U=`canopy`,Cn=`main`,Xt=`none`,yn=!1,K.set(110,720,50),J=.15,Gt=J,Kt=-.2;let e=-Math.sin(J),t=-Math.cos(J);q.set(e*11+a,-5.2,t*11+i),bt.visible=!0,At.visible=!1,Jt=0,Yt=0}else e===`freefall`?(U=`freefall`,Cn=`none`,Xt=`none`,xn=!1,Dn=!1,On=0,K.set(590,1500,0),q.set(a,-56,.4),Gt=Math.PI/2,Kt=-.12,bt.visible=!1,At.visible=!1):e===`slam`?(U=`freefall`,Cn=`none`,Xt=`none`,xn=!1,Fn=null,bt.visible=!1,At.visible=!1,K.set(70,15,0),q.set(0,-40,0),Gt=-Math.PI/2,Kt=-.35,T.resetDeath()):e===`formation`?(U=`freefall`,Cn=`none`,Xt=`none`,xn=!1,Dn=!1,bt.visible=!1,At.visible=!1,K.set(590,3600,0),q.set(a,-40,.4),Kt=-.3,Gt=0,mi(L_.set(0,0,1)),Ct.center(I_),Gt=Math.atan2(-(I_.x-K.x),-(I_.z-K.z))):e===`cabin`&&$r()}function Si(){return yn?1.45:Rn===`base`?K_:2.65}H.position.copy(Nt[0]??new G),H.position.y=$_(o.altitudeFt,8e3,2e4)/e;let Ci=new Os;Ci.connect(document);function wi(){Vr+=o.lookX,Hr+=o.lookY,o.lookX=0,o.lookY=0;let e=Lr??Ir,t=t=>Lr?e.has(t)&&!Rr.has(t):zr.has(t),n=e.has(`KeyA`)||e.has(`ArrowLeft`),r=e.has(`KeyD`)||e.has(`ArrowRight`),i=e.has(`KeyW`)||e.has(`ArrowUp`),a=e.has(`KeyS`)||e.has(`ArrowDown`)||o.flare,s=rv(r,n,-o.moveX);Br!==null&&(s=$_(Br,-1,1));let c=rv(n,r,o.moveX),l=rv(a,i,o.flare?-1:o.moveY),u=o.jump&&!Ur||t(`Space`),d=o.pull&&!Wr||t(`Space`),f=o.cut&&!Gr||t(`KeyX`)||t(`KeyC`),p=o.reserve&&!Kr||t(`KeyR`),m=t(`Escape`),h=e.has(`ShiftLeft`)||e.has(`ShiftRight`)||Math.hypot(o.moveX,o.moveY)>.92;return Ur=o.jump,Wr=o.pull,Gr=o.cut,Kr=o.reserve,Lr?Rr=new Set(Lr):zr.clear(),{turn:s,strafe:c,forward:l,run:h,jumpEdge:u,pullEdge:d,cutEdge:f,reserveEdge:p,endEdge:m}}function Ti(t,n){Y+=t;let r=46*t;for(;r>0;){let e=Nt[Pt]??Nt[0],t=Nt[Pt+1]??Nt[0],n=Math.max(.001,e.distanceTo(t))-Ft;r<n?(Ft+=r,r=0):(r-=n,Pt=(Pt+1)%4,Ft=0)}let s=Nt[Pt]??Nt[0],c=Nt[Pt+1]??Nt[0],l=Math.max(.001,s.distanceTo(c));H.position.lerpVectors(s,c,Ft/l);let u=$_(o.altitudeFt,8e3,2e4)/e;H.position.y=U===`menu`?u:Qt,I_.subVectors(c,s),I_.lengthSq()>0&&I_.normalize(),Rt.copy(I_).multiplyScalar(46);let d=nv(I_.x,I_.z),f=Math.atan2(Math.sin(d-It),Math.cos(d-It));if(It+=f*(1-Math.exp(-3*t)),Lt+=($_(-f*1.4,-.35,.35)-Lt)*(1-Math.exp(-2*t)),H.rotation.order=`YXZ`,H.rotation.set(0,It,Lt),at.rotation.z+=t*42,ot.rotation.z+=t*42,Hi(I_),ce.uTime.value=Y,ce.uCam.value.copy(S.position),he.update(t),ge.update(Y),Se.update(Y),vt.update(Y,S.position),Be.rotation.y=Math.sin(Y*7)*.12,Ar||ki(t),pt.material.emissiveIntensity=Math.sin(Y*8)>.4?2:.15,!n)return;let p=.00215;if(U===`cabin`||U===`roof`||U===`aboard`?(Ut-=Vr*p,U===`aboard`&&ar===`heli`&&(Ut=$_(Ut,Og-1.7,Og+1.7)),Wt=$_(Wt-Hr*p,U===`cabin`?-1.2:-1.4,1.05)):U===`canopy`||U===`down`?(Jt=$_(Jt-Vr*p,-1.35,1.35),Yt=$_(Yt-Hr*p,-1,1.5)):U===`freefall`&&qn?(Jt=$_(Jt-Vr*p,-1.35,1.35),Yt=$_(Yt-Hr*p,-1,1)):(U===`freefall`||U===`deploying`||U===`malfunction`)&&(Gt-=Vr*p,Kt=$_(Kt-Hr*p,Pi()?-1.5:-1.35,1.15)),Vr=0,Hr=0,U===`menu`)return;if(U===`cabin`){let e=-Math.sin(Ut),r=-Math.cos(Ut),i=Math.cos(Ut),a=-Math.sin(Ut);Math.abs(n.forward)+Math.abs(n.strafe)>.05&&(jn+=t*7);let o=2.6,s=(i*n.strafe+e*n.forward)*o*t,c=(a*n.strafe+r*n.forward)*o*t,l=zt+s,u=Bt+c;iv(l,u)?(zt=l,Bt=u):iv(l,Bt)?zt=l:iv(zt,u)&&(Bt=u);let d=mt.barOpen()>.85,f=Bt>.24&&Bt<1.72;if(f&&!d&&(zt=Math.min(zt,1)),Mn=zt>.8&&Bt>.28&&Bt<1.7,d&&f&&zt>=1.3&&s>0){di();return}Mn&&!En&&(En=!0,An=`PULL BY 4,500 FT — HARD DECK 2,000`,kn=Y+4.2,T.beep(740,.14,.05),T.beep(980,.16,.05)),n.jumpEdge&&di();return}if(U===`roof`){Di(t,n);return}if(U===`aboard`){Ai(t,n);return}if(Ct.update(t,Y),U===`down`||U===`impact`)return;let m=n.forward>.4,h=n.forward<-.4;if(n.cutEdge&&vi(),U===`malfunction`&&(n.reserveEdge||n.pullEdge)&&!n.cutEdge&&(An=`CUT AWAY FIRST — X, THEN R`,kn=Y+1.5),xn&&U===`freefall`&&(n.reserveEdge||n.pullEdge)?yi():U===`freefall`&&!xn&&n.pullEdge&&_i(),U===`freefall`&&qn)Li(t,n);else if(U===`freefall`&&(Rn===`base`||or))Ri(t,n.turn,m,h);else if(U===`freefall`||U===`malfunction`&&Xt===`streamer`||U===`deploying`&&Xt===`streamer`){Gt+=n.turn*1.25*t;let e=$_(-Kt/1.15,0,1),r=53,o=4+e*26;m&&U===`freefall`&&(r=46,o*=.4),h&&U===`freefall`&&(r=76+e*16,o+=10),Pi()&&(o=Fi(r,m,h)),Xt===`streamer`&&(r=40);let s=-Math.sin(Gt),c=-Math.cos(Gt);I_.set(s*o+a,-r,c*o+i),U===`freefall`&&hi(I_,t,n.turn),q.lerp(I_,1-Math.exp(-1.8*t))}else if(U===`malfunction`&&Xt===`twist`)Gt+=t*4.2,J=Gt,I_.set(-Math.sin(Gt)*4+a,-16,-Math.cos(Gt)*4+i),q.lerp(I_,1-Math.exp(-2*t));else if(U===`deploying`&&Xt===`none`){$t+=t;let e=Si(),n=ev($t/e);!vn&&$t>e*.42&&(vn=!0,en=yn?1:.8),J=Gt;let r=-Math.sin(J),o=-Math.cos(J),s=Vt.lerp(6,10.5,n),c=Vt.lerp(-Math.min(Math.abs(q.y),55),5.2,n);I_.set(r*s+a,-c,o*s+i),q.lerp(I_,1-Math.exp(-3*t)),$t>=e&&(U=`canopy`,Cn=yn?`reserve`:`main`,Jt=0,Yt=0,ai(yn?`Reserve flying`:`Main flying`),T.fabric())}else if(U===`deploying`&&Xt!==`none`)$t+=t,Xt===`twist`&&(Gt+=t*3.2,I_.set(a,-22,i),q.lerp(I_,1-Math.exp(-1.5*t))),($t>.65||K.y*3.280839895<2e3)&&(U=`malfunction`,ai(Xt===`streamer`?`Main streamer`:`Line twist`),T.alarm());else if(U===`canopy`){J+=n.turn*.95*t;let e=+(n.forward<-.35),r=+(n.forward>.35),o=1-Math.exp(-7*t),s=n.forward<-.35?Math.min(1,-n.forward):0;gn+=(Math.max(s,Math.max(0,n.turn)*.75)-gn)*o,_n+=(Math.max(s,Math.max(0,-n.turn)*.75)-_n)*o;let c=10.5-e*6.2+r*3.8,l=5.4-e*3.15+r*.85;e&&K.y-X<48&&(l=Math.min(l,2.2)),e&&K.y-X<14&&(l=Math.min(l,1.3));let u=-Math.sin(J),d=-Math.cos(J);I_.set(u*c+a,-l,d*c+i),q.lerp(I_,1-Math.exp(-2.5*t))}if(or&&Mi(t,m),U===`freefall`?gi(t,n):nn&&(nn=!1,Ct.setPlayerDocked(!1)),Ct.broken()&&!dn&&(dn=!0,nn=!1,U===`freefall`&&(ai(`Break-off at ${Of.toLocaleString(`en-US`)} ft`),An=`BREAK OFF — TRACK AWAY`,kn=Y+3,T.beep(660,.12,.05),T.beep(660,.12,.05))),en*=Math.exp(-3.4*t),!qn){let e=-n.turn*.5;qt+=(e-qt)*(1-Math.exp(-6*t))}H_.copy(K),K.addScaledVector(q,t);let g=xe.contact(H_,K,_g);if(g){zi(g);return}if(X=xe.top(K.x,K.z,K.y)?.y1??0,U===`freefall`&&vt.next()&&Ii(),K.y<=0&&U!==`canopy`){li(U===`deploying`&&Xt===`none`&&yn?`Reserve did not open in time`:U===`deploying`&&Xt===`none`?`Main out too low`:U===`malfunction`||Xt!==`none`?`Rode a malfunction in`:xn?`No reserve`:`No canopy`);return}K.y<=0&&U===`canopy`&&ui();let _=Math.max(0,K.y)*e,v=Rn===`skydive`&&(U===`freefall`||U===`malfunction`||U===`deploying`&&Xt!==`none`)&&(U!==`deploying`||Xt!==`none`);if(v&&!Dn&&_<=4500&&_>3e3&&(Dn=!0,T.triple(),On=-.5),v&&_<=4500){let e=_<=2e3?3:_<=3e3?2:1,n=e===3?.18:e===2?.48:1.05,r=e===3?1280:e===2?1040:860;On+=t,On>=n&&(On=0,T.beep(r,e===3?.08:.11,e===3?.09:.06))}else v||(On=0);let y=U===`canopy`||U===`deploying`&&Xt!==`streamer`&&$t>.35||U===`malfunction`&&Xt===`twist`;if(bt.visible=y,y){let e=Si(),t=U===`deploying`?ev($_(($t-.3)/(e*.8),.02,1)):1;U!==`canopy`&&(gn=0,_n=0),bt.position.copy(K),bt.position.y+=md-Gd,bt.rotation.set(0,J,qt*.45),yt.setReserve(Cn===`reserve`||yn),yt.update(t,gn,_n),kr=t}At.visible=Xt===`streamer`&&(U===`deploying`||U===`malfunction`),At.visible&&Ei(K,Y)}function Ei(e,t){At.position.copy(e);for(let e=0;e<Mt.length;e++){let n=Mt[e];n&&(n.position.set(Math.sin(t*6+e)*.35,1.2+e*.85,Math.cos(t*5+e)*.25),n.rotation.z=Math.sin(t*4+e)*.4)}}function Di(e,t){let n=-Math.sin(Ut),r=-Math.cos(Ut),i=Math.cos(Ut),a=-Math.sin(Ut);t.jumpEdge&&(zn=!0),zn&&t.forward<-.3&&(zn=!1);let o=zn?1:t.forward,s=zn?0:t.strafe,c=Math.hypot(o,s);if(c<.05)return;c>1&&(o/=c,s/=c);let l=zn||t.run,u=l?W_:U_,d=(i*s+n*o)*u,f=(a*s+r*o)*u;jn+=e*(l?11:7);let p=0,m=(e,t)=>{let n=xg(xe,e,t,K.y);return n.kind===`ok`?K.set(e,n.y,t):n.kind===`edge`?(K.x=e,K.z=t):n.kind===`ledge`&&(p=n.drop),n.kind},h=m(K.x+d*e,K.z+f*e);(h===`wall`||h===`ledge`)&&!zn&&(h=m(K.x+d*e,K.z),(h===`wall`||h===`ledge`)&&(h=m(K.x,K.z+f*e))),h===`edge`?Oi(d,f,l):h!==`ok`&&(zn&&=!1,Y>kn&&(An=p?`${Math.round(p)} m DOWN TO A LOWER ROOF — JUMP FROM ANOTHER EDGE`:`NO CLEAR EDGE THAT WAY`,kn=Y+2.2))}function Oi(t,n,r){let i=Math.hypot(t,n)||1;for(let e=0;e<16&&xe.blocked(K.x,K.y-1.6,K.z,.37,1.55);e++)K.x+=t/i*.05,K.z+=n/i*.05;q.set(t,r?1.6:.2,n),Gt=Ut,Kt=$_(Wt,-1.35,1.15),qt=0,J=Gt,Vn=Bn,Hn=r,pi(),zn=!1,E.jumps+=1;let a=Math.round(K.y*e).toLocaleString(`en-US`);ai(`Off ${Bn} at ${a} ft · ${r?`running exit`:`stepped off`}`),U=`freefall`,Cn=`none`,Wn===`wing`&&fi(Ut),Yr()}function ki(e){let t=U!==`menu`&&(ar===`heli`||ar===`balloon`);t&&(sr+=e);let n=cr<0?0:Y-cr;ht.group.visible=t&&ar===`heli`&&n<90,gt.group.visible=t&&ar===`balloon`;for(let e of _t)e.b.group.visible=gt.group.visible;if(ht.group.visible){let t=Math.max(0,n-5),r=cr<0?0:Math.min(38,t*3.5);fr+=r*e;let i=Y;ht.group.position.set(dr.x+fr,dr.y+Math.sin(i*.7)*.35+fr*.08,dr.z+Math.sin(i*.43)*.25),gr=-Math.PI/2,ht.group.rotation.set(-Math.min(.16,t*.05),gr+Math.sin(i*.31)*.015,Math.sin(i*.53)*.02,`YXZ`),ht.group.updateMatrixWorld(),hr.set(r,Math.cos(i*.7)*.25+r*.08,Math.cos(i*.43)*.11),ht.update(e,i,U===`aboard`&&lr&&sr<6.5)}if(gt.group.visible){let t=sr%9;_r+=(+(t>6&&t<8.6)-_r)*(1-Math.exp(-12*e));let r=cr<0?0:Math.max(0,1.4-n*.07);mr+=r*e,gt.group.position.set(pr.x+a*sr,pr.y+Math.sin(sr*.21)*1.2+mr,pr.z+i*sr),gr=sr*.012,gt.group.rotation.set(Math.sin(sr*.6)*.006,gr,Math.sin(sr*.47)*.008,`YXZ`),gt.group.updateMatrixWorld(),hr.set(a,Math.cos(sr*.21)*.25+r,i),gt.update(e,Y,_r);for(let t of _t){let n=(sr+t.phase)%11;t.burn+=(+(n>8&&n<10.4)-t.burn)*(1-Math.exp(-12*e)),t.b.group.position.copy(gt.group.position).sub(I_.set(0,mr,0)).add(t.off),t.b.group.position.y+=Math.sin(sr*.17+t.phase)*3,t.b.group.rotation.y=sr*.009+t.phase,t.b.update(e,Y,t.burn)}}U===`aboard`&&(K.copy(ar===`heli`?ht.group.position:gt.group.position),q.copy(hr))}function Ai(e,t){if(ar===`heli`){!lr&&sr>Y_&&(lr=!0,An=`PILOT: CLEAR TO JUMP`,kn=Y+2.6,T.beep(740,.14,.05),T.beep(980,.16,.05)),(t.jumpEdge||lr&&t.forward>.6)&&ji();return}let n=-Math.sin(Ut),r=-Math.cos(Ut),i=Math.cos(Ut),a=-Math.sin(Ut),o=1.2,s=(i*t.strafe+n*t.forward)*o*e,c=(a*t.strafe+r*t.forward)*o*e;Math.abs(s)+Math.abs(c)>1e-5&&(jn+=e*6),zt=$_(zt+s,Ag.x0,Ag.x1),Bt=$_(Bt+c,Ag.z0,Ag.z1),t.jumpEdge&&ji()}function ji(){let t=ar===`heli`,n=t?ht.group:gt.group;L_.set(-Math.sin(Ut),0,-Math.cos(Ut)).applyQuaternion(n.quaternion),L_.y=0,L_.normalize(),t?R_.copy(kg):R_.set(zt-Math.sin(Ut)*1.1,jg-.2,Bt-Math.cos(Ut)*1.1),n.localToWorld(R_),K.copy(R_),q.copy(hr).addScaledVector(L_,t?1.6:1.1),q.y+=t?-.4:.6,B_.setFromQuaternion(S.quaternion,`YXZ`),Gt=B_.y,Kt=B_.x,qt=0,J=Gt,wn=t&&!lr,cr=Y,pi(),E.jumps+=1;let r=Math.round(K.y*e).toLocaleString(`en-US`);ai(t?`Off the helicopter at ${r} ft${wn?` · before the pilot cleared you`:``}`:`Over the rim of the balloon at ${r} ft`),U=`freefall`,Cn=`none`,or=!0,Cr=null,ri(),Wn===`wing`?fi(Gt):(vr=0,yr=0,br=t?-.9:-1.15,xr=(Math.random()<.5?-1:1)*(t?.3:.45),Sr=Math.random()*6,wr&&Ni(`flat`,300)),Yr()}function Mi(e,t){if(U!==`freefall`||qn){let t=Math.exp(-4*e);vr*=t,yr*=t,br*=t,xr*=t;return}let n=Math.hypot(q.x-a,q.y,q.z-i),r=Math.min(1.5,(n/50)**2),o=5*r*(t?2.6:.4),s=(.4+2*r)*(t?2:1),c=2.2*Math.min(1,n/12)*$_((50-n)/15,0,1)*(t?.15:1),l=Y-fn+Sr;br+=(-o*vr-s*br+c*Math.sin(l*1.9))*e,xr+=(-o*yr-s*xr+c*Math.sin(l*1.3+1))*e,vr+=br*e,yr+=xr*e;let u=Math.abs(vr)<.15&&Math.abs(yr)<.15&&Math.abs(br)<.25&&Math.abs(xr)<.25;Cr===null&&Y-fn>.8&&u&&(Cr=Y-fn,ai(`Stable ${Cr.toFixed(1)} s after the exit`),An=`STABLE`,kn=Y+1.4,T.beep(880,.1,.05))}function Ni(t,n){let r;r=t===`flat`?d_({seed:Tr,from:K,firstDrop:n,floorY:c/e,toward:{x:70,z:0},windX:a,windZ:i}):f_({seed:Tr,from:K,yaw:qn?.yaw??Gt,floorY:u/e,toward:J_}),vt.lay(r,t,Y),r.length&&(ai(`Ring course · ${r.length} ${t===`flat`?`rings`:`gates`}`),An=t===`flat`?`${r.length} RINGS BELOW`:`${r.length} GATES AHEAD`,kn=Y+3)}function Pi(){return U===`freefall`&&vt.next()!==null}function Fi(e,t,n){let r=$_(-Kt,.05,1.5);return Math.min(t?14:n?40:30,e/Math.tan(r))}function Ii(){let e=vt.cross(H_,K,Y);if(!e)return;let t=vt.got(),n=vt.total(),r=vt.next()===null;if(e===`pass`?(T.ring(vt.streak()),T.whoosh(.35)):T.ringMiss(),r&&t===n)An=`CLEAN SWEEP · ${n} OF ${n}`,kn=Y+2.6,T.sweep();else if(r)An=`RINGS DONE · ${t} OF ${n}`,kn=Y+2.2;else{let r=vt.streak();An=e===`miss`?`MISSED · ${t} OF ${n}`:r>=3?`${r} IN A ROW · ${t} OF ${n}`:`THROUGH · ${t} OF ${n}`,kn=Y+1.1}r&&ai(`Rings ${t} of ${n}${t===n?` · clean sweep`:``}`)}function Li(e,t){if(!qn)return;let n=P_(qn,q,a,i,t.turn,t.forward,e),r=Math.hypot(q.x,q.z);Jn+=r*e,!Zn&&n>.98&&r>-q.y&&(Zn=!0),Zn&&wr&&!vt.laid()&&Ni(`gate`,0),Zn&&(Yn+=r*e,Xn-=q.y*e);let o=$_(F_(q,a,i)*.7-.1,-1.2,.5);if(Gt=qn.yaw+Jt,Kt=$_(Vt.lerp(ir,o,n)+Yt,-1.4,1.2),qt=qn.bank*.85,rr+=e,rr<.05)return;rr=0;let s=Math.hypot(q.x-a,q.y,q.z-i),c=xe.nearest(K.x,K.y,K.z,30);c<=q_&&s>25&&Zn?(tr&&(tr=!1,er=c,Qn+=1,T.whoosh($_(1.3-c/q_,.4,1))),er=Math.min(er,c),$n=$n===null?er:Math.min($n,er),An=`CLOSE PASS · ${Math.round(er)} M`,kn=Y+1.2,nr=0):tr||(nr+=.05,nr>.8&&(tr=!0,ai(`Close pass · ${Math.round(er)} m at ${Math.round(s*h)} mph`)))}function Ri(e,t,n,r){Gt+=t*1.25*e;let o=$_(-Kt/1.15,0,1),s=53,c=4+o*26;n&&(s=46,c*=.4),r&&(s=76+o*16,c+=10),Pi()&&(c=Fi(s,n,r));let l=Math.max(0,-q.y);q.y-=9.81*(1-(l/s)**2)*e;let u=1-Math.exp(-1.8*Math.min(1,(l/40)**2)*e);q.x+=(-Math.sin(Gt)*c+a-q.x)*u,q.z+=(-Math.cos(Gt)*c+i-q.z)*u}function zi(e){let t=e.solid,n=e.top;!n&&U===`canopy`&&K.y>=t.y1-1&&(K.x=$_(K.x,t.x0+.4,t.x1-.4),K.z=$_(K.z,t.z0+.4,t.z1-.4),n=!0),n?(K.y=t.y1,U===`canopy`?ui(t):li(qn?`Flew the suit into a rooftop`:U===`freefall`?`Went in on a rooftop`:`No open canopy over a roof`)):(K.x=H_.x,K.z=H_.z,li(U===`canopy`?`Flew into the side of a building`:qn?`Flew the suit into a building`:`Hit the side of a building`))}function Bi(){let e=null,t=1600;for(let n of Se.list){if(n.y>K.y-5)continue;let r=Math.hypot(n.x-K.x,n.z-K.z);r<t&&([e,t]=[n,r])}return e}function Vi(){if(zn)return`RUNNING FOR THE EDGE`;let t=Sg(xe,K.x,K.y,K.z,-Math.sin(Ut),-Math.cos(Ut),6);return t.kind===`edge`&&t.dist<=1.5?`THE EDGE · ${Math.round(t.drop*e).toLocaleString(`en-US`)} FT DOWN · STEP OFF`:t.kind===`ledge`?`A LOWER ROOF IS RIGHT BELOW — JUMP ANOTHER WAY`:w?`WALK TO THE EDGE · JUMP RUNS YOU OFF`:`WALK TO THE EDGE · SPACE RUNS AND JUMPS`}function Hi(e){Nn=Math.abs(H.position.x-590)<90&&e.z>.55&&Math.abs(H.position.z-0)<280,Nn&&!Pn&&U===`cabin`&&(T.beep(660,.22,.07),An=`GREEN LIGHT — GO!`,kn=Y+2.2),Pn=Nn,Je.color.set(Nn?`#3dce73`:`#e23d3d`),Je.emissive.set(Nn?`#3dce73`:`#e23d3d`)}function Ui(e){return U===`freefall`?or&&!qn&&Cr===null?`DEAD AIR`:qn?O_(qn)<.9?`SUIT FILLING`:qn.pitch>.35?`DIVE`:qn.pitch<-.35?`FLARE`:`GLIDE`:e<-.4&&Kt<-.45?`TRACK`:e<-.4?`DIVE`:e>.4?`ARCH`:`BELLY`:U===`canopy`?`CANOPY`:``}function Wi(t){let i=U===`menu`||U===`cabin`?H.position.y*e:Math.max(0,K.y)*e,a=``,o=0;if((U!==`deploying`||Xt!==`none`)&&(U===`freefall`||U===`malfunction`||U===`deploying`&&Xt!==`none`)){let e=U===`malfunction`||Xt!==`none`;e&&i<=2e3?(a=`HARD DECK — CUT AWAY AND PULL RESERVE`,o=3):xn?(a=`PULL RESERVE`,o=i<=2e3?3:2):e?(a=`MAIN FAILED — CUT AWAY, THEN RESERVE`,o=i<=3e3?3:2):i<=X_[Rn].hard?(a=Rn===`base`?`PULL!`:`HARD DECK — PULL IMMEDIATELY`,o=3):i<=X_[Rn].now?(a=`PULL NOW`,o=2):i<=X_[Rn].pull&&(a=Rn===`base`?`PULL`:`CRITICAL ALTITUDE — PULL`,o=1)}Y<kn&&An&&(a=An,o===0&&(o=1));let s=``;if(U===`cabin`)s=Nn?`GREEN LIGHT — RUN OUT THE DOOR`:Mn?`RED LIGHT — WAIT FOR GREEN`:`WALK TO THE DOOR`;else if(U===`roof`)s=Vi();else if(U===`aboard`)s=ar===`balloon`?w?`FACE OUT · TAP JUMP TO GO OVER THE RIM`:`FACE OUT · SPACE CLIMBS OVER THE RIM`:lr?w?`CLEAR TO JUMP · TAP JUMP TO PUSH OFF`:`CLEAR TO JUMP · SPACE PUSHES OFF`:`HOLD ON · THE PILOT IS SETTLING THE HOVER`;else if(U===`freefall`){let e=w?`TAP PULL`:`SPACE PULLS`;if(qn){let t=-q.y,n=Math.hypot(q.x,q.z)/Math.max(.1,t);s=O_(qn)<.6?`LET THE SUIT FILL`:t<.5?`CLIMBING · ${e}`:vt.next()?`GATES ${vt.got()} OF ${vt.total()} · GLIDE ${n>9.9?`10+`:n.toFixed(1)}`:`GLIDE ${n>9.9?`10+`:n.toFixed(1)} · ${e}`}else if(Rn===`base`)s=`DELAY ${(Y-fn).toFixed(1)} s · ${w?`TAP PULL`:`SPACE PULLS`}`;else if(xn)s=`PULL RESERVE — R OR SPACE`;else if(or&&Cr===null)s=w?`DEAD AIR · PUSH UP TO ARCH`:`DEAD AIR · HOLD W TO ARCH`;else if(vt.next())s=`RINGS ${vt.got()} OF ${vt.total()} · LOOK AT THE GOLD ONE`;else if(or)s=`DELAY ${(Y-fn).toFixed(1)} s · ${e}`;else if(nn)s=`DOCKED · HOLD ON UNTIL BREAK-OFF`;else if(Ct.active()){Ct.slot(V_);let e=Math.hypot(V_.x-K.x,V_.z-K.z),t=V_.y-(K.y+.32);s=e>4?`FLY TO THE OPEN SLOT · ${Math.round(e)} m`:t>1.4?`SLOT IS ABOVE — ARCH TO RISE`:t<-1.4?`SLOT IS BELOW — DIVE TO DROP DOWN`:Ct.ready()?`FACE IN TO DOCK`:`HOLD THERE — THE BASE IS BUILDING`}else s=dn&&Ct.nearest(K)<30?`TRACK AWAY — HOLD S, THEN PULL`:w?`TAP PULL`:`SPACE PULLS`}else if(U===`malfunction`)s=`X CUT AWAY · THEN R RESERVE`;else if(U===`deploying`)s=Xt===`none`?`OPENING`:`WAITING ON A BAD CANOPY`;else if(U===`canopy`){let e=-Math.sin(J)>.55,t=Math.hypot(70-K.x,0-K.z),n=K.y-X,r=Bi(),i=r?K.y-r.y:1/0,a=r!==null&&Math.hypot(r.x-K.x,r.z-K.z)<220&&i<260;s=a&&i<160&&!e?`FACE THE LAKE — LAND INTO THE WIND`:a&&i<30?`FLARE — HOLD S`:a?`ON FINAL · ${r.name.toUpperCase()}`:n<260&&!e?`FACE THE LAKE — LAND INTO THE WIND`:n<40?`FLARE — HOLD S`:Rn===`base`?`FLY THE ARROW TO OPEN GROUND`:t>90?`FLY THE ARROW TO THE BEACH`:`ON FINAL`}let c=``;if(Tn=``,U===`cabin`||U===`menu`){let e=Math.abs(H.position.x-590)<90&&Rt.z>11.5,t=Math.max(0,Math.round((-280-H.position.z)/46));Nn?c=Tn=`GO`:e?H.position.z<-280?(c=`GREEN IN ${t}s`,Tn=`${t}s`):H.position.z>280?(c=`PAST THE SPOT`,Tn=`PAST`):c=Tn=`ON THE SPOT`:c=Tn=`GO-AROUND`}let l=U===`canopy`||U===`down`?J:U===`cabin`||U===`menu`?It+Ut:U===`aboard`?gr+Ut:U===`roof`?Ut:Gt;Rn===`base`?Tg(K.x,K.z,Fr):Fr.set(70,0,0);let u=Fr.x-K.x,d=Fr.z-K.z,f=Math.atan2(-u,-d),m=U===`roof`?Ut:U===`aboard`?gr+Ut:U===`freefall`?Gt:J,g=Math.atan2(Math.sin(f-m),Math.cos(f-m));S.updateMatrixWorld(),R_.set(1.15,1.25,.95),H.localToWorld(R_);let _=R_.clone();S.getWorldDirection(L_);let v=I_.copy(_).sub(S.position),y=L_.dot(v)>0,b=_.project(S);Jr.phase=U,Jr.mode=Rn,Jr.suit=Wn,Jr.altitudeFt=i,Jr.fallMph=Math.max(0,-q.y)*h,Jr.groundMph=U===`cabin`||U===`menu`?Rt.length()*h:Math.hypot(q.x,q.z)*h,Jr.compassDeg=(Vt.radToDeg(-l)%360+360)%360,Jr.banner=a,Jr.bannerLevel=o,Jr.pose=Ui(t),Jr.green=Nn,Jr.inDoor=Mn,Jr.prompt=s,Jr.spot=c,Jr.doorVisible=U===`cabin`&&!Mn,Jr.doorU=y?$_(b.x*.5+.5,.06,.94):b.x<0?.06:.94,Jr.doorV=y?$_(-b.y*.5+.5,.12,.82):.2,Jr.baseVisible=!1;let x=(e,t)=>{let n=L_.dot(I_.copy(e).sub(S.position))>0;if(e.project(S),n||e.multiplyScalar(-1),Jr.baseVisible=!0,!n||Math.abs(e.x)>1||Math.abs(e.y)>1){let t=1/Math.max(Math.abs(e.x),Math.abs(e.y),.001);e.x*=t,e.y*=t}Jr.baseU=$_(e.x*.5+.5,.06,.94),Jr.baseV=$_(-e.y*.5+.5,.1,.86),Jr.baseLabel=t},C=U===`freefall`?vt.next():null;if(C){let e=C.c.distanceTo(S.position);x(V_.copy(C.c),`${qn?`GATE`:`RING`} ${vt.index()+1} · ${Math.round(e)} m`)}else if(U===`freefall`&&Ct.active()&&!nn){Ct.center(V_);let e=V_.distanceTo(S.position);e>2.6&&x(V_,`BASE ${Math.round(e)} m`)}else if(U===`canopy`){let e=Bi(),t=e?Math.hypot(e.x-K.x,e.z-K.z):0;e&&t>18&&x(V_.set(e.x,e.y,e.z),`${e.name.toUpperCase()} ${Math.round(t)} m`)}Jr.dzVisible=U===`freefall`||U===`canopy`||U===`deploying`||U===`malfunction`||U===`roof`||U===`aboard`,Jr.dzRel=Vt.radToDeg(g),Jr.dzDist=Math.hypot(u,d),Jr.dzLabel=Rn===`base`?`LZ`:`DZ`,Jr.outcome=Fn,Jr.replay=Ar?{shot:Ar.shot().title,speed:Ar.speed(),progress:$_((Ar.time()-Ar.start)/Math.max(1,Ar.end-Ar.start),0,1),altFt:Math.max(0,jr[mf.at.eye+1]-md)*e}:null,Jr.canopy=Cn,Jr.needsLook=!w&&U!==`menu`&&document.pointerLockElement!==n,r.current&&U!==`menu`&&dv(r.current,i,X_[Rn]),p(Jr)}function Yi(){O.position.copy(S.position);let e=S.position.y,t=$_(e/4500,0,1);x.near=Vt.lerp(500,2600,t),x.far=Vt.lerp(16e3,36e3,Math.sqrt(t)),ce.uFogNear.value=x.near,ce.uFogFar.value=x.far,b.setViewHeight(e),b.update(Y)}function Xi(){if(Yi(),U===`menu`){S.position.set(Z_.x+Math.sin(Y*.031)*90,Z_.y+Math.sin(Y*.047)*12,Z_.z+Math.sin(Y*.023)*220),S.lookAt(Q_),S.fov=$_(Vt.radToDeg(2*Math.atan(Math.tan(.66)/S.aspect)),30,75),S.updateProjectionMatrix();return}if(U===`cabin`){let e=Math.sin(jn)*.018*(Math.abs(Math.sin(jn))>0);R_.set(zt,1.5+e,Bt),Mn&&!C&&(R_.y+=Math.sin(Y*47)*.01,R_.x+=Math.sin(Y*33)*.008),H.localToWorld(R_),S.position.copy(R_),B_.set(Wt,Ut,0,`YXZ`),z_.setFromEuler(B_),S.quaternion.copy(H.quaternion).multiply(z_);return}if(U===`aboard`){let e=ar===`heli`?ht.group:gt.group;ar===`heli`?(R_.copy(Dg),C||(R_.y+=Math.sin(Y*43)*.005,R_.z+=Math.sin(Y*31)*.004)):R_.set(zt,G_+(C?0:Math.sin(jn)*.012),Bt),e.localToWorld(R_),S.position.copy(R_),B_.set(Wt,Ut,0,`YXZ`),z_.setFromEuler(B_),S.quaternion.copy(e.quaternion).multiply(z_),Math.abs(S.fov-72)>.25&&(S.fov+=(72-S.fov)*.08,S.updateProjectionMatrix());return}if(U===`roof`){let e=C?0:Math.sin(jn)*.025;S.position.set(K.x,K.y+G_+e,K.z),B_.set(Wt,Ut,0,`YXZ`),S.quaternion.setFromEuler(B_),Math.abs(S.fov-72)>.25&&(S.fov+=(72-S.fov)*.08,S.updateProjectionMatrix());return}let e=Math.hypot(q.x,q.y,q.z);if(S.position.copy(K),S.position.y+=U===`canopy`||U===`down`?md:.32,!C&&U!==`down`&&U!==`impact`){let t=U===`canopy`?.012:Math.min(e/80,1)*.045;S.position.x+=Math.sin(Y*23)*t,S.position.y+=Math.cos(Y*19)*t*.5}U===`canopy`||U===`down`?B_.set(-.22+Yt,J+Jt,qt*.65,`YXZ`):B_.set(Kt+vr,Gt,qt+yr,`YXZ`),en>.01&&!C&&(B_.x-=en*en*.32,B_.z+=Math.sin(Y*29)*en*.05,S.position.y+=Math.sin(Y*41)*en*.07),S.quaternion.setFromEuler(B_);let t=U===`freefall`||U===`malfunction`?74+Math.min(e,80)*.1:72;qn&&U===`freefall`&&(t+=6*O_(qn)),Math.abs(S.fov-t)>.25&&(S.fov+=(t-S.fov)*.08,S.updateProjectionMatrix())}let Zi=new un,Qi=new un,$i=new Ht,ea=new bn,ta=new un,na=new G(1,1,1),ra=new G,ia=new G,aa={mode:`hidden`,forward:0,turn:0,leftHand:null,rightHand:null,gesture:null,gestureT:0,walk:0,flare:0,air:0,altFt:0,time:0,reaching:!1,wing:0};function oa(t){let n=aa;if(n.leftHand=null,n.rightHand=null,n.forward=Da?.forward??0,n.turn=Da?.turn??0,n.walk=jn,n.time=Y,n.air=Math.hypot(q.x,q.y,q.z),n.altFt=(U===`cabin`?H.position.y:Math.max(0,K.y))*e,n.flare=$_((30-(K.y-X))/25,0,1),n.gestureT=Y-hn,n.gesture=tn&&n.gestureT<1.2?tn:null,n.reaching=U===`deploying`||U===`malfunction`&&Xt===`twist`,n.wing=qn&&U===`freefall`?O_(qn):0,U===`menu`||U===`impact`)n.mode=`hidden`;else if(U===`cabin`){if(n.mode=`cabin`,R_.set(zt,1.5,Bt),H.localToWorld(R_),ea.set(0,Ut,0,`YXZ`),$i.setFromEuler(ea).premultiply(H.quaternion),Zi.compose(R_,$i,na),Mn){ta.copy(Zi).invert();let e=[$_(Bt-.32,.3,1.6),$_(Bt+.32,.3,1.6)],t=Math.min(ct.position.y,1.5),[r,i]=e.map(e=>H.localToWorld(new G(1.22,t,e)).applyMatrix4(ta)),a=r.x<i.x?r:i,o=r.x<i.x?i:r;a.z<.3&&o.z<.3&&a.length()<.85&&o.length()<.85&&(n.leftHand=ra.copy(a),n.rightHand=ia.copy(o))}}else if(U===`aboard`){let e=ar===`heli`?ht.group:gt.group;ar===`heli`?(n.mode=`perch`,R_.copy(Dg),ea.set(0,Og,0,`YXZ`)):(n.mode=`cabin`,R_.set(zt,G_,Bt),ea.set(0,Ut,0,`YXZ`)),e.localToWorld(R_),$i.setFromEuler(ea).premultiply(e.quaternion),Zi.compose(R_,$i,na)}else U===`roof`?(n.mode=`cabin`,R_.set(K.x,K.y+G_,K.z),ea.set(0,Ut,0,`YXZ`),$i.setFromEuler(ea),Zi.compose(R_,$i,na)):U===`canopy`||U===`down`?(n.mode=U,R_.copy(K),R_.y+=md,ea.set(0,J,U===`canopy`?qt*.45:0,`XYZ`),$i.setFromEuler(ea),Zi.compose(R_,$i,na),U===`canopy`&&(n.leftHand=Yd(ra,-1,gn),n.rightHand=Yd(ia,1,_n),ra.y-=Gd,ia.y-=Gd)):(n.mode=`freefall`,qn&&U===`freefall`?(ea.set(Kt-Yt+.2*n.wing,Gt-Jt,qt,`YXZ`),$i.setFromEuler(ea),Zi.compose(S.position,$i,na),Zi.multiply(Qi.makeTranslation(0,0,-.25*n.wing))):Zi.compose(S.position,S.quaternion,na),nn&&U===`freefall`&&!n.gesture&&(ta.copy(Zi).invert(),Ct.playerGrips(ra,ia),n.leftHand=ra.applyMatrix4(ta),n.rightHand=ia.applyMatrix4(ta)));xt.update(Zi,n,t)}let sa=new G;function ca(){Dt.length=0,U!==`menu`&&U!==`cabin`&&U!==`aboard`&&U!==`roof`&&U!==`impact`&&Dt.push({feet:K,wing:bt.visible?bt:null}),Ct.casters(Dt),Et.update(Dt,S.position)}function la(e){let t=mf.at,n=`freefall`,r=1,o=0,s=0,c=!1,l=0,u=R_;if(U===`cabin`)n=`cabin`,r=0,H.localToWorld(u.set(zt,1.5,Bt)),z_.setFromEuler(B_.set(0,Ut,0,`YXZ`)).premultiply(H.quaternion);else if(U===`aboard`){let e=ar===`heli`?ht.group:gt.group;r=0,ar===`heli`?(n=`perch`,u.copy(Dg),B_.set(0,Og,0,`YXZ`)):(n=`cabin`,u.set(zt,G_,Bt),B_.set(0,Ut,0,`YXZ`)),e.localToWorld(u),z_.setFromEuler(B_).premultiply(e.quaternion)}else if(U===`roof`)n=`cabin`,r=0,u.set(K.x,K.y+G_,K.z),z_.setFromEuler(B_.set(0,Ut,0,`YXZ`));else if(U===`impact`)n=`hidden`,u.copy(K),z_.identity();else if(U===`canopy`||U===`down`||U===`malfunction`&&Xt===`twist`)n=U===`down`?`down`:`canopy`,r=0,c=U===`malfunction`,u.copy(K).y+=md,z_.setFromEuler(B_.set(0,J,U===`canopy`?qt*.45:0,`YXZ`)),U===`canopy`&&(l=$_((30-(K.y-X))/25,0,1));else if(U===`deploying`&&Xt===`none`){let e=ev($_($t/Si(),0,1));n=$t>.9?`canopy`:`freefall`,r=1-e,c=!0,u.copy(K).y+=Vt.lerp(.32,md,e),z_.setFromEuler(B_.set(-.18*(1-e),J,qt*.45*e,`YXZ`))}else if(Xt!==`none`)r=.35,c=!0,u.copy(K).y+=.9,z_.setFromEuler(B_.set(-.1,Gt,qt,`YXZ`));else{let e=ev($_((Y-fn)/(Rn===`base`?1.2:.7),0,1)),t=ar===`heli`||ar===`balloon`,n=ar===`plane`?1.45:ar===`heli`?.67:ar===`balloon`?.6:G_;if(u.copy(K).y+=Vt.lerp(n,.32,e),r=t?1:e,qn){s=O_(qn);let e=F_(q,a,i)*.85-.05-qn.pitch*.12;z_.setFromEuler(B_.set(Vt.lerp(-.18,e,s),qn.yaw,qn.bank*.85,`YXZ`))}else{o=$_((Math.hypot(q.x-a,q.z-i)-10)/18,0,1);let e=-.18+Math.min(0,Kt)*.75-.15*o+vr;z_.setFromEuler(B_.set(e,Gt,qt*.6+yr,`YXZ`))}}e[t.mode]=Sf.indexOf(n),e.set([u.x,u.y,u.z],t.eye),e.set([z_.x,z_.y,z_.z,z_.w],t.q),e[t.lean]=r,e[t.track]=o,e[t.wing]=s,e[t.reach]=+!!c,e[t.gesture]=Cf.indexOf(tn&&Y-hn<1.2?tn:null),e[t.gestureT]=Y-hn,e[t.forward]=Da?.forward??0,e[t.turn]=Da?.turn??0,e[t.flare]=l,e[t.air]=q.length(),e[t.walk]=jn,e[t.brakeL]=gn,e[t.brakeR]=_n}function ua(){if(U===`menu`||Y>Or||Dr>=0&&Y-Dr<1/20-1e-6)return;Dr=Y;let e=mf.at,t=new Float32Array(bf);t[e.t]=Y-Er.t0,t[e.phase]=xf.indexOf(U),la(t),t[e.canopy]=bt.visible?kr:0,t.set([bt.position.x,bt.position.y,bt.position.z],e.canopyPos);let n=bt.quaternion;t.set([n.x,n.y,n.z,n.w],e.canopyQ),t[e.reserve]=Cn===`reserve`||yn?1:0,t[e.streamer]=+!!At.visible,t.set([K.x,K.y,K.z],e.pos),t.set([q.x,q.y,q.z],e.vel),t[e.ride]=wf.indexOf(ar);let r=ar===`heli`?ht.group:ar===`balloon`?gt.group:ar===`plane`?H:null;r?(t.set([r.position.x,r.position.y,r.position.z],e.ridePos),t.set([r.quaternion.x,r.quaternion.y,r.quaternion.z,r.quaternion.w],e.rideQ),t[e.rideOn]=+!!r.visible):t[e.rideQ+3]=1,t[e.burn]=_r,_t.forEach((n,r)=>{let i=n.b.group;t.set([i.position.x,i.position.y,i.position.z,i.rotation.y],e.fleet+r*4)}),Ct.record(t),Er.push(t,U===`cabin`||U===`aboard`||U===`roof`)}let da=new un,fa=new G,pa=new G,ma=new G,ha={mode:`hidden`,forward:0,turn:0,leftHand:null,rightHand:null,gesture:null,gestureT:0,walk:0,flare:0,air:0,altFt:0,time:0,reaching:!1,lean:0,trackAmt:0,wing:0},ga=new Set([`chase`,`flyer`,`orbit`,`below`,`formation`,`ringsDown`,`wingChase`,`wingFront`]);function _a(t,n){let r=mf.at,s=Er.t0+t[r.t],c=Mr;Mr=xf[t[r.phase]]??`menu`;let l=ha;l.mode=Sf[t[r.mode]]??`hidden`,l.lean=t[r.lean],l.trackAmt=t[r.track],l.wing=t[r.wing],l.reaching=t[r.reach]===1,l.gesture=Cf[t[r.gesture]]??null,l.gestureT=t[r.gestureT],l.forward=t[r.forward],l.turn=t[r.turn],l.flare=t[r.flare],l.air=t[r.air],l.walk=t[r.walk],l.altFt=Math.max(0,t[r.pos+1])*e,l.time=s,l.leftHand=null,l.rightHand=null,l.mode===`canopy`&&!l.reaching&&(l.leftHand=Yd(pa,-1,t[r.brakeL]),l.rightHand=Yd(ma,1,t[r.brakeR]),pa.y-=Gd,ma.y-=Gd),da.compose(R_.fromArray(t,r.eye),z_.fromArray(t,r.q),na),St.update(da,l,n),xt.group.visible=!1;let u=t[r.canopy],d=0;Mr===`down`&&Pr>=0&&(d=ev($_((t[r.t]-Pr)/qd,0,1)),u=1-d*.8),bt.visible=u>.02,bt.visible&&(bt.position.fromArray(t,r.canopyPos),bt.quaternion.fromArray(t,r.canopyQ),Jd(bt,d),yt.setReserve(t[r.reserve]===1),yt.update(u,t[r.brakeL],t[r.brakeR])),(Mr===`deploying`||Mr===`canopy`)&&c!==Mr&&c!==`menu`&&T.fabric(),At.visible=t[r.streamer]===1,At.visible&&Ei(fa.fromArray(t,r.pos),s);let f=wf[t[r.ride]]??`roof`,p=t[r.rideOn]===1;f===`plane`?(H.position.fromArray(t,r.ridePos),H.quaternion.fromArray(t,r.rideQ)):f===`heli`?(ht.group.visible=p,ht.group.position.fromArray(t,r.ridePos),ht.group.quaternion.fromArray(t,r.rideQ),ht.group.updateMatrixWorld(),p&&ht.update(n,s,!1)):f===`balloon`&&(gt.group.visible=!0,gt.group.position.fromArray(t,r.ridePos),gt.group.quaternion.fromArray(t,r.rideQ),gt.group.updateMatrixWorld(),gt.update(n,s,t[r.burn]),_t.forEach((e,i)=>{e.b.group.visible=!0,e.b.group.position.fromArray(t,r.fleet+i*4),e.b.group.rotation.y=t[r.fleet+i*4+3],e.b.update(n,s,e.burn)})),ge.update(s),_e.update(s,S.position),Ct.play(t),Ct.draw(n,s),vt.rewind(s),vt.update(s,S.position),Dt.length=0,l.mode!==`hidden`&&Mr!==`cabin`&&Mr!==`aboard`&&Mr!==`roof`&&Dt.push({feet:fa.fromArray(t,r.pos),wing:bt.visible?bt:null}),Ct.casters(Dt),Et.update(Dt,S.position),Ot=wt.update(S,x.near,x.far);let m=Mr===`freefall`||Mr===`deploying`||Mr===`malfunction`,h=ga.has(Ar?.shot().kind??``);sa.set(t[r.vel]-a,t[r.vel+1],t[r.vel+2]-i);let g=m?$_(sa.length()/60,0,1):0;Tt.update(S.position,sa,C||!h?0:g*.45),T.setMuted(o.muted);let _=(e,t)=>$_(1-e.distanceTo(S.position)/t,0,1)**2;T.vehicle(ht.group.visible?.55*_(ht.group.position,700):0,gt.group.visible?t[r.burn]*_(gt.group.position,350):0);let v=_e.noise(S.position);T.traffic(v.jets,v.props);let y=h?1:_(fa.fromArray(t,r.pos),160);m?T.update(g*.32*y+.02,0,t[r.air]):Mr===`canopy`?T.update(.045,0,12):T.update(.03,0,8)}function va(e){return!Ar||!Ar.advance(e)?!1:(Er.sample(Ar.time(),jr),Ar.aim(jr,S,e),Yi(),_a(jr,e),!0)}function ya(){let e=_e.highlight(Er.t0+(Er.frames[0]?.[mf.at.t]??0),Y),t=Er.t0;return e&&{from:e.from-t,to:e.to-t,team:(e,n)=>_e.team(e+t,n)}}function ba(){if(!Fn||Ar||(Ar=o_(Er,{clear:Sa,rings:wr,show:ya()}),!Ar))return;Ct.record(Nr);let e=Er.frames.find(e=>xf[e[mf.at.phase]]===`down`);Pr=e?e[mf.at.t]:-1,Mr=`menu`,document.pointerLockElement&&document.exitPointerLock()}function xa(){Ar&&(Ar=null,bt.scale.setScalar(1),Ct.play(Nr),vt.rewind(1/0),St.group.visible=!1,bt.visible=!1,At.visible=!1,ki(0))}function Sa(e,t){for(let n=0;n<14&&xe.blocked(e.x,e.y-.6,e.z,.6,1.2);n++)e.lerp(t,.2);let n=xe.top(e.x,e.z,e.y+1)?.y1??0;e.y=Math.max(e.y,n+.8)}function Ca(){Ot=wt.update(S,x.near,x.far);let t=U===`freefall`||U===`deploying`||U===`malfunction`;(t||U===`canopy`)&&Ot>.6&&!kt&&(kt=!0,ai(`Through a cloud at ${Math.round(K.y*e).toLocaleString(`en-US`)} ft · real jumps keep clear of clouds`)),sa.set(q.x-a,q.y,q.z-i);let n=0;t?n=$_(sa.length()/60,0,1)*.55+Ot*.45:U===`canopy`&&(n=.12+Ot*.6),Tt.update(S.position,sa,C?0:n)}function wa(){U===`menu`&&Y>=ve&&(_e.pass(ve===0?Y-25:Y),ve=Y+150),U===`canopy`&&ye&&K.y>350&&_e.pass(Y)&&(ye=!1,be=!0,ai(`Air show · the jet team is coming down the shore`)),_e.update(Y,S.position)}function Ta(){T.setMuted(o.muted);let e=(e,t)=>$_(1-e.distanceTo(S.position)/t,0,1)**2,t=U!==`impact`;T.vehicle(t&&ht.group.visible?.55*e(ht.group.position,700):0,t&&gt.group.visible?_r*e(gt.group.position,350):0);let n=_e.noise(S.position);T.traffic(t?n.jets:0,t?n.props:0);let r=Math.abs(H.position.x-590)<90&&Rt.z>0&&H.position.z<-280;T.cabin(U===`cabin`,r?(-280-H.position.z)/46:null);let i=Math.hypot(q.x,q.y,q.z);U===`impact`?T.update(0,0,0):U===`menu`?T.update(.02,.045,20):U===`cabin`?T.update(Mn?.24:.035,Mn?.03:.11,Mn?40:10):U===`roof`?T.update(.08,0,9):U===`aboard`?T.update(ar===`heli`?.16:.012,0,ar===`heli`?18:4):U===`canopy`||U===`down`?T.update(.045,0,12):T.update($_(i/85,0,1)*.36,0,i)}let Ea=0,Da=null;function Oa(){Ci.update();let e=Math.min(Ci.getDelta(),.05),t=o.command;o.command=null,Ar&&t&&t!==`replayNext`&&t!==`replayEnd`&&xa(),t===`start`&&U===`menu`?(Tr=Math.random()*2**31|0,$r()):t===`again`?ii():t===`retry`?$r():t===`base`?ni():t===`replay`?ba():(t===`replayNext`&&Ar&&!Ar.next()||t===`replayEnd`)&&xa();let n=wi();Ar&&n.jumpEdge&&!Ar.next()&&xa(),Ar&&n.endEdge&&xa(),Da&&(n.jumpEdge||=Da.jumpEdge,n.pullEdge||=Da.pullEdge,n.cutEdge||=Da.cutEdge,n.reserveEdge||=Da.reserveEdge),Da=n,Ea+=e;let r=0;for(;Ea>=1/60&&r<5;)Da&&Ti(1/60,Ar?null:Da),Ar||ua(),Da&&(Da.jumpEdge=!1,Da.pullEdge=!1,Da.cutEdge=!1,Da.reserveEdge=!1),Ea-=1/60,r++;Ar&&!va(e)&&xa(),Ar||(Xi(),wa(),Ca(),oa(e),Ct.draw(e,Y),ca(),Ta()),Wi(Da?.forward??0),mt.update(e,{aboard:Ar?Mr===`cabin`:U===`menu`||U===`cabin`,green:Nn,spot:Tn,time:Y}),ka()}function ka(){let e=S.near,t=S.far;S.near=40,S.updateProjectionMatrix(),g.render(y,S);let n=y.background;y.background=null,O.visible=!1,g.autoClear=!1,g.clearDepth(),S.near=e,S.far=40.08,S.updateProjectionMatrix(),g.render(y,S),g.autoClear=!0,y.background=n,O.visible=!0,S.far=t,S.updateProjectionMatrix(),v.render()}function Aa(){let e=n.clientWidth||window.innerWidth,t=n.clientHeight||window.innerHeight;e<2||t<2||(S.aspect=e/t,S.updateProjectionMatrix(),g.setSize(e,t,!1))}let ja=new ResizeObserver(Aa);ja.observe(n),Aa();function Ma(e){let t=e.target?.tagName;t!==`INPUT`&&t!==`TEXTAREA`&&([`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),!e.repeat&&(Ir.add(e.code),zr.add(e.code),T.resume()))}function Na(e){Ir.delete(e.code)}function Pa(){Ir.clear(),zr.clear()}function Fa(e){document.pointerLockElement===n&&(Vr+=e.movementX,Hr+=e.movementY)}function Ia(){if(T.resume(),w||U===`menu`||Ar)return;let e=n.requestPointerLock({unadjustedMovement:!0});e&&typeof e.catch==`function`&&e.catch(()=>n.requestPointerLock())}let La=new Map;function Ra(e){T.resume();let t=n.getBoundingClientRect();for(let n of Array.from(e.changedTouches)){let e=n.clientX-t.left;La.set(n.identifier,{x:n.clientX,y:n.clientY,look:e>t.width*.38})}}function za(e){let t=n.getBoundingClientRect();for(let n of Array.from(e.changedTouches)){let r=La.get(n.identifier);r&&(r.look&&(Vr+=n.clientX-r.x,Hr+=n.clientY-r.y,e.cancelable&&e.preventDefault()),r.x=n.clientX,r.y=n.clientY,r.look=n.clientX-t.left>t.width*.38||r.look)}}function Ba(e){for(let t of Array.from(e.changedTouches))La.delete(t.identifier)}window.addEventListener(`keydown`,Ma),window.addEventListener(`keyup`,Na),window.addEventListener(`blur`,Pa),window.addEventListener(`pointerdown`,()=>T.resume()),n.addEventListener(`mousemove`,Fa),n.addEventListener(`click`,Ia),n.addEventListener(`touchstart`,Ra,{passive:!0}),n.addEventListener(`touchmove`,za,{passive:!1}),n.addEventListener(`touchend`,Ba);let Va={getYaw:()=>U===`canopy`||U===`down`?J:Gt,getSpeed:()=>Math.hypot(q.x,q.z),setKeys:e=>{Lr=new Set(e)},setSteer:e=>{Br=e},setPhase:e=>bi(e),getPhase:()=>U,getAltFt:()=>U===`cabin`||U===`menu`?H.position.y*e:Math.max(0,K.y)*e,getWarning:()=>Jr.banner,inDoor:()=>Mn,getLocalX:()=>zt,isDocked:()=>nn,getPos:()=>[K.x,K.y,K.z],getOutcome:()=>Fn,getTumble:()=>[vr,yr,Cr??-1],addLook:(e,t)=>{Vr+=e,Hr+=t}};return window.__controlsTest=Va,g.setAnimationLoop(Oa),()=>{g.setAnimationLoop(null),Ci.disconnect(),ja.disconnect(),window.removeEventListener(`keydown`,Ma),window.removeEventListener(`keyup`,Na),window.removeEventListener(`blur`,Pa),n.removeEventListener(`mousemove`,Fa),n.removeEventListener(`click`,Ia),n.removeEventListener(`touchstart`,Ra),n.removeEventListener(`touchmove`,za),n.removeEventListener(`touchend`,Ba),T.dispose(),b.dispose(),yt.dispose(),wt.dispose(),Tt.dispose(),Et.dispose(),mt.dispose(),ht.dispose(),gt.dispose(),_t.forEach(e=>e.b.dispose()),vt.dispose(),xt.dispose(),St.dispose(),Ct.dispose(),_e.dispose(),oe.dispose(),window.__controlsTest===Va&&delete window.__controlsTest;let e=new Set,t=new Set;y.traverse(n=>{let r=n;r.geometry&&e.add(r.geometry);let i=r.material;Array.isArray(i)?i.forEach(e=>t.add(e)):i&&t.add(i)}),e.forEach(e=>e.dispose()),t.forEach(e=>{let t=e;t.map?.dispose(),t.emissiveMap?.dispose(),t.alphaMap?.dispose(),e.dispose()}),v.dispose(),g.dispose()}}function pv(e){let t=e;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var mv=new Q({color:`#1a1c1f`,roughness:.88}),hv=new Q({color:`#b7c2cb`,roughness:.4,metalness:.45}),gv=new Qr({color:`#e7eef4`,transparent:!0,opacity:.22,side:2,depthWrite:!1});function _v(e,t,n,r){let i=new Z(new qi(.28,.28,.16,12),mv);i.rotation.z=Math.PI/2,i.position.set(t,n,r);let a=new Z(new qi(.04,.045,.42,5),hv);a.position.set(t,n+.46,r),e.add(i,a)}function vv(){return new Z(new Ki(.78,18),gv)}function yv(){let e=new Ln,t=new Q({color:`#22262b`,roughness:.4});for(let n=0;n<3;n++){let r=new Z(new Gi(1.55,.07,.05),t);r.rotation.z=n/3*Math.PI*2,e.add(r)}return e}export{fv as mountGame};