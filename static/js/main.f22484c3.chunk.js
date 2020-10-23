(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),i=(a(38),a(12)),s=a(4);function o(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",null,"React"),c.a.createElement("div",null,c.a.createElement("i",{className:"fas fa-bars"})))}var m=a(11),u=a(3),d=a.n(u);var E=function(){var e=Object(i.c)((function(e){return e.NG.headlinesNG})),t=Object(i.b)();return Object(n.useEffect)((function(){t((function(e){e({type:"BEGIN_FETCH_REQUEST"});var t="https://newsapi.org/v2/top-headlines?country=ng&apiKey=".concat("e6221e72e0ef4e0cb0b75aba9dbf4426");d.a.get(t).then((function(t){e({type:"FETCH_HEADLINES_NIGERIA",payload:t.data.articles})})).catch((function(t){return e(function(e){return{type:"ERRORS_FOR_NG",payload:e}}(t))}))}))}),[t]),console.log(e),c.a.createElement("div",{className:"headlines"},c.a.createElement("h1",{className:"title header-headlines"},"Headlines"),c.a.createElement("div",null,c.a.createElement("div",{className:"section-container"},e.map((function(e,t){return c.a.createElement("div",{key:t,className:"section"},c.a.createElement("div",{className:"img-section"},c.a.createElement("img",{className:"url-img",src:e.urlToImage,alt:e.urlToImage})),c.a.createElement("div",{className:"section-title"},c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("hr",null)),c.a.createElement("div",{className:"section-description"},c.a.createElement("p",null,e.description," ",c.a.createElement(m.b,{to:"/headlines/".concat(t)},"Read More")),c.a.createElement("hr",null)))})))))};var h=function(){var e=Object(i.c)((function(e){return e.US.headlinesUSA})),t=Object(i.b)();return Object(n.useEffect)((function(){t((function(e){e({type:"BEGIN_FETCH_REQUEST"});var t="https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("e6221e72e0ef4e0cb0b75aba9dbf4426");d.a.get(t).then((function(t){e({type:"FETCH_HEADLINES_USA",payload:t.data.articles})})).catch((function(t){return e(function(e){return{type:"ERRORS_FOR_USA",payload:e}}(t))}))}))}),[t]),c.a.createElement("div",{className:"headlines"},c.a.createElement("h1",{className:"title header-headlines"},"US politics"),c.a.createElement("div",null,c.a.createElement("div",{className:"section-container"},e.map((function(e,t){return c.a.createElement("div",{key:t,className:"section"},c.a.createElement("div",{className:"img-section"},c.a.createElement("img",{className:"url-img",src:e.urlToImage,alt:e.urlToImage})),c.a.createElement("div",{className:"section-title"},c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("hr",null)),c.a.createElement("div",{className:"section-description"},c.a.createElement("p",null,e.description," ",c.a.createElement(m.b,{to:"/us/".concat(t)},"Read More")),c.a.createElement("hr",null)))})))))};var v=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=".concat("e6221e72e0ef4e0cb0b75aba9dbf4426");d.a.get(e).then((function(e){l(e.data.articles)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"headlines"},c.a.createElement("h1",{className:"title header-headlines"},"Entertainment"),c.a.createElement("div",null,c.a.createElement("div",{className:"section-container"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"section"},c.a.createElement("div",{className:"img-section"},c.a.createElement("img",{className:"url-img",src:e.urlToImage,alt:e.urlToImage})),c.a.createElement("div",{className:"section-title"},c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("hr",null)),c.a.createElement("div",{className:"section-description"},c.a.createElement("p",null,e.description," ",c.a.createElement(m.b,{to:"/en/".concat(t)},"Read More")),c.a.createElement("hr",null)))})))))};var f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=".concat("e6221e72e0ef4e0cb0b75aba9dbf4426");d.a.get(e).then((function(e){l(e.data.articles)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"headlines"},c.a.createElement("h1",{className:"title header-headlines"},"Health"),c.a.createElement("div",null,c.a.createElement("div",{className:"section-container"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"section"},c.a.createElement("div",{className:"img-section"},c.a.createElement("img",{className:"url-img",src:e.urlToImage,alt:e.urlToImage})),c.a.createElement("div",{className:"section-title"},c.a.createElement("h1",{className:"title"},e.title),c.a.createElement("hr",null)),c.a.createElement("div",{className:"section-description"},c.a.createElement("p",null,e.description," ",c.a.createElement(m.b,{to:"/health/".concat(t)},"Read More")),c.a.createElement("hr",null)))})))))};var p=function(e){var t=e.match.params.contentID,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=ng&apiKey=".concat("5bfaf80040e24d87b38a79a85168ecf7");d.a.get(e).then((function(e){i(e.data.articles[Number(t)])})).catch((function(e){return console.log(e)}))}),[t]),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details-content"},c.a.createElement("div",null,c.a.createElement("h1",{className:"details-title"},r.title)),c.a.createElement("div",null,c.a.createElement("img",{src:r.urlToImage,alt:r.title})),c.a.createElement("div",null,c.a.createElement("small",null,r.author)),c.a.createElement("div",null,r.content)))};var N=function(e){var t=e.match.params.contentID,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("5bfaf80040e24d87b38a79a85168ecf7");d.a.get(e).then((function(e){i(e.data.articles[Number(t)])})).catch((function(e){return console.log(e)}))}),[t]),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details-content"},c.a.createElement("div",null,c.a.createElement("h1",{className:"details-title"},r.title)),c.a.createElement("div",null,c.a.createElement("img",{src:r.urlToImage,alt:r.title})),c.a.createElement("div",null,c.a.createElement("small",null,r.author)),c.a.createElement("div",null,r.content)))};var b=function(e){var t=e.match.params.contentID,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=".concat("5bfaf80040e24d87b38a79a85168ecf7");d.a.get(e).then((function(e){i(e.data.articles[Number(t)])})).catch((function(e){return console.log(e)}))}),[t]),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details-content"},c.a.createElement("div",null,c.a.createElement("h1",{className:"details-title"},r.title)),c.a.createElement("div",null,c.a.createElement("img",{src:r.urlToImage,alt:r.title})),c.a.createElement("div",null,c.a.createElement("small",null,r.author)),c.a.createElement("div",null,r.content)))};var g=function(e){var t=e.match.params.contentID,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){var e="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=".concat("5bfaf80040e24d87b38a79a85168ecf7");d.a.get(e).then((function(e){i(e.data.articles[Number(t)])})).catch((function(e){return console.log(e)}))}),[t]),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details-content"},c.a.createElement("div",null,c.a.createElement("h1",{className:"details-title"},r.title)),c.a.createElement("div",null,c.a.createElement("img",{src:r.urlToImage,alt:r.title})),c.a.createElement("div",null,c.a.createElement("small",null,r.author)),c.a.createElement("div",null,r.content)))},O=a(2);var y=function(e){var t=e.usaNews,a=e.ENNews,n=e.healthNews;return c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"link",onClick:function(){window.location="/"}},"Headlines"),c.a.createElement("div",{className:"link",onClick:t},"US Politics"),c.a.createElement("div",{className:"link",onClick:a},"Entertainment"),c.a.createElement("div",{className:"link",onClick:n},"Health"))};var j=function(){var e,t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],r=a[1];return e="usa"===l?c.a.createElement(h,null):"en"===l?c.a.createElement(v,null):"health"===l?c.a.createElement(f,null):c.a.createElement(E,null),c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(y,{usaNews:function(){r("usa")},ENNews:function(){r("en")},healthNews:function(){r("health")}}),c.a.createElement(m.a,null,c.a.createElement(O.a,{exact:!0,path:"/",render:function(){return e}}),c.a.createElement(O.a,{exact:!0,path:"/headlines/:contentID",component:p}),c.a.createElement(O.a,{exact:!0,path:"/us/:contentID",component:N}),c.a.createElement(O.a,{exact:!0,path:"/en/:contentID",component:b}),c.a.createElement(O.a,{exact:!0,path:"/health/:contentID",component:g})))},I=a(13),S=a(33),w=a(6),R={isLoading:!1,headlinesNG:[],errors:""},T={isLoading:!1,headlinesUSA:[],errors:""},_=Object(I.c)({NG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BEGIN_FETCH_REQUEST":return Object(w.a)(Object(w.a)({},e),{},{isLoading:!0});case"FETCH_HEADLINES_NIGERIA":return Object(w.a)(Object(w.a)({},e),{},{isLoading:!1,headlinesNG:t.payload});case"ERRORS_FOR_NG":return Object(w.a)(Object(w.a)({},e),{},{errors:t.payload});default:return e}},US:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BEGIN_FETCH_REQUEST":return Object(w.a)(Object(w.a)({},e),{},{isLoading:!0});case"FETCH_HEADLINES_USA":return Object(w.a)(Object(w.a)({},e),{},{isLoading:!1,headlinesUSA:t.payload});case"ERRORS_FOR_USA":return Object(w.a)(Object(w.a)({},e),{},{errors:t.payload});default:return e}}}),k=[S.a],H=Object(I.d)(_,I.a.apply(void 0,k));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(i.a,{store:H},c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.f22484c3.chunk.js.map