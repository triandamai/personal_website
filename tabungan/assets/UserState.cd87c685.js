import{f as e,g as t,h as s,i as n,u as r}from"./index.32dd00ad.js";var a=function(e,t){return function(){for(var s=new Array(arguments.length),n=0;n<s.length;n++)s[n]=arguments[n];return e.apply(t,s)}},o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function c(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function d(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var s=0,n=e.length;s<n;s++)t.call(null,e[s],s,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}var p={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isPlainObject:d,isUndefined:c,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:f,isStream:function(e){return u(e)&&f(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function s(s,n){d(t[n])&&d(s)?t[n]=e(t[n],s):d(s)?t[n]=e({},s):i(s)?t[n]=s.slice():t[n]=s}for(var n=0,r=arguments.length;n<r;n++)l(arguments[n],s);return t},extend:function(e,t,s){return l(t,(function(t,n){e[n]=s&&"function"==typeof t?a(t,s):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function h(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var m=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(p.isURLSearchParams(t))n=t.toString();else{var r=[];p.forEach(t,(function(e,t){null!=e&&(p.isArray(e)?t+="[]":e=[e],p.forEach(e,(function(e){p.isDate(e)?e=e.toISOString():p.isObject(e)&&(e=JSON.stringify(e)),r.push(h(t)+"="+h(e))})))})),n=r.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function g(){this.handlers=[]}g.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},g.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},g.prototype.forEach=function(e){p.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var w=g,y=function(e,t,s){return p.forEach(s,(function(s){e=s(e,t)})),e},v=function(e){return!(!e||!e.__CANCEL__)},S=function(e,t){p.forEach(e,(function(s,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=s,delete e[n])}))},E=function(e,t,s,n,r){return function(e,t,s,n,r){return e.config=t,s&&(e.code=s),e.request=n,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,s,n,r)},b=p.isStandardBrowserEnv()?{write:function(e,t,s,n,r,a){var o=[];o.push(e+"="+encodeURIComponent(t)),p.isNumber(s)&&o.push("expires="+new Date(s).toGMTString()),p.isString(n)&&o.push("path="+n),p.isString(r)&&o.push("domain="+r),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},A=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],R=p.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");function n(e){var n=e;return t&&(s.setAttribute("href",n),n=s.href),s.setAttribute("href",n),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}return e=n(window.location.href),function(t){var s=p.isString(t)?n(t):t;return s.protocol===e.protocol&&s.host===e.host}}():function(){return!0},C=function(e){return new Promise((function(t,s){var n=e.data,r=e.headers;p.isFormData(n)&&delete r["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var o=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.Authorization="Basic "+btoa(o+":"+i)}var c,u,d=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(a.open(e.method.toUpperCase(),m(d,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n,r,o,i,c,u="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),c={},n?(p.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),r=p.trim(e.substr(0,i)).toLowerCase(),o=p.trim(e.substr(i+1)),r){if(c[r]&&A.indexOf(r)>=0)return;c[r]="set-cookie"===r?(c[r]?c[r]:[]).concat([o]):c[r]?c[r]+", "+o:o}})),c):c):null,d={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:u,config:e,request:a};!function(e,t,s){var n=s.config.validateStatus;s.status&&n&&!n(s.status)?t(E("Request failed with status code "+s.status,s.config,null,s.request,s)):e(s)}(t,s,d),a=null}},a.onabort=function(){a&&(s(E("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){s(E("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),s(E(t,e,"ECONNABORTED",a)),a=null},p.isStandardBrowserEnv()){var f=(e.withCredentials||R(d))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;f&&(r[e.xsrfHeaderName]=f)}if("setRequestHeader"in a&&p.forEach(r,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete r[t]:a.setRequestHeader(t,e)})),p.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(l){if("json"!==e.responseType)throw l}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),s(e),a=null)})),n||(n=null),a.send(n)}))},P={"Content-Type":"application/x-www-form-urlencoded"};function N(e,t){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var x,O={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(x=C),x),transformRequest:[function(e,t){return S(t,"Accept"),S(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(N(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)?(N(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};O.headers={common:{Accept:"application/json, text/plain, */*"}},p.forEach(["delete","get","head"],(function(e){O.headers[e]={}})),p.forEach(["post","put","patch"],(function(e){O.headers[e]=p.merge(P)}));var U=O;function j(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var B=function(e){return j(e),e.headers=e.headers||{},e.data=y(e.data,e.headers,e.transformRequest),e.headers=p.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),p.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||U.adapter)(e).then((function(t){return j(e),t.data=y(t.data,t.headers,e.transformResponse),t}),(function(t){return v(t)||(j(e),t&&t.response&&(t.response.data=y(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},T=function(e,t){t=t||{};var s={},n=["url","method","data"],r=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],o=["validateStatus"];function i(e,t){return p.isPlainObject(e)&&p.isPlainObject(t)?p.merge(e,t):p.isPlainObject(t)?p.merge({},t):p.isArray(t)?t.slice():t}function c(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(s[n]=i(void 0,e[n])):s[n]=i(e[n],t[n])}p.forEach(n,(function(e){p.isUndefined(t[e])||(s[e]=i(void 0,t[e]))})),p.forEach(r,c),p.forEach(a,(function(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(s[n]=i(void 0,e[n])):s[n]=i(void 0,t[n])})),p.forEach(o,(function(n){n in t?s[n]=i(e[n],t[n]):n in e&&(s[n]=i(void 0,e[n]))}));var u=n.concat(r).concat(a).concat(o),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return p.forEach(d,c),s};function L(e){this.defaults=e,this.interceptors={request:new w,response:new w}}L.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=T(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[B,void 0],s=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)s=s.then(t.shift(),t.shift());return s},L.prototype.getUri=function(e){return e=T(this.defaults,e),m(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},p.forEach(["delete","get","head","options"],(function(e){L.prototype[e]=function(t,s){return this.request(T(s||{},{method:e,url:t,data:(s||{}).data}))}})),p.forEach(["post","put","patch"],(function(e){L.prototype[e]=function(t,s,n){return this.request(T(n||{},{method:e,url:t,data:s}))}}));var I=L;function k(e){this.message=e}k.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},k.prototype.__CANCEL__=!0;var _=k;function q(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var s=this;e((function(e){s.reason||(s.reason=new _(e),t(s.reason))}))}q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},q.source=function(){var e;return{token:new q((function(t){e=t})),cancel:e}};var D=q;function F(e){var t=new I(e),s=a(I.prototype.request,t);return p.extend(s,I.prototype,t),p.extend(s,t),s}var $=F(U);$.Axios=I,$.create=function(e){return F(T($.defaults,e))},$.Cancel=_,$.CancelToken=D,$.isCancel=v,$.all=function(e){return Promise.all(e)},$.spread=function(e){return function(t){return e.apply(null,t)}},$.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var z=$,K=$;z.default=K;var H=z;var J=new class{constructor(){this.BASE_URL="http://localhost:3000",this.KEY_USER="zzaAbB",this.KEY_SAVING="sSaAvViInNgG"}get(e){return new Promise((t=>{H.get(`${this.BASE_URL}${e}`).then((e=>{200==e.data.statusCode||201==e.data.statusCode?t({success:!0,data:{success:!0,data:e.data.data},message:e.data.message}):t({success:!1,data:{success:!1,data:[]},message:e.data.message})})).catch((e=>{t({success:!1,data:{success:!1,data:[]},message:`${e}`})}))}))}post(e,t){return new Promise((s=>{H.post(`${this.BASE_URL}${e}`,t,{headers:{"Content-Type":"application/json"}}).then((e=>{200==e.data.statusCode||201==e.data.statusCode?s({success:!0,data:{success:!0,data:e.data.data},message:e.data.message}):s({success:!1,data:{success:!1,data:[]},message:e.data.message})})).catch((e=>{s({success:!1,data:{success:!1,data:[]},message:`${e}`})}))}))}login(e){return new Promise((t=>{this.post("/user/login",e).then((e=>{if(e.success){const s=e.data;this.saveUser(s.data[0]),t({success:!0,data:s.data})}else t({success:!1,data:[]})}))}))}register(e){return new Promise((t=>{this.post("/user/register",e).then((e=>{if(e.success){const s=e.data;this.saveUser(s.data[0]),t({success:!0,data:s.data})}else t(e)}))}))}getProfil(e){return new Promise((t=>{this.get(e).then((e=>{if(e.success){const s=e.data;s.data[0].saving&&this.saveSaving(s.data[0].saving.savingId),t({success:!0,data:s.data})}else t({success:!1,data:[]})}))}))}getMySaving(e){return new Promise((t=>{this.get(e).then((e=>{if(e.success){const s=e.data;t({success:!0,data:s.data})}else t({success:!1,data:[]})}))}))}createSaving(e,t){return new Promise((s=>{this.post(e,t).then((e=>{if(e.success){const t=e.data;s({success:!0,data:t.data})}else s({success:!1,data:[]})}))}))}getMyDeposit(e){return new Promise((t=>{this.get(e).then((e=>{if(e.success){const s=e.data;t({success:!0,data:s.data})}else t({success:!1,data:[]})}))}))}getDepositById(e){return new Promise((t=>{this.get(e).then((e=>{if(e.success){const s=e.data;t({success:!0,data:s.data})}else t({success:!1,data:[]})}))}))}createDeposit(e,t){return new Promise((s=>{this.post(e,t).then((e=>{if(e.success){const t=e.data;s({success:!0,data:t.data})}else s({success:!1,data:[]})}))}))}confirmationDeposit(e,t){return new Promise((()=>{}))}saveUser(e){window.sessionStorage.setItem(this.KEY_USER,JSON.stringify(e))}getUser(){const e=null==window.sessionStorage.getItem(this.KEY_USER)?"{}":window.sessionStorage.getItem(this.KEY_USER);return JSON.parse(e)}saveSaving(e){window.sessionStorage.setItem(this.KEY_SAVING,JSON.stringify(e))}getSaving(){const e=null==window.sessionStorage.getItem(this.KEY_SAVING)?"{}":window.sessionStorage.getItem(this.KEY_SAVING);return JSON.parse(e)}};const M=e({email:"",password:"",authSuccess:!1,isProgressing:!1,savings:{_id:"",savingId:"",userId:"",description:"",createdBy:"",createdAt:0,updatedAt:0},profil:{_id:"",uid:"",name:"",email:"",gender:"",password:"",createdAt:0,updatedAt:0},count:{savingId:"",total:0}});function V(){const e=r();return{userState:M,startAuthGoogle:function(){M.isProgressing=!0;const e=new t.auth.GoogleAuthProvider;s.signInWithRedirect(e)},startLoginBasic:async function(){M.isProgressing=!0;const e=r(),{success:t,data:s}=await J.login(JSON.stringify({email:M.email,password:M.password}));M.isProgressing=!1,M.authSuccess=t,t&&e.push({path:"/main/dashboard"})},getResultFromRedirect:async function(){M.isProgressing=!0;const e=r(),{user:t,additionalUserInfo:n}=await s.getRedirectResult();if(t)if(M.isProgressing=!1,null==n?void 0:n.isNewUser){const{success:s,data:n}=await J.register({email:t.email,name:t.displayName,gender:"laki-laki",uid:t.uid,password:t.uid});M.authSuccess=s,s&&e.push({path:"/main/dashboard"})}else{const{success:s,data:n}=await J.login({email:t.email,password:t.uid});M.authSuccess=s,s&&e.push({path:"/main/dashboard"})}else M.authSuccess=!1},getProfil:function(){n().then((async e=>{const{success:t,data:s}=await J.getProfil(`/user/profile/${e.uid}`);t&&(M.profil=s[0].user,M.savings=s[0].saving,s[0].count.length>0&&(M.count=s[0].count[0]))}))},signOut:function(){s.signOut().finally((()=>{e.push({path:"/login"})}))}}}export{J as a,V as u};
