(this["webpackJsonpmy-react-model"]=this["webpackJsonpmy-react-model"]||[]).push([[0],{24:function(e,c,t){},25:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),r=t(18),s=t.n(r),i=(t(24),t(10)),o=t(13),l=t(16),j=(t(25),t(2)),d=function(){return fetch("//rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,specie:e.species,planet:e.location.name,episode:e.episode,status:e.status}}))}))},h=(t(26),t(27),t(7)),m=t(0),b=function(e){var c=e.character.status;return c="Alive"===c?"fas fa-heartbeat":"unknown"===c?"fas fa-question":"fas fa-skull-crossbones",Object(m.jsx)(h.b,{to:"/character/".concat(e.character.id),children:Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("img",{src:e.character.image,title:"Imagen de ".concat(e.character.name),alt:"Imagen de ".concat(e.character.name),className:"card__img"}),Object(m.jsx)("h3",{className:"card__name",children:e.character.name}),Object(m.jsxs)("div",{className:"card__text",children:[Object(m.jsx)("i",{className:c}),Object(m.jsx)("p",{children:e.character.specie})]})]},e.character.id)})};t(34);var u=function(){return Object(m.jsxs)("div",{className:"notFound-wrapper",children:[Object(m.jsxs)(h.b,{to:"/",className:"notFound-wrapper__comeback",children:[Object(m.jsx)("i",{className:"fas fa-rocket icon"}),"Volver"]}),Object(m.jsxs)("section",{className:"notFound",children:[Object(m.jsx)("h2",{className:"notFound__title",children:"\xbfA qui\xe9n dices que buscas?"}),Object(m.jsx)("div",{className:"notFound__error",children:"404"}),Object(m.jsx)("p",{className:"notFound__text",children:"No encuentro un personaje con ese nombre en todo el Planeta Tierra del Universo C-137"})]})]})};var f=function(e){var c=e.filteredCharacters.map((function(e){return Object(m.jsx)(b,{character:e},e.id)}));return 0===c.length?Object(m.jsx)(u,{}):Object(m.jsx)("section",{className:"CharacterSection",children:Object(m.jsx)("ul",{className:"CharacterList",children:c})})},O=(t(35),function(e){var c=function(c){e.handleFilter(c.target.value,c.target.name)};return Object(m.jsxs)("form",{onChange:function(e){e.preventDefault()},className:"form",children:[Object(m.jsx)("label",{htmlFor:"name",className:"form__label",children:"Encuentra al personaje"}),Object(m.jsx)("input",{type:"text",name:"name",id:"name",value:e.filter.name,onChange:c,className:"form__input"}),Object(m.jsx)("label",{htmlFor:"specie",className:"form__label",children:"Busca por especie"}),Object(m.jsxs)("select",{type:"text",name:"specie",id:"specie",value:e.filter.specie,onChange:c,className:"form__input",children:[Object(m.jsx)("option",{children:"Todas"}),Object(m.jsx)("option",{children:"Human"}),Object(m.jsx)("option",{children:"Alien"})]}),Object(m.jsx)("label",{htmlFor:"name",className:"form__label",children:"Ordena alfabeticamente"}),Object(m.jsxs)("select",{type:"text",name:"sort",id:"sort",value:e.filter.sort,onChange:c,className:"form__input",children:[Object(m.jsx)("option",{children:"No"}),Object(m.jsx)("option",{children:"S\xed"})]})]})}),x=(t(36),t.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png");t(37);var p=function(){return Object(m.jsx)("header",{className:"header",children:Object(m.jsx)(h.b,{to:"/",className:"header",children:Object(m.jsx)("img",{src:x,title:"Rick and Morty logo",alt:"Rick and Morty logo",className:"header__logo"})})})};t(38);var _=function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("small",{className:"footer__small",children:[Object(m.jsx)("i",{className:"fab fa-github-alt footer__icon"}),Object(m.jsx)("span",{className:"footer__name",children:"@mermfb"}),Object(m.jsx)("span",{children:"2021"})]})})};var N=function(e){return void 0===e.character?Object(m.jsx)(u,{}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)("div",{className:"characterInfo-wrapper",children:[Object(m.jsxs)(h.b,{to:"/",className:"comeback",children:[Object(m.jsx)("i",{className:"fas fa-rocket icon"}),"Volver"]}),Object(m.jsxs)("div",{className:"characterInfo",children:[Object(m.jsx)("img",{className:"characterInfo__img",src:e.character.image,alt:e.character.name}),Object(m.jsxs)("section",{className:"characterInfo__text",children:[Object(m.jsx)("h2",{children:e.character.name}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Especie: ",e.character.specie]}),Object(m.jsxs)("li",{children:["Planeta: ",e.character.planet]}),Object(m.jsxs)("li",{children:["Estado: ",e.character.status]}),Object(m.jsxs)("li",{children:["Episodios: ",e.character.episode.length]})]})]})]})]}),Object(m.jsx)(_,{})]})};var v=function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],n=c[1],r=Object(a.useState)({name:"",specie:"Todas",sort:"No"}),s=Object(l.a)(r,2),h=s[0],b=s[1];Object(a.useEffect)((function(){d().then((function(e){return n(e)}))}),[]);var u=t.filter((function(e){return e.name.toUpperCase().includes(h.name.toUpperCase())})).filter((function(e){return"Todas"===h.specie||e.specie===h.specie}));"No"===h.sort?t.sort((function(e,c){return e.id-c.id})):"S\xed"===h.sort&&t.sort((function(e,c){return h.sort?e.name>c.name?1:e.name<c.name?-1:void 0:0}));var x=function(e){var c=e.match.params.characterId,a=t.find((function(e){return e.id.toString()===c}));return Object(m.jsx)(N,{character:a})};return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)(j.c,{children:[Object(m.jsxs)(j.a,{exact:!0,path:"/",children:[Object(m.jsx)(p,{}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(O,{handleFilter:function(e,c){b(Object(o.a)(Object(o.a)({},h),{},Object(i.a)({},c,e)))},filter:h}),Object(m.jsx)(f,{filteredCharacters:u,render:x})]}),Object(m.jsx)(_,{})]}),Object(m.jsx)(j.a,{path:"/character/:characterId",render:x})]})})})};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(v,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.dd00c017.chunk.js.map