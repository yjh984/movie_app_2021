(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(3),a=i.n(n),r=i(14),c=i.n(r),o=i(5),l=i.n(o),d=i(15),u=i(16),j=i(17),h=i(20),m=i(19),v=i(18),b=i.n(v),g=i(2),x=i.n(g);i(47);function O(e){var t=e.year,i=e.rating,n=e.title,a=e.genres,r=e.summary,c=e.poster;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:c,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h2",{className:"movie__title",children:n}),Object(s.jsxs)("h4",{className:"movie__year",children:[t," / ",i]}),Object(s.jsx)("ul",{className:"movie__genres",children:a.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[r.slice(0,300),"..."]})]})]})}O.prototype={id:x.a.number.isRequired,year:x.a.number.isRequired,rating:x.a.number,title:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired};var p=O,y=(i(48),(new Date).getFullYear()),_=function(e){Object(h.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(u.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,isMovie:!1,isYear:!0,moviesList:[]},e.getMoviesList=Object(d.a)(l.a.mark((function t(){var i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?query_term=".concat(y,"&sort_by=rating"));case 2:i=t.sent,void 0===(s=i.data.data.movies)?e.setState({isLoading:!1,isMovie:!1,moviesList:s}):e.setState({isLoading:!1,isMovie:!0,moviesList:s});case 5:case"end":return t.stop()}}),t)}))),e.handleBtnMinusYear=function(){e.setState({isLoading:!0}),y-=1,e.getMoviesList()},e.handleBtnAddYear=function(){e.setState({isLoading:!0}),y+=1,e.getMoviesList()},e.handleBtnAllList=function(){e.setState({isLoading:!0,isYear:!1}),y="",e.getMoviesList()},e.handleBtnBackToYear=function(){e.setState({isLoading:!0,isYear:!0}),y=(new Date).getFullYear(),e.getMoviesList()},e}return Object(j.a)(i,[{key:"componentDidMount",value:function(){this.getMoviesList()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,i=e.isYear,n=e.isMovie,a=e.moviesList;return Object(s.jsxs)("section",{className:"container",children:[Object(s.jsxs)("div",{className:"front",children:[t?"":i?Object(s.jsxs)("h1",{children:["YEAR ",y,"."]}):Object(s.jsx)("h1",{children:"All YEAR."}),Object(s.jsxs)("div",{children:[t?"":i?Object(s.jsx)("button",{onClick:this.handleBtnMinusYear,children:"Previous Year"}):"",t?"":i?Object(s.jsx)("button",{onClick:this.handleBtnAddYear,children:"Next Year"}):""]}),Object(s.jsxs)("div",{children:[t?"":Object(s.jsx)("button",{onClick:this.handleBtnAllList,children:"All Movies"}),t?"":Object(s.jsx)("button",{onClick:this.handleBtnBackToYear,children:"Back to this year"})]})]}),t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"'Please, wait for loading...' "})}):n?Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(p,{id:e.id,year:e.year,rating:parseFloat(e.rating).toFixed(1),title:e.title,genres:e.genres,summary:e.summary,poster:e.medium_cover_image},e.id)}))}):Object(s.jsx)("h4",{children:"There is no movie which you want.."})]})}}]),i}(a.a.Component);c.a.render(Object(s.jsx)(_,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.16372f46.chunk.js.map