(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n.n(c),s=n(3),a=n.n(s),i=(n(13),n(4)),u=n(5),h=n(7),l=n(6),b=(n(14),n(15),function(e){var t=e.placeholder,n=e.searchHandler;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),j=(n(16),n(17),function(e){var t=e.robot;return Object(r.jsxs)("div",{className:"robot",children:[Object(r.jsx)("img",{alt:t.name,src:"https://robohash.org/"+t.id+"?size=180x180"}),Object(r.jsx)("p",{children:t.username}),Object(r.jsx)("p",{children:t.email})]})}),d=function(e){var t=e.robots;return Object(r.jsx)("div",{className:"robot-list",children:t.map((function(e){return Object(r.jsx)(j,{robot:e},e.id)}))})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={search:"",robots:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"searchHandler",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.search,c=t.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{placeholder:"Search Robot !",searchHandler:this.searchHandler.bind(this)}),Object(r.jsx)(d,{robots:c})]})}}]),n}(o.a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.17fa96f5.chunk.js.map