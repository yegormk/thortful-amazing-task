import{c as Xn}from"./chunk-A3HUQFEX.js";import{$ as kt,$b as Nn,$c as Yn,A as pn,Ab as se,B as pt,C as yi,Ca as Pt,Cc as Bn,Da as et,Db as at,Dc as $n,Ec as Hn,F as gn,G as gt,Ga as Cn,Gc as Vn,H as xi,Ia as Rn,Ib as An,Ja as Ri,Jb as w,Ka as L,Kb as Ne,L as ie,La as P,Lb as En,M as tt,Mb as Tn,N as O,Na as it,Nb as On,P as Z,Q as R,Qa as Sn,Qb as dt,Qc as ze,R as fn,Rb as Ue,Sa as In,Sc as U,T as A,Ta as Mn,Tc as qn,U as vn,Ua as Dn,Uc as Gn,V as y,Vb as Ln,W as Oe,Wa as lt,Wb as je,Wc as Wn,X as l,Xa as Nt,Xc as Qn,Y as _n,Ya as Ut,Yc as Zn,Z as ft,Zb as Pn,Zc as Ft,_ as V,_c as Kn,a as m,aa as Ct,ab as Si,ac as Un,b as F,bb as b,bc as jn,bd as Jn,cb as S,cd as tr,d as Me,da as Rt,db as nt,e as cn,ea as ki,f as ln,fa as Ci,g as D,ga as bn,h as B,ha as q,ia as St,ib as re,j as $,k as N,ka as Le,kb as Y,l as g,la as wn,m as dn,ma as v,mb as jt,n as bi,nb as rt,o as mn,oa as Ot,ob as x,p as k,pa as G,pb as vt,q as hn,qa as yn,qb as ae,r as ct,ra as K,rb as I,s as wi,sa as xn,sb as M,sc as zt,t as un,tc as ce,u as De,vc as zn,w as Ae,wb as oe,wc as Fn,x as H,xa as kn,xb as Pe,y as Ee,ya as Lt,yb as W,z as Te,za as ne}from"./chunk-OMWI7UGZ.js";var u="primary",ke=Symbol("RouteTitle"),Ei=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Mt(e){return new Ei(e)}function Ii(e,n,t){for(let i=0;i<e.length;i++){let r=e[i],a=n[i];if(r[0]===":")t[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function sr(e,n,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||i.length<e.length))return null;let c={},d=e.slice(0,i.length);return Ii(i,d,c)?{consumed:d,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let a=i.slice(0,r),o=i.slice(r+1);if(a.length+o.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let s={};return!Ii(a,e.slice(0,a.length),s)||!Ii(o,e.slice(e.length-o.length),s)?null:{consumed:e,posParams:s}}function qe(e){return new Promise((n,t)=>{e.pipe(gt()).subscribe({next:i=>n(i),error:i=>t(i)})})}function ra(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!ot(e[t],n[t]))return!1;return!0}function ot(e,n){let t=e?Ti(e):void 0,i=n?Ti(n):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let a=0;a<t.length;a++)if(r=t[a],!cr(e[r],n[r]))return!1;return!0}function Ti(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function cr(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),i=[...n].sort();return t.every((r,a)=>i[a]===r)}else return e===n}function aa(e){return e.length>0?e[e.length-1]:null}function Et(e){return bi(e)?e:In(e)?N(Promise.resolve(e)):g(e)}function lr(e){return bi(e)?qe(e):Promise.resolve(e)}var oa={exact:mr,subset:hr},dr={exact:sa,subset:ca,ignored:()=>!0},Gi={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},pe={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Wi(e,n,t){let i=e instanceof T?e:n.parseUrl(e);return Ne(()=>Oi(n.lastSuccessfulNavigation()?.finalUrl??new T,i,m(m({},pe),t)))}function Oi(e,n,t){return oa[t.paths](e.root,n.root,t.matrixParams)&&dr[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function sa(e,n){return ot(e,n)}function mr(e,n,t){if(!It(e.segments,n.segments)||!$e(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!e.children[i]||!mr(e.children[i],n.children[i],t))return!1;return!0}function ca(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>cr(e[t],n[t]))}function hr(e,n,t){return ur(e,n,n.segments,t)}function ur(e,n,t,i){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!It(r,t)||n.hasChildren()||!$e(r,t,i))}else if(e.segments.length===t.length){if(!It(e.segments,t)||!$e(e.segments,t,i))return!1;for(let r in n.children)if(!e.children[r]||!hr(e.children[r],n.children[r],i))return!1;return!0}else{let r=t.slice(0,e.segments.length),a=t.slice(e.segments.length);return!It(e.segments,r)||!$e(e.segments,r,i)||!e.children[u]?!1:ur(e.children[u],n,a,i)}}function $e(e,n,t){return n.every((i,r)=>dr[t](e[r].parameters,i.parameters))}var T=class{root;queryParams;fragment;_queryParamMap;constructor(n=new f([],{}),t={},i=null){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Mt(this.queryParams),this._queryParamMap}toString(){return ma.serialize(this)}},f=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return He(this)}},_t=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=Mt(this.parameters),this._parameterMap}toString(){return gr(this)}};function la(e,n){return It(e,n)&&e.every((t,i)=>ot(t.parameters,n[i].parameters))}function It(e,n){return e.length!==n.length?!1:e.every((t,i)=>t.path===n[i].path)}function da(e,n){let t=[];return Object.entries(e.children).forEach(([i,r])=>{i===u&&(t=t.concat(n(r,i)))}),Object.entries(e.children).forEach(([i,r])=>{i!==u&&(t=t.concat(n(r,i)))}),t}var Zt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:()=>new bt,providedIn:"root"})}return e})(),bt=class{parse(n){let t=new Pi(n);return new T(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${le(n.root,!0)}`,i=pa(n.queryParams),r=typeof n.fragment=="string"?`#${ha(n.fragment)}`:"";return`${t}${i}${r}`}},ma=new bt;function He(e){return e.segments.map(n=>gr(n)).join("/")}function le(e,n){if(!e.hasChildren())return He(e);if(n){let t=e.children[u]?le(e.children[u],!1):"",i=[];return Object.entries(e.children).forEach(([r,a])=>{r!==u&&i.push(`${r}:${le(a,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=da(e,(i,r)=>r===u?[le(e.children[u],!1)]:[`${r}:${le(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[u]!=null?`${He(e)}/${t[0]}`:`${He(e)}/(${t.join("//")})`}}function pr(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Fe(e){return pr(e).replace(/%3B/gi,";")}function ha(e){return encodeURI(e)}function Li(e){return pr(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ve(e){return decodeURIComponent(e)}function er(e){return Ve(e.replace(/\+/g,"%20"))}function gr(e){return`${Li(e.path)}${ua(e.parameters)}`}function ua(e){return Object.entries(e).map(([n,t])=>`;${Li(n)}=${Li(t)}`).join("")}function pa(e){let n=Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Fe(t)}=${Fe(r)}`).join("&"):`${Fe(t)}=${Fe(i)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var ga=/^[^\/()?;#]+/;function Mi(e){let n=e.match(ga);return n?n[0]:""}var fa=/^[^\/()?;=#]+/;function va(e){let n=e.match(fa);return n?n[0]:""}var _a=/^[^=?&#]+/;function ba(e){let n=e.match(_a);return n?n[0]:""}var wa=/^[^&#]+/;function ya(e){let n=e.match(wa);return n?n[0]:""}var Pi=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new f([],{}):new f([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new R(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(i).length>0)&&(r[u]=new f(t,i)),r}parseSegment(){let n=Mi(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new R(4009,!1);return this.capture(n),new _t(Ve(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=va(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Mi(this.remaining);r&&(i=r,this.capture(i))}n[Ve(t)]=Ve(i)}parseQueryParam(n){let t=ba(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=ya(this.remaining);o&&(i=o,this.capture(i))}let r=er(t),a=er(i);if(n.hasOwnProperty(r)){let o=n[r];Array.isArray(o)||(o=[o],n[r]=o),o.push(a)}else n[r]=a}parseParens(n,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Mi(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new R(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):n&&(o=u);let s=this.parseChildren(t+1);i[o??u]=Object.keys(s).length===1&&s[u]?s[u]:new f([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new R(4011,!1)}};function fr(e){return e.segments.length>0?new f([],{[u]:e}):e}function vr(e){let n={};for(let[i,r]of Object.entries(e.children)){let a=vr(r);if(i===u&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))n[o]=s;else(a.segments.length>0||a.hasChildren())&&(n[i]=a)}let t=new f(e.segments,n);return xa(t)}function xa(e){if(e.numberOfChildren===1&&e.children[u]){let n=e.children[u];return new f(e.segments.concat(n.segments),n.children)}return e}function wt(e){return e instanceof T}function _r(e,n,t=null,i=null,r=new bt){let a=br(e);return wr(a,n,t,i,r)}function br(e){let n;function t(a){let o={};for(let c of a.children){let d=t(c);o[c.outlet]=d}let s=new f(a.url,o);return a===e&&(n=s),s}let i=t(e.root),r=fr(i);return n??r}function wr(e,n,t,i,r){let a=e;for(;a.parent;)a=a.parent;if(n.length===0)return Di(a,a,a,t,i,r);let o=ka(n);if(o.toRoot())return Di(a,a,new f([],{}),t,i,r);let s=Ca(o,a,e),c=s.processChildren?me(s.segmentGroup,s.index,o.commands):xr(s.segmentGroup,s.index,o.commands);return Di(a,s.segmentGroup,c,t,i,r)}function Ge(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function ge(e){return typeof e=="object"&&e!=null&&e.outlets}function ir(e,n,t){e||="\u0275";let i=new T;return i.queryParams={[e]:n},t.parse(t.serialize(i)).queryParams[e]}function Di(e,n,t,i,r,a){let o={};for(let[d,h]of Object.entries(i??{}))o[d]=Array.isArray(h)?h.map(p=>ir(d,p,a)):ir(d,h,a);let s;e===n?s=t:s=yr(e,n,t);let c=fr(vr(s));return new T(c,o,r)}function yr(e,n,t){let i={};return Object.entries(e.children).forEach(([r,a])=>{a===n?i[r]=t:i[r]=yr(a,n,t)}),new f(e.segments,i)}var We=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&Ge(i[0]))throw new R(4003,!1);let r=i.find(ge);if(r&&r!==aa(i))throw new R(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ka(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new We(!0,0,e);let n=0,t=!1,i=e.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?t=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new We(t,n,i)}var $t=class{segmentGroup;processChildren;index;constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}};function Ca(e,n,t){if(e.isAbsolute)return new $t(n,!0,0);if(!t)return new $t(n,!1,NaN);if(t.parent===null)return new $t(t,!0,0);let i=Ge(e.commands[0])?0:1,r=t.segments.length-1+i;return Ra(t,r,e.numberOfDoubleDots)}function Ra(e,n,t){let i=e,r=n,a=t;for(;a>r;){if(a-=r,i=i.parent,!i)throw new R(4005,!1);r=i.segments.length}return new $t(i,!1,r-a)}function Sa(e){return ge(e[0])?e[0].outlets:{[u]:e}}function xr(e,n,t){if(e??=new f([],{}),e.segments.length===0&&e.hasChildren())return me(e,n,t);let i=Ia(e,n,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let a=new f(e.segments.slice(0,i.pathIndex),{});return a.children[u]=new f(e.segments.slice(i.pathIndex),e.children),me(a,0,r)}else return i.match&&r.length===0?new f(e.segments,{}):i.match&&!e.hasChildren()?Ni(e,n,t):i.match?me(e,0,r):Ni(e,n,t)}function me(e,n,t){if(t.length===0)return new f(e.segments,{});{let i=Sa(t),r={};if(Object.keys(i).some(a=>a!==u)&&e.children[u]&&e.numberOfChildren===1&&e.children[u].segments.length===0){let a=me(e.children[u],n,t);return new f(e.segments,a.children)}return Object.entries(i).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=xr(e.children[a],n,o))}),Object.entries(e.children).forEach(([a,o])=>{i[a]===void 0&&(r[a]=o)}),new f(e.segments,r)}}function Ia(e,n,t){let i=0,r=n,a={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(i>=t.length)return a;let o=e.segments[r],s=t[i];if(ge(s))break;let c=`${s}`,d=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!rr(c,d,o))return a;i+=2}else{if(!rr(c,{},o))return a;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ni(e,n,t){let i=e.segments.slice(0,n),r=0;for(;r<t.length;){let a=t[r];if(ge(a)){let c=Ma(a.outlets);return new f(i,c)}if(r===0&&Ge(t[0])){let c=e.segments[n];i.push(new _t(c.path,nr(t[0]))),r++;continue}let o=ge(a)?a.outlets[u]:`${a}`,s=r<t.length-1?t[r+1]:null;o&&s&&Ge(s)?(i.push(new _t(o,nr(s))),r+=2):(i.push(new _t(o,{})),r++)}return new f(i,{})}function Ma(e){let n={};return Object.entries(e).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[t]=Ni(new f([],{}),0,i))}),n}function nr(e){let n={};return Object.entries(e).forEach(([t,i])=>n[t]=`${i}`),n}function rr(e,n,t){return e==t.path&&ot(n,t.parameters)}var he="imperative",C=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(C||{}),z=class{id;url;constructor(n,t){this.id=n,this.url=t}},Dt=class extends z{type=C.NavigationStart;navigationTrigger;restoredState;constructor(n,t,i="imperative",r=null){super(n,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},J=class extends z{urlAfterRedirects;type=C.NavigationEnd;constructor(n,t,i){super(n,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},E=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(E||{}),fe=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(fe||{}),Q=class extends z{reason;code;type=C.NavigationCancel;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function kr(e){return e instanceof Q&&(e.code===E.Redirect||e.code===E.SupersededByNewNavigation)}var ht=class extends z{reason;code;type=C.NavigationSkipped;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}},At=class extends z{error;target;type=C.NavigationError;constructor(n,t,i,r){super(n,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ve=class extends z{urlAfterRedirects;state;type=C.RoutesRecognized;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qe=class extends z{urlAfterRedirects;state;type=C.GuardsCheckStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ze=class extends z{urlAfterRedirects;state;shouldActivate;type=C.GuardsCheckEnd;constructor(n,t,i,r,a){super(n,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ke=class extends z{urlAfterRedirects;state;type=C.ResolveStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ye=class extends z{urlAfterRedirects;state;type=C.ResolveEnd;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Xe=class{route;type=C.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Je=class{route;type=C.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ti=class{snapshot;type=C.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ei=class{snapshot;type=C.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ii=class{snapshot;type=C.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ni=class{snapshot;type=C.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Vt=class{},_e=class{},qt=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function Da(e){return!(e instanceof Vt)&&!(e instanceof qt)&&!(e instanceof _e)}var ri=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Kt(this.rootInjector)}},Kt=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new ri(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||e)(Oe(ft))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ai=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=Ui(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){let t=Ui(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=ji(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return ji(n,this._root).map(t=>t.value)}};function Ui(e,n){if(e===n.value)return n;for(let t of n.children){let i=Ui(e,t);if(i)return i}return null}function ji(e,n){if(e===n.value)return[n];for(let t of n.children){let i=ji(e,t);if(i.length)return i.unshift(n),i}return[]}var j=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function Bt(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var be=class extends ai{snapshot;constructor(n,t){super(n),this.snapshot=t,Zi(this,n)}toString(){return this.snapshot.toString()}};function Cr(e,n){let t=Aa(e,n),i=new B([new _t("",{})]),r=new B({}),a=new B({}),o=new B({}),s=new B(""),c=new ut(i,r,o,s,a,u,e,t.root);return c.snapshot=t.root,new be(new j(c,[]),t)}function Aa(e,n){let t={},i={},r={},o=new Gt([],t,r,"",i,u,e,null,{},n);return new we("",new j(o,[]))}var ut=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,i,r,a,o,s,c){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(k(d=>d[ke]))??g(void 0),this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(k(n=>Mt(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(k(n=>Mt(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Qi(e,n,t="emptyOnly"){let i,{routeConfig:r}=e;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:m(m({},n.params),e.params),data:m(m({},n.data),e.data),resolve:m(m(m(m({},e.data),n.data),r?.data),e._resolvedData)}:i={params:m({},e.params),data:m({},e.data),resolve:m(m({},e.data),e._resolvedData??{})},r&&Sr(r)&&(i.resolve[ke]=r.title),i}var Gt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[ke]}constructor(n,t,i,r,a,o,s,c,d,h){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Mt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Mt(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},we=class extends ai{url;constructor(n,t){super(t),this.url=n,Zi(this,t)}toString(){return Rr(this._root)}};function Zi(e,n){n.value._routerState=e,n.children.forEach(t=>Zi(e,t))}function Rr(e){let n=e.children.length>0?` { ${e.children.map(Rr).join(", ")} } `:"";return`${e.value}${n}`}function Ai(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,ot(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),ot(n.params,t.params)||e.paramsSubject.next(t.params),ra(n.url,t.url)||e.urlSubject.next(t.url),ot(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function zi(e,n){let t=ot(e.params,n.params)&&la(e.url,n.url),i=!e.parent!=!n.parent;return t&&!i&&(!e.parent||zi(e.parent,n.parent))}function Sr(e){return typeof e.title=="string"||e.title===null}var Ir=new y(""),Ce=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=u;activateEvents=new q;deactivateEvents=new q;attachEvents=new q;detachEvents=new q;routerOutletData=On();parentContexts=l(Kt);location=l(Cn);changeDetector=l(dt);inputBinder=l(di,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new R(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new R(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new R(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new R(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new Fi(t,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ot]})}return e})(),Fi=class{route;childContexts;parent;outletData;constructor(n,t,i,r){this.route=n,this.childContexts=t,this.parent=i,this.outletData=r}get(n,t){return n===ut?this.route:n===Kt?this.childContexts:n===Ir?this.outletData:this.parent.get(n,t)}},di=new y("");var Ki=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&nt(0,"router-outlet")},dependencies:[Ce],encapsulation:2})}return e})();function Yi(e){let n=e.children&&e.children.map(Yi),t=n?F(m({},e),{children:n}):m({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==u&&(t.component=Ki),t}function Ea(e,n,t){let i=ye(e,n._root,t?t._root:void 0);return new be(i,n)}function ye(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=n.value;let r=Ta(e,n,t);return new j(i,r)}else{if(e.shouldAttach(n.value)){let a=e.retrieve(n.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=n.value,o.children=n.children.map(s=>ye(e,s)),o}}let i=Oa(n.value),r=n.children.map(a=>ye(e,a));return new j(i,r)}}function Ta(e,n,t){return n.children.map(i=>{for(let r of t.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return ye(e,i,r);return ye(e,i)})}function Oa(e){return new ut(new B(e.url),new B(e.params),new B(e.queryParams),new B(e.fragment),new B(e.data),e.outlet,e.component,e)}var Wt=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},Mr="ngNavigationCancelingError";function oi(e,n){let{redirectTo:t,navigationBehaviorOptions:i}=wt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=Dr(!1,E.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Dr(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[Mr]=!0,t.cancellationCode=n,t}function La(e){return Ar(e)&&wt(e.url)}function Ar(e){return!!e&&e[Mr]}var Bi=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,i,r,a){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=a}activate(n){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),Ai(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){let r=Bt(t);n.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],i),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(r===a)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(n,t,o.children)}else this.deactivateChildRoutes(n,t,i);else a&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=Bt(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:s})}}deactivateRouteAndOutlet(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=Bt(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,t,i){let r=Bt(t);n.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],i),this.forwardEvent(new ni(a.value.snapshot))}),n.children.length&&this.forwardEvent(new ei(n.value.snapshot))}activateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(Ai(r),r===a)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,o.children)}else this.activateChildRoutes(n,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),Ai(s.route.value),this.activateChildRoutes(n,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(n,null,o.children)}else this.activateChildRoutes(n,null,i)}},si=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Ht=class{component;route;constructor(n,t){this.component=n,this.route=t}};function Pa(e,n,t){let i=e._root,r=n?n._root:null;return de(i,r,t,[i.value])}function Na(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function Yt(e,n){let t=Symbol(),i=n.get(e,t);return i===t?typeof e=="function"&&!vn(e)?e:n.get(e):i}function de(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=Bt(n);return e.children.forEach(o=>{Ua(o,a[o.value.outlet],t,i.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>ue(s,t.getContext(o),r)),r}function Ua(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=e.value,o=n?n.value:null,s=t?t.getContext(e.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=ja(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new si(i)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?de(e,n,s?s.children:null,i,r):de(e,n,t,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Ht(s.outlet.component,o))}else o&&ue(n,s,r),r.canActivateChecks.push(new si(i)),a.component?de(e,null,s?s.children:null,i,r):de(e,null,t,i,r);return r}function ja(e,n,t){if(typeof t=="function")return V(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!It(e.url,n.url);case"pathParamsOrQueryParamsChange":return!It(e.url,n.url)||!ot(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!zi(e,n)||!ot(e.queryParams,n.queryParams);default:return!zi(e,n)}}function ue(e,n,t){let i=Bt(e),r=e.value;Object.entries(i).forEach(([a,o])=>{r.component?n?ue(o,n.children.getContext(a),t):ue(o,null,t):ue(o,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new Ht(n.outlet.component,r)):t.canDeactivateChecks.push(new Ht(null,r)):t.canDeactivateChecks.push(new Ht(null,r))}function Re(e){return typeof e=="function"}function za(e){return typeof e=="boolean"}function Fa(e){return e&&Re(e.canLoad)}function Ba(e){return e&&Re(e.canActivate)}function $a(e){return e&&Re(e.canActivateChild)}function Ha(e){return e&&Re(e.canDeactivate)}function Va(e){return e&&Re(e.canMatch)}function Er(e){return e instanceof mn||e?.name==="EmptyError"}var Be=Symbol("INITIAL_VALUE");function Qt(){return tt(e=>hn(e.map(n=>n.pipe(pt(1),ie(Be)))).pipe(k(n=>{for(let t of n)if(t!==!0){if(t===Be)return Be;if(t===!1||qa(t))return t}return!0}),H(n=>n!==Be),pt(1)))}function qa(e){return wt(e)||e instanceof Wt}function Tr(e){return e.aborted?g(void 0).pipe(pt(1)):new ln(n=>{let t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function Or(e){return O(Tr(e))}function Ga(e){return ct(n=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:a}}=n;return a.length===0&&r.length===0?g(F(m({},n),{guardsResult:!0})):Wa(a,t,i).pipe(ct(o=>o&&za(o)?Qa(t,r,e):g(o)),k(o=>F(m({},n),{guardsResult:o})))})}function Wa(e,n,t){return N(e).pipe(ct(i=>Ja(i.component,i.route,t,n)),gt(i=>i!==!0,!0))}function Qa(e,n,t){return N(n).pipe(Te(i=>un(Ka(i.route.parent,t),Za(i.route,t),Xa(e,i.path),Ya(e,i.route))),gt(i=>i!==!0,!0))}function Za(e,n){return e!==null&&n&&n(new ii(e)),g(!0)}function Ka(e,n){return e!==null&&n&&n(new ti(e)),g(!0)}function Ya(e,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return g(!0);let i=t.map(r=>De(()=>{let a=n._environmentInjector,o=Yt(r,a),s=Ba(o)?o.canActivate(n,e):V(a,()=>o(n,e));return Et(s).pipe(gt())}));return g(i).pipe(Qt())}function Xa(e,n){let t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(a=>Na(a)).filter(a=>a!==null).map(a=>De(()=>{let o=a.guards.map(s=>{let c=a.node._environmentInjector,d=Yt(s,c),h=$a(d)?d.canActivateChild(t,e):V(c,()=>d(t,e));return Et(h).pipe(gt())});return g(o).pipe(Qt())}));return g(r).pipe(Qt())}function Ja(e,n,t,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let a=r.map(o=>{let s=n._environmentInjector,c=Yt(o,s),d=Ha(c)?c.canDeactivate(e,n,t,i):V(s,()=>c(e,n,t,i));return Et(d).pipe(gt())});return g(a).pipe(Qt())}function to(e,n,t,i,r){let a=n.canLoad;if(a===void 0||a.length===0)return g(!0);let o=a.map(s=>{let c=Yt(s,e),d=Fa(c)?c.canLoad(n,t):V(e,()=>c(n,t)),h=Et(d);return r?h.pipe(Or(r)):h});return g(o).pipe(Qt(),Lr(i))}function Lr(e){return cn(Z(n=>{if(typeof n!="boolean")throw oi(e,n)}),k(n=>n===!0))}function eo(e,n,t,i,r,a){let o=n.canMatch;if(!o||o.length===0)return g(!0);let s=o.map(c=>{let d=Yt(c,e),h=Va(d)?d.canMatch(n,t,r):V(e,()=>d(n,t,r));return Et(h).pipe(Or(a))});return g(s).pipe(Qt(),Lr(i))}var mt=class e extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,e.prototype)}},xe=class e extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,e.prototype)}};function io(e){throw new R(4e3,!1)}function no(e){throw Dr(!1,E.GuardRejected)}var $i=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[u])throw io(`${n.redirectTo}`);r=r.children[u]}}async applyRedirectCommands(n,t,i,r,a){let o=await ro(t,r,a);if(o instanceof T)throw new xe(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),n,i);if(o[0]==="/")throw new xe(s);return s}applyRedirectCreateUrlTree(n,t,i,r){let a=this.createSegmentGroup(n,t.root,i,r);return new T(a,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let i={};return Object.entries(n).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[r]=t[s]}else i[r]=a}),i}createSegmentGroup(n,t,i,r){let a=this.createSegments(n,t.segments,i,r),o={};return Object.entries(t.children).forEach(([s,c])=>{o[s]=this.createSegmentGroup(n,c,i,r)}),new f(a,o)}createSegments(n,t,i,r){return t.map(a=>a.path[0]===":"?this.findPosParam(n,a,r):this.findOrReturn(a,i))}findPosParam(n,t,i){let r=i[t.path.substring(1)];if(!r)throw new R(4001,!1);return r}findOrReturn(n,t){let i=0;for(let r of t){if(r.path===n.path)return t.splice(i),r;i++}return n}};function ro(e,n,t){if(typeof e=="string")return Promise.resolve(e);let i=e;return qe(Et(V(t,()=>i(n))))}function ao(e,n){return e.providers&&!e._injector&&(e._injector=Ri(e.providers,n,`Route: ${e.path}`)),e._injector??n}function X(e){return e.outlet||u}function oo(e,n){let t=e.filter(i=>X(i)===n);return t.push(...e.filter(i=>X(i)!==n)),t}var Hi={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Pr(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function so(e,n,t,i,r,a,o){let s=Nr(e,n,t);if(!s.matched)return g(s);let c=Pr(a(s));return i=ao(n,i),eo(i,n,t,r,c,o).pipe(k(d=>d===!0?s:m({},Hi)))}function Nr(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?m({},Hi):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(n.matcher||sr)(t,e,n);if(!r)return m({},Hi);let a={};Object.entries(r.posParams??{}).forEach(([s,c])=>{a[s]=c.path});let o=r.consumed.length>0?m(m({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function ar(e,n,t,i,r){return t.length>0&&mo(e,t,i,r)?{segmentGroup:new f(n,lo(i,new f(t,e.children))),slicedSegments:[]}:t.length===0&&ho(e,t,i)?{segmentGroup:new f(e.segments,co(e,t,i,e.children)),slicedSegments:t}:{segmentGroup:new f(e.segments,e.children),slicedSegments:t}}function co(e,n,t,i){let r={};for(let a of t)if(mi(e,n,a)&&!i[X(a)]){let o=new f([],{});r[X(a)]=o}return m(m({},i),r)}function lo(e,n){let t={};t[u]=n;for(let i of e)if(i.path===""&&X(i)!==u){let r=new f([],{});t[X(i)]=r}return t}function mo(e,n,t,i){return t.some(r=>!mi(e,n,r)||!(X(r)!==u)?!1:!(i!==void 0&&X(r)===i))}function ho(e,n,t){return t.some(i=>mi(e,n,i))}function mi(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function uo(e,n,t){return n.length===0&&!e.children[t]}var Vi=class{};async function po(e,n,t,i,r,a,o="emptyOnly",s){return new qi(e,n,t,i,r,o,a,s).recognize()}var go=31,qi=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,i,r,a,o,s,c){this.injector=n,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new $i(this.urlSerializer,this.urlTree)}noMatchError(n){return new R(4002,`'${n.segmentGroup}'`)}async recognize(){let n=ar(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(n),r=new j(i,t),a=new we("",r),o=_r(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(n){let t=new Gt([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),u,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,u,t),rootSnapshot:t}}catch(i){if(i instanceof xe)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof mt?this.noMatchError(i):i}}async processSegmentGroup(n,t,i,r,a){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,t,i,a);let o=await this.processSegment(n,t,i,i.segments,r,!0,a);return o instanceof j?[o]:[]}async processChildren(n,t,i,r){let a=[];for(let c of Object.keys(i.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let d=i.children[c],h=oo(t,c),p=await this.processSegmentGroup(n,h,d,c,r);o.push(...p)}let s=Ur(o);return fo(s),s}async processSegment(n,t,i,r,a,o,s){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??n,t,c,i,r,a,o,s)}catch(d){if(d instanceof mt||Er(d))continue;throw d}if(uo(i,r,a))return new Vi;throw new mt(i)}async processSegmentAgainstRoute(n,t,i,r,a,o,s,c){if(X(i)!==o&&(o===u||!mi(r,a,i)))throw new mt(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,a,o,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,i,a,o,c);throw new mt(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,i,r,a,o,s){let{matched:c,parameters:d,consumedSegments:h,positionalParamSegments:p,remainingSegments:_}=Nr(t,r,a);if(!c)throw new mt(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>go&&(this.allowRedirects=!1));let yt=this.createSnapshot(n,r,a,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let st=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,Pr(yt),n),xt=await this.applyRedirects.lineralizeSegments(r,st);return this.processSegment(n,i,t,xt.concat(_),o,!1,s)}createSnapshot(n,t,i,r,a){let o=new Gt(i,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,_o(t),X(t),t.component??t._loadedComponent??null,t,bo(t),n),s=Qi(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(n,t,i,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Ie=>this.createSnapshot(n,i,Ie.consumedSegments,Ie.parameters,o),c=await qe(so(t,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new mt(t);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),h=i._loadedInjector??n,{parameters:p,consumedSegments:_,remainingSegments:yt}=c,st=this.createSnapshot(n,i,_,p,o),{segmentGroup:xt,slicedSegments:te}=ar(t,_,yt,d,a);if(te.length===0&&xt.hasChildren()){let Ie=await this.processChildren(h,d,xt,st);return new j(st,Ie)}if(d.length===0&&te.length===0)return new j(st,[]);let _i=X(i)===a,ee=await this.processSegment(h,d,xt,te,_i?u:a,!0,st);return new j(st,ee instanceof j?[ee]:[])}async getChildConfig(n,t,i){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let a=t._loadedNgModuleFactory;return a&&!t._loadedInjector&&(t._loadedInjector=a.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await qe(to(n,t,i,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}throw no(t)}return{routes:[],injector:n}}};function fo(e){e.sort((n,t)=>n.value.outlet===u?-1:t.value.outlet===u?1:n.value.outlet.localeCompare(t.value.outlet))}function vo(e){let n=e.value.routeConfig;return n&&n.path===""}function Ur(e){let n=[],t=new Set;for(let i of e){if(!vo(i)){n.push(i);continue}let r=n.find(a=>i.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):n.push(i)}for(let i of t){let r=Ur(i.children);n.push(new j(i.value,r))}return n.filter(i=>!t.has(i))}function _o(e){return e.data||{}}function bo(e){return e.resolve||{}}function wo(e,n,t,i,r,a,o){return ct(async s=>{let{state:c,tree:d}=await po(e,n,t,i,s.extractedUrl,r,a,o);return F(m({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function yo(e){return ct(n=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=n;if(!i.length)return g(n);let r=new Set(i.map(s=>s.route)),a=new Set;for(let s of r)if(!a.has(s))for(let c of jr(s))a.add(c);let o=0;return N(a).pipe(Te(s=>r.has(s)?xo(s,t,e):(s.data=Qi(s,s.parent,e).resolve,g(void 0))),Z(()=>o++),xi(1),ct(s=>o===a.size?g(n):$))})}function jr(e){let n=e.children.map(t=>jr(t)).flat();return[e,...n]}function xo(e,n,t){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!Sr(i)&&(r[ke]=i.title),De(()=>(e.data=Qi(e,e.parent,t).resolve,ko(r,e,n).pipe(k(a=>(e._resolvedData=a,e.data=m(m({},e.data),a),null)))))}function ko(e,n,t){let i=Ti(e);if(i.length===0)return g({});let r={};return N(i).pipe(ct(a=>Co(e[a],n,t).pipe(gt(),Z(o=>{if(o instanceof Wt)throw oi(new bt,o);r[a]=o}))),xi(1),k(()=>r),Ee(a=>Er(a)?$:dn(a)))}function Co(e,n,t){let i=n._environmentInjector,r=Yt(e,i),a=r.resolve?r.resolve(n,t):V(i,()=>r(n,t));return Et(a)}function or(e){return tt(n=>{let t=e(n);return t?N(t).pipe(k(()=>n)):g(n)})}var Xi=(()=>{class e{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(a=>a.outlet===u);return i}getResolvedTitleForRoute(t){return t.data[ke]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:()=>l(zr),providedIn:"root"})}return e})(),zr=(()=>{class e extends Xi{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||e)(Oe(jn))};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Xt=new y("",{factory:()=>({})}),Se=new y(""),Fr=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(An);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await lr(V(t,()=>i.loadComponent())),o=await Hr($r(a));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await Br(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();async function Br(e,n,t,i){let r=await lr(V(t,()=>e.loadChildren())),a=await Hr($r(r)),o;a instanceof Rn||Array.isArray(a)?o=a:o=await n.compileModuleAsync(a),i&&i(e);let s,c,d=!1,h;return Array.isArray(o)?(c=o,d=!0):(s=o.create(t).injector,h=o,c=s.get(Se,[],{optional:!0,self:!0}).flat()),{routes:c.map(Yi),injector:s,factory:h}}function Ro(e){return e&&typeof e=="object"&&"default"in e}function $r(e){return Ro(e)?e.default:e}async function Hr(e){return e}var hi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:()=>l(So),providedIn:"root"})}return e})(),So=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Vr=new y("");var Io=()=>{},qr=new y(""),Gr=(()=>{class e{currentNavigation=v(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=v(null);events=new D;transitionAbortWithErrorSubject=new D;configLoader=l(Fr);environmentInjector=l(ft);destroyRef=l(Ci);urlSerializer=l(Zt);rootContexts=l(Kt);location=l(je);inputBindingEnabled=l(di,{optional:!0})!==null;titleStrategy=l(Xi);options=l(Xt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(hi);createViewTransition=l(Vr,{optional:!0});navigationErrorHandler=l(qr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Xe(r)),i=r=>this.events.next(new Je(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;w(()=>{this.transitions?.next(F(m({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new B(null),this.transitions.pipe(H(i=>i!==null),tt(i=>{let r=!1,a=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return g(i).pipe(tt(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",E.SupersededByNewNavigation),$;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?F(m({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.rawUrl),"",fe.IgnoredSameUrlNavigation)),s.resolve(!1),$;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(tt(p=>(this.events.next(new Dt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?$:Promise.resolve(p))),wo(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Z(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=p.urlAfterRedirects,_)),this.events.next(new _e)}),tt(p=>N(i.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(k(()=>p))),Z(()=>{let p=new ve(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:_,source:yt,restoredState:st,extras:xt}=s,te=new Dt(p,this.urlSerializer.serialize(_),yt,st);this.events.next(te);let _i=Cr(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=F(m({},s),{targetSnapshot:_i,urlAfterRedirects:_,extras:F(m({},xt),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ee=>(ee.finalUrl=_,ee)),g(i)}else return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),"",fe.IgnoredByUrlHandlingStrategy)),s.resolve(!1),$}),k(s=>{let c=new Qe(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=F(m({},s),{guards:Pa(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),Ga(s=>this.events.next(s)),tt(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw oi(this.urlSerializer,s.guardsResult);let c=new Ze(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!o())return $;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",E.GuardRejected),$;if(s.guards.canActivateChecks.length===0)return g(s);let d=new Ke(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!o())return $;let h=!1;return g(s).pipe(yo(this.paramsInheritanceStrategy),Z({next:()=>{h=!0;let p=new Ye(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",E.NoDataFromResolver)}}))}),or(s=>{let c=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let _=h._environmentInjector;p.push(this.configLoader.loadComponent(_,h.routeConfig).then(yt=>{h.component=yt}))}for(let _ of h.children)p.push(...c(_));return p},d=c(s.targetSnapshot.root);return d.length===0?g(s):N(Promise.all(d).then(()=>s))}),or(()=>this.afterPreactivation()),tt(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?N(d).pipe(k(()=>i)):g(i)}),pt(1),tt(s=>{let c=Ea(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=F(m({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new Vt);let d=i.beforeActivateHandler.deferredHandle;return d?N(d.then(()=>s)):g(s)}),Z(s=>{new Bi(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=Io,c)),this.lastSuccessfulNavigation.set(w(this.currentNavigation)),this.events.next(new J(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),O(Tr(a.signal).pipe(H(()=>!r&&!i.targetRouterState),Z(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",E.Aborted)}))),Z({complete:()=>{r=!0}}),O(this.transitionAbortWithErrorSubject.pipe(Z(s=>{throw s}))),gn(()=>{a.abort(),r||this.cancelNavigationTransition(i,"",E.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ee(s=>{if(r=!0,this.destroyed)return i.resolve(!1),$;if(Ar(s))this.events.next(new Q(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),La(s)?this.events.next(new qt(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new At(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=V(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof Wt){let{message:h,cancellationCode:p}=oi(this.urlSerializer,d);this.events.next(new Q(i.id,this.urlSerializer.serialize(i.extractedUrl),h,p)),this.events.next(new qt(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return $}))}))}cancelNavigationTransition(t,i,r){let a=new Q(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(a),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=w(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Mo(e){return e!==he}var Wr=new y("");var Qr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:()=>l(Do),providedIn:"root"})}return e})(),ci=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},Do=(()=>{class e extends ci{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ui=(()=>{class e{urlSerializer=l(Zt);options=l(Xt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(je);urlHandlingStrategy=l(hi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new T;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let a=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??a;return o instanceof T?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=Cr(null,l(ft));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:()=>l(Ao),providedIn:"root"})}return e})(),Ao=(()=>{class e extends ui{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Dt?this.updateStateMemento():t instanceof ht?this.commitTransition(i):t instanceof ve?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Vt?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof Q&&!kr(t)?this.restoreHistory(i):t instanceof At?this.restoreHistory(i,!0):t instanceof J&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:i,id:r}){let{replaceUrl:a,state:o}=i;if(this.location.isCurrentPathEqualTo(t)||a){let s=this.browserPageId,c=m(m({},o),this.generateNgRouterState(r,s));this.location.replaceState(t,"",c)}else{let s=m(m({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===t.finalUrl&&a===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ji(e,n){e.events.pipe(H(t=>t instanceof J||t instanceof Q||t instanceof At||t instanceof ht),k(t=>t instanceof J||t instanceof ht?0:(t instanceof Q?t.code===E.Redirect||t.code===E.SupersededByNewNavigation:!1)?2:1),H(t=>t!==2),pt(1)).subscribe(()=>{n()})}var Tt=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Sn);stateManager=l(ui);options=l(Xt,{optional:!0})||{};pendingTasks=l(bn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Gr);urlSerializer=l(Zt);location=l(je);urlHandlingStrategy=l(hi);injector=l(ft);_events=new D;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Qr);injectorCleanup=l(Wr,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Se,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(di,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Me;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,a=w(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof Q&&i.code!==E.Redirect&&i.code!==E.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof J)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof qt){let o=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Mo(r.source)},o);this.scheduleNavigation(s,he,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Da(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),he,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,a)=>{this.navigateToSyncWithBrowser(t,r,i,a)})}navigateToSyncWithBrowser(t,i,r,a){let o=r?.navigationId?r:null;if(r){let c=m({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(a.state=c)}let s=this.parseUrl(t);this.scheduleNavigation(s,i,o,a).catch(c=>{this.disposed||this.injector.get(Le)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return w(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Yi),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:c}=i,d=c?this.currentUrlTree.fragment:o,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),a);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=a||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let _=r?r.snapshot:this.routerState.snapshot.root;p=br(_)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return wr(p,t,h,d??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=wt(t)?t:this.parseUrl(t),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,he,null,i)}navigate(t,i={skipLocationChange:!1}){return Eo(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(fn(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=m({},Gi):i===!1?r=m({},pe):r=m(m({},pe),i),wt(t))return Oi(this.currentUrlTree,t,r);let a=this.parseUrl(t);return Oi(this.currentUrlTree,a,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,a])=>(a!=null&&(i[r]=a),i),{})}scheduleNavigation(t,i,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,c,d;o?(s=o.resolve,c=o.reject,d=o.promise):d=new Promise((p,_)=>{s=p,c=_});let h=this.pendingTasks.add();return Ji(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:a,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Eo(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new R(4008,!1)}var Oo=(()=>{class e{router=l(Tt);stateManager=l(ui);fragment=v("");queryParams=v({});path=v("");serializer=l(Zt);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof J&&this.updateState()})}updateState(){let{fragment:t,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new T(i)))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Jt=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Tn("href"),{optional:!0});reactiveHref=En(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return w(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return w(this._target)}_target=v(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return w(this._queryParams)}_queryParams=v(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return w(this._fragment)}_fragment=v(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return w(this._queryParamsHandling)}_queryParamsHandling=v(void 0);set state(t){this._state.set(t)}get state(){return w(this._state)}_state=v(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return w(this._info)}_info=v(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return w(this._relativeTo)}_relativeTo=v(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return w(this._preserveFragment)}_preserveFragment=v(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return w(this._skipLocationChange)}_skipLocationChange=v(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return w(this._replaceUrl)}_replaceUrl=v(!1);isAnchorElement;onChanges=new D;applicationErrorHandler=l(Le);options=l(Xt,{optional:!0});reactiveRouterState=l(Oo);constructor(t,i,r,a,o,s){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=v(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(wt(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(t!==0||i||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,i){let r=this.renderer,a=this.el.nativeElement;i!==null?r.setAttribute(a,t,i):r.removeAttribute(a,t)}_urlTree=Ne(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:wt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,i)=>this.computeHref(t)===this.computeHref(i)});get urlTree(){return w(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(i){return new(i||e)(et(Tt),et(ut),yn("tabindex"),et(Pt),et(K),et(Ln))};static \u0275dir=P({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&Y("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&lt("href",r.reactiveHref(),kn)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ue],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ue],replaceUrl:[2,"replaceUrl","replaceUrl",Ue],routerLink:"routerLink"},features:[Ot]})}return e})(),tn=(()=>{class e{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new q;link=l(Jt,{optional:!0});constructor(t,i,r,a){this.router=t,this.element=i,this.renderer=r,this.cdr=a,this.routerEventsSubscription=t.events.subscribe(o=>{o instanceof J&&this.update()})}ngAfterContentInit(){g(this.links.changes,g(null)).pipe(wi()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=N(t).pipe(wi()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=Lo(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},Gi):m({},pe);return r=>{let a=r.urlTree;return a?w(Wi(a,t,i)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||e)(et(Tt),et(K),et(Pt),et(dt))};static \u0275dir=P({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,a){if(i&1&&vt(a,Jt,5),i&2){let o;I(o=M())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ot]})}return e})();function Lo(e){let n=e;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Po=new y("");function en(e,...n){return _n([{provide:Se,multi:!0,useValue:e},[],{provide:ut,useFactory:No},{provide:Mn,multi:!0,useFactory:Uo},n.map(t=>t.\u0275providers)])}function No(){return l(Tt).routerState.root}function Uo(){let e=l(Rt);return n=>{let t=e.get(Dn);if(n!==t.components[0])return;let i=e.get(Tt),r=e.get(jo);e.get(zo)===1&&i.initialNavigation(),e.get(Fo,null,{optional:!0})?.setUpPreloading(),e.get(Po,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var jo=new y("",{factory:()=>new D}),zo=new y("",{factory:()=>1});var Fo=new y("");var Yr=[{path:"",pathMatch:"full",redirectTo:"cats-search"},{path:"cats-search",loadComponent:()=>import("./chunk-A57YHKMK.js").then(e=>e.Panel)},{path:"breeds-library",loadComponent:()=>import("./chunk-45NUZXHY.js").then(e=>e.BreedsLibrary)}];var Xr=(e,n)=>{let t=tr.API_KEY;if(!t)return n(e);let i=e.clone({setHeaders:{"x-api-key":t}});return n(i)};var Jr={providers:[wn(),en(Yr),Nn(Un([Xr]))]};var Bo=["*"],$o=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Ho=["unscopedContent"],Vo=["text"],qo=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Go=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Wo=new y("ListOption"),Qo=(()=>{class e{_elementRef=l(K);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),Zo=(()=>{class e{_elementRef=l(K);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),Ko=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),ta=(()=>{class e{_listOption=l(Wo,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,hostVars:4,hostBindings:function(i,r){i&2&&W("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return e})(),Yo=(()=>{class e extends ta{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275dir=P({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[it]})}return e})(),Xo=(()=>{class e extends ta{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275dir=P({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[it]})}return e})(),Jo=new y("MAT_LIST_CONFIG"),nn=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=U(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(U(t))}_disabled=v(!1);_defaultOptions=l(Jo,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,hostVars:1,hostBindings:function(i,r){i&2&&lt("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),ts=(()=>{class e{_elementRef=l(K);_ngZone=l(St);_listBase=l(nn,{optional:!0});_platform=l(zt);_hostElement;_isButtonElement;_noopAnimations=ze();_avatars;_icons;set lines(t){this._explicitLines=ce(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=U(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(U(t))}_disabled=v(!1);_subscriptions=new Me;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(Fn).load(Wn);let t=l(Gn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new qn(this,this._ngZone,this._hostElement,this._platform,l(Rt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ae(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",a),r.classList.toggle("mdc-list-item__secondary-text",!a)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=P({type:e,contentQueries:function(i,r,a){if(i&1&&vt(a,Yo,4)(a,Xo,4),i&2){let o;I(o=M())&&(r._avatars=o),I(o=M())&&(r._icons=o)}},hostVars:4,hostBindings:function(i,r){i&2&&(lt("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),W("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var ea=(()=>{class e extends ts{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=U(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275cmp=L({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,a){if(i&1&&vt(a,Zo,5)(a,Qo,5)(a,Ko,5),i&2){let o;I(o=M())&&(r._lines=o),I(o=M())&&(r._titles=o),I(o=M())&&(r._meta=o)}},viewQuery:function(i,r){if(i&1&&ae(Ho,5)(Vo,5),i&2){let a;I(a=M())&&(r._unscopedContent=a.first),I(a=M())&&(r._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(lt("aria-current",r._getAriaCurrent()),W("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[it],ngContentSelectors:Go,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(rt(qo),x(0),b(1,"span",1),x(2,1),x(3,2),b(4,"span",2,0),Y("cdkObserveContent",function(){return r._updateItemLines(!0)}),x(6,3),S()(),x(7,4),x(8,5),nt(9,"div",3))},dependencies:[Bn],encapsulation:2,changeDetection:0})}return e})();var ia=(()=>{class e extends nn{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275cmp=L({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[at([{provide:nn,useExisting:e}]),it],ngContentSelectors:Bo,decls:1,vars:0,template:function(i,r){i&1&&(rt(),x(0))},styles:[$o],encapsulation:2,changeDetection:0})}return e})();var fi=["*"],is=["content"],ns=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],rs=["mat-drawer","mat-drawer-content","*"];function as(e,n){if(e&1){let t=re();b(0,"div",1),Y("click",function(){kt(t);let r=jt();return Ct(r._onBackdropClicked())}),S()}if(e&2){let t=jt();W("mat-drawer-shown",t._isShowingBackdrop())}}function os(e,n){e&1&&(b(0,"mat-drawer-content"),x(1,2),S())}var ss=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],cs=["mat-sidenav","mat-sidenav-content","*"];function ls(e,n){if(e&1){let t=re();b(0,"div",1),Y("click",function(){kt(t);let r=jt();return Ct(r._onBackdropClicked())}),S()}if(e&2){let t=jt();W("mat-drawer-shown",t._isShowingBackdrop())}}function ds(e,n){e&1&&(b(0,"mat-sidenav-content"),x(1,2),S())}var ms=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var hs=new y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),on=new y("MAT_DRAWER_CONTAINER"),pi=(()=>{class e extends Ft{_platform=l(zt);_changeDetectorRef=l(dt);_container=l(an);constructor(){let t=l(K),i=l(Zn),r=l(St);super(t,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Pe("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),W("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[at([{provide:Ft,useExisting:e}]),it],ngContentSelectors:fi,decls:1,vars:0,template:function(i,r){i&1&&(rt(),x(0))},encapsulation:2,changeDetection:0})}return e})(),rn=(()=>{class e{_elementRef=l(K);_focusTrapFactory=l(Hn);_focusMonitor=l(zn);_platform=l(zt);_ngZone=l(St);_renderer=l(Pt);_interactivityChecker=l($n);_doc=l(ki);_container=l(on,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=U(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=U(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(U(t))}_opened=v(!1);_openedVia=null;_animationStarted=new D;_animationEnd=new D;openedChange=new q(!0);_openedStream=this.openedChange.pipe(H(t=>t),k(()=>{}));openedStart=this._animationStarted.pipe(H(()=>this.opened),yi(void 0));_closedStream=this.openedChange.pipe(H(t=>!t),k(()=>{}));closedStart=this._animationStarted.pipe(H(()=>!this.opened),yi(void 0));_destroyed=new D;onPositionChanged=new q;_content;_modeChanged=new D;_injector=l(Rt);_changeDetectorRef=l(dt);constructor(){this.openedChange.pipe(O(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!Vn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",r),o=this._renderer.listen(t,"mousedown",r)})),t.focus(i)}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ne(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,i,r){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(pt(1)).subscribe(o=>a(o?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&ae(is,5),i&2){let a;I(a=M())&&(r._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(lt("align",null)("tabIndex",r.mode!=="side"?"-1":null),Pe("visibility",!r._container&&!r.opened?"hidden":null),W("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:fi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(rt(),b(0,"div",1,0),x(2),S())},dependencies:[Ft],encapsulation:2,changeDetection:0})}return e})(),an=(()=>{class e{_dir=l(Qn,{optional:!0});_element=l(K);_ngZone=l(St);_changeDetectorRef=l(dt);_animationDisabled=ze();_transitionsEnabled=!1;_allDrawers;_drawers=new xn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=U(t)}_autosize=l(hs);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:U(t)}_backdropOverride=null;backdropClick=new q;_start=null;_end=null;_left=null;_right=null;_destroyed=new D;_doCheckSubject=new D;_contentMargins={left:null,right:null};_contentMarginChanges=new D;get scrollable(){return this._userContent||this._content}_injector=l(Rt);constructor(){let t=l(zt),i=l(Kn);this._dir?.change.pipe(O(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(O(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ie(this._allDrawers),O(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ie(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(pn(10),O(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();t+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,t-=r}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(O(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(O(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(O(this._drawers.changes)).subscribe(()=>{ne({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(O(Ae(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,a){if(i&1&&vt(a,pi,5)(a,rn,5),i&2){let o;I(o=M())&&(r._content=o.first),I(o=M())&&(r._allDrawers=o)}},viewQuery:function(i,r){if(i&1&&ae(pi,5),i&2){let a;I(a=M())&&(r._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&W("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[at([{provide:on,useExisting:e}])],ngContentSelectors:rs,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(rt(ns),Nt(0,as,1,2,"div",0),x(1),x(2,1),Nt(3,os,2,0,"mat-drawer-content")),i&2&&(Ut(r.hasBackdrop?0:-1),Lt(3),Ut(r._content?-1:3))},dependencies:[pi],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return e})(),gi=(()=>{class e extends pi{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275cmp=L({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[at([{provide:Ft,useExisting:e}]),it],ngContentSelectors:fi,decls:1,vars:0,template:function(i,r){i&1&&(rt(),x(0))},encapsulation:2,changeDetection:0})}return e})(),sn=(()=>{class e extends rn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=U(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ce(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ce(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275cmp=L({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(lt("tabIndex",r.mode!=="side"?"-1":null)("align",null),Pe("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),W("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[at([{provide:rn,useExisting:e}]),it],ngContentSelectors:fi,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(rt(),b(0,"div",1,0),x(2),S())},dependencies:[Ft],encapsulation:2,changeDetection:0})}return e})(),na=(()=>{class e extends an{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(e)))(r||e)}})();static \u0275cmp=L({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,a){if(i&1&&vt(a,gi,5)(a,sn,5),i&2){let o;I(o=M())&&(r._content=o.first),I(o=M())&&(r._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&W("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[at([{provide:on,useExisting:e},{provide:an,useExisting:e}]),it],ngContentSelectors:cs,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(rt(ss),Nt(0,ls,1,2,"div",0),x(1),x(2,1),Nt(3,ds,2,0,"mat-sidenav-content")),i&2&&(Ut(r.hasBackdrop?0:-1),Lt(3),Ut(r._content?-1:3))},dependencies:[gi],styles:[ms],encapsulation:2,changeDetection:0})}return e})();var vi=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=L({type:e,selectors:[["app-root"]],features:[at([Jn])],decls:23,vars:1,consts:[["sidenav",""],[1,"h-screen"],["mode","over",1,"sidenav",3,"autoFocus"],["src","assets/logo-orange-guys.svg","alt","Company Logo",1,"p-4"],["mat-list-item","","routerLink","/cats-search","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/breeds-library","routerLinkActive","active-link",3,"click"],["src","assets/coffee-cat.svg","alt","Coffee cat",1,"w-[60px]","coffee-cat"],[1,"content"],[1,"header"],["src","assets/logo-orange-guys.svg","alt","thortful logo",1,"w-[60px]"],["mat-icon-button","","type","button","aria-label","Open navigation",3,"click"],[1,"flex-1"],[1,"footer"],["href","https://www.thortful.com/","target","_blank"],["src","assets/logo-orange-guys.svg","alt","www.thortful.com","width","60px"]],template:function(t,i){if(t&1){let r=re();b(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0),nt(3,"img",3),b(4,"mat-nav-list")(5,"a",4),Y("click",function(){kt(r);let o=oe(2);return Ct(o.close())}),se(6,"Cats Search"),S(),b(7,"a",5),Y("click",function(){kt(r);let o=oe(2);return Ct(o.close())}),se(8,"Breeds Library"),S()(),nt(9,"img",6),S(),b(10,"mat-sidenav-content",7)(11,"header",8),nt(12,"img",9),b(13,"button",10),Y("click",function(){kt(r);let o=oe(2);return Ct(o.toggle())}),b(14,"mat-icon"),se(15,"menu"),S()()(),b(16,"main",11),nt(17,"router-outlet"),S(),b(18,"footer",12)(19,"p"),se(20,"Made by Yehor with \u2764\uFE0F for"),S(),b(21,"a",13),nt(22,"img",14),S()()()()}t&2&&(Lt(),Si("autoFocus",!1))},dependencies:[Xn,Yn,ea,ia,sn,na,gi,Jt,tn,Ce],styles:[".content[_ngcontent-%COMP%]{min-height:100%;display:flex;flex-direction:column}.sidenav[_ngcontent-%COMP%]{width:240px;padding:16px 0;display:flex;flex-direction:column}.coffee-cat[_ngcontent-%COMP%]{position:absolute;bottom:10px;left:23px}.header[_ngcontent-%COMP%]{padding:16px 24px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 5px 30px #4b6fff21}.footer[_ngcontent-%COMP%]{padding:16px;display:flex;align-items:center;justify-content:center;gap:10px}.active-link[_ngcontent-%COMP%]{background-color:#d4ecff}"],changeDetection:0})};Pn(vi,Jr).catch(e=>console.error(e));
