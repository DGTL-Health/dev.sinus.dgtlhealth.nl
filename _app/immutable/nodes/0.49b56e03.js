import{s as W,r as N,f as H,a as X,g as P,h as p,c as j,d as b,j as f,i as C,u as y,v as M,w as V,x as G,y as ue,z as K,A as Q,k as q,B as ce,C as Ge,l as Y,m as Z,D as ae,E as ie,F as he,b as Ue,G as Me,H as oe,e as re,I as se,J as de,K as ne,L as ze,n as Xe}from"../chunks/scheduler.82920f87.js";import{S as w,i as x,a as k,g as U,t as L,c as z,b as $,d as ee,m as te,e as le}from"../chunks/index.5b80c364.js";import{O as Ve,a as je,l as qe,b as Je,c as Ke,d as Qe,i as We,u as Ye,e as Ze}from"../chunks/OidcContext.c36700bb.js";import{p as we}from"../chunks/stores.68faed2b.js";import{e as xe}from"../chunks/singletons.97418cdc.js";const $e=a=>({}),ge=a=>({}),et=a=>({}),me=a=>({}),tt=a=>({}),be=a=>({});function ke(a){let e,t,l;const o=a[22].lead,s=N(o,a,a[21],be);return{c(){e=H("div"),s&&s.c(),this.h()},l(i){e=P(i,"DIV",{class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"class",t="app-bar-slot-lead "+a[4])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&2097152)&&M(s,o,i,i[21],l?G(o,i[21],r,tt):V(i[21]),be),(!l||r&16&&t!==(t="app-bar-slot-lead "+i[4]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function ve(a){let e,t,l;const o=a[22].trail,s=N(o,a,a[21],me);return{c(){e=H("div"),s&&s.c(),this.h()},l(i){e=P(i,"DIV",{class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"class",t="app-bar-slot-trail "+a[2])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&2097152)&&M(s,o,i,i[21],l?G(o,i[21],r,et):V(i[21]),me),(!l||r&4&&t!==(t="app-bar-slot-trail "+i[2]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function Ee(a){let e,t,l;const o=a[22].headline,s=N(o,a,a[21],ge);return{c(){e=H("div"),s&&s.c(),this.h()},l(i){e=P(i,"DIV",{class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"class",t="app-bar-row-headline "+a[5])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&2097152)&&M(s,o,i,i[21],l?G(o,i[21],r,$e):V(i[21]),ge),(!l||r&32&&t!==(t="app-bar-row-headline "+i[5]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function lt(a){let e,t,l,o,s,i,r,n,c,_,d=a[8].lead&&ke(a);const R=a[22].default,u=N(R,a,a[21],null);let h=a[8].trail&&ve(a),I=a[8].headline&&Ee(a);return{c(){e=H("div"),t=H("div"),d&&d.c(),l=X(),o=H("div"),u&&u.c(),i=X(),h&&h.c(),n=X(),I&&I.c(),this.h()},l(g){e=P(g,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var E=p(e);t=P(E,"DIV",{class:!0});var S=p(t);d&&d.l(S),l=j(S),o=P(S,"DIV",{class:!0});var A=p(o);u&&u.l(A),A.forEach(b),i=j(S),h&&h.l(S),S.forEach(b),n=j(E),I&&I.l(E),E.forEach(b),this.h()},h(){f(o,"class",s="app-bar-slot-default "+a[3]),f(t,"class",r="app-bar-row-main "+a[6]),f(e,"class",c="app-bar "+a[7]),f(e,"data-testid","app-bar"),f(e,"role","toolbar"),f(e,"aria-label",a[0]),f(e,"aria-labelledby",a[1])},m(g,E){C(g,e,E),y(e,t),d&&d.m(t,null),y(t,l),y(t,o),u&&u.m(o,null),y(t,i),h&&h.m(t,null),y(e,n),I&&I.m(e,null),_=!0},p(g,[E]){g[8].lead?d?(d.p(g,E),E&256&&k(d,1)):(d=ke(g),d.c(),k(d,1),d.m(t,l)):d&&(U(),L(d,1,1,()=>{d=null}),z()),u&&u.p&&(!_||E&2097152)&&M(u,R,g,g[21],_?G(R,g[21],E,null):V(g[21]),null),(!_||E&8&&s!==(s="app-bar-slot-default "+g[3]))&&f(o,"class",s),g[8].trail?h?(h.p(g,E),E&256&&k(h,1)):(h=ve(g),h.c(),k(h,1),h.m(t,null)):h&&(U(),L(h,1,1,()=>{h=null}),z()),(!_||E&64&&r!==(r="app-bar-row-main "+g[6]))&&f(t,"class",r),g[8].headline?I?(I.p(g,E),E&256&&k(I,1)):(I=Ee(g),I.c(),k(I,1),I.m(e,null)):I&&(U(),L(I,1,1,()=>{I=null}),z()),(!_||E&128&&c!==(c="app-bar "+g[7]))&&f(e,"class",c),(!_||E&1)&&f(e,"aria-label",g[0]),(!_||E&2)&&f(e,"aria-labelledby",g[1])},i(g){_||(k(d),k(u,g),k(h),k(I),_=!0)},o(g){L(d),L(u,g),L(h),L(I),_=!1},d(g){g&&b(e),d&&d.d(),u&&u.d(g),h&&h.d(),I&&I.d()}}}const st="flex flex-col",at="grid items-center",it="",ot="flex-none flex justify-between items-center",rt="flex-auto",nt="flex-none flex items-center space-x-4";function ft(a,e,t){let l,o,s,i,r,n,{$$slots:c={},$$scope:_}=e;const d=ue(c);let{background:R="bg-surface-100-800-token"}=e,{border:u=""}=e,{padding:h="p-4"}=e,{shadow:I=""}=e,{spacing:g="space-y-4"}=e,{gridColumns:E="grid-cols-[auto_1fr_auto]"}=e,{gap:S="gap-4"}=e,{regionRowMain:A=""}=e,{regionRowHeadline:B=""}=e,{slotLead:v=""}=e,{slotDefault:O=""}=e,{slotTrail:F=""}=e,{label:m=""}=e,{labelledby:D=""}=e;return a.$$set=T=>{t(23,e=K(K({},e),Q(T))),"background"in T&&t(9,R=T.background),"border"in T&&t(10,u=T.border),"padding"in T&&t(11,h=T.padding),"shadow"in T&&t(12,I=T.shadow),"spacing"in T&&t(13,g=T.spacing),"gridColumns"in T&&t(14,E=T.gridColumns),"gap"in T&&t(15,S=T.gap),"regionRowMain"in T&&t(16,A=T.regionRowMain),"regionRowHeadline"in T&&t(17,B=T.regionRowHeadline),"slotLead"in T&&t(18,v=T.slotLead),"slotDefault"in T&&t(19,O=T.slotDefault),"slotTrail"in T&&t(20,F=T.slotTrail),"label"in T&&t(0,m=T.label),"labelledby"in T&&t(1,D=T.labelledby),"$$scope"in T&&t(21,_=T.$$scope)},a.$$.update=()=>{t(7,l=`${st} ${R} ${u} ${g} ${h} ${I} ${e.class??""}`),a.$$.dirty&114688&&t(6,o=`${at} ${E} ${S} ${A}`),a.$$.dirty&131072&&t(5,s=`${it} ${B}`),a.$$.dirty&262144&&t(4,i=`${ot} ${v}`),a.$$.dirty&524288&&t(3,r=`${rt} ${O}`),a.$$.dirty&1048576&&t(2,n=`${nt} ${F}`)},e=Q(e),[m,D,n,r,i,s,o,l,d,R,u,h,I,g,E,S,A,B,v,O,F,_,c]}class ut extends w{constructor(e){super(),x(this,e,ft,lt,W,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const ct=a=>({}),Re=a=>({}),dt=a=>({}),Le=a=>({}),_t=a=>({}),Ie=a=>({}),ht=a=>({}),Se=a=>({}),gt=a=>({}),Te=a=>({}),mt=a=>({}),Ce=a=>({});function De(a){let e,t,l;const o=a[19].header,s=N(o,a,a[18],Ce);return{c(){e=H("header"),s&&s.c(),this.h()},l(i){e=P(i,"HEADER",{id:!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"id","shell-header"),f(e,"class",t="flex-none "+a[8])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&262144)&&M(s,o,i,i[18],l?G(o,i[18],r,mt):V(i[18]),Ce),(!l||r&256&&t!==(t="flex-none "+i[8]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function He(a){let e,t;const l=a[19].sidebarLeft,o=N(l,a,a[18],Te);return{c(){e=H("aside"),o&&o.c(),this.h()},l(s){e=P(s,"ASIDE",{id:!0,class:!0});var i=p(e);o&&o.l(i),i.forEach(b),this.h()},h(){f(e,"id","sidebar-left"),f(e,"class",a[7])},m(s,i){C(s,e,i),o&&o.m(e,null),t=!0},p(s,i){o&&o.p&&(!t||i&262144)&&M(o,l,s,s[18],t?G(l,s[18],i,gt):V(s[18]),Te),(!t||i&128)&&f(e,"class",s[7])},i(s){t||(k(o,s),t=!0)},o(s){L(o,s),t=!1},d(s){s&&b(e),o&&o.d(s)}}}function Pe(a){let e,t,l;const o=a[19].pageHeader,s=N(o,a,a[18],Se),i=s||bt();return{c(){e=H("header"),i&&i.c(),this.h()},l(r){e=P(r,"HEADER",{id:!0,class:!0});var n=p(e);i&&i.l(n),n.forEach(b),this.h()},h(){f(e,"id","page-header"),f(e,"class",t="flex-none "+a[5])},m(r,n){C(r,e,n),i&&i.m(e,null),l=!0},p(r,n){s&&s.p&&(!l||n&262144)&&M(s,o,r,r[18],l?G(o,r[18],n,ht):V(r[18]),Se),(!l||n&32&&t!==(t="flex-none "+r[5]))&&f(e,"class",t)},i(r){l||(k(i,r),l=!0)},o(r){L(i,r),l=!1},d(r){r&&b(e),i&&i.d(r)}}}function bt(a){let e;return{c(){e=Y("(slot:header)")},l(t){e=Z(t,"(slot:header)")},m(t,l){C(t,e,l)},d(t){t&&b(e)}}}function pe(a){let e,t,l;const o=a[19].pageFooter,s=N(o,a,a[18],Ie),i=s||kt();return{c(){e=H("footer"),i&&i.c(),this.h()},l(r){e=P(r,"FOOTER",{id:!0,class:!0});var n=p(e);i&&i.l(n),n.forEach(b),this.h()},h(){f(e,"id","page-footer"),f(e,"class",t="flex-none "+a[3])},m(r,n){C(r,e,n),i&&i.m(e,null),l=!0},p(r,n){s&&s.p&&(!l||n&262144)&&M(s,o,r,r[18],l?G(o,r[18],n,_t):V(r[18]),Ie),(!l||n&8&&t!==(t="flex-none "+r[3]))&&f(e,"class",t)},i(r){l||(k(i,r),l=!0)},o(r){L(i,r),l=!1},d(r){r&&b(e),i&&i.d(r)}}}function kt(a){let e;return{c(){e=Y("(slot:footer)")},l(t){e=Z(t,"(slot:footer)")},m(t,l){C(t,e,l)},d(t){t&&b(e)}}}function Oe(a){let e,t;const l=a[19].sidebarRight,o=N(l,a,a[18],Le);return{c(){e=H("aside"),o&&o.c(),this.h()},l(s){e=P(s,"ASIDE",{id:!0,class:!0});var i=p(e);o&&o.l(i),i.forEach(b),this.h()},h(){f(e,"id","sidebar-right"),f(e,"class",a[6])},m(s,i){C(s,e,i),o&&o.m(e,null),t=!0},p(s,i){o&&o.p&&(!t||i&262144)&&M(o,l,s,s[18],t?G(l,s[18],i,dt):V(s[18]),Le),(!t||i&64)&&f(e,"class",s[6])},i(s){t||(k(o,s),t=!0)},o(s){L(o,s),t=!1},d(s){s&&b(e),o&&o.d(s)}}}function Fe(a){let e,t,l;const o=a[19].footer,s=N(o,a,a[18],Re);return{c(){e=H("footer"),s&&s.c(),this.h()},l(i){e=P(i,"FOOTER",{id:!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"id","shell-footer"),f(e,"class",t="flex-none "+a[2])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&262144)&&M(s,o,i,i[18],l?G(o,i[18],r,ct):V(i[18]),Re),(!l||r&4&&t!==(t="flex-none "+i[2]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function vt(a){let e,t,l,o,s,i,r,n,c,_,d,R,u,h,I,g=a[10].header&&De(a),E=a[10].sidebarLeft&&He(a),S=a[10].pageHeader&&Pe(a);const A=a[19].default,B=N(A,a,a[18],null);let v=a[10].pageFooter&&pe(a),O=a[10].sidebarRight&&Oe(a),F=a[10].footer&&Fe(a);return{c(){e=H("div"),g&&g.c(),t=X(),l=H("div"),E&&E.c(),o=X(),s=H("div"),S&&S.c(),i=X(),r=H("main"),B&&B.c(),c=X(),v&&v.c(),d=X(),O&&O.c(),R=X(),F&&F.c(),this.h()},l(m){e=P(m,"DIV",{id:!0,class:!0,"data-testid":!0});var D=p(e);g&&g.l(D),t=j(D),l=P(D,"DIV",{class:!0});var T=p(l);E&&E.l(T),o=j(T),s=P(T,"DIV",{id:!0,class:!0});var J=p(s);S&&S.l(J),i=j(J),r=P(J,"MAIN",{id:!0,class:!0});var _e=p(r);B&&B.l(_e),_e.forEach(b),c=j(J),v&&v.l(J),J.forEach(b),d=j(T),O&&O.l(T),T.forEach(b),R=j(D),F&&F.l(D),D.forEach(b),this.h()},h(){f(r,"id","page-content"),f(r,"class",n="flex-auto "+a[4]),f(s,"id","page"),f(s,"class",_=a[1]+" "+Be),q(s,"scrollbar-gutter",a[0]),f(l,"class","flex-auto "+Rt),f(e,"id","appShell"),f(e,"class",a[9]),f(e,"data-testid","app-shell")},m(m,D){C(m,e,D),g&&g.m(e,null),y(e,t),y(e,l),E&&E.m(l,null),y(l,o),y(l,s),S&&S.m(s,null),y(s,i),y(s,r),B&&B.m(r,null),y(s,c),v&&v.m(s,null),y(l,d),O&&O.m(l,null),y(e,R),F&&F.m(e,null),u=!0,h||(I=ce(s,"scroll",a[20]),h=!0)},p(m,[D]){m[10].header?g?(g.p(m,D),D&1024&&k(g,1)):(g=De(m),g.c(),k(g,1),g.m(e,t)):g&&(U(),L(g,1,1,()=>{g=null}),z()),m[10].sidebarLeft?E?(E.p(m,D),D&1024&&k(E,1)):(E=He(m),E.c(),k(E,1),E.m(l,o)):E&&(U(),L(E,1,1,()=>{E=null}),z()),m[10].pageHeader?S?(S.p(m,D),D&1024&&k(S,1)):(S=Pe(m),S.c(),k(S,1),S.m(s,i)):S&&(U(),L(S,1,1,()=>{S=null}),z()),B&&B.p&&(!u||D&262144)&&M(B,A,m,m[18],u?G(A,m[18],D,null):V(m[18]),null),(!u||D&16&&n!==(n="flex-auto "+m[4]))&&f(r,"class",n),m[10].pageFooter?v?(v.p(m,D),D&1024&&k(v,1)):(v=pe(m),v.c(),k(v,1),v.m(s,null)):v&&(U(),L(v,1,1,()=>{v=null}),z()),(!u||D&2&&_!==(_=m[1]+" "+Be))&&f(s,"class",_),D&1&&q(s,"scrollbar-gutter",m[0]),m[10].sidebarRight?O?(O.p(m,D),D&1024&&k(O,1)):(O=Oe(m),O.c(),k(O,1),O.m(l,null)):O&&(U(),L(O,1,1,()=>{O=null}),z()),m[10].footer?F?(F.p(m,D),D&1024&&k(F,1)):(F=Fe(m),F.c(),k(F,1),F.m(e,null)):F&&(U(),L(F,1,1,()=>{F=null}),z()),(!u||D&512)&&f(e,"class",m[9])},i(m){u||(k(g),k(E),k(S),k(B,m),k(v),k(O),k(F),u=!0)},o(m){L(g),L(E),L(S),L(B,m),L(v),L(O),L(F),u=!1},d(m){m&&b(e),g&&g.d(),E&&E.d(),S&&S.d(),B&&B.d(m),v&&v.d(),O&&O.d(),F&&F.d(),h=!1,I()}}}const Et="w-full h-full flex flex-col overflow-hidden",Rt="w-full h-full flex overflow-hidden",Be="flex-1 overflow-x-hidden flex flex-col",Lt="flex-none overflow-x-hidden overflow-y-auto",It="flex-none overflow-x-hidden overflow-y-auto";function St(a,e,t){let l,o,s,i,r,n,c,_,{$$slots:d={},$$scope:R}=e;const u=ue(d);let{scrollbarGutter:h="auto"}=e,{regionPage:I=""}=e,{slotHeader:g="z-10"}=e,{slotSidebarLeft:E="w-auto"}=e,{slotSidebarRight:S="w-auto"}=e,{slotPageHeader:A=""}=e,{slotPageContent:B=""}=e,{slotPageFooter:v=""}=e,{slotFooter:O=""}=e;function F(m){Ge.call(this,a,m)}return a.$$set=m=>{t(21,e=K(K({},e),Q(m))),"scrollbarGutter"in m&&t(0,h=m.scrollbarGutter),"regionPage"in m&&t(1,I=m.regionPage),"slotHeader"in m&&t(11,g=m.slotHeader),"slotSidebarLeft"in m&&t(12,E=m.slotSidebarLeft),"slotSidebarRight"in m&&t(13,S=m.slotSidebarRight),"slotPageHeader"in m&&t(14,A=m.slotPageHeader),"slotPageContent"in m&&t(15,B=m.slotPageContent),"slotPageFooter"in m&&t(16,v=m.slotPageFooter),"slotFooter"in m&&t(17,O=m.slotFooter),"$$scope"in m&&t(18,R=m.$$scope)},a.$$.update=()=>{t(9,l=`${Et} ${e.class??""}`),a.$$.dirty&2048&&t(8,o=`${g}`),a.$$.dirty&4096&&t(7,s=`${Lt} ${E}`),a.$$.dirty&8192&&t(6,i=`${It} ${S}`),a.$$.dirty&16384&&t(5,r=`${A}`),a.$$.dirty&32768&&t(4,n=`${B}`),a.$$.dirty&65536&&t(3,c=`${v}`),a.$$.dirty&131072&&t(2,_=`${O}`)},e=Q(e),[h,I,_,c,n,r,i,s,o,l,u,g,E,S,A,B,v,O,R,d,F]}class Tt extends w{constructor(e){super(),x(this,e,St,vt,W,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function ye(a){let e,t,l;const o=a[16].default,s=N(o,a,a[15],null);return{c(){e=ae("text"),s&&s.c(),this.h()},l(i){e=ie(i,"text",{x:!0,y:!0,"text-anchor":!0,"dominant-baseline":!0,"font-weight":!0,"font-size":!0,class:!0});var r=p(e);s&&s.l(r),r.forEach(b),this.h()},h(){f(e,"x","50%"),f(e,"y","50%"),f(e,"text-anchor","middle"),f(e,"dominant-baseline","middle"),f(e,"font-weight","bold"),f(e,"font-size",a[2]),f(e,"class",t="progress-radial-text "+a[7])},m(i,r){C(i,e,r),s&&s.m(e,null),l=!0},p(i,r){s&&s.p&&(!l||r&32768)&&M(s,o,i,i[15],l?G(o,i[15],r,null):V(i[15]),null),(!l||r&4)&&f(e,"font-size",i[2]),(!l||r&128&&t!==(t="progress-radial-text "+i[7]))&&f(e,"class",t)},i(i){l||(k(s,i),l=!0)},o(i){L(s,i),l=!1},d(i){i&&b(e),s&&s.d(i)}}}function Ct(a){let e,t,l,o,s,i,r=`${a[9]}
			${a[9]}`,n,c,_,d,R=a[0]!=null&&a[0]>=0&&a[13].default&&ye(a);return{c(){e=H("figure"),t=ae("svg"),l=ae("circle"),s=ae("circle"),R&&R.c(),this.h()},l(u){e=P(u,"FIGURE",{class:!0,"data-testid":!0,role:!0,"aria-labelledby":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-valuemin":!0,"aria-valuemax":!0});var h=p(e);t=ie(h,"svg",{viewBox:!0,class:!0});var I=p(t);l=ie(I,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0}),p(l).forEach(b),s=ie(I,"circle",{class:!0,"stroke-width":!0,r:!0,cx:!0,cy:!0,"stroke-linecap":!0}),p(s).forEach(b),R&&R.l(I),I.forEach(b),h.forEach(b),this.h()},h(){f(l,"class",o="progress-radial-track "+Ae+" "+a[6]),f(l,"stroke-width",a[1]),f(l,"r",a[12]),f(l,"cx","50%"),f(l,"cy","50%"),f(s,"class",i="progress-radial-meter "+Ne+" "+a[5]+" "+a[4]),f(s,"stroke-width",a[1]),f(s,"r",a[12]),f(s,"cx","50%"),f(s,"cy","50%"),f(s,"stroke-linecap",a[3]),q(s,"stroke-dasharray",r),q(s,"stroke-dashoffset",a[10]),f(t,"viewBox","0 0 "+fe+" "+fe),f(t,"class","rounded-full"),he(t,"animate-spin",a[0]===void 0),f(e,"class",n="progress-radial "+a[11]),f(e,"data-testid","progress-radial"),f(e,"role","meter"),f(e,"aria-labelledby",a[8]),f(e,"aria-valuenow",c=a[0]||0),f(e,"aria-valuetext",_=a[0]?`${a[0]}%`:"Indeterminate Spinner"),f(e,"aria-valuemin",0),f(e,"aria-valuemax",100)},m(u,h){C(u,e,h),y(e,t),y(t,l),y(t,s),R&&R.m(t,null),d=!0},p(u,[h]){(!d||h&64&&o!==(o="progress-radial-track "+Ae+" "+u[6]))&&f(l,"class",o),(!d||h&2)&&f(l,"stroke-width",u[1]),(!d||h&48&&i!==(i="progress-radial-meter "+Ne+" "+u[5]+" "+u[4]))&&f(s,"class",i),(!d||h&2)&&f(s,"stroke-width",u[1]),(!d||h&8)&&f(s,"stroke-linecap",u[3]),h&512&&r!==(r=`${u[9]}
			${u[9]}`)&&q(s,"stroke-dasharray",r),h&1024&&q(s,"stroke-dashoffset",u[10]),u[0]!=null&&u[0]>=0&&u[13].default?R?(R.p(u,h),h&8193&&k(R,1)):(R=ye(u),R.c(),k(R,1),R.m(t,null)):R&&(U(),L(R,1,1,()=>{R=null}),z()),(!d||h&1)&&he(t,"animate-spin",u[0]===void 0),(!d||h&2048&&n!==(n="progress-radial "+u[11]))&&f(e,"class",n),(!d||h&256)&&f(e,"aria-labelledby",u[8]),(!d||h&1&&c!==(c=u[0]||0))&&f(e,"aria-valuenow",c),(!d||h&1&&_!==(_=u[0]?`${u[0]}%`:"Indeterminate Spinner"))&&f(e,"aria-valuetext",_)},i(u){d||(k(R),d=!0)},o(u){L(R),d=!1},d(u){u&&b(e),R&&R.d()}}}const Dt="progress-radial relative overflow-hidden",Ae="fill-transparent",Ne="fill-transparent -rotate-90 origin-[50%_50%]",fe=512;function Ht(a,e,t){let l,{$$slots:o={},$$scope:s}=e;const i=ue(o);let{value:r=void 0}=e,{stroke:n=40}=e,{font:c=56}=e,{strokeLinecap:_="butt"}=e,{transition:d="transition-[stroke-dashoffset]"}=e,{width:R="w-36"}=e,{meter:u="stroke-surface-900 dark:stroke-surface-50"}=e,{track:h="stroke-surface-500/30"}=e,{fill:I="fill-token"}=e,{labelledby:g=""}=e;const E=fe/2-n/2;let S=E,A;function B(v){t(9,S=E*2*Math.PI),t(10,A=S-v/100*S)}return B(0),Ue(()=>{B(r===void 0?25:r)}),a.$$set=v=>{t(18,e=K(K({},e),Q(v))),"value"in v&&t(0,r=v.value),"stroke"in v&&t(1,n=v.stroke),"font"in v&&t(2,c=v.font),"strokeLinecap"in v&&t(3,_=v.strokeLinecap),"transition"in v&&t(4,d=v.transition),"width"in v&&t(14,R=v.width),"meter"in v&&t(5,u=v.meter),"track"in v&&t(6,h=v.track),"fill"in v&&t(7,I=v.fill),"labelledby"in v&&t(8,g=v.labelledby),"$$scope"in v&&t(15,s=v.$$scope)},a.$$.update=()=>{t(11,l=`${Dt} ${R} ${e.class??""}`)},e=Q(e),[r,n,c,_,d,u,h,I,g,S,A,l,E,i,R,s,o]}class Pt extends w{constructor(e){super(),x(this,e,Ht,Ct,W,{value:0,stroke:1,font:2,strokeLinecap:3,transition:4,width:14,meter:5,track:6,fill:7,labelledby:8})}}function pt(a){let e,t,l,o,s;const i=a[6].default,r=N(i,a,a[5],null);return{c(){e=H("button"),r&&r.c(),this.h()},l(n){e=P(n,"BUTTON",{class:!0,style:!0});var c=p(e);r&&r.l(c),c.forEach(b),this.h()},h(){f(e,"class",t="btn "+a[2]),f(e,"style",a[3])},m(n,c){C(n,e,c),r&&r.m(e,null),l=!0,o||(s=ce(e,"click",Me(a[7])),o=!0)},p(n,[c]){r&&r.p&&(!l||c&32)&&M(r,i,n,n[5],l?G(i,n[5],c,null):V(n[5]),null),(!l||c&4&&t!==(t="btn "+n[2]))&&f(e,"class",t),(!l||c&8)&&f(e,"style",n[3])},i(n){l||(k(r,n),l=!0)},o(n){L(r,n),l=!1},d(n){n&&b(e),r&&r.d(n),o=!1,s()}}}function Ot(a,e,t){let{$$slots:l={},$$scope:o}=e;const s=oe(Ve);let{callback_url:i=oe(je)}=e,{preserveRoute:r}=e,{classes:n=""}=e,{styles:c=""}=e;const _=()=>qe(s,r,i);return a.$$set=d=>{"callback_url"in d&&t(0,i=d.callback_url),"preserveRoute"in d&&t(1,r=d.preserveRoute),"classes"in d&&t(2,n=d.classes),"styles"in d&&t(3,c=d.styles),"$$scope"in d&&t(5,o=d.$$scope)},[i,r,n,c,s,o,l,_]}class Ft extends w{constructor(e){super(),x(this,e,Ot,pt,W,{callback_url:0,preserveRoute:1,classes:2,styles:3})}}function Bt(a){let e,t,l,o,s;const i=a[5].default,r=N(i,a,a[4],null);return{c(){e=H("button"),r&&r.c(),this.h()},l(n){e=P(n,"BUTTON",{class:!0,style:!0});var c=p(e);r&&r.l(c),c.forEach(b),this.h()},h(){f(e,"class",t="btn "+a[2]),f(e,"style",a[0])},m(n,c){C(n,e,c),r&&r.m(e,null),l=!0,o||(s=ce(e,"click",Me(a[6])),o=!0)},p(n,[c]){r&&r.p&&(!l||c&16)&&M(r,i,n,n[4],l?G(i,n[4],c,null):V(n[4]),null),(!l||c&4&&t!==(t="btn "+n[2]))&&f(e,"class",t),(!l||c&1)&&f(e,"style",n[0])},i(n){l||(k(r,n),l=!0)},o(n){L(r,n),l=!1},d(n){n&&b(e),r&&r.d(n),o=!1,s()}}}function yt(a,e,t){let{$$slots:l={},$$scope:o}=e;const s=oe(Ve);let{logout_url:i=oe(Je)}=e,{classes:r=""}=e,{styles:n=""}=e;const c=()=>Ke(s,i);return a.$$set=_=>{"logout_url"in _&&t(1,i=_.logout_url),"classes"in _&&t(2,r=_.classes),"styles"in _&&t(0,n=_.styles),"$$scope"in _&&t(4,o=_.$$scope)},[n,i,r,s,o,l,c]}class At extends w{constructor(e){super(),x(this,e,yt,Bt,W,{logout_url:1,classes:2,styles:0})}}function Nt(a){let e,t;return e=new Qe({props:{issuer:"https://login.dgtlhealth.nl/oauth2/default/",client_id:"0oaa721lc65XFbmqh417",metadata:a[3],extraOptions:{mergeClaims:!0,resource:"some_identifier"},$$slots:{default:[Zt]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,o){te(e,l,o),t=!0},p(l,o){const s={};o&39&&(s.$$scope={dirty:o,ctx:l}),e.$set(s)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Mt(a){let e,t,l,o,s;const i=[Ut,Gt],r=[];function n(c,_){return c[2]?0:1}return l=n(a),o=r[l]=i[l](a),{c(){e=H("div"),t=H("div"),o.c(),this.h()},l(c){e=P(c,"DIV",{class:!0});var _=p(e);t=P(_,"DIV",{class:!0});var d=p(t);o.l(d),d.forEach(b),_.forEach(b),this.h()},h(){f(t,"class","text-center"),f(e,"class","flex items-center justify-center h-screen")},m(c,_){C(c,e,_),y(e,t),r[l].m(t,null),s=!0},p(c,_){let d=l;l=n(c),l===d?r[l].p(c,_):(U(),L(r[d],1,1,()=>{r[d]=null}),z(),o=r[l],o?o.p(c,_):(o=r[l]=i[l](c),o.c()),k(o,1),o.m(t,null))},i(c){s||(k(o),s=!0)},o(c){L(o),s=!1},d(c){c&&b(e),r[l].d()}}}function Vt(a){let e,t;return e=new Tt({props:{$$slots:{footer:[Yt],pageHeader:[Wt],default:[Xt]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,o){te(e,l,o),t=!0},p(l,o){const s={};o&34&&(s.$$scope={dirty:o,ctx:l}),e.$set(s)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Gt(a){let e,t,l;return t=new Ft({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),{c(){e=H("button"),$(t.$$.fragment),this.h()},l(o){e=P(o,"BUTTON",{type:!0,class:!0});var s=p(e);ee(t.$$.fragment,s),s.forEach(b),this.h()},h(){f(e,"type","button"),f(e,"class","btn variant-filled-tertiary btn-sm")},m(o,s){C(o,e,s),te(t,e,null),l=!0},p(o,s){const i={};s&32&&(i.$$scope={dirty:s,ctx:o}),t.$set(i)},i(o){l||(k(t.$$.fragment,o),l=!0)},o(o){L(t.$$.fragment,o),l=!1},d(o){o&&b(e),le(t)}}}function Ut(a){let e,t,l;return e=new Pt({props:{value:void 0}}),{c(){$(e.$$.fragment),t=Y(`
		Authenticating`)},l(o){ee(e.$$.fragment,o),t=Z(o,`
		Authenticating`)},m(o,s){te(e,o,s),C(o,t,s),l=!0},p:ne,i(o){l||(k(e.$$.fragment,o),l=!0)},o(o){L(e.$$.fragment,o),l=!1},d(o){o&&b(t),le(e,o)}}}function zt(a){let e;return{c(){e=Y("Login")},l(t){e=Z(t,"Login")},m(t,l){C(t,e,l)},d(t){t&&b(e)}}}function Xt(a){let e;const t=a[4].default,l=N(t,a,a[5],null);return{c(){l&&l.c()},l(o){l&&l.l(o)},m(o,s){l&&l.m(o,s),e=!0},p(o,s){l&&l.p&&(!e||s&32)&&M(l,t,o,o[5],e?G(t,o[5],s,null):V(o[5]),null)},i(o){e||(k(l,o),e=!0)},o(o){L(l,o),e=!1},d(o){l&&l.d(o)}}}function jt(a){let e,t;return{c(){e=H("img"),this.h()},l(l){e=P(l,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){ze(e.src,t=xe+"/dgtl_logo.png")||f(e,"src",t),f(e,"alt","DGTL Logo"),q(e,"height","50px"),q(e,"width","auto")},m(l,o){C(l,e,o)},p:ne,d(l){l&&b(e)}}}function qt(a){let e,t="firstName";return{c(){e=H("span"),e.textContent=t},l(l){e=P(l,"SPAN",{"data-svelte-h":!0}),de(e)!=="svelte-14km5lt"&&(e.textContent=t)},m(l,o){C(l,e,o)},p:ne,d(l){l&&b(e)}}}function Jt(a){let e,t=a[1].name+"",l;return{c(){e=H("span"),l=Y(t)},l(o){e=P(o,"SPAN",{});var s=p(e);l=Z(s,t),s.forEach(b)},m(o,s){C(o,e,s),y(e,l)},p(o,s){s&2&&t!==(t=o[1].name+"")&&Xe(l,t)},d(o){o&&b(e)}}}function Kt(a){let e;return{c(){e=Y("Logout")},l(t){e=Z(t,"Logout")},m(t,l){C(t,e,l)},d(t){t&&b(e)}}}function Qt(a){let e,t,l="⚙️",o,s,i,r,n,c;function _(u,h){return u[1]&&u[1].name?Jt:qt}let d=_(a),R=d(a);return n=new At({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),{c(){e=H("button"),t=H("span"),t.textContent=l,o=X(),R.c(),s=X(),i=H("button"),r=H("span"),$(n.$$.fragment),this.h()},l(u){e=P(u,"BUTTON",{type:!0,class:!0});var h=p(e);t=P(h,"SPAN",{"data-svelte-h":!0}),de(t)!=="svelte-13y08fm"&&(t.textContent=l),o=j(h),R.l(h),h.forEach(b),s=j(u),i=P(u,"BUTTON",{type:!0,class:!0});var I=p(i);r=P(I,"SPAN",{});var g=p(r);ee(n.$$.fragment,g),g.forEach(b),I.forEach(b),this.h()},h(){f(e,"type","button"),f(e,"class","btn variant-filled btn-sm"),f(i,"type","button"),f(i,"class","btn variant-ghost btn-sm")},m(u,h){C(u,e,h),y(e,t),y(e,o),R.m(e,null),C(u,s,h),C(u,i,h),y(i,r),te(n,r,null),c=!0},p(u,h){d===(d=_(u))&&R?R.p(u,h):(R.d(1),R=d(u),R&&(R.c(),R.m(e,null)));const I={};h&32&&(I.$$scope={dirty:h,ctx:u}),n.$set(I)},i(u){c||(k(n.$$.fragment,u),c=!0)},o(u){L(n.$$.fragment,u),c=!1},d(u){u&&(b(e),b(s),b(i)),R.d(),le(n)}}}function Wt(a){let e,t;return e=new ut({props:{class:"mb-12",$$slots:{trail:[Qt],lead:[jt]},$$scope:{ctx:a}}}),{c(){$(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,o){te(e,l,o),t=!0},p(l,o){const s={};o&34&&(s.$$scope={dirty:o,ctx:l}),e.$set(s)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Yt(a){let e,t='<div><img src="dgtl_logo.png" width="64" height="64" alt="DGTL Health logo"/></div> <div class="alert-message"><p>Information Sensitivity <span class="badge variant-filled-error">Critical</span></p> <p>By using this application you agree to the internal policies of DGTL Health BV.</p></div> <div class="alert-actions"><button type="button" class="btn variant-filled btn-sm"><span>Policies &amp; Docs</span></button> <button type="button" class="btn variant-filled btn-sm"><span>Help</span></button></div>';return{c(){e=H("aside"),e.innerHTML=t,this.h()},l(l){e=P(l,"ASIDE",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-ovdh9t"&&(e.innerHTML=t),this.h()},h(){f(e,"class","alert variant-ghost")},m(l,o){C(l,e,o)},p:ne,d(l){l&&b(e)}}}function Zt(a){let e,t,l,o;const s=[Vt,Mt],i=[];function r(n,c){return n[0]?0:1}return e=r(a),t=i[e]=s[e](a),{c(){t.c(),l=re()},l(n){t.l(n),l=re()},m(n,c){i[e].m(n,c),C(n,l,c),o=!0},p(n,c){let _=e;e=r(n),e===_?i[e].p(n,c):(U(),L(i[_],1,1,()=>{i[_]=null}),z(),t=i[e],t?t.p(n,c):(t=i[e]=s[e](n),t.c()),k(t,1),t.m(l.parentNode,l))},i(n){o||(k(t),o=!0)},o(n){L(t),o=!1},d(n){n&&b(l),i[e].d(n)}}}function wt(a){let e,t,l=typeof window<"u"&&Nt(a);return{c(){l&&l.c(),e=re()},l(o){l&&l.l(o),e=re()},m(o,s){l&&l.m(o,s),C(o,e,s),t=!0},p(o,[s]){typeof window<"u"&&l.p(o,s)},i(o){t||(k(l),t=!0)},o(o){L(l),t=!1},d(o){o&&b(e),l&&l.d(o)}}}function xt(a,e,t){let l,o,s,i;se(a,we,_=>t(6,l=_)),se(a,We,_=>t(0,o=_)),se(a,Ye,_=>t(1,s=_)),se(a,Ze,_=>t(2,i=_));let{$$slots:r={},$$scope:n}=e;const c={end_session_endpoint:"({}).OIDC_ISSUER/v2/logout?client_id=({}).OIDC_CLIENT_ID"};return l.route.id,a.$$set=_=>{"$$scope"in _&&t(5,n=_.$$scope)},[o,s,i,c,r,n]}class al extends w{constructor(e){super(),x(this,e,xt,wt,W,{})}}export{al as component};
