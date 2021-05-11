(this["webpackJsonplyrics-app"]=this["webpackJsonplyrics-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),i=a.n(l),c=(a(34),a(6)),s=a(4),o=a.n(s),u=a(21),h=a(22),d=a(27),m=a(23),g=a(2),p=a(28),E=a(7),f=a.n(E),v=(a(53),function(e){var t=e.loading?r.a.createElement("div",null,"Loading Lyrics..."):e.artistLyrics.lyrics;return r.a.createElement("div",{className:"lyric-body"},e.lyricError?r.a.createElement("div",null,"Lyrics Not Found!"):r.a.createElement("div",null,t))}),b=(a(54),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",null,r.a.createElement("input",{className:"form-control input-lg ml-2",type:"text",value:e.artist,name:"artist",placeholder:"Artist Name",onChange:e.handleChange,required:!0})),r.a.createElement("label",null,r.a.createElement("input",{className:"form-control input-lg ml-3",type:"text",value:e.title,name:"title",placeholder:"Song Title",onChange:e.handleSecondChange,required:!0})),r.a.createElement("button",{className:"btn btn-danger ml-4"},r.a.createElement("span",{className:"glyphicon glyphicon-search"})," Search"))),r.a.createElement("form",null,r.a.createElement("button",{onClick:e.clear,className:"btn btn-light ml-3"},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"}))))}),y=(a(55),function(e){var t=e.itunes.map((function(t){return e.artist!=t.artistName.toLowerCase()||e.title!=t.trackName.toLowerCase()?r.a.createElement("div",null,e.ituneError):r.a.createElement("div",{className:"Itunes-url"},r.a.createElement("img",{src:t.artworkUrl100}),r.a.createElement("br",null),r.a.createElement("audio",{controls:!0},r.a.createElement("source",{src:t.previewUrl})))})),a=e.loading?r.a.createElement("div",null,"Loading Preview..."):t;return r.a.createElement("div",{className:"lyric-body"},e.ituneError?r.a.createElement("div",null,"Preview Not Found!"):r.a.createElement("div",null,a))}),S=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).fetchData=function(){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,lyricError:!1}),t.next=3,o.a.awrap(f.a.get("https://api.lyrics.ovh/v1/".concat(e.state.artist,"/").concat(e.state.title)).then((function(t){e.setState({loading:!1,artistLyrics:t.data})})).catch((function(t){console.log(t),e.setState({lyricError:!0,loading:!1})})));case 3:case"end":return t.stop()}}))},e.fetchItunesData=function(){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,ituneError:!1}),t.next=3,o.a.awrap(f.a.get("https://itunes.apple.com/search?term=".concat(e.state.artist,"&term=").concat(e.state.title,"&limit=1")).then((function(t){e.setState({loading:!1,itunes:t.data.results})})).catch((function(t){console.log(t),e.setState({ituneError:!0,loading:!1})})));case 3:case"end":return t.stop()}}))},e.state={loading:!1,artistLyrics:{},lyricError:"",ituneError:"",artist:"",title:"",itunes:[]},e.handleSubmit=e.handleSubmit.bind(Object(g.a)(e)),e.handleChange=e.handleChange.bind(Object(g.a)(e)),e.handleSecondChange=e.handleSecondChange.bind(Object(g.a)(e)),e.clear=e.clear.bind(Object(g.a)(e)),e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"clear",value:function(){this.reset()}},{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSecondChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.fetchData(),this.fetchItunesData(),this.handleChange(e),this.handleSecondChange(e)}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,handleSecondChange:this.handleSecondChange,artist:this.state.artist,title:this.state.title,clear:this.clear}),r.a.createElement(v,{lyricError:this.state.lyricError,artistLyrics:this.state.artistLyrics,loading:this.state.loading}),r.a.createElement(y,{ituneError:this.state.ituneError,itunes:this.state.itunes,loading:this.state.loading,artist:this.state.artist,title:this.state.title}))}}]),t}(n.Component),C=(a(56),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))}),w=a(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w.a,null,r.a.createElement(C,null),r.a.createElement("link",{href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",rel:"stylesheet"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.fcb84665.chunk.js.map