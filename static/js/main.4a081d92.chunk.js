(this.webpackJsonpunivit=this.webpackJsonpunivit||[]).push([[0],{84:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),i=n.n(s),a=(n(84),n(27)),o=n(19),j=n(66),l=Object(c.createContext)({}),d=(n(87),n(32)),b=n(12),u=(n(88),n(110)),O=n(44),h=n(28),x=n(111),f=(n(64),n(5));var g=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),a=i[0],j=i[1],d=Object(c.useState)(""),g=Object(o.a)(d,2),v=g[0],m=g[1],p=Object(c.useContext)(l),y=(p.loggedIn,p.setLoggedIn),N=Object(b.f)();return console.log(v),Object(f.jsx)("div",{className:"form",children:Object(f.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:a})}).then((function(e){200===e.status?(y(!0),N.push("/Explore")):e.json()})).then((function(e){if(!e.message)return null;m(e.message)})).catch((function(e){return console.log("error logging in",e)}))},children:Object(f.jsx)("div",{className:"form_info",children:Object(f.jsx)(O.a,{gutter:[16,16],children:Object(f.jsx)(h.a,{span:24,children:Object(f.jsxs)(x.a,{style:{width:300,borderRadius:10},children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("div",{className:"form_user",children:[Object(f.jsx)("label",{for:"username",children:"Username: "}),Object(f.jsx)("input",{type:"text",className:"form_username",style:{margin:5},value:n,onChange:function(e){return r(e.target.value)}}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"form_pass",children:[Object(f.jsx)("label",{for:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",className:"form_password",style:{margin:5,marginLeft:16},value:a,onChange:function(e){return j(e.target.value)}}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"form_btn",children:[Object(f.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",children:"Login"}),Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:v})})]})]})})})})})})};n(92),n(93);var v=function(){return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("div",{class:"loadingio-spinner-dual-ring-3tyo5wn15cf",children:Object(f.jsxs)("div",{class:"ldio-agdg5jkt1s",children:[Object(f.jsx)("div",{}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{})})]})})})},m="/api/uni/";var p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),a=i[0],j=(i[1],Object(c.useState)(!1)),d=Object(o.a)(j,2),g=(d[0],d[1],Object(c.useContext)(l)),p=(g.loggedIn,g.setLoggedIn),y=Object(b.f)();return Object(c.useEffect)((function(){fetch(m).then((function(e){return e.json()})).then((function(e){setTimeout((function(){r(e)}),500)})).catch((function(e){console.log(e),p(!1),y.push("/")}))}),[n]),Object(f.jsxs)("div",{className:"Explore",children:[a&&Object(f.jsx)(v,{}),Object(f.jsx)(O.a,{style:{margin:0},justify:"start",gutter:[16,16],children:n.map((function(e){return Object(f.jsx)(h.a,{children:Object(f.jsx)("div",{className:"card",children:Object(f.jsx)("div",{children:Object(f.jsxs)(x.a,{hoverable:!0,title:e.name,style:{width:280,borderRadius:10},children:[Object(f.jsxs)("p",{children:["Mkoa:",e.region]}),Object(f.jsxs)("p",{children:["Nafasi:",e.rank]}),Object(f.jsx)(u.a,{onClick:function(){return t=e._id,void fetch(m+t,{method:"DELETE",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));var t},variant:"contained",color:"secondary",children:"DELETE"}),Object(f.jsx)(u.a,{onClick:function(){return t=e._id,void fetch(m+t,{method:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:JSON.stringify()}).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));var t},variant:"contained",style:{marginLeft:70},color:"primary",children:"EDIT"})]})},e._id)})})}))})]})},y=n(62),N=n.n(y),C=n(76);n(94);var S=function(){var e=Object(b.f)(),t=Object(c.useContext)(l),n=t.loggedIn,r=t.setLoggedIn,s=function(){var t=Object(C.a)(N.a.mark((function t(){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/logout");case 3:if(200!==(n=t.sent).status){t.next=9;break}r(!1),e.push("/"),t.next=10;break;case 9:return t.abrupt("return",n.json());case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log("Something wrong",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"nav",children:n&&Object(f.jsxs)(O.a,{gutter:[16,16],justify:"end",children:[Object(f.jsx)(h.a,{children:Object(f.jsx)("div",{className:"nav_el",children:Object(f.jsx)("a",{children:Object(f.jsx)(d.b,{className:"navLink",to:"/Add",children:"Add University"})})})}),Object(f.jsx)(h.a,{children:Object(f.jsx)("div",{className:"nav_el",children:Object(f.jsx)("a",{children:Object(f.jsx)(d.b,{className:"navLink",to:"/Explore",children:"Explore"})})})}),Object(f.jsx)(h.a,{children:Object(f.jsx)("div",{className:"nav_el",children:Object(f.jsx)("a",{children:Object(f.jsx)(d.b,{className:"navLink",onClick:s,to:"/",children:"Log Out"})})})})]})})};n(95);var k=function(){var e=Object(c.useState)({name:"",region:"",rank:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),j=i[0],l=i[1],d=Object(b.f)();return Object(f.jsx)("div",{className:"Add",children:Object(f.jsx)(O.a,{style:{margin:0},align:"middle",justify:"center",gutter:[16,16],children:Object(f.jsx)(h.a,{children:Object(f.jsx)(x.a,{title:"ADD UNIVERSITY",style:{width:400,borderRadius:10},children:Object(f.jsx)("div",{className:"Univ_inputs",children:Object(f.jsxs)("form",{onSubmit:function(e){l(!0),e.preventDefault(),fetch("/api/uni",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){setTimeout((function(){e.json(),d.push("/Explore"),l(!1)}),1e3)})).catch((function(e){console.log("Error in the issue",e)}))},children:[Object(f.jsxs)("div",{className:"univ_name",children:[Object(f.jsx)("label",{for:"University Name",children:"University Name"}),Object(f.jsx)("input",{onChange:function(e){return r(Object(a.a)(Object(a.a)({},n),{},{name:e.target.value}))},value:n.name,style:{margin:5,marginLeft:12}}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"univ_region",children:[Object(f.jsx)("label",{for:"University Region",children:"University Region"}),Object(f.jsx)("input",{onChange:function(e){return r(Object(a.a)(Object(a.a)({},n),{},{region:e.target.value}))},value:n.region,style:{margin:5}}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{className:"univ_rank",children:[Object(f.jsx)("label",{for:"University Rank",children:"University Rank"}),Object(f.jsx)("input",{onChange:function(e){return r(Object(a.a)(Object(a.a)({},n),{},{rank:e.target.value}))},value:n.rank,style:{margin:5,marginLeft:16}}),Object(f.jsx)("br",{})]}),Object(f.jsxs)("div",{children:[j&&Object(f.jsx)("input",{disabled:!0,type:"submit",className:"btn",style:{marginLeft:130,marginTop:10,borderRadius:5,width:100,height:35,border:"none"},value:"ADDING"}),!j&&Object(f.jsx)("input",{type:"submit",className:"btn",style:{marginLeft:130,marginTop:10,borderRadius:5,width:100,height:35,fontSize:15,border:"none"},value:"ADD"})]})]})})})})})})},L=function(){return Object(f.jsx)("h2",{children:"Loading ...."})};var w=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(l.Provider,{value:{loggedIn:n,setLoggedIn:r},children:[Object(f.jsx)(j.a,{children:Object(f.jsx)("title",{children:"UMS"})}),Object(f.jsxs)(d.a,{children:[Object(f.jsx)(S,{}),Object(f.jsx)(c.Suspense,{fallback:L,children:Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/",name:"login",render:function(e){return Object(f.jsx)(g,Object(a.a)({},e))}}),Object(f.jsx)(b.a,{exact:!0,path:"/explore",name:"Explore",render:function(e){return Object(f.jsx)(p,Object(a.a)({},e))}}),Object(f.jsx)(b.a,{exact:!0,path:"/add",name:"Add",render:function(e){return Object(f.jsx)(k,Object(a.a)({},e))}})]})})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),E()}},[[96,1,2]]]);
//# sourceMappingURL=main.4a081d92.chunk.js.map