(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(5),s=n(1),l=n(13),u=(n(25),n(3)),d=n(4),h=n(7),b=n(6),f=(n(26),function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{className:"br-100 bg-lightest-blue",src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robot",width:"70%"}),o.a.createElement("div",null,o.a.createElement("h3",null,n),o.a.createElement("p",null,r)))}),p=function(e){var t=e.robots,n=t.map((function(e,n){return o.a.createElement(f,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return o.a.createElement("div",null,n)},g=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue shadow-5 br2",type:"text",placeholder:"Search Robots",onChange:t}))},m=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},E=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",{className:"tc f1 light-blue"},"Oop! Unable to process and proceed"):this.props.children}}]),n}(r.Component),v=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearch,n=e.searchField,r=e.robots,a=e.isPending,i=e.error,c=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return i&&!a?o.a.createElement("h1",{className:"tc f2 light-blue"},i.message):a?o.a.createElement("h1",{className:"tc f2 light-blue"},"Loading..."):r?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2 light-blue"},"RoboFriends"),o.a.createElement(g,{searchChange:t}),o.a.createElement(m,null,o.a.createElement(E,null,o.a.createElement(p,{robots:c})))):void 0}}]),n}(r.Component),w=Object(c.b)((function(e){var t=e.searchRobots.searchField,n=e.requestRobots;return{searchField:t,robots:n.robots,isPending:n.isPending,error:n.error}}),(function(e){return{onSearch:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING",payload:"PENDING..."}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(v),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(27);var y={searchField:""},R={robots:[],isPending:!1,error:""},j=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),C=Object(s.d)(j,Object(s.a)(l.a));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:C},o.a.createElement(w,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.bc63b646.chunk.js.map