(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(4),i=n.n(r),a=(n(10),n(2)),s=c.a.createContext(),u=n(0);var l=function(e){var t=e.todo,n=e.index,c=e.onChange,r=Object(o.useContext)(s).removeTodo,i=[];return t.completed&&i.push("done"),Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{className:i.join(" "),children:[Object(u.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return c(t.id)}}),Object(u.jsx)("strong",{children:n+1}),"\xa0",t.title]}),Object(u.jsx)("button",{className:"rm",onClick:r.bind(null,t.id),children:"\xd7"})]})};var d=function(e){return Object(u.jsx)("ul",{children:e.todos.map((function(t,n){return Object(u.jsx)(l,{todo:t,index:n,onChange:e.onToggle},t.id)}))})},j=n(5);var h=function(e){var t=e.onCreate,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(o.useState)(e),n=Object(a.a)(t,2),c=n[0],r=n[1];return{bind:{value:c,onChange:function(e){return r(e.target.value)}},clear:function(){return r("")},value:function(){return c}}}("");return Object(u.jsxs)("form",{style:{marginBottom:"1rem"},onSubmit:function(e){e.preventDefault(),n.value().trim()&&(t(n.value()),n.clear())},children:[Object(u.jsx)("input",Object(j.a)({},n.bind)),Object(u.jsx)("button",{type:"submit",className:"addBtn",children:"Add"})]})},b=function(){return Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(u.jsx)("div",{className:"lds-dual-ring"})})};var f=function(){var e=c.a.useState([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=c.a.useState(!0),l=Object(a.a)(i,2),j=l[0],f=l[1];Object(o.useEffect)((function(){var e=parseInt(prompt("How todos you want see"),10);fetch("https://jsonplaceholder.typicode.com/todos?_limit=".concat(e)).then((function(e){return e.json()})).then((function(e){setTimeout((function(){r(e),f(!1)}),1500)}))}),[]);var m=n.filter((function(e){return!1===e.completed})).length;return Object(u.jsx)(s.Provider,{value:{removeTodo:function(e){r(n.filter((function(t){return t.id!==e})))}},children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)("h1",{children:"My To-Do List "}),n.length?Object(u.jsxs)("h2",{children:["Number of To-Dos are not completed: ",m]}):j?null:Object(u.jsx)("h2",{children:"No To-Do!"}),Object(u.jsx)(h,{onCreate:function(e){r(n.concat([{title:e,id:Date.now(),completed:!1}]))}}),j&&Object(u.jsx)(b,{}),n.length?Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{todos:n,onToggle:function(e){r(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}),Object(u.jsx)("button",{onClick:function(e){r(n.filter((function(e){return""})))},children:"Clear"})]}):null]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(u.jsx)(f,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.44e3b021.chunk.js.map