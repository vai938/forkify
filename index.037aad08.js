function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("iqSiK",(function(t,n){var r,i,o;e(t.exports,"Fraction",(()=>r),(e=>r=e)),Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(i=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},o=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(i(this.denominator)){var e=o(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}i(this.numerator)&&(e=o(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},r=Fraction})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.037aad08.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,f={};p=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,v=Function.prototype.call;f=p?v.bind(v):function(){return v.apply(v,arguments)};var g={}.propertyIsEnumerable,m=Object.getOwnPropertyDescriptor,y=m&&!g.call({1:2},1);h=y?function(e){var t=m(this,e);return!!t&&t.enumerable}:g;var _;_=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var b,w,k={},E={},S=Function.prototype,O=S.bind,j=S.call,L=p&&O.bind(j,j),F=(E=p?function(e){return e&&L(e)}:function(e){return e&&function(){return j.apply(e,arguments)}})({}.toString),$=E("".slice);w=function(e){return $(F(e),8,-1)};var x=c.Object,M=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?M(e,""):x(e)}:x;var P,T=c.TypeError;P=function(e){if(null==e)throw T("Can't call method on "+e);return e},b=function(e){return k(P(e))};var q,A,H,I;I=function(e){return"function"==typeof e},H=function(e){return"object"==typeof e?null!==e:I(e)};var N,C={},R=function(e){return I(e)?e:void 0};N=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var z={};z=E({}.isPrototypeOf);var D,U,W,G={};G=N("navigator","userAgent")||"";var K,B,J=c.process,V=c.Deno,Y=J&&J.versions||V&&V.version,Q=Y&&Y.v8;Q&&(B=(K=Q.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!B&&G&&(!(K=G.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=G.match(/Chrome\/(\d+)/))&&(B=+K[1]),W=B,U=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&W&&W<41})),D=U&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=c.Object;C=D?function(e){return"symbol"==typeof e}:function(e){var t=N("Symbol");return I(t)&&z(t.prototype,X(e))};var Z,ee,te,ne=c.String;te=function(e){try{return ne(e)}catch(e){return"Object"}};var re=c.TypeError;ee=function(e){if(I(e))return e;throw re(te(e)+" is not a function")},Z=function(e,t){var n=e[t];return null==n?void 0:ee(n)};var ie,oe=c.TypeError;ie=function(e,t){var n,r;if("string"===t&&I(n=e.toString)&&!H(r=f(n,e)))return r;if(I(n=e.valueOf)&&!H(r=f(n,e)))return r;if("string"!==t&&I(n=e.toString)&&!H(r=f(n,e)))return r;throw oe("Can't convert object to primitive value")};var ae,se;var ce,ue={},le=Object.defineProperty;ce=function(e,t){try{le(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var de=c["__core-js_shared__"]||ce("__core-js_shared__",{});ue=de,(se=function(e,t){return ue[e]||(ue[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.5/LICENSE",source:"https://github.com/zloirock/core-js"});var pe,fe={},he=c.Object;pe=function(e){return he(P(e))};var ve=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return ve(pe(e),t)};var ge,me=0,ye=Math.random(),_e=E(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+_e(++me+ye,36)};var be=se("wks"),we=c.Symbol,ke=we&&we.for,Ee=D?we:we&&we.withoutSetter||ge;ae=function(e){if(!fe(be,e)||!U&&"string"!=typeof be[e]){var t="Symbol."+e;U&&fe(we,e)?be[e]=we[e]:be[e]=D&&ke?ke(t):Ee(t)}return be[e]};var Se=c.TypeError,Oe=ae("toPrimitive");A=function(e,t){if(!H(e)||C(e))return e;var n,r=Z(e,Oe);if(r){if(void 0===t&&(t="default"),n=f(r,e,t),!H(n)||C(n))return n;throw Se("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},q=function(e){var t=A(e,"string");return C(t)?t:t+""};var je,Le,Fe=c.document,$e=H(Fe)&&H(Fe.createElement);Le=function(e){return $e?Fe.createElement(e):{}},je=!l&&!d((function(){return 7!=Object.defineProperty(Le("div"),"a",{get:function(){return 7}}).a}));var xe,Me,Pe=Object.getOwnPropertyDescriptor,Te=s=l?Pe:function(e,t){if(e=b(e),t=q(t),je)try{return Pe(e,t)}catch(e){}if(fe(e,t))return _(!f(h,e,t),e[t])},qe={};Me=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ae,He=c.String,Ie=c.TypeError;Ae=function(e){if(H(e))return e;throw Ie(He(e)+" is not an object")};var Ne=c.TypeError,Ce=Object.defineProperty,Re=Object.getOwnPropertyDescriptor;xe=l?Me?function(e,t,n){if(Ae(e),t=q(t),Ae(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=Re(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ce(e,t,n)}:Ce:function(e,t,n){if(Ae(e),t=q(t),Ae(n),je)try{return Ce(e,t,n)}catch(e){}if("get"in n||"set"in n)throw Ne("Accessors not supported");return"value"in n&&(e[t]=n.value),e},qe=l?function(e,t,n){return xe(e,t,_(1,n))}:function(e,t,n){return e[t]=n,e};var ze,De,Ue=Function.prototype,We=l&&Object.getOwnPropertyDescriptor,Ge=fe(Ue,"name"),Ke={EXISTS:Ge,PROPER:Ge&&"something"===function(){}.name,CONFIGURABLE:Ge&&(!l||l&&We(Ue,"name").configurable)}.CONFIGURABLE,Be={},Je=E(Function.toString);I(ue.inspectSource)||(ue.inspectSource=function(e){return Je(e)}),Be=ue.inspectSource;var Ve,Ye,Qe=c.WeakMap;Ye=I(Qe)&&/native code/.test(Be(Qe));var Xe,Ze=se("keys");Xe=function(e){return Ze[e]||(Ze[e]=ge(e))};var et={};et={};var tt,nt,rt,it=c.TypeError,ot=c.WeakMap;if(Ye||ue.state){var at=ue.state||(ue.state=new ot),st=E(at.get),ct=E(at.has),ut=E(at.set);tt=function(e,t){if(ct(at,e))throw new it("Object already initialized");return t.facade=e,ut(at,e,t),t},nt=function(e){return st(at,e)||{}},rt=function(e){return ct(at,e)}}else{var lt=Xe("state");et[lt]=!0,tt=function(e,t){if(fe(e,lt))throw new it("Object already initialized");return t.facade=e,qe(e,lt,t),t},nt=function(e){return fe(e,lt)?e[lt]:{}},rt=function(e){return fe(e,lt)}}var dt=(Ve={set:tt,get:nt,has:rt,enforce:function(e){return rt(e)?nt(e):tt(e,{})},getterFor:function(e){return function(t){var n;if(!H(t)||(n=nt(t)).type!==e)throw it("Incompatible receiver, "+e+" required");return n}}}).enforce,pt=Ve.get,ft=Object.defineProperty,ht=l&&!d((function(){return 8!==ft((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),gt=De=function(e,t,n){if("Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!fe(e,"name")||Ke&&e.name!==t)&&ft(e,"name",{value:t,configurable:!0}),ht&&n&&fe(n,"arity")&&e.length!==n.arity&&ft(e,"length",{value:n.arity}),n&&fe(n,"constructor")&&n.constructor){if(l)try{ft(e,"prototype",{writable:!1})}catch(e){}}else e.prototype=void 0;var r=dt(e);return fe(r,"source")||(r.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return I(this)&&pt(this).source||Be(this)}),"toString"),ze=function(e,t,n,r){var i=!!r&&!!r.unsafe,o=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,s=r&&void 0!==r.name?r.name:t;return I(n)&&De(n,s,r),e===c?(o?e[t]=n:ce(t,n),e):(i?!a&&e[t]&&(o=!0):delete e[t],o?e[t]=n:qe(e,t,n),e)};var mt,yt,_t,bt,wt,kt={},Et=Math.ceil,St=Math.floor;wt=function(e){var t=+e;return t!=t||0===t?0:(t>0?St:Et)(t)};var Ot=Math.max,jt=Math.min;bt=function(e,t){var n=wt(e);return n<0?Ot(n+t,0):jt(n,t)};var Lt,Ft,$t=Math.min;Ft=function(e){return e>0?$t(wt(e),9007199254740991):0},Lt=function(e){return Ft(e.length)};var xt=function(e){return function(t,n,r){var i,o=b(t),a=Lt(o),s=bt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Mt={includes:xt(!0),indexOf:xt(!1)}.indexOf,Pt=E([].push);_t=function(e,t){var n,r=b(e),i=0,o=[];for(n in r)!fe(et,n)&&fe(r,n)&&Pt(o,n);for(;t.length>i;)fe(r,n=t[i++])&&(~Mt(o,n)||Pt(o,n));return o};var Tt,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");yt=Object.getOwnPropertyNames||function(e){return _t(e,qt)},Tt=Object.getOwnPropertySymbols;var At=E([].concat);kt=N("Reflect","ownKeys")||function(e){var t=yt(Ae(e));return Tt?At(t,Tt(e)):t},mt=function(e,t,n){for(var r=kt(t),i=xe,o=s,a=0;a<r.length;a++){var c=r[a];fe(e,c)||n&&fe(n,c)||i(e,c,o(t,c))}};var Ht={},It=/#|\.prototype\./,Nt=function(e,t){var n=Rt[Ct(e)];return n==Dt||n!=zt&&(I(t)?d(t):!!t)},Ct=Nt.normalize=function(e){return String(e).replace(It,".").toLowerCase()},Rt=Nt.data={},zt=Nt.NATIVE="N",Dt=Nt.POLYFILL="P";Ht=Nt,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||ce(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.noTargetGet?(a=Te(n,r))&&a.value:n[r],!Ht(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;mt(o,i)}(e.sham||i&&i.sham)&&qe(o,"sham",!0),ze(n,r,o,e)}};var Ut,Wt={},Gt=Function.prototype,Kt=Gt.apply,Bt=Gt.call;Wt="object"==typeof Reflect&&Reflect.apply||(p?Bt.bind(Kt):function(){return Bt.apply(Kt,arguments)});var Jt,Vt=E(E.bind);Jt=function(e,t){return ee(e),void 0===t?e:p?Vt(e,t):function(){return e.apply(t,arguments)}};var Yt={};Yt=N("document","documentElement");var Qt={};Qt=E([].slice);var Xt,Zt=c.TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var en;en=/(?:ipad|iphone|ipod).*applewebkit/i.test(G);var tn;tn="process"==w(c.process);var nn,rn,on,an,sn=c.setImmediate,cn=c.clearImmediate,un=c.process,ln=c.Dispatch,dn=c.Function,pn=c.MessageChannel,fn=c.String,hn=0,vn={};try{nn=c.location}catch(e){}var gn=function(e){if(fe(vn,e)){var t=vn[e];delete vn[e],t()}},mn=function(e){return function(){gn(e)}},yn=function(e){gn(e.data)},_n=function(e){c.postMessage(fn(e),nn.protocol+"//"+nn.host)};sn&&cn||(sn=function(e){Xt(arguments.length,1);var t=I(e)?e:dn(e),n=Qt(arguments,1);return vn[++hn]=function(){Wt(t,void 0,n)},rn(hn),hn},cn=function(e){delete vn[e]},tn?rn=function(e){un.nextTick(mn(e))}:ln&&ln.now?rn=function(e){ln.now(mn(e))}:pn&&!en?(an=(on=new pn).port2,on.port1.onmessage=yn,rn=Jt(an.postMessage,an)):c.addEventListener&&I(c.postMessage)&&!c.importScripts&&nn&&"file:"!==nn.protocol&&!d(_n)?(rn=_n,c.addEventListener("message",yn,!1)):rn="onreadystatechange"in Le("script")?function(e){Yt.appendChild(Le("script")).onreadystatechange=function(){Yt.removeChild(this),gn(e)}}:function(e){setTimeout(mn(e),0)});var bn=(Ut={set:sn,clear:cn}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==bn},{clearImmediate:bn});var wn=Ut.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==wn},{setImmediate:wn});var kn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new F(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return x()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==n&&r.call(w,o)&&(_=w);var k=y.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function $(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=$,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:$(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=kn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=kn:Function("r","regeneratorRuntime = r")(kn)}const En=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([r,(n=5,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]);return await i.json()}catch(e){throw e}var n},Sn={recipe:{},search:{query:"",results:[],resultsPerPage:10,page:1},bookmark:[]},On=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},jn=function(e=Sn.search.page){Sn.search.page=e;const t=(e-1)*Sn.search.resultsPerPage,n=e*Sn.search.resultsPerPage;return Sn.search.results.slice(t,n)},Ln=function(){localStorage.setItem("bookmarks",JSON.stringify(Sn.bookmark))},Fn=function(e){Sn.bookmark.push(e),e.id===Sn.recipe.id&&(Sn.recipe.bookmarked=!0),Ln()};!function(){const e=localStorage.getItem("bookmarks");e&&(Sn.bookmark=JSON.parse(e))}();var $n;$n=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString(),o("iqSiK");class xn{_data;renderSpinner=function(){const e=`\n        <div class="spinner">\n                  <svg>\n                    <use href="${n($n)}#icon-loader"></use>\n                    </svg>\n                    </div>\n                    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}_clear(){this._parentElement.innerHTML=""}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderError(e){const t=`\n          <div class="error">\n          <div>\n          <svg>\n          <use href="${n($n)}#icon-alert-triangle"></use>\n          </svg>\n          </div>\n          <p>${e}</p>\n          </div>\n          `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}o("iqSiK");var Mn=new class extends xn{_parentElement=document.querySelector(".recipe");_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;o("iqSiK").Fraction;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}_clear(){this._parentElement.innerHTML=""}update(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach(((e,t)=>{const n=i[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpinner=function(){const e=`\n      <div class="spinner">\n                <svg>\n                  <use href="${n($n)}#icon-loader"></use>\n                  </svg>\n                  </div>\n                  `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)};renderError(e){const t=`\n        <div class="error">\n        <div>\n        <svg>\n        <use href="${n($n)}#icon-alert-triangle"></use>\n        </svg>\n        </div>\n        <p>${e}</p>\n        </div>\n        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach((t=>{window.addEventListener(t,e)}))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n        <figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n            <h1 class="recipe__title">\n              <span>${this._data.title}</span>\n            </h1>\n          </figure>\n          \n          <div class="recipe__details">\n          <div class="recipe__info">\n          <svg class="recipe__info-icon">\n                <use href="${n($n)}#icon-clock"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n              <span class="recipe__info-text">minutes</span>\n            </div>\n            <div class="recipe__info">\n              <svg class="recipe__info-icon">\n                <use href="${n($n)}#icon-users"></use>\n              </svg>\n              <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n              <span class="recipe__info-text">servings</span>\n  \n              <div class="recipe__info-buttons">\n                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n                  <svg>\n                    <use href="${n($n)}#icon-minus-circle"></use>\n                  </svg>\n                </button>\n                <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n                  <svg>\n                    <use href="${n($n)}#icon-plus-circle"></use>\n                  </svg>\n                </button>\n              </div>\n            </div>\n  \n            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n                <use href="${n($n)}#icon-user"></use>\n              </svg>\n            </div>\n            <button class="btn--round btn--bookmark">\n              <svg class="">\n                <use href="${n($n)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n              </svg>\n            </button>\n          </div>\n  \n          <div class="recipe__ingredients">\n            <h2 class="heading--2">Recipe ingredients</h2>\n            <ul class="recipe__ingredient-list">\n            ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n            </ul>\n          </div>\n  \n          <div class="recipe__directions">\n            <h2 class="heading--2">How to cook it</h2>\n            <p class="recipe__directions-text">\n              This recipe was carefully designed and tested by\n              <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n              directions at their website.\n            </p>\n            <a\n              class="btn--small recipe__btn"\n              href="${this._data.sourceUrl}"\n              target="_blank"\n            >\n              <span>Directions</span>\n              <svg class="search__icon">\n                <use href="${n($n)}#icon-arrow-right"></use>\n              </svg>\n            </a>\n          </div>\n        `}_generateMarkupIngredient(e){return`\n          <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n            <use href="${n($n)}#icon-check"></use>\n          </svg>\n          <div class="recipe__quantity">${e.quantity?new $0d253f80dc492c18$var$Fraction(e.quantity).toString():""}</div>\n          <div class="recipe__description">\n            <span class="recipe__unit">${e.unit}</span>\n            ${e.description}\n          </div>\n        </li>\n          `}};var Pn=new class extends xn{_parentElement=document.querySelector(".results");_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){const t=window.location.hash.slice(1);return`\n        <li class="preview">\n        <a class="preview__link ${e.id===t?"preview__link--active":""} " href="#${e.id}">\n          <figure class="preview__fig">\n            <img src="${e.image}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${e.title}</h4>\n            <p class="preview__publisher">${e.publisher}</p>\n          </div>\n        </a>\n      </li>\n        `}};var Tn=new class{_parentElement=document.querySelector(".search");getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};var qn=new class extends xn{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;console.log(r),e(r)}))}_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?`\n      <button class="btn--inline pagination__btn--next" data-goto = ${t+1}>\n      <svg class="search__icon">\n      <use href="${n($n)}#icon-arrow-right"></use>\n      </svg>\n      <span>Page ${t+1}</span>\n    </button>\n      `:t===e&&e>1?`\n      <button  class="btn--inline pagination__btn--prev" data-goto = ${t-1}>\n      <svg class="search__icon">\n        <use href="${n($n)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${t-1}</span>\n    </button>\n      `:t<e?`\n      <button  class="btn--inline pagination__btn--prev" data-goto = ${t-1}>\n      <svg class="search__icon">\n        <use href="${n($n)}#icon-arrow-left"></use>\n      </svg>\n      <span>Page ${t-1}</span>\n    </button>\n\n    <button class="btn--inline pagination__btn--next" data-goto = ${t+1} >\n    <svg class="search__icon">\n    <use href="${n($n)}#icon-arrow-right"></use>\n    </svg>\n    <span>Page ${t+1}</span>\n  </button>\n      `:""}};var An=new class extends xn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n        <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""} " href="#${this._data.id}">\n          <figure class="preview__fig">\n            <img src="${this._data.image}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n          <h4 class="preview__title">${this._data.title}</h4>\n          <p class="preview__publisher">${this._data.publisher}</p>\n          <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n          <svg>\n            <use href="${n($n)}#icon-user"></use>\n          </svg>\n        </div>\n          </div>\n        </a>\n      </li>\n        `}};var Hn=new class extends xn{_parentElement=document.querySelector(".bookmarks__list");addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>An.render(e,!1))).join("")}};var In=new class extends xn{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Nn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;Mn.renderSpinner(),Pn.render(jn()),Hn.render(Sn.bookmark),await async function(e){try{const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=e9b898ee-d121-4fa4-a3c1-d3cd97e12e21`);Sn.recipe=On(t),Sn.bookmark.some((t=>t.id===e))?Sn.recipe.bookmarked=!0:Sn.recipe.bookmarked=!1}catch(e){throw console.error(e),e}}(e),Mn.render(Sn.recipe)}catch(e){Mn.renderError(e)}},Cn=async function(){try{const e=Tn.getQuery();if(!e)return;Pn.renderSpinner(),await async function(e){try{Sn.search.query=e;const t=await En(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=e9b898ee-d121-4fa4-a3c1-d3cd97e12e21`);Sn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Sn.search.page=1}catch(e){throw console.error(e),e}}(e),Pn.render(jn()),qn.render(Sn.search)}catch(e){console.log(e)}};Cn();const Rn=function(e){Pn.render(jn(e)),qn.render(Sn.search)},zn=function(e){!function(e){Sn.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Sn.recipe.servings})),Sn.recipe.servings=e}(e),Mn.update(Sn.recipe)},Dn=function(){Sn.recipe.bookmarked?function(e){const t=Sn.bookmark.findIndex((t=>t.id===e));Sn.bookmark.splice(t,1),e===Sn.recipe.id&&(Sn.recipe.bookmarked=!1),Ln()}(Sn.recipe.id):Fn(Sn.recipe),Mn.update(Sn.recipe),Hn.render(Sn.bookmark)},Un=function(){Hn.render(Sn.bookmark)},Wn=async function(e){try{await async function(e){const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong format has been filled...");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}}));console.log(t);const n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await En("https://forkify-api.herokuapp.com/api/v2/recipes?key=e9b898ee-d121-4fa4-a3c1-d3cd97e12e21",n);Sn.recipe=On(r),Fn(Sn.recipe),console.log(Sn.recipe)}(e),Mn.render(Sn.recipe),Hn.render(Sn.bookmark),window.history.pushState(null,"",`#${Sn.recipe.id}`),setTimeout((()=>{In.toggleWindow()}),2e3)}catch(e){console.error(e)}};Hn.addHandlerRender(Un),Mn.addHandlerRender(Nn),Mn.addHandlerUpdateServings(zn),Mn.addHandlerAddBookmark(Dn),Tn.addHandlerSearch(Cn),qn.addHandlerClick(Rn),In.addHandlerUpload(Wn);
//# sourceMappingURL=index.037aad08.js.map