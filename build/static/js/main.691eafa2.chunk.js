(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),s=n(16),o=n.n(s),i=n(10),l=n(14),j=n(11),u=n(36),p=n(37),d=n(5),O={loading:!1,data:[],errorMsg:"",count:0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_LIST_LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_LIST_FAIL":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_LIST_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,data:t.payload,errorMsg:"",count:t.payload.count});default:return e}},m=n(18),h={loading:!1,data:{},errorMsg:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POKEMON_MULTIPLE_LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:!0,errorMsg:""});case"POKEMON_MULTIPLE_FAIL":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorMsg:"unable to get pokemon"});case"POKEMON_MULTIPLE_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,errorMsg:"",data:Object(m.a)({},t.pokemonName,t.payload)});default:return e}},x=n(12),v=n.n(x),g=n(19),L=n(20),k=n.n(L),y="CHANGE_FILTER",N=function(){return function(){var e=Object(g.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"POKEMON_LIST_LOADING"}),16,e.next=5,k.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(16));case 5:return n=e.sent,e.next=8,Promise.all(n.data.results.map(function(){var e=Object(g.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(t.url);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:r=e.sent,t({type:"POKEMON_LIST_SUCCESS",payload:r}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:"POKEMON_LIST_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.filter;default:return e}},_=Object(j.combineReducers)({PokemonList:b,Pokemon:f,filter:M}),E=Object(j.createStore)(_,Object(u.composeWithDevTools)(Object(j.applyMiddleware)(p.a))),P=n(3),I=function(e){var t=e.pokemon;return Object(r.jsx)("div",{className:"poke  m-2 card p-5",children:Object(r.jsxs)("div",{className:"pokemon-item",children:[Object(r.jsx)("p",{className:"font-weight-bold text-capitalize par",children:t.name}),Object(r.jsx)(l.b,{to:"/pokemon/".concat(t.name),className:"link",children:"View"})]})})},S=n(39),w=["normal","fire","water","grass","poison","flying","bug"],T=function(e){var t=e.changePokemon;return Object(r.jsx)("div",{children:Object(r.jsx)("select",{name:"category",onChange:t,children:["ALL"].concat(Object(S.a)(w)).map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})})},A=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.PokemonList.data})),n=Object(i.c)((function(e){return e.filter}));c.a.useEffect((function(){e(N())}),[]);return null===t?Object(r.jsx)("h1",{children:"Loading...."}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(r.jsx)(T,{changePokemon:function(t){var n=t.target;e(function(e){return{type:y,filter:e}}(n.value))}})}),Object(r.jsx)("div",{className:"list-wrapper",children:("ALL"===n?t:t.filter((function(e){for(var t=e.types,r=0;r<t.length;r+=1)if(t[r].type.name===n)return!0;return!1}))).map((function(e){return Object(r.jsx)(I,{pokemon:e},e.id)}))})]})},K=n(38),C=n.n(K),U=function(e){var t=e.match.params.pokemon,n=Object(i.b)(),a=Object(i.c)((function(e){return e.Pokemon}));c.a.useEffect((function(){var e;n((e=t,function(){var t=Object(g.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:"POKEMON_MULTIPLE_LOADING"}),t.next=4,k.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:r=t.sent,n({type:"POKEMON_MULTIPLE_SUCCESS",payload:r.data,pokemonName:e}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:"POKEMON_MULTIPLE_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[]);return Object(r.jsxs)("div",{className:"card d-flex",children:[Object(r.jsx)("h1",{children:t}),function(){if(!C.a.isEmpty(a.data[t])){var e=a.data[t];return Object(r.jsxs)("div",{"data-testid":"pokemon",className:"pokemon-wrapper card d-flex flex-row w-50 ml-3",children:[Object(r.jsxs)("div",{className:"images",children:[Object(r.jsx)("h1",{children:"Sprites"}),Object(r.jsx)("img",{src:e.sprites.front_default,alt:""}),Object(r.jsx)("img",{src:e.sprites.back_default,alt:""}),Object(r.jsx)("img",{src:e.sprites.front_shiny,alt:""}),Object(r.jsx)("img",{src:e.sprites.back_shiny,alt:""})]}),Object(r.jsxs)("div",{className:"item ml-5",children:[Object(r.jsx)("h1",{children:"Stats"}),e.stats.map((function(e){return Object(r.jsxs)("p",{children:[e.stat.name," ",e.base_stat]},e.stat.name)}))]}),Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)("h1",{children:"Abilities"}),e.abilities.map((function(e){return Object(r.jsx)("p",{children:e.ability.name},e.ability.name)}))]})]})}return a.loading?Object(r.jsx)("p",{children:"Loading..."}):""!==a.errorMsg?Object(r.jsx)("p",{children:a.errorMsg}):Object(r.jsx)("p",{children:"error getting pokemon"})}()]})};var D=function(){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("nav",{className:"nav-content d-flex justify-content-center",children:Object(r.jsx)(l.c,{to:"/",children:"Home"})}),Object(r.jsxs)(P.d,{children:[Object(r.jsx)(P.b,{path:"/",exact:!0,component:A}),Object(r.jsx)(P.b,{path:"/pokemon/:pokemon",exact:!0,component:U}),Object(r.jsx)(P.a,{to:"/"})]})]})};n(69),n(70);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:E,children:Object(r.jsx)(l.a,{children:Object(r.jsx)(D,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.691eafa2.chunk.js.map