(function(e){function t(t){for(var n,i,l=t[0],o=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},1:function(e,t){},"1f2a":function(e,t,a){},2:function(e,t){},"34bd":function(e,t,a){"use strict";var n=a("1f2a"),s=a.n(n);s.a},"3d70":function(e,t,a){"use strict";var n=a("79df"),s=a.n(n);s.a},"57d8":function(e,t,a){"use strict";var n=a("e82b"),s=a.n(n);s.a},"79df":function(e,t,a){},"8f59":function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("8f59"),s=a.n(n);s.a},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("ce5b"),r=a.n(s),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],o=a("2877"),c={},u=Object(o["a"])(c,i,l,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,p=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{staticClass:"full-height",attrs:{id:"app"}},[e.joined?e._e():a("h2",[e._v("Planning Poker")]),e.joined?e._e():a("login",{attrs:{join:e.joinGroup,player:e.player}}),e.joined?a("poker-table",{attrs:{player:e.player,messages:e.messages,"players-online":e.playersOnline,"play-card":e.playCard,"is-cards-revealed":e.isCardsRevealed,"show-cards":e.showCards,"new-game":e.newGame,"games-played":e.gamesPlayed}}):e._e()],1)])},h=[],f=(a("7f7f"),a("ac6a"),a("f3e2"),a("c665")),b=a("dc0a"),y=a("aa9a"),m=a("d328"),g=a("11d9"),_=a("9ab4"),w=a("1a9a"),k=a("60a3"),O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-content",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":"",md6:"","offset-md3":""}},[a("v-card",{staticClass:"grey lighten-4"},[a("v-card-text",[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{id:"playerName",rules:[function(){return!!e.playerName||"This field is required"}],name:"playerName",label:"Enter your name here"},model:{value:e.playerName,callback:function(t){e.playerName=t},expression:"playerName"}}),a("v-text-field",{attrs:{id:"groupId",name:"groupId",label:"GroupId"},model:{value:e.groupId,callback:function(t){e.groupId=t},expression:"groupId"}}),a("v-btn",{staticClass:"indigo indigo--text",attrs:{outline:"",required:""},on:{click:function(t){e.submit()}}},[e._v("Join")])],1)],1)],1)],1)],1)],1)],1)},j=[],C=(a("386d"),function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.groupId=e.player.groupId||"",e.valid=!1,e.playerName="",e}return Object(y["a"])(t,[{key:"mounted",value:function(){this.groupId=new URLSearchParams(window.location.search).get("groupId")}},{key:"submit",value:function(){this.valid&&this.join(this.playerName,this.groupId)}}]),Object(b["a"])(t,e),t}(k["c"]));C=_["a"]([Object(k["a"])({props:{join:Function,player:Object}})],C);var x=C,S=x,G=Object(o["a"])(S,O,j,!1,null,null,null);G.options.__file="Login.vue";var N=G.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pp-grid"},[a("div",{staticClass:"pp-header u-ta-l"},[a("button",{staticClass:"pp-header-menu-toggler",attrs:{type:"button"},on:{click:e.ToggleSidebar}},[a("i",{staticClass:"material-icons"},[e._v("menu")])])]),a("v-flex",{staticClass:"grey lighten-4 pp-sidebar",class:{visible:e.showSidebar}},[a("button",{staticClass:"pp-sidebar-close",attrs:{type:"button"},on:{click:e.ToggleSidebar}},[a("i",{staticClass:"material-icons"},[e._v("close")])]),a("h3",{staticClass:"h3"},[e._v(e._s(e.player.groupId))]),a("players-online",{attrs:{user:e.player,players:e.playersOnline}}),a("div",{staticClass:"u-mt-auto"},[a("p",{staticClass:"text-xs-center mt-5"},[e._v("\n        Made by "),a("a",{attrs:{href:"https://www.abrickis.me",target:"_blank",title:"Andrejs Abrickis | abrickis.me"}},[e._v("Andrejs Abrickis")])]),a("p",{staticClass:"text-xs-center"},[a("a",{attrs:{href:"https://github.com/AndrejsAbrickis/signalR-vuejs-demo",target:"_blank"}},[a("svg",{attrs:{width:"32px","aria-labelledby":"simpleicons-github-icon",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[a("title",{attrs:{id:"simpleicons-github-icon"}},[e._v("GitHub icon")]),a("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])])])])],1),a("div",{staticClass:"u-ps-16 u-d-flex u-fd-col"},[e.gamesPlayed.length>0?a("games-stats",{attrs:{"games-played":e.gamesPlayed,players:e.playersOnline}}):e._e(),a("v-container",{staticClass:"u-pb-16",attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[e.messages.length>0?a("v-flex",{attrs:{xs12:""}},[a("h3",[e._v("Played cards")])]):e._e(),e._l(e.messages,function(t){return a("v-flex",{key:t.connectionId,attrs:{xs4:""}},[a("v-card",{staticClass:"lime lighten-3"},[a("v-card-text",[e._v("\n              "+e._s(e.GetName(t.connectionId))+"\n              "),a("h4",{directives:[{name:"show",rawName:"v-show",value:e.isCardsRevealed,expression:"isCardsRevealed"}]},[e._v(e._s(t.message))])])],1)],1)}),a("v-flex",{attrs:{xs10:"","offset-xs-1":""}},[!e.isCardsRevealed&&e.messages.length>0?a("v-btn",{attrs:{color:"warning",dark:""},on:{click:function(t){e.showCards()}}},[e._v("Show cards")]):e._e(),e.isCardsRevealed?a("v-btn",{attrs:{color:"warning",dark:""},on:{click:function(t){e.newGame()}}},[e._v("New game")]):e._e()],1)],2)],1),a("cards-deck",{staticClass:"u-mt-auto",attrs:{"play-card":e.playCard}})],1)],1)},E=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.hasVoted?e._e():a("div",[a("h3",[e._v("Play card")]),a("v-container",{staticClass:"u-pb-16",attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.cards,function(t){return a("v-flex",{key:t.value,attrs:{xs4:"",sm3:"",md2:""}},[a("v-card",{staticClass:"purple white--text"},[a("v-card-text",{on:{click:function(a){e.vote(t.value)}}},[a("h3",[e._v(e._s(t.label))])])],1)],1)}))],1)],1)},U=[],A=a("65d9"),H=a.n(A),J=new n["default"],R={NEW_GAME_STARTED:"NEW_GAME_STARTED"},T={Connected:"Connected",Disconnected:"Disconnected",JoinGroup:"JoinGroup",JoinUser:"JoinUser",LeaveGroup:"LeaveGroup",NewGame:"NewGame",Send:"Send",ShowCards:"ShowCards",UpdateUser:"UpdateUser",UsersJoined:"UsersJoined"},$=[{value:0,label:"0"},{value:.5,label:"1/2"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:5,label:"5"},{value:8,label:"8"},{value:13,label:"13"},{value:20,label:"20"},{value:40,label:"40"},{value:80,label:"80"},{value:999999,label:"?"}],D=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.cards=$,e.hasVoted=!1,e}return Object(y["a"])(t,[{key:"mounted",value:function(){J.$on(R.NEW_GAME_STARTED,this.newGame)}},{key:"vote",value:function(e){this.hasVoted=!0,this.playCard(e)}},{key:"newGame",value:function(){this.hasVoted=!1}}]),Object(b["a"])(t,e),t}(n["default"]);D=_["a"]([H()({props:{playCard:Function}})],D);var M=D,F=M,L=Object(o["a"])(F,I,U,!1,null,null,null);L.options.__file="CardsDeck.vue";var V=L.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Games stats")]),a("v-container",{attrs:{fluid:"","grid-list-sm":""}},e._l(e.gamesPlayed,function(t,n){return a("v-layout",{key:n,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs1:""}},[a("span",{staticClass:"index"},[e._v(e._s(n+1)+".")])]),a("v-flex",{staticClass:"u-ta-l",attrs:{xs11:""}},e._l(t,function(t,n){return a("v-chip",{key:n,attrs:{outline:"",color:"green"}},[a("v-avatar",{staticClass:"green darken-4"},[e._v(e._s(t.message))]),e.players[t.connectionId]?a("span",[e._v(e._s(e.players[t.connectionId].Name))]):a("span",[e._v(e._s(t.connectionId))])],1)}))],1)}))],1)},q=[],B=function(e){function t(){return Object(f["a"])(this,t),Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(b["a"])(t,e),t}(n["default"]);_["a"]([Object(k["b"])()],B.prototype,"gamesPlayed",void 0),_["a"]([Object(k["b"])()],B.prototype,"players",void 0),B=_["a"]([Object(k["a"])({})],B);var K=B,z=K,Q=(a("34bd"),Object(o["a"])(z,W,q,!1,null,null,null));Q.options.__file="GamesStats.vue";var X=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"u-ta-l"},[a("h4",[e._v("Online ("+e._s(Object.keys(e.players).length)+")")]),a("div",[a("v-chip",{staticClass:"grey lighten-2"},[a("v-avatar",{staticClass:"orange"},[e._v(e._s(e.user.name.charAt(0)))]),e._v("\n      "+e._s(e.user.name)+"\n    ")],1)],1),e._l(e.playersOnline,function(t,n){return a("div",{key:n},[a("v-chip",{staticClass:"grey lighten-2"},[a("v-avatar",{staticClass:"teal"},[e._v(e._s(t.Name.charAt(0)))]),e._v("\n      "+e._s(t.Name)+"\n    ")],1)],1)})],2)},Z=[],ee=(a("456d"),a("d25f"),a("6d67"),function(e){function t(){return Object(f["a"])(this,t),Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments))}return Object(y["a"])(t,[{key:"playersOnline",get:function(){var e=this;return Object.keys(this.players).filter(function(t){return t!==e.user.connectionId}).map(function(t){return e.players[t]})}}]),Object(b["a"])(t,e),t}(n["default"]));ee=_["a"]([H()({props:{players:Object,user:Object}})],ee);var te=ee,ae=te,ne=(a("57d8"),Object(o["a"])(ae,Y,Z,!1,null,"48fb23bc",null));ne.options.__file="PlayersOnline.vue";var se=ne.exports,re=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.showSidebar=!1,e.playersOnline=e.playersOnline,e}return Object(y["a"])(t,[{key:"ToggleSidebar",value:function(){this.showSidebar=!this.showSidebar}},{key:"GetName",value:function(e){return null!==this.playersOnline[e]?this.playersOnline[e].Name:"NoName"}}]),Object(b["a"])(t,e),t}(k["c"]);re=_["a"]([Object(k["a"])({components:{CardsDeck:V,GamesStats:X,PlayersOnline:se},props:{gamesPlayed:Array,isCardsRevealed:Boolean,messages:Array,newGame:Function,playCard:Function,player:Object,playersOnline:Object,showCards:Function}})],re);var ie=re,le=ie,oe=(a("3d70"),Object(o["a"])(le,P,E,!1,null,"47324b04",null));oe.options.__file="PokerTable.vue";var ce=oe.exports,ue={POKER:"/poker"},de=function(e){function t(){var e;return Object(f["a"])(this,t),e=Object(m["a"])(this,Object(g["a"])(t).apply(this,arguments)),e.pokerHub={},e.joined=!1,e.messages=[],e.player={},e.playersOnline={},e.isCardsRevealed=!1,e.gamesPlayed=[],e}return Object(y["a"])(t,[{key:"mounted",value:function(){this.pokerHub=(new w["a"]).withUrl(ue.POKER).build(),this.pokerHub.start(),this.pokerHub.on(T.Connected,this.handleConnected),this.pokerHub.on(T.Disconnected,this.handleDisconnected),this.pokerHub.on(T.UpdateUser,this.handleUpdateUser),this.pokerHub.on(T.Send,this.handleSend),this.pokerHub.on(T.UsersJoined,this.handleUserJoined),this.pokerHub.on(T.NewGame,this.handleNewGame),this.pokerHub.on(T.ShowCards,this.handleShowCards),this.pokerHub.on(T.JoinGroup,this.handleJoinGroup)}},{key:"handleConnected",value:function(e){var t=this;e.forEach(function(e){t.$set(t.playersOnline,e.connectionId,{Name:e.name||""})})}},{key:"handleDisconnected",value:function(e){this.playersOnline={},this.handleConnected(e)}},{key:"join",value:function(e){this.pokerHub.invoke(T.JoinUser,e)}},{key:"playCard",value:function(e){this.pokerHub.invoke(T.Send,e)}},{key:"handleUserJoined",value:function(e){this.joined=!0,this.$set(this.playersOnline,e.connectionId,{Name:e.name})}},{key:"handleSend",value:function(e){this.messages.push(e)}},{key:"newGame",value:function(){this.pokerHub.invoke(T.NewGame)}},{key:"handleNewGame",value:function(){J.$emit(R.NEW_GAME_STARTED),this.gamesPlayed.push(this.messages),this.messages=[],this.isCardsRevealed=!1}},{key:"showCards",value:function(){this.pokerHub.invoke(T.ShowCards)}},{key:"handleShowCards",value:function(){this.isCardsRevealed=!0}},{key:"joinGroup",value:function(e,t){var a={playerName:e,groupId:t};if(this.pokerHub.invoke(T.JoinGroup,a),window.history.pushState){var n="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"?groupId=").concat(t);window.history.pushState({path:n},"",n)}}},{key:"handleJoinGroup",value:function(e){this.playersOnline={},this.handleConnected(e)}},{key:"handleUpdateUser",value:function(e){this.joined=!0,this.player=e}}]),Object(b["a"])(t,e),t}(k["c"]);de=_["a"]([Object(k["a"])({components:{Login:N,PokerTable:ce}})],de);var pe=de,ve=pe,he=(a("cccb"),Object(o["a"])(ve,v,h,!1,null,null,null));he.options.__file="Home.vue";var fe=he.exports;n["default"].use(p["a"]);var be=new p["a"]({routes:[{path:"/",name:"home",component:fe}]});n["default"].config.productionTip=!1,n["default"].use(r.a),new n["default"]({router:be,render:function(e){return e(d)}}).$mount("#app")},e82b:function(e,t,a){}});
//# sourceMappingURL=app.js.map