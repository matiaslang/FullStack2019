(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"Filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.persons,t=e.remove;return r.a.createElement(r.a.Fragment,null,n.map(function(e){return r.a.createElement("p",{key:e.name+e.id},e.name," ",e.number,r.a.createElement("button",{id:e.id,value:e.name,onClick:function(e){return t(e.target.value,e.target.id)}},"Delete"))}))},m=function(e){var n=e.newName,t=e.nameChange,a=e.newNumber,u=e.numberChange,o=e.submit;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:t})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},s=t(3),f=t.n(s),d="/api/persons/",h=function(){return f.a.get(d).then(function(e){return e.data})},b=function(e){return f.a.post(d,e).then(function(e){return e.data})},v=function(e,n){return f.a.put("".concat(d).concat(e),n).then(function(e){return e.data})},E=function(e){var n="".concat(d).concat(e);return f.a.delete(n).then(function(e){return e.data})},w=function(e){var n=e.message,t=e.errorNum;return null===n?null:(console.log("virheviesti on :",t),0===t?r.a.createElement("div",{className:"goodError"},n):r.a.createElement("div",{className:"badError"},n))},g=function(){var e=Object(a.useState)([""]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),f=s[0],d=s[1],g=Object(a.useState)(""),p=Object(c.a)(g,2),j=p[0],O=p[1],C=Object(a.useState)(""),N=Object(c.a)(C,2),y=N[0],k=N[1],S=Object(a.useState)(null),T=Object(c.a)(S,2),U=T[0],A=T[1],D=Object(a.useState)(0),F=Object(c.a)(D,2),I=F[0],J=F[1];Object(a.useEffect)(function(){h().then(function(e){u(e)})},[]),console.log("render",t.length,"persons");var L=""===y?t:t.filter(function(e){return e.name.toLowerCase().includes(y.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:U,errorNum:I}),r.a.createElement(l,{value:y,onChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(m,{newName:f,nameChange:function(e){d(e.target.value)},newNumber:j,numberChange:function(e){O(e.target.value)},submit:function(e){var n=0;if(t.forEach(function(e,a){if(e.name===f&&(n=1,window.confirm("".concat(f," is already added to phonebook, would you like to replace the old number with a new one?")))){var r={name:f,number:j,id:t.length+1};v(e.id,r).then(function(e){J(0),A("User ".concat(f," has now been updated")),setTimeout(function(){A(null)},3e3),h().then(function(e){u(e)})}).catch(function(e){J(1),A("Information of ".concat(f," has been already deleted from server")),setTimeout(function(){A(null)},5e3)})}}),e.preventDefault(),d(""),O(""),0===n){var a={name:f,number:j,id:t.length+1};b(a).then(function(e){J(0),A("User ".concat(f," has now been added")),setTimeout(function(){A(null)},3e3),u(t.concat(e)),d(""),O("")}).catch(function(e){J(1),A(e.response.data.error),setTimeout(function(){A(null)},5e3)})}n=0}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:L,remove:function(e,n){window.confirm("Are you sure you wish to delete user ".concat(e,"?"))&&E(n).then(function(n){J(0),A("User ".concat(e," has now been deleted")),setTimeout(function(){A(null)},5e3),h().then(function(e){u(e)})}).catch(function(e){J(1),A("There has been an error ".concat(e)),setTimeout(function(){A(null)},5e3)})}}))};t(37);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a0428c42.chunk.js.map