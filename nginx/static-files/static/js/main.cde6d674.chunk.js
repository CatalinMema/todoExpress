(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{31:function(t,e,n){},4:function(t,e){t.exports={TITLE:"What's the Plan for Today?",ADD_TODO:"Add todo",UPDATE:"Update",UPDATE_TODO:"Update todo",SEARCH_TODO:"Search todo",SKIPS:8,TODO_NOT_FOUND:"Todo is not found!",NOTHING_PLANNED:"Nothing planned!",ADD_SOME:"Add some todos!",PREV:"Prev",NEXT:"Next",DATE:"Date",ALL:"All",SHOW_ALL:"Show All",TODAY:"Today"}},52:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(22),r=n.n(o),s=(n(31),n(7)),d=n(3),i=n.n(d),u=n(5),l=n(6),j=n(13),O=n(4),b=n(26),f=n(2),h=function(t){var e=t.edit,n=t.onChangeDate,a=t.sendData,o=t.dateOfTodo,r=Object(c.useState)(o),s=Object(l.a)(r,2),d=s[0],i=s[1],u=Object(b.a)(),h=u.handleSubmit,x=u.register,p=u.reset,v=u.formState.errors;Object(c.useEffect)((function(){i(o)}),[o]);var m=function(t){a({text:t.text_todo,date:d,done:!1}),p()};return Object(f.jsx)("form",{className:"todo-form",children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",Object(j.a)({placeholder:v.text_todo?"Text is required":O.UPDATE_TODO,name:"text_todo",className:"todo-input-update edit"},x("text_todo",{required:!0}))),Object(f.jsx)("button",{onClick:h(m),className:"todo-button edit",children:O.UPDATE})]}):Object(f.jsxs)("div",{className:"add_todo_container",children:[Object(f.jsx)("div",{children:Object(f.jsx)("textarea",Object(j.a)({placeholder:v.text_todo?"Text is required":O.ADD_TODO,name:"text_todo",className:"todo-input",maxLength:"81"},x("text_todo",{required:!0})))}),Object(f.jsxs)("div",{className:"todo_buttons",children:[Object(f.jsx)("input",{type:"date",className:"date_input",value:d,onChange:function(t){i(t.target.value),n(t.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:h(m),className:"todo-button",children:O.ADD_TODO})]})]})})},x=n(23),p=n.n(x).a.create({baseURL:"http://localhost:80/backend"}),v=n(24),m=n(25),T=function(t){var e=t.search,n=t.todos,c=t.removeTodo,a=t.setEdit,o=t.completeTodo,r=t.dateOfTodo,s=null===n||void 0===n?void 0:n.map((function(t,n){return Object(f.jsxs)("div",{className:t.done?"todo-row complete":"todo-row",children:[Object(f.jsx)("div",{className:"todo_text",onClick:function(){return o(t._id,t.done)},children:t.text.length>54?Object(f.jsx)("h4",{className:"txt_todo",children:t.text}):Object(f.jsxs)("div",{className:"todo_text_container",children:[Object(f.jsxs)("h4",{className:t.done?"completeLine":null,children:[t.text," "]}),e||r===O.ALL?Object(f.jsxs)(f.Fragment,{children:[" ",t.date.slice(5,10).split("-").reverse().join("/")]}):Object(f.jsx)(f.Fragment,{})]})},t._id),Object(f.jsxs)("div",{className:"icons",children:[Object(f.jsx)(v.a,{onClick:function(){return c(t._id)},className:"delete-icon"}),Object(f.jsx)(m.a,{onClick:function(){return a({id:t._id,value:t.text})},className:"edit-icon"})]})]},n)}));return Object(f.jsx)("div",{children:s})},N=function(t){var e=t.input,n=t.handleChange,a=t.searchTodos,o=t.removeTodo,r=t.setEdit,s=t.completeTodoSearch,d=t.dateOfTodo,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t;null===i||void 0===i||null===(t=i.current)||void 0===t||t.focus()}),[e]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:O.SEARCH_TODO}),Object(f.jsx)("form",{className:"todo-form",children:Object(f.jsx)("input",{autoComplete:"off",placeholder:O.SEARCH_TODO,value:e,onChange:n,name:"text",ref:i,className:"todo-input-search-page"})}),a.length>0?Object(f.jsx)(T,{search:!0,todos:a,removeTodo:o,setEdit:r,completeTodo:s,dateOfTodo:d}):Object(f.jsx)("div",{className:"not_found",children:Object(f.jsx)("p",{children:O.TODO_NOT_FOUND})})]})},_=function(){var t=new Date,e=t.getDate(),n=t.getMonth(),a=t.getFullYear(),o=void 0;o=n<10?a+"-0"+(n+1)+"-"+e:a+"-"+(n+1)+"-"+e;var r=Object(c.useState)([]),d=Object(l.a)(r,2),j=d[0],b=d[1],x=Object(c.useState)(0),v=Object(l.a)(x,2),m=v[0],_=v[1],g=Object(c.useState)(0),D=Object(l.a)(g,2),S=D[0],E=D[1],A=Object(c.useState)(""),L=Object(l.a)(A,2),w=L[0],C=L[1],k=Object(c.useState)([]),P=Object(l.a)(k,2),y=P[0],R=P[1],I=Object(c.useState)(o),U=Object(l.a)(I,2),F=U[0],H=U[1],K=Object(c.useState)(!1),V=Object(l.a)(K,2),q=V[0],M=V[1],X=Object(c.useState)({id:null,value:""}),W=Object(l.a)(X,2),Y=W[0],G=W[1],J=Object(c.useRef)(null);Object(c.useEffect)((function(){w&&function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos/search/".concat(w,"/").concat(m));case 2:e=t.sent,R(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[w,m]);var $=function(){var t=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos/search/".concat(e,"/").concat(m));case 2:n=t.sent,R(n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(t){_(0),H(t)},z=function(t){C(t.target.value),t.target.value?_(0):R([])};Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos/".concat(F));case 2:e=t.sent,E(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos");case 2:e=t.sent,E(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();F!==O.ALL?t():F===O.ALL&&e()}),[F,j.length,m,q]),Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos/".concat(F,"/").concat(m));case 2:e=t.sent,b(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get("/todos/page/".concat(m));case 2:e=t.sent,b(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();F!==O.ALL?t():F===O.ALL&&e()}),[j.length,F,m,q]);var Q=function(t,e){e.text&&!/^\s*$/.test(e.text)&&(p.put("/todos/".concat(t,"/").concat(e.text)),M(!q),w&&$(w))},Z=function(){var t=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(s.a)(j).filter((function(t){return t._id!==e})),t.next=3,p.delete("/todos/".concat(e));case 3:w&&$(w),S.length>=O.SKIPS&&S.length-1===m&&_(m-O.SKIPS),b(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),tt=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=j.map((function(t){return t._id===e&&(t.done=!t.done,n=t.done),t})),t.next=3,p.put("/completed/".concat(e,"/").concat(n));case 3:b(c);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),et=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=y.map((function(t){return t._id===e&&(t.done=!t.done,n=t.done),t})),t.next=3,p.put("/completed/".concat(e,"/").concat(n));case 3:b(c),R(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),nt=function(t){t===O.NEXT?_(m+O.SKIPS):t===O.PREV&&_(m-O.SKIPS)};return Y.id?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:O.UPDATE_TODO}),Object(f.jsx)(h,{onChangeDate:B,dateOfTodo:F,edit:Y,sendData:function(t){Q(Y.id,t),G({id:null,value:""})}})]}):w?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(N,{input:w,handleChange:z,searchTodos:y,removeTodo:Z,setEdit:G,completeTodoSearch:et,dateOfTodo:F}),Object(f.jsx)("div",{className:"navigation_buttons"})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:O.TITLE}),Object(f.jsx)(h,{dateOfTodo:F,onChangeDate:B,sendData:function(t){t.text&&!/^\s*$/.test(t.text)&&(p.post("/todos",{text:t.text,date:t.date,done:t.done}),M(!q))}}),Object(f.jsxs)("div",{className:"search_reset_container",children:[Object(f.jsx)("div",{children:Object(f.jsx)("input",{autoComplete:"off",placeholder:O.SEARCH_TODO,value:w,onChange:z,name:"text",ref:J,className:"todo-input-search"})}),Object(f.jsx)("div",{children:F!==O.ALL?Object(f.jsx)("button",{onClick:function(){H(O.ALL),_(0)},className:"todo-button",children:O.SHOW_ALL}):Object(f.jsx)("button",{onClick:function(){H(o),_(0)},className:"todo-button",children:O.TODAY})})]}),Object(f.jsx)("div",{className:"todos_container",children:0===j.length?Object(f.jsxs)("div",{className:"nothing_planned",children:[Object(f.jsx)("h1",{children:O.NOTHING_PLANNED}),Object(f.jsx)("p",{children:O.ADD_SOME})]}):Object(f.jsx)(T,{todos:j,removeTodo:Z,setEdit:G,completeTodo:tt,dateOfTodo:F})}),Object(f.jsxs)("div",{className:"navigation_buttons",children:[m>=O.SKIPS?Object(f.jsx)("button",{className:"todo-button prev",onClick:function(){return nt(O.PREV)},children:O.PREV}):Object(f.jsx)("button",{className:"todo-button prev opacity0",onClick:function(){return nt(O.PREV)},children:O.PREV}),m<S.length-O.SKIPS?Object(f.jsx)("button",{onClick:function(){return nt(O.NEXT)},className:"todo-button next",children:O.NEXT}):null]})]})};var g=function(){return Object(f.jsx)("div",{className:"todo-app",children:Object(f.jsx)(_,{})})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.cde6d674.chunk.js.map