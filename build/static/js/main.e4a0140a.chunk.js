(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(12),n=a(2),o=a.n(n),r=a(18),s=a.n(r),i=(a(51),a(35)),d=(a(52),a(32)),p=a(76),j=a(77),u=a(82),b=function(e){return Object(c.jsx)(p.a,{children:Object(c.jsx)(j.a,{children:Object(c.jsx)(u.a,{primary:e.text,secondary:"A fazer..."})})})},l=a(78),f=a(81),m=a(80),O=a(79),h=d.a.initializeApp({apiKey:"AIzaSyCd20XFsp0feq4MXBpLXkshF3rvRUKgoG8",authDomain:"todoapp-b35c2.firebaseapp.com",projectId:"todoapp-b35c2",storageBucket:"todoapp-b35c2.appspot.com",messagingSenderId:"218729602191",appId:"1:218729602191:web:505004df446e633003e4fa",measurementId:"G-MRSWXE38PW"}).firestore(),x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),p=s[0],j=s[1];Object(n.useEffect)((function(){h.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return e.data().task})))}))}),[]);return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Todo List"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)(f.a,{children:"Escreve uma Tarefa"}),Object(c.jsx)(m.a,{value:p,onChange:function(e){return j(e.target.value)}})]}),Object(c.jsx)(O.a,{disabled:!p,type:"submit",onClick:function(e){h.collection("todos").add({task:p,timestamp:d.a.firestore.FieldValue.serverTimestamp()}),j(""),e.preventDefault()},variant:"contained",color:"primary",children:"Add Todo"})]}),Object(c.jsx)("ul",{children:a.map((function(e){return Object(c.jsx)(b,{text:e})}))})]})};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.e4a0140a.chunk.js.map