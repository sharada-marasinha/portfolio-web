function wC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function Xg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rS={exports:{}},mf={},iS={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=Symbol.for("react.element"),SC=Symbol.for("react.portal"),TC=Symbol.for("react.fragment"),EC=Symbol.for("react.strict_mode"),MC=Symbol.for("react.profiler"),AC=Symbol.for("react.provider"),RC=Symbol.for("react.context"),CC=Symbol.for("react.forward_ref"),PC=Symbol.for("react.suspense"),LC=Symbol.for("react.memo"),kC=Symbol.for("react.lazy"),vv=Symbol.iterator;function DC(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var sS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oS=Object.assign,aS={};function Ja(t,e,n){this.props=t,this.context=e,this.refs=aS,this.updater=n||sS}Ja.prototype.isReactComponent={};Ja.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ja.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lS(){}lS.prototype=Ja.prototype;function Kg(t,e,n){this.props=t,this.context=e,this.refs=aS,this.updater=n||sS}var Yg=Kg.prototype=new lS;Yg.constructor=Kg;oS(Yg,Ja.prototype);Yg.isPureReactComponent=!0;var xv=Array.isArray,cS=Object.prototype.hasOwnProperty,$g={current:null},uS={key:!0,ref:!0,__self:!0,__source:!0};function dS(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cS.call(e,r)&&!uS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ic,type:t,key:s,ref:o,props:i,_owner:$g.current}}function IC(t,e){return{$$typeof:Ic,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ic}function NC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _v=/\/+/g;function ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NC(""+t.key):e.toString(36)}function Zu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ic:case SC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ih(o,0):r,xv(i)?(n="",t!=null&&(n=t.replace(_v,"$&/")+"/"),Zu(i,e,n,"",function(c){return c})):i!=null&&(qg(i)&&(i=IC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_v,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",xv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ih(s,a);o+=Zu(s,e,n,l,i)}else if(l=DC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ih(s,a++),o+=Zu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qc(t,e,n){if(t==null)return t;var r=[],i=0;return Zu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function OC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dn={current:null},Qu={transition:null},FC={ReactCurrentDispatcher:Dn,ReactCurrentBatchConfig:Qu,ReactCurrentOwner:$g};ot.Children={map:Qc,forEach:function(t,e,n){Qc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qc(t,function(){e++}),e},toArray:function(t){return Qc(t,function(e){return e})||[]},only:function(t){if(!qg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=Ja;ot.Fragment=TC;ot.Profiler=MC;ot.PureComponent=Kg;ot.StrictMode=EC;ot.Suspense=PC;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FC;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=oS({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$g.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cS.call(e,l)&&!uS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ic,type:t.type,key:i,ref:s,props:r,_owner:o}};ot.createContext=function(t){return t={$$typeof:RC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AC,_context:t},t.Consumer=t};ot.createElement=dS;ot.createFactory=function(t){var e=dS.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:CC,render:t}};ot.isValidElement=qg;ot.lazy=function(t){return{$$typeof:kC,_payload:{_status:-1,_result:t},_init:OC}};ot.memo=function(t,e){return{$$typeof:LC,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=Qu.transition;Qu.transition={};try{t()}finally{Qu.transition=e}};ot.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ot.useCallback=function(t,e){return Dn.current.useCallback(t,e)};ot.useContext=function(t){return Dn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Dn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Dn.current.useEffect(t,e)};ot.useId=function(){return Dn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Dn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Dn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Dn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Dn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Dn.current.useReducer(t,e,n)};ot.useRef=function(t){return Dn.current.useRef(t)};ot.useState=function(t){return Dn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Dn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Dn.current.useTransition()};ot.version="18.2.0";iS.exports=ot;var C=iS.exports;const Ei=Xg(C),fS=wC({__proto__:null,default:Ei},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UC=C,BC=Symbol.for("react.element"),zC=Symbol.for("react.fragment"),VC=Object.prototype.hasOwnProperty,HC=UC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GC={key:!0,ref:!0,__self:!0,__source:!0};function hS(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VC.call(e,r)&&!GC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BC,type:t,key:s,ref:o,props:i,_owner:HC.current}}mf.Fragment=zC;mf.jsx=hS;mf.jsxs=hS;rS.exports=mf;var P=rS.exports,bv={},pS={exports:{}},rr={},mS={exports:{}},gS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var W=L.length;L.push(j);e:for(;0<W;){var Q=W-1>>>1,oe=L[Q];if(0<i(oe,j))L[Q]=j,L[W]=oe,W=Q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],W=L.pop();if(W!==j){L[0]=W;e:for(var Q=0,oe=L.length,ve=oe>>>1;Q<ve;){var $=2*(Q+1)-1,ne=L[$],fe=$+1,le=L[fe];if(0>i(ne,W))fe<oe&&0>i(le,ne)?(L[Q]=le,L[fe]=W,Q=fe):(L[Q]=ne,L[$]=W,Q=$);else if(fe<oe&&0>i(le,W))L[Q]=le,L[fe]=W,Q=fe;else break e}}return j}function i(L,j){var W=L.sortIndex-j.sortIndex;return W!==0?W:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,h=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=L)r(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(L){if(y=!1,_(L),!m)if(n(l)!==null)m=!0,B(w);else{var j=n(c);j!==null&&G(x,j.startTime-L)}}function w(L,j){m=!1,y&&(y=!1,p(R),R=-1),h=!0;var W=f;try{for(_(j),d=n(l);d!==null&&(!(d.expirationTime>j)||L&&!D());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,f=d.priorityLevel;var oe=Q(d.expirationTime<=j);j=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&r(l),_(j)}else r(l);d=n(l)}if(d!==null)var ve=!0;else{var $=n(c);$!==null&&G(x,$.startTime-j),ve=!1}return ve}finally{d=null,f=W,h=!1}}var T=!1,M=null,R=-1,S=5,b=-1;function D(){return!(t.unstable_now()-b<S)}function F(){if(M!==null){var L=t.unstable_now();b=L;var j=!0;try{j=M(!0,L)}finally{j?N():(T=!1,M=null)}}else T=!1}var N;if(typeof v=="function")N=function(){v(F)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,O=I.port2;I.port1.onmessage=F,N=function(){O.postMessage(null)}}else N=function(){g(F,0)};function B(L){M=L,T||(T=!0,N())}function G(L,j){R=g(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,B(w))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var W=f;f=j;try{return L()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=f;f=L;try{return j()}finally{f=W}},t.unstable_scheduleCallback=function(L,j,W){var Q=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Q+W:Q):W=Q,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=W+oe,L={id:u++,callback:j,priorityLevel:L,startTime:W,expirationTime:oe,sortIndex:-1},W>Q?(L.sortIndex=W,e(c,L),n(l)===null&&L===n(c)&&(y?(p(R),R=-1):y=!0,G(x,W-Q))):(L.sortIndex=oe,e(l,L),m||h||(m=!0,B(w))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var j=f;return function(){var W=f;f=j;try{return L.apply(this,arguments)}finally{f=W}}}})(gS);mS.exports=gS;var jC=mS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yS=C,er=jC;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vS=new Set,ac={};function Ro(t,e){Pa(t,e),Pa(t+"Capture",e)}function Pa(t,e){for(ac[t]=e,t=0;t<e.length;t++)vS.add(e[t])}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Up=Object.prototype.hasOwnProperty,WC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wv={},Sv={};function XC(t){return Up.call(Sv,t)?!0:Up.call(wv,t)?!1:WC.test(t)?Sv[t]=!0:(wv[t]=!0,!1)}function KC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YC(t,e,n,r){if(e===null||typeof e>"u"||KC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function In(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var fn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){fn[t]=new In(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];fn[e]=new In(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){fn[t]=new In(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){fn[t]=new In(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){fn[t]=new In(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){fn[t]=new In(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){fn[t]=new In(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){fn[t]=new In(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){fn[t]=new In(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zg=/[\-:]([a-z])/g;function Qg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zg,Qg);fn[e]=new In(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zg,Qg);fn[e]=new In(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zg,Qg);fn[e]=new In(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){fn[t]=new In(t,1,!1,t.toLowerCase(),null,!1,!1)});fn.xlinkHref=new In("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){fn[t]=new In(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jg(t,e,n,r){var i=fn.hasOwnProperty(e)?fn[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YC(e,n,i,r)&&(n=null),r||i===null?XC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gi=yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jc=Symbol.for("react.element"),qo=Symbol.for("react.portal"),Zo=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),Bp=Symbol.for("react.profiler"),xS=Symbol.for("react.provider"),_S=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),n0=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),bS=Symbol.for("react.offscreen"),Tv=Symbol.iterator;function pl(t){return t===null||typeof t!="object"?null:(t=Tv&&t[Tv]||t["@@iterator"],typeof t=="function"?t:null)}var Ot=Object.assign,sh;function Nl(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Nl(t):""}function $C(t){switch(t.tag){case 5:return Nl(t.type);case 16:return Nl("Lazy");case 13:return Nl("Suspense");case 19:return Nl("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function Hp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zo:return"Fragment";case qo:return"Portal";case Bp:return"Profiler";case e0:return"StrictMode";case zp:return"Suspense";case Vp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _S:return(t.displayName||"Context")+".Consumer";case xS:return(t._context.displayName||"Context")+".Provider";case t0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case n0:return e=t.displayName||null,e!==null?e:Hp(t.type)||"Memo";case ss:e=t._payload,t=t._init;try{return Hp(t(e))}catch{}}return null}function qC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hp(e);case 8:return e===e0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Es(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function wS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZC(t){var e=wS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eu(t){t._valueTracker||(t._valueTracker=ZC(t))}function SS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=wS(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gp(t,e){var n=e.checked;return Ot({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ev(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Es(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function TS(t,e){e=e.checked,e!=null&&Jg(t,"checked",e,!1)}function jp(t,e){TS(t,e);var n=Es(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wp(t,e.type,Es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wp(t,e,n){(e!=="number"||xd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ol=Array.isArray;function va(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Es(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Ot({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Ol(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Es(n)}}function ES(t,e){var n=Es(e.value),r=Es(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tu,AS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tu=tu||document.createElement("div"),tu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lc(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QC=["Webkit","ms","Moz","O"];Object.keys(Gl).forEach(function(t){QC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gl[e]=Gl[t]})});function RS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gl.hasOwnProperty(t)&&Gl[t]?(""+e).trim():e+"px"}function CS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=RS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var JC=Ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yp(t,e){if(e){if(JC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function $p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qp=null;function r0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zp=null,xa=null,_a=null;function Cv(t){if(t=Fc(t)){if(typeof Zp!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=_f(e),Zp(t.stateNode,t.type,e))}}function PS(t){xa?_a?_a.push(t):_a=[t]:xa=t}function LS(){if(xa){var t=xa,e=_a;if(_a=xa=null,Cv(t),e)for(t=0;t<e.length;t++)Cv(e[t])}}function kS(t,e){return t(e)}function DS(){}var lh=!1;function IS(t,e,n){if(lh)return t(e,n);lh=!0;try{return kS(t,e,n)}finally{lh=!1,(xa!==null||_a!==null)&&(DS(),LS())}}function cc(t,e){var n=t.stateNode;if(n===null)return null;var r=_f(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Qp=!1;if(Ii)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){Qp=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{Qp=!1}function eP(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var jl=!1,_d=null,bd=!1,Jp=null,tP={onError:function(t){jl=!0,_d=t}};function nP(t,e,n,r,i,s,o,a,l){jl=!1,_d=null,eP.apply(tP,arguments)}function rP(t,e,n,r,i,s,o,a,l){if(nP.apply(this,arguments),jl){if(jl){var c=_d;jl=!1,_d=null}else throw Error(ue(198));bd||(bd=!0,Jp=c)}}function Co(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function NS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pv(t){if(Co(t)!==t)throw Error(ue(188))}function iP(t){var e=t.alternate;if(!e){if(e=Co(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pv(i),t;if(s===r)return Pv(i),e;s=s.sibling}throw Error(ue(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==r)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function OS(t){return t=iP(t),t!==null?FS(t):null}function FS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=FS(t);if(e!==null)return e;t=t.sibling}return null}var US=er.unstable_scheduleCallback,Lv=er.unstable_cancelCallback,sP=er.unstable_shouldYield,oP=er.unstable_requestPaint,Vt=er.unstable_now,aP=er.unstable_getCurrentPriorityLevel,i0=er.unstable_ImmediatePriority,BS=er.unstable_UserBlockingPriority,wd=er.unstable_NormalPriority,lP=er.unstable_LowPriority,zS=er.unstable_IdlePriority,gf=null,Yr=null;function cP(t){if(Yr&&typeof Yr.onCommitFiberRoot=="function")try{Yr.onCommitFiberRoot(gf,t,void 0,(t.current.flags&128)===128)}catch{}}var Ir=Math.clz32?Math.clz32:fP,uP=Math.log,dP=Math.LN2;function fP(t){return t>>>=0,t===0?32:31-(uP(t)/dP|0)|0}var nu=64,ru=4194304;function Fl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fl(a):(s&=o,s!==0&&(r=Fl(s)))}else o=n&~i,o!==0?r=Fl(o):s!==0&&(r=Fl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ir(e),i=1<<n,r|=t[n],e&=~i;return r}function hP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ir(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function em(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function VS(){var t=nu;return nu<<=1,!(nu&4194240)&&(nu=64),t}function ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ir(e),t[e]=n}function mP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ir(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function s0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ir(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var yt=0;function HS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var GS,o0,jS,WS,XS,tm=!1,iu=[],ps=null,ms=null,gs=null,uc=new Map,dc=new Map,as=[],gP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":uc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dc.delete(e.pointerId)}}function gl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Fc(e),e!==null&&o0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yP(t,e,n,r,i){switch(e){case"focusin":return ps=gl(ps,t,e,n,r,i),!0;case"dragenter":return ms=gl(ms,t,e,n,r,i),!0;case"mouseover":return gs=gl(gs,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uc.set(s,gl(uc.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,dc.set(s,gl(dc.get(s)||null,t,e,n,r,i)),!0}return!1}function KS(t){var e=io(t.target);if(e!==null){var n=Co(e);if(n!==null){if(e=n.tag,e===13){if(e=NS(n),e!==null){t.blockedOn=e,XS(t.priority,function(){jS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qp=r,n.target.dispatchEvent(r),qp=null}else return e=Fc(n),e!==null&&o0(e),t.blockedOn=n,!1;e.shift()}return!0}function Dv(t,e,n){Ju(t)&&n.delete(e)}function vP(){tm=!1,ps!==null&&Ju(ps)&&(ps=null),ms!==null&&Ju(ms)&&(ms=null),gs!==null&&Ju(gs)&&(gs=null),uc.forEach(Dv),dc.forEach(Dv)}function yl(t,e){t.blockedOn===e&&(t.blockedOn=null,tm||(tm=!0,er.unstable_scheduleCallback(er.unstable_NormalPriority,vP)))}function fc(t){function e(i){return yl(i,t)}if(0<iu.length){yl(iu[0],t);for(var n=1;n<iu.length;n++){var r=iu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ps!==null&&yl(ps,t),ms!==null&&yl(ms,t),gs!==null&&yl(gs,t),uc.forEach(e),dc.forEach(e),n=0;n<as.length;n++)r=as[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<as.length&&(n=as[0],n.blockedOn===null);)KS(n),n.blockedOn===null&&as.shift()}var ba=Gi.ReactCurrentBatchConfig,Td=!0;function xP(t,e,n,r){var i=yt,s=ba.transition;ba.transition=null;try{yt=1,a0(t,e,n,r)}finally{yt=i,ba.transition=s}}function _P(t,e,n,r){var i=yt,s=ba.transition;ba.transition=null;try{yt=4,a0(t,e,n,r)}finally{yt=i,ba.transition=s}}function a0(t,e,n,r){if(Td){var i=nm(t,e,n,r);if(i===null)xh(t,e,r,Ed,n),kv(t,r);else if(yP(i,t,e,n,r))r.stopPropagation();else if(kv(t,r),e&4&&-1<gP.indexOf(t)){for(;i!==null;){var s=Fc(i);if(s!==null&&GS(s),s=nm(t,e,n,r),s===null&&xh(t,e,r,Ed,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xh(t,e,r,null,n)}}var Ed=null;function nm(t,e,n,r){if(Ed=null,t=r0(r),t=io(t),t!==null)if(e=Co(t),e===null)t=null;else if(n=e.tag,n===13){if(t=NS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ed=t,null}function YS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aP()){case i0:return 1;case BS:return 4;case wd:case lP:return 16;case zS:return 536870912;default:return 16}default:return 16}}var ds=null,l0=null,ed=null;function $S(){if(ed)return ed;var t,e=l0,n=e.length,r,i="value"in ds?ds.value:ds.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ed=i.slice(t,1<r?1-r:void 0)}function td(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function su(){return!0}function Iv(){return!1}function ir(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?su:Iv,this.isPropagationStopped=Iv,this}return Ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=su)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=su)},persist:function(){},isPersistent:su}),e}var el={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},c0=ir(el),Oc=Ot({},el,{view:0,detail:0}),bP=ir(Oc),uh,dh,vl,yf=Ot({},Oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:u0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vl&&(vl&&t.type==="mousemove"?(uh=t.screenX-vl.screenX,dh=t.screenY-vl.screenY):dh=uh=0,vl=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:dh}}),Nv=ir(yf),wP=Ot({},yf,{dataTransfer:0}),SP=ir(wP),TP=Ot({},Oc,{relatedTarget:0}),fh=ir(TP),EP=Ot({},el,{animationName:0,elapsedTime:0,pseudoElement:0}),MP=ir(EP),AP=Ot({},el,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RP=ir(AP),CP=Ot({},el,{data:0}),Ov=ir(CP),PP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kP[t])?!!e[t]:!1}function u0(){return DP}var IP=Ot({},Oc,{key:function(t){if(t.key){var e=PP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=td(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:u0,charCode:function(t){return t.type==="keypress"?td(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?td(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),NP=ir(IP),OP=Ot({},yf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fv=ir(OP),FP=Ot({},Oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:u0}),UP=ir(FP),BP=Ot({},el,{propertyName:0,elapsedTime:0,pseudoElement:0}),zP=ir(BP),VP=Ot({},yf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),HP=ir(VP),GP=[9,13,27,32],d0=Ii&&"CompositionEvent"in window,Wl=null;Ii&&"documentMode"in document&&(Wl=document.documentMode);var jP=Ii&&"TextEvent"in window&&!Wl,qS=Ii&&(!d0||Wl&&8<Wl&&11>=Wl),Uv=" ",Bv=!1;function ZS(t,e){switch(t){case"keyup":return GP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qo=!1;function WP(t,e){switch(t){case"compositionend":return QS(e);case"keypress":return e.which!==32?null:(Bv=!0,Uv);case"textInput":return t=e.data,t===Uv&&Bv?null:t;default:return null}}function XP(t,e){if(Qo)return t==="compositionend"||!d0&&ZS(t,e)?(t=$S(),ed=l0=ds=null,Qo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qS&&e.locale!=="ko"?null:e.data;default:return null}}var KP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KP[t.type]:e==="textarea"}function JS(t,e,n,r){PS(r),e=Md(e,"onChange"),0<e.length&&(n=new c0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xl=null,hc=null;function YP(t){uT(t,0)}function vf(t){var e=ta(t);if(SS(e))return t}function $P(t,e){if(t==="change")return e}var eT=!1;if(Ii){var hh;if(Ii){var ph="oninput"in document;if(!ph){var Vv=document.createElement("div");Vv.setAttribute("oninput","return;"),ph=typeof Vv.oninput=="function"}hh=ph}else hh=!1;eT=hh&&(!document.documentMode||9<document.documentMode)}function Hv(){Xl&&(Xl.detachEvent("onpropertychange",tT),hc=Xl=null)}function tT(t){if(t.propertyName==="value"&&vf(hc)){var e=[];JS(e,hc,t,r0(t)),IS(YP,e)}}function qP(t,e,n){t==="focusin"?(Hv(),Xl=e,hc=n,Xl.attachEvent("onpropertychange",tT)):t==="focusout"&&Hv()}function ZP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vf(hc)}function QP(t,e){if(t==="click")return vf(e)}function JP(t,e){if(t==="input"||t==="change")return vf(e)}function eL(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fr=typeof Object.is=="function"?Object.is:eL;function pc(t,e){if(Fr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Up.call(e,i)||!Fr(t[i],e[i]))return!1}return!0}function Gv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var n=Gv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gv(n)}}function nT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rT(){for(var t=window,e=xd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xd(t.document)}return e}function f0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tL(t){var e=rT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nT(n.ownerDocument.documentElement,n)){if(r!==null&&f0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jv(n,s);var o=jv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nL=Ii&&"documentMode"in document&&11>=document.documentMode,Jo=null,rm=null,Kl=null,im=!1;function Wv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;im||Jo==null||Jo!==xd(r)||(r=Jo,"selectionStart"in r&&f0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kl&&pc(Kl,r)||(Kl=r,r=Md(rm,"onSelect"),0<r.length&&(e=new c0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Jo)))}function ou(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ea={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},mh={},iT={};Ii&&(iT=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function xf(t){if(mh[t])return mh[t];if(!ea[t])return t;var e=ea[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iT)return mh[t]=e[n];return t}var sT=xf("animationend"),oT=xf("animationiteration"),aT=xf("animationstart"),lT=xf("transitionend"),cT=new Map,Xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Is(t,e){cT.set(t,e),Ro(e,[t])}for(var gh=0;gh<Xv.length;gh++){var yh=Xv[gh],rL=yh.toLowerCase(),iL=yh[0].toUpperCase()+yh.slice(1);Is(rL,"on"+iL)}Is(sT,"onAnimationEnd");Is(oT,"onAnimationIteration");Is(aT,"onAnimationStart");Is("dblclick","onDoubleClick");Is("focusin","onFocus");Is("focusout","onBlur");Is(lT,"onTransitionEnd");Pa("onMouseEnter",["mouseout","mouseover"]);Pa("onMouseLeave",["mouseout","mouseover"]);Pa("onPointerEnter",["pointerout","pointerover"]);Pa("onPointerLeave",["pointerout","pointerover"]);Ro("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ro("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ro("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ro("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ro("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sL=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ul));function Kv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rP(r,e,void 0,t),t.currentTarget=null}function uT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Kv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Kv(i,a,c),s=l}}}if(bd)throw t=Jp,bd=!1,Jp=null,t}function At(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var r=t+"__bubble";n.has(r)||(dT(e,t,2,!1),n.add(r))}function vh(t,e,n){var r=0;e&&(r|=4),dT(n,t,r,e)}var au="_reactListening"+Math.random().toString(36).slice(2);function mc(t){if(!t[au]){t[au]=!0,vS.forEach(function(n){n!=="selectionchange"&&(sL.has(n)||vh(n,!1,t),vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[au]||(e[au]=!0,vh("selectionchange",!1,e))}}function dT(t,e,n,r){switch(YS(e)){case 1:var i=xP;break;case 4:i=_P;break;default:i=a0}n=i.bind(null,e,n,t),i=void 0,!Qp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=io(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}IS(function(){var c=s,u=r0(n),d=[];e:{var f=cT.get(t);if(f!==void 0){var h=c0,m=t;switch(t){case"keypress":if(td(n)===0)break e;case"keydown":case"keyup":h=NP;break;case"focusin":m="focus",h=fh;break;case"focusout":m="blur",h=fh;break;case"beforeblur":case"afterblur":h=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=SP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=UP;break;case sT:case oT:case aT:h=MP;break;case lT:h=zP;break;case"scroll":h=bP;break;case"wheel":h=HP;break;case"copy":case"cut":case"paste":h=RP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fv}var y=(e&4)!==0,g=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,p!==null&&(x=cc(v,p),x!=null&&y.push(gc(v,x,_)))),g)break;v=v.return}0<y.length&&(f=new h(f,m,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==qp&&(m=n.relatedTarget||n.fromElement)&&(io(m)||m[Ni]))break e;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?io(m):null,m!==null&&(g=Co(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(y=Nv,x="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Fv,x="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?f:ta(h),_=m==null?f:ta(m),f=new y(x,v+"leave",h,n,u),f.target=g,f.relatedTarget=_,x=null,io(u)===c&&(y=new y(p,v+"enter",m,n,u),y.target=_,y.relatedTarget=g,x=y),g=x,h&&m)t:{for(y=h,p=m,v=0,_=y;_;_=Do(_))v++;for(_=0,x=p;x;x=Do(x))_++;for(;0<v-_;)y=Do(y),v--;for(;0<_-v;)p=Do(p),_--;for(;v--;){if(y===p||p!==null&&y===p.alternate)break t;y=Do(y),p=Do(p)}y=null}else y=null;h!==null&&Yv(d,f,h,y,!1),m!==null&&g!==null&&Yv(d,g,m,y,!0)}}e:{if(f=c?ta(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var w=$P;else if(zv(f))if(eT)w=JP;else{w=ZP;var T=qP}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=QP);if(w&&(w=w(t,c))){JS(d,w,n,u);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Wp(f,"number",f.value)}switch(T=c?ta(c):window,t){case"focusin":(zv(T)||T.contentEditable==="true")&&(Jo=T,rm=c,Kl=null);break;case"focusout":Kl=rm=Jo=null;break;case"mousedown":im=!0;break;case"contextmenu":case"mouseup":case"dragend":im=!1,Wv(d,n,u);break;case"selectionchange":if(nL)break;case"keydown":case"keyup":Wv(d,n,u)}var M;if(d0)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qo?ZS(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(qS&&n.locale!=="ko"&&(Qo||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qo&&(M=$S()):(ds=u,l0="value"in ds?ds.value:ds.textContent,Qo=!0)),T=Md(c,R),0<T.length&&(R=new Ov(R,t,null,n,u),d.push({event:R,listeners:T}),M?R.data=M:(M=QS(n),M!==null&&(R.data=M)))),(M=jP?WP(t,n):XP(t,n))&&(c=Md(c,"onBeforeInput"),0<c.length&&(u=new Ov("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=M))}uT(d,e)})}function gc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Md(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=cc(t,n),s!=null&&r.unshift(gc(t,s,i)),s=cc(t,e),s!=null&&r.push(gc(t,s,i))),t=t.return}return r}function Do(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=cc(n,s),l!=null&&o.unshift(gc(n,l,a))):i||(l=cc(n,s),l!=null&&o.push(gc(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oL=/\r\n?/g,aL=/\u0000|\uFFFD/g;function $v(t){return(typeof t=="string"?t:""+t).replace(oL,`
`).replace(aL,"")}function lu(t,e,n){if(e=$v(e),$v(t)!==e&&n)throw Error(ue(425))}function Ad(){}var sm=null,om=null;function am(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lm=typeof setTimeout=="function"?setTimeout:void 0,lL=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,cL=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(t){return qv.resolve(null).then(t).catch(uL)}:lm;function uL(t){setTimeout(function(){throw t})}function _h(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fc(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fc(e)}function ys(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var tl=Math.random().toString(36).slice(2),jr="__reactFiber$"+tl,yc="__reactProps$"+tl,Ni="__reactContainer$"+tl,cm="__reactEvents$"+tl,dL="__reactListeners$"+tl,fL="__reactHandles$"+tl;function io(t){var e=t[jr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[jr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zv(t);t!==null;){if(n=t[jr])return n;t=Zv(t)}return e}t=n,n=t.parentNode}return null}function Fc(t){return t=t[jr]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function _f(t){return t[yc]||null}var um=[],na=-1;function Ns(t){return{current:t}}function Ct(t){0>na||(t.current=um[na],um[na]=null,na--)}function St(t,e){na++,um[na]=t.current,t.current=e}var Ms={},Tn=Ns(Ms),Vn=Ns(!1),yo=Ms;function La(t,e){var n=t.type.contextTypes;if(!n)return Ms;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Hn(t){return t=t.childContextTypes,t!=null}function Rd(){Ct(Vn),Ct(Tn)}function Qv(t,e,n){if(Tn.current!==Ms)throw Error(ue(168));St(Tn,e),St(Vn,n)}function fT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ue(108,qC(t)||"Unknown",i));return Ot({},n,r)}function Cd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ms,yo=Tn.current,St(Tn,t),St(Vn,Vn.current),!0}function Jv(t,e,n){var r=t.stateNode;if(!r)throw Error(ue(169));n?(t=fT(t,e,yo),r.__reactInternalMemoizedMergedChildContext=t,Ct(Vn),Ct(Tn),St(Tn,t)):Ct(Vn),St(Vn,n)}var vi=null,bf=!1,bh=!1;function hT(t){vi===null?vi=[t]:vi.push(t)}function hL(t){bf=!0,hT(t)}function Os(){if(!bh&&vi!==null){bh=!0;var t=0,e=yt;try{var n=vi;for(yt=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vi=null,bf=!1}catch(i){throw vi!==null&&(vi=vi.slice(t+1)),US(i0,Os),i}finally{yt=e,bh=!1}}return null}var ra=[],ia=0,Pd=null,Ld=0,dr=[],fr=0,vo=null,_i=1,bi="";function $s(t,e){ra[ia++]=Ld,ra[ia++]=Pd,Pd=t,Ld=e}function pT(t,e,n){dr[fr++]=_i,dr[fr++]=bi,dr[fr++]=vo,vo=t;var r=_i;t=bi;var i=32-Ir(r)-1;r&=~(1<<i),n+=1;var s=32-Ir(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_i=1<<32-Ir(e)+i|n<<i|r,bi=s+t}else _i=1<<s|n<<i|r,bi=t}function h0(t){t.return!==null&&($s(t,1),pT(t,1,0))}function p0(t){for(;t===Pd;)Pd=ra[--ia],ra[ia]=null,Ld=ra[--ia],ra[ia]=null;for(;t===vo;)vo=dr[--fr],dr[fr]=null,bi=dr[--fr],dr[fr]=null,_i=dr[--fr],dr[fr]=null}var Qn=null,Zn=null,kt=!1,Rr=null;function mT(t,e){var n=mr(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ex(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=ys(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qn=t,Zn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vo!==null?{id:_i,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mr(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qn=t,Zn=null,!0):!1;default:return!1}}function dm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(kt){var e=Zn;if(e){var n=e;if(!ex(t,e)){if(dm(t))throw Error(ue(418));e=ys(n.nextSibling);var r=Qn;e&&ex(t,e)?mT(r,n):(t.flags=t.flags&-4097|2,kt=!1,Qn=t)}}else{if(dm(t))throw Error(ue(418));t.flags=t.flags&-4097|2,kt=!1,Qn=t}}}function tx(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qn=t}function cu(t){if(t!==Qn)return!1;if(!kt)return tx(t),kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!am(t.type,t.memoizedProps)),e&&(e=Zn)){if(dm(t))throw gT(),Error(ue(418));for(;e;)mT(t,e),e=ys(e.nextSibling)}if(tx(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zn=ys(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zn=null}}else Zn=Qn?ys(t.stateNode.nextSibling):null;return!0}function gT(){for(var t=Zn;t;)t=ys(t.nextSibling)}function ka(){Zn=Qn=null,kt=!1}function m0(t){Rr===null?Rr=[t]:Rr.push(t)}var pL=Gi.ReactCurrentBatchConfig;function Mr(t,e){if(t&&t.defaultProps){e=Ot({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var kd=Ns(null),Dd=null,sa=null,g0=null;function y0(){g0=sa=Dd=null}function v0(t){var e=kd.current;Ct(kd),t._currentValue=e}function hm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function wa(t,e){Dd=t,g0=sa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bn=!0),t.firstContext=null)}function xr(t){var e=t._currentValue;if(g0!==t)if(t={context:t,memoizedValue:e,next:null},sa===null){if(Dd===null)throw Error(ue(308));sa=t,Dd.dependencies={lanes:0,firstContext:t}}else sa=sa.next=t;return e}var so=null;function x0(t){so===null?so=[t]:so.push(t)}function yT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,x0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Oi(t,r)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var os=!1;function _0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vs(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ct&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Oi(t,n)}return i=r.interleaved,i===null?(e.next=e,x0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Oi(t,n)}function nd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,s0(t,n)}}function nx(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Id(t,e,n,r){var i=t.updateQueue;os=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,h=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(h,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(h,d,f):m,f==null)break e;d=Ot({},d,f);break e;case 2:os=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_o|=o,t.lanes=o,t.memoizedState=d}}function rx(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ue(191,i));i.call(r)}}}var xT=new yS.Component().refs;function pm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ot({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wf={isMounted:function(t){return(t=t._reactInternals)?Co(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ln(),i=_s(t),s=Mi(r,i);s.payload=e,n!=null&&(s.callback=n),e=vs(t,s,i),e!==null&&(Nr(e,t,i,r),nd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ln(),i=_s(t),s=Mi(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vs(t,s,i),e!==null&&(Nr(e,t,i,r),nd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ln(),r=_s(t),i=Mi(n,r);i.tag=2,e!=null&&(i.callback=e),e=vs(t,i,r),e!==null&&(Nr(e,t,r,n),nd(e,t,r))}};function ix(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!pc(n,r)||!pc(i,s):!0}function _T(t,e,n){var r=!1,i=Ms,s=e.contextType;return typeof s=="object"&&s!==null?s=xr(s):(i=Hn(e)?yo:Tn.current,r=e.contextTypes,s=(r=r!=null)?La(t,i):Ms),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sx(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wf.enqueueReplaceState(e,e.state,null)}function mm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=xT,_0(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xr(s):(s=Hn(e)?yo:Tn.current,i.context=La(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pm(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wf.enqueueReplaceState(i,i.state,null),Id(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var r=n.stateNode}if(!r)throw Error(ue(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===xT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function uu(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ox(t){var e=t._init;return e(t._payload)}function bT(t){function e(p,v){if(t){var _=p.deletions;_===null?(p.deletions=[v],p.flags|=16):_.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function r(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(p,v){return p=bs(p,v),p.index=0,p.sibling=null,p}function s(p,v,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<v?(p.flags|=2,v):_):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,v,_,x){return v===null||v.tag!==6?(v=Rh(_,p.mode,x),v.return=p,v):(v=i(v,_),v.return=p,v)}function l(p,v,_,x){var w=_.type;return w===Zo?u(p,v,_.props.children,x,_.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ss&&ox(w)===v.type)?(x=i(v,_.props),x.ref=xl(p,v,_),x.return=p,x):(x=ld(_.type,_.key,_.props,null,p.mode,x),x.ref=xl(p,v,_),x.return=p,x)}function c(p,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Ch(_,p.mode,x),v.return=p,v):(v=i(v,_.children||[]),v.return=p,v)}function u(p,v,_,x,w){return v===null||v.tag!==7?(v=fo(_,p.mode,x,w),v.return=p,v):(v=i(v,_),v.return=p,v)}function d(p,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Rh(""+v,p.mode,_),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jc:return _=ld(v.type,v.key,v.props,null,p.mode,_),_.ref=xl(p,null,v),_.return=p,_;case qo:return v=Ch(v,p.mode,_),v.return=p,v;case ss:var x=v._init;return d(p,x(v._payload),_)}if(Ol(v)||pl(v))return v=fo(v,p.mode,_,null),v.return=p,v;uu(p,v)}return null}function f(p,v,_,x){var w=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(p,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Jc:return _.key===w?l(p,v,_,x):null;case qo:return _.key===w?c(p,v,_,x):null;case ss:return w=_._init,f(p,v,w(_._payload),x)}if(Ol(_)||pl(_))return w!==null?null:u(p,v,_,x,null);uu(p,_)}return null}function h(p,v,_,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(_)||null,a(v,p,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jc:return p=p.get(x.key===null?_:x.key)||null,l(v,p,x,w);case qo:return p=p.get(x.key===null?_:x.key)||null,c(v,p,x,w);case ss:var T=x._init;return h(p,v,_,T(x._payload),w)}if(Ol(x)||pl(x))return p=p.get(_)||null,u(v,p,x,w,null);uu(v,x)}return null}function m(p,v,_,x){for(var w=null,T=null,M=v,R=v=0,S=null;M!==null&&R<_.length;R++){M.index>R?(S=M,M=null):S=M.sibling;var b=f(p,M,_[R],x);if(b===null){M===null&&(M=S);break}t&&M&&b.alternate===null&&e(p,M),v=s(b,v,R),T===null?w=b:T.sibling=b,T=b,M=S}if(R===_.length)return n(p,M),kt&&$s(p,R),w;if(M===null){for(;R<_.length;R++)M=d(p,_[R],x),M!==null&&(v=s(M,v,R),T===null?w=M:T.sibling=M,T=M);return kt&&$s(p,R),w}for(M=r(p,M);R<_.length;R++)S=h(M,p,R,_[R],x),S!==null&&(t&&S.alternate!==null&&M.delete(S.key===null?R:S.key),v=s(S,v,R),T===null?w=S:T.sibling=S,T=S);return t&&M.forEach(function(D){return e(p,D)}),kt&&$s(p,R),w}function y(p,v,_,x){var w=pl(_);if(typeof w!="function")throw Error(ue(150));if(_=w.call(_),_==null)throw Error(ue(151));for(var T=w=null,M=v,R=v=0,S=null,b=_.next();M!==null&&!b.done;R++,b=_.next()){M.index>R?(S=M,M=null):S=M.sibling;var D=f(p,M,b.value,x);if(D===null){M===null&&(M=S);break}t&&M&&D.alternate===null&&e(p,M),v=s(D,v,R),T===null?w=D:T.sibling=D,T=D,M=S}if(b.done)return n(p,M),kt&&$s(p,R),w;if(M===null){for(;!b.done;R++,b=_.next())b=d(p,b.value,x),b!==null&&(v=s(b,v,R),T===null?w=b:T.sibling=b,T=b);return kt&&$s(p,R),w}for(M=r(p,M);!b.done;R++,b=_.next())b=h(M,p,R,b.value,x),b!==null&&(t&&b.alternate!==null&&M.delete(b.key===null?R:b.key),v=s(b,v,R),T===null?w=b:T.sibling=b,T=b);return t&&M.forEach(function(F){return e(p,F)}),kt&&$s(p,R),w}function g(p,v,_,x){if(typeof _=="object"&&_!==null&&_.type===Zo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Jc:e:{for(var w=_.key,T=v;T!==null;){if(T.key===w){if(w=_.type,w===Zo){if(T.tag===7){n(p,T.sibling),v=i(T,_.props.children),v.return=p,p=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ss&&ox(w)===T.type){n(p,T.sibling),v=i(T,_.props),v.ref=xl(p,T,_),v.return=p,p=v;break e}n(p,T);break}else e(p,T);T=T.sibling}_.type===Zo?(v=fo(_.props.children,p.mode,x,_.key),v.return=p,p=v):(x=ld(_.type,_.key,_.props,null,p.mode,x),x.ref=xl(p,v,_),x.return=p,p=x)}return o(p);case qo:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(p,v.sibling),v=i(v,_.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=Ch(_,p.mode,x),v.return=p,p=v}return o(p);case ss:return T=_._init,g(p,v,T(_._payload),x)}if(Ol(_))return m(p,v,_,x);if(pl(_))return y(p,v,_,x);uu(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(p,v.sibling),v=i(v,_),v.return=p,p=v):(n(p,v),v=Rh(_,p.mode,x),v.return=p,p=v),o(p)):n(p,v)}return g}var Da=bT(!0),wT=bT(!1),Uc={},$r=Ns(Uc),vc=Ns(Uc),xc=Ns(Uc);function oo(t){if(t===Uc)throw Error(ue(174));return t}function b0(t,e){switch(St(xc,e),St(vc,t),St($r,Uc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kp(e,t)}Ct($r),St($r,e)}function Ia(){Ct($r),Ct(vc),Ct(xc)}function ST(t){oo(xc.current);var e=oo($r.current),n=Kp(e,t.type);e!==n&&(St(vc,t),St($r,n))}function w0(t){vc.current===t&&(Ct($r),Ct(vc))}var Dt=Ns(0);function Nd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wh=[];function S0(){for(var t=0;t<wh.length;t++)wh[t]._workInProgressVersionPrimary=null;wh.length=0}var rd=Gi.ReactCurrentDispatcher,Sh=Gi.ReactCurrentBatchConfig,xo=0,Nt=null,$t=null,en=null,Od=!1,Yl=!1,_c=0,mL=0;function pn(){throw Error(ue(321))}function T0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fr(t[n],e[n]))return!1;return!0}function E0(t,e,n,r,i,s){if(xo=s,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rd.current=t===null||t.memoizedState===null?xL:_L,t=n(r,i),Yl){s=0;do{if(Yl=!1,_c=0,25<=s)throw Error(ue(301));s+=1,en=$t=null,e.updateQueue=null,rd.current=bL,t=n(r,i)}while(Yl)}if(rd.current=Fd,e=$t!==null&&$t.next!==null,xo=0,en=$t=Nt=null,Od=!1,e)throw Error(ue(300));return t}function M0(){var t=_c!==0;return _c=0,t}function Hr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?Nt.memoizedState=en=t:en=en.next=t,en}function _r(){if($t===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var e=en===null?Nt.memoizedState:en.next;if(e!==null)en=e,$t=t;else{if(t===null)throw Error(ue(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},en===null?Nt.memoizedState=en=t:en=en.next=t}return en}function bc(t,e){return typeof e=="function"?e(t):e}function Th(t){var e=_r(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var r=$t,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((xo&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Nt.lanes|=u,_o|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Fr(r,e.memoizedState)||(Bn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Nt.lanes|=s,_o|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eh(t){var e=_r(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fr(s,e.memoizedState)||(Bn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function TT(){}function ET(t,e){var n=Nt,r=_r(),i=e(),s=!Fr(r.memoizedState,i);if(s&&(r.memoizedState=i,Bn=!0),r=r.queue,A0(RT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||en!==null&&en.memoizedState.tag&1){if(n.flags|=2048,wc(9,AT.bind(null,n,r,i,e),void 0,null),nn===null)throw Error(ue(349));xo&30||MT(n,e,i)}return i}function MT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function AT(t,e,n,r){e.value=n,e.getSnapshot=r,CT(e)&&PT(t)}function RT(t,e,n){return n(function(){CT(e)&&PT(t)})}function CT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fr(t,n)}catch{return!0}}function PT(t){var e=Oi(t,1);e!==null&&Nr(e,t,1,-1)}function ax(t){var e=Hr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bc,lastRenderedState:t},e.queue=t,t=t.dispatch=vL.bind(null,Nt,t),[e.memoizedState,t]}function wc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Nt.updateQueue,e===null?(e={lastEffect:null,stores:null},Nt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LT(){return _r().memoizedState}function id(t,e,n,r){var i=Hr();Nt.flags|=t,i.memoizedState=wc(1|e,n,void 0,r===void 0?null:r)}function Sf(t,e,n,r){var i=_r();r=r===void 0?null:r;var s=void 0;if($t!==null){var o=$t.memoizedState;if(s=o.destroy,r!==null&&T0(r,o.deps)){i.memoizedState=wc(e,n,s,r);return}}Nt.flags|=t,i.memoizedState=wc(1|e,n,s,r)}function lx(t,e){return id(8390656,8,t,e)}function A0(t,e){return Sf(2048,8,t,e)}function kT(t,e){return Sf(4,2,t,e)}function DT(t,e){return Sf(4,4,t,e)}function IT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function NT(t,e,n){return n=n!=null?n.concat([t]):null,Sf(4,4,IT.bind(null,e,t),n)}function R0(){}function OT(t,e){var n=_r();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function FT(t,e){var n=_r();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function UT(t,e,n){return xo&21?(Fr(n,e)||(n=VS(),Nt.lanes|=n,_o|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bn=!0),t.memoizedState=n)}function gL(t,e){var n=yt;yt=n!==0&&4>n?n:4,t(!0);var r=Sh.transition;Sh.transition={};try{t(!1),e()}finally{yt=n,Sh.transition=r}}function BT(){return _r().memoizedState}function yL(t,e,n){var r=_s(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zT(t))VT(e,n);else if(n=yT(t,e,n,r),n!==null){var i=Ln();Nr(n,t,r,i),HT(n,e,r)}}function vL(t,e,n){var r=_s(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zT(t))VT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fr(a,o)){var l=e.interleaved;l===null?(i.next=i,x0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yT(t,e,i,r),n!==null&&(i=Ln(),Nr(n,t,r,i),HT(n,e,r))}}function zT(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function VT(t,e){Yl=Od=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function HT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,s0(t,n)}}var Fd={readContext:xr,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},xL={readContext:xr,useCallback:function(t,e){return Hr().memoizedState=[t,e===void 0?null:e],t},useContext:xr,useEffect:lx,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,id(4194308,4,IT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return id(4194308,4,t,e)},useInsertionEffect:function(t,e){return id(4,2,t,e)},useMemo:function(t,e){var n=Hr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yL.bind(null,Nt,t),[r.memoizedState,t]},useRef:function(t){var e=Hr();return t={current:t},e.memoizedState=t},useState:ax,useDebugValue:R0,useDeferredValue:function(t){return Hr().memoizedState=t},useTransition:function(){var t=ax(!1),e=t[0];return t=gL.bind(null,t[1]),Hr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Nt,i=Hr();if(kt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),nn===null)throw Error(ue(349));xo&30||MT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,lx(RT.bind(null,r,s,t),[t]),r.flags|=2048,wc(9,AT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hr(),e=nn.identifierPrefix;if(kt){var n=bi,r=_i;n=(r&~(1<<32-Ir(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_c++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mL++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_L={readContext:xr,useCallback:OT,useContext:xr,useEffect:A0,useImperativeHandle:NT,useInsertionEffect:kT,useLayoutEffect:DT,useMemo:FT,useReducer:Th,useRef:LT,useState:function(){return Th(bc)},useDebugValue:R0,useDeferredValue:function(t){var e=_r();return UT(e,$t.memoizedState,t)},useTransition:function(){var t=Th(bc)[0],e=_r().memoizedState;return[t,e]},useMutableSource:TT,useSyncExternalStore:ET,useId:BT,unstable_isNewReconciler:!1},bL={readContext:xr,useCallback:OT,useContext:xr,useEffect:A0,useImperativeHandle:NT,useInsertionEffect:kT,useLayoutEffect:DT,useMemo:FT,useReducer:Eh,useRef:LT,useState:function(){return Eh(bc)},useDebugValue:R0,useDeferredValue:function(t){var e=_r();return $t===null?e.memoizedState=t:UT(e,$t.memoizedState,t)},useTransition:function(){var t=Eh(bc)[0],e=_r().memoizedState;return[t,e]},useMutableSource:TT,useSyncExternalStore:ET,useId:BT,unstable_isNewReconciler:!1};function Na(t,e){try{var n="",r=e;do n+=$C(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wL=typeof WeakMap=="function"?WeakMap:Map;function GT(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bd||(Bd=!0,Mm=r),gm(t,e)},n}function jT(t,e,n){n=Mi(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){gm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gm(t,e),typeof r!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cx(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new wL;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OL.bind(null,t,e,n),e.then(t,t))}function ux(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dx(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,vs(n,e,1))),n.lanes|=1),t)}var SL=Gi.ReactCurrentOwner,Bn=!1;function Rn(t,e,n,r){e.child=t===null?wT(e,null,n,r):Da(e,t.child,n,r)}function fx(t,e,n,r,i){n=n.render;var s=e.ref;return wa(e,i),r=E0(t,e,n,r,s,i),n=M0(),t!==null&&!Bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fi(t,e,i)):(kt&&n&&h0(e),e.flags|=1,Rn(t,e,r,i),e.child)}function hx(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!O0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,WT(t,e,s,r,i)):(t=ld(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pc,n(o,r)&&t.ref===e.ref)return Fi(t,e,i)}return e.flags|=1,t=bs(s,r),t.ref=e.ref,t.return=e,e.child=t}function WT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(pc(s,r)&&t.ref===e.ref)if(Bn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bn=!0);else return e.lanes=t.lanes,Fi(t,e,i)}return ym(t,e,n,r,i)}function XT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},St(aa,qn),qn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,St(aa,qn),qn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,St(aa,qn),qn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,St(aa,qn),qn|=r;return Rn(t,e,i,n),e.child}function KT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ym(t,e,n,r,i){var s=Hn(n)?yo:Tn.current;return s=La(e,s),wa(e,i),n=E0(t,e,n,r,s,i),r=M0(),t!==null&&!Bn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Fi(t,e,i)):(kt&&r&&h0(e),e.flags|=1,Rn(t,e,n,i),e.child)}function px(t,e,n,r,i){if(Hn(n)){var s=!0;Cd(e)}else s=!1;if(wa(e,i),e.stateNode===null)sd(t,e),_T(e,n,r),mm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xr(c):(c=Hn(n)?yo:Tn.current,c=La(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&sx(e,o,r,c),os=!1;var f=e.memoizedState;o.state=f,Id(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Vn.current||os?(typeof u=="function"&&(pm(e,n,u,r),l=e.memoizedState),(a=os||ix(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,vT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Mr(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xr(l):(l=Hn(n)?yo:Tn.current,l=La(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&sx(e,o,r,l),os=!1,f=e.memoizedState,o.state=f,Id(e,r,o,i);var m=e.memoizedState;a!==d||f!==m||Vn.current||os?(typeof h=="function"&&(pm(e,n,h,r),m=e.memoizedState),(c=os||ix(e,n,c,r,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return vm(t,e,n,r,s,i)}function vm(t,e,n,r,i,s){KT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jv(e,n,!1),Fi(t,e,s);r=e.stateNode,SL.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Da(e,t.child,null,s),e.child=Da(e,null,a,s)):Rn(t,e,a,s),e.memoizedState=r.state,i&&Jv(e,n,!0),e.child}function YT(t){var e=t.stateNode;e.pendingContext?Qv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qv(t,e.context,!1),b0(t,e.containerInfo)}function mx(t,e,n,r,i){return ka(),m0(i),e.flags|=256,Rn(t,e,n,r),e.child}var xm={dehydrated:null,treeContext:null,retryLane:0};function _m(t){return{baseLanes:t,cachePool:null,transitions:null}}function $T(t,e,n){var r=e.pendingProps,i=Dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),St(Dt,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mf(o,r,0,null),t=fo(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_m(n),e.memoizedState=xm,t):C0(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TL(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=bs(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bs(a,s):(s=fo(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_m(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xm,r}return s=t.child,t=s.sibling,r=bs(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function C0(t,e){return e=Mf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function du(t,e,n,r){return r!==null&&m0(r),Da(e,t.child,null,n),t=C0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TL(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mh(Error(ue(422))),du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mf({mode:"visible",children:r.children},i,0,null),s=fo(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Da(e,t.child,null,o),e.child.memoizedState=_m(o),e.memoizedState=xm,s);if(!(e.mode&1))return du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(ue(419)),r=Mh(s,r,void 0),du(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bn||a){if(r=nn,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Oi(t,i),Nr(r,t,i,-1))}return N0(),r=Mh(Error(ue(421))),du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FL.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zn=ys(i.nextSibling),Qn=e,kt=!0,Rr=null,t!==null&&(dr[fr++]=_i,dr[fr++]=bi,dr[fr++]=vo,_i=t.id,bi=t.overflow,vo=e),e=C0(e,r.children),e.flags|=4096,e)}function gx(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hm(t.return,e,n)}function Ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rn(t,e,r.children,n),r=Dt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gx(t,n,e);else if(t.tag===19)gx(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(St(Dt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ah(e,!0,n,null,s);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sd(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_o|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=bs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EL(t,e,n){switch(e.tag){case 3:YT(e),ka();break;case 5:ST(e);break;case 1:Hn(e.type)&&Cd(e);break;case 4:b0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;St(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(St(Dt,Dt.current&1),e.flags|=128,null):n&e.child.childLanes?$T(t,e,n):(St(Dt,Dt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);St(Dt,Dt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return qT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),St(Dt,Dt.current),r)break;return null;case 22:case 23:return e.lanes=0,XT(t,e,n)}return Fi(t,e,n)}var ZT,bm,QT,JT;ZT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bm=function(){};QT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,oo($r.current);var s=null;switch(n){case"input":i=Gp(t,i),r=Gp(t,r),s=[];break;case"select":i=Ot({},i,{value:void 0}),r=Ot({},r,{value:void 0}),s=[];break;case"textarea":i=Xp(t,i),r=Xp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ad)}Yp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ac.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ac.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&At("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};JT=function(t,e,n,r){n!==r&&(e.flags|=4)};function _l(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ML(t,e,n){var r=e.pendingProps;switch(p0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(e),null;case 1:return Hn(e.type)&&Rd(),mn(e),null;case 3:return r=e.stateNode,Ia(),Ct(Vn),Ct(Tn),S0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rr!==null&&(Cm(Rr),Rr=null))),bm(t,e),mn(e),null;case 5:w0(e);var i=oo(xc.current);if(n=e.type,t!==null&&e.stateNode!=null)QT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ue(166));return mn(e),null}if(t=oo($r.current),cu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jr]=e,r[yc]=s,t=(e.mode&1)!==0,n){case"dialog":At("cancel",r),At("close",r);break;case"iframe":case"object":case"embed":At("load",r);break;case"video":case"audio":for(i=0;i<Ul.length;i++)At(Ul[i],r);break;case"source":At("error",r);break;case"img":case"image":case"link":At("error",r),At("load",r);break;case"details":At("toggle",r);break;case"input":Ev(r,s),At("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},At("invalid",r);break;case"textarea":Av(r,s),At("invalid",r)}Yp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lu(r.textContent,a,t),i=["children",""+a]):ac.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&At("scroll",r)}switch(n){case"input":eu(r),Mv(r,s,!0);break;case"textarea":eu(r),Rv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ad)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jr]=e,t[yc]=r,ZT(t,e,!1,!1),e.stateNode=t;e:{switch(o=$p(n,r),n){case"dialog":At("cancel",t),At("close",t),i=r;break;case"iframe":case"object":case"embed":At("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ul.length;i++)At(Ul[i],t);i=r;break;case"source":At("error",t),i=r;break;case"img":case"image":case"link":At("error",t),At("load",t),i=r;break;case"details":At("toggle",t),i=r;break;case"input":Ev(t,r),i=Gp(t,r),At("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ot({},r,{value:void 0}),At("invalid",t);break;case"textarea":Av(t,r),i=Xp(t,r),At("invalid",t);break;default:i=r}Yp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?CS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&AS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lc(t,l):typeof l=="number"&&lc(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ac.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",t):l!=null&&Jg(t,s,l,o))}switch(n){case"input":eu(t),Mv(t,r,!1);break;case"textarea":eu(t),Rv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Es(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?va(t,!!r.multiple,s,!1):r.defaultValue!=null&&va(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ad)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mn(e),null;case 6:if(t&&e.stateNode!=null)JT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ue(166));if(n=oo(xc.current),oo($r.current),cu(e)){if(r=e.stateNode,n=e.memoizedProps,r[jr]=e,(s=r.nodeValue!==n)&&(t=Qn,t!==null))switch(t.tag){case 3:lu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jr]=e,e.stateNode=r}return mn(e),null;case 13:if(Ct(Dt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Zn!==null&&e.mode&1&&!(e.flags&128))gT(),ka(),e.flags|=98560,s=!1;else if(s=cu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[jr]=e}else ka(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mn(e),s=!1}else Rr!==null&&(Cm(Rr),Rr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Dt.current&1?qt===0&&(qt=3):N0())),e.updateQueue!==null&&(e.flags|=4),mn(e),null);case 4:return Ia(),bm(t,e),t===null&&mc(e.stateNode.containerInfo),mn(e),null;case 10:return v0(e.type._context),mn(e),null;case 17:return Hn(e.type)&&Rd(),mn(e),null;case 19:if(Ct(Dt),s=e.memoizedState,s===null)return mn(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_l(s,!1);else{if(qt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nd(t),o!==null){for(e.flags|=128,_l(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return St(Dt,Dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Vt()>Oa&&(e.flags|=128,r=!0,_l(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nd(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_l(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!kt)return mn(e),null}else 2*Vt()-s.renderingStartTime>Oa&&n!==1073741824&&(e.flags|=128,r=!0,_l(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Vt(),e.sibling=null,n=Dt.current,St(Dt,r?n&1|2:n&1),e):(mn(e),null);case 22:case 23:return I0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qn&1073741824&&(mn(e),e.subtreeFlags&6&&(e.flags|=8192)):mn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function AL(t,e){switch(p0(e),e.tag){case 1:return Hn(e.type)&&Rd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ia(),Ct(Vn),Ct(Tn),S0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return w0(e),null;case 13:if(Ct(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ka()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ct(Dt),null;case 4:return Ia(),null;case 10:return v0(e.type._context),null;case 22:case 23:return I0(),null;case 24:return null;default:return null}}var fu=!1,_n=!1,RL=typeof WeakSet=="function"?WeakSet:Set,Re=null;function oa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Bt(t,e,r)}else n.current=null}function wm(t,e,n){try{n()}catch(r){Bt(t,e,r)}}var yx=!1;function CL(t,e){if(sm=Td,t=rT(),f0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(om={focusedElem:t,selectionRange:n},Td=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Mr(e.type,y),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(x){Bt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return m=yx,yx=!1,m}function $l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&wm(e,n,s)}i=i.next}while(i!==r)}}function Tf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Sm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eE(t){var e=t.alternate;e!==null&&(t.alternate=null,eE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jr],delete e[yc],delete e[cm],delete e[dL],delete e[fL])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tE(t){return t.tag===5||t.tag===3||t.tag===4}function vx(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ad));else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}var on=null,Ar=!1;function Ki(t,e,n){for(n=n.child;n!==null;)nE(t,e,n),n=n.sibling}function nE(t,e,n){if(Yr&&typeof Yr.onCommitFiberUnmount=="function")try{Yr.onCommitFiberUnmount(gf,n)}catch{}switch(n.tag){case 5:_n||oa(n,e);case 6:var r=on,i=Ar;on=null,Ki(t,e,n),on=r,Ar=i,on!==null&&(Ar?(t=on,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):on.removeChild(n.stateNode));break;case 18:on!==null&&(Ar?(t=on,n=n.stateNode,t.nodeType===8?_h(t.parentNode,n):t.nodeType===1&&_h(t,n),fc(t)):_h(on,n.stateNode));break;case 4:r=on,i=Ar,on=n.stateNode.containerInfo,Ar=!0,Ki(t,e,n),on=r,Ar=i;break;case 0:case 11:case 14:case 15:if(!_n&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wm(n,e,o),i=i.next}while(i!==r)}Ki(t,e,n);break;case 1:if(!_n&&(oa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Bt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(_n=(r=_n)||n.memoizedState!==null,Ki(t,e,n),_n=r):Ki(t,e,n);break;default:Ki(t,e,n)}}function xx(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RL),e.forEach(function(r){var i=UL.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wr(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:on=a.stateNode,Ar=!1;break e;case 3:on=a.stateNode.containerInfo,Ar=!0;break e;case 4:on=a.stateNode.containerInfo,Ar=!0;break e}a=a.return}if(on===null)throw Error(ue(160));nE(s,o,i),on=null,Ar=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Bt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rE(e,t),e=e.sibling}function rE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wr(e,t),Vr(t),r&4){try{$l(3,t,t.return),Tf(3,t)}catch(y){Bt(t,t.return,y)}try{$l(5,t,t.return)}catch(y){Bt(t,t.return,y)}}break;case 1:wr(e,t),Vr(t),r&512&&n!==null&&oa(n,n.return);break;case 5:if(wr(e,t),Vr(t),r&512&&n!==null&&oa(n,n.return),t.flags&32){var i=t.stateNode;try{lc(i,"")}catch(y){Bt(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&TS(i,s),$p(a,o);var c=$p(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?CS(i,d):u==="dangerouslySetInnerHTML"?AS(i,d):u==="children"?lc(i,d):Jg(i,u,d,c)}switch(a){case"input":jp(i,s);break;case"textarea":ES(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?va(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?va(i,!!s.multiple,s.defaultValue,!0):va(i,!!s.multiple,s.multiple?[]:"",!1))}i[yc]=s}catch(y){Bt(t,t.return,y)}}break;case 6:if(wr(e,t),Vr(t),r&4){if(t.stateNode===null)throw Error(ue(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Bt(t,t.return,y)}}break;case 3:if(wr(e,t),Vr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fc(e.containerInfo)}catch(y){Bt(t,t.return,y)}break;case 4:wr(e,t),Vr(t);break;case 13:wr(e,t),Vr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(k0=Vt())),r&4&&xx(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(_n=(c=_n)||u,wr(e,t),_n=c):wr(e,t),Vr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(d=Re=u;Re!==null;){switch(f=Re,h=f.child,f.tag){case 0:case 11:case 14:case 15:$l(4,f,f.return);break;case 1:oa(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){Bt(r,n,y)}}break;case 5:oa(f,f.return);break;case 22:if(f.memoizedState!==null){bx(d);continue}}h!==null?(h.return=f,Re=h):bx(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=RS("display",o))}catch(y){Bt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Bt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wr(e,t),Vr(t),r&4&&xx(t);break;case 21:break;default:wr(e,t),Vr(t)}}function Vr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tE(n)){var r=n;break e}n=n.return}throw Error(ue(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lc(i,""),r.flags&=-33);var s=vx(t);Em(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vx(t);Tm(t,a,o);break;default:throw Error(ue(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PL(t,e,n){Re=t,iE(t)}function iE(t,e,n){for(var r=(t.mode&1)!==0;Re!==null;){var i=Re,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_n;a=fu;var c=_n;if(fu=o,(_n=l)&&!c)for(Re=i;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?wx(i):l!==null?(l.return=o,Re=l):wx(i);for(;s!==null;)Re=s,iE(s),s=s.sibling;Re=i,fu=a,_n=c}_x(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Re=s):_x(t)}}function _x(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_n||Tf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_n)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mr(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rx(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rx(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&fc(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}_n||e.flags&512&&Sm(e)}catch(f){Bt(e,e.return,f)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function bx(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function wx(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tf(4,e)}catch(l){Bt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Bt(e,i,l)}}var s=e.return;try{Sm(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{Sm(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var LL=Math.ceil,Ud=Gi.ReactCurrentDispatcher,P0=Gi.ReactCurrentOwner,vr=Gi.ReactCurrentBatchConfig,ct=0,nn=null,jt=null,dn=0,qn=0,aa=Ns(0),qt=0,Sc=null,_o=0,Ef=0,L0=0,ql=null,Un=null,k0=0,Oa=1/0,pi=null,Bd=!1,Mm=null,xs=null,hu=!1,fs=null,zd=0,Zl=0,Am=null,od=-1,ad=0;function Ln(){return ct&6?Vt():od!==-1?od:od=Vt()}function _s(t){return t.mode&1?ct&2&&dn!==0?dn&-dn:pL.transition!==null?(ad===0&&(ad=VS()),ad):(t=yt,t!==0||(t=window.event,t=t===void 0?16:YS(t.type)),t):1}function Nr(t,e,n,r){if(50<Zl)throw Zl=0,Am=null,Error(ue(185));Nc(t,n,r),(!(ct&2)||t!==nn)&&(t===nn&&(!(ct&2)&&(Ef|=n),qt===4&&ls(t,dn)),Gn(t,r),n===1&&ct===0&&!(e.mode&1)&&(Oa=Vt()+500,bf&&Os()))}function Gn(t,e){var n=t.callbackNode;pP(t,e);var r=Sd(t,t===nn?dn:0);if(r===0)n!==null&&Lv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lv(n),e===1)t.tag===0?hL(Sx.bind(null,t)):hT(Sx.bind(null,t)),cL(function(){!(ct&6)&&Os()}),n=null;else{switch(HS(r)){case 1:n=i0;break;case 4:n=BS;break;case 16:n=wd;break;case 536870912:n=zS;break;default:n=wd}n=fE(n,sE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sE(t,e){if(od=-1,ad=0,ct&6)throw Error(ue(327));var n=t.callbackNode;if(Sa()&&t.callbackNode!==n)return null;var r=Sd(t,t===nn?dn:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vd(t,r);else{e=r;var i=ct;ct|=2;var s=aE();(nn!==t||dn!==e)&&(pi=null,Oa=Vt()+500,uo(t,e));do try{IL();break}catch(a){oE(t,a)}while(!0);y0(),Ud.current=s,ct=i,jt!==null?e=0:(nn=null,dn=0,e=qt)}if(e!==0){if(e===2&&(i=em(t),i!==0&&(r=i,e=Rm(t,i))),e===1)throw n=Sc,uo(t,0),ls(t,r),Gn(t,Vt()),n;if(e===6)ls(t,r);else{if(i=t.current.alternate,!(r&30)&&!kL(i)&&(e=Vd(t,r),e===2&&(s=em(t),s!==0&&(r=s,e=Rm(t,s))),e===1))throw n=Sc,uo(t,0),ls(t,r),Gn(t,Vt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ue(345));case 2:qs(t,Un,pi);break;case 3:if(ls(t,r),(r&130023424)===r&&(e=k0+500-Vt(),10<e)){if(Sd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ln(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=lm(qs.bind(null,t,Un,pi),e);break}qs(t,Un,pi);break;case 4:if(ls(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ir(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Vt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LL(r/1960))-r,10<r){t.timeoutHandle=lm(qs.bind(null,t,Un,pi),r);break}qs(t,Un,pi);break;case 5:qs(t,Un,pi);break;default:throw Error(ue(329))}}}return Gn(t,Vt()),t.callbackNode===n?sE.bind(null,t):null}function Rm(t,e){var n=ql;return t.current.memoizedState.isDehydrated&&(uo(t,e).flags|=256),t=Vd(t,e),t!==2&&(e=Un,Un=n,e!==null&&Cm(e)),t}function Cm(t){Un===null?Un=t:Un.push.apply(Un,t)}function kL(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ls(t,e){for(e&=~L0,e&=~Ef,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ir(e),r=1<<n;t[n]=-1,e&=~r}}function Sx(t){if(ct&6)throw Error(ue(327));Sa();var e=Sd(t,0);if(!(e&1))return Gn(t,Vt()),null;var n=Vd(t,e);if(t.tag!==0&&n===2){var r=em(t);r!==0&&(e=r,n=Rm(t,r))}if(n===1)throw n=Sc,uo(t,0),ls(t,e),Gn(t,Vt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qs(t,Un,pi),Gn(t,Vt()),null}function D0(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Oa=Vt()+500,bf&&Os())}}function bo(t){fs!==null&&fs.tag===0&&!(ct&6)&&Sa();var e=ct;ct|=1;var n=vr.transition,r=yt;try{if(vr.transition=null,yt=1,t)return t()}finally{yt=r,vr.transition=n,ct=e,!(ct&6)&&Os()}}function I0(){qn=aa.current,Ct(aa)}function uo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lL(n)),jt!==null)for(n=jt.return;n!==null;){var r=n;switch(p0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rd();break;case 3:Ia(),Ct(Vn),Ct(Tn),S0();break;case 5:w0(r);break;case 4:Ia();break;case 13:Ct(Dt);break;case 19:Ct(Dt);break;case 10:v0(r.type._context);break;case 22:case 23:I0()}n=n.return}if(nn=t,jt=t=bs(t.current,null),dn=qn=e,qt=0,Sc=null,L0=Ef=_o=0,Un=ql=null,so!==null){for(e=0;e<so.length;e++)if(n=so[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}so=null}return t}function oE(t,e){do{var n=jt;try{if(y0(),rd.current=Fd,Od){for(var r=Nt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Od=!1}if(xo=0,en=$t=Nt=null,Yl=!1,_c=0,P0.current=null,n===null||n.return===null){qt=1,Sc=e,jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=ux(o);if(h!==null){h.flags&=-257,dx(h,o,a,s,e),h.mode&1&&cx(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){cx(s,c,e),N0();break e}l=Error(ue(426))}}else if(kt&&a.mode&1){var g=ux(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dx(g,o,a,s,e),m0(Na(l,a));break e}}s=l=Na(l,a),qt!==4&&(qt=2),ql===null?ql=[s]:ql.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=GT(s,l,e);nx(s,p);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(xs===null||!xs.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=jT(s,a,e);nx(s,x);break e}}s=s.return}while(s!==null)}cE(n)}catch(w){e=w,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function aE(){var t=Ud.current;return Ud.current=Fd,t===null?Fd:t}function N0(){(qt===0||qt===3||qt===2)&&(qt=4),nn===null||!(_o&268435455)&&!(Ef&268435455)||ls(nn,dn)}function Vd(t,e){var n=ct;ct|=2;var r=aE();(nn!==t||dn!==e)&&(pi=null,uo(t,e));do try{DL();break}catch(i){oE(t,i)}while(!0);if(y0(),ct=n,Ud.current=r,jt!==null)throw Error(ue(261));return nn=null,dn=0,qt}function DL(){for(;jt!==null;)lE(jt)}function IL(){for(;jt!==null&&!sP();)lE(jt)}function lE(t){var e=dE(t.alternate,t,qn);t.memoizedProps=t.pendingProps,e===null?cE(t):jt=e,P0.current=null}function cE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AL(n,e),n!==null){n.flags&=32767,jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qt=6,jt=null;return}}else if(n=ML(n,e,qn),n!==null){jt=n;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);qt===0&&(qt=5)}function qs(t,e,n){var r=yt,i=vr.transition;try{vr.transition=null,yt=1,NL(t,e,n,r)}finally{vr.transition=i,yt=r}return null}function NL(t,e,n,r){do Sa();while(fs!==null);if(ct&6)throw Error(ue(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mP(t,s),t===nn&&(jt=nn=null,dn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hu||(hu=!0,fE(wd,function(){return Sa(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vr.transition,vr.transition=null;var o=yt;yt=1;var a=ct;ct|=4,P0.current=null,CL(t,n),rE(n,t),tL(om),Td=!!sm,om=sm=null,t.current=n,PL(n),oP(),ct=a,yt=o,vr.transition=s}else t.current=n;if(hu&&(hu=!1,fs=t,zd=i),s=t.pendingLanes,s===0&&(xs=null),cP(n.stateNode),Gn(t,Vt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bd)throw Bd=!1,t=Mm,Mm=null,t;return zd&1&&t.tag!==0&&Sa(),s=t.pendingLanes,s&1?t===Am?Zl++:(Zl=0,Am=t):Zl=0,Os(),null}function Sa(){if(fs!==null){var t=HS(zd),e=vr.transition,n=yt;try{if(vr.transition=null,yt=16>t?16:t,fs===null)var r=!1;else{if(t=fs,fs=null,zd=0,ct&6)throw Error(ue(331));var i=ct;for(ct|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:$l(8,u,s)}var d=u.child;if(d!==null)d.return=u,Re=d;else for(;Re!==null;){u=Re;var f=u.sibling,h=u.return;if(eE(u),u===c){Re=null;break}if(f!==null){f.return=h,Re=f;break}Re=h}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Re=p;break e}Re=s.return}}var v=t.current;for(Re=v;Re!==null;){o=Re;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Re=_;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tf(9,a)}}catch(w){Bt(a,a.return,w)}if(a===o){Re=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Re=x;break e}Re=a.return}}if(ct=i,Os(),Yr&&typeof Yr.onPostCommitFiberRoot=="function")try{Yr.onPostCommitFiberRoot(gf,t)}catch{}r=!0}return r}finally{yt=n,vr.transition=e}}return!1}function Tx(t,e,n){e=Na(n,e),e=GT(t,e,1),t=vs(t,e,1),e=Ln(),t!==null&&(Nc(t,1,e),Gn(t,e))}function Bt(t,e,n){if(t.tag===3)Tx(t,t,n);else for(;e!==null;){if(e.tag===3){Tx(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xs===null||!xs.has(r))){t=Na(n,t),t=jT(e,t,1),e=vs(e,t,1),t=Ln(),e!==null&&(Nc(e,1,t),Gn(e,t));break}}e=e.return}}function OL(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ln(),t.pingedLanes|=t.suspendedLanes&n,nn===t&&(dn&n)===n&&(qt===4||qt===3&&(dn&130023424)===dn&&500>Vt()-k0?uo(t,0):L0|=n),Gn(t,e)}function uE(t,e){e===0&&(t.mode&1?(e=ru,ru<<=1,!(ru&130023424)&&(ru=4194304)):e=1);var n=Ln();t=Oi(t,e),t!==null&&(Nc(t,e,n),Gn(t,n))}function FL(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uE(t,n)}function UL(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(e),uE(t,n)}var dE;dE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Bn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bn=!1,EL(t,e,n);Bn=!!(t.flags&131072)}else Bn=!1,kt&&e.flags&1048576&&pT(e,Ld,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sd(t,e),t=e.pendingProps;var i=La(e,Tn.current);wa(e,n),i=E0(null,e,r,t,i,n);var s=M0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(r)?(s=!0,Cd(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_0(e),i.updater=wf,e.stateNode=i,i._reactInternals=e,mm(e,r,t,n),e=vm(null,e,r,!0,s,n)):(e.tag=0,kt&&s&&h0(e),Rn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sd(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zL(r),t=Mr(r,t),i){case 0:e=ym(null,e,r,t,n);break e;case 1:e=px(null,e,r,t,n);break e;case 11:e=fx(null,e,r,t,n);break e;case 14:e=hx(null,e,r,Mr(r.type,t),n);break e}throw Error(ue(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mr(r,i),ym(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mr(r,i),px(t,e,r,i,n);case 3:e:{if(YT(e),t===null)throw Error(ue(387));r=e.pendingProps,s=e.memoizedState,i=s.element,vT(t,e),Id(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Na(Error(ue(423)),e),e=mx(t,e,r,n,i);break e}else if(r!==i){i=Na(Error(ue(424)),e),e=mx(t,e,r,n,i);break e}else for(Zn=ys(e.stateNode.containerInfo.firstChild),Qn=e,kt=!0,Rr=null,n=wT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ka(),r===i){e=Fi(t,e,n);break e}Rn(t,e,r,n)}e=e.child}return e;case 5:return ST(e),t===null&&fm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,am(r,i)?o=null:s!==null&&am(r,s)&&(e.flags|=32),KT(t,e),Rn(t,e,o,n),e.child;case 6:return t===null&&fm(e),null;case 13:return $T(t,e,n);case 4:return b0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Da(e,null,r,n):Rn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mr(r,i),fx(t,e,r,i,n);case 7:return Rn(t,e,e.pendingProps,n),e.child;case 8:return Rn(t,e,e.pendingProps.children,n),e.child;case 12:return Rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,St(kd,r._currentValue),r._currentValue=o,s!==null)if(Fr(s.value,o)){if(s.children===i.children&&!Vn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,wa(e,n),i=xr(i),r=r(i),e.flags|=1,Rn(t,e,r,n),e.child;case 14:return r=e.type,i=Mr(r,e.pendingProps),i=Mr(r.type,i),hx(t,e,r,i,n);case 15:return WT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mr(r,i),sd(t,e),e.tag=1,Hn(r)?(t=!0,Cd(e)):t=!1,wa(e,n),_T(e,r,i),mm(e,r,i,n),vm(null,e,r,!0,t,n);case 19:return qT(t,e,n);case 22:return XT(t,e,n)}throw Error(ue(156,e.tag))};function fE(t,e){return US(t,e)}function BL(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mr(t,e,n,r){return new BL(t,e,n,r)}function O0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zL(t){if(typeof t=="function")return O0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===t0)return 11;if(t===n0)return 14}return 2}function bs(t,e){var n=t.alternate;return n===null?(n=mr(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ld(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")O0(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zo:return fo(n.children,i,s,e);case e0:o=8,i|=8;break;case Bp:return t=mr(12,n,e,i|2),t.elementType=Bp,t.lanes=s,t;case zp:return t=mr(13,n,e,i),t.elementType=zp,t.lanes=s,t;case Vp:return t=mr(19,n,e,i),t.elementType=Vp,t.lanes=s,t;case bS:return Mf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xS:o=10;break e;case _S:o=9;break e;case t0:o=11;break e;case n0:o=14;break e;case ss:o=16,r=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=mr(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fo(t,e,n,r){return t=mr(7,t,r,e),t.lanes=n,t}function Mf(t,e,n,r){return t=mr(22,t,r,e),t.elementType=bS,t.lanes=n,t.stateNode={isHidden:!1},t}function Rh(t,e,n){return t=mr(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=mr(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VL(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ch(0),this.expirationTimes=ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ch(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function F0(t,e,n,r,i,s,o,a,l){return t=new VL(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mr(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_0(s),t}function HL(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hE(t){if(!t)return Ms;t=t._reactInternals;e:{if(Co(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(Hn(n))return fT(t,n,e)}return e}function pE(t,e,n,r,i,s,o,a,l){return t=F0(n,r,!0,t,i,s,o,a,l),t.context=hE(null),n=t.current,r=Ln(),i=_s(n),s=Mi(r,i),s.callback=e??null,vs(n,s,i),t.current.lanes=i,Nc(t,i,r),Gn(t,r),t}function Af(t,e,n,r){var i=e.current,s=Ln(),o=_s(i);return n=hE(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vs(i,e,o),t!==null&&(Nr(t,i,o,s),nd(t,i,o)),o}function Hd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ex(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function U0(t,e){Ex(t,e),(t=t.alternate)&&Ex(t,e)}function GL(){return null}var mE=typeof reportError=="function"?reportError:function(t){console.error(t)};function B0(t){this._internalRoot=t}Rf.prototype.render=B0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Af(t,e,null,null)};Rf.prototype.unmount=B0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;bo(function(){Af(null,t,null,null)}),e[Ni]=null}};function Rf(t){this._internalRoot=t}Rf.prototype.unstable_scheduleHydration=function(t){if(t){var e=WS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<as.length&&e!==0&&e<as[n].priority;n++);as.splice(n,0,t),n===0&&KS(t)}};function z0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mx(){}function jL(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Hd(o);s.call(c)}}var o=pE(e,r,t,0,null,!1,!1,"",Mx);return t._reactRootContainer=o,t[Ni]=o.current,mc(t.nodeType===8?t.parentNode:t),bo(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hd(l);a.call(c)}}var l=F0(t,0,!1,null,null,!1,!1,"",Mx);return t._reactRootContainer=l,t[Ni]=l.current,mc(t.nodeType===8?t.parentNode:t),bo(function(){Af(e,l,n,r)}),l}function Pf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Hd(o);a.call(l)}}Af(e,o,t,i)}else o=jL(n,e,t,i,r);return Hd(o)}GS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fl(e.pendingLanes);n!==0&&(s0(e,n|1),Gn(e,Vt()),!(ct&6)&&(Oa=Vt()+500,Os()))}break;case 13:bo(function(){var r=Oi(t,1);if(r!==null){var i=Ln();Nr(r,t,1,i)}}),U0(t,1)}};o0=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=Ln();Nr(e,t,134217728,n)}U0(t,134217728)}};jS=function(t){if(t.tag===13){var e=_s(t),n=Oi(t,e);if(n!==null){var r=Ln();Nr(n,t,e,r)}U0(t,e)}};WS=function(){return yt};XS=function(t,e){var n=yt;try{return yt=t,e()}finally{yt=n}};Zp=function(t,e,n){switch(e){case"input":if(jp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_f(r);if(!i)throw Error(ue(90));SS(r),jp(r,i)}}}break;case"textarea":ES(t,n);break;case"select":e=n.value,e!=null&&va(t,!!n.multiple,e,!1)}};kS=D0;DS=bo;var WL={usingClientEntryPoint:!1,Events:[Fc,ta,_f,PS,LS,D0]},bl={findFiberByHostInstance:io,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XL={bundleType:bl.bundleType,version:bl.version,rendererPackageName:bl.rendererPackageName,rendererConfig:bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=OS(t),t===null?null:t.stateNode},findFiberByHostInstance:bl.findFiberByHostInstance||GL,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{gf=pu.inject(XL),Yr=pu}catch{}}rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WL;rr.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z0(e))throw Error(ue(200));return HL(t,e,null,n)};rr.createRoot=function(t,e){if(!z0(t))throw Error(ue(299));var n=!1,r="",i=mE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=F0(t,1,!1,null,null,n,!1,r,i),t[Ni]=e.current,mc(t.nodeType===8?t.parentNode:t),new B0(e)};rr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=OS(e),t=t===null?null:t.stateNode,t};rr.flushSync=function(t){return bo(t)};rr.hydrate=function(t,e,n){if(!Cf(e))throw Error(ue(200));return Pf(null,t,e,!0,n)};rr.hydrateRoot=function(t,e,n){if(!z0(t))throw Error(ue(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pE(e,null,t,1,n??null,i,!1,s,o),t[Ni]=e.current,mc(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rf(e)};rr.render=function(t,e,n){if(!Cf(e))throw Error(ue(200));return Pf(null,t,e,!1,n)};rr.unmountComponentAtNode=function(t){if(!Cf(t))throw Error(ue(40));return t._reactRootContainer?(bo(function(){Pf(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};rr.unstable_batchedUpdates=D0;rr.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cf(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Pf(t,e,n,!1,r)};rr.version="18.2.0-next-9e3b772b8-20220608";function gE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gE)}catch(t){console.error(t)}}gE(),pS.exports=rr;var V0=pS.exports,Ax=V0;bv.createRoot=Ax.createRoot,bv.hydrateRoot=Ax.hydrateRoot;var yE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rx=Ei.createContext&&Ei.createContext(yE),KL=["attr","size","title"];function YL(t,e){if(t==null)return{};var n=$L(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function $L(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gd(){return Gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gd.apply(this,arguments)}function Cx(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function jd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cx(Object(n),!0).forEach(function(r){qL(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cx(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qL(t,e,n){return e=ZL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ZL(t){var e=QL(t,"string");return typeof e=="symbol"?e:String(e)}function QL(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vE(t){return t&&t.map((e,n)=>Ei.createElement(e.tag,jd({key:n},e.attr),vE(e.child)))}function En(t){return e=>Ei.createElement(JL,Gd({attr:jd({},t.attr)},e),vE(t.child))}function JL(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=YL(t,KL),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ei.createElement("svg",Gd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:jd(jd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ei.createElement("title",null,s),t.children)};return Rx!==void 0?Ei.createElement(Rx.Consumer,null,n=>e(n)):e(yE)}function ek(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(t)}function tk(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(t)}function nk(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"},child:[]}]})(t)}function xE(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(t)}function rk(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(t)}function ik(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(t)}function sk(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},child:[]}]})(t)}function ok(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(t)}function ak(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"},child:[]}]})(t)}function lk(t){return En({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(t)}function _E(t){return En({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"},child:[]}]})(t)}function ck(t){return En({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"},child:[]}]})(t)}function bE(t){return En({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"},child:[]}]})(t)}function uk(t){return En({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 15l7-7 7 7"},child:[]}]})(t)}function dk(t){return En({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"},child:[]}]})(t)}const H0="-";function fk(t){const e=pk(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;function i(o){const a=o.split(H0);return a[0]===""&&a.length!==1&&a.shift(),wE(a,e)||hk(o)}function s(o,a){const l=n[o]||[];return a&&r[o]?[...l,...r[o]]:l}return{getClassGroupId:i,getConflictingClassGroupIds:s}}function wE(t,e){var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?wE(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(H0);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId}const Px=/^\[(.+)\]$/;function hk(t){if(Px.test(t)){const e=Px.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}}function pk(t){const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return gk(Object.entries(t.classGroups),n).forEach(([s,o])=>{Pm(o,r,s,e)}),r}function Pm(t,e,n,r){t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Lx(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(mk(i)){Pm(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{Pm(o,Lx(e,s),n,r)})})}function Lx(t,e){let n=t;return e.split(H0).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function mk(t){return t.isThemeGetter}function gk(t,e){return e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t}function yk(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;function i(s,o){n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)}return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}}const SE="!";function vk(t){const e=t.separator,n=e.length===1,r=e[0],i=e.length;return function(o){const a=[];let l=0,c=0,u;for(let y=0;y<o.length;y++){let g=o[y];if(l===0){if(g===r&&(n||o.slice(y,y+i)===e)){a.push(o.slice(c,y)),c=y+i;continue}if(g==="/"){u=y;continue}}g==="["?l++:g==="]"&&l--}const d=a.length===0?o:o.substring(c),f=d.startsWith(SE),h=f?d.substring(1):d,m=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:m}}}function xk(t){if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e}function _k(t){return{cache:yk(t.cacheSize),splitModifiers:vk(t),...fk(t)}}const bk=/\s+/;function wk(t,e){const{splitModifiers:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=new Set;return t.trim().split(bk).map(o=>{const{modifiers:a,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:u}=n(o);let d=r(u?c.substring(0,u):c),f=!!u;if(!d){if(!u)return{isTailwindClass:!1,originalClassName:o};if(d=r(c),!d)return{isTailwindClass:!1,originalClassName:o};f=!1}const h=xk(a).join(":");return{isTailwindClass:!0,modifierId:l?h+SE:h,classGroupId:d,originalClassName:o,hasPostfixModifier:f}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:a,classGroupId:l,hasPostfixModifier:c}=o,u=a+l;return s.has(u)?!1:(s.add(u),i(l,c).forEach(d=>s.add(a+d)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function Sk(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=TE(e))&&(r&&(r+=" "),r+=n);return r}function TE(t){if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=TE(t[r]))&&(n&&(n+=" "),n+=e);return n}function Tk(t,...e){let n,r,i,s=o;function o(l){const c=e.reduce((u,d)=>d(u),t());return n=_k(c),r=n.cache.get,i=n.cache.set,s=a,a(l)}function a(l){const c=r(l);if(c)return c;const u=wk(l,n);return i(l,u),u}return function(){return s(Sk.apply(null,arguments))}}function Mt(t){const e=n=>n[t]||[];return e.isThemeGetter=!0,e}const EE=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ek=/^\d+\/\d+$/,Mk=new Set(["px","full","screen"]),Ak=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Rk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ck=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Pk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Lk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function oi(t){return ao(t)||Mk.has(t)||Ek.test(t)}function Yi(t){return nl(t,"length",Bk)}function ao(t){return!!t&&!Number.isNaN(Number(t))}function mu(t){return nl(t,"number",ao)}function wl(t){return!!t&&Number.isInteger(Number(t))}function kk(t){return t.endsWith("%")&&ao(t.slice(0,-1))}function qe(t){return EE.test(t)}function $i(t){return Ak.test(t)}const Dk=new Set(["length","size","percentage"]);function Ik(t){return nl(t,Dk,ME)}function Nk(t){return nl(t,"position",ME)}const Ok=new Set(["image","url"]);function Fk(t){return nl(t,Ok,Vk)}function Uk(t){return nl(t,"",zk)}function Sl(){return!0}function nl(t,e,n){const r=EE.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1}function Bk(t){return Rk.test(t)&&!Ck.test(t)}function ME(){return!1}function zk(t){return Pk.test(t)}function Vk(t){return Lk.test(t)}function Hk(){const t=Mt("colors"),e=Mt("spacing"),n=Mt("blur"),r=Mt("brightness"),i=Mt("borderColor"),s=Mt("borderRadius"),o=Mt("borderSpacing"),a=Mt("borderWidth"),l=Mt("contrast"),c=Mt("grayscale"),u=Mt("hueRotate"),d=Mt("invert"),f=Mt("gap"),h=Mt("gradientColorStops"),m=Mt("gradientColorStopPositions"),y=Mt("inset"),g=Mt("margin"),p=Mt("opacity"),v=Mt("padding"),_=Mt("saturate"),x=Mt("scale"),w=Mt("sepia"),T=Mt("skew"),M=Mt("space"),R=Mt("translate"),S=()=>["auto","contain","none"],b=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",qe,e],F=()=>[qe,e],N=()=>["",oi,Yi],I=()=>["auto",ao,qe],O=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],L=()=>["start","end","center","between","around","evenly","stretch"],j=()=>["","0",qe],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[ao,mu],oe=()=>[ao,qe];return{cacheSize:500,separator:":",theme:{colors:[Sl],spacing:[oi,Yi],blur:["none","",$i,qe],brightness:Q(),borderColor:[t],borderRadius:["none","","full",$i,qe],borderSpacing:F(),borderWidth:N(),contrast:Q(),grayscale:j(),hueRotate:oe(),invert:j(),gap:F(),gradientColorStops:[t],gradientColorStopPositions:[kk,Yi],inset:D(),margin:D(),opacity:Q(),padding:F(),saturate:Q(),scale:Q(),sepia:j(),skew:oe(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",qe]}],container:["container"],columns:[{columns:[$i]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...O(),qe]}],overflow:[{overflow:b()}],"overflow-x":[{"overflow-x":b()}],"overflow-y":[{"overflow-y":b()}],overscroll:[{overscroll:S()}],"overscroll-x":[{"overscroll-x":S()}],"overscroll-y":[{"overscroll-y":S()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",wl,qe]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",qe]}],grow:[{grow:j()}],shrink:[{shrink:j()}],order:[{order:["first","last","none",wl,qe]}],"grid-cols":[{"grid-cols":[Sl]}],"col-start-end":[{col:["auto",{span:["full",wl,qe]},qe]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[Sl]}],"row-start-end":[{row:["auto",{span:[wl,qe]},qe]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",qe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",qe]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[M]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[M]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",qe,e]}],"min-w":[{"min-w":[qe,e,"min","max","fit"]}],"max-w":[{"max-w":[qe,e,"none","full","min","max","fit","prose",{screen:[$i]},$i]}],h:[{h:[qe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[qe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[qe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",$i,Yi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mu]}],"font-family":[{font:[Sl]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",qe]}],"line-clamp":[{"line-clamp":["none",ao,mu]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",oi,qe]}],"list-image":[{"list-image":["none",qe]}],"list-style-type":[{list:["none","disc","decimal",qe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",oi,Yi]}],"underline-offset":[{"underline-offset":["auto",oi,qe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...O(),Nk]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ik]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Fk]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[h]}],"gradient-via":[{via:[h]}],"gradient-to":[{to:[h]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:B()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[oi,qe]}],"outline-w":[{outline:[oi,Yi]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:N()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[oi,Yi]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",$i,Uk]}],"shadow-color":[{shadow:[Sl]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":G()}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",$i,qe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[_]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",qe]}],duration:[{duration:oe()}],ease:[{ease:["linear","in","out","in-out",qe]}],delay:[{delay:oe()}],animate:[{animate:["none","spin","ping","pulse","bounce",qe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[wl,qe]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",qe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[oi,Yi,mu]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const ee=Tk(Hk);function Zs(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function Tc(t){if(!Zs(t))return t;const e={};for(const n in t)e[n]=Tc(t[n]);return e}function ge(t,e){if(Zs(e)&&Object.keys(e).length===0)return Tc({...t,...e});const n={...t,...e};if(Zs(e)&&Zs(t))for(const r in e)Zs(e[r])&&r in t&&Zs(t[r])?n[r]=ge(t[r],e[r]):n[r]=Zs(e[r])?Tc(e[r]):e[r];return n}const Gk={root:{base:"divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",flush:{off:"rounded-lg border",on:"border-b"}},content:{base:"p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"},title:{arrow:{base:"h-6 w-6 shrink-0",open:{off:"",on:"rotate-180"}},base:"flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",flush:{off:"hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",on:"bg-transparent dark:bg-transparent"},heading:"",open:{off:"",on:"bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"}}},jk={base:"flex flex-col gap-2 p-4 text-sm",borderAccent:"border-t-4",closeButton:{base:"-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",icon:"h-5 w-5",color:{info:"bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",gray:"bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",failure:"bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",success:"bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",warning:"bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",red:"bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",green:"bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",yellow:"bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",blue:"bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",cyan:"bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",pink:"bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",lime:"bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",dark:"bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",indigo:"bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",purple:"bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",teal:"bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",light:"bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"}},color:{info:"border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",gray:"border-gray-500 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",failure:"border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",success:"border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",warning:"border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",red:"border-red-500 bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",green:"border-green-500 bg-green-100 text-green-700 dark:bg-green-200 dark:text-green-800",yellow:"border-yellow-500 bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",blue:"border-blue-500 bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",cyan:"border-cyan-500 bg-cyan-100 text-cyan-700 dark:bg-cyan-200 dark:text-cyan-800",pink:"border-pink-500 bg-pink-100 text-pink-700 dark:bg-pink-200 dark:text-pink-800",lime:"border-lime-500 bg-lime-100 text-lime-700 dark:bg-lime-200 dark:text-lime-800",dark:"border-gray-600 bg-gray-800 text-gray-200 dark:bg-gray-900 dark:text-gray-300",indigo:"border-indigo-500 bg-indigo-100 text-indigo-700 dark:bg-indigo-200 dark:text-indigo-800",purple:"border-purple-500 bg-purple-100 text-purple-700 dark:bg-purple-200 dark:text-purple-800",teal:"border-teal-500 bg-teal-100 text-teal-700 dark:bg-teal-200 dark:text-teal-800",light:"border-gray-400 bg-gray-50 text-gray-600 dark:bg-gray-500 dark:text-gray-200"},icon:"mr-3 inline h-5 w-5 flex-shrink-0",rounded:"rounded-lg",wrapper:"flex items-center"},Wk={root:{base:"flex items-center justify-center space-x-4 rounded",bordered:"p-1 ring-2",rounded:"rounded-full",color:{dark:"ring-gray-800 dark:ring-gray-800",failure:"ring-red-500 dark:ring-red-700",gray:"ring-gray-500 dark:ring-gray-400",info:"ring-cyan-400 dark:ring-cyan-800",light:"ring-gray-300 dark:ring-gray-500",purple:"ring-purple-500 dark:ring-purple-600",success:"ring-green-500 dark:ring-green-500",warning:"ring-yellow-300 dark:ring-yellow-500",pink:"ring-pink-500 dark:ring-pink-500"},img:{base:"rounded",off:"relative overflow-hidden bg-gray-100 dark:bg-gray-600",on:"",placeholder:"absolute -bottom-1 h-auto w-auto text-gray-400"},size:{xs:"h-6 w-6",sm:"h-8 w-8",md:"h-10 w-10",lg:"h-20 w-20",xl:"h-36 w-36"},stacked:"ring-2 ring-gray-300 dark:ring-gray-500",statusPosition:{"bottom-left":"-bottom-1 -left-1","bottom-center":"-bottom-1","bottom-right":"-bottom-1 -right-1","top-left":"-left-1 -top-1","top-center":"-top-1","top-right":"-right-1 -top-1","center-right":"-right-1",center:"","center-left":"-left-1"},status:{away:"bg-yellow-400",base:"absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",busy:"bg-red-400",offline:"bg-gray-400",online:"bg-green-400"},initials:{text:"font-medium text-gray-600 dark:text-gray-300",base:"relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600"}},group:{base:"flex -space-x-4"},groupCounter:{base:"relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"}},Xk={root:{base:"flex h-fit items-center gap-1 font-semibold",color:{info:"bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-800 dark:group-hover:bg-cyan-300",gray:"bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600",failure:"bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",success:"bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",warning:"bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300",indigo:"bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200 dark:bg-indigo-200 dark:text-indigo-900 dark:group-hover:bg-indigo-300",purple:"bg-purple-100 text-purple-800 group-hover:bg-purple-200 dark:bg-purple-200 dark:text-purple-900 dark:group-hover:bg-purple-300",pink:"bg-pink-100 text-pink-800 group-hover:bg-pink-200 dark:bg-pink-200 dark:text-pink-900 dark:group-hover:bg-pink-300",blue:"bg-blue-100 text-blue-800 group-hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-900 dark:group-hover:bg-blue-300",cyan:"bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300",dark:"bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-900 dark:text-gray-200 dark:group-hover:bg-gray-700",light:"bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500",green:"bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300",lime:"bg-lime-100 text-lime-800 group-hover:bg-lime-200 dark:bg-lime-200 dark:text-lime-900 dark:group-hover:bg-lime-300",red:"bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300",teal:"bg-teal-100 text-teal-800 group-hover:bg-teal-200 dark:bg-teal-200 dark:text-teal-900 dark:group-hover:bg-teal-300",yellow:"bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300"},href:"group",size:{xs:"p-1 text-xs",sm:"p-1.5 text-sm"}},icon:{off:"rounded px-2 py-0.5",on:"rounded-full p-1.5",size:{xs:"h-3 w-3",sm:"h-3.5 w-3.5"}}},Kk={root:{base:"text-xl font-semibold italic text-gray-900 dark:text-white"}},Yk={root:{base:"",list:"flex items-center"},item:{base:"group flex items-center",chevron:"mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",href:{off:"flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",on:"flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"},icon:"mr-2 h-4 w-4"}},$k={base:"group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",fullSized:"w-full",color:{dark:"border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",failure:"border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",gray:":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",info:"border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",light:"border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",purple:"border border-transparent bg-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-purple-800 dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",success:"border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",warning:"border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",blue:"border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",cyan:"border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",green:"border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",indigo:"border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",lime:"border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",pink:"border border-pink-300 bg-white text-pink-900 focus:ring-4 focus:ring-pink-300 enabled:hover:bg-pink-100 dark:border-pink-600 dark:bg-pink-600 dark:text-white dark:focus:ring-pink-700 dark:enabled:hover:border-pink-700 dark:enabled:hover:bg-pink-700",red:"border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",teal:"border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",yellow:"border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"},disabled:"cursor-not-allowed opacity-50",isProcessing:"cursor-wait",spinnerSlot:"absolute top-0 flex h-full items-center",spinnerLeftPosition:{xs:"left-2",sm:"left-3",md:"left-4",lg:"left-5",xl:"left-6"},gradient:{cyan:"bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",failure:"bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",info:"bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800 ",lime:"bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",pink:"bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",purple:"bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",success:"bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",teal:"bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"},gradientDuoTone:{cyanToBlue:"bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",greenToBlue:"bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",pinkToOrange:"bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",purpleToBlue:"bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",purpleToPink:"bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",redToYellow:"bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",tealToLime:"bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"},inner:{base:"flex items-stretch transition-all duration-200",position:{none:"",start:"rounded-r-none",middle:"rounded-none",end:"rounded-l-none"},outline:"border border-transparent",isProcessingPadding:{xs:"pl-8",sm:"pl-10",md:"pl-12",lg:"pl-16",xl:"pl-20"}},label:"ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",outline:{color:{gray:"border border-gray-900 dark:border-white",default:"border-0",light:""},off:"",on:"flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",pill:{off:"rounded-md",on:"rounded-full"}},pill:{off:"rounded-lg",on:"rounded-full"},size:{xs:"px-2 py-1 text-xs",sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-5 py-2.5 text-base",xl:"px-6 py-3 text-base"}},qk={base:"inline-flex",position:{none:"",start:"rounded-r-none focus:ring-2",middle:"rounded-none border-l-0 pl-0 focus:ring-2",end:"rounded-l-none border-l-0 pl-0 focus:ring-2"}},Zk={root:{base:"flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",children:"flex h-full flex-col justify-center gap-4 p-6",horizontal:{off:"flex-col",on:"flex-col md:max-w-xl md:flex-row"},href:"hover:bg-gray-100 dark:hover:bg-gray-700"},img:{base:"",horizontal:{off:"rounded-t-lg",on:"h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"}}},Qk={root:{base:"relative h-full w-full",leftControl:"absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",rightControl:"absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"},indicators:{active:{off:"bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",on:"bg-white dark:bg-gray-800"},base:"h-3 w-3 rounded-full",wrapper:"absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"},item:{base:"absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",wrapper:{off:"w-full flex-shrink-0 transform cursor-default snap-center",on:"w-full flex-shrink-0 transform cursor-grab snap-center"}},control:{base:"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",icon:"h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"},scrollContainer:{base:"flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",snap:"snap-x"}},Jk={root:{base:"h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",color:{default:"text-cyan-600 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600",dark:"text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",failure:"text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",gray:"text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",info:"text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",light:"text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",purple:"text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",success:"text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",warning:"text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",blue:"text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",cyan:"text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",green:"text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",indigo:"text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",lime:"text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",pink:"text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",red:"text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",teal:"text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"}}},eD={root:{base:"rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",icon:"h-5 w-5"}},tD={root:{base:"relative"},popup:{root:{base:"absolute top-10 z-50 block pt-2",inline:"relative top-0 z-auto",inner:"inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"},header:{base:"",title:"px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",selectors:{base:"mb-2 flex justify-between",button:{base:"rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",prev:"",next:"",view:""}}},view:{base:"p-1"},footer:{base:"mt-2 flex space-x-2",button:{base:"w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",today:"bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",clear:"border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}}},views:{days:{header:{base:"mb-1 grid grid-cols-7",title:"h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"},items:{base:"grid w-64 grid-cols-7",item:{base:"block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",selected:"bg-cyan-700 text-white hover:bg-cyan-600",disabled:"text-gray-500"}}},months:{items:{base:"grid w-64 grid-cols-4",item:{base:"block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",selected:"bg-cyan-700 text-white hover:bg-cyan-600",disabled:"text-gray-500"}}},years:{items:{base:"grid w-64 grid-cols-4",item:{base:"block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",selected:"bg-cyan-700 text-white hover:bg-cyan-600",disabled:"text-gray-500"}}},decades:{items:{base:"grid w-64 grid-cols-4",item:{base:"block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",selected:"bg-cyan-700 text-white hover:bg-cyan-600",disabled:"text-gray-500"}}}}},nD={arrowIcon:"ml-2 h-4 w-4",content:"py-1 focus:outline-none",floating:{animation:"transition-opacity",arrow:{base:"absolute z-10 h-2 w-2 rotate-45",style:{dark:"bg-gray-900 dark:bg-gray-700",light:"bg-white",auto:"bg-white dark:bg-gray-700"},placement:"-4px"},base:"z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",content:"py-1 text-sm text-gray-700 dark:text-gray-200",divider:"my-1 h-px bg-gray-100 dark:bg-gray-600",header:"block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",hidden:"invisible opacity-0",item:{container:"",base:"flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",icon:"mr-2 h-4 w-4"},style:{dark:"bg-gray-900 text-white dark:bg-gray-700",light:"border border-gray-200 bg-white text-gray-900",auto:"border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"},target:"w-fit"},inlineWrapper:"flex items-center"},rD={root:{base:"flex"},field:{base:"relative w-full",input:{base:"block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",sizes:{sm:"sm:text-xs",md:"text-sm",lg:"sm:text-base"},colors:{gray:"border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",info:"border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",failure:"border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",warning:"border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",success:"border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"}}}},iD={input:{default:{filled:{sm:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",md:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"},outlined:{sm:"peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",md:"peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"},standard:{sm:"peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",md:"peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"}},success:{filled:{sm:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500",md:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-green-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:bg-gray-700 dark:text-white dark:focus:border-green-500"},outlined:{sm:"peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",md:"peer block w-full appearance-none rounded-lg border border-green-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"},standard:{sm:"peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500",md:"peer block w-full appearance-none border-0 border-b-2 border-green-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 dark:border-green-500 dark:text-white dark:focus:border-green-500"}},error:{filled:{sm:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500",md:"peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-red-600 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:bg-gray-700 dark:text-white dark:focus:border-red-500"},outlined:{sm:"peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",md:"peer block w-full appearance-none rounded-lg border border-red-600 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"},standard:{sm:"peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-xs text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500",md:"peer block w-full appearance-none border-0 border-b-2 border-red-600 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-red-500 dark:text-white dark:focus:border-red-500"}}},label:{default:{filled:{sm:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-gray-500 transition-transform  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",md:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"},outlined:{sm:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",md:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"},standard:{sm:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",md:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"}},success:{filled:{sm:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",md:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"},outlined:{sm:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",md:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"},standard:{sm:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",md:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-green-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500"}},error:{filled:{sm:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",md:"absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"},outlined:{sm:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",md:"absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"},standard:{sm:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-xs text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500",md:"absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-red-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-red-500"}}},helperText:{default:"mt-2 text-xs text-gray-600 dark:text-gray-400",success:"mt-2 text-xs text-green-600 dark:text-green-400",error:"mt-2 text-xs text-red-600 dark:text-red-400"}},sD={root:{base:"w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",container:"w-full p-6",bgDark:"bg-gray-800"},groupLink:{base:"flex flex-wrap text-sm text-gray-500 dark:text-white",link:{base:"me-4 last:mr-0 md:mr-6",href:"hover:underline"},col:"flex-col space-y-4"},icon:{base:"text-gray-500 dark:hover:text-white",size:"h-5 w-5"},title:{base:"mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"},divider:{base:"my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8"},copyright:{base:"text-sm text-gray-500 dark:text-gray-400 sm:text-center",href:"ml-1 hover:underline",span:"ml-1"},brand:{base:"mb-4 flex items-center sm:mb-0",img:"mr-3 h-8",span:"self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"}},oD={root:{base:"mt-2 text-sm",colors:{gray:"text-gray-500 dark:text-gray-400",info:"text-cyan-700 dark:text-cyan-800",success:"text-green-600 dark:text-green-500",failure:"text-red-600 dark:text-red-500",warning:"text-yellow-500 dark:text-yellow-600"}}},aD={root:{base:"rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100",icon:"inline-block"}},lD={root:{base:"text-sm font-medium",disabled:"opacity-50",colors:{default:"text-gray-900 dark:text-white",info:"text-cyan-500 dark:text-cyan-600",failure:"text-red-700 dark:text-red-500",warning:"text-yellow-500 dark:text-yellow-600",success:"text-green-700 dark:text-green-500"}}},cD={root:{base:"list-inside space-y-1 text-gray-500 dark:text-gray-400",ordered:{off:"list-disc",on:"list-decimal"},horizontal:"flex list-none flex-wrap items-center justify-center space-x-4 space-y-0",unstyled:"list-none",nested:"mt-2 ps-5"},item:{withIcon:{off:"",on:"flex items-center"},icon:"me-2 h-3.5 w-3.5 flex-shrink-0"}},uD={root:{base:"list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"},item:{base:"[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",link:{base:"flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600",active:{off:"hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",on:"bg-cyan-700 text-white dark:bg-gray-800"},disabled:{off:"",on:"cursor-not-allowed bg-gray-100 text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900"},href:{off:"",on:""},icon:"mr-2 h-4 w-4 fill-current"}}},dD={root:{base:"fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",show:{on:"flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",off:"hidden"},sizes:{sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl","5xl":"max-w-5xl","6xl":"max-w-6xl","7xl":"max-w-7xl"},positions:{"top-left":"items-start justify-start","top-center":"items-start justify-center","top-right":"items-start justify-end","center-left":"items-center justify-start",center:"items-center justify-center","center-right":"items-center justify-end","bottom-right":"items-end justify-end","bottom-center":"items-end justify-center","bottom-left":"items-end justify-start"}},content:{base:"relative h-full w-full p-4 md:h-auto",inner:"relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"},body:{base:"flex-1 overflow-auto p-6",popup:"pt-0"},header:{base:"flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",popup:"border-b-0 p-2",title:"text-xl font-medium text-gray-900 dark:text-white",close:{base:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",icon:"h-5 w-5"}},footer:{base:"flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",popup:"border-t"}},fD={root:{base:"bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",rounded:{on:"rounded",off:""},bordered:{on:"border",off:""},inner:{base:"mx-auto flex flex-wrap items-center justify-between",fluid:{on:"",off:"container"}}},brand:{base:"flex items-center"},collapse:{base:"w-full md:block md:w-auto",list:"mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",hidden:{on:"hidden",off:""}},link:{base:"block py-2 pl-3 pr-4 md:p-0",active:{on:"bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",off:"border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"},disabled:{on:"text-gray-400 hover:cursor-not-allowed dark:text-gray-600",off:""}},toggle:{base:"inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",icon:"h-6 w-6 shrink-0"}},hD={base:"",layout:{table:{base:"text-sm text-gray-700 dark:text-gray-400",span:"font-semibold text-gray-900 dark:text-white"}},pages:{base:"xs:mt-0 mt-2 inline-flex items-center -space-x-px",showIcon:"inline-flex",previous:{base:"ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",icon:"h-5 w-5"},next:{base:"rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",icon:"h-5 w-5"},selector:{base:"w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",active:"bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",disabled:"cursor-not-allowed opacity-50"}}},pD={base:"absolute z-20 inline-block w-max max-w-[100vw] bg-white outline-none border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800",content:"z-10 overflow-hidden rounded-[7px]",arrow:{base:"absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-white border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",placement:"-4px"}},mD={base:"w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",label:"mb-1 flex justify-between font-medium dark:text-white",bar:"space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",color:{dark:"bg-gray-600 dark:bg-gray-300",blue:"bg-blue-600",red:"bg-red-600 dark:bg-red-500",green:"bg-green-600 dark:bg-green-500",yellow:"bg-yellow-400",indigo:"bg-indigo-600 dark:bg-indigo-500",purple:"bg-purple-600 dark:bg-purple-500",cyan:"bg-cyan-600",gray:"bg-gray-500",lime:"bg-lime-600",pink:"bg-pink-500",teal:"bg-teal-600"},size:{sm:"h-1.5",md:"h-2.5",lg:"h-4",xl:"h-6"}},gD={root:{base:"h-4 w-4 border border-gray-300 text-cyan-600 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600"}},yD={root:{base:"flex"},field:{base:"relative w-full",input:{base:"w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700",sizes:{sm:"h-1",md:"h-2",lg:"h-3"}}}},vD={root:{base:"flex items-center"},star:{empty:"text-gray-300 dark:text-gray-500",filled:"text-yellow-400",sizes:{sm:"h-5 w-5",md:"h-7 w-7",lg:"h-10 w-10"}}},xD={base:"flex items-center",label:"text-sm font-medium text-cyan-600 dark:text-cyan-500",progress:{base:"mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",fill:"h-5 rounded bg-yellow-400",label:"text-sm font-medium text-cyan-600 dark:text-cyan-500"}},_D={base:"flex",addon:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",field:{base:"relative w-full",icon:{base:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",svg:"h-5 w-5 text-gray-500 dark:text-gray-400"},select:{base:"block w-full border disabled:cursor-not-allowed disabled:opacity-50",withIcon:{on:"pl-10",off:""},withAddon:{on:"rounded-r-lg",off:"rounded-lg"},withShadow:{on:"shadow-sm dark:shadow-sm-light",off:""},sizes:{sm:"p-2 sm:text-xs",md:"p-2.5 text-sm",lg:"p-4 sm:text-base"},colors:{gray:"border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",info:"border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",failure:"border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",warning:"border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",success:"border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"}}}},bD={root:{base:"h-full",collapsed:{on:"w-16",off:"w-64"},inner:"h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 px-3 py-4 dark:bg-gray-800"},collapse:{button:"group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",icon:{base:"h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",open:{off:"",on:"text-gray-900"}},label:{base:"ml-3 flex-1 whitespace-nowrap text-left",icon:{base:"h-6 w-6 transition delay-0 ease-in-out",open:{on:"rotate-180",off:""}}},list:"space-y-2 py-2"},cta:{base:"mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-700",color:{blue:"bg-cyan-50 dark:bg-cyan-900",dark:"bg-dark-50 dark:bg-dark-900",failure:"bg-red-50 dark:bg-red-900",gray:"bg-alternative-50 dark:bg-alternative-900",green:"bg-green-50 dark:bg-green-900",light:"bg-light-50 dark:bg-light-900",red:"bg-red-50 dark:bg-red-900",purple:"bg-purple-50 dark:bg-purple-900",success:"bg-green-50 dark:bg-green-900",yellow:"bg-yellow-50 dark:bg-yellow-900",warning:"bg-yellow-50 dark:bg-yellow-900"}},item:{base:"flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",active:"bg-gray-100 dark:bg-gray-700",collapsed:{insideCollapse:"group w-full pl-8 transition duration-75",noIcon:"font-bold"},content:{base:"flex-1 whitespace-nowrap px-3"},icon:{base:"h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",active:"text-gray-700 dark:text-gray-100"},label:"",listItem:""},items:{base:""},itemGroup:{base:"mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"},logo:{base:"mb-5 flex items-center pl-2.5",collapsed:{on:"hidden",off:"self-center whitespace-nowrap text-xl font-semibold dark:text-white"},img:"mr-3 h-6 sm:h-7"}},wD={base:"inline animate-spin text-gray-200",color:{failure:"fill-red-600",gray:"fill-gray-600",info:"fill-cyan-600",pink:"fill-pink-600",purple:"fill-purple-600",success:"fill-green-500",warning:"fill-yellow-400"},light:{off:{base:"dark:text-gray-600",color:{failure:"",gray:"dark:fill-gray-300",info:"",pink:"",purple:"",success:"",warning:""}},on:{base:"",color:{failure:"",gray:"",info:"",pink:"",purple:"",success:"",warning:""}}},size:{xs:"h-3 w-3",sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8",xl:"h-10 w-10"}},SD={root:{base:"w-full text-left text-sm text-gray-500 dark:text-gray-400",shadow:"absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black",wrapper:"relative"},body:{base:"group/body",cell:{base:"px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg"}},head:{base:"group/head text-xs uppercase text-gray-700 dark:text-gray-400",cell:{base:"bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700"}},row:{base:"group/row",hovered:"hover:bg-gray-50 dark:hover:bg-gray-600",striped:"odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"}},TD={base:"flex flex-col gap-2",tablist:{base:"flex text-center",styles:{default:"flex-wrap border-b border-gray-200 dark:border-gray-700",underline:"-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",pills:"flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",fullWidth:"grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"},tabitem:{base:"flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-4 focus:ring-cyan-300 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",styles:{default:{base:"rounded-t-lg",active:{on:"bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",off:"text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"}},underline:{base:"rounded-t-lg",active:{on:"active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",off:"border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"}},pills:{base:"",active:{on:"rounded-lg bg-cyan-600 text-white",off:"rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"}},fullWidth:{base:"ml-0 flex w-full rounded-none first:ml-0",active:{on:"active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",off:"rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"}}},icon:"mr-2 h-5 w-5"}},tabitemcontainer:{base:"",styles:{default:"",underline:"",pills:"",fullWidth:""}},tabpanel:"py-3"},ED={base:"block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",colors:{gray:"border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",info:"border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",failure:"border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",warning:"border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",success:"border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"},withShadow:{on:"shadow-sm dark:shadow-sm-light",off:""}},MD={base:"flex",addon:"inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",field:{base:"relative w-full",icon:{base:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",svg:"h-5 w-5 text-gray-500 dark:text-gray-400"},rightIcon:{base:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",svg:"h-5 w-5 text-gray-500 dark:text-gray-400"},input:{base:"block w-full border disabled:cursor-not-allowed disabled:opacity-50",sizes:{sm:"p-2 sm:text-xs",md:"p-2.5 text-sm",lg:"p-4 sm:text-base"},colors:{gray:"border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",info:"border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",failure:"border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",warning:"border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",success:"border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"},withRightIcon:{on:"pr-10",off:""},withIcon:{on:"pl-10",off:""},withAddon:{on:"rounded-r-lg",off:"rounded-lg"},withShadow:{on:"shadow-sm dark:shadow-sm-light",off:""}}}},AD={root:{direction:{horizontal:"sm:flex",vertical:"relative border-l border-gray-200 dark:border-gray-700"}},item:{root:{horizontal:"relative mb-6 sm:mb-0",vertical:"mb-10 ml-6"},content:{root:{base:"mt-3 sm:pr-8"},body:{base:"mb-4 text-base font-normal text-gray-500 dark:text-gray-400"},time:{base:"mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"},title:{base:"text-lg font-semibold text-gray-900 dark:text-white"}},point:{horizontal:"flex items-center",line:"hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",marker:{base:{horizontal:"absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",vertical:"absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"},icon:{base:"h-3 w-3 text-cyan-600 dark:text-cyan-300",wrapper:"absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"}},vertical:""}}},RD={root:{base:"flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",closed:"opacity-0 ease-out"},toggle:{base:"-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",icon:"h-5 w-5 shrink-0"}},CD={root:{base:"group relative flex items-center rounded-lg focus:outline-none",active:{on:"cursor-pointer",off:"cursor-not-allowed opacity-50"},label:"ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"},toggle:{base:"rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",checked:{on:"after:translate-x-full after:border-white",off:"border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",color:{blue:"border-cyan-700 bg-cyan-700",dark:"bg-dark-700 border-dark-900",failure:"border-red-900 bg-red-700",gray:"border-gray-600 bg-gray-500",green:"border-green-700 bg-green-600",light:"bg-light-700 border-light-900",red:"border-red-900 bg-red-700",purple:"border-purple-900 bg-purple-700",success:"border-green-500 bg-green-500",yellow:"border-yellow-400 bg-yellow-400",warning:"border-yellow-600 bg-yellow-600",cyan:"border-cyan-500 bg-cyan-500",lime:"border-lime-400 bg-lime-400",indigo:"border-indigo-400 bg-indigo-400",teal:"bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",info:"border-cyan-600 bg-cyan-600",pink:"border-pink-600 bg-pink-600"}},sizes:{sm:"h-5 w-9 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4",md:"h-6 w-11 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5",lg:"h-7 w-14 after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6"}}},PD={target:"w-fit",animation:"transition-opacity",arrow:{base:"absolute z-10 h-2 w-2 rotate-45",style:{dark:"bg-gray-900 dark:bg-gray-700",light:"bg-white",auto:"bg-white dark:bg-gray-700"},placement:"-4px"},base:"absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",hidden:"invisible opacity-0",style:{dark:"bg-gray-900 text-white dark:bg-gray-700",light:"border border-gray-200 bg-white text-gray-900",auto:"border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"},content:"relative z-20"},LD={accordion:Gk,alert:jk,avatar:Wk,badge:Xk,blockquote:Kk,breadcrumb:Yk,button:$k,buttonGroup:qk,card:Zk,carousel:Qk,checkbox:Jk,datepicker:tD,darkThemeToggle:eD,dropdown:nD,fileInput:rD,floatingLabel:iD,footer:sD,helperText:oD,kbd:aD,label:lD,listGroup:uD,list:cD,modal:dD,navbar:fD,pagination:hD,popover:pD,progress:mD,radio:gD,rangeSlider:yD,rating:vD,ratingAdvanced:xD,select:_D,textInput:MD,textarea:ED,toggleSwitch:CD,sidebar:bD,spinner:wD,table:SD,tabs:TD,timeline:AD,toast:RD,tooltip:PD},AE={theme:Tc(LD)};function kx(){return AE.mode}function Ge(){return Tc(AE.theme)}const RE=C.createContext(void 0);function CE(){const t=C.useContext(RE);if(!t)throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");return t}const PE=({children:t,className:e,theme:n={},...r})=>{const{isOpen:i}=CE(),s=ge(Ge().accordion.content,n);return P.jsx("div",{className:ee(s.base,e),"data-testid":"flowbite-accordion-content",hidden:!i,...r,children:t})},LE=({children:t,...e})=>{const{alwaysOpen:n}=e,[r,i]=C.useState(e.isOpen),s=n?{...e,isOpen:r,setOpen:()=>i(!r)}:e;return P.jsx(RE.Provider,{value:s,children:t})},kE=({as:t="h2",children:e,className:n,theme:r={},...i})=>{const{arrowIcon:s,flush:o,isOpen:a,setOpen:l}=CE(),c=()=>typeof l<"u"&&l(),u=ge(Ge().accordion.title,r);return P.jsxs("button",{className:ee(u.base,u.flush[o?"on":"off"],u.open[a?"on":"off"],n),onClick:c,type:"button",...i,children:[P.jsx(t,{className:u.heading,"data-testid":"flowbite-accordion-heading",children:e}),s&&P.jsx(s,{"aria-hidden":!0,className:ee(u.arrow.base,u.arrow.open[a?"on":"off"]),"data-testid":"flowbite-accordion-arrow"})]})},DE=({alwaysOpen:t=!1,arrowIcon:e=xE,children:n,flush:r=!1,collapseAll:i=!1,className:s,theme:o={},...a})=>{const[l,c]=C.useState(i?-1:0),u=C.useMemo(()=>C.Children.map(n,(f,h)=>C.cloneElement(f,{alwaysOpen:t,arrowIcon:e,flush:r,isOpen:l===h,setOpen:()=>c(l===h?-1:h)})),[t,e,n,r,l]),d=ge(Ge().accordion.root,o);return P.jsx("div",{className:ee(d.base,d.flush[r?"on":"off"],s),"data-testid":"flowbite-accordion",...a,children:u})};DE.displayName="Accordion";LE.displayName="Accordion.Panel";kE.displayName="Accordion.Title";PE.displayName="Accordion.Content";Object.assign(DE,{Panel:LE,Title:kE,Content:PE});const IE=({children:t,className:e,theme:n={},...r})=>{const i=ge(Ge().avatar.group,n);return P.jsx("div",{"data-testid":"avatar-group-element",className:ee(i.base,e),...r,children:t})};IE.displayName="Avatar.Group";const NE=({className:t,href:e,theme:n={},total:r,...i})=>{const s=ge(Ge().avatar.groupCounter,n);return P.jsxs("a",{href:e,className:ee(s.base,t),...i,children:["+",r]})};NE.displayName="Avatar.GroupCounter";const OE=({alt:t="",bordered:e=!1,children:n,className:r,color:i="light",img:s,placeholderInitials:o="",rounded:a=!1,size:l="md",stacked:c=!1,status:u,statusPosition:d="top-left",theme:f={},...h})=>{const m=ge(Ge().avatar,f),y=ee(m.root.img.base,e&&m.root.bordered,e&&m.root.color[i],a&&m.root.rounded,c&&m.root.stacked,m.root.img.on,m.root.size[l]),g={className:ee(y,m.root.img.on),"data-testid":"flowbite-avatar-img"};return P.jsxs("div",{className:ee(m.root.base,r),"data-testid":"flowbite-avatar",...h,children:[P.jsxs("div",{className:"relative",children:[s?typeof s=="string"?P.jsx("img",{alt:t,src:s,...g}):s({alt:t,...g}):o?P.jsx("div",{className:ee(m.root.img.off,m.root.initials.base,c&&m.root.stacked,e&&m.root.bordered,e&&m.root.color[i],m.root.size[l],a&&m.root.rounded),"data-testid":"flowbite-avatar-initials-placeholder",children:P.jsx("span",{className:ee(m.root.initials.text),"data-testid":"flowbite-avatar-initials-placeholder-text",children:o})}):P.jsx("div",{className:ee(y,m.root.img.off),"data-testid":"flowbite-avatar-img",children:P.jsx("svg",{className:m.root.img.placeholder,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:P.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),u&&P.jsx("span",{"data-testid":"flowbite-avatar-status",className:ee(m.root.status.base,m.root.status[u],m.root.statusPosition[d])})]}),n&&P.jsx("div",{children:n})]})};OE.displayName="Avatar";Object.assign(OE,{Group:IE,Counter:NE});const FE=({children:t,color:e="info",href:n,icon:r,size:i="xs",className:s,theme:o={},...a})=>{const l=ge(Ge().badge,o),c=()=>P.jsxs("span",{className:ee(l.root.base,l.root.color[e],l.root.size[i],l.icon[r?"on":"off"],s),"data-testid":"flowbite-badge",...a,children:[r&&P.jsx(r,{"aria-hidden":!0,className:l.icon.size[i],"data-testid":"flowbite-badge-icon"}),t&&P.jsx("span",{children:t})]});return n?P.jsx("a",{className:l.root.href,href:n,children:P.jsx(c,{})}):P.jsx(c,{})};FE.displayName="Badge";const UE=({className:t,color:e="info",light:n,size:r="md",theme:i={},...s})=>{const o=ge(Ge().spinner,i);return P.jsx("span",{role:"status",...s,children:P.jsxs("svg",{fill:"none",viewBox:"0 0 100 101",className:ee(o.base,o.color[e],o.light[n?"on":"off"].base,o.light[n?"on":"off"].color[e],o.size[r],t),children:[P.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),P.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})};UE.displayName="Spinner";const G0=C.forwardRef(({children:t,as:e,href:n,type:r="button",...i},s)=>{const o=e||(n?"a":"button");return C.createElement(o,{ref:s,href:n,type:r,...i},t)});G0.displayName="ButtonBaseComponent";const BE=(t,e,n)=>C.Children.map(t,(r,i)=>C.isValidElement(r)?r.props.children?C.cloneElement(r,{...r.props,children:BE(r.props.children,e,n),positionInGroup:Dx(i,C.Children.count(t))}):C.cloneElement(r,{outline:e,pill:n,positionInGroup:Dx(i,C.Children.count(t))}):r),Dx=(t,e)=>t===0?"start":t===e-1?"end":"middle",zE=({children:t,className:e,outline:n,pill:r,theme:i={},...s})=>{const o=C.useMemo(()=>BE(t,n,r),[t,n,r]),a=ge(Ge().buttonGroup,i);return P.jsx("div",{className:ee(a.base,e),role:"group",...s,children:o})};zE.displayName="Button.Group";const VE=C.forwardRef(({children:t,className:e,color:n="info",disabled:r,fullSized:i,isProcessing:s=!1,processingLabel:o="Loading...",processingSpinner:a,gradientDuoTone:l,gradientMonochrome:c,label:u,outline:d=!1,pill:f=!1,positionInGroup:h="none",size:m="md",theme:y={},...g},p)=>{const{buttonGroup:v,button:_}=Ge(),x=ge(_,y),w=g;return P.jsx(G0,{ref:p,disabled:r,className:ee(x.base,r&&x.disabled,!l&&!c&&x.color[n],l&&!c&&x.gradientDuoTone[l],!l&&c&&x.gradient[c],d&&(x.outline.color[n]??x.outline.color.default),x.pill[f?"on":"off"],i&&x.fullSized,v.position[h],e),...w,children:P.jsx("span",{className:ee(x.inner.base,x.outline[d?"on":"off"],x.outline.pill[d&&f?"on":"off"],x.size[m],d&&!x.outline.color[n]&&x.inner.outline,s&&x.isProcessing,s&&x.inner.isProcessingPadding[m],x.inner.position[h]),children:P.jsxs(P.Fragment,{children:[s&&P.jsx("span",{className:ee(x.spinnerSlot,x.spinnerLeftPosition[m]),children:a||P.jsx(UE,{size:m})}),typeof t<"u"?t:P.jsx("span",{"data-testid":"flowbite-button-label",className:ee(x.label),children:s?o:u})]})})})});VE.displayName="Button";const HE=Object.assign(VE,{Group:zE}),GE=({children:t,...e})=>{const n=r=>{const s=r.target.closest('[role="banner"]');s==null||s.remove()};return P.jsx(HE,{onClick:n,...e,children:t})};GE.displayName="Banner.CollapseButton";const jE=({children:t,...e})=>P.jsx("div",{"data-testid":"flowbite-banner",role:"banner",tabIndex:-1,...e,children:t});jE.displayName="Banner";Object.assign(jE,{CollapseButton:GE});const WE=C.forwardRef(({children:t,className:e,href:n,icon:r,theme:i={},...s},o)=>{const a=typeof n<"u",l=a?"a":"span",c=ge(Ge().breadcrumb.item,i);return P.jsxs("li",{className:ee(c.base,e),...s,children:[P.jsx(bE,{"aria-hidden":!0,className:c.chevron,"data-testid":"flowbite-breadcrumb-separator"}),P.jsxs(l,{ref:o,className:c.href[a?"on":"off"],"data-testid":"flowbite-breadcrumb-item",href:n,children:[r&&P.jsx(r,{"aria-hidden":!0,className:c.icon}),t]})]})});WE.displayName="Breadcrumb.Item";const XE=({children:t,className:e,theme:n={},...r})=>{const i=ge(Ge().breadcrumb.root,n);return P.jsx("nav",{"aria-label":"Breadcrumb",className:ee(i.base,e),...r,children:P.jsx("ol",{className:i.list,children:t})})};XE.displayName="Breadcrumb";Object.assign(XE,{Item:WE});var KE={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",o=0;o<arguments.length;o++){var a=arguments[o];a&&(s=i(s,r(a)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var o="";for(var a in s)e.call(s,a)&&s[a]&&(o=i(o,a));return o}function i(s,o){return o?s?s+" "+o:s+o:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(KE);var kD=KE.exports;const DD=Xg(kD);var j0={exports:{}};function YE(t,e=100,n={}){if(typeof t!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:r}=typeof n=="boolean"?{immediate:n}:n;let i,s,o,a,l;function c(){const d=Date.now()-a;if(d<e&&d>=0)o=setTimeout(c,e-d);else if(o=void 0,!r){const f=i,h=s;i=void 0,s=void 0,l=t.apply(f,h)}}const u=function(...d){if(i&&this!==i)throw new Error("Debounced method called with different contexts.");i=this,s=d,a=Date.now();const f=r&&!o;if(o||(o=setTimeout(c,e)),f){const h=i,m=s;i=void 0,s=void 0,l=t.apply(h,m)}return l};return u.clear=()=>{o&&(clearTimeout(o),o=void 0)},u.flush=()=>{if(!o)return;const d=i,f=s;i=void 0,s=void 0,l=t.apply(d,f),clearTimeout(o),o=void 0},u}j0.exports.debounce=YE;j0.exports=YE;var ID=j0.exports;const ND=Xg(ID);var OD=Object.defineProperty,FD=(t,e,n)=>e in t?OD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Yt=(t,e,n)=>(FD(t,typeof e!="symbol"?e+"":e,n),n);const UD=300,BD=0;class zD extends C.PureComponent{constructor(e){super(e),Yt(this,"container"),Yt(this,"scrolling"),Yt(this,"started"),Yt(this,"pressed"),Yt(this,"isMobile",!1),Yt(this,"internal"),Yt(this,"scrollLeft"),Yt(this,"scrollTop"),Yt(this,"clientX"),Yt(this,"clientY"),Yt(this,"onEndScroll",()=>{this.scrolling=!1,!this.pressed&&this.started&&this.processEnd()}),Yt(this,"onScroll",()=>{const n=this.container.current;(n.scrollLeft!==this.scrollLeft||n.scrollTop!==this.scrollTop)&&(this.scrolling=!0,this.processScroll(),this.onEndScroll())}),Yt(this,"onTouchStart",n=>{const{nativeMobileScroll:r}=this.props;if(this.isDraggable(n.target))if(this.internal=!0,r&&this.scrolling)this.pressed=!0;else{const i=n.touches[0];this.processClick(i.clientX,i.clientY),!r&&this.props.stopPropagation&&n.stopPropagation()}}),Yt(this,"onTouchEnd",()=>{const{nativeMobileScroll:n}=this.props;this.pressed&&(this.started&&(!this.scrolling||!n)?this.processEnd():this.pressed=!1,this.forceUpdate())}),Yt(this,"onTouchMove",n=>{const{nativeMobileScroll:r}=this.props;if(this.pressed&&(!r||!this.isMobile)){const i=n.touches[0];i&&this.processMove(i.clientX,i.clientY),n.preventDefault(),this.props.stopPropagation&&n.stopPropagation()}}),Yt(this,"onMouseDown",n=>{var r,i;this.isDraggable(n.target)&&this.isScrollable()&&(this.internal=!0,((i=(r=this.props)==null?void 0:r.buttons)==null?void 0:i.indexOf(n.button))!==-1&&(this.processClick(n.clientX,n.clientY),n.preventDefault(),this.props.stopPropagation&&n.stopPropagation()))}),Yt(this,"onMouseMove",n=>{this.pressed&&(this.processMove(n.clientX,n.clientY),n.preventDefault(),this.props.stopPropagation&&n.stopPropagation())}),Yt(this,"onMouseUp",n=>{this.pressed&&(this.started?this.processEnd():(this.internal=!1,this.pressed=!1,this.forceUpdate(),this.props.onClick&&this.props.onClick(n)),n.preventDefault(),this.props.stopPropagation&&n.stopPropagation())}),this.container=Ei.createRef(),this.onEndScroll=ND(this.onEndScroll,UD),this.scrolling=!1,this.started=!1,this.pressed=!1,this.internal=!1,this.getRef=this.getRef.bind(this)}componentDidMount(){const{nativeMobileScroll:e}=this.props,n=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),n.addEventListener("touchstart",this.onTouchStart,{passive:!1}),n.addEventListener("mousedown",this.onMouseDown,{passive:!1}),e&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())}componentWillUnmount(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)}getElement(){return this.container.current}isMobileDevice(){return typeof window.orientation<"u"||navigator.userAgent.indexOf("IEMobile")!==-1}isDraggable(e){const n=this.props.ignoreElements;if(n){const r=e.closest(n);return r===null||r.contains(this.getElement())}else return!0}isScrollable(){const e=this.container.current;return e&&(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}processClick(e,n){const r=this.container.current;this.scrollLeft=r==null?void 0:r.scrollLeft,this.scrollTop=r==null?void 0:r.scrollTop,this.clientX=e,this.clientY=n,this.pressed=!0}processStart(e=!0){const{onStartScroll:n}=this.props;this.started=!0,e&&document.body.classList.add("cursor-grab"),n&&n({external:!this.internal}),this.forceUpdate()}processScroll(){if(this.started){const{onScroll:e}=this.props;e&&e({external:!this.internal})}else this.processStart(!1)}processMove(e,n){const{horizontal:r,vertical:i,activationDistance:s,onScroll:o}=this.props,a=this.container.current;this.started?(r&&(a.scrollLeft-=e-this.clientX),i&&(a.scrollTop-=n-this.clientY),o&&o({external:!this.internal}),this.clientX=e,this.clientY=n,this.scrollLeft=a.scrollLeft,this.scrollTop=a.scrollTop):(r&&Math.abs(e-this.clientX)>s||i&&Math.abs(n-this.clientY)>s)&&(this.clientX=e,this.clientY=n,this.processStart())}processEnd(){const{onEndScroll:e}=this.props;this.container.current&&e&&e({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("cursor-grab"),this.forceUpdate()}getRef(e){[this.container,this.props.innerRef].forEach(n=>{n&&(typeof n=="function"?n(e):n.current=e)})}render(){const{children:e,draggingClassName:n,className:r,style:i,hideScrollbars:s}=this.props;return P.jsx("div",{className:DD(r,this.pressed&&n,{"!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab":this.pressed,"overflow-auto":this.isMobile,"overflow-hidden !overflow-x-hidden [overflow:-moz-scrollbars-none] [scrollbar-width:none]":s,"[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent":s}),style:i,ref:this.getRef,onScroll:this.onScroll,children:e})}}Yt(zD,"defaultProps",{nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},buttons:[BD]});const VD=()=>typeof window<"u",HD=C.forwardRef(({className:t,color:e="default",theme:n={},...r},i)=>{const s=ge(Ge().checkbox,n);return P.jsx("input",{ref:i,type:"checkbox",className:ee(s.root.base,s.root.color[e],t),...r})});HD.displayName="Checkbox";function GD(){const[t,e]=C.useState(!1);return C.useEffect(()=>e(!0),[]),t}const jD=({key:t,onChange:e})=>{function n({key:r,newValue:i}){r===t&&e(i)}C.useEffect(()=>(window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)),[])},Lm="light",W0="flowbite-theme-mode",km="flowbite-theme-mode-sync",WD=()=>{const[t,e]=C.useState(KD(kx()));C.useEffect(()=>{Ix(t),Nx(t)},[]),jD({key:W0,onChange(s){if(s)return n(s)}}),XD(s=>e(s));const n=s=>{e(s),Ix(s),Nx(s),document.dispatchEvent(new CustomEvent(km,{detail:s}))},r=()=>{let s=t;s==="auto"&&(s=Dm(s)),s=s==="dark"?"light":"dark",n(s)},i=()=>{const s=kx()??Lm;n(s)};return{mode:t,computedMode:Dm(t),setMode:n,toggleMode:r,clearMode:i}},XD=t=>{C.useEffect(()=>{function e(n){const r=n.detail;t(r)}return document.addEventListener(km,e),()=>document.removeEventListener(km,e)},[])},Ix=t=>localStorage.setItem(W0,t),Nx=t=>{Dm(t)==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},KD=t=>VD()?localStorage.getItem(W0)??t??Lm:Lm,Dm=t=>t==="auto"?YD():t,YD=()=>{var t;return(t=window.matchMedia)!=null&&t.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"},$D=({className:t,theme:e={},iconDark:n=ak,iconLight:r=sk,...i})=>{const s=GD(),{computedMode:o,toggleMode:a}=WD(),l=ge(Ge().darkThemeToggle,e);return P.jsxs("button",{type:"button","aria-label":"Toggle dark mode","data-testid":"dark-theme-toggle",className:ee(l.root.base,t),onClick:a,...i,children:[P.jsx(n,{"aria-label":"Currently dark mode","data-active":s&&o==="dark",className:ee(l.root.icon,"hidden dark:block")}),P.jsx(r,{"aria-label":"Currently light mode","data-active":s&&o==="light",className:ee(l.root.icon,"dark:hidden")})]})};$D.displayName="DarkThemeToggle";const Bc=({children:t,className:e,color:n="default",theme:r={},value:i,...s})=>{const o=ge(Ge().helperText,r);return P.jsx("p",{className:ee(o.root.base,o.root.colors[n],e),...s,children:i??t??""})};Bc.displayName="HelperText";const $E=C.forwardRef(({addon:t,className:e,color:n="gray",helperText:r,icon:i,rightIcon:s,shadow:o,sizing:a="md",theme:l={},type:c="text",...u},d)=>{const f=ge(Ge().textInput,l);return P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:ee(f.base,e),children:[t&&P.jsx("span",{className:f.addon,children:t}),P.jsxs("div",{className:f.field.base,children:[i&&P.jsx("div",{className:f.field.icon.base,children:P.jsx(i,{className:f.field.icon.svg})}),s&&P.jsx("div",{"data-testid":"right-icon",className:f.field.rightIcon.base,children:P.jsx(s,{className:f.field.rightIcon.svg})}),P.jsx("input",{className:ee(f.field.input.base,f.field.input.colors[n],f.field.input.sizes[a],f.field.input.withIcon[i?"on":"off"],f.field.input.withRightIcon[s?"on":"off"],f.field.input.withAddon[t?"on":"off"],f.field.input.withShadow[o?"on":"off"]),type:c,...u,ref:d})]})]}),r&&P.jsx(Bc,{color:n,children:r})]})});$E.displayName="TextInput";const qE=C.createContext(void 0);function Lf(){const t=C.useContext(qE);if(!t)throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");return t}var Lt=(t=>(t[t.Days=0]="Days",t[t.Months=1]="Months",t[t.Years=2]="Years",t[t.Decades=3]="Decades",t))(Lt||{}),ZE=(t=>(t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday",t))(ZE||{});const zc=(t,e,n)=>{const r=new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime();if(e&&n){const i=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),s=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();return r>=i&&r<=s}if(e){const i=new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime();return r>=i}if(n){const i=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();return r<=i}return!0},kf=(t,e)=>(t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),t.getTime()===e.getTime()),qD=(t,e,n)=>(zc(t,e,n)||(e&&t<e?t=e:n&&t>n&&(t=n)),t),ZD=(t,e)=>{const n=new Date(t.getFullYear(),t.getMonth(),1);let i=n.getDay()-e;return i<0&&(i+=7),X0(n,-i)},QD=(t,e)=>{const n=[],r=new Date(0);r.setDate(r.getDate()-r.getDay()+e);const i=new Intl.DateTimeFormat(t,{weekday:"short"});for(let s=0;s<7;s++)n.push(i.format(X0(r,s)));return n},X0=(t,e)=>{const n=new Date(t);return n.setDate(n.getDate()+e),n},JD=(t,e)=>{const n=new Date(t);return n.setMonth(n.getMonth()+e),n},la=(t,e)=>{const n=new Date(t);return n.setFullYear(n.getFullYear()+e),n},Ql=(t,e,n)=>{let r={day:"numeric",month:"long",year:"numeric"};return n&&(r=n),new Intl.DateTimeFormat(t,r).format(e)},ca=(t,e)=>{const n=t.getFullYear();return Math.floor(n/e)*e},eI=(t,e)=>{const n=t.getFullYear(),r=e+9;return n>=e&&n<=r},tI=({theme:t={}})=>{const{theme:e,weekStart:n,minDate:r,maxDate:i,viewDate:s,selectedDate:o,changeSelectedDate:a,language:l}=Lf(),c=ge(e.views.days,t),u=QD(l,n),d=ZD(s,n);return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:c.header.base,children:u.map((f,h)=>P.jsx("span",{className:c.header.title,children:f},h))}),P.jsx("div",{className:c.items.base,children:[...Array(42)].map((f,h)=>{const m=X0(d,h),y=Ql(l,m,{day:"numeric"}),g=kf(o,m),p=!zc(m,r,i);return P.jsx("button",{disabled:p,type:"button",className:ee(c.items.item.base,g&&c.items.item.selected,p&&c.items.item.disabled),onClick:()=>{p||a(m,!0)},children:y},h)})})]})},nI=({theme:t={}})=>{const{theme:e,selectedDate:n,viewDate:r,setViewDate:i,setView:s}=Lf(),o=ge(e.views.decades,t);return P.jsx("div",{className:o.items.base,children:[...Array(12)].map((a,l)=>{const u=ca(r,100)-10+l*10,d=new Date(u,0,1),f=la(d,9),h=eI(r,u),m=!zc(r,d,f);return P.jsx("button",{disabled:m,type:"button",className:ee(o.items.item.base,h&&o.items.item.selected,m&&o.items.item.disabled),onClick:()=>{m||(i(la(r,u-n.getFullYear())),s(Lt.Years))},children:u},l)})})},rI=({theme:t={}})=>{const{theme:e,minDate:n,maxDate:r,selectedDate:i,viewDate:s,language:o,setViewDate:a,setView:l}=Lf(),c=ge(e.views.months,t);return P.jsx("div",{className:c.items.base,children:[...Array(12)].map((u,d)=>{const f=new Date(s.getTime());f.setMonth(d);const h=Ql(o,f,{month:"short"}),m=kf(i,f),y=!zc(f,n,r);return P.jsx("button",{disabled:y,type:"button",className:ee(c.items.item.base,m&&c.items.item.selected,y&&c.items.item.disabled),onClick:()=>{y||(a(f),l(Lt.Days))},children:h},d)})})},iI=({theme:t={}})=>{const{theme:e,selectedDate:n,minDate:r,maxDate:i,viewDate:s,setViewDate:o,setView:a}=Lf(),l=ge(e.views.years,t);return P.jsx("div",{className:l.items.base,children:[...Array(12)].map((c,u)=>{const f=ca(s,10)-1+u*1,h=new Date(s.getTime());h.setFullYear(f);const m=kf(n,h),y=!zc(h,r,i);return P.jsx("button",{disabled:y,type:"button",className:ee(l.items.item.base,m&&l.items.item.selected,y&&l.items.item.disabled),onClick:()=>{y||(o(h),a(Lt.Months))},children:f},u)})})},sI=({title:t,open:e,inline:n=!1,autoHide:r=!0,showClearButton:i=!0,labelClearButton:s="Clear",showTodayButton:o=!0,labelTodayButton:a="Today",defaultDate:l=new Date,minDate:c,maxDate:u,language:d="en",weekStart:f=ZE.Sunday,className:h,theme:m={},onSelectedDateChanged:y,...g},p)=>{const v=ge(Ge().datepicker,m);l=qD(l,c,u);const[_,x]=C.useState(e),[w,T]=C.useState(Lt.Days),[M,R]=C.useState(l),[S,b]=C.useState(l),D=C.useRef(null),F=C.useRef(null),N=(j,W)=>{R(j),y&&y(j),r&&w===Lt.Days&&W==!0&&!n&&x(!1)},I=()=>{N(l,!0),l&&b(l)};C.useImperativeHandle(p,()=>({focus(){var j;(j=D.current)==null||j.focus()},clear(){I()}}));const O=j=>{switch(j){case Lt.Decades:return P.jsx(nI,{theme:v.views.decades});case Lt.Years:return P.jsx(iI,{theme:v.views.years});case Lt.Months:return P.jsx(rI,{theme:v.views.months});case Lt.Days:default:return P.jsx(tI,{theme:v.views.days})}},B=()=>{switch(w){case Lt.Days:return Lt.Months;case Lt.Months:return Lt.Years;case Lt.Years:return Lt.Decades}return w},G=()=>{switch(w){case Lt.Decades:return`${ca(S,100)} - ${ca(S,100)+90}`;case Lt.Years:return`${ca(S,10)} - ${ca(S,10)+9}`;case Lt.Months:return Ql(d,S,{year:"numeric"});case Lt.Days:default:return Ql(d,S,{month:"long",year:"numeric"})}},L=(j,W,Q)=>{switch(j){case Lt.Days:return new Date(JD(W,Q));case Lt.Months:return new Date(la(W,Q));case Lt.Years:return new Date(la(W,Q*10));case Lt.Decades:return new Date(la(W,Q*100));default:return new Date(la(W,Q*10))}};return C.useEffect(()=>{const j=W=>{var ve,$;const Q=(ve=F==null?void 0:F.current)==null?void 0:ve.contains(W.target),oe=($=D==null?void 0:D.current)==null?void 0:$.contains(W.target);!Q&&!oe&&x(!1)};return document.addEventListener("mousedown",j),()=>{document.removeEventListener("mousedown",j)}},[D,F,x]),P.jsx(qE.Provider,{value:{theme:v,language:d,minDate:c,maxDate:u,weekStart:f,isOpen:_,setIsOpen:x,view:w,setView:T,viewDate:S,setViewDate:b,selectedDate:M,setSelectedDate:R,changeSelectedDate:N},children:P.jsxs("div",{className:ee(v.root.base,h),children:[!n&&P.jsx($E,{theme:v.root.input,icon:nk,ref:D,onFocus:()=>{kf(S,M)||b(M),x(!0)},value:M&&Ql(d,M),readOnly:!0,...g}),(_||n)&&P.jsx("div",{ref:F,className:ee(v.popup.root.base,n&&v.popup.root.inline),children:P.jsxs("div",{className:v.popup.root.inner,children:[P.jsxs("div",{className:v.popup.header.base,children:[t&&P.jsx("div",{className:v.popup.header.title,children:t}),P.jsxs("div",{className:v.popup.header.selectors.base,children:[P.jsx("button",{type:"button",className:ee(v.popup.header.selectors.button.base,v.popup.header.selectors.button.prev),onClick:()=>b(L(w,S,-1)),children:P.jsx(ek,{})}),P.jsx("button",{type:"button",className:ee(v.popup.header.selectors.button.base,v.popup.header.selectors.button.view),onClick:()=>T(B()),children:G()}),P.jsx("button",{type:"button",className:ee(v.popup.header.selectors.button.base,v.popup.header.selectors.button.next),onClick:()=>b(L(w,S,1)),children:P.jsx(tk,{})})]})]}),P.jsx("div",{className:v.popup.view.base,children:O(w)}),(i||o)&&P.jsxs("div",{className:v.popup.footer.base,children:[o&&P.jsx("button",{type:"button",className:ee(v.popup.footer.button.base,v.popup.footer.button.today),onClick:()=>{const j=new Date;N(j,!0),b(j)},children:a}),i&&P.jsx("button",{type:"button",className:ee(v.popup.footer.button.base,v.popup.footer.button.clear),onClick:()=>{N(l,!0),l&&b(l)},children:s})]})]})})]})})},oI=C.forwardRef(sI);oI.displayName="Datepicker";function Ui(t){return QE(t)?(t.nodeName||"").toLowerCase():"#document"}function jn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ji(t){var e;return(e=(QE(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function QE(t){return t instanceof Node||t instanceof jn(t).Node}function Rt(t){return t instanceof Element||t instanceof jn(t).Element}function hn(t){return t instanceof HTMLElement||t instanceof jn(t).HTMLElement}function Im(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof jn(t).ShadowRoot}function Vc(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tr(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function aI(t){return["table","td","th"].includes(Ui(t))}function K0(t){const e=Y0(),n=tr(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function lI(t){let e=wo(t);for(;hn(e)&&!Fa(e);){if(K0(e))return e;e=wo(e)}return null}function Y0(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fa(t){return["html","body","#document"].includes(Ui(t))}function tr(t){return jn(t).getComputedStyle(t)}function Df(t){return Rt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function wo(t){if(Ui(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Im(t)&&t.host||ji(t);return Im(e)?e.host:e}function JE(t){const e=wo(t);return Fa(e)?t.ownerDocument?t.ownerDocument.body:t.body:hn(e)&&Vc(e)?e:JE(e)}function ws(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=JE(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=jn(i);return s?e.concat(o,o.visualViewport||[],Vc(i)?i:[],o.frameElement&&n?ws(o.frameElement):[]):e.concat(i,ws(i,[],n))}function Wr(t){let e=t.activeElement;for(;((n=e)==null||(n=n.shadowRoot)==null?void 0:n.activeElement)!=null;){var n;e=e.shadowRoot.activeElement}return e}function Gt(t,e){if(!t||!e)return!1;const n=e.getRootNode==null?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&Im(n)){let r=e;for(;r;){if(t===r)return!0;r=r.parentNode||r.host}}return!1}function $0(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}function eM(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:n,version:r}=e;return n+"/"+r}).join(" "):navigator.userAgent}function tM(t){return t.mozInputSource===0&&t.isTrusted?!0:Nm()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function q0(t){return cI()?!1:!Nm()&&t.width===0&&t.height===0||Nm()&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0&&t.pointerType==="mouse"||t.width<1&&t.height<1&&t.pressure===0&&t.detail===0&&t.pointerType==="touch"}function Z0(){return/apple/i.test(navigator.vendor)}function Nm(){const t=/android/i;return t.test($0())||t.test(eM())}function nM(){return $0().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function cI(){return eM().includes("jsdom/")}function Wd(t,e){const n=["mouse","pen"];return e||n.push("",void 0),n.includes(t)}function uI(t){return"nativeEvent"in t}function dI(t){return t.matches("html,body")}function Cn(t){return(t==null?void 0:t.ownerDocument)||document}function Ph(t,e){if(e==null)return!1;if("composedPath"in t)return t.composedPath().includes(e);const n=t;return n.target!=null&&e.contains(n.target)}function cs(t){return"composedPath"in t?t.composedPath()[0]:t.target}const fI="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Q0(t){return hn(t)&&t.matches(fI)}function ln(t){t.preventDefault(),t.stopPropagation()}function rM(t){return t?t.getAttribute("role")==="combobox"&&Q0(t):!1}const hI=["top","right","bottom","left"],Ox=["start","end"],Fx=hI.reduce((t,e)=>t.concat(e,e+"-"+Ox[0],e+"-"+Ox[1]),[]),Ua=Math.min,ho=Math.max,Xd=Math.round,ua=Math.floor,As=t=>({x:t,y:t}),pI={left:"right",right:"left",bottom:"top",top:"bottom"},mI={start:"end",end:"start"};function Om(t,e,n){return ho(t,Ua(e,n))}function rl(t,e){return typeof t=="function"?t(e):t}function Bi(t){return t.split("-")[0]}function qr(t){return t.split("-")[1]}function iM(t){return t==="x"?"y":"x"}function J0(t){return t==="y"?"height":"width"}function If(t){return["top","bottom"].includes(Bi(t))?"y":"x"}function ey(t){return iM(If(t))}function sM(t,e,n){n===void 0&&(n=!1);const r=qr(t),i=ey(t),s=J0(i);let o=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=Yd(o)),[o,Yd(o)]}function gI(t){const e=Yd(t);return[Kd(t),e,Kd(e)]}function Kd(t){return t.replace(/start|end/g,e=>mI[e])}function yI(t,e,n){const r=["left","right"],i=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:r:e?r:i;case"left":case"right":return e?s:o;default:return[]}}function vI(t,e,n,r){const i=qr(t);let s=yI(Bi(t),n==="start",r);return i&&(s=s.map(o=>o+"-"+i),e&&(s=s.concat(s.map(Kd)))),s}function Yd(t){return t.replace(/left|right|bottom|top/g,e=>pI[e])}function xI(t){return{top:0,right:0,bottom:0,left:0,...t}}function oM(t){return typeof t!="number"?xI(t):{top:t,right:t,bottom:t,left:t}}function $d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function Ux(t,e,n){let{reference:r,floating:i}=t;const s=If(e),o=ey(e),a=J0(o),l=Bi(e),c=s==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[a]/2-i[a]/2;let h;switch(l){case"top":h={x:u,y:r.y-i.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-i.width,y:d};break;default:h={x:r.x,y:r.y}}switch(qr(e)){case"start":h[o]-=f*(n&&c?-1:1);break;case"end":h[o]+=f*(n&&c?-1:1);break}return h}const _I=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Ux(c,r,l),f=r,h={},m=0;for(let y=0;y<a.length;y++){const{name:g,fn:p}=a[y],{x:v,y:_,data:x,reset:w}=await p({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:h,rects:c,platform:o,elements:{reference:t,floating:e}});u=v??u,d=_??d,h={...h,[g]:{...h[g],...x}},w&&m<=50&&(m++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(c=w.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):w.rects),{x:u,y:d}=Ux(c,f,l)),y=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:h}};async function ty(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=rl(e,t),m=oM(h),g=a[f?d==="floating"?"reference":"floating":d],p=$d(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(g)))==null||n?g:g.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),v=d==="floating"?{...o.floating,x:r,y:i}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),x=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},w=$d(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:_,strategy:l}):v);return{top:(p.top-w.top+m.top)/x.y,bottom:(w.bottom-p.bottom+m.bottom)/x.y,left:(p.left-w.left+m.left)/x.x,right:(w.right-p.right+m.right)/x.x}}const bI=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:r,placement:i,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=rl(t,e)||{};if(c==null)return{};const d=oM(u),f={x:n,y:r},h=ey(i),m=J0(h),y=await o.getDimensions(c),g=h==="y",p=g?"top":"left",v=g?"bottom":"right",_=g?"clientHeight":"clientWidth",x=s.reference[m]+s.reference[h]-f[h]-s.floating[m],w=f[h]-s.reference[h],T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let M=T?T[_]:0;(!M||!await(o.isElement==null?void 0:o.isElement(T)))&&(M=a.floating[_]||s.floating[m]);const R=x/2-w/2,S=M/2-y[m]/2-1,b=Ua(d[p],S),D=Ua(d[v],S),F=b,N=M-y[m]-D,I=M/2-y[m]/2+R,O=Om(F,I,N),B=!l.arrow&&qr(i)!=null&&I!==O&&s.reference[m]/2-(I<F?b:D)-y[m]/2<0,G=B?I<F?I-F:I-N:0;return{[h]:f[h]+G,data:{[h]:O,centerOffset:I-O-G,...B&&{alignmentOffset:G}},reset:B}}});function wI(t,e,n){return(t?[...n.filter(i=>qr(i)===t),...n.filter(i=>qr(i)!==t)]:n.filter(i=>Bi(i)===i)).filter(i=>t?qr(i)===t||(e?Kd(i)!==i:!1):!0)}const SI=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,r,i;const{rects:s,middlewareData:o,placement:a,platform:l,elements:c}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:f=Fx,autoAlignment:h=!0,...m}=rl(t,e),y=d!==void 0||f===Fx?wI(d||null,h,f):f,g=await ty(e,m),p=((n=o.autoPlacement)==null?void 0:n.index)||0,v=y[p];if(v==null)return{};const _=sM(v,s,await(l.isRTL==null?void 0:l.isRTL(c.floating)));if(a!==v)return{reset:{placement:y[0]}};const x=[g[Bi(v)],g[_[0]],g[_[1]]],w=[...((r=o.autoPlacement)==null?void 0:r.overflows)||[],{placement:v,overflows:x}],T=y[p+1];if(T)return{data:{index:p+1,overflows:w},reset:{placement:T}};const M=w.map(b=>{const D=qr(b.placement);return[b.placement,D&&u?b.overflows.slice(0,2).reduce((F,N)=>F+N,0):b.overflows[0],b.overflows]}).sort((b,D)=>b[1]-D[1]),S=((i=M.filter(b=>b[2].slice(0,qr(b[0])?2:3).every(D=>D<=0))[0])==null?void 0:i[0])||M[0][0];return S!==a?{data:{index:p+1,overflows:w},reset:{placement:S}}:{}}}},TI=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,r;const{placement:i,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:y=!0,...g}=rl(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const p=Bi(i),v=Bi(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=f||(v||!y?[Yd(a)]:gI(a));!f&&m!=="none"&&x.push(...vI(a,y,m,_));const w=[a,...x],T=await ty(e,g),M=[];let R=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&M.push(T[p]),d){const F=sM(i,o,_);M.push(T[F[0]],T[F[1]])}if(R=[...R,{placement:i,overflows:M}],!M.every(F=>F<=0)){var S,b;const F=(((S=s.flip)==null?void 0:S.index)||0)+1,N=w[F];if(N)return{data:{index:F,overflows:R},reset:{placement:N}};let I=(b=R.filter(O=>O.overflows[0]<=0).sort((O,B)=>O.overflows[1]-B.overflows[1])[0])==null?void 0:b.placement;if(!I)switch(h){case"bestFit":{var D;const O=(D=R.map(B=>[B.placement,B.overflows.filter(G=>G>0).reduce((G,L)=>G+L,0)]).sort((B,G)=>B[1]-G[1])[0])==null?void 0:D[0];O&&(I=O);break}case"initialPlacement":I=a;break}if(i!==I)return{reset:{placement:I}}}return{}}}};async function EI(t,e){const{placement:n,platform:r,elements:i}=t,s=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Bi(n),a=qr(n),l=If(n)==="y",c=["left","top"].includes(o)?-1:1,u=s&&l?-1:1,d=rl(e,t);let{mainAxis:f,crossAxis:h,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof m=="number"&&(h=a==="end"?m*-1:m),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}const MI=function(t){return{name:"offset",options:t,async fn(e){var n,r;const{x:i,y:s,placement:o,middlewareData:a}=e,l=await EI(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:o}}}}},AI=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:r,placement:i}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:g=>{let{x:p,y:v}=g;return{x:p,y:v}}},...l}=rl(t,e),c={x:n,y:r},u=await ty(e,l),d=If(Bi(i)),f=iM(d);let h=c[f],m=c[d];if(s){const g=f==="y"?"top":"left",p=f==="y"?"bottom":"right",v=h+u[g],_=h-u[p];h=Om(v,h,_)}if(o){const g=d==="y"?"top":"left",p=d==="y"?"bottom":"right",v=m+u[g],_=m-u[p];m=Om(v,m,_)}const y=a.fn({...e,[f]:h,[d]:m});return{...y,data:{x:y.x-n,y:y.y-r}}}}};function aM(t){const e=tr(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=hn(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,a=Xd(n)!==s||Xd(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function ny(t){return Rt(t)?t:t.contextElement}function Ta(t){const e=ny(t);if(!hn(e))return As(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=aM(e);let o=(s?Xd(n.width):n.width)/r,a=(s?Xd(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const RI=As(0);function lM(t){const e=jn(t);return!Y0()||!e.visualViewport?RI:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function CI(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==jn(t)?!1:e}function So(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ny(t);let o=As(1);e&&(r?Rt(r)&&(o=Ta(r)):o=Ta(t));const a=CI(s,n,r)?lM(s):As(0);let l=(i.left+a.x)/o.x,c=(i.top+a.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(s){const f=jn(s),h=r&&Rt(r)?jn(r):r;let m=f,y=m.frameElement;for(;y&&r&&h!==m;){const g=Ta(y),p=y.getBoundingClientRect(),v=tr(y),_=p.left+(y.clientLeft+parseFloat(v.paddingLeft))*g.x,x=p.top+(y.clientTop+parseFloat(v.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=_,c+=x,m=jn(y),y=m.frameElement}}return $d({width:u,height:d,x:l,y:c})}const PI=[":popover-open",":modal"];function cM(t){return PI.some(e=>{try{return t.matches(e)}catch{return!1}})}function LI(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=ji(r),a=e?cM(e.floating):!1;if(r===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=As(1);const u=As(0),d=hn(r);if((d||!d&&!s)&&((Ui(r)!=="body"||Vc(o))&&(l=Df(r)),hn(r))){const f=So(r);c=Ta(r),u.x=f.x+r.clientLeft,u.y=f.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}}function kI(t){return Array.from(t.getClientRects())}function uM(t){return So(ji(t)).left+Df(t).scrollLeft}function DI(t){const e=ji(t),n=Df(t),r=t.ownerDocument.body,i=ho(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=ho(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+uM(t);const a=-n.scrollTop;return tr(r).direction==="rtl"&&(o+=ho(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:a}}function II(t,e){const n=jn(t),r=ji(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;const c=Y0();(!c||c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a,y:l}}function NI(t,e){const n=So(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=hn(t)?Ta(t):As(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=i*s.x,c=r*s.y;return{width:o,height:a,x:l,y:c}}function Bx(t,e,n){let r;if(e==="viewport")r=II(t,n);else if(e==="document")r=DI(ji(t));else if(Rt(e))r=NI(e,n);else{const i=lM(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return $d(r)}function dM(t,e){const n=wo(t);return n===e||!Rt(n)||Fa(n)?!1:tr(n).position==="fixed"||dM(n,e)}function OI(t,e){const n=e.get(t);if(n)return n;let r=ws(t,[],!1).filter(a=>Rt(a)&&Ui(a)!=="body"),i=null;const s=tr(t).position==="fixed";let o=s?wo(t):t;for(;Rt(o)&&!Fa(o);){const a=tr(o),l=K0(o);!l&&a.position==="fixed"&&(i=null),(s?!l&&!i:!l&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Vc(o)&&!l&&dM(t,o))?r=r.filter(u=>u!==o):i=a,o=wo(o)}return e.set(t,r),r}function FI(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?OI(e,this._c):[].concat(n),r],a=o[0],l=o.reduce((c,u)=>{const d=Bx(e,u,i);return c.top=ho(d.top,c.top),c.right=Ua(d.right,c.right),c.bottom=Ua(d.bottom,c.bottom),c.left=ho(d.left,c.left),c},Bx(e,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function UI(t){const{width:e,height:n}=aM(t);return{width:e,height:n}}function BI(t,e,n){const r=hn(e),i=ji(e),s=n==="fixed",o=So(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=As(0);if(r||!r&&!s)if((Ui(e)!=="body"||Vc(i))&&(a=Df(e)),r){const d=So(e,!0,s,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else i&&(l.x=uM(i));const c=o.left+a.scrollLeft-l.x,u=o.top+a.scrollTop-l.y;return{x:c,y:u,width:o.width,height:o.height}}function zx(t,e){return!hn(t)||tr(t).position==="fixed"?null:e?e(t):t.offsetParent}function fM(t,e){const n=jn(t);if(!hn(t)||cM(t))return n;let r=zx(t,e);for(;r&&aI(r)&&tr(r).position==="static";)r=zx(r,e);return r&&(Ui(r)==="html"||Ui(r)==="body"&&tr(r).position==="static"&&!K0(r))?n:r||lI(t)||n}const zI=async function(t){const e=this.getOffsetParent||fM,n=this.getDimensions;return{reference:BI(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}};function VI(t){return tr(t).direction==="rtl"}const HI={convertOffsetParentRelativeRectToViewportRelativeRect:LI,getDocumentElement:ji,getClippingRect:FI,getOffsetParent:fM,getElementRects:zI,getClientRects:kI,getDimensions:UI,getScale:Ta,isElement:Rt,isRTL:VI};function GI(t,e){let n=null,r;const i=ji(t);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:u,width:d,height:f}=t.getBoundingClientRect();if(a||e(),!d||!f)return;const h=ua(u),m=ua(i.clientWidth-(c+d)),y=ua(i.clientHeight-(u+f)),g=ua(c),v={rootMargin:-h+"px "+-m+"px "+-y+"px "+-g+"px",threshold:ho(0,Ua(1,l))||1};let _=!0;function x(w){const T=w[0].intersectionRatio;if(T!==l){if(!_)return o();T?o(!1,T):r=setTimeout(()=>{o(!1,1e-7)},100)}_=!1}try{n=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,v)}n.observe(t)}return o(!0),s}function hM(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,c=ny(t),u=i||s?[...c?ws(c):[],...ws(e)]:[];u.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=c&&a?GI(c,n):null;let f=-1,h=null;o&&(h=new ResizeObserver(p=>{let[v]=p;v&&v.target===c&&h&&(h.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(e)})),n()}),c&&!l&&h.observe(c),h.observe(e));let m,y=l?So(t):null;l&&g();function g(){const p=So(t);y&&(p.x!==y.x||p.y!==y.y||p.width!==y.width||p.height!==y.height)&&n(),y=p,m=requestAnimationFrame(g)}return n(),()=>{var p;u.forEach(v=>{i&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),d==null||d(),(p=h)==null||p.disconnect(),h=null,l&&cancelAnimationFrame(m)}}const jI=SI,WI=AI,XI=TI,Vx=bI,KI=(t,e,n)=>{const r=new Map,i={platform:HI,...n},s={...i.platform,_c:r};return _I(t,e,{...i,platform:s})},YI=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:r,padding:i}=typeof t=="function"?t(n):t;return r&&e(r)?r.current!=null?Vx({element:r.current,padding:i}).fn(n):{}:r?Vx({element:r,padding:i}).fn(n):{}}}};var cd=typeof document<"u"?C.useLayoutEffect:C.useEffect;function qd(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,r,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(r=n;r--!==0;)if(!qd(t[r],e[r]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(e,i[r]))return!1;for(r=n;r--!==0;){const s=i[r];if(!(s==="_owner"&&t.$$typeof)&&!qd(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function pM(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Hx(t,e){const n=pM(t);return Math.round(e*n)/n}function Gx(t){const e=C.useRef(t);return cd(()=>{e.current=t}),e}function $I(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,d]=C.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[f,h]=C.useState(r);qd(f,r)||h(r);const[m,y]=C.useState(null),[g,p]=C.useState(null),v=C.useCallback(G=>{G!==T.current&&(T.current=G,y(G))},[]),_=C.useCallback(G=>{G!==M.current&&(M.current=G,p(G))},[]),x=s||m,w=o||g,T=C.useRef(null),M=C.useRef(null),R=C.useRef(u),S=l!=null,b=Gx(l),D=Gx(i),F=C.useCallback(()=>{if(!T.current||!M.current)return;const G={placement:e,strategy:n,middleware:f};D.current&&(G.platform=D.current),KI(T.current,M.current,G).then(L=>{const j={...L,isPositioned:!0};N.current&&!qd(R.current,j)&&(R.current=j,V0.flushSync(()=>{d(j)}))})},[f,e,n,D]);cd(()=>{c===!1&&R.current.isPositioned&&(R.current.isPositioned=!1,d(G=>({...G,isPositioned:!1})))},[c]);const N=C.useRef(!1);cd(()=>(N.current=!0,()=>{N.current=!1}),[]),cd(()=>{if(x&&(T.current=x),w&&(M.current=w),x&&w){if(b.current)return b.current(x,w,F);F()}},[x,w,F,b,S]);const I=C.useMemo(()=>({reference:T,floating:M,setReference:v,setFloating:_}),[v,_]),O=C.useMemo(()=>({reference:x,floating:w}),[x,w]),B=C.useMemo(()=>{const G={position:n,left:0,top:0};if(!O.floating)return G;const L=Hx(O.floating,u.x),j=Hx(O.floating,u.y);return a?{...G,transform:"translate("+L+"px, "+j+"px)",...pM(O.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:j}},[n,a,O.floating,u.x,u.y]);return C.useMemo(()=>({...u,update:F,refs:I,elements:O,floatingStyles:B}),[u,F,I,O,B])}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var qI=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Zd=qI.join(","),mM=typeof Element>"u",Ba=mM?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Qd=!mM&&Element.prototype.getRootNode?function(t){var e;return t==null||(e=t.getRootNode)===null||e===void 0?void 0:e.call(t)}:function(t){return t==null?void 0:t.ownerDocument},Jd=function t(e,n){var r;n===void 0&&(n=!0);var i=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),s=i===""||i==="true",o=s||n&&e&&t(e.parentNode);return o},ZI=function(e){var n,r=e==null||(n=e.getAttribute)===null||n===void 0?void 0:n.call(e,"contenteditable");return r===""||r==="true"},QI=function(e,n,r){if(Jd(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(Zd));return n&&Ba.call(e,Zd)&&i.unshift(e),i=i.filter(r),i},JI=function t(e,n,r){for(var i=[],s=Array.from(e);s.length;){var o=s.shift();if(!Jd(o,!1))if(o.tagName==="SLOT"){var a=o.assignedElements(),l=a.length?a:o.children,c=t(l,!0,r);r.flatten?i.push.apply(i,c):i.push({scopeParent:o,candidates:c})}else{var u=Ba.call(o,Zd);u&&r.filter(o)&&(n||!e.includes(o))&&i.push(o);var d=o.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(o),f=!Jd(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(o));if(d&&f){var h=t(d===!0?o.children:d.children,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:o,candidates:h})}else s.unshift.apply(s,o.children)}}return i},gM=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},yM=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||ZI(e))&&!gM(e)?0:e.tabIndex},eN=function(e,n){var r=yM(e);return r<0&&n&&!gM(e)?0:r},tN=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},vM=function(e){return e.tagName==="INPUT"},nN=function(e){return vM(e)&&e.type==="hidden"},rN=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},iN=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},sN=function(e){if(!e.name)return!0;var n=e.form||Qd(e),r=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var s=iN(i,e.form);return!s||s===e},oN=function(e){return vM(e)&&e.type==="radio"},aN=function(e){return oN(e)&&!sN(e)},lN=function(e){var n,r=e&&Qd(e),i=(n=r)===null||n===void 0?void 0:n.host,s=!1;if(r&&r!==e){var o,a,l;for(s=!!((o=i)!==null&&o!==void 0&&(a=o.ownerDocument)!==null&&a!==void 0&&a.contains(i)||e!=null&&(l=e.ownerDocument)!==null&&l!==void 0&&l.contains(e));!s&&i;){var c,u,d;r=Qd(i),i=(c=r)===null||c===void 0?void 0:c.host,s=!!((u=i)!==null&&u!==void 0&&(d=u.ownerDocument)!==null&&d!==void 0&&d.contains(i))}}return s},jx=function(e){var n=e.getBoundingClientRect(),r=n.width,i=n.height;return r===0&&i===0},cN=function(e,n){var r=n.displayCheck,i=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=Ba.call(e,"details>summary:first-of-type"),o=s?e.parentElement:e;if(Ba.call(o,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var a=e;e;){var l=e.parentElement,c=Qd(e);if(l&&!l.shadowRoot&&i(l)===!0)return jx(e);e.assignedSlot?e=e.assignedSlot:!l&&c!==e.ownerDocument?e=c.host:e=l}e=a}if(lN(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return jx(e);return!1},uN=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var i=n.children.item(r);if(i.tagName==="LEGEND")return Ba.call(n,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}n=n.parentElement}return!1},dN=function(e,n){return!(n.disabled||Jd(n)||nN(n)||cN(n,e)||rN(n)||uN(n))},Fm=function(e,n){return!(aN(n)||yM(n)<0||!dN(e,n))},fN=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},hN=function t(e){var n=[],r=[];return e.forEach(function(i,s){var o=!!i.scopeParent,a=o?i.scopeParent:i,l=eN(a,o),c=o?t(i.candidates):a;l===0?o?n.push.apply(n,c):n.push(a):r.push({documentOrder:s,tabIndex:l,item:i,isScope:o,content:c})}),r.sort(tN).reduce(function(i,s){return s.isScope?i.push.apply(i,s.content):i.push(s.content),i},[]).concat(n)},Nf=function(e,n){n=n||{};var r;return n.getShadowRoot?r=JI([e],n.includeContainer,{filter:Fm.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:fN}):r=QI(e,n.includeContainer,Fm.bind(null,n)),hN(r)},pN=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Ba.call(e,Zd)===!1?!1:Fm(n,e)};function xM(t){return C.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})},t)}const mN=fS.useInsertionEffect,gN=mN||(t=>t());function Xr(t){const e=C.useRef(()=>{});return gN(()=>{e.current=t}),C.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}const ry="ArrowUp",Hc="ArrowDown",za="ArrowLeft",il="ArrowRight";function gu(t,e,n){return Math.floor(t/e)!==n}function Jl(t,e){return e<0||e>=t.current.length}function Lh(t,e){return vn(t,{disabledIndices:e})}function Wx(t,e){return vn(t,{decrement:!0,startingIndex:t.current.length,disabledIndices:e})}function vn(t,e){let{startingIndex:n=-1,decrement:r=!1,disabledIndices:i,amount:s=1}=e===void 0?{}:e;const o=t.current,a=i?c=>i.includes(c):c=>{const u=o[c];return u==null||u.hasAttribute("disabled")||u.getAttribute("aria-disabled")==="true"};let l=n;do l+=r?-s:s;while(l>=0&&l<=o.length-1&&a(l));return l}function yN(t,e){let{event:n,orientation:r,loop:i,cols:s,disabledIndices:o,minIndex:a,maxIndex:l,prevIndex:c,stopEvent:u=!1}=e,d=c;if(n.key===ry){if(u&&ln(n),c===-1)d=l;else if(d=vn(t,{startingIndex:d,amount:s,decrement:!0,disabledIndices:o}),i&&(c-s<a||d<0)){const f=c%s,h=l%s,m=l-(h-f);h===f?d=l:d=h>f?m:m-s}Jl(t,d)&&(d=c)}if(n.key===Hc&&(u&&ln(n),c===-1?d=a:(d=vn(t,{startingIndex:c,amount:s,disabledIndices:o}),i&&c+s>l&&(d=vn(t,{startingIndex:c%s-s,amount:s,disabledIndices:o}))),Jl(t,d)&&(d=c)),r==="both"){const f=ua(c/s);n.key===il&&(u&&ln(n),c%s!==s-1?(d=vn(t,{startingIndex:c,disabledIndices:o}),i&&gu(d,s,f)&&(d=vn(t,{startingIndex:c-c%s-1,disabledIndices:o}))):i&&(d=vn(t,{startingIndex:c-c%s-1,disabledIndices:o})),gu(d,s,f)&&(d=c)),n.key===za&&(u&&ln(n),c%s!==0?(d=vn(t,{startingIndex:c,disabledIndices:o,decrement:!0}),i&&gu(d,s,f)&&(d=vn(t,{startingIndex:c+(s-c%s),decrement:!0,disabledIndices:o}))):i&&(d=vn(t,{startingIndex:c+(s-c%s),decrement:!0,disabledIndices:o})),gu(d,s,f)&&(d=c));const h=ua(l/s)===f;Jl(t,d)&&(i&&h?d=n.key===za?l:vn(t,{startingIndex:c-c%s-1,disabledIndices:o}):d=c)}return d}function vN(t,e,n){const r=[];let i=0;return t.forEach((s,o)=>{let{width:a,height:l}=s,c=!1;for(n&&(i=0);!c;){const u=[];for(let d=0;d<a;d++)for(let f=0;f<l;f++)u.push(i+d+f*e);i%e+a<=e&&u.every(d=>r[d]==null)?(u.forEach(d=>{r[d]=o}),c=!0):i++}}),[...r]}function xN(t,e,n,r,i){if(t===-1)return-1;const s=n.indexOf(t);switch(i){case"tl":return s;case"tr":return s+e[t].width-1;case"bl":return s+(e[t].height-1)*r;case"br":return n.lastIndexOf(t)}}function _N(t,e){return e.flatMap((n,r)=>t.includes(n)?[r]:[])}let Xx=0;function mi(t,e){e===void 0&&(e={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:i=!1}=e;r&&cancelAnimationFrame(Xx);const s=()=>t==null?void 0:t.focus({preventScroll:n});i?s():Xx=requestAnimationFrame(s)}var wt=typeof document<"u"?C.useLayoutEffect:C.useEffect;function bN(t,e){const n=t.compareDocumentPosition(e);return n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS?1:0}function wN(t,e){if(t.size!==e.size)return!1;for(const[n,r]of t.entries())if(r!==e.get(n))return!1;return!0}const _M=C.createContext({register:()=>{},unregister:()=>{},map:new Map,elementsRef:{current:[]}});function SN(t){let{children:e,elementsRef:n,labelsRef:r}=t;const[i,s]=C.useState(()=>new Map),o=C.useCallback(l=>{s(c=>new Map(c).set(l,null))},[]),a=C.useCallback(l=>{s(c=>{const u=new Map(c);return u.delete(l),u})},[]);return wt(()=>{const l=new Map(i);Array.from(l.keys()).sort(bN).forEach((u,d)=>{l.set(u,d)}),wN(i,l)||s(l)},[i]),C.createElement(_M.Provider,{value:C.useMemo(()=>({register:o,unregister:a,map:i,elementsRef:n,labelsRef:r}),[o,a,i,n,r])},e)}function TN(t){let{label:e}=t===void 0?{}:t;const[n,r]=C.useState(null),i=C.useRef(null),{register:s,unregister:o,map:a,elementsRef:l,labelsRef:c}=C.useContext(_M),u=C.useCallback(d=>{if(i.current=d,n!==null&&(l.current[n]=d,c)){var f;const h=e!==void 0;c.current[n]=h?e:(f=d==null?void 0:d.textContent)!=null?f:null}},[n,l,c,e]);return wt(()=>{const d=i.current;if(d)return s(d),()=>{o(d)}},[s,o]),wt(()=>{const d=i.current?a.get(i.current):null;d!=null&&r(d)},[a]),C.useMemo(()=>({ref:u,index:n??-1}),[n,u])}function Ec(){return Ec=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ec.apply(this,arguments)}let kh=!1,EN=0;const Kx=()=>"floating-ui-"+EN++;function MN(){const[t,e]=C.useState(()=>kh?Kx():void 0);return wt(()=>{t==null&&e(Kx())},[]),C.useEffect(()=>{kh||(kh=!0)},[]),t}const AN=fS.useId,Of=AN||MN;function RN(){const t=new Map;return{emit(e,n){var r;(r=t.get(e))==null||r.forEach(i=>i(n))},on(e,n){t.set(e,[...t.get(e)||[],n])},off(e,n){var r;t.set(e,((r=t.get(e))==null?void 0:r.filter(i=>i!==n))||[])}}}const CN=C.createContext(null),PN=C.createContext(null),Ff=()=>{var t;return((t=C.useContext(CN))==null?void 0:t.id)||null},Gc=()=>C.useContext(PN);function To(t){return"data-floating-ui-"+t}function Zr(t){const e=C.useRef(t);return wt(()=>{e.current=t}),e}const Yx=To("safe-polygon");function Dh(t,e,n){return n&&!Wd(n)?0:typeof t=="number"?t:t==null?void 0:t[e]}function LN(t,e){e===void 0&&(e={});const{open:n,onOpenChange:r,dataRef:i,events:s,elements:{domReference:o,floating:a},refs:l}=t,{enabled:c=!0,delay:u=0,handleClose:d=null,mouseOnly:f=!1,restMs:h=0,move:m=!0}=e,y=Gc(),g=Ff(),p=Zr(d),v=Zr(u),_=C.useRef(),x=C.useRef(),w=C.useRef(),T=C.useRef(),M=C.useRef(!0),R=C.useRef(!1),S=C.useRef(()=>{}),b=C.useCallback(()=>{var I;const O=(I=i.current.openEvent)==null?void 0:I.type;return(O==null?void 0:O.includes("mouse"))&&O!=="mousedown"},[i]);C.useEffect(()=>{if(!c)return;function I(O){let{open:B}=O;B||(clearTimeout(x.current),clearTimeout(T.current),M.current=!0)}return s.on("openchange",I),()=>{s.off("openchange",I)}},[c,s]),C.useEffect(()=>{if(!c||!p.current||!n)return;function I(B){b()&&r(!1,B,"hover")}const O=Cn(a).documentElement;return O.addEventListener("mouseleave",I),()=>{O.removeEventListener("mouseleave",I)}},[a,n,r,c,p,b]);const D=C.useCallback(function(I,O,B){O===void 0&&(O=!0),B===void 0&&(B="hover");const G=Dh(v.current,"close",_.current);G&&!w.current?(clearTimeout(x.current),x.current=setTimeout(()=>r(!1,I,B),G)):O&&(clearTimeout(x.current),r(!1,I,B))},[v,r]),F=C.useCallback(()=>{S.current(),w.current=void 0},[]),N=C.useCallback(()=>{if(R.current){const I=Cn(l.floating.current).body;I.style.pointerEvents="",I.removeAttribute(Yx),R.current=!1}},[l]);return C.useEffect(()=>{if(!c)return;function I(){return i.current.openEvent?["click","mousedown"].includes(i.current.openEvent.type):!1}function O(L){if(clearTimeout(x.current),M.current=!1,f&&!Wd(_.current)||h>0&&Dh(v.current,"open")===0)return;const j=Dh(v.current,"open",_.current);j?x.current=setTimeout(()=>{r(!0,L,"hover")},j):r(!0,L,"hover")}function B(L){if(I())return;S.current();const j=Cn(a);if(clearTimeout(T.current),p.current){n||clearTimeout(x.current),w.current=p.current({...t,tree:y,x:L.clientX,y:L.clientY,onClose(){N(),F(),D(L,!0,"safe-polygon")}});const Q=w.current;j.addEventListener("mousemove",Q),S.current=()=>{j.removeEventListener("mousemove",Q)};return}(_.current==="touch"?!Gt(a,L.relatedTarget):!0)&&D(L)}function G(L){I()||p.current==null||p.current({...t,tree:y,x:L.clientX,y:L.clientY,onClose(){N(),F(),D(L)}})(L)}if(Rt(o)){const L=o;return n&&L.addEventListener("mouseleave",G),a==null||a.addEventListener("mouseleave",G),m&&L.addEventListener("mousemove",O,{once:!0}),L.addEventListener("mouseenter",O),L.addEventListener("mouseleave",B),()=>{n&&L.removeEventListener("mouseleave",G),a==null||a.removeEventListener("mouseleave",G),m&&L.removeEventListener("mousemove",O),L.removeEventListener("mouseenter",O),L.removeEventListener("mouseleave",B)}}},[o,a,c,t,f,h,m,D,F,N,r,n,y,v,p,i]),wt(()=>{var I;if(c&&n&&(I=p.current)!=null&&I.__options.blockPointerEvents&&b()){const B=Cn(a).body;if(B.setAttribute(Yx,""),B.style.pointerEvents="none",R.current=!0,Rt(o)&&a){var O;const G=o,L=y==null||(O=y.nodesRef.current.find(j=>j.id===g))==null||(O=O.context)==null?void 0:O.elements.floating;return L&&(L.style.pointerEvents=""),G.style.pointerEvents="auto",a.style.pointerEvents="auto",()=>{G.style.pointerEvents="",a.style.pointerEvents=""}}}},[c,n,g,a,o,y,p,b]),wt(()=>{n||(_.current=void 0,F(),N())},[n,F,N]),C.useEffect(()=>()=>{F(),clearTimeout(x.current),clearTimeout(T.current),N()},[c,o,F,N]),C.useMemo(()=>{if(!c)return{};function I(O){_.current=O.pointerType}return{reference:{onPointerDown:I,onPointerEnter:I,onMouseMove(O){n||h===0||(clearTimeout(T.current),T.current=setTimeout(()=>{M.current||r(!0,O.nativeEvent,"hover")},h))}},floating:{onMouseEnter(){clearTimeout(x.current)},onMouseLeave(O){D(O.nativeEvent,!1)}}}},[c,h,n,r,D])}function kN(t,e){var n;let r=[],i=(n=t.find(s=>s.id===e))==null?void 0:n.parentId;for(;i;){const s=t.find(o=>o.id===i);i=s==null?void 0:s.parentId,s&&(r=r.concat(s))}return r}function po(t,e){let n=t.filter(i=>{var s;return i.parentId===e&&((s=i.context)==null?void 0:s.open)}),r=n;for(;r.length;)r=t.filter(i=>{var s;return(s=r)==null?void 0:s.some(o=>{var a;return i.parentId===o.id&&((a=i.context)==null?void 0:a.open)})}),n=n.concat(r);return n}function DN(t,e){let n,r=-1;function i(s,o){o>r&&(n=s,r=o),po(t,s).forEach(l=>{i(l.id,o+1)})}return i(e,0),t.find(s=>s.id===n)}let Io=new WeakMap,yu=new WeakSet,vu={},Ih=0;const IN=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,bM=t=>t&&(t.host||bM(t.parentNode)),NN=(t,e)=>e.map(n=>{if(t.contains(n))return n;const r=bM(n);return t.contains(r)?r:null}).filter(n=>n!=null);function ON(t,e,n,r){const i="data-floating-ui-inert",s=r?"inert":n?"aria-hidden":null,o=NN(e,t),a=new Set,l=new Set(o),c=[];vu[i]||(vu[i]=new WeakMap);const u=vu[i];o.forEach(d),f(e),a.clear();function d(h){!h||a.has(h)||(a.add(h),h.parentNode&&d(h.parentNode))}function f(h){!h||l.has(h)||Array.prototype.forEach.call(h.children,m=>{if(a.has(m))f(m);else{const y=s?m.getAttribute(s):null,g=y!==null&&y!=="false",p=(Io.get(m)||0)+1,v=(u.get(m)||0)+1;Io.set(m,p),u.set(m,v),c.push(m),p===1&&g&&yu.add(m),v===1&&m.setAttribute(i,""),!g&&s&&m.setAttribute(s,"true")}})}return Ih++,()=>{c.forEach(h=>{const m=(Io.get(h)||0)-1,y=(u.get(h)||0)-1;Io.set(h,m),u.set(h,y),m||(!yu.has(h)&&s&&h.removeAttribute(s),yu.delete(h)),y||h.removeAttribute(i)}),Ih--,Ih||(Io=new WeakMap,Io=new WeakMap,yu=new WeakSet,vu={})}}function $x(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=Cn(t[0]).body;return ON(t.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,e,n)}const Mc=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function wM(t,e){const n=Nf(t,Mc());e==="prev"&&n.reverse();const r=n.indexOf(Wr(Cn(t)));return n.slice(r+1)[0]}function SM(){return wM(document.body,"next")}function TM(){return wM(document.body,"prev")}function ec(t,e){const n=e||t.currentTarget,r=t.relatedTarget;return!r||!Gt(n,r)}function FN(t){Nf(t,Mc()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function UN(t){t.querySelectorAll("[data-tabindex]").forEach(n=>{const r=n.dataset.tabindex;delete n.dataset.tabindex,r?n.setAttribute("tabindex",r):n.removeAttribute("tabindex")})}const iy={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};let BN;function qx(t){t.key==="Tab"&&(t.target,clearTimeout(BN))}const ef=C.forwardRef(function(e,n){const[r,i]=C.useState();wt(()=>(Z0()&&i("button"),document.addEventListener("keydown",qx),()=>{document.removeEventListener("keydown",qx)}),[]);const s={ref:n,tabIndex:0,role:r,"aria-hidden":r?void 0:!0,[To("focus-guard")]:"",style:iy};return C.createElement("span",Ec({},e,s))}),EM=C.createContext(null),Zx=To("portal");function zN(t){let{id:e,root:n}=t===void 0?{}:t;const[r,i]=C.useState(null),s=Of(),o=MM(),a=C.useRef(null);return wt(()=>()=>{r==null||r.remove(),queueMicrotask(()=>{a.current=null})},[r]),wt(()=>{if(a.current)return;const l=e?document.getElementById(e):null;if(!l)return;const c=document.createElement("div");c.id=s,c.setAttribute(Zx,""),l.appendChild(c),a.current=c,i(c)},[e,s]),wt(()=>{if(a.current)return;let l=n||(o==null?void 0:o.portalNode);l&&!Rt(l)&&(l=l.current),l=l||document.body;let c=null;e&&(c=document.createElement("div"),c.id=e,l.appendChild(c));const u=document.createElement("div");u.id=s,u.setAttribute(Zx,""),l=c||l,l.appendChild(u),a.current=u,i(u)},[e,n,s,o]),r}function VN(t){let{children:e,id:n,root:r=null,preserveTabOrder:i=!0}=t;const s=zN({id:n,root:r}),[o,a]=C.useState(null),l=C.useRef(null),c=C.useRef(null),u=C.useRef(null),d=C.useRef(null),f=!!o&&!o.modal&&o.open&&i&&!!(r||s);return C.useEffect(()=>{if(!s||!i||o!=null&&o.modal)return;function h(m){s&&ec(m)&&(m.type==="focusin"?UN:FN)(s)}return s.addEventListener("focusin",h,!0),s.addEventListener("focusout",h,!0),()=>{s.removeEventListener("focusin",h,!0),s.removeEventListener("focusout",h,!0)}},[s,i,o==null?void 0:o.modal]),C.createElement(EM.Provider,{value:C.useMemo(()=>({preserveTabOrder:i,beforeOutsideRef:l,afterOutsideRef:c,beforeInsideRef:u,afterInsideRef:d,portalNode:s,setFocusManagerState:a}),[i,s])},f&&s&&C.createElement(ef,{"data-type":"outside",ref:l,onFocus:h=>{if(ec(h,s)){var m;(m=u.current)==null||m.focus()}else{const y=TM()||(o==null?void 0:o.refs.domReference.current);y==null||y.focus()}}}),f&&s&&C.createElement("span",{"aria-owns":s.id,style:iy}),s&&V0.createPortal(e,s),f&&s&&C.createElement(ef,{"data-type":"outside",ref:c,onFocus:h=>{if(ec(h,s)){var m;(m=d.current)==null||m.focus()}else{const y=SM()||(o==null?void 0:o.refs.domReference.current);y==null||y.focus(),o!=null&&o.closeOnFocusOut&&(o==null||o.onOpenChange(!1,h.nativeEvent))}}}))}const MM=()=>C.useContext(EM),Qx=20;let Qs=[];function Nh(t){Qs=Qs.filter(n=>n.isConnected);let e=t;if(!(!e||Ui(e)==="body")){if(!pN(e,Mc())){const n=Nf(e,Mc())[0];if(!n)return;e=n}Qs.push(e),Qs.length>Qx&&(Qs=Qs.slice(-Qx))}}function Jx(){return Qs.slice().reverse().find(t=>t.isConnected)}const HN=C.forwardRef(function(e,n){return C.createElement("button",Ec({},e,{type:"button",ref:n,tabIndex:-1,style:iy}))});function AM(t){const{context:e,children:n,disabled:r=!1,order:i=["content"],guards:s=!0,initialFocus:o=0,returnFocus:a=!0,modal:l=!0,visuallyHiddenDismiss:c=!1,closeOnFocusOut:u=!0}=t,{open:d,refs:f,nodeId:h,onOpenChange:m,events:y,dataRef:g,elements:{domReference:p,floating:v}}=e,_=typeof o=="number"&&o<0,x=rM(p)&&_,w=IN()?s:!0,T=Zr(i),M=Zr(o),R=Zr(a),S=Gc(),b=MM(),D=C.useRef(null),F=C.useRef(null),N=C.useRef(!1),I=C.useRef(!1),O=b!=null,B=C.useCallback(function(W){return W===void 0&&(W=v),W?Nf(W,Mc()):[]},[v]),G=C.useCallback(W=>{const Q=B(W);return T.current.map(oe=>p&&oe==="reference"?p:v&&oe==="floating"?v:Q).filter(Boolean).flat()},[p,v,T,B]);C.useEffect(()=>{if(r||!l)return;function W(oe){if(oe.key==="Tab"){Gt(v,Wr(Cn(v)))&&B().length===0&&!x&&ln(oe);const ve=G(),$=cs(oe);T.current[0]==="reference"&&$===p&&(ln(oe),oe.shiftKey?mi(ve[ve.length-1]):mi(ve[1])),T.current[1]==="floating"&&$===v&&oe.shiftKey&&(ln(oe),mi(ve[0]))}}const Q=Cn(v);return Q.addEventListener("keydown",W),()=>{Q.removeEventListener("keydown",W)}},[r,p,v,l,T,x,B,G]),C.useEffect(()=>{if(r||!u)return;function W(){I.current=!0,setTimeout(()=>{I.current=!1})}function Q(oe){const ve=oe.relatedTarget;queueMicrotask(()=>{const $=!(Gt(p,ve)||Gt(v,ve)||Gt(ve,v)||Gt(b==null?void 0:b.portalNode,ve)||ve!=null&&ve.hasAttribute(To("focus-guard"))||S&&(po(S.nodesRef.current,h).find(ne=>{var fe,le;return Gt((fe=ne.context)==null?void 0:fe.elements.floating,ve)||Gt((le=ne.context)==null?void 0:le.elements.domReference,ve)})||kN(S.nodesRef.current,h).find(ne=>{var fe,le;return((fe=ne.context)==null?void 0:fe.elements.floating)===ve||((le=ne.context)==null?void 0:le.elements.domReference)===ve})));ve&&$&&!I.current&&ve!==Jx()&&(N.current=!0,m(!1,oe))})}if(v&&hn(p))return p.addEventListener("focusout",Q),p.addEventListener("pointerdown",W),!l&&v.addEventListener("focusout",Q),()=>{p.removeEventListener("focusout",Q),p.removeEventListener("pointerdown",W),!l&&v.removeEventListener("focusout",Q)}},[r,p,v,l,h,S,b,m,u]),C.useEffect(()=>{var W;if(r)return;const Q=Array.from((b==null||(W=b.portalNode)==null?void 0:W.querySelectorAll("["+To("portal")+"]"))||[]);if(v){const oe=[v,...Q,D.current,F.current,T.current.includes("reference")||x?p:null].filter($=>$!=null),ve=l||x?$x(oe,w,!w):$x(oe);return()=>{ve()}}},[r,p,v,l,T,b,x,w]),wt(()=>{if(r||!v)return;const W=Cn(v),Q=Wr(W);queueMicrotask(()=>{const oe=G(v),ve=M.current,$=(typeof ve=="number"?oe[ve]:ve.current)||v,ne=Gt(v,Q);!_&&!ne&&d&&mi($,{preventScroll:$===v})})},[r,d,v,_,G,M]),wt(()=>{if(r||!v)return;let W=!1;const Q=Cn(v),oe=Wr(Q),ve=g.current;Nh(oe);function $(ne){let{reason:fe,event:le,nested:ye}=ne;fe==="escape-key"&&f.domReference.current&&Nh(f.domReference.current),fe==="hover"&&le.type==="mouseleave"&&(N.current=!0),fe==="outside-press"&&(ye?(N.current=!1,W=!0):N.current=!(tM(le)||q0(le)))}return y.on("openchange",$),()=>{y.off("openchange",$);const ne=Wr(Q),fe=Gt(v,ne)||S&&po(S.nodesRef.current,h).some(Me=>{var Fe;return Gt((Fe=Me.context)==null?void 0:Fe.elements.floating,ne)});(fe||ve.openEvent&&["click","mousedown"].includes(ve.openEvent.type))&&f.domReference.current&&Nh(f.domReference.current);const ye=Jx();R.current&&!N.current&&hn(ye)&&(!(ye!==ne&&ne!==Q.body)||fe)&&mi(ye,{cancelPrevious:!1,preventScroll:W})}},[r,v,R,g,f,y,S,h]),wt(()=>{if(!(r||!b))return b.setFocusManagerState({modal:l,closeOnFocusOut:u,open:d,onOpenChange:m,refs:f}),()=>{b.setFocusManagerState(null)}},[r,b,l,d,m,f,u]),wt(()=>{if(r||!v||typeof MutationObserver!="function"||_)return;const W=()=>{const oe=v.getAttribute("tabindex");T.current.includes("floating")||Wr(Cn(v))!==f.domReference.current&&B().length===0?oe!=="0"&&v.setAttribute("tabindex","0"):oe!=="-1"&&v.setAttribute("tabindex","-1")};W();const Q=new MutationObserver(W);return Q.observe(v,{childList:!0,subtree:!0,attributes:!0}),()=>{Q.disconnect()}},[r,v,f,T,B,_]);function L(W){return r||!c||!l?null:C.createElement(HN,{ref:W==="start"?D:F,onClick:Q=>m(!1,Q.nativeEvent)},typeof c=="string"?c:"Dismiss")}const j=!r&&w&&(O||l);return C.createElement(C.Fragment,null,j&&C.createElement(ef,{"data-type":"inside",ref:b==null?void 0:b.beforeInsideRef,onFocus:W=>{if(l){const oe=G();mi(i[0]==="reference"?oe[0]:oe[oe.length-1])}else if(b!=null&&b.preserveTabOrder&&b.portalNode)if(N.current=!1,ec(W,b.portalNode)){const oe=SM()||p;oe==null||oe.focus()}else{var Q;(Q=b.beforeOutsideRef.current)==null||Q.focus()}}}),!x&&L("start"),n,L("end"),j&&C.createElement(ef,{"data-type":"inside",ref:b==null?void 0:b.afterInsideRef,onFocus:W=>{if(l)mi(G()[0]);else if(b!=null&&b.preserveTabOrder&&b.portalNode)if(u&&(N.current=!0),ec(W,b.portalNode)){const oe=TM()||p;oe==null||oe.focus()}else{var Q;(Q=b.afterOutsideRef.current)==null||Q.focus()}}}))}const Oh=new Set,GN=C.forwardRef(function(e,n){let{lockScroll:r=!1,...i}=e;const s=Of();return wt(()=>{if(!r)return;Oh.add(s);const o=/iP(hone|ad|od)|iOS/.test($0()),a=document.body.style,c=Math.round(document.documentElement.getBoundingClientRect().left)+document.documentElement.scrollLeft?"paddingLeft":"paddingRight",u=window.innerWidth-document.documentElement.clientWidth,d=a.left?parseFloat(a.left):window.pageXOffset,f=a.top?parseFloat(a.top):window.pageYOffset;if(a.overflow="hidden",u&&(a[c]=u+"px"),o){var h,m;const y=((h=window.visualViewport)==null?void 0:h.offsetLeft)||0,g=((m=window.visualViewport)==null?void 0:m.offsetTop)||0;Object.assign(a,{position:"fixed",top:-(f-Math.floor(g))+"px",left:-(d-Math.floor(y))+"px",right:"0"})}return()=>{Oh.delete(s),Oh.size===0&&(Object.assign(a,{overflow:"",[c]:""}),o&&(Object.assign(a,{position:"",top:"",left:"",right:""}),window.scrollTo(d,f)))}},[s,r]),C.createElement("div",Ec({ref:n},i,{style:{position:"fixed",overflow:"auto",top:0,right:0,bottom:0,left:0,...i.style}}))});function e_(t){return hn(t.target)&&t.target.tagName==="BUTTON"}function t_(t){return Q0(t)}function RM(t,e){e===void 0&&(e={});const{open:n,onOpenChange:r,dataRef:i,elements:{domReference:s}}=t,{enabled:o=!0,event:a="click",toggle:l=!0,ignoreMouse:c=!1,keyboardHandlers:u=!0}=e,d=C.useRef(),f=C.useRef(!1);return C.useMemo(()=>o?{reference:{onPointerDown(h){d.current=h.pointerType},onMouseDown(h){h.button===0&&(Wd(d.current,!0)&&c||a!=="click"&&(n&&l&&(!i.current.openEvent||i.current.openEvent.type==="mousedown")?r(!1,h.nativeEvent,"click"):(h.preventDefault(),r(!0,h.nativeEvent,"click"))))},onClick(h){if(a==="mousedown"&&d.current){d.current=void 0;return}Wd(d.current,!0)&&c||(n&&l&&(!i.current.openEvent||i.current.openEvent.type==="click")?r(!1,h.nativeEvent,"click"):r(!0,h.nativeEvent,"click"))},onKeyDown(h){d.current=void 0,!(h.defaultPrevented||!u||e_(h))&&(h.key===" "&&!t_(s)&&(h.preventDefault(),f.current=!0),h.key==="Enter"&&r(!(n&&l),h.nativeEvent,"click"))},onKeyUp(h){h.defaultPrevented||!u||e_(h)||t_(s)||h.key===" "&&f.current&&(f.current=!1,r(!(n&&l),h.nativeEvent,"click"))}}}:{},[o,i,a,c,u,s,l,n,r])}const jN={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},WN={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},n_=t=>{var e,n;return{escapeKey:typeof t=="boolean"?t:(e=t==null?void 0:t.escapeKey)!=null?e:!1,outsidePress:typeof t=="boolean"?t:(n=t==null?void 0:t.outsidePress)!=null?n:!0}};function CM(t,e){e===void 0&&(e={});const{open:n,onOpenChange:r,nodeId:i,elements:{reference:s,domReference:o,floating:a},dataRef:l}=t,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:m="pointerdown",ancestorScroll:y=!1,bubbles:g,capture:p}=e,v=Gc(),_=Xr(typeof d=="function"?d:()=>!1),x=typeof d=="function"?_:d,w=C.useRef(!1),T=C.useRef(!1),{escapeKey:M,outsidePress:R}=n_(g),{escapeKey:S,outsidePress:b}=n_(p),D=Xr(O=>{if(!n||!c||!u||O.key!=="Escape")return;const B=v?po(v.nodesRef.current,i):[];if(!M&&(O.stopPropagation(),B.length>0)){let G=!0;if(B.forEach(L=>{var j;if((j=L.context)!=null&&j.open&&!L.context.dataRef.current.__escapeKeyBubbles){G=!1;return}}),!G)return}r(!1,uI(O)?O.nativeEvent:O,"escape-key")}),F=Xr(O=>{var B;const G=()=>{var L;D(O),(L=cs(O))==null||L.removeEventListener("keydown",G)};(B=cs(O))==null||B.addEventListener("keydown",G)}),N=Xr(O=>{const B=w.current;w.current=!1;const G=T.current;if(T.current=!1,f==="click"&&G||B||typeof x=="function"&&!x(O))return;const L=cs(O),j="["+To("inert")+"]",W=Cn(a).querySelectorAll(j);let Q=Rt(L)?L:null;for(;Q&&!Fa(Q);){const $=wo(Q);if(Fa($)||!Rt($))break;Q=$}if(W.length&&Rt(L)&&!dI(L)&&!Gt(L,a)&&Array.from(W).every($=>!Gt(Q,$)))return;if(hn(L)&&a){const $=L.clientWidth>0&&L.scrollWidth>L.clientWidth,ne=L.clientHeight>0&&L.scrollHeight>L.clientHeight;let fe=ne&&O.offsetX>L.clientWidth;if(ne&&tr(L).direction==="rtl"&&(fe=O.offsetX<=L.offsetWidth-L.clientWidth),fe||$&&O.offsetY>L.clientHeight)return}const oe=v&&po(v.nodesRef.current,i).some($=>{var ne;return Ph(O,(ne=$.context)==null?void 0:ne.elements.floating)});if(Ph(O,a)||Ph(O,o)||oe)return;const ve=v?po(v.nodesRef.current,i):[];if(ve.length>0){let $=!0;if(ve.forEach(ne=>{var fe;if((fe=ne.context)!=null&&fe.open&&!ne.context.dataRef.current.__outsidePressBubbles){$=!1;return}}),!$)return}r(!1,O,"outside-press")}),I=Xr(O=>{var B;const G=()=>{var L;N(O),(L=cs(O))==null||L.removeEventListener(f,G)};(B=cs(O))==null||B.addEventListener(f,G)});return C.useEffect(()=>{if(!n||!c)return;l.current.__escapeKeyBubbles=M,l.current.__outsidePressBubbles=R;function O(L){r(!1,L,"ancestor-scroll")}const B=Cn(a);u&&B.addEventListener("keydown",S?F:D,S),x&&B.addEventListener(f,b?I:N,b);let G=[];return y&&(Rt(o)&&(G=ws(o)),Rt(a)&&(G=G.concat(ws(a))),!Rt(s)&&s&&s.contextElement&&(G=G.concat(ws(s.contextElement)))),G=G.filter(L=>{var j;return L!==((j=B.defaultView)==null?void 0:j.visualViewport)}),G.forEach(L=>{L.addEventListener("scroll",O,{passive:!0})}),()=>{u&&B.removeEventListener("keydown",S?F:D,S),x&&B.removeEventListener(f,b?I:N,b),G.forEach(L=>{L.removeEventListener("scroll",O)})}},[l,a,o,s,u,x,f,n,r,y,c,M,R,D,S,F,N,b,I]),C.useEffect(()=>{w.current=!1},[x,f]),C.useMemo(()=>c?{reference:{onKeyDown:D,[jN[m]]:O=>{h&&r(!1,O.nativeEvent,"reference-press")}},floating:{onKeyDown:D,onMouseDown(){T.current=!0},onMouseUp(){T.current=!0},[WN[f]]:()=>{w.current=!0}}}:{},[c,h,f,m,r,D])}function PM(t){var e;t===void 0&&(t={});const{open:n=!1,onOpenChange:r,nodeId:i}=t,[s,o]=C.useState(null),a=((e=t.elements)==null?void 0:e.reference)||s,l=$I(t),c=Gc(),u=Ff()!=null,d=Xr((w,T,M)=>{w&&(h.current.openEvent=T),m.emit("openchange",{open:w,event:T,reason:M,nested:u}),r==null||r(w,T,M)}),f=C.useRef(null),h=C.useRef({}),m=C.useState(()=>RN())[0],y=Of(),g=C.useCallback(w=>{const T=Rt(w)?{getBoundingClientRect:()=>w.getBoundingClientRect(),contextElement:w}:w;l.refs.setReference(T)},[l.refs]),p=C.useCallback(w=>{(Rt(w)||w===null)&&(f.current=w,o(w)),(Rt(l.refs.reference.current)||l.refs.reference.current===null||w!==null&&!Rt(w))&&l.refs.setReference(w)},[l.refs]),v=C.useMemo(()=>({...l.refs,setReference:p,setPositionReference:g,domReference:f}),[l.refs,p,g]),_=C.useMemo(()=>({...l.elements,domReference:a}),[l.elements,a]),x=C.useMemo(()=>({...l,refs:v,elements:_,dataRef:h,nodeId:i,floatingId:y,events:m,open:n,onOpenChange:d}),[l,i,y,m,n,d,v,_]);return wt(()=>{const w=c==null?void 0:c.nodesRef.current.find(T=>T.id===i);w&&(w.context=x)}),C.useMemo(()=>({...l,context:x,refs:v,elements:_}),[l,v,_,x])}function XN(t,e){e===void 0&&(e={});const{open:n,onOpenChange:r,events:i,refs:s,elements:{domReference:o}}=t,{enabled:a=!0,visibleOnly:l=!0}=e,c=C.useRef(!1),u=C.useRef(),d=C.useRef(!0);return C.useEffect(()=>{if(!a)return;const f=jn(o);function h(){!n&&hn(o)&&o===Wr(Cn(o))&&(c.current=!0)}function m(){d.current=!0}return f.addEventListener("blur",h),f.addEventListener("keydown",m,!0),()=>{f.removeEventListener("blur",h),f.removeEventListener("keydown",m,!0)}},[o,n,a]),C.useEffect(()=>{if(!a)return;function f(h){let{reason:m}=h;(m==="reference-press"||m==="escape-key")&&(c.current=!0)}return i.on("openchange",f),()=>{i.off("openchange",f)}},[i,a]),C.useEffect(()=>()=>{clearTimeout(u.current)},[]),C.useMemo(()=>a?{reference:{onPointerDown(f){q0(f.nativeEvent)||(d.current=!1)},onMouseLeave(){c.current=!1},onFocus(f){if(c.current)return;const h=cs(f.nativeEvent);if(l&&Rt(h))try{if(Z0()&&nM())throw Error();if(!h.matches(":focus-visible"))return}catch{if(!d.current&&!Q0(h))return}r(!0,f.nativeEvent,"focus")},onBlur(f){c.current=!1;const h=f.relatedTarget,m=Rt(h)&&h.hasAttribute(To("focus-guard"))&&h.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{const y=Wr(o?o.ownerDocument:document);!h&&y===o||Gt(s.floating.current,y)||Gt(o,y)||m||r(!1,f.nativeEvent,"focus")})}}}:{},[a,l,o,s,r])}const r_="active",i_="selected";function Fh(t,e,n){const r=new Map,i=n==="item";let s=t;if(i&&t){const{[r_]:o,[i_]:a,...l}=t;s=l}return{...n==="floating"&&{tabIndex:-1},...s,...e.map(o=>{const a=o?o[n]:null;return typeof a=="function"?t?a(t):null:a}).concat(t).reduce((o,a)=>(a&&Object.entries(a).forEach(l=>{let[c,u]=l;if(!(i&&[r_,i_].includes(c)))if(c.indexOf("on")===0){if(r.has(c)||r.set(c,[]),typeof u=="function"){var d;(d=r.get(c))==null||d.push(u),o[c]=function(){for(var f,h=arguments.length,m=new Array(h),y=0;y<h;y++)m[y]=arguments[y];return(f=r.get(c))==null?void 0:f.map(g=>g(...m)).find(g=>g!==void 0)}}}else o[c]=u}),o),{})}}function LM(t){t===void 0&&(t=[]);const e=t,n=C.useCallback(s=>Fh(s,t,"reference"),e),r=C.useCallback(s=>Fh(s,t,"floating"),e),i=C.useCallback(s=>Fh(s,t,"item"),t.map(s=>s==null?void 0:s.item));return C.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:i}),[n,r,i])}let s_=!1;function Uf(t,e,n){switch(t){case"vertical":return e;case"horizontal":return n;default:return e||n}}function o_(t,e){return Uf(e,t===ry||t===Hc,t===za||t===il)}function Uh(t,e,n){return Uf(e,t===Hc,n?t===za:t===il)||t==="Enter"||t===" "||t===""}function KN(t,e,n){return Uf(e,n?t===za:t===il,t===Hc)}function a_(t,e,n){return Uf(e,n?t===il:t===za,t===ry)}function YN(t,e){const{open:n,onOpenChange:r,refs:i,elements:{domReference:s,floating:o}}=t,{listRef:a,activeIndex:l,onNavigate:c=()=>{},enabled:u=!0,selectedIndex:d=null,allowEscape:f=!1,loop:h=!1,nested:m=!1,rtl:y=!1,virtual:g=!1,focusItemOnOpen:p="auto",focusItemOnHover:v=!0,openOnArrowKeyDown:_=!0,disabledIndices:x=void 0,orientation:w="vertical",cols:T=1,scrollItemIntoView:M=!0,virtualItemRef:R,itemSizes:S,dense:b=!1}=e,D=Ff(),F=Gc(),N=Xr(c),I=C.useRef(p),O=C.useRef(d??-1),B=C.useRef(null),G=C.useRef(!0),L=C.useRef(N),j=C.useRef(!!o),W=C.useRef(!1),Q=C.useRef(!1),oe=Zr(x),ve=Zr(n),$=Zr(M),[ne,fe]=C.useState(),[le,ye]=C.useState(),Me=Xr(function(_e,Qe,H){H===void 0&&(H=!1);const tt=_e.current[Qe.current];tt&&(g?(fe(tt.id),F==null||F.events.emit("virtualfocus",tt),R&&(R.current=tt)):mi(tt,{preventScroll:!0,sync:nM()&&Z0()?s_||W.current:!1}),requestAnimationFrame(()=>{const We=$.current;We&&tt&&(H||!G.current)&&(tt.scrollIntoView==null||tt.scrollIntoView(typeof We=="boolean"?{block:"nearest",inline:"nearest"}:We))}))});wt(()=>{document.createElement("div").focus({get preventScroll(){return s_=!0,!1}})},[]),wt(()=>{u&&(n&&o?I.current&&d!=null&&(Q.current=!0,O.current=d,N(d)):j.current&&(O.current=-1,L.current(null)))},[u,n,o,d,N]),wt(()=>{if(u&&n&&o)if(l==null){if(W.current=!1,d!=null)return;if(j.current&&(O.current=-1,Me(a,O)),!j.current&&I.current&&(B.current!=null||I.current===!0&&B.current==null)){let _e=0;const Qe=()=>{a.current[0]==null?(_e<2&&(_e?requestAnimationFrame:queueMicrotask)(Qe),_e++):(O.current=B.current==null||Uh(B.current,w,y)||m?Lh(a,oe.current):Wx(a,oe.current),B.current=null,N(O.current))};Qe()}}else Jl(a,l)||(O.current=l,Me(a,O,Q.current),Q.current=!1)},[u,n,o,l,d,m,a,w,y,N,Me,oe]),wt(()=>{var _e;if(!u||o||!F||g||!j.current)return;const Qe=F.nodesRef.current,H=(_e=Qe.find(Xe=>Xe.id===D))==null||(_e=_e.context)==null?void 0:_e.elements.floating,tt=Wr(Cn(o)),We=Qe.some(Xe=>Xe.context&&Gt(Xe.context.elements.floating,tt));H&&!We&&G.current&&H.focus({preventScroll:!0})},[u,o,F,D,g]),wt(()=>{if(!u||!F||!g||D)return;function _e(Qe){ye(Qe.id),R&&(R.current=Qe)}return F.events.on("virtualfocus",_e),()=>{F.events.off("virtualfocus",_e)}},[u,F,g,D,R]),wt(()=>{L.current=N,j.current=!!o}),wt(()=>{n||(B.current=null)},[n]);const Fe=l!=null,st=C.useMemo(()=>{function _e(H){if(!n)return;const tt=a.current.indexOf(H);tt!==-1&&N(tt)}return{onFocus(H){let{currentTarget:tt}=H;_e(tt)},onClick:H=>{let{currentTarget:tt}=H;return tt.focus({preventScroll:!0})},...v&&{onMouseMove(H){let{currentTarget:tt}=H;_e(tt)},onPointerLeave(H){let{pointerType:tt}=H;!G.current||tt==="touch"||(O.current=-1,Me(a,O),N(null),g||mi(i.floating.current,{preventScroll:!0}))}}}},[n,i,Me,v,a,N,g]);return C.useMemo(()=>{if(!u)return{};const _e=oe.current;function Qe(ce){if(G.current=!1,W.current=!0,!ve.current&&ce.currentTarget===i.floating.current)return;if(m&&a_(ce.key,w,y)){ln(ce),r(!1,ce.nativeEvent,"list-navigation"),hn(s)&&!g&&s.focus();return}const Je=O.current,Le=Lh(a,_e),k=Wx(a,_e);if(ce.key==="Home"&&(ln(ce),O.current=Le,N(O.current)),ce.key==="End"&&(ln(ce),O.current=k,N(O.current)),T>1){const E=S||Array.from({length:a.current.length},()=>({width:1,height:1})),Y=vN(E,T,b),ie=Y.findIndex(te=>te!=null&&!(_e!=null&&_e.includes(te))),ae=Y.reduce((te,Ce,pe)=>Ce!=null&&!(_e!=null&&_e.includes(Ce))?pe:te,-1);if(O.current=Y[yN({current:Y.map(te=>te!=null?a.current[te]:null)},{event:ce,orientation:w,loop:h,cols:T,disabledIndices:_N([..._e||[],void 0],Y),minIndex:ie,maxIndex:ae,prevIndex:xN(O.current,E,Y,T,ce.key===Hc?"bl":ce.key===il?"tr":"tl"),stopEvent:!0})],N(O.current),w==="both")return}if(o_(ce.key,w)){if(ln(ce),n&&!g&&Wr(ce.currentTarget.ownerDocument)===ce.currentTarget){O.current=Uh(ce.key,w,y)?Le:k,N(O.current);return}Uh(ce.key,w,y)?h?O.current=Je>=k?f&&Je!==a.current.length?-1:Le:vn(a,{startingIndex:Je,disabledIndices:_e}):O.current=Math.min(k,vn(a,{startingIndex:Je,disabledIndices:_e})):h?O.current=Je<=Le?f&&Je!==-1?a.current.length:k:vn(a,{startingIndex:Je,decrement:!0,disabledIndices:_e}):O.current=Math.max(Le,vn(a,{startingIndex:Je,decrement:!0,disabledIndices:_e})),Jl(a,O.current)?N(null):N(O.current)}}function H(ce){p==="auto"&&tM(ce.nativeEvent)&&(I.current=!0)}function tt(ce){I.current=p,p==="auto"&&q0(ce.nativeEvent)&&(I.current=!0)}const We=g&&n&&Fe&&{"aria-activedescendant":le||ne},Xe=a.current.find(ce=>(ce==null?void 0:ce.id)===ne);return{reference:{...We,onKeyDown(ce){G.current=!1;const Je=ce.key.indexOf("Arrow")===0,Le=KN(ce.key,w,y),k=a_(ce.key,w,y),E=o_(ce.key,w),Y=(m?Le:E)||ce.key==="Enter"||ce.key.trim()==="";if(g&&n){const Ce=F==null?void 0:F.nodesRef.current.find(Se=>Se.parentId==null),pe=F&&Ce?DN(F.nodesRef.current,Ce.id):null;if(Je&&pe&&R){const Se=new KeyboardEvent("keydown",{key:ce.key,bubbles:!0});if(Le||k){var ie,ae;const nt=((ie=pe.context)==null?void 0:ie.elements.domReference)===ce.currentTarget,de=k&&!nt?(ae=pe.context)==null?void 0:ae.elements.domReference:Le?Xe:null;de&&(ln(ce),de.dispatchEvent(Se),ye(void 0))}if(E&&pe.context&&pe.context.open&&pe.parentId&&ce.currentTarget!==pe.context.elements.domReference){var te;ln(ce),(te=pe.context.elements.domReference)==null||te.dispatchEvent(Se);return}}return Qe(ce)}if(!(!n&&!_&&Je)){if(Y&&(B.current=m&&E?null:ce.key),m){Le&&(ln(ce),n?(O.current=Lh(a,_e),N(O.current)):r(!0,ce.nativeEvent,"list-navigation"));return}E&&(d!=null&&(O.current=d),ln(ce),!n&&_?r(!0,ce.nativeEvent,"list-navigation"):Qe(ce),n&&N(O.current))}},onFocus(){n&&N(null)},onPointerDown:tt,onMouseDown:H,onClick:H},floating:{"aria-orientation":w==="both"?void 0:w,...!rM(s)&&We,onKeyDown:Qe,onPointerMove(){G.current=!0}},item:st}},[s,i,ne,le,oe,ve,a,u,w,y,g,n,Fe,m,d,_,f,T,h,p,N,r,st,F,R,S,b])}const $N=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function kM(t,e){var n;e===void 0&&(e={});const{open:r,floatingId:i}=t,{enabled:s=!0,role:o="dialog"}=e,a=(n=$N.get(o))!=null?n:o,l=Of(),u=Ff()!=null;return C.useMemo(()=>{if(!s)return{};const d={id:i,...a&&{role:a}};return a==="tooltip"||o==="label"?{reference:{["aria-"+(o==="label"?"labelledby":"describedby")]:r?i:void 0},floating:d}:{reference:{"aria-expanded":r?"true":"false","aria-haspopup":a==="alertdialog"?"dialog":a,"aria-controls":r?i:void 0,...a==="listbox"&&{role:"combobox"},...a==="menu"&&{id:l},...a==="menu"&&u&&{role:"menuitem"},...o==="select"&&{"aria-autocomplete":"none"},...o==="combobox"&&{"aria-autocomplete":"list"}},floating:{...d,...a==="menu"&&{"aria-labelledby":l}},item(f){let{active:h,selected:m}=f;const y={role:"option",...h&&{id:i+"-option"}};switch(o){case"select":return{...y,"aria-selected":h&&m};case"combobox":return{...y,...h&&{"aria-selected":!0}}}return{}}}},[s,o,a,r,i,l,u])}function qN(t,e){var n;const{open:r,dataRef:i}=t,{listRef:s,activeIndex:o,onMatch:a,onTypingChange:l,enabled:c=!0,findMatch:u=null,resetMs:d=750,ignoreKeys:f=[],selectedIndex:h=null}=e,m=C.useRef(),y=C.useRef(""),g=C.useRef((n=h??o)!=null?n:-1),p=C.useRef(null),v=Xr(a),_=Xr(l),x=Zr(u),w=Zr(f);return wt(()=>{r&&(clearTimeout(m.current),p.current=null,y.current="")},[r]),wt(()=>{if(r&&y.current===""){var T;g.current=(T=h??o)!=null?T:-1}},[r,h,o]),C.useMemo(()=>{if(!c)return{};function T(S){S?i.current.typing||(i.current.typing=S,_(S)):i.current.typing&&(i.current.typing=S,_(S))}function M(S,b,D){const F=x.current?x.current(b,D):b.find(N=>(N==null?void 0:N.toLocaleLowerCase().indexOf(D.toLocaleLowerCase()))===0);return F?S.indexOf(F):-1}function R(S){const b=s.current;if(y.current.length>0&&y.current[0]!==" "&&(M(b,b,y.current)===-1?T(!1):S.key===" "&&ln(S)),b==null||w.current.includes(S.key)||S.key.length!==1||S.ctrlKey||S.metaKey||S.altKey)return;r&&S.key!==" "&&(ln(S),T(!0)),b.every(I=>{var O,B;return I?((O=I[0])==null?void 0:O.toLocaleLowerCase())!==((B=I[1])==null?void 0:B.toLocaleLowerCase()):!0})&&y.current===S.key&&(y.current="",g.current=p.current),y.current+=S.key,clearTimeout(m.current),m.current=setTimeout(()=>{y.current="",g.current=p.current,T(!1)},d);const F=g.current,N=M(b,[...b.slice((F||0)+1),...b.slice(0,(F||0)+1)],y.current);N!==-1?(v(N),p.current=N):S.key!==" "&&(y.current="",T(!1))}return{reference:{onKeyDown:R},floating:{onKeyDown:R,onKeyUp(S){S.key===" "&&T(!1)}}}},[c,r,i,s,d,w,x,v,_])}function l_(t,e){const[n,r]=t;let i=!1;const s=e.length;for(let o=0,a=s-1;o<s;a=o++){const[l,c]=e[o]||[0,0],[u,d]=e[a]||[0,0];c>=r!=d>=r&&n<=(u-l)*(r-c)/(d-c)+l&&(i=!i)}return i}function ZN(t,e){return t[0]>=e.x&&t[0]<=e.x+e.width&&t[1]>=e.y&&t[1]<=e.y+e.height}function QN(t){t===void 0&&(t={});const{buffer:e=.5,blockPointerEvents:n=!1,requireIntent:r=!0}=t;let i,s=!1,o=null,a=null,l=performance.now();function c(d,f){const h=performance.now(),m=h-l;if(o===null||a===null||m===0)return o=d,a=f,l=h,null;const y=d-o,g=f-a,v=Math.sqrt(y*y+g*g)/m;return o=d,a=f,l=h,v}const u=d=>{let{x:f,y:h,placement:m,elements:y,onClose:g,nodeId:p,tree:v}=d;return function(x){function w(){clearTimeout(i),g()}if(clearTimeout(i),!y.domReference||!y.floating||m==null||f==null||h==null)return;const{clientX:T,clientY:M}=x,R=[T,M],S=cs(x),b=x.type==="mouseleave",D=Gt(y.floating,S),F=Gt(y.domReference,S),N=y.domReference.getBoundingClientRect(),I=y.floating.getBoundingClientRect(),O=m.split("-")[0],B=f>I.right-I.width/2,G=h>I.bottom-I.height/2,L=ZN(R,N),j=I.width>N.width,W=I.height>N.height,Q=(j?N:I).left,oe=(j?N:I).right,ve=(W?N:I).top,$=(W?N:I).bottom;if(D&&(s=!0,!b))return;if(F&&(s=!1),F&&!b){s=!0;return}if(b&&Rt(x.relatedTarget)&&Gt(y.floating,x.relatedTarget)||v&&po(v.nodesRef.current,p).some(le=>{let{context:ye}=le;return ye==null?void 0:ye.open}))return;if(O==="top"&&h>=N.bottom-1||O==="bottom"&&h<=N.top+1||O==="left"&&f>=N.right-1||O==="right"&&f<=N.left+1)return w();let ne=[];switch(O){case"top":ne=[[Q,N.top+1],[Q,I.bottom-1],[oe,I.bottom-1],[oe,N.top+1]];break;case"bottom":ne=[[Q,I.top+1],[Q,N.bottom-1],[oe,N.bottom-1],[oe,I.top+1]];break;case"left":ne=[[I.right-1,$],[I.right-1,ve],[N.left+1,ve],[N.left+1,$]];break;case"right":ne=[[N.right-1,$],[N.right-1,ve],[I.left+1,ve],[I.left+1,$]];break}function fe(le){let[ye,Me]=le;switch(O){case"top":{const Fe=[j?ye+e/2:B?ye+e*4:ye-e*4,Me+e+1],st=[j?ye-e/2:B?ye+e*4:ye-e*4,Me+e+1],_e=[[I.left,B||j?I.bottom-e:I.top],[I.right,B?j?I.bottom-e:I.top:I.bottom-e]];return[Fe,st,..._e]}case"bottom":{const Fe=[j?ye+e/2:B?ye+e*4:ye-e*4,Me-e],st=[j?ye-e/2:B?ye+e*4:ye-e*4,Me-e],_e=[[I.left,B||j?I.top+e:I.bottom],[I.right,B?j?I.top+e:I.bottom:I.top+e]];return[Fe,st,..._e]}case"left":{const Fe=[ye+e+1,W?Me+e/2:G?Me+e*4:Me-e*4],st=[ye+e+1,W?Me-e/2:G?Me+e*4:Me-e*4];return[...[[G||W?I.right-e:I.left,I.top],[G?W?I.right-e:I.left:I.right-e,I.bottom]],Fe,st]}case"right":{const Fe=[ye-e,W?Me+e/2:G?Me+e*4:Me-e*4],st=[ye-e,W?Me-e/2:G?Me+e*4:Me-e*4],_e=[[G||W?I.left+e:I.right,I.top],[G?W?I.left+e:I.right:I.left+e,I.bottom]];return[Fe,st,..._e]}}}if(!l_([T,M],ne)){if(s&&!L)return w();if(!b&&r){const le=c(x.clientX,x.clientY);if(le!==null&&le<.1)return w()}l_([T,M],fe([f,h]))?!s&&r&&(i=window.setTimeout(w,40)):w()}}};return u.__options={blockPointerEvents:n},u}const JN=({arrowRef:t,placement:e})=>{const n=[];return n.push(MI(8)),n.push(e==="auto"?jI():XI()),n.push(WI({padding:8})),t!=null&&t.current&&n.push(YI({element:t.current})),n},e2=({placement:t})=>t==="auto"?void 0:t,t2=({placement:t})=>({top:"bottom",right:"left",bottom:"top",left:"right"})[t.split("-")[0]],DM=({open:t,arrowRef:e,placement:n="top",setOpen:r})=>PM({placement:e2({placement:n}),open:t,onOpenChange:r,whileElementsMounted:hM,middleware:JN({placement:n,arrowRef:e})}),IM=({context:t,trigger:e,role:n="tooltip",interactions:r=[]})=>LM([RM(t,{enabled:e==="click"}),LN(t,{enabled:e==="hover",handleClose:QN()}),CM(t),kM(t,{role:n}),...r]),NM=C.createContext(void 0);function sy(){const t=C.useContext(NM);if(!t)throw new Error("useDropdownContext should be used within the DropdownContext provider!");return t}const oy=({className:t,theme:e={},...n})=>{const{theme:r}=sy(),i=e.divider??r.floating.divider;return P.jsx("div",{className:ee(i,t),...n})},OM=({children:t,className:e,theme:n={},...r})=>{const{theme:i}=sy(),s=n.header??i.floating.header;return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:ee(s,e),...r,children:t}),P.jsx(oy,{})]})},FM=C.forwardRef(({children:t,className:e,icon:n,onClick:r,theme:i={},...s},o)=>{const{ref:a,index:l}=TN({label:typeof t=="string"?t:void 0}),c=xM([o,a]),{theme:u,activeIndex:d,dismissOnClick:f,getItemProps:h,handleSelect:m}=sy(),y=d===l,g=ge(u.floating.item,i),p=s;return P.jsx("li",{role:"menuitem",className:g.container,children:P.jsxs(G0,{ref:c,className:ee(g.base,e),...p,...h({onClick:()=>{r==null||r(),f&&m(null)}}),tabIndex:y?0:-1,children:[n&&P.jsx(n,{className:g.icon}),t]})})});FM.displayName="DropdownItem";const n2={top:uk,right:bE,bottom:_E,left:ck},r2=({refs:t,children:e,inline:n,theme:r,disabled:i,setButtonWidth:s,getReferenceProps:o,renderTrigger:a,...l})=>{const c=t.reference,u=o();if(C.useEffect(()=>{c.current&&(s==null||s(c.current.clientWidth))},[c,s]),a){const d=a(r);return C.cloneElement(d,{ref:t.setReference,disabled:i,...u,...d.props})}return n?P.jsx("button",{type:"button",ref:t.setReference,className:r==null?void 0:r.inlineWrapper,disabled:i,...u,children:e}):P.jsx(HE,{...l,disabled:i,type:"button",ref:t.setReference,...u,children:e})},UM=({children:t,className:e,dismissOnClick:n=!0,theme:r={},renderTrigger:i,...s})=>{const[o,a]=C.useState(!1),[l,c]=C.useState(null),[u,d]=C.useState(null),[f,h]=C.useState(void 0),m=C.useRef([]),y=C.useRef([]),g=ge(Ge().dropdown,r),p=s,v=s["data-testid"]||"flowbite-dropdown-target",{placement:_=s.inline?"bottom-start":"bottom",trigger:x="click",label:w,inline:T,arrowIcon:M=!0,...R}=p,S=C.useCallback(W=>{d(W),a(!1)},[]),b=C.useCallback(W=>{o?c(W):S(W)},[o,S]),{context:D,floatingStyles:F,refs:N}=DM({open:o,setOpen:a,placement:_}),I=YN(D,{listRef:m,activeIndex:l,selectedIndex:u,onNavigate:c}),O=qN(D,{listRef:y,activeIndex:l,selectedIndex:u,onMatch:b}),{getReferenceProps:B,getFloatingProps:G,getItemProps:L}=IM({context:D,role:"menu",trigger:x,interactions:[I,O]}),j=C.useMemo(()=>{const[W]=_.split("-");return n2[W]??_E},[_]);return P.jsxs(NM.Provider,{value:{theme:g,activeIndex:l,dismissOnClick:n,getItemProps:L,handleSelect:S},children:[P.jsxs(r2,{...R,refs:N,inline:T,theme:g,"data-testid":v,className:ee(g.floating.target,R.className),setButtonWidth:h,getReferenceProps:B,renderTrigger:i,children:[w,M&&P.jsx(j,{className:g.arrowIcon})]}),o&&P.jsx(AM,{context:D,modal:!1,children:P.jsx("div",{ref:N.setFloating,style:{...F,minWidth:f},"data-testid":"flowbite-dropdown","aria-expanded":o,...G({className:ee(g.floating.base,g.floating.animation,"duration-100",!o&&g.floating.hidden,g.floating.style.auto,e)}),children:P.jsx(SN,{elementsRef:m,labelsRef:y,children:P.jsx("ul",{className:g.content,tabIndex:-1,children:t})})})})]})};UM.displayName="Dropdown";OM.displayName="Dropdown.Header";oy.displayName="Dropdown.Divider";Object.assign(UM,{Item:FM,Header:OM,Divider:oy});const i2=C.forwardRef(({className:t,color:e="gray",helperText:n,sizing:r="md",theme:i={},...s},o)=>{const a=ge(Ge().fileInput,i);return P.jsxs(P.Fragment,{children:[P.jsx("div",{className:ee(a.root.base,t),children:P.jsx("div",{className:a.field.base,children:P.jsx("input",{className:ee(a.field.input.base,a.field.input.colors[e],a.field.input.sizes[r]),...s,type:"file",ref:o})})}),n&&P.jsx(Bc,{color:e,children:n})]})});i2.displayName="FileInput";const s2=C.forwardRef(({label:t,helperText:e,color:n="default",sizing:r="md",variant:i,disabled:s=!1,theme:o={},className:a,...l},c)=>{const u=C.useId(),d=ge(Ge().floatingLabel,o);return P.jsxs("div",{children:[P.jsxs("div",{className:ee("relative",i==="standard"?"z-0":""),children:[P.jsx("input",{type:"text",id:l.id?l.id:"floatingLabel"+u,"aria-describedby":"outlined_success_help",className:ee(d.input[n][i][r],a),placeholder:" ","data-testid":"floating-label",disabled:s,...l,ref:c}),P.jsx("label",{htmlFor:l.id?l.id:"floatingLabel"+u,className:ee(d.label[n][i][r],a),children:t})]}),P.jsx("p",{id:"outlined_helper_text"+u,className:ee(d.helperText[n],a),children:e})]})});s2.displayName="FloatingLabel";const BM=({alt:t,className:e,children:n,href:r,name:i,src:s,theme:o={},...a})=>{const l=ge(Ge().footer.brand,o);return P.jsx("div",{children:r?P.jsxs("a",{"data-testid":"flowbite-footer-brand",href:r,className:ee(l.base,e),...a,children:[P.jsx("img",{alt:t,src:s,className:l.img}),P.jsx("span",{"data-testid":"flowbite-footer-brand-span",className:l.span,children:i}),n]}):P.jsx("img",{alt:t,"data-testid":"flowbite-footer-brand",src:s,className:ee(l.img,e),...a})})},zM=({by:t,className:e,href:n,theme:r={},year:i,...s})=>{const o=ge(Ge().footer.copyright,r);return P.jsxs("div",{"data-testid":"flowbite-footer-copyright",className:ee(o.base,e),...s,children:["© ",i,n?P.jsx("a",{href:n,className:o.href,children:t}):P.jsx("span",{"data-testid":"flowbite-footer-copyright-span",className:o.span,children:t})]})},VM=({className:t,theme:e={},...n})=>{const r=ge(Ge().footer.divider,e);return P.jsx("hr",{"data-testid":"footer-divider",className:ee(r.base,t),...n})},HM=({ariaLabel:t,className:e,href:n,icon:r,theme:i={},...s})=>{const o=ge(Ge().footer.icon,i);return P.jsx("div",{children:n?P.jsx("a",{"aria-label":t,"data-testid":"flowbite-footer-icon",href:n,className:ee(o.base,e),...s,children:P.jsx(r,{className:o.size})}):P.jsx(r,{"data-testid":"flowbite-footer-icon",className:o.size,...s})})},GM=({as:t="a",children:e,className:n,href:r,theme:i={},...s})=>{const o=ge(Ge().footer.groupLink.link,i);return P.jsx("li",{className:ee(o.base,n),children:P.jsx(t,{href:r,className:o.href,...s,children:e})})},jM=({children:t,className:e,col:n=!1,theme:r={},...i})=>{const s=ge(Ge().footer.groupLink,r);return P.jsx("ul",{"data-testid":"footer-groupLink",className:ee(s.base,n&&s.col,e),...i,children:t})},WM=({as:t="h2",className:e,theme:n={},title:r,...i})=>{const s=ge(Ge().footer.title,n);return P.jsx(t,{"data-testid":"flowbite-footer-title",className:ee(s.base,e),...i,children:r})},XM=({bgDark:t=!1,children:e,className:n,container:r=!1,theme:i={},...s})=>{const o=ge(Ge().footer,i);return P.jsx("footer",{"data-testid":"flowbite-footer",className:ee(o.root.base,t&&o.root.bgDark,r&&o.root.container,n),...s,children:e})};XM.displayName="Footer";zM.displayName="Footer.Copyright";GM.displayName="Footer.Link";BM.displayName="Footer.Brand";jM.displayName="Footer.LinkGroup";HM.displayName="Footer.Icon";WM.displayName="Footer.Title";VM.displayName="Footer.Divider";Object.assign(XM,{Copyright:zM,Link:GM,LinkGroup:jM,Brand:BM,Icon:HM,Title:WM,Divider:VM});const KM=({children:t,className:e,icon:n,theme:r={},...i})=>{const s=ge(Ge().list.item,r);return P.jsxs("li",{className:ee(s.withIcon[n?"on":"off"],e),...i,children:[n&&P.jsx(n,{className:ee(s.icon)}),t]})},YM=({children:t,className:e,unstyled:n,nested:r,ordered:i,horizontal:s,theme:o={},...a})=>{const l=ge(Ge().list,o),c=i?"ol":"ul";return P.jsx(c,{className:ee(l.root.base,l.root.ordered[i?"on":"off"],n&&l.root.unstyled,r&&l.root.nested,s&&l.root.horizontal,e),...a,children:t})};YM.displayName="List";KM.displayName="List.Item";Object.assign(YM,{Item:KM});const $M=({active:t,children:e,className:n,href:r,icon:i,onClick:s,theme:o={},disabled:a,...l})=>{const c=ge(Ge().listGroup.item,o),u=typeof r<"u",d=u?"a":"button";return P.jsx("li",{className:ee(c.base,n),children:P.jsxs(d,{href:r,onClick:s,type:u?void 0:"button",disabled:a,className:ee(c.link.active[t?"on":"off"],c.link.disabled[a?"on":"off"],c.link.base,c.link.href[u?"on":"off"]),...l,children:[i&&P.jsx(i,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:c.link.icon}),e]})})},qM=({children:t,className:e,theme:n={},...r})=>{const i=ge(Ge().listGroup,n);return P.jsx("ul",{className:ee(i.root.base,e),...r,children:t})};qM.displayName="ListGroup";$M.displayName="ListGroup.Item";Object.assign(qM,{Item:$M});const ZM=C.createContext(void 0);function ay(){const t=C.useContext(ZM);if(!t)throw new Error("useModalContext should be used within the ModalContext provider!");return t}const QM=({children:t,className:e,theme:n={},...r})=>{const{theme:i,popup:s}=ay(),o=ge(i.body,n);return P.jsx("div",{className:ee(o.base,s&&[o.popup],e),...r,children:t})},JM=({children:t,className:e,theme:n={},...r})=>{const{theme:i,popup:s}=ay(),o=ge(i.footer,n);return P.jsx("div",{className:ee(o.base,!s&&o.popup,e),...r,children:t})},e1=({as:t="h3",children:e,className:n,theme:r={},id:i,...s})=>{const o=C.useId(),a=i||o,{theme:l,popup:c,onClose:u,setHeaderId:d}=ay(),f=ge(l.header,r);return C.useLayoutEffect(()=>(d(a),()=>d(void 0)),[a,d]),P.jsxs("div",{className:ee(f.base,c&&f.popup,n),...s,children:[P.jsx(t,{id:a,className:f.title,children:e}),P.jsx("button",{"aria-label":"Close",className:f.close.base,type:"button",onClick:u,children:P.jsx(dk,{"aria-hidden":!0,className:f.close.icon})})]})},t1=C.forwardRef(({children:t,className:e,dismissible:n=!1,onClose:r,popup:i,position:s="center",root:o,show:a,size:l="2xl",theme:c={},initialFocus:u,...d},f)=>{const[h,m]=C.useState(void 0),y=ge(Ge().modal,c),{context:g}=PM({open:a,onOpenChange:()=>r&&r()}),p=xM([g.refs.setFloating,f]),v=RM(g),_=CM(g,{outsidePressEvent:"mousedown",enabled:n}),x=kM(g),{getFloatingProps:w}=LM([v,_,x]);return a?P.jsx(ZM.Provider,{value:{theme:y,popup:i,onClose:r,setHeaderId:m},children:P.jsx(VN,{root:o,children:P.jsx(GN,{lockScroll:!0,"data-testid":"modal-overlay",className:ee(y.root.base,y.root.positions[s],a?y.root.show.on:y.root.show.off,e),...d,children:P.jsx(AM,{context:g,initialFocus:u,children:P.jsx("div",{ref:p,...w(d),"aria-labelledby":h,className:ee(y.content.base,y.root.sizes[l]),children:P.jsx("div",{className:y.content.inner,children:t})})})})})}):null});t1.displayName="Modal";e1.displayName="Modal.Header";QM.displayName="Modal.Body";JM.displayName="Modal.Footer";Object.assign(t1,{Header:e1,Body:QM,Footer:JM});const n1=C.createContext(void 0);function Bf(){const t=C.useContext(n1);if(!t)throw new Error("useNavBarContext should be used within the NavbarContext provider!");return t}const r1=({as:t="a",children:e,className:n,theme:r={},...i})=>{const{theme:s}=Bf(),o=ge(s.brand,r);return P.jsx(t,{className:ee(o.base,n),...i,children:e})},i1=({children:t,className:e,theme:n={},...r})=>{const{theme:i,isOpen:s}=Bf(),o=ge(i.collapse,n);return P.jsx("div",{"data-testid":"flowbite-navbar-collapse",className:ee(o.base,o.hidden[s?"off":"on"],e),...r,children:P.jsx("ul",{className:o.list,children:t})})},s1=({active:t,as:e="a",disabled:n,children:r,className:i,theme:s={},onClick:o,...a})=>{const{theme:l,setIsOpen:c}=Bf(),u=ge(l.link,s),d=f=>{c(!1),o==null||o(f)};return P.jsx("li",{children:P.jsx(e,{className:ee(u.base,t&&u.active.on,!t&&!n&&u.active.off,u.disabled[n?"on":"off"],i),onClick:d,...a,children:r})})};function o2(t){return En({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}const o1=({barIcon:t=o2,className:e,theme:n={},...r})=>{const{theme:i,isOpen:s,setIsOpen:o}=Bf(),a=ge(i.toggle,n),l=()=>{o(!s)};return P.jsxs("button",{"data-testid":"flowbite-navbar-toggle",onClick:l,className:ee(a.base,e),...r,children:[P.jsx("span",{className:"sr-only",children:"Open main menu"}),P.jsx(t,{"aria-hidden":!0,className:a.icon})]})},a1=({border:t,children:e,className:n,fluid:r=!1,menuOpen:i,rounded:s,theme:o={},...a})=>{const[l,c]=C.useState(i),u=ge(Ge().navbar,o);return P.jsx(n1.Provider,{value:{theme:u,isOpen:l,setIsOpen:c},children:P.jsx("nav",{className:ee(u.root.base,u.root.bordered[t?"on":"off"],u.root.rounded[s?"on":"off"],n),...a,children:P.jsx("div",{className:ee(u.root.inner.base,u.root.inner.fluid[r?"on":"off"]),children:e})})})};a1.displayName="Navbar";r1.displayName="Navbar.Brand";i1.displayName="Navbar.Collapse";s1.displayName="Navbar.Link";o1.displayName="Navbar.Toggle";Object.assign(a1,{Brand:r1,Collapse:i1,Link:s1,Toggle:o1});const a2=(t,e)=>t>=e?[]:[...Array(e-t+1).keys()].map(n=>n+t),ly=({active:t,children:e,className:n,onClick:r,theme:i={},...s})=>{const o=ge(Ge().pagination,i);return P.jsx("button",{type:"button",className:ee(t&&o.pages.selector.active,n),onClick:r,...s,children:e})};ly.displayName="Pagination.Button";const Um=({children:t,className:e,onClick:n,theme:r={},disabled:i=!1,...s})=>{const o=ge(Ge().pagination,r);return P.jsx("button",{type:"button",className:ee(i&&o.pages.selector.disabled,e),disabled:i,onClick:n,...s,children:t})};Um.displayName="Pagination.Navigation";const l1=({className:t,currentPage:e,layout:n="pagination",nextLabel:r="Next",onPageChange:i,previousLabel:s="Previous",renderPaginationButton:o=d=>P.jsx(ly,{...d}),showIcons:a=!1,theme:l={},totalPages:c,...u})=>{const d=ge(Ge().pagination,l),f=Math.min(Math.max(n==="pagination"?e+2:e+4,5),c),h=Math.max(1,f-4),m=()=>{i(Math.min(e+1,c))},y=()=>{i(Math.max(e-1,1))};return P.jsxs("nav",{className:ee(d.base,t),...u,children:[n==="table"&&P.jsxs("div",{className:d.layout.table.base,children:["Showing ",P.jsx("span",{className:d.layout.table.span,children:h})," to ",P.jsx("span",{className:d.layout.table.span,children:f})," of ",P.jsx("span",{className:d.layout.table.span,children:c})," Entries"]}),P.jsxs("ul",{className:d.pages.base,children:[P.jsx("li",{children:P.jsxs(Um,{className:ee(d.pages.previous.base,a&&d.pages.showIcon),onClick:y,disabled:e===1,children:[a&&P.jsx(rk,{"aria-hidden":!0,className:d.pages.previous.icon}),s]})}),n==="pagination"&&a2(h,f).map(g=>P.jsx("li",{"aria-current":g===e?"page":void 0,children:o({className:ee(d.pages.selector.base,e===g&&d.pages.selector.active),active:g===e,onClick:()=>i(g),children:g})},g)),P.jsx("li",{children:P.jsxs(Um,{className:ee(d.pages.next.base,a&&d.pages.showIcon),onClick:m,disabled:e===c,children:[r,a&&P.jsx(ik,{"aria-hidden":!0,className:d.pages.next.icon})]})})]})]})};l1.displayName="Pagination";Object.assign(l1,{Button:ly});const l2=C.forwardRef(({className:t,theme:e={},...n},r)=>{const i=ge(Ge().radio,e);return P.jsx("input",{ref:r,type:"radio",className:ee(i.root.base,t),...n})});l2.displayName="Radio";const c2=C.forwardRef(({className:t,sizing:e="md",theme:n={},...r},i)=>{const s=ge(Ge().rangeSlider,n);return P.jsx(P.Fragment,{children:P.jsx("div",{"data-testid":"flowbite-range-slider",className:ee(s.root.base,t),children:P.jsx("div",{className:s.field.base,children:P.jsx("input",{ref:i,type:"range",className:ee(s.field.input.base,s.field.input.sizes[e]),...r})})})})});c2.displayName="RangeSlider";const c1=({children:t,className:e,percentFilled:n=0,theme:r={},...i})=>{const s=ge(Ge().ratingAdvanced,r);return P.jsxs("div",{className:ee(s.base,e),...i,children:[P.jsx("span",{className:s.label,children:t}),P.jsx("div",{className:s.progress.base,children:P.jsx("div",{className:s.progress.fill,"data-testid":"flowbite-rating-fill",style:{width:`${n}%`}})}),P.jsx("span",{className:s.progress.label,children:`${n}%`})]})},u1=C.createContext(void 0);function u2(){const t=C.useContext(u1);if(!t)throw new Error("useRatingContext should be used within the RatingContext provider!");return t}const d1=({className:t,filled:e=!0,starIcon:n=ok,theme:r={},...i})=>{const{theme:s,size:o="sm"}=u2(),a=ge(s.star,r);return P.jsx(n,{"data-testid":"flowbite-rating-star",className:ee(a.sizes[o],a[e?"filled":"empty"],t),...i})},f1=({children:t,className:e,size:n="sm",theme:r={},...i})=>{const s=ge(Ge().rating,r);return P.jsx(u1.Provider,{value:{theme:s,size:n},children:P.jsx("div",{className:ee(s.root.base,e),...i,children:t})})};f1.displayName="Rating";d1.displayName="Rating.Star";c1.displayName="Rating.Advanced";Object.assign(f1,{Star:d1,Advanced:c1});const d2=C.forwardRef(({addon:t,children:e,className:n,color:r="gray",helperText:i,icon:s,shadow:o,sizing:a="md",theme:l={},...c},u)=>{const d=ge(Ge().select,l);return P.jsxs("div",{className:ee(d.base,n),children:[t&&P.jsx("span",{className:d.addon,children:t}),P.jsxs("div",{className:d.field.base,children:[s&&P.jsx("div",{className:d.field.icon.base,children:P.jsx(s,{className:d.field.icon.svg})}),P.jsx("select",{className:ee(d.field.select.base,d.field.select.colors[r],d.field.select.sizes[a],d.field.select.withIcon[s?"on":"off"],d.field.select.withAddon[t?"on":"off"],d.field.select.withShadow[o?"on":"off"]),...c,ref:u,children:e}),i&&P.jsx(Bc,{color:r,children:i})]})]})});d2.displayName="Select";const f2=({animation:t="duration-300",arrow:e=!0,children:n,className:r,content:i,placement:s="top",style:o="dark",theme:a,trigger:l="hover",minWidth:c,...u})=>{const d=C.useRef(null),[f,h]=C.useState(!1),m=DM({open:f,placement:s,arrowRef:d,setOpen:h}),{context:y,middlewareData:{arrow:{x:g,y:p}={}},refs:v,strategy:_,update:x,x:w,y:T}=m,M=XN(y),{getFloatingProps:R,getReferenceProps:S}=IM({context:y,role:"tooltip",trigger:l,interactions:[M]});return C.useEffect(()=>{if(v.reference.current&&v.floating.current&&f)return hM(v.reference.current,v.floating.current,x)},[f,v.floating,v.reference,x]),P.jsxs(P.Fragment,{children:[P.jsx("div",{ref:v.setReference,className:a.target,"data-testid":"flowbite-tooltip-target",...S(),children:n}),P.jsxs("div",{ref:v.setFloating,"data-testid":"flowbite-tooltip",...R({className:ee(a.base,t&&`${a.animation} ${t}`,!f&&a.hidden,a.style[o],r),style:{position:_,top:T??" ",left:w??" ",minWidth:c},...u}),children:[P.jsx("div",{className:a.content,children:i}),e&&P.jsx("div",{className:ee(a.arrow.base,o==="dark"&&a.arrow.style.dark,o==="light"&&a.arrow.style.light,o==="auto"&&a.arrow.style.auto),"data-testid":"flowbite-tooltip-arrow",ref:d,style:{top:p??" ",left:g??" ",right:" ",bottom:" ",[t2({placement:m.placement})]:a.arrow.placement},children:" "})]})]})},cy=({animation:t="duration-300",arrow:e=!0,children:n,className:r,content:i,placement:s="top",style:o="dark",theme:a={},trigger:l="hover",...c})=>{const u=ge(Ge().tooltip,a);return P.jsx(f2,{animation:t,arrow:e,content:i,placement:s,style:o,theme:u,trigger:l,className:r,...c,children:n})};cy.displayName="Tooltip";const h1=C.createContext(void 0);function sl(){const t=C.useContext(h1);if(!t)throw new Error("useSidebarContext should be used within the SidebarContext provider!");return t}const uy=C.createContext(void 0);function h2(){const t=C.useContext(uy);if(!t)throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");return t}const p1=({children:t,className:e,icon:n,label:r,chevronIcon:i=xE,renderChevronIcon:s,open:o=!1,theme:a={},...l})=>{const c=C.useId(),[u,d]=C.useState(o),{theme:f,isCollapsed:h}=sl(),m=ge(f.collapse,a);C.useEffect(()=>d(o),[o]);const y=({children:g})=>P.jsx("li",{children:h&&!u?P.jsx(cy,{content:r,placement:"right",children:g}):g});return P.jsxs(y,{children:[P.jsxs("button",{id:`flowbite-sidebar-collapse-${c}`,onClick:()=>d(!u),title:r,type:"button",className:ee(m.button,e),...l,children:[n&&P.jsx(n,{"aria-hidden":!0,"data-testid":"flowbite-sidebar-collapse-icon",className:ee(m.icon.base,m.icon.open[u?"on":"off"])}),h?P.jsx("span",{className:"sr-only",children:r}):P.jsxs(P.Fragment,{children:[P.jsx("span",{"data-testid":"flowbite-sidebar-collapse-label",className:m.label.base,children:r}),s?s(m,u):P.jsx(i,{"aria-hidden":!0,className:ee(m.label.icon.base,m.label.icon.open[u?"on":"off"])})]})]}),P.jsx("ul",{"aria-labelledby":`flowbite-sidebar-collapse-${c}`,hidden:!u,className:m.list,children:P.jsx(uy.Provider,{value:{isInsideCollapse:!0},children:t})})]})};p1.displayName="Sidebar.Collapse";const m1=({children:t,color:e="info",className:n,theme:r={},...i})=>{const{theme:s,isCollapsed:o}=sl(),a=ge(s.cta,r);return P.jsx("div",{"data-testid":"sidebar-cta",hidden:o,className:ee(a.base,a.color[e],n),...i,children:t})};m1.displayName="Sidebar.CTA";const p2=({id:t,theme:e,isCollapsed:n,tooltipChildren:r,children:i,...s})=>P.jsx("li",{...s,children:n?P.jsx(cy,{content:P.jsx(g1,{id:t,theme:e,children:r}),placement:"right",children:i}):i}),g1=({id:t,theme:e,children:n})=>P.jsx("span",{"data-testid":"flowbite-sidebar-item-content",id:`flowbite-sidebar-item-${t}`,className:ee(e.content.base),children:n}),y1=C.forwardRef(({active:t,as:e="a",children:n,className:r,icon:i,label:s,labelColor:o="info",theme:a={},...l},c)=>{var y,g,p,v;const u=C.useId(),{theme:d,isCollapsed:f}=sl(),{isInsideCollapse:h}=h2(),m=ge(d.item,a);return P.jsx(p2,{theme:m,className:m.listItem,id:u,isCollapsed:f,tooltipChildren:n,children:P.jsxs(e,{"aria-labelledby":`flowbite-sidebar-item-${u}`,ref:c,className:ee(m.base,t&&m.active,!f&&h&&((y=m.collapsed)==null?void 0:y.insideCollapse),r),...l,children:[i&&P.jsx(i,{"aria-hidden":!0,"data-testid":"flowbite-sidebar-item-icon",className:ee((g=m.icon)==null?void 0:g.base,t&&((p=m.icon)==null?void 0:p.active))}),f&&!i&&P.jsx("span",{className:(v=m.collapsed)==null?void 0:v.noIcon,children:n.charAt(0).toLocaleUpperCase()??"?"}),!f&&P.jsx(g1,{id:u,theme:m,children:n}),!f&&s&&P.jsx(FE,{color:o,"data-testid":"flowbite-sidebar-label",hidden:f,className:m.label,children:s})]})})});y1.displayName="Sidebar.Item";const v1=({children:t,className:e,theme:n={},...r})=>{const{theme:i}=sl(),s=ge(i.itemGroup,n);return P.jsx("ul",{"data-testid":"flowbite-sidebar-item-group",className:ee(s.base,e),...r,children:P.jsx(uy.Provider,{value:{isInsideCollapse:!1},children:t})})};v1.displayName="Sidebar.ItemGroup";const x1=({children:t,className:e,theme:n={},...r})=>{const{theme:i}=sl(),s=ge(i.items,n);return P.jsx("div",{className:ee(s.base,e),"data-testid":"flowbite-sidebar-items",...r,children:t})};x1.displayName="Sidebar.Items";const _1=({children:t,className:e,href:n,img:r,imgAlt:i="",theme:s={},...o})=>{const a=C.useId(),{theme:l,isCollapsed:c}=sl(),u=ge(l.logo,s);return P.jsxs("a",{"aria-labelledby":`flowbite-sidebar-logo-${a}`,href:n,className:ee(u.base,e),...o,children:[P.jsx("img",{alt:i,src:r,className:u.img}),P.jsx("span",{className:u.collapsed[c?"on":"off"],id:`flowbite-sidebar-logo-${a}`,children:t})]})};_1.displayName="Sidebar.Logo";const b1=({children:t,as:e="nav",collapseBehavior:n="collapse",collapsed:r=!1,theme:i={},className:s,...o})=>{const a=ge(Ge().sidebar,i);return P.jsx(h1.Provider,{value:{theme:a,isCollapsed:r},children:P.jsx(e,{"aria-label":"Sidebar",hidden:r&&n==="hide",className:ee(a.root.base,a.root.collapsed[r?"on":"off"],s),...o,children:P.jsx("div",{className:a.root.inner,children:t})})})};b1.displayName="Sidebar";Object.assign(b1,{Collapse:p1,CTA:m1,Item:y1,Items:x1,ItemGroup:v1,Logo:_1});const w1=C.createContext(void 0);function m2(){const t=C.useContext(w1);if(!t)throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");return t}const S1=C.createContext(void 0);function dy(){const t=C.useContext(S1);if(!t)throw new Error("useTableContext should be used within the TableContext provider!");return t}const T1=C.forwardRef(({children:t,className:e,theme:n={},...r},i)=>{const{theme:s}=dy(),o=ge(s.body,n);return P.jsx(w1.Provider,{value:{theme:o},children:P.jsx("tbody",{className:ee(o.base,e),ref:i,...r,children:t})})});T1.displayName="Table.Body";const E1=C.forwardRef(({children:t,className:e,theme:n={},...r},i)=>{const{theme:s}=m2(),o=ge(s.cell,n);return P.jsx("td",{className:ee(o.base,e),ref:i,...r,children:t})});E1.displayName="Table.Cell";const M1=C.createContext(void 0);function g2(){const t=C.useContext(M1);if(!t)throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");return t}const A1=C.forwardRef(({children:t,className:e,theme:n={},...r},i)=>{const{theme:s}=dy(),o=ge(s.head,n);return P.jsx(M1.Provider,{value:{theme:o},children:P.jsx("thead",{className:ee(o.base,e),ref:i,...r,children:P.jsx("tr",{children:t})})})});A1.displayName="Table.Head";const R1=C.forwardRef(({children:t,className:e,theme:n={},...r},i)=>{const{theme:s}=g2(),o=ge(s.cell,n);return P.jsx("th",{className:ee(o.base,e),ref:i,...r,children:t})});R1.displayName="Table.HeadCell";const C1=C.forwardRef(({children:t,className:e,theme:n={},...r},i)=>{const{theme:s,hoverable:o,striped:a}=dy(),l=ge(s.row,n);return P.jsx("tr",{ref:i,"data-testid":"table-row-element",className:ee(l.base,a&&l.striped,o&&l.hovered,e),...r,children:t})});C1.displayName="Table.Row";const P1=C.forwardRef(({children:t,className:e,striped:n,hoverable:r,theme:i={},...s},o)=>{const a=ge(Ge().table,i);return P.jsx("div",{"data-testid":"table-element",className:ee(a.root.wrapper),children:P.jsxs(S1.Provider,{value:{theme:a,striped:n,hoverable:r},children:[P.jsx("div",{className:ee(a.root.shadow,e)}),P.jsx("table",{className:ee(a.root.base,e),...s,ref:o,children:t})]})})});P1.displayName="Table";Object.assign(P1,{Head:A1,Body:T1,Row:C1,Cell:E1,HeadCell:R1});const L1=({children:t,className:e})=>P.jsx("div",{className:e,children:t});L1.displayName="Tabs.Item";const k1=C.forwardRef(({children:t,className:e,onActiveTabChange:n,style:r="default",theme:i={},...s},o)=>{const a=ge(Ge().tabs,i),l=C.useId(),c=C.useMemo(()=>C.Children.map(C.Children.toArray(t),({props:x})=>x),[t]),u=C.useRef([]),[d,f]=C.useState(Math.max(0,c.findIndex(x=>x.active))),[h,m]=C.useState(-1),y=x=>{f(x),n&&n(x)},g=({target:x})=>{y(x),m(x)},p=({event:x,target:w})=>{x.key==="ArrowLeft"&&m(Math.max(0,h-1)),x.key==="ArrowRight"&&m(Math.min(c.length-1,h+1)),x.key==="Enter"&&(y(w),m(w))},v=a.tablist.tabitem.styles[r],_=a.tabitemcontainer.styles[r];return C.useEffect(()=>{var x;(x=u.current[h])==null||x.focus()},[h]),C.useImperativeHandle(o,()=>({setActiveTab:y})),P.jsxs("div",{className:ee(a.base,e),children:[P.jsx("div",{"aria-label":"Tabs",role:"tablist",className:ee(a.tablist.base,a.tablist.styles[r],e),...s,children:c.map((x,w)=>P.jsxs("button",{type:"button","aria-controls":`${l}-tabpanel-${w}`,"aria-selected":w===d,className:ee(a.tablist.tabitem.base,v.base,w===d&&v.active.on,w!==d&&!x.disabled&&v.active.off),disabled:x.disabled,id:`${l}-tab-${w}`,onClick:()=>g({target:w}),onKeyDown:T=>p({event:T,target:w}),ref:T=>u.current[w]=T,role:"tab",tabIndex:w===h?0:-1,style:{zIndex:w===h?2:1},children:[x.icon&&P.jsx(x.icon,{className:a.tablist.tabitem.icon}),x.title]},w))}),P.jsx("div",{className:ee(a.tabitemcontainer.base,_),children:c.map((x,w)=>P.jsx("div",{"aria-labelledby":`${l}-tab-${w}`,className:a.tabpanel,hidden:w!==d,id:`${l}-tabpanel-${w}`,role:"tabpanel",tabIndex:0,children:x.children},w))})]})});k1.displayName="Tabs";Object.assign(k1,{Item:L1});const y2=C.forwardRef(({className:t,color:e="gray",helperText:n,shadow:r,theme:i={},...s},o)=>{const a=ge(Ge().textarea,i);return P.jsxs(P.Fragment,{children:[P.jsx("textarea",{ref:o,className:ee(a.base,a.colors[e],a.withShadow[r?"on":"off"],t),...s}),n&&P.jsx(Bc,{color:e,children:n})]})});y2.displayName="Textarea";const D1=C.createContext(void 0);function fy(){const t=C.useContext(D1);if(!t)throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");return t}const I1=({children:t,className:e,theme:n={},...r})=>{const{theme:i}=fy(),s=ge(i.body,n);return P.jsx("div",{className:ee(s.base,e),...r,children:t})},N1=C.createContext(void 0);function hy(){const t=C.useContext(N1);if(!t)throw new Error("useTimelineContext should be used within the TimelineContext provider!");return t}const O1=C.createContext(void 0);function F1(){const t=C.useContext(O1);if(!t)throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");return t}const U1=({children:t,className:e,theme:n={},...r})=>{const{horizontal:i}=hy(),{theme:s}=F1(),o=ge(s.content,n);return P.jsx(D1.Provider,{value:{theme:o},children:P.jsx("div",{"data-testid":"timeline-content",className:ee(i&&o.root.base,e),...r,children:t})})},B1=({children:t,className:e,theme:n={},...r})=>{const{theme:i,horizontal:s}=hy(),o=ge(i.item,n);return P.jsx(O1.Provider,{value:{theme:o},children:P.jsx("li",{"data-testid":"timeline-item",className:ee(s&&o.root.horizontal,!s&&o.root.vertical,e),...r,children:t})})},z1=({children:t,className:e,icon:n,theme:r={},...i})=>{const{horizontal:s}=hy(),{theme:o}=F1(),a=ge(o.point,r);return P.jsxs("div",{"data-testid":"timeline-point",className:ee(s&&a.horizontal,!s&&a.vertical,e),...i,children:[t,n?P.jsx("span",{className:ee(a.marker.icon.wrapper),children:P.jsx(n,{"aria-hidden":!0,className:ee(a.marker.icon.base)})}):P.jsx("div",{className:ee(s&&a.marker.base.horizontal,!s&&a.marker.base.vertical)}),s&&P.jsx("div",{className:ee(a.line)})]})},V1=({children:t,className:e,theme:n={},...r})=>{const{theme:i}=fy(),s=ge(i.time,n);return P.jsx("time",{className:ee(s.base,e),...r,children:t})},H1=({as:t="h3",children:e,className:n,theme:r={},...i})=>{const{theme:s}=fy(),o=ge(s.title,r);return P.jsx(t,{className:ee(o.base,n),...i,children:e})},G1=({children:t,className:e,horizontal:n,theme:r={},...i})=>{const s=ge(Ge().timeline,r);return P.jsx(N1.Provider,{value:{theme:s,horizontal:n},children:P.jsx("ol",{"data-testid":"timeline-component",className:ee(n&&s.root.direction.horizontal,!n&&s.root.direction.vertical,e),...i,children:t})})};G1.displayName="Timeline";B1.displayName="Timeline.Item";z1.displayName="Timeline.Point";U1.displayName="Timeline.Content";V1.displayName="Timeline.Time";H1.displayName="Timeline.Title";I1.displayName="Timeline.Body";Object.assign(G1,{Item:B1,Point:z1,Content:U1,Time:V1,Title:H1,Body:I1});const j1=C.createContext(void 0);function v2(){const t=C.useContext(j1);if(!t)throw new Error("useToastContext should be used within the ToastContext provider!");return t}const W1=({className:t,onClick:e,theme:n={},xIcon:r=lk,onDismiss:i,...s})=>{const{theme:o,duration:a,isClosed:l,isRemoved:c,setIsClosed:u,setIsRemoved:d}=v2(),f=ge(o.toggle,n),h=m=>{if(e&&e(m),i){i();return}u(!l),setTimeout(()=>d(!c),a)};return P.jsx("button",{"aria-label":"Close",onClick:h,type:"button",className:ee(f.base,t),...s,children:P.jsx(r,{"aria-hidden":!0,className:f.icon})})},x2={75:"duration-75",100:"duration-100",150:"duration-150",200:"duration-200",300:"duration-300",500:"duration-500",700:"duration-700",1e3:"duration-1000"},X1=({children:t,className:e,duration:n=300,theme:r={},...i})=>{const[s,o]=C.useState(!1),[a,l]=C.useState(!1),c=ge(Ge().toast,r);return a?null:P.jsx(j1.Provider,{value:{theme:c,duration:n,isClosed:s,isRemoved:a,setIsClosed:o,setIsRemoved:l},children:P.jsx("div",{"data-testid":"flowbite-toast",role:"alert",className:ee(c.root.base,x2[n],s&&c.root.closed,e),...i,children:t})})};X1.displayName="Toast";W1.displayName="Toast.Toggle";Object.assign(X1,{Toggle:W1});const _2=C.forwardRef(({checked:t,className:e,color:n="blue",sizing:r="md",disabled:i,label:s,name:o,onChange:a,theme:l={},...c},u)=>{const d=C.useId(),f=ge(Ge().toggleSwitch,l),h=()=>a(!t),m=()=>{h()},y=g=>{g.code=="Enter"&&g.preventDefault()};return P.jsxs(P.Fragment,{children:[o&&t?P.jsx("input",{ref:u,checked:t,hidden:!0,name:o,readOnly:!0,type:"checkbox",className:"sr-only"}):null,P.jsxs("button",{"aria-checked":t,"aria-labelledby":`${d}-flowbite-toggleswitch-label`,disabled:i,id:`${d}-flowbite-toggleswitch`,onClick:m,onKeyDown:y,role:"switch",tabIndex:0,type:"button",className:ee(f.root.base,f.root.active[i?"off":"on"],e),...c,children:[P.jsx("div",{"data-testid":"flowbite-toggleswitch-toggle",className:ee(f.toggle.base,f.toggle.checked[t?"on":"off"],t&&f.toggle.checked.color[n],f.toggle.sizes[r])}),s!=null&&s.length?P.jsx("span",{"data-testid":"flowbite-toggleswitch-label",id:`${d}-flowbite-toggleswitch-label`,className:f.root.label,children:s}):null]})]})});_2.displayName="ToggleSwitch";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="170",hr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b2=0,c_=1,w2=2,K1=1,S2=2,hi=3,ti=0,Wn=1,Cr=2,Ss=0,Ea=1,u_=2,d_=3,f_=4,T2=5,no=100,E2=101,M2=102,A2=103,R2=104,C2=200,P2=201,L2=202,k2=203,Bm=204,zm=205,D2=206,I2=207,N2=208,O2=209,F2=210,U2=211,B2=212,z2=213,V2=214,Vm=0,Hm=1,Gm=2,Va=3,jm=4,Wm=5,Xm=6,Km=7,Y1=0,H2=1,G2=2,Ts=0,j2=1,W2=2,X2=3,K2=4,Y2=5,$2=6,q2=7,h_="attached",Z2="detached",$1=300,Ha=301,Ga=302,Ym=303,$m=304,Vf=306,zi=1e3,wi=1001,Ac=1002,wn=1003,py=1004,da=1005,Pn=1006,tc=1007,kr=1008,Vi=1009,q1=1010,Z1=1011,Rc=1012,my=1013,Eo=1014,Dr=1015,jc=1016,gy=1017,yy=1018,ja=1020,Q1=35902,J1=1021,eA=1022,gr=1023,tA=1024,nA=1025,Ma=1026,Wa=1027,vy=1028,xy=1029,rA=1030,_y=1031,by=1033,ud=33776,dd=33777,fd=33778,hd=33779,qm=35840,Zm=35841,Qm=35842,Jm=35843,eg=36196,tg=37492,ng=37496,rg=37808,ig=37809,sg=37810,og=37811,ag=37812,lg=37813,cg=37814,ug=37815,dg=37816,fg=37817,hg=37818,pg=37819,mg=37820,gg=37821,pd=36492,yg=36494,vg=36495,iA=36283,xg=36284,_g=36285,bg=36286,Xa=2300,Mo=2301,Bh=2302,p_=2400,m_=2401,g_=2402,Q2=2500,sA=0,Hf=1,Ka=2,J2=3200,eO=3201,oA=0,tO=1,us="",cn="srgb",kn="srgb-linear",Gf="linear",vt="srgb",No=7680,y_=519,nO=512,rO=513,iO=514,aA=515,sO=516,oO=517,aO=518,lO=519,wg=35044,v_="300 es",Si=2e3,tf=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let x_=1234567;const nc=Math.PI/180,Ya=180/Math.PI;function Or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function wy(t,e){return(t%e+e)%e}function cO(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function uO(t,e,n){return t!==e?(n-t)/(e-t):0}function rc(t,e,n){return(1-n)*t+n*e}function dO(t,e,n,r){return rc(t,e,1-Math.exp(-n*r))}function fO(t,e=1){return e-Math.abs(wy(t,e*2)-e)}function hO(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function pO(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function mO(t,e){return t+Math.floor(Math.random()*(e-t+1))}function gO(t,e){return t+Math.random()*(e-t)}function yO(t){return t*(.5-Math.random())}function vO(t){t!==void 0&&(x_=t);let e=x_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xO(t){return t*nc}function _O(t){return t*Ya}function bO(t){return(t&t-1)===0&&t!==0}function wO(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function SO(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function TO(t,e,n,r,i){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+r)/2),u=o((e+r)/2),d=s((e-r)/2),f=o((e-r)/2),h=s((r-e)/2),m=o((r-e)/2);switch(i){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*m,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*m,a*c);break;case"ZYZ":t.set(l*m,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Sy={DEG2RAD:nc,RAD2DEG:Ya,generateUUID:Or,clamp:un,euclideanModulo:wy,mapLinear:cO,inverseLerp:uO,lerp:rc,damp:dO,pingpong:fO,smoothstep:hO,smootherstep:pO,randInt:mO,randFloat:gO,randFloatSpread:yO,seededRandom:vO,degToRad:xO,radToDeg:_O,isPowerOfTwo:bO,ceilPowerOfTwo:wO,floorPowerOfTwo:SO,setQuaternionFromProperEuler:TO,normalize:gt,denormalize:Pr};class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,i=e.elements;return this.x=i[0]*n+i[3]*r+i[6],this.y=i[1]*n+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),i=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*r-o*i+e.x,this.y=s*i+o*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,r,i,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c)}set(e,n,r,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=r,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[3],l=r[6],c=r[1],u=r[4],d=r[7],f=r[2],h=r[5],m=r[8],y=i[0],g=i[3],p=i[6],v=i[1],_=i[4],x=i[7],w=i[2],T=i[5],M=i[8];return s[0]=o*y+a*v+l*w,s[3]=o*g+a*_+l*T,s[6]=o*p+a*x+l*M,s[1]=c*y+u*v+d*w,s[4]=c*g+u*_+d*T,s[7]=c*p+u*x+d*M,s[2]=f*y+h*v+m*w,s[5]=f*g+h*_+m*T,s[8]=f*p+h*x+m*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-r*s*u+r*a*l+i*s*c-i*o*l}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,m=n*d+r*f+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=d*y,e[1]=(i*c-u*r)*y,e[2]=(a*r-i*o)*y,e[3]=f*y,e[4]=(u*n-i*l)*y,e[5]=(i*s-a*n)*y,e[6]=h*y,e[7]=(r*l-c*n)*y,e[8]=(o*n-r*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(r*l,r*c,-r*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zh.makeScale(e,n)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,n){return this.premultiply(zh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<9;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new Ze;function lA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function EO(){const t=Cc("canvas");return t.style.display="block",t}const __={};function Bl(t){t in __||(__[t]=!0,console.warn(t))}function MO(t,e,n){return new Promise(function(r,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:r()}}setTimeout(s,n)})}function AO(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RO(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const lt={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===vt&&(t.r=Ai(t.r),t.g=Ai(t.g),t.b=Ai(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===vt&&(t.r=Aa(t.r),t.g=Aa(t.g),t.b=Aa(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===us?Gf:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Aa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const b_=[.64,.33,.3,.6,.15,.06],w_=[.2126,.7152,.0722],S_=[.3127,.329],T_=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt.define({[kn]:{primaries:b_,whitePoint:S_,transfer:Gf,toXYZ:T_,fromXYZ:E_,luminanceCoefficients:w_,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:b_,whitePoint:S_,transfer:vt,toXYZ:T_,fromXYZ:E_,luminanceCoefficients:w_,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let Oo;class CO{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Oo===void 0&&(Oo=Cc("canvas")),Oo.width=e.width,Oo.height=e.height;const r=Oo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Oo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return r.putImageData(i,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ai(n[r]/255)*255):n[r]=Ai(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PO=0;class cA{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PO++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vh(i[o].image)):s.push(Vh(i[o]))}else s=Vh(i);r.url=s}return n||(e.images[this.uuid]=r),r}}function Vh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CO.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LO=0;class Wt extends Fs{constructor(e=Wt.DEFAULT_IMAGE,n=Wt.DEFAULT_MAPPING,r=wi,i=wi,s=Pn,o=kr,a=gr,l=Vi,c=Wt.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LO++}),this.uuid=Or(),this.name="",this.source=new cA(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=$1;Wt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,r=0,i=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,i){return this.x=e,this.y=n,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*r+o[8]*i+o[12]*s,this.y=o[1]*n+o[5]*r+o[9]*i+o[13]*s,this.z=o[2]*n+o[6]*r+o[10]*i+o[14]*s,this.w=o[3]*n+o[7]*r+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(h+1)/2,w=(p+1)/2,T=(u+f)/4,M=(d+y)/4,R=(m+g)/4;return _>x&&_>w?_<.01?(r=0,i=.707106781,s=.707106781):(r=Math.sqrt(_),i=T/r,s=M/r):x>w?x<.01?(r=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),r=T/i,s=R/i):w<.01?(r=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),r=M/s,i=R/s),this.set(r,i,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kO extends Fs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const i={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const s=new Wt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);s.flipY=!1,s.generateMipmaps=r.generateMipmaps,s.internalFormat=r.internalFormat,this.textures=[];const o=r.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=n,this.textures[i].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,i=e.textures.length;r<i;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cA(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ao extends kO{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class uA extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DO extends Wt{constructor(e=null,n=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:i},this.magFilter=wn,this.minFilter=wn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,n=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=i}static slerpFlat(e,n,r,i,s,o,a){let l=r[i+0],c=r[i+1],u=r[i+2],d=r[i+3];const f=s[o+0],h=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=m,e[n+3]=y;return}if(d!==y||l!==f||c!==h||u!==m){let g=1-a;const p=l*f+c*h+u*m+d*y,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,p*v);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const x=a*v;if(l=l*g+f*x,c=c*g+h*x,u=u*g+m*x,d=d*g+y*x,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,r,i,s,o){const a=r[i],l=r[i+1],c=r[i+2],u=r[i+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*h-c*f,e[n+1]=l*m+u*f+c*d-a*h,e[n+2]=c*m+u*h+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,i){return this._x=e,this._y=n,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(r/2),u=a(i/2),d=a(s/2),f=l(r/2),h=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],i=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=r+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-i)*h}else if(r>a&&r>d){const h=2*Math.sqrt(1+r-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-r-d);this._w=(s-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-r-a);this._w=(o-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,n/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,i=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=r*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-r*c,this._z=s*u+o*c+r*l-i*a,this._w=o*u-r*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+r*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=r,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*r+n*this._x,this._y=h*i+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=r*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),i=Math.sqrt(1-r),s=Math.sqrt(r);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,r=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(M_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6]*i,this.y=s[1]*n+s[4]*r+s[7]*i,this.z=s[2]*n+s[5]*r+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,i=this.z,s=e.elements,o=1/(s[3]*n+s[7]*r+s[11]*i+s[15]);return this.x=(s[0]*n+s[4]*r+s[8]*i+s[12])*o,this.y=(s[1]*n+s[5]*r+s[9]*i+s[13])*o,this.z=(s[2]*n+s[6]*r+s[10]*i+s[14])*o,this}applyQuaternion(e){const n=this.x,r=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*r),u=2*(a*n-s*i),d=2*(s*r-o*n);return this.x=n+l*c+o*d-a*u,this.y=r+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,i=this.z,s=e.elements;return this.x=s[0]*n+s[4]*r+s[8]*i,this.y=s[1]*n+s[5]*r+s[9]*i,this.z=s[2]*n+s[6]*r+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,i=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=i*l-s*a,this.y=s*o-r*l,this.z=r*a-i*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(un(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return n*n+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const i=Math.sin(n)*e;return this.x=i*Math.sin(r),this.y=Math.cos(n)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=i,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hh=new V,M_=new Xn;class ri{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Sr.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Sr.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Sr.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const s=r.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sr):Sr.fromBufferAttribute(s,o),Sr.applyMatrix4(e.matrixWorld),this.expandByPoint(Sr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xu.copy(r.boundingBox)),xu.applyMatrix4(e.matrixWorld),this.union(xu)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sr),Sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),_u.subVectors(this.max,Tl),Fo.subVectors(e.a,Tl),Uo.subVectors(e.b,Tl),Bo.subVectors(e.c,Tl),qi.subVectors(Uo,Fo),Zi.subVectors(Bo,Uo),zs.subVectors(Fo,Bo);let n=[0,-qi.z,qi.y,0,-Zi.z,Zi.y,0,-zs.z,zs.y,qi.z,0,-qi.x,Zi.z,0,-Zi.x,zs.z,0,-zs.x,-qi.y,qi.x,0,-Zi.y,Zi.x,0,-zs.y,zs.x,0];return!Gh(n,Fo,Uo,Bo,_u)||(n=[1,0,0,0,1,0,0,0,1],!Gh(n,Fo,Uo,Bo,_u))?!1:(bu.crossVectors(qi,Zi),n=[bu.x,bu.y,bu.z],Gh(n,Fo,Uo,Bo,_u))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ai=[new V,new V,new V,new V,new V,new V,new V,new V],Sr=new V,xu=new ri,Fo=new V,Uo=new V,Bo=new V,qi=new V,Zi=new V,zs=new V,Tl=new V,_u=new V,bu=new V,Vs=new V;function Gh(t,e,n,r,i){for(let s=0,o=t.length-3;s<=o;s+=3){Vs.fromArray(t,s);const a=i.x*Math.abs(Vs.x)+i.y*Math.abs(Vs.y)+i.z*Math.abs(Vs.z),l=e.dot(Vs),c=n.dot(Vs),u=r.dot(Vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const IO=new ri,El=new V,jh=new V;class Ur{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):IO.setFromPoints(e).getCenter(r);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,r.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;El.subVectors(e,this.center);const n=El.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),i=(r-this.radius)*.5;this.center.addScaledVector(El,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(El.copy(e.center).add(jh)),this.expandByPoint(El.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new V,Wh=new V,wu=new V,Qi=new V,Xh=new V,Su=new V,Kh=new V;class ol{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,r,i){Wh.copy(e).add(n).multiplyScalar(.5),wu.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Wh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wu),a=Qi.dot(this.direction),l=-Qi.dot(wu),c=Qi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wh).addScaledVector(wu,f),h}intersectSphere(e,n){li.subVectors(e.center,this.origin);const r=li.dot(this.direction),i=li.dot(li)-r*r,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=r-o,l=r+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(r=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(r=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),r>o||s>i||((s>r||isNaN(r))&&(r=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),r>l||a>i)||((a>r||r!==r)&&(r=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,r,i,s){Xh.subVectors(n,e),Su.subVectors(r,e),Kh.crossVectors(Xh,Su);let o=this.direction.dot(Kh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(Su.crossVectors(Qi,Su));if(l<0)return null;const c=a*this.direction.dot(Xh.cross(Qi));if(c<0||l+c>o)return null;const u=-a*Qi.dot(Kh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,n,r,i,s,o,a,l,c,u,d,f,h,m,y,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,i,s,o,a,l,c,u,d,f,h,m,y,g)}set(e,n,r,i,s,o,a,l,c,u,d,f,h,m,y,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=r,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,i=1/zo.setFromMatrixColumn(e,0).length(),s=1/zo.setFromMatrixColumn(e,1).length(),o=1/zo.setFromMatrixColumn(e,2).length();return n[0]=r[0]*i,n[1]=r[1]*i,n[2]=r[2]*i,n[3]=0,n[4]=r[4]*s,n[5]=r[5]*s,n[6]=r[6]*s,n[7]=0,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,i=e.y,s=e.z,o=Math.cos(r),a=Math.sin(r),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+m*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=m+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,y=c*d;n[0]=f+y*a,n[4]=m*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-m,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=m*c-h,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=m*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+m,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NO,e,OO)}lookAt(e,n,r){const i=this.elements;return Yn.subVectors(e,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ji.crossVectors(r,Yn),Ji.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ji.crossVectors(r,Yn)),Ji.normalize(),Tu.crossVectors(Yn,Ji),i[0]=Ji.x,i[4]=Tu.x,i[8]=Yn.x,i[1]=Ji.y,i[5]=Tu.y,i[9]=Yn.y,i[2]=Ji.z,i[6]=Tu.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,i=n.elements,s=this.elements,o=r[0],a=r[4],l=r[8],c=r[12],u=r[1],d=r[5],f=r[9],h=r[13],m=r[2],y=r[6],g=r[10],p=r[14],v=r[3],_=r[7],x=r[11],w=r[15],T=i[0],M=i[4],R=i[8],S=i[12],b=i[1],D=i[5],F=i[9],N=i[13],I=i[2],O=i[6],B=i[10],G=i[14],L=i[3],j=i[7],W=i[11],Q=i[15];return s[0]=o*T+a*b+l*I+c*L,s[4]=o*M+a*D+l*O+c*j,s[8]=o*R+a*F+l*B+c*W,s[12]=o*S+a*N+l*G+c*Q,s[1]=u*T+d*b+f*I+h*L,s[5]=u*M+d*D+f*O+h*j,s[9]=u*R+d*F+f*B+h*W,s[13]=u*S+d*N+f*G+h*Q,s[2]=m*T+y*b+g*I+p*L,s[6]=m*M+y*D+g*O+p*j,s[10]=m*R+y*F+g*B+p*W,s[14]=m*S+y*N+g*G+p*Q,s[3]=v*T+_*b+x*I+w*L,s[7]=v*M+_*D+x*O+w*j,s[11]=v*R+_*F+x*B+w*W,s[15]=v*S+_*N+x*G+w*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],y=e[7],g=e[11],p=e[15];return m*(+s*l*d-i*c*d-s*a*f+r*c*f+i*a*h-r*l*h)+y*(+n*l*h-n*c*f+s*o*f-i*o*h+i*c*u-s*l*u)+g*(+n*c*d-n*a*h-s*o*d+r*o*h+s*a*u-r*c*u)+p*(-i*a*u-n*l*d+n*a*f+i*o*d-r*o*f+r*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=n,i[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],y=e[13],g=e[14],p=e[15],v=d*g*c-y*f*c+y*l*h-a*g*h-d*l*p+a*f*p,_=m*f*c-u*g*c-m*l*h+o*g*h+u*l*p-o*f*p,x=u*y*c-m*d*c+m*a*h-o*y*h-u*a*p+o*d*p,w=m*d*l-u*y*l-m*a*f+o*y*f+u*a*g-o*d*g,T=n*v+r*_+i*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(y*f*s-d*g*s-y*i*h+r*g*h+d*i*p-r*f*p)*M,e[2]=(a*g*s-y*l*s+y*i*c-r*g*c-a*i*p+r*l*p)*M,e[3]=(d*l*s-a*f*s-d*i*c+r*f*c+a*i*h-r*l*h)*M,e[4]=_*M,e[5]=(u*g*s-m*f*s+m*i*h-n*g*h-u*i*p+n*f*p)*M,e[6]=(m*l*s-o*g*s-m*i*c+n*g*c+o*i*p-n*l*p)*M,e[7]=(o*f*s-u*l*s+u*i*c-n*f*c-o*i*h+n*l*h)*M,e[8]=x*M,e[9]=(m*d*s-u*y*s-m*r*h+n*y*h+u*r*p-n*d*p)*M,e[10]=(o*y*s-m*a*s+m*r*c-n*y*c-o*r*p+n*a*p)*M,e[11]=(u*a*s-o*d*s-u*r*c+n*d*c+o*r*h-n*a*h)*M,e[12]=w*M,e[13]=(u*y*i-m*d*i+m*r*f-n*y*f-u*r*g+n*d*g)*M,e[14]=(m*a*i-o*y*i-m*r*l+n*y*l+o*r*g-n*a*g)*M,e[15]=(o*d*i-u*a*i+u*r*l-n*d*l-o*r*f+n*a*f)*M,this}scale(e){const n=this.elements,r=e.x,i=e.y,s=e.z;return n[0]*=r,n[4]*=i,n[8]*=s,n[1]*=r,n[5]*=i,n[9]*=s,n[2]*=r,n[6]*=i,n[10]*=s,n[3]*=r,n[7]*=i,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,i))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),i=Math.sin(n),s=1-r,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+r,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+r,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,i,s,o){return this.set(1,r,s,0,e,1,o,0,n,i,1,0,0,0,0,1),this}compose(e,n,r){const i=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,m=s*d,y=o*u,g=o*d,p=a*d,v=l*c,_=l*u,x=l*d,w=r.x,T=r.y,M=r.z;return i[0]=(1-(y+p))*w,i[1]=(h+x)*w,i[2]=(m-_)*w,i[3]=0,i[4]=(h-x)*T,i[5]=(1-(f+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+_)*M,i[9]=(g-v)*M,i[10]=(1-(f+y))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,n,r){const i=this.elements;let s=zo.set(i[0],i[1],i[2]).length();const o=zo.set(i[4],i[5],i[6]).length(),a=zo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tr.copy(this);const c=1/s,u=1/o,d=1/a;return Tr.elements[0]*=c,Tr.elements[1]*=c,Tr.elements[2]*=c,Tr.elements[4]*=u,Tr.elements[5]*=u,Tr.elements[6]*=u,Tr.elements[8]*=d,Tr.elements[9]*=d,Tr.elements[10]*=d,n.setFromRotationMatrix(Tr),r.x=s,r.y=o,r.z=a,this}makePerspective(e,n,r,i,s,o,a=Si){const l=this.elements,c=2*s/(n-e),u=2*s/(r-i),d=(n+e)/(n-e),f=(r+i)/(r-i);let h,m;if(a===Si)h=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===tf)h=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,r,i,s,o,a=Si){const l=this.elements,c=1/(n-e),u=1/(r-i),d=1/(o-s),f=(n+e)*c,h=(r+i)*u;let m,y;if(a===Si)m=(o+s)*d,y=-2*d;else if(a===tf)m=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let i=0;i<16;i++)if(n[i]!==r[i])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const zo=new V,Tr=new Ke,NO=new V(0,0,0),OO=new V(1,1,1),Ji=new V,Tu=new V,Yn=new V,A_=new Ke,R_=new Xn;class ni{constructor(e=0,n=0,r=0,i=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,i=this._order){return this._x=e,this._y=n,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-un(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class dA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FO=0;const C_=new V,Vo=new Xn,ci=new Ke,Eu=new V,Ml=new V,UO=new V,BO=new Xn,P_=new V(1,0,0),L_=new V(0,1,0),k_=new V(0,0,1),D_={type:"added"},zO={type:"removed"},Ho={type:"childadded",child:null},Yh={type:"childremoved",child:null};class Pt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FO++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new V,n=new ni,r=new Xn,i=new V(1,1,1);function s(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(s),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ze}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vo.setFromAxisAngle(e,n),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(e,n){return Vo.setFromAxisAngle(e,n),this.quaternion.premultiply(Vo),this}rotateX(e){return this.rotateOnAxis(P_,e)}rotateY(e){return this.rotateOnAxis(L_,e)}rotateZ(e){return this.rotateOnAxis(k_,e)}translateOnAxis(e,n){return C_.copy(e).applyQuaternion(this.quaternion),this.position.add(C_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(P_,e)}translateY(e){return this.translateOnAxis(L_,e)}translateZ(e){return this.translateOnAxis(k_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Eu.copy(e):Eu.set(e,n,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ml,Eu,this.up):ci.lookAt(Eu,Ml,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Vo.setFromRotationMatrix(ci),this.quaternion.premultiply(Vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D_),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zO),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D_),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,i=this.children.length;r<i;r++){const o=this.children[r].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,UO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,BO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,i=n.length;r<i;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(r.geometries=a),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),f.length>0&&(r.skeletons=f),h.length>0&&(r.animations=h),m.length>0&&(r.nodes=m)}return r.object=i,r;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new V(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Er=new V,ui=new V,$h=new V,di=new V,Go=new V,jo=new V,I_=new V,qh=new V,Zh=new V,Qh=new V,Jh=new ft,ep=new ft,tp=new ft;class Lr{constructor(e=new V,n=new V,r=new V){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,i){i.subVectors(r,n),Er.subVectors(e,n),i.cross(Er);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,n,r,i,s){Er.subVectors(i,n),ui.subVectors(r,n),$h.subVectors(e,n);const o=Er.dot(Er),a=Er.dot(ui),l=Er.dot($h),c=ui.dot(ui),u=ui.dot($h),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,n,r,i){return this.getBarycoord(e,n,r,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,r,i,s,o,a,l){return this.getBarycoord(e,n,r,i,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,n,r,i,s,o){return Jh.setScalar(0),ep.setScalar(0),tp.setScalar(0),Jh.fromBufferAttribute(e,n),ep.fromBufferAttribute(e,r),tp.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Jh,s.x),o.addScaledVector(ep,s.y),o.addScaledVector(tp,s.z),o}static isFrontFacing(e,n,r,i){return Er.subVectors(r,n),ui.subVectors(e,n),Er.cross(ui).dot(i)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,i){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,n,r,i){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Er.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Er.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Lr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,i,s){return Lr.getInterpolation(e,this.a,this.b,this.c,n,r,i,s)}containsPoint(e){return Lr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,i=this.b,s=this.c;let o,a;Go.subVectors(i,r),jo.subVectors(s,r),qh.subVectors(e,r);const l=Go.dot(qh),c=jo.dot(qh);if(l<=0&&c<=0)return n.copy(r);Zh.subVectors(e,i);const u=Go.dot(Zh),d=jo.dot(Zh);if(u>=0&&d<=u)return n.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(r).addScaledVector(Go,o);Qh.subVectors(e,s);const h=Go.dot(Qh),m=jo.dot(Qh);if(m>=0&&h<=m)return n.copy(s);const y=h*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(r).addScaledVector(jo,a);const g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return I_.subVectors(s,i),a=(d-u)/(d-u+(h-m)),n.copy(i).addScaledVector(I_,a);const p=1/(g+y+f);return o=y*p,a=f*p,n.copy(r).addScaledVector(Go,o).addScaledVector(jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function np(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,i=lt.workingColorSpace){return this.r=e,this.g=n,this.b=r,lt.toWorkingColorSpace(this,i),this}setHSL(e,n,r,i=lt.workingColorSpace){if(e=wy(e,1),n=un(n,0,1),r=un(r,0,1),n===0)this.r=this.g=this.b=r;else{const s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;this.r=np(o,s,e+1/3),this.g=np(o,s,e),this.b=np(o,s,e-1/3)}return lt.toWorkingColorSpace(this,i),this}setStyle(e,n=cn){function r(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return r(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=cn){const r=fA[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return lt.fromWorkingColorSpace(yn.copy(this),e),Math.round(un(yn.r*255,0,255))*65536+Math.round(un(yn.g*255,0,255))*256+Math.round(un(yn.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.fromWorkingColorSpace(yn.copy(this),n);const r=yn.r,i=yn.g,s=yn.b,o=Math.max(r,i,s),a=Math.min(r,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case r:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-r)/d+2;break;case s:l=(r-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.fromWorkingColorSpace(yn.copy(this),n),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=cn){lt.fromWorkingColorSpace(yn.copy(this),e);const n=yn.r,r=yn.g,i=yn.b;return e!==cn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,n,r){return this.getHSL(es),this.setHSL(es.h+e,es.s+n,es.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(es),e.getHSL(Mu);const r=rc(es.h,Mu.h,n),i=rc(es.s,Mu.s,n),s=rc(es.l,Mu.l,n);return this.setHSL(r,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,i=this.b,s=e.elements;return this.r=s[0]*n+s[3]*r+s[6]*i,this.g=s[1]*n+s[4]*r+s[7]*i,this.b=s[2]*n+s[5]*r+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new He;He.NAMES=fA;let VO=0;class Jn extends Fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VO++}),this.uuid=Or(),this.name="",this.blending=Ea,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bm,this.blendDst=zm,this.blendEquation=no,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const i=this[n];if(i===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ea&&(r.blending=this.blending),this.side!==ti&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Bm&&(r.blendSrc=this.blendSrc),this.blendDst!==zm&&(r.blendDst=this.blendDst),this.blendEquation!==no&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Va&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==y_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(r.stencilFail=this.stencilFail),this.stencilZFail!==No&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=i(e.textures),o=i(e.images);s.length>0&&(r.textures=s),o.length>0&&(r.images=o)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const i=n.length;r=new Array(i);for(let s=0;s!==i;++s)r[s]=n[s].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends Jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Y1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new V,Au=new Ne;class rn{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=wg,this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=n.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Au.fromBufferAttribute(this,n),Au.applyMatrix3(e),this.setXY(n,Au.x,Au.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Pr(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=gt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pr(n,this.array)),n}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pr(n,this.array)),n}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pr(n,this.array)),n}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),r=gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,i){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),r=gt(r,this.array),i=gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,n,r,i,s){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),r=gt(r,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wg&&(e.usage=this.usage),e}}class hA extends rn{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class pA extends rn{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ri extends rn{constructor(e,n,r){super(new Float32Array(e),n,r)}}let HO=0;const or=new Ke,rp=new Pt,Wo=new V,$n=new ri,Al=new ri,Jt=new V;class Br extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HO++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lA(e)?pA:hA)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const s=new Ze().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,n,r){return or.makeTranslation(e,n,r),this.applyMatrix4(or),this}scale(e,n,r){return or.makeScale(e,n,r),this.applyMatrix4(or),this}lookAt(e){return rp.lookAt(e),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];r.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ri(r,3))}else{for(let r=0,i=n.count;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,i=n.length;r<i;r++){const s=n[r];$n.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors($n.min,Al.min),$n.expandByPoint(Jt),Jt.addVectors($n.max,Al.max),$n.expandByPoint(Jt)):($n.expandByPoint(Al.min),$n.expandByPoint(Al.max))}$n.getCenter(r);let i=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),i=Math.max(i,r.distanceToSquared(Jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(Wo.fromBufferAttribute(e,c),Jt.add(Wo)),i=Math.max(i,r.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,i=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*r.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<r.count;R++)a[R]=new V,l[R]=new V;const c=new V,u=new V,d=new V,f=new Ne,h=new Ne,m=new Ne,y=new V,g=new V;function p(R,S,b){c.fromBufferAttribute(r,R),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,b),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,S),m.fromBufferAttribute(s,b),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(D),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(D),a[R].add(y),a[S].add(y),a[b].add(y),l[R].add(g),l[S].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,S=v.length;R<S;++R){const b=v[R],D=b.start,F=b.count;for(let N=D,I=D+F;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new V,x=new V,w=new V,T=new V;function M(R){w.fromBufferAttribute(i,R),T.copy(w);const S=a[R];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),x.crossVectors(T,S);const D=x.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,S=v.length;R<S;++R){const b=v[R],D=b.start,F=b.count;for(let N=D,I=D+F;N<I;N+=3)M(e.getX(N+0)),M(e.getX(N+1)),M(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let f=0,h=r.count;f<h;f++)r.setXYZ(f,0,0,0);const i=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(r,m),l.fromBufferAttribute(r,y),c.fromBufferAttribute(r,g),a.add(u),l.add(u),c.add(u),r.setXYZ(m,a.x,a.y,a.z),r.setXYZ(y,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)i.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let p=0;p<u;p++)f[m++]=c[h++]}return new rn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Br,r=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,r);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,r);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new Ke,Hs=new ol,Ru=new Ur,O_=new V,Cu=new V,Pu=new V,Lu=new V,ip=new V,ku=new V,F_=new V,Du=new V;class zn extends Pt{constructor(e=new Br,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const i=n[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const r=this.geometry,i=r.attributes.position,s=r.morphAttributes.position,o=r.morphTargetsRelative;n.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ku.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ip.fromBufferAttribute(d,e),o?ku.addScaledVector(ip,u):ku.addScaledVector(ip.sub(n),u))}n.add(ku)}return n}raycast(e,n){const r=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ru.copy(r.boundingSphere),Ru.applyMatrix4(s),Hs.copy(e.ray).recast(e.near),!(Ru.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Ru,O_)===null||Hs.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(N_.copy(s).invert(),Hs.copy(e.ray).applyMatrix4(N_),!(r.boundingBox!==null&&Hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hs)))}_computeIntersections(e,n,r){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,w=_;x<w;x+=3){const T=a.getX(x),M=a.getX(x+1),R=a.getX(x+2);i=Iu(this,p,e,r,c,u,d,T,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let g=m,p=y;g<p;g+=3){const v=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);i=Iu(this,o,e,r,c,u,d,v,_,x),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),_=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,w=_;x<w;x+=3){const T=x,M=x+1,R=x+2;i=Iu(this,p,e,r,c,u,d,T,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,n.push(i))}}else{const m=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let g=m,p=y;g<p;g+=3){const v=g,_=g+1,x=g+2;i=Iu(this,o,e,r,c,u,d,v,_,x),i&&(i.faceIndex=Math.floor(g/3),n.push(i))}}}}function GO(t,e,n,r,i,s,o,a){let l;if(e.side===Wn?l=r.intersectTriangle(o,s,i,!0,a):l=r.intersectTriangle(i,s,o,e.side===ti,a),l===null)return null;Du.copy(a),Du.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Du);return c<n.near||c>n.far?null:{distance:c,point:Du.clone(),object:t}}function Iu(t,e,n,r,i,s,o,a,l,c){t.getVertexPosition(a,Cu),t.getVertexPosition(l,Pu),t.getVertexPosition(c,Lu);const u=GO(t,e,n,r,Cu,Pu,Lu,F_);if(u){const d=new V;Lr.getBarycoord(F_,Cu,Pu,Lu,d),i&&(u.uv=Lr.getInterpolatedAttribute(i,a,l,c,d,new Ne)),s&&(u.uv1=Lr.getInterpolatedAttribute(s,a,l,c,d,new Ne)),o&&(u.normal=Lr.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Lr.getNormal(Cu,Pu,Lu,f.normal),u.face=f,u.barycoord=d}return u}class Wc extends Br{constructor(e=1,n=1,r=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,r,n,e,o,s,0),m("z","y","x",1,-1,r,n,-e,o,s,1),m("x","z","y",1,1,e,r,n,i,o,2),m("x","z","y",1,-1,e,r,-n,i,o,3),m("x","y","z",1,-1,e,n,r,i,s,4),m("x","y","z",-1,-1,e,n,-r,i,s,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(d,2));function m(y,g,p,v,_,x,w,T,M,R,S){const b=x/M,D=w/R,F=x/2,N=w/2,I=T/2,O=M+1,B=R+1;let G=0,L=0;const j=new V;for(let W=0;W<B;W++){const Q=W*D-N;for(let oe=0;oe<O;oe++){const ve=oe*b-F;j[y]=ve*v,j[g]=Q*_,j[p]=I,c.push(j.x,j.y,j.z),j[y]=0,j[g]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(oe/M),d.push(1-W/R),G+=1}}for(let W=0;W<R;W++)for(let Q=0;Q<M;Q++){const oe=f+Q+O*W,ve=f+Q+O*(W+1),$=f+(Q+1)+O*(W+1),ne=f+(Q+1)+O*W;l.push(oe,ve,ne),l.push(ve,$,ne),L+=6}a.addGroup(h,L,S),h+=L,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $a(t){const e={};for(const n in t){e[n]={};for(const r in t[n]){const i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}}return e}function An(t){const e={};for(let n=0;n<t.length;n++){const r=$a(t[n]);for(const i in r)e[i]=r[i]}return e}function jO(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mA(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const WO={clone:$a,merge:An};var XO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rs extends Jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XO,this.fragmentShader=KO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$a(e.uniforms),this.uniformsGroups=jO(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?n.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[i]={type:"m4",value:o.toArray()}:n.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class gA extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new V,U_=new Ne,B_=new Ne;class tn extends gA{constructor(e=50,n=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ya*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,n){return this.getViewBounds(e,U_,B_),n.subVectors(B_,U_)}setViewOffset(e,n,r,i,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(nc*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,n-=o.offsetY*r/c,i*=o.width/l,r*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xo=-90,Ko=1;class YO extends Pt{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Xo,Ko,e,n);i.layers=this.layers,this.add(i);const s=new tn(Xo,Ko,e,n);s.layers=this.layers,this.add(s);const o=new tn(Xo,Ko,e,n);o.layers=this.layers,this.add(o);const a=new tn(Xo,Ko,e,n);a.layers=this.layers,this.add(a);const l=new tn(Xo,Ko,e,n);l.layers=this.layers,this.add(l);const c=new tn(Xo,Ko,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,i,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tf)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(n,s),e.setRenderTarget(r,1,i),e.render(n,o),e.setRenderTarget(r,2,i),e.render(n,a),e.setRenderTarget(r,3,i),e.render(n,l),e.setRenderTarget(r,4,i),e.render(n,c),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,i),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,r.texture.needsPMREMUpdate=!0}}class yA extends Wt{constructor(e,n,r,i,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ha,super(e,n,r,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $O extends Ao{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];this.texture=new yA(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wc(5,5,5),s=new Rs({name:"CubemapFromEquirect",uniforms:$a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:Ss});s.uniforms.tEquirect.value=n;const o=new zn(i,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Pn),new YO(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,r,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,r,i);e.setRenderTarget(s)}}const sp=new V,qO=new V,ZO=new Ze;class xi{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,i){return this.normal.set(e,n,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const i=sp.subVectors(r,n).cross(qO.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(sp),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:n.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ZO.getNormalMatrix(e),i=this.coplanarPoint(sp).applyMatrix4(e),s=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gs=new Ur,Nu=new V;class Ty{constructor(e=new xi,n=new xi,r=new xi,i=new xi,s=new xi,o=new xi){this.planes=[e,n,r,i,s,o]}set(e,n,r,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(r),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Si){const r=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],m=i[9],y=i[10],g=i[11],p=i[12],v=i[13],_=i[14],x=i[15];if(r[0].setComponents(l-s,f-c,g-h,x-p).normalize(),r[1].setComponents(l+s,f+c,g+h,x+p).normalize(),r[2].setComponents(l+o,f+u,g+m,x+v).normalize(),r[3].setComponents(l-o,f-u,g-m,x-v).normalize(),r[4].setComponents(l-a,f-d,g-y,x-_).normalize(),n===Si)r[5].setComponents(l+a,f+d,g+y,x+_).normalize();else if(n===tf)r[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){return Gs.center.set(0,0,0),Gs.radius=.7071067811865476,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){const n=this.planes,r=e.center,i=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const i=n[r];if(Nu.x=i.normal.x>0?e.max.x:e.min.x,Nu.y=i.normal.y>0?e.max.y:e.min.y,Nu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vA(){let t=null,e=!1,n=null,r=null;function i(s,o){n(s,o),r=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&n!==null&&(r=t.requestAnimationFrame(i),e=!0)},stop:function(){t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QO(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function r(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],y=d[h];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const y=d[h];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class jf extends Br{constructor(e=1,n=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:i};const s=e/2,o=n/2,a=Math.floor(r),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=n/l,h=[],m=[],y=[],g=[];for(let p=0;p<u;p++){const v=p*f-o;for(let _=0;_<c;_++){const x=_*d-s;m.push(x,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const _=v+c*p,x=v+c*(p+1),w=v+1+c*(p+1),T=v+1+c*p;h.push(_,x,T),h.push(x,w,T)}this.setIndex(h),this.setAttribute("position",new Ri(m,3)),this.setAttribute("normal",new Ri(y,3)),this.setAttribute("uv",new Ri(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.width,e.height,e.widthSegments,e.heightSegments)}}var JO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e3=`#ifdef USE_ALPHAHASH
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
#endif`,t3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s3=`#ifdef USE_AOMAP
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
#endif`,o3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a3=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f3=`#ifdef USE_IRIDESCENCE
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
#endif`,h3=`#ifdef USE_BUMPMAP
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
#endif`,p3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w3=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,S3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T3=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C3="gl_FragColor = linearToOutputTexel( gl_FragColor );",P3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,D3=`#ifdef USE_ENVMAP
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
#endif`,I3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z3=`#ifdef USE_GRADIENTMAP
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
}`,V3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j3=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,W3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,X3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Z3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q3=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eF=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tF=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nF=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rF=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iF=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lF=`#if defined( USE_POINTS_UV )
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
#endif`,cF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pF=`#ifdef USE_MORPHTARGETS
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
#endif`,mF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_F=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bF=`#ifdef USE_NORMALMAP
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
#endif`,wF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IF=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NF=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,OF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,FF=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,UF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BF=`#ifdef USE_SKINNING
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
#endif`,zF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VF=`#ifdef USE_SKINNING
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
#endif`,HF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XF=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,KF=`#ifdef USE_TRANSMISSION
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
#endif`,YF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$F=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JF=`uniform sampler2D t2D;
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
}`,eU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iU=`#include <common>
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
}`,sU=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oU=`#define DISTANCE
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
}`,aU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uU=`uniform float scale;
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
}`,dU=`uniform vec3 diffuse;
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
}`,fU=`#include <common>
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
}`,hU=`uniform vec3 diffuse;
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
}`,pU=`#define LAMBERT
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
}`,mU=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gU=`#define MATCAP
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
}`,yU=`#define MATCAP
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
}`,vU=`#define NORMAL
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
}`,xU=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_U=`#define PHONG
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
}`,bU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,wU=`#define STANDARD
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
}`,SU=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,TU=`#define TOON
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
}`,EU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,MU=`uniform float size;
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
}`,AU=`uniform vec3 diffuse;
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
}`,RU=`#include <common>
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
}`,CU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PU=`uniform float rotation;
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
}`,LU=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:JO,alphahash_pars_fragment:e3,alphamap_fragment:t3,alphamap_pars_fragment:n3,alphatest_fragment:r3,alphatest_pars_fragment:i3,aomap_fragment:s3,aomap_pars_fragment:o3,batching_pars_vertex:a3,batching_vertex:l3,begin_vertex:c3,beginnormal_vertex:u3,bsdfs:d3,iridescence_fragment:f3,bumpmap_pars_fragment:h3,clipping_planes_fragment:p3,clipping_planes_pars_fragment:m3,clipping_planes_pars_vertex:g3,clipping_planes_vertex:y3,color_fragment:v3,color_pars_fragment:x3,color_pars_vertex:_3,color_vertex:b3,common:w3,cube_uv_reflection_fragment:S3,defaultnormal_vertex:T3,displacementmap_pars_vertex:E3,displacementmap_vertex:M3,emissivemap_fragment:A3,emissivemap_pars_fragment:R3,colorspace_fragment:C3,colorspace_pars_fragment:P3,envmap_fragment:L3,envmap_common_pars_fragment:k3,envmap_pars_fragment:D3,envmap_pars_vertex:I3,envmap_physical_pars_fragment:W3,envmap_vertex:N3,fog_vertex:O3,fog_pars_vertex:F3,fog_fragment:U3,fog_pars_fragment:B3,gradientmap_pars_fragment:z3,lightmap_pars_fragment:V3,lights_lambert_fragment:H3,lights_lambert_pars_fragment:G3,lights_pars_begin:j3,lights_toon_fragment:X3,lights_toon_pars_fragment:K3,lights_phong_fragment:Y3,lights_phong_pars_fragment:$3,lights_physical_fragment:q3,lights_physical_pars_fragment:Z3,lights_fragment_begin:Q3,lights_fragment_maps:J3,lights_fragment_end:eF,logdepthbuf_fragment:tF,logdepthbuf_pars_fragment:nF,logdepthbuf_pars_vertex:rF,logdepthbuf_vertex:iF,map_fragment:sF,map_pars_fragment:oF,map_particle_fragment:aF,map_particle_pars_fragment:lF,metalnessmap_fragment:cF,metalnessmap_pars_fragment:uF,morphinstance_vertex:dF,morphcolor_vertex:fF,morphnormal_vertex:hF,morphtarget_pars_vertex:pF,morphtarget_vertex:mF,normal_fragment_begin:gF,normal_fragment_maps:yF,normal_pars_fragment:vF,normal_pars_vertex:xF,normal_vertex:_F,normalmap_pars_fragment:bF,clearcoat_normal_fragment_begin:wF,clearcoat_normal_fragment_maps:SF,clearcoat_pars_fragment:TF,iridescence_pars_fragment:EF,opaque_fragment:MF,packing:AF,premultiplied_alpha_fragment:RF,project_vertex:CF,dithering_fragment:PF,dithering_pars_fragment:LF,roughnessmap_fragment:kF,roughnessmap_pars_fragment:DF,shadowmap_pars_fragment:IF,shadowmap_pars_vertex:NF,shadowmap_vertex:OF,shadowmask_pars_fragment:FF,skinbase_vertex:UF,skinning_pars_vertex:BF,skinning_vertex:zF,skinnormal_vertex:VF,specularmap_fragment:HF,specularmap_pars_fragment:GF,tonemapping_fragment:jF,tonemapping_pars_fragment:WF,transmission_fragment:XF,transmission_pars_fragment:KF,uv_pars_fragment:YF,uv_pars_vertex:$F,uv_vertex:qF,worldpos_vertex:ZF,background_vert:QF,background_frag:JF,backgroundCube_vert:eU,backgroundCube_frag:tU,cube_vert:nU,cube_frag:rU,depth_vert:iU,depth_frag:sU,distanceRGBA_vert:oU,distanceRGBA_frag:aU,equirect_vert:lU,equirect_frag:cU,linedashed_vert:uU,linedashed_frag:dU,meshbasic_vert:fU,meshbasic_frag:hU,meshlambert_vert:pU,meshlambert_frag:mU,meshmatcap_vert:gU,meshmatcap_frag:yU,meshnormal_vert:vU,meshnormal_frag:xU,meshphong_vert:_U,meshphong_frag:bU,meshphysical_vert:wU,meshphysical_frag:SU,meshtoon_vert:TU,meshtoon_frag:EU,points_vert:MU,points_frag:AU,shadow_vert:RU,shadow_frag:CU,sprite_vert:PU,sprite_frag:LU},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Gr={basic:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:An([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:An([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:An([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:An([xe.points,xe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:An([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:An([xe.common,xe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:An([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:An([xe.sprite,xe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:An([xe.common,xe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:An([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gr.physical={uniforms:An([Gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ou={r:0,b:0,g:0},js=new ni,kU=new Ke;function DU(t,e,n,r,i,s,o){const a=new He(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const x=m(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),_=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?r.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const x=m(_);x&&(x.isCubeTexture||x.mapping===Vf)?(u===void 0&&(u=new zn(new Wc(1,1,1),new Rs({name:"BackgroundCubeMaterial",uniforms:$a(Gr.backgroundCube.uniforms),vertexShader:Gr.backgroundCube.vertexShader,fragmentShader:Gr.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),js.copy(_.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kU.makeRotationFromEuler(js)),u.material.toneMapped=lt.getTransfer(x.colorSpace)!==vt,(d!==x||f!==x.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zn(new jf(2,2),new Rs({name:"BackgroundMaterial",uniforms:$a(Gr.background.uniforms),vertexShader:Gr.background.vertexShader,fragmentShader:Gr.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,h=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Ou,mA(t)),r.buffers.color.setClear(Ou.r,Ou.g,Ou.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:y,addToRenderList:g}}function IU(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},i=f(null);let s=i,o=!1;function a(b,D,F,N,I){let O=!1;const B=d(N,F,D);s!==B&&(s=B,c(s.object)),O=h(b,N,F,I),O&&m(b,N,F,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(b,D,F,N),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function d(b,D,F){const N=F.wireframe===!0;let I=r[b.id];I===void 0&&(I={},r[b.id]=I);let O=I[D.id];O===void 0&&(O={},I[D.id]=O);let B=O[N];return B===void 0&&(B=f(l()),O[N]=B),B}function f(b){const D=[],F=[],N=[];for(let I=0;I<n;I++)D[I]=0,F[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:N,object:b,attributes:{},index:null}}function h(b,D,F,N){const I=s.attributes,O=D.attributes;let B=0;const G=F.getAttributes();for(const L in G)if(G[L].location>=0){const W=I[L];let Q=O[L];if(Q===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;B++}return s.attributesNum!==B||s.index!==N}function m(b,D,F,N){const I={},O=D.attributes;let B=0;const G=F.getAttributes();for(const L in G)if(G[L].location>=0){let W=O[L];W===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&(W=b.instanceColor));const Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),I[L]=Q,B++}s.attributes=I,s.attributesNum=B,s.index=N}function y(){const b=s.newAttributes;for(let D=0,F=b.length;D<F;D++)b[D]=0}function g(b){p(b,0)}function p(b,D){const F=s.newAttributes,N=s.enabledAttributes,I=s.attributeDivisors;F[b]=1,N[b]===0&&(t.enableVertexAttribArray(b),N[b]=1),I[b]!==D&&(t.vertexAttribDivisor(b,D),I[b]=D)}function v(){const b=s.newAttributes,D=s.enabledAttributes;for(let F=0,N=D.length;F<N;F++)D[F]!==b[F]&&(t.disableVertexAttribArray(F),D[F]=0)}function _(b,D,F,N,I,O,B){B===!0?t.vertexAttribIPointer(b,D,F,I,O):t.vertexAttribPointer(b,D,F,N,I,O)}function x(b,D,F,N){y();const I=N.attributes,O=F.getAttributes(),B=D.defaultAttributeValues;for(const G in O){const L=O[G];if(L.location>=0){let j=I[G];if(j===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(j=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(j=b.instanceColor)),j!==void 0){const W=j.normalized,Q=j.itemSize,oe=e.get(j);if(oe===void 0)continue;const ve=oe.buffer,$=oe.type,ne=oe.bytesPerElement,fe=$===t.INT||$===t.UNSIGNED_INT||j.gpuType===my;if(j.isInterleavedBufferAttribute){const le=j.data,ye=le.stride,Me=j.offset;if(le.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)p(L.location+Fe,le.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)g(L.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Fe=0;Fe<L.locationSize;Fe++)_(L.location+Fe,Q/L.locationSize,$,W,ye*ne,(Me+Q/L.locationSize*Fe)*ne,fe)}else{if(j.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)p(L.location+le,j.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let le=0;le<L.locationSize;le++)g(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let le=0;le<L.locationSize;le++)_(L.location+le,Q/L.locationSize,$,W,Q*ne,Q/L.locationSize*le*ne,fe)}}else if(B!==void 0){const W=B[G];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(L.location,W);break;case 3:t.vertexAttrib3fv(L.location,W);break;case 4:t.vertexAttrib4fv(L.location,W);break;default:t.vertexAttrib1fv(L.location,W)}}}}v()}function w(){R();for(const b in r){const D=r[b];for(const F in D){const N=D[F];for(const I in N)u(N[I].object),delete N[I];delete D[F]}delete r[b]}}function T(b){if(r[b.id]===void 0)return;const D=r[b.id];for(const F in D){const N=D[F];for(const I in N)u(N[I].object),delete N[I];delete D[F]}delete r[b.id]}function M(b){for(const D in r){const F=r[D];if(F[b.id]===void 0)continue;const N=F[b.id];for(const I in N)u(N[I].object),delete N[I];delete F[b.id]}}function R(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:M,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function NU(t,e,n){let r;function i(c){r=c}function s(c,u){t.drawArrays(r,c,u),n.update(u,r,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(r,c,u,d),n.update(u,r,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];n.update(h,r,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(r,c,0,u,0,f,0,d);let m=0;for(let y=0;y<d;y++)m+=u[y]*f[y];n.update(m,r,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function OU(t,e,n,r){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(M){return!(M!==gr&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===jc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Vi&&r.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Dr&&!R)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function FU(t){const e=this;let n=null,r=0,i=!1,s=!1;const o=new xi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||r!==0||i;return i=f,r=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:r,_=v*4;let x=p.clippingState||null;l.value=x,x=u(m,f,_,h);for(let w=0;w!==_;++w)x[w]=n[w];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,f,h,m){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const p=h+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=h;_!==y;++_,x+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function UU(t){let e=new WeakMap;function n(o,a){return a===Ym?o.mapping=Ha:a===$m&&(o.mapping=Ga),o}function r(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ym||a===$m)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $O(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",i),n(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:r,dispose:s}}class mo extends gA{constructor(e=-1,n=1,r=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=r-e,o=r+e,a=i+n,l=i-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fa=4,z_=[.125,.215,.35,.446,.526,.582],ro=20,op=new mo,V_=new He;let ap=null,lp=0,cp=0,up=!1;const Js=(1+Math.sqrt(5))/2,Yo=1/Js,H_=[new V(-Js,Yo,0),new V(Js,Yo,0),new V(-Yo,0,Js),new V(Yo,0,Js),new V(0,Js,-Yo),new V(0,Js,Yo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class G_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,i=100){ap=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,r,i,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,lp,cp),this._renderer.xr.enabled=up,e.scissorTest=!1,Fu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ha||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),up=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:jc,format:gr,colorSpace:kn,depthBuffer:!1},i=j_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(e,n,r);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BU(s)),this._blurMaterial=zU(s,e,n)}return i}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,op)}_sceneToCubeUV(e,n,r,i){const a=new tn(90,1,n,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(V_),u.toneMapping=Ts,u.autoClear=!1;const h=new yr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),m=new zn(new Wc,h);let y=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,y=!0):(h.color.copy(V_),y=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Fu(i,v*_,p>2?_:0,_,_),u.setRenderTarget(i),y&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,i=e.mapping===Ha||e.mapping===Ga;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fu(n,0,0,3*l,2*l),r.setRenderTarget(n),r.render(o,op)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=H_[(i-s-1)%H_.length];this._blur(e,s-1,s,o,a)}n.autoClear=r}_blur(e,n,r,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,r,i,"latitudinal",s),this._halfBlur(o,e,r,r,i,"longitudinal",s)}_halfBlur(e,n,r,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new zn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[r]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ro-1),y=s/m,g=isFinite(s)?1+Math.floor(u*y):ro;g>ro&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ro}`);const p=[];let v=0;for(let M=0;M<ro;++M){const R=M/y,S=Math.exp(-R*R/2);p.push(S),M===0?v+=S:M<g&&(v+=2*S)}for(let M=0;M<p.length;M++)p[M]=p[M]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-r;const x=this._sizeLods[i],w=3*x*(i>_-fa?i-_+fa:0),T=4*(this._cubeSize-x);Fu(n,w,T,3*x,2*x),l.setRenderTarget(n),l.render(d,op)}}function BU(t){const e=[],n=[],r=[];let i=t;const s=t-fa+1+z_.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);n.push(a);let l=1/a;o>t-fa?l=z_[o-t+fa-1]:o===0&&(l=0),r.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,y=3,g=2,p=1,v=new Float32Array(y*m*h),_=new Float32Array(g*m*h),x=new Float32Array(p*m*h);for(let T=0;T<h;T++){const M=T%3*2/3-1,R=T>2?0:-1,S=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(S,y*m*T),_.set(f,g*m*T);const b=[T,T,T,T,T,T];x.set(b,p*m*T)}const w=new Br;w.setAttribute("position",new rn(v,y)),w.setAttribute("uv",new rn(_,g)),w.setAttribute("faceIndex",new rn(x,p)),e.push(w),i>fa&&i--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function j_(t,e,n){const r=new Ao(t,e,n);return r.texture.mapping=Vf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fu(t,e,n,r,i){t.viewport.set(e,n,r,i),t.scissor.set(e,n,r,i)}function zU(t,e,n){const r=new Float32Array(ro),i=new V(0,1,0);return new Rs({name:"SphericalGaussianBlur",defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ey(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function W_(){return new Rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ey(),fragmentShader:`

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
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function X_(){return new Rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ey(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Ey(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VU(t){let e=new WeakMap,n=null;function r(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ym||l===$m,u=l===Ha||l===Ga;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new G_(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(n===null&&(n=new G_(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function HU(t){const e={};function n(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=t.getExtension(r)}return e[r]=i,i}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const i=n(r);return i===null&&Bl("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function GU(t,e,n,r){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const y=f.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)e.remove(y[g])}f.removeEventListener("dispose",o),delete i[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const h=d.morphAttributes;for(const m in h){const y=h[m];for(let g=0,p=y.length;g<p;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,m=d.attributes.position;let y=0;if(h!==null){const v=h.array;y=h.version;for(let _=0,x=v.length;_<x;_+=3){const w=v[_+0],T=v[_+1],M=v[_+2];f.push(w,T,T,M,M,w)}}else if(m!==void 0){const v=m.array;y=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const w=_+0,T=_+1,M=_+2;f.push(w,T,T,M,M,w)}}else return;const g=new(lA(f)?pA:hA)(f,1);g.version=y;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function jU(t,e,n){let r;function i(f){r=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(r,h,s,f*o),n.update(h,r,1)}function c(f,h,m){m!==0&&(t.drawElementsInstanced(r,h,s,f*o,m),n.update(h,r,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];n.update(g,r,1)}function d(f,h,m,y){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(r,h,0,s,f,0,y,0,m);let p=0;for(let v=0;v<m;v++)p+=h[v]*y[v];n.update(p,r,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function WU(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:i,update:r}}function XU(t,e,n){const r=new WeakMap,i=new ft;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=r.get(a);if(f===void 0||f.count!==d){let S=function(){M.dispose(),r.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;h===!0&&(_=1),m===!0&&(_=2),y===!0&&(_=3);let x=a.attributes.position.count*_,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*w*4*d),M=new uA(T,x,w,d);M.type=Dr,M.needsUpdate=!0;const R=_*4;for(let b=0;b<d;b++){const D=g[b],F=p[b],N=v[b],I=x*w*4*b;for(let O=0;O<D.count;O++){const B=O*R;h===!0&&(i.fromBufferAttribute(D,O),T[I+B+0]=i.x,T[I+B+1]=i.y,T[I+B+2]=i.z,T[I+B+3]=0),m===!0&&(i.fromBufferAttribute(F,O),T[I+B+4]=i.x,T[I+B+5]=i.y,T[I+B+6]=i.z,T[I+B+7]=0),y===!0&&(i.fromBufferAttribute(N,O),T[I+B+8]=i.x,T[I+B+9]=i.y,T[I+B+10]=i.z,T[I+B+11]=N.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new Ne(x,w)},r.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function KU(t,e,n,r){let i=new WeakMap;function s(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class xA extends Wt{constructor(e,n,r,i,s,o,a,l,c,u=Ma){if(u!==Ma&&u!==Wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ma&&(r=Eo),r===void 0&&u===Wa&&(r=ja),super(null,i,s,o,a,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _A=new Wt,K_=new xA(1,1),bA=new uA,wA=new DO,SA=new yA,Y_=[],$_=[],q_=new Float32Array(16),Z_=new Float32Array(9),Q_=new Float32Array(4);function al(t,e,n){const r=t[0];if(r<=0||r>0)return t;const i=e*n;let s=Y_[i];if(s===void 0&&(s=new Float32Array(i),Y_[i]=s),e!==0){r.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,r=e.length;n<r;n++)t[n]=e[n]}function Wf(t,e){let n=$_[e];n===void 0&&(n=new Int32Array(e),$_[e]=n);for(let r=0;r!==e;++r)n[r]=t.allocateTextureUnit();return n}function YU(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $U(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function qU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function ZU(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function QU(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Q_.set(r),t.uniformMatrix2fv(this.addr,!1,Q_),Qt(n,r)}}function JU(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;Z_.set(r),t.uniformMatrix3fv(this.addr,!1,Z_),Qt(n,r)}}function eB(t,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;q_.set(r),t.uniformMatrix4fv(this.addr,!1,q_),Qt(n,r)}}function tB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function rB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function iB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function sB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function oB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function aB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function lB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function cB(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(K_.compareFunction=aA,s=K_):s=_A,n.setTexture2D(e||s,i)}function uB(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(e||wA,i)}function dB(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(e||SA,i)}function fB(t,e,n){const r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(t.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(e||bA,i)}function hB(t){switch(t){case 5126:return YU;case 35664:return $U;case 35665:return qU;case 35666:return ZU;case 35674:return QU;case 35675:return JU;case 35676:return eB;case 5124:case 35670:return tB;case 35667:case 35671:return nB;case 35668:case 35672:return rB;case 35669:case 35673:return iB;case 5125:return sB;case 36294:return oB;case 36295:return aB;case 36296:return lB;case 35678:case 36198:case 36298:case 36306:case 35682:return cB;case 35679:case 36299:case 36307:return uB;case 35680:case 36300:case 36308:case 36293:return dB;case 36289:case 36303:case 36311:case 36292:return fB}}function pB(t,e){t.uniform1fv(this.addr,e)}function mB(t,e){const n=al(e,this.size,2);t.uniform2fv(this.addr,n)}function gB(t,e){const n=al(e,this.size,3);t.uniform3fv(this.addr,n)}function yB(t,e){const n=al(e,this.size,4);t.uniform4fv(this.addr,n)}function vB(t,e){const n=al(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function xB(t,e){const n=al(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _B(t,e){const n=al(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bB(t,e){t.uniform1iv(this.addr,e)}function wB(t,e){t.uniform2iv(this.addr,e)}function SB(t,e){t.uniform3iv(this.addr,e)}function TB(t,e){t.uniform4iv(this.addr,e)}function EB(t,e){t.uniform1uiv(this.addr,e)}function MB(t,e){t.uniform2uiv(this.addr,e)}function AB(t,e){t.uniform3uiv(this.addr,e)}function RB(t,e){t.uniform4uiv(this.addr,e)}function CB(t,e,n){const r=this.cache,i=e.length,s=Wf(n,i);Zt(r,s)||(t.uniform1iv(this.addr,s),Qt(r,s));for(let o=0;o!==i;++o)n.setTexture2D(e[o]||_A,s[o])}function PB(t,e,n){const r=this.cache,i=e.length,s=Wf(n,i);Zt(r,s)||(t.uniform1iv(this.addr,s),Qt(r,s));for(let o=0;o!==i;++o)n.setTexture3D(e[o]||wA,s[o])}function LB(t,e,n){const r=this.cache,i=e.length,s=Wf(n,i);Zt(r,s)||(t.uniform1iv(this.addr,s),Qt(r,s));for(let o=0;o!==i;++o)n.setTextureCube(e[o]||SA,s[o])}function kB(t,e,n){const r=this.cache,i=e.length,s=Wf(n,i);Zt(r,s)||(t.uniform1iv(this.addr,s),Qt(r,s));for(let o=0;o!==i;++o)n.setTexture2DArray(e[o]||bA,s[o])}function DB(t){switch(t){case 5126:return pB;case 35664:return mB;case 35665:return gB;case 35666:return yB;case 35674:return vB;case 35675:return xB;case 35676:return _B;case 5124:case 35670:return bB;case 35667:case 35671:return wB;case 35668:case 35672:return SB;case 35669:case 35673:return TB;case 5125:return EB;case 36294:return MB;case 36295:return AB;case 36296:return RB;case 35678:case 36198:case 36298:case 36306:case 35682:return CB;case 35679:case 36299:case 36307:return PB;case 35680:case 36300:case 36308:case 36293:return LB;case 36289:case 36303:case 36311:case 36292:return kB}}class IB{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=hB(n.type)}}class NB{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DB(n.type)}}class OB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,n[a.id],r)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function J_(t,e){t.seq.push(e),t.map[e.id]=e}function FB(t,e,n){const r=t.name,i=r.length;for(dp.lastIndex=0;;){const s=dp.exec(r),o=dp.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){J_(n,c===void 0?new IB(a,t,e):new NB(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new OB(a),J_(n,d)),n=d}}}class md{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const s=e.getActiveUniform(n,i),o=e.getUniformLocation(n,s.name);FB(s,o,this)}}setValue(e,n,r,i){const s=this.map[n];s!==void 0&&s.setValue(e,r,i)}setOptional(e,n,r){const i=n[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,n,r,i){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=r[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,n){const r=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in n&&r.push(o)}return r}}function eb(t,e,n){const r=t.createShader(e);return t.shaderSource(r,n),t.compileShader(r),r}const UB=37297;let BB=0;function zB(t,e){const n=t.split(`
`),r=[],i=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=i;o<s;o++){const a=o+1;r.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return r.join(`
`)}const tb=new Ze;function VB(t){lt._getMatrix(tb,lt.workingColorSpace,t);const e=`mat3( ${tb.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Gf:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function nb(t,e,n){const r=t.getShaderParameter(e,t.COMPILE_STATUS),i=t.getShaderInfoLog(e).trim();if(r&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+i+`

`+zB(t.getShaderSource(e),o)}else return i}function HB(t,e){const n=VB(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function GB(t,e){let n;switch(e){case j2:n="Linear";break;case W2:n="Reinhard";break;case X2:n="Cineon";break;case K2:n="ACESFilmic";break;case $2:n="AgX";break;case q2:n="Neutral";break;case Y2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Uu=new V;function jB(){lt.getLuminanceCoefficients(Uu);const t=Uu.x.toFixed(4),e=Uu.y.toFixed(4),n=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WB(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function XB(t){const e=[];for(const n in t){const r=t[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function KB(t,e){const n={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const s=t.getActiveAttrib(e,i),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function zl(t){return t!==""}function rb(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ib(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YB=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sg(t){return t.replace(YB,qB)}const $B=new Map;function qB(t,e){let n=et[e];if(n===void 0){const r=$B.get(e);if(r!==void 0)n=et[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sg(n)}const ZB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sb(t){return t.replace(ZB,QB)}function QB(t,e,n,r){let i="";for(let s=parseInt(e);s<parseInt(n);s++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ob(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JB(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===K1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===S2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function e4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ha:case Ga:e="ENVMAP_TYPE_CUBE";break;case Vf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function t4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ga:e="ENVMAP_MODE_REFRACTION";break}return e}function n4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Y1:e="ENVMAP_BLENDING_MULTIPLY";break;case H2:e="ENVMAP_BLENDING_MIX";break;case G2:e="ENVMAP_BLENDING_ADD";break}return e}function r4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function i4(t,e,n,r){const i=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=JB(n),c=e4(n),u=t4(n),d=n4(n),f=r4(n),h=WB(n),m=XB(s),y=i.createProgram();let g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(zl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(zl).join(`
`),p.length>0&&(p+=`
`)):(g=[ob(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),p=[ob(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ts?"#define TONE_MAPPING":"",n.toneMapping!==Ts?et.tonemapping_pars_fragment:"",n.toneMapping!==Ts?GB("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,HB("linearToOutputTexel",n.outputColorSpace),jB(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(zl).join(`
`)),o=Sg(o),o=rb(o,n),o=ib(o,n),a=Sg(a),a=rb(a,n),a=ib(a,n),o=sb(o),a=sb(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+o,x=v+p+a,w=eb(i,i.VERTEX_SHADER,_),T=eb(i,i.FRAGMENT_SHADER,x);i.attachShader(y,w),i.attachShader(y,T),n.index0AttributeName!==void 0?i.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function M(D){if(t.debug.checkShaderErrors){const F=i.getProgramInfoLog(y).trim(),N=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(T).trim();let O=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,y,w,T);else{const G=nb(i,w,"vertex"),L=nb(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+G+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||I==="")&&(B=!1);B&&(D.diagnostics={runnable:O,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:I,prefix:p}})}i.deleteShader(w),i.deleteShader(T),R=new md(i,y),S=KB(i,y)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(y,UB)),b},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BB++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=T,this}let s4=0;class o4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(n),s=this._getShaderStage(r),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new a4(e),n.set(e,r)),r}}class a4{constructor(e){this.id=s4++,this.code=e,this.usedTimes=0}}function l4(t,e,n,r,i,s,o){const a=new dA,l=new o4,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,D,F,N){const I=F.fog,O=N.geometry,B=S.isMeshStandardMaterial?F.environment:null,G=(S.isMeshStandardMaterial?n:e).get(S.envMap||B),L=G&&G.mapping===Vf?G.image.height:null,j=m[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const W=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=W!==void 0?W.length:0;let oe=0;O.morphAttributes.position!==void 0&&(oe=1),O.morphAttributes.normal!==void 0&&(oe=2),O.morphAttributes.color!==void 0&&(oe=3);let ve,$,ne,fe;if(j){const at=Gr[j];ve=at.vertexShader,$=at.fragmentShader}else ve=S.vertexShader,$=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const le=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),Me=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,st=!!S.map,_e=!!S.matcap,Qe=!!G,H=!!S.aoMap,tt=!!S.lightMap,We=!!S.bumpMap,Xe=!!S.normalMap,ce=!!S.displacementMap,Je=!!S.emissiveMap,Le=!!S.metalnessMap,k=!!S.roughnessMap,E=S.anisotropy>0,Y=S.clearcoat>0,ie=S.dispersion>0,ae=S.iridescence>0,te=S.sheen>0,Ce=S.transmission>0,pe=E&&!!S.anisotropyMap,Se=Y&&!!S.clearcoatMap,nt=Y&&!!S.clearcoatNormalMap,de=Y&&!!S.clearcoatRoughnessMap,Pe=ae&&!!S.iridescenceMap,ze=ae&&!!S.iridescenceThicknessMap,je=te&&!!S.sheenColorMap,Ae=te&&!!S.sheenRoughnessMap,z=!!S.specularMap,re=!!S.specularColorMap,be=!!S.specularIntensityMap,U=Ce&&!!S.transmissionMap,he=Ce&&!!S.thicknessMap,J=!!S.gradientMap,se=!!S.alphaMap,Te=S.alphaTest>0,we=!!S.alphaHash,Be=!!S.extensions;let ut=Ts;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ut=t.toneMapping);const Ft={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:ve,fragmentShader:$,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Fe,batchingColor:Fe&&N._colorsTexture!==null,instancing:Me,instancingColor:Me&&N.instanceColor!==null,instancingMorph:Me&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:kn,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:_e,envMap:Qe,envMapMode:Qe&&G.mapping,envMapCubeUVHeight:L,aoMap:H,lightMap:tt,bumpMap:We,normalMap:Xe,displacementMap:f&&ce,emissiveMap:Je,normalMapObjectSpace:Xe&&S.normalMapType===tO,normalMapTangentSpace:Xe&&S.normalMapType===oA,metalnessMap:Le,roughnessMap:k,anisotropy:E,anisotropyMap:pe,clearcoat:Y,clearcoatMap:Se,clearcoatNormalMap:nt,clearcoatRoughnessMap:de,dispersion:ie,iridescence:ae,iridescenceMap:Pe,iridescenceThicknessMap:ze,sheen:te,sheenColorMap:je,sheenRoughnessMap:Ae,specularMap:z,specularColorMap:re,specularIntensityMap:be,transmission:Ce,transmissionMap:U,thicknessMap:he,gradientMap:J,opaque:S.transparent===!1&&S.blending===Ea&&S.alphaToCoverage===!1,alphaMap:se,alphaTest:Te,alphaHash:we,combine:S.combine,mapUv:st&&y(S.map.channel),aoMapUv:H&&y(S.aoMap.channel),lightMapUv:tt&&y(S.lightMap.channel),bumpMapUv:We&&y(S.bumpMap.channel),normalMapUv:Xe&&y(S.normalMap.channel),displacementMapUv:ce&&y(S.displacementMap.channel),emissiveMapUv:Je&&y(S.emissiveMap.channel),metalnessMapUv:Le&&y(S.metalnessMap.channel),roughnessMapUv:k&&y(S.roughnessMap.channel),anisotropyMapUv:pe&&y(S.anisotropyMap.channel),clearcoatMapUv:Se&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:je&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(S.sheenRoughnessMap.channel),specularMapUv:z&&y(S.specularMap.channel),specularColorMapUv:re&&y(S.specularColorMap.channel),specularIntensityMapUv:be&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:he&&y(S.thicknessMap.channel),alphaMapUv:se&&y(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Xe||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(st||se),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ut,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&lt.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:Je&&S.emissiveMap.isVideoTexture===!0&&lt.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cr,flipSided:S.side===Wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(b,S),_(b,S),b.push(t.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const b=m[S.type];let D;if(b){const F=Gr[b];D=WO.clone(F.uniforms)}else D=S.uniforms;return D}function w(S,b){let D;for(let F=0,N=u.length;F<N;F++){const I=u[F];if(I.cacheKey===b){D=I,++D.usedTimes;break}}return D===void 0&&(D=new i4(t,b,S,s),u.push(D)),D}function T(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:R}}function c4(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function r(o){t.delete(o)}function i(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:r,update:i,dispose:s}}function u4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ab(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lb(){const t=[];let e=0;const n=[],r=[],i=[];function s(){e=0,n.length=0,r.length=0,i.length=0}function o(d,f,h,m,y,g){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:m,renderOrder:d.renderOrder,z:y,group:g},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=y,p.group=g),e++,p}function a(d,f,h,m,y,g){const p=o(d,f,h,m,y,g);h.transmission>0?r.push(p):h.transparent===!0?i.push(p):n.push(p)}function l(d,f,h,m,y,g){const p=o(d,f,h,m,y,g);h.transmission>0?r.unshift(p):h.transparent===!0?i.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||u4),r.length>1&&r.sort(f||ab),i.length>1&&i.sort(f||ab)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:r,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function d4(){let t=new WeakMap;function e(r,i){const s=t.get(r);let o;return s===void 0?(o=new lb,t.set(r,[o])):i>=s.length?(o=new lb,s.push(o)):o=s[i],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function f4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new He};break;case"SpotLight":n={position:new V,direction:new V,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function h4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let p4=0;function m4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g4(t){const e=new f4,n=h4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new V);const i=new V,s=new Ke,o=new Ke;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let h=0,m=0,y=0,g=0,p=0,v=0,_=0,x=0,w=0,T=0,M=0;c.sort(m4);for(let S=0,b=c.length;S<b;S++){const D=c[S],F=D.color,N=D.intensity,I=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*N,d+=F.g*N,f+=F.b*N;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],N);M++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,L=n.get(D);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,r.directionalShadow[h]=L,r.directionalShadowMap[h]=O,r.directionalShadowMatrix[h]=D.shadow.matrix,v++}r.directional[h]=B,h++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(F).multiplyScalar(N),B.distance=I,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[y]=B;const G=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,G.updateMatrices(D),D.castShadow&&T++),r.spotLightMatrix[y]=G.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,r.spotShadow[y]=L,r.spotShadowMap[y]=O,x++}y++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(F).multiplyScalar(N),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=B,g++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const G=D.shadow,L=n.get(D);L.shadowIntensity=G.intensity,L.shadowBias=G.bias,L.shadowNormalBias=G.normalBias,L.shadowRadius=G.radius,L.shadowMapSize=G.mapSize,L.shadowCameraNear=G.camera.near,L.shadowCameraFar=G.camera.far,r.pointShadow[m]=L,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=D.shadow.matrix,_++}r.point[m]=B,m++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(N),B.groundColor.copy(D.groundColor).multiplyScalar(N),r.hemi[p]=B,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=f;const R=r.hash;(R.directionalLength!==h||R.pointLength!==m||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==M)&&(r.directional.length=h,r.spot.length=y,r.rectArea.length=g,r.point.length=m,r.hemi.length=p,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=x,r.spotShadowMap.length=x,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=_,r.spotLightMatrix.length=x+w-T,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=M,R.directionalLength=h,R.pointLength=m,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=M,r.version=p4++)}function l(c,u){let d=0,f=0,h=0,m=0,y=0;const g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const _=c[p];if(_.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(_.isSpotLight){const x=r.spot[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(_.isRectAreaLight){const x=r.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const x=r.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:r}}function cb(t){const e=new g4(t),n=[],r=[];function i(u){c.camera=u,n.length=0,r.length=0}function s(u){n.push(u)}function o(u){r.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function y4(t){let e=new WeakMap;function n(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new cb(t),e.set(i,[a])):s>=o.length?(a=new cb(t),o.push(a)):a=o[s],a}function r(){e=new WeakMap}return{get:n,dispose:r}}class v4 extends Jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=J2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x4 extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function w4(t,e,n){let r=new Ty;const i=new Ne,s=new Ne,o=new ft,a=new v4({depthPacking:eO}),l=new x4,c={},u=n.maxTextureSize,d={[ti]:Wn,[Wn]:ti,[Cr]:Cr},f=new Rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:_4,fragmentShader:b4}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new Br;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zn(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K1;let p=this.type;this.render=function(T,M,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),b=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ss),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==hi&&this.type===hi,I=p===hi&&this.type!==hi;for(let O=0,B=T.length;O<B;O++){const G=T[O],L=G.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const j=L.getFrameExtents();if(i.multiply(j),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||N===!0||I===!0){const Q=this.type!==hi?{minFilter:wn,magFilter:wn}:{};L.map!==null&&L.map.dispose(),L.map=new Ao(i.x,i.y,Q),L.map.texture.name=G.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const W=L.getViewportCount();for(let Q=0;Q<W;Q++){const oe=L.getViewport(Q);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(o),L.updateMatrices(G,Q),r=L.getFrustum(),x(M,R,L.camera,G,this.type)}L.isPointLightShadow!==!0&&this.type===hi&&v(L,R),L.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(S,b,D)};function v(T,M){const R=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ao(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(M,null,R,f,y,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(M,null,R,h,y,null)}function _(T,M,R,S){let b=null;const D=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=b.uuid,N=M.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let O=I[N];O===void 0&&(O=b.clone(),I[N]=O,M.addEventListener("dispose",w)),b=O}if(b.visible=M.visible,b.wireframe=M.wireframe,S===hi?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:d[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=t.properties.get(b);F.light=R}return b}function x(T,M,R,S,b){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===hi)&&(!T.frustumCulled||r.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const N=e.update(T),I=T.material;if(Array.isArray(I)){const O=N.groups;for(let B=0,G=O.length;B<G;B++){const L=O[B],j=I[L.materialIndex];if(j&&j.visible){const W=_(T,j,S,b);T.onBeforeShadow(t,T,M,R,N,W,L),t.renderBufferDirect(R,null,N,W,T,L),T.onAfterShadow(t,T,M,R,N,W,L)}}}else if(I.visible){const O=_(T,I,S,b);T.onBeforeShadow(t,T,M,R,N,O,null),t.renderBufferDirect(R,null,N,O,T,null),T.onAfterShadow(t,T,M,R,N,O,null)}}const F=T.children;for(let N=0,I=F.length;N<I;N++)x(F[N],M,R,S,b)}function w(T){T.target.removeEventListener("dispose",w);for(const R in c){const S=c[R],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const S4={[Vm]:Hm,[Gm]:Xm,[jm]:Km,[Va]:Wm,[Hm]:Vm,[Xm]:Gm,[Km]:jm,[Wm]:Va};function T4(t,e){function n(){let U=!1;const he=new ft;let J=null;const se=new ft(0,0,0,0);return{setMask:function(Te){J!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){U=Te},setClear:function(Te,we,Be,ut,Ft){Ft===!0&&(Te*=ut,we*=ut,Be*=ut),he.set(Te,we,Be,ut),se.equals(he)===!1&&(t.clearColor(Te,we,Be,ut),se.copy(he))},reset:function(){U=!1,J=null,se.set(-1,0,0,0)}}}function r(){let U=!1,he=!1,J=null,se=null,Te=null;return{setReversed:function(we){if(he!==we){const Be=e.get("EXT_clip_control");he?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const ut=Te;Te=null,this.setClear(ut)}he=we},getReversed:function(){return he},setTest:function(we){we?le(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(we){J!==we&&!U&&(t.depthMask(we),J=we)},setFunc:function(we){if(he&&(we=S4[we]),se!==we){switch(we){case Vm:t.depthFunc(t.NEVER);break;case Hm:t.depthFunc(t.ALWAYS);break;case Gm:t.depthFunc(t.LESS);break;case Va:t.depthFunc(t.LEQUAL);break;case jm:t.depthFunc(t.EQUAL);break;case Wm:t.depthFunc(t.GEQUAL);break;case Xm:t.depthFunc(t.GREATER);break;case Km:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=we}},setLocked:function(we){U=we},setClear:function(we){Te!==we&&(he&&(we=1-we),t.clearDepth(we),Te=we)},reset:function(){U=!1,J=null,se=null,Te=null,he=!1}}}function i(){let U=!1,he=null,J=null,se=null,Te=null,we=null,Be=null,ut=null,Ft=null;return{setTest:function(at){U||(at?le(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(at){he!==at&&!U&&(t.stencilMask(at),he=at)},setFunc:function(at,sn,Nn){(J!==at||se!==sn||Te!==Nn)&&(t.stencilFunc(at,sn,Nn),J=at,se=sn,Te=Nn)},setOp:function(at,sn,Nn){(we!==at||Be!==sn||ut!==Nn)&&(t.stencilOp(at,sn,Nn),we=at,Be=sn,ut=Nn)},setLocked:function(at){U=at},setClear:function(at){Ft!==at&&(t.clearStencil(at),Ft=at)},reset:function(){U=!1,he=null,J=null,se=null,Te=null,we=null,Be=null,ut=null,Ft=null}}}const s=new n,o=new r,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,y=!1,g=null,p=null,v=null,_=null,x=null,w=null,T=null,M=new He(0,0,0),R=0,S=!1,b=null,D=null,F=null,N=null,I=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=G>=1):L.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=G>=2);let j=null,W={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ve=new ft().fromArray(Q),$=new ft().fromArray(oe);function ne(U,he,J,se){const Te=new Uint8Array(4),we=t.createTexture();t.bindTexture(U,we),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<J;Be++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(he+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return we}const fe={};fe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Va),We(!1),Xe(c_),le(t.CULL_FACE),H(Ss);function le(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ye(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function Me(U,he){return d[U]!==he?(t.bindFramebuffer(U,he),d[U]=he,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Fe(U,he){let J=h,se=!1;if(U){J=f.get(he),J===void 0&&(J=[],f.set(he,J));const Te=U.textures;if(J.length!==Te.length||J[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Be=Te.length;we<Be;we++)J[we]=t.COLOR_ATTACHMENT0+we;J.length=Te.length,se=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,se=!0);se&&t.drawBuffers(J)}function st(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const _e={[no]:t.FUNC_ADD,[E2]:t.FUNC_SUBTRACT,[M2]:t.FUNC_REVERSE_SUBTRACT};_e[A2]=t.MIN,_e[R2]=t.MAX;const Qe={[C2]:t.ZERO,[P2]:t.ONE,[L2]:t.SRC_COLOR,[Bm]:t.SRC_ALPHA,[F2]:t.SRC_ALPHA_SATURATE,[N2]:t.DST_COLOR,[D2]:t.DST_ALPHA,[k2]:t.ONE_MINUS_SRC_COLOR,[zm]:t.ONE_MINUS_SRC_ALPHA,[O2]:t.ONE_MINUS_DST_COLOR,[I2]:t.ONE_MINUS_DST_ALPHA,[U2]:t.CONSTANT_COLOR,[B2]:t.ONE_MINUS_CONSTANT_COLOR,[z2]:t.CONSTANT_ALPHA,[V2]:t.ONE_MINUS_CONSTANT_ALPHA};function H(U,he,J,se,Te,we,Be,ut,Ft,at){if(U===Ss){y===!0&&(ye(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),U!==T2){if(U!==g||at!==S){if((p!==no||x!==no)&&(t.blendEquation(t.FUNC_ADD),p=no,x=no),at)switch(U){case Ea:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case u_:t.blendFunc(t.ONE,t.ONE);break;case d_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ea:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case u_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case d_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case f_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,w=null,T=null,M.set(0,0,0),R=0,g=U,S=at}return}Te=Te||he,we=we||J,Be=Be||se,(he!==p||Te!==x)&&(t.blendEquationSeparate(_e[he],_e[Te]),p=he,x=Te),(J!==v||se!==_||we!==w||Be!==T)&&(t.blendFuncSeparate(Qe[J],Qe[se],Qe[we],Qe[Be]),v=J,_=se,w=we,T=Be),(ut.equals(M)===!1||Ft!==R)&&(t.blendColor(ut.r,ut.g,ut.b,Ft),M.copy(ut),R=Ft),g=U,S=!1}function tt(U,he){U.side===Cr?ye(t.CULL_FACE):le(t.CULL_FACE);let J=U.side===Wn;he&&(J=!J),We(J),U.blending===Ea&&U.transparent===!1?H(Ss):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const se=U.stencilWrite;a.setTest(se),se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Je(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function Xe(U){U!==b2?(le(t.CULL_FACE),U!==D&&(U===c_?t.cullFace(t.BACK):U===w2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),D=U}function ce(U){U!==F&&(B&&t.lineWidth(U),F=U)}function Je(U,he,J){U?(le(t.POLYGON_OFFSET_FILL),(N!==he||I!==J)&&(t.polygonOffset(he,J),N=he,I=J)):ye(t.POLYGON_OFFSET_FILL)}function Le(U){U?le(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function k(U){U===void 0&&(U=t.TEXTURE0+O-1),j!==U&&(t.activeTexture(U),j=U)}function E(U,he,J){J===void 0&&(j===null?J=t.TEXTURE0+O-1:J=j);let se=W[J];se===void 0&&(se={type:void 0,texture:void 0},W[J]=se),(se.type!==U||se.texture!==he)&&(j!==J&&(t.activeTexture(J),j=J),t.bindTexture(U,he||fe[U]),se.type=U,se.texture=he)}function Y(){const U=W[j];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(U){ve.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ve.copy(U))}function Ae(U){$.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function z(U,he){let J=c.get(he);J===void 0&&(J=new WeakMap,c.set(he,J));let se=J.get(U);se===void 0&&(se=t.getUniformBlockIndex(he,U.name),J.set(U,se))}function re(U,he){const se=c.get(he).get(U);l.get(he)!==se&&(t.uniformBlockBinding(he,se,U.__bindingPointIndex),l.set(he,se))}function be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},j=null,W={},d={},f=new WeakMap,h=[],m=null,y=!1,g=null,p=null,v=null,_=null,x=null,w=null,T=null,M=new He(0,0,0),R=0,S=!1,b=null,D=null,F=null,N=null,I=null,ve.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:ye,bindFramebuffer:Me,drawBuffers:Fe,useProgram:st,setBlending:H,setMaterial:tt,setFlipSided:We,setCullFace:Xe,setLineWidth:ce,setPolygonOffset:Je,setScissorTest:Le,activeTexture:k,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:Pe,texImage3D:ze,updateUBOMapping:z,uniformBlockBinding:re,texStorage2D:nt,texStorage3D:de,texSubImage2D:te,texSubImage3D:Ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:je,viewport:Ae,reset:be}}function ub(t,e,n,r){const i=E4(r);switch(n){case J1:return t*e;case tA:return t*e;case nA:return t*e*2;case vy:return t*e/i.components*i.byteLength;case xy:return t*e/i.components*i.byteLength;case rA:return t*e*2/i.components*i.byteLength;case _y:return t*e*2/i.components*i.byteLength;case eA:return t*e*3/i.components*i.byteLength;case gr:return t*e*4/i.components*i.byteLength;case by:return t*e*4/i.components*i.byteLength;case ud:case dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fd:case hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zm:case Jm:return Math.max(t,16)*Math.max(e,8)/4;case qm:case Qm:return Math.max(t,8)*Math.max(e,8)/2;case eg:case tg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ng:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ig:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case og:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ag:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cg:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ug:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case dg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pg:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pd:case yg:case vg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case iA:case xg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _g:case bg:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function E4(t){switch(t){case Vi:case q1:return{byteLength:1,components:1};case Rc:case Z1:case jc:return{byteLength:2,components:1};case gy:case yy:return{byteLength:2,components:4};case Eo:case my:case Dr:return{byteLength:4,components:1};case Q1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function M4(t,e,n,r,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(k,E){return h?new OffscreenCanvas(k,E):Cc("canvas")}function y(k,E,Y){let ie=1;const ae=Le(k);if((ae.width>Y||ae.height>Y)&&(ie=Y/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const te=Math.floor(ie*ae.width),Ce=Math.floor(ie*ae.height);d===void 0&&(d=m(te,Ce));const pe=E?m(te,Ce):d;return pe.width=te,pe.height=Ce,pe.getContext("2d").drawImage(k,0,0,te,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Ce+")."),pe}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),k;return k}function g(k){return k.generateMipmaps}function p(k){t.generateMipmap(k)}function v(k){return k.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?t.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(k,E,Y,ie,ae=!1){if(k!==null){if(t[k]!==void 0)return t[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let te=E;if(E===t.RED&&(Y===t.FLOAT&&(te=t.R32F),Y===t.HALF_FLOAT&&(te=t.R16F),Y===t.UNSIGNED_BYTE&&(te=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.R8UI),Y===t.UNSIGNED_SHORT&&(te=t.R16UI),Y===t.UNSIGNED_INT&&(te=t.R32UI),Y===t.BYTE&&(te=t.R8I),Y===t.SHORT&&(te=t.R16I),Y===t.INT&&(te=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(te=t.RG32F),Y===t.HALF_FLOAT&&(te=t.RG16F),Y===t.UNSIGNED_BYTE&&(te=t.RG8)),E===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.RG8UI),Y===t.UNSIGNED_SHORT&&(te=t.RG16UI),Y===t.UNSIGNED_INT&&(te=t.RG32UI),Y===t.BYTE&&(te=t.RG8I),Y===t.SHORT&&(te=t.RG16I),Y===t.INT&&(te=t.RG32I)),E===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(te=t.RGB16UI),Y===t.UNSIGNED_INT&&(te=t.RGB32UI),Y===t.BYTE&&(te=t.RGB8I),Y===t.SHORT&&(te=t.RGB16I),Y===t.INT&&(te=t.RGB32I)),E===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),Y===t.UNSIGNED_INT&&(te=t.RGBA32UI),Y===t.BYTE&&(te=t.RGBA8I),Y===t.SHORT&&(te=t.RGBA16I),Y===t.INT&&(te=t.RGBA32I)),E===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),E===t.RGBA){const Ce=ae?Gf:lt.getTransfer(ie);Y===t.FLOAT&&(te=t.RGBA32F),Y===t.HALF_FLOAT&&(te=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(te=Ce===vt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(k,E){let Y;return k?E===null||E===Eo||E===ja?Y=t.DEPTH24_STENCIL8:E===Dr?Y=t.DEPTH32F_STENCIL8:E===Rc&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Eo||E===ja?Y=t.DEPTH_COMPONENT24:E===Dr?Y=t.DEPTH_COMPONENT32F:E===Rc&&(Y=t.DEPTH_COMPONENT16),Y}function w(k,E){return g(k)===!0||k.isFramebufferTexture&&k.minFilter!==wn&&k.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function T(k){const E=k.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E)}function M(k){const E=k.target;E.removeEventListener("dispose",M),b(E)}function R(k){const E=r.get(k);if(E.__webglInit===void 0)return;const Y=k.source,ie=f.get(Y);if(ie){const ae=ie[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(k),Object.keys(ie).length===0&&f.delete(Y)}r.remove(k)}function S(k){const E=r.get(k);t.deleteTexture(E.__webglTexture);const Y=k.source,ie=f.get(Y);delete ie[E.__cacheKey],o.memory.textures--}function b(k){const E=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ae=0;ae<E.__webglFramebuffer[ie].length;ae++)t.deleteFramebuffer(E.__webglFramebuffer[ie][ae]);else t.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[ie]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=k.textures;for(let ie=0,ae=Y.length;ie<ae;ie++){const te=r.get(Y[ie]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),r.remove(Y[ie])}r.remove(k)}let D=0;function F(){D=0}function N(){const k=D;return k>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+i.maxTextures),D+=1,k}function I(k){const E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function O(k,E){const Y=r.get(k);if(k.isVideoTexture&&ce(k),k.isRenderTargetTexture===!1&&k.version>0&&Y.__version!==k.version){const ie=k.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,k,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function B(k,E){const Y=r.get(k);if(k.version>0&&Y.__version!==k.version){$(Y,k,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function G(k,E){const Y=r.get(k);if(k.version>0&&Y.__version!==k.version){$(Y,k,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function L(k,E){const Y=r.get(k);if(k.version>0&&Y.__version!==k.version){ne(Y,k,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const j={[zi]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Ac]:t.MIRRORED_REPEAT},W={[wn]:t.NEAREST,[py]:t.NEAREST_MIPMAP_NEAREST,[da]:t.NEAREST_MIPMAP_LINEAR,[Pn]:t.LINEAR,[tc]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},Q={[nO]:t.NEVER,[lO]:t.ALWAYS,[rO]:t.LESS,[aA]:t.LEQUAL,[iO]:t.EQUAL,[aO]:t.GEQUAL,[sO]:t.GREATER,[oO]:t.NOTEQUAL};function oe(k,E){if(E.type===Dr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===tc||E.magFilter===da||E.magFilter===kr||E.minFilter===Pn||E.minFilter===tc||E.minFilter===da||E.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(k,t.TEXTURE_WRAP_S,j[E.wrapS]),t.texParameteri(k,t.TEXTURE_WRAP_T,j[E.wrapT]),(k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY)&&t.texParameteri(k,t.TEXTURE_WRAP_R,j[E.wrapR]),t.texParameteri(k,t.TEXTURE_MAG_FILTER,W[E.magFilter]),t.texParameteri(k,t.TEXTURE_MIN_FILTER,W[E.minFilter]),E.compareFunction&&(t.texParameteri(k,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(k,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==da&&E.minFilter!==kr||E.type===Dr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(k,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(k,E){let Y=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",T));const ie=E.source;let ae=f.get(ie);ae===void 0&&(ae={},f.set(ie,ae));const te=I(E);if(te!==k.__cacheKey){ae[te]===void 0&&(ae[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[te].usedTimes++;const Ce=ae[k.__cacheKey];Ce!==void 0&&(ae[k.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(E)),k.__cacheKey=te,k.__webglTexture=ae[te].texture}return Y}function $(k,E,Y){let ie=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=t.TEXTURE_3D);const ae=ve(k,E),te=E.source;n.bindTexture(ie,k.__webglTexture,t.TEXTURE0+Y);const Ce=r.get(te);if(te.version!==Ce.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y);const pe=lt.getPrimaries(lt.workingColorSpace),Se=E.colorSpace===us?null:lt.getPrimaries(E.colorSpace),nt=E.colorSpace===us||pe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let de=y(E.image,!1,i.maxTextureSize);de=Je(E,de);const Pe=s.convert(E.format,E.colorSpace),ze=s.convert(E.type);let je=_(E.internalFormat,Pe,ze,E.colorSpace,E.isVideoTexture);oe(ie,E);let Ae;const z=E.mipmaps,re=E.isVideoTexture!==!0,be=Ce.__version===void 0||ae===!0,U=te.dataReady,he=w(E,de);if(E.isDepthTexture)je=x(E.format===Wa,E.type),be&&(re?n.texStorage2D(t.TEXTURE_2D,1,je,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,je,de.width,de.height,0,Pe,ze,null));else if(E.isDataTexture)if(z.length>0){re&&be&&n.texStorage2D(t.TEXTURE_2D,he,je,z[0].width,z[0].height);for(let J=0,se=z.length;J<se;J++)Ae=z[J],re?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Pe,ze,Ae.data):n.texImage2D(t.TEXTURE_2D,J,je,Ae.width,Ae.height,0,Pe,ze,Ae.data);E.generateMipmaps=!1}else re?(be&&n.texStorage2D(t.TEXTURE_2D,he,je,de.width,de.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,Pe,ze,de.data)):n.texImage2D(t.TEXTURE_2D,0,je,de.width,de.height,0,Pe,ze,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,je,z[0].width,z[0].height,de.depth);for(let J=0,se=z.length;J<se;J++)if(Ae=z[J],E.format!==gr)if(Pe!==null)if(re){if(U)if(E.layerUpdates.size>0){const Te=ub(Ae.width,Ae.height,E.format,E.type);for(const we of E.layerUpdates){const Be=Ae.data.subarray(we*Te/Ae.data.BYTES_PER_ELEMENT,(we+1)*Te/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,we,Ae.width,Ae.height,1,Pe,Be)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,de.depth,Pe,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,je,Ae.width,Ae.height,de.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,de.depth,Pe,ze,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,je,Ae.width,Ae.height,de.depth,0,Pe,ze,Ae.data)}else{re&&be&&n.texStorage2D(t.TEXTURE_2D,he,je,z[0].width,z[0].height);for(let J=0,se=z.length;J<se;J++)Ae=z[J],E.format!==gr?Pe!==null?re?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Pe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,J,je,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,Pe,ze,Ae.data):n.texImage2D(t.TEXTURE_2D,J,je,Ae.width,Ae.height,0,Pe,ze,Ae.data)}else if(E.isDataArrayTexture)if(re){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,je,de.width,de.height,de.depth),U)if(E.layerUpdates.size>0){const J=ub(de.width,de.height,E.format,E.type);for(const se of E.layerUpdates){const Te=de.data.subarray(se*J/de.data.BYTES_PER_ELEMENT,(se+1)*J/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,se,de.width,de.height,1,Pe,ze,Te)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,ze,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,je,de.width,de.height,de.depth,0,Pe,ze,de.data);else if(E.isData3DTexture)re?(be&&n.texStorage3D(t.TEXTURE_3D,he,je,de.width,de.height,de.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,ze,de.data)):n.texImage3D(t.TEXTURE_3D,0,je,de.width,de.height,de.depth,0,Pe,ze,de.data);else if(E.isFramebufferTexture){if(be)if(re)n.texStorage2D(t.TEXTURE_2D,he,je,de.width,de.height);else{let J=de.width,se=de.height;for(let Te=0;Te<he;Te++)n.texImage2D(t.TEXTURE_2D,Te,je,J,se,0,Pe,ze,null),J>>=1,se>>=1}}else if(z.length>0){if(re&&be){const J=Le(z[0]);n.texStorage2D(t.TEXTURE_2D,he,je,J.width,J.height)}for(let J=0,se=z.length;J<se;J++)Ae=z[J],re?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Pe,ze,Ae):n.texImage2D(t.TEXTURE_2D,J,je,Pe,ze,Ae);E.generateMipmaps=!1}else if(re){if(be){const J=Le(de);n.texStorage2D(t.TEXTURE_2D,he,je,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,ze,de)}else n.texImage2D(t.TEXTURE_2D,0,je,Pe,ze,de);g(E)&&p(ie),Ce.__version=te.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function ne(k,E,Y){if(E.image.length!==6)return;const ie=ve(k,E),ae=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+Y);const te=r.get(ae);if(ae.version!==te.__version||ie===!0){n.activeTexture(t.TEXTURE0+Y);const Ce=lt.getPrimaries(lt.workingColorSpace),pe=E.colorSpace===us?null:lt.getPrimaries(E.colorSpace),Se=E.colorSpace===us||Ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const nt=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let se=0;se<6;se++)!nt&&!de?Pe[se]=y(E.image[se],!0,i.maxCubemapSize):Pe[se]=de?E.image[se].image:E.image[se],Pe[se]=Je(E,Pe[se]);const ze=Pe[0],je=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),z=_(E.internalFormat,je,Ae,E.colorSpace),re=E.isVideoTexture!==!0,be=te.__version===void 0||ie===!0,U=ae.dataReady;let he=w(E,ze);oe(t.TEXTURE_CUBE_MAP,E);let J;if(nt){re&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,z,ze.width,ze.height);for(let se=0;se<6;se++){J=Pe[se].mipmaps;for(let Te=0;Te<J.length;Te++){const we=J[Te];E.format!==gr?je!==null?re?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,we.width,we.height,je,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,z,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,we.width,we.height,je,Ae,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,z,we.width,we.height,0,je,Ae,we.data)}}}else{if(J=E.mipmaps,re&&be){J.length>0&&he++;const se=Le(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,z,se.width,se.height)}for(let se=0;se<6;se++)if(de){re?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe[se].width,Pe[se].height,je,Ae,Pe[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,z,Pe[se].width,Pe[se].height,0,je,Ae,Pe[se].data);for(let Te=0;Te<J.length;Te++){const Be=J[Te].image[se].image;re?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Be.width,Be.height,je,Ae,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,z,Be.width,Be.height,0,je,Ae,Be.data)}}else{re?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,je,Ae,Pe[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,z,je,Ae,Pe[se]);for(let Te=0;Te<J.length;Te++){const we=J[Te];re?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,je,Ae,we.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,z,je,Ae,we.image[se])}}}g(E)&&p(t.TEXTURE_CUBE_MAP),te.__version=ae.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function fe(k,E,Y,ie,ae,te){const Ce=s.convert(Y.format,Y.colorSpace),pe=s.convert(Y.type),Se=_(Y.internalFormat,Ce,pe,Y.colorSpace),nt=r.get(E),de=r.get(Y);if(de.__renderTarget=E,!nt.__hasExternalTextures){const Pe=Math.max(1,E.width>>te),ze=Math.max(1,E.height>>te);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,te,Se,Pe,ze,E.depth,0,Ce,pe,null):n.texImage2D(ae,te,Se,Pe,ze,0,Ce,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,k),Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ae,de.__webglTexture,0,We(E)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ae,de.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(k,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,k),E.depthBuffer){const ie=E.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,te=x(E.stencilBuffer,ae),Ce=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=We(E);Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,te,E.width,E.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,te,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,te,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,k)}else{const ie=E.textures;for(let ae=0;ae<ie.length;ae++){const te=ie[ae],Ce=s.convert(te.format,te.colorSpace),pe=s.convert(te.type),Se=_(te.internalFormat,Ce,pe,te.colorSpace),nt=We(E);Y&&Xe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,nt,Se,E.width,E.height):Xe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,nt,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(k,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=r.get(E.depthTexture);ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const ae=ie.__webglTexture,te=We(E);if(E.depthTexture.format===Ma)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(E.depthTexture.format===Wa)Xe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Me(k){const E=r.get(k),Y=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){const ie=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ie}if(k.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,k)}else if(Y){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=t.createRenderbuffer(),le(E.__webglDepthbuffer[ie],k,!1);else{const ae=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,te)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,k,!1);else{const ie=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(k,E,Y){const ie=r.get(k);E!==void 0&&fe(ie.__webglFramebuffer,k,k.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Me(k)}function st(k){const E=k.texture,Y=r.get(k),ie=r.get(E);k.addEventListener("dispose",M);const ae=k.textures,te=k.isWebGLCubeRenderTarget===!0,Ce=ae.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=E.version,o.memory.textures++),te){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let Se=0;Se<E.mipmaps.length;Se++)Y.__webglFramebuffer[pe][Se]=t.createFramebuffer()}else Y.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let pe=0,Se=ae.length;pe<Se;pe++){const nt=r.get(ae[pe]);nt.__webglTexture===void 0&&(nt.__webglTexture=t.createTexture(),o.memory.textures++)}if(k.samples>0&&Xe(k)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const Se=ae[pe];Y.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const nt=s.convert(Se.format,Se.colorSpace),de=s.convert(Se.type),Pe=_(Se.internalFormat,nt,de,Se.colorSpace,k.isXRRenderTarget===!0),ze=We(k);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Pe,k.width,k.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),k.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,k,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(Y.__webglFramebuffer[pe][Se],k,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else fe(Y.__webglFramebuffer[pe],k,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(E)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let pe=0,Se=ae.length;pe<Se;pe++){const nt=ae[pe],de=r.get(nt);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),oe(t.TEXTURE_2D,nt),fe(Y.__webglFramebuffer,k,nt,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),g(nt)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(pe=k.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ie.__webglTexture),oe(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)fe(Y.__webglFramebuffer[Se],k,E,t.COLOR_ATTACHMENT0,pe,Se);else fe(Y.__webglFramebuffer,k,E,t.COLOR_ATTACHMENT0,pe,0);g(E)&&p(pe),n.unbindTexture()}k.depthBuffer&&Me(k)}function _e(k){const E=k.textures;for(let Y=0,ie=E.length;Y<ie;Y++){const ae=E[Y];if(g(ae)){const te=v(k),Ce=r.get(ae).__webglTexture;n.bindTexture(te,Ce),p(te),n.unbindTexture()}}}const Qe=[],H=[];function tt(k){if(k.samples>0){if(Xe(k)===!1){const E=k.textures,Y=k.width,ie=k.height;let ae=t.COLOR_BUFFER_BIT;const te=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=r.get(k),pe=E.length>1;if(pe)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const nt=r.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,nt,0)}t.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,ae,t.NEAREST),l===!0&&(Qe.length=0,H.length=0,Qe.push(t.COLOR_ATTACHMENT0+Se),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Qe.push(te),H.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,H)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Se]);const nt=r.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,nt,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){const E=k.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function We(k){return Math.min(i.maxSamples,k.samples)}function Xe(k){const E=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(k){const E=o.render.frame;u.get(k)!==E&&(u.set(k,E),k.update())}function Je(k,E){const Y=k.colorSpace,ie=k.format,ae=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Y!==kn&&Y!==us&&(lt.getTransfer(Y)===vt?(ie!==gr||ae!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function Le(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=L,this.rebindTextures=Fe,this.setupRenderTarget=st,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Xe}function A4(t,e){function n(r,i=us){let s;const o=lt.getTransfer(i);if(r===Vi)return t.UNSIGNED_BYTE;if(r===gy)return t.UNSIGNED_SHORT_4_4_4_4;if(r===yy)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Q1)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===q1)return t.BYTE;if(r===Z1)return t.SHORT;if(r===Rc)return t.UNSIGNED_SHORT;if(r===my)return t.INT;if(r===Eo)return t.UNSIGNED_INT;if(r===Dr)return t.FLOAT;if(r===jc)return t.HALF_FLOAT;if(r===J1)return t.ALPHA;if(r===eA)return t.RGB;if(r===gr)return t.RGBA;if(r===tA)return t.LUMINANCE;if(r===nA)return t.LUMINANCE_ALPHA;if(r===Ma)return t.DEPTH_COMPONENT;if(r===Wa)return t.DEPTH_STENCIL;if(r===vy)return t.RED;if(r===xy)return t.RED_INTEGER;if(r===rA)return t.RG;if(r===_y)return t.RG_INTEGER;if(r===by)return t.RGBA_INTEGER;if(r===ud||r===dd||r===fd||r===hd)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===ud)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===ud)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dd)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hd)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qm||r===Zm||r===Qm||r===Jm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===qm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eg||r===tg||r===ng)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===eg||r===tg)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===ng)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rg||r===ig||r===sg||r===og||r===ag||r===lg||r===cg||r===ug||r===dg||r===fg||r===hg||r===pg||r===mg||r===gg)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===rg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ig)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===og)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ag)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ug)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gg)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===pd||r===yg||r===vg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===pd)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===iA||r===xg||r===_g||r===bg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===pd)return s.COMPRESSED_RED_RGTC1_EXT;if(r===xg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_g)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:n}}class R4 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C4={type:"move"};class fp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,r),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=n.getPose(e.targetRaySpace,r),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C4)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Kr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const P4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L4=`
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

//# sourceMappingURL=vendor-Pb20Y0CO.js.map