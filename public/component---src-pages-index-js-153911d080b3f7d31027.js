(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),o=a(153),n=(a(48),a(175)),c=a(146),i=a(145),m=c.a.article.withConfig({displayName:"listing__Post",componentId:"sc-1dl5f4x-0"})(["box-shadow:0px 3px 10px rgba(25,17,34,0.05);padding:1rem;border-radius:4px;margin-bottom:1rem;a{color:#000;text-decoration:none;}h2{margin-bottom:0;}p{font-size:0.8rem;}.read-more{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:0.8rem;text-decoration:underline;color:#524763;}"]),s=function(){return l.a.createElement(i.StaticQuery,{query:"738499617",render:function(e){return e.allMarkdownRemark.edges.map(function(e){var t=e.node;return l.a.createElement(m,{key:t.frontmatter.slug},l.a.createElement(i.Link,{to:"/posts"+t.frontmatter.slug},l.a.createElement("h2",null,t.frontmatter.title)),l.a.createElement("p",null,t.frontmatter.date),l.a.createElement("p",null,t.excerpt),l.a.createElement(i.Link,{class:"read-more",to:"/posts"+t.frontmatter.slug},"Read More"))})},data:n})};t.default=function(e){var t=e.location;return l.a.createElement(o.a,{location:t},l.a.createElement(s,null))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var r=a(0),l=a.n(r),o=a(4),n=a.n(o),c=a(144),i=a.n(c);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var m=a(147),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var d=a(35);a.d(t,"parsePath",function(){return d.a});var u=l.a.createContext({}),p=function(e){return l.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},147:function(e,t,a){var r;e.exports=(r=a(149))&&r.default||r},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Level Up Blog",description:"A new blog!"}},file:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='267' viewBox='0 0 400 267' version='1'%3e%3cpath d='M116 2a110 110 0 0 1 4 15l4 14 19 60c2 7 4 9 7 6l22-10c4-1 4-1 7 3 3 3 4 4 12 0a297 297 0 0 1 31-12 1386 1386 0 0 0 74-30l13-4a261 261 0 0 0 32-13c4 0 5-2 2-5l-2-3 4-1 5-2 4-2 6-2c2-1 2-4 1-11l-1-5H237C121 0 115 0 116 2m240 30l-4 3h-2c-1 0-9 2-11 4l2 2c2 3 2 3 7 1l5-3c0-2 2-3 2-1 1 1 8-1 10-3 1-1-2-5-3-5l-6 2m-19 28a76 76 0 0 1-17 1 5410 5410 0 0 1-20 1l-5 3c-7 2-8 3-3 8l4 4 3-1c4-2 4-2 5 0 0 2 5 2 8 0l13-5 15-5 13-2c7 0 8 0 4-1l-6-2c-3-2-5-2-14-1m-74 8l-4 4h-1c-2-1-13 2-13 5 0 1 3 4 6 4l-1 1v3c-2 1-2 2-1 5v7l-1 1c-2-1-2 2 0 4l2 4v5l4 12h2l1-7 1-6h-5v-3h4c1-1 3-9 2-10l2-1v-1c-1-2-2-2-5 0-4 1-4 1-4-1s0-2 1-1 12-3 12-4c0-2-4-8-6-9h-3l-3 1 3-2c4-2 4-2 3-4 0-2 0-2 2-1 1 2 2 2 6 0 7-3 8-3 6-6-3-2-4-2-10 0m16 3c-4 2-5 3-4 4l1 2-2-1c-2-2-2-2-7 0-6 2-6 3-3 7l4 5 11-5-1-3c-3-3-2-4 1-1 3 4 3 4 9 1l5-2-3-4c-4-6-5-6-11-3m117 4l-3 2-8 4c-3 3-9 3-9 0h-3l-6-1c-2-2-5-2-10-2l-9-1c0-1-8-1-15 1l-10 1-6 1-11 2-3-1c0-4-2-4-7-2-6 2-6 2-2 7 2 4 4 5 5 4h4c-1 1 0 2 2 6 4 4 6 5 12 2 1 0 2 1 2 3s0 2-2 1c-1-2-2-2-5 0-7 2-8 4-6 6l3 4c3 4 3 4 9 1 6-2 6-3 3-7l-2-3c1-1 6 5 6 7 0 1-3 3-20 10l-6 4-1 2c-2 3-3 7 0 10l1 3-1 14c-1 10-2 16-4 16l-5-6-3-5v-15c0-10-1-14-2-14l-1 1c-2 2-3 1-3-2 0-4 1-4 2-2 2 1 4 1 6-1l4-3 3-1-3-4c-3-5-4-5-8-3-5 1-6 1-5-1l-1-2-1-3c0-1 1-1 2 1 3 3 3 3 7 2 7-2 8-3 5-8-4-5-5-6-10-4l-5 2c-1-1 0-1 1-2 2 0 3-2 3-3 0-2-5-8-7-8l-10 5 2 1c6 0 8 2 8 10l1 3 1 2-1 1h-1l2 2v2l-1 2 1 2c-1 2 1 5 2 3h2c2 2 1 3-1 2-1-1-1-1-1 1l-1 11-2 7-2 12c-2 9-3 18-1 21l1 8 1 8 2 9c-1 4 0 7 1 8l2 5c0 4-2 7-6 7l-2 1c0 2-3 1-3 0-1-2-7-3-7-1v1c3 0 3 2 1 4-1 1-2 3-2 9 0 8-2 12-9 18-5 4-10 4-22 3-6-1-9 1-6 4l3 5c1 3 0 3 18 1 14-1 14-1 18-6 3-3 4-4 7-3 4 0 4 1 5 7l1 4h14c13 0 15 0 15-2v-5l1-5c0-4 2-7 5-7l2-2 3-3 2-2c-1-1 0-1 1-1l4-2 4-2 3-2c0-2 1-2 4-2l4-1 4-4 4-2 3-1c3 0 11-5 14-9 2-2 11-7 14-7l2-1 3-2 4-2 15-5c1 1 1-2 1-7 0-9 0-9-6-6a694 694 0 0 1-89 44l-1 1-9 3-1-3a666 666 0 0 0 10-84c-1 0-3-6-2-7l11-5a7810 7810 0 0 0 29-11l2 1 2 1c1 1 1 1-2 3s-3 2-1 2l5-2 1 1v2l4 2c1 2 4 3 5 3l9 4 12 6 5 3h1l1-3c-1-3 0-3 6 4l7 4 1-18c0-17 0-18-2-18-4 2-12 2-18 1l-9-2-4-2h-4l-3-1a1496 1496 0 0 1-16-6c0-4-3-6-6-4h-10l-1 1h-2c-1 0 2-5 5-7 5-3 13-2 23 2 13 6 19 8 28 8s14 2 14 5c0 2 1 3 3 3l2 1V96c-1-22-1-24-4-21m-114 9c-6 2-6 4-2 8s4 4 8 3c7-2 7-3 3-8-1-3-3-5-4-5l-5 2m-76 6c-5 2-6 4-4 7 1 1 3 2 5 1 2 0 2 0 0 1-3 2-3 4 0 7l3 4c1 2 5 0 5-4V95c2 0 2-2-1-5-2-2-1-2-8 0m87 4c-5 2-5 3-1 8l4 4 4-1c7-2 8-3 4-8-4-6-5-6-11-3m-117 8c-6 3-7 4-4 7l2 2 6-2c6-3 7-3 4-7-1-2-1-2-8 0m30 10l2 8 1 5 1 2c1 0 2 2 2 5l1 4 1 4c1 2 3 0 3-4 1-6-1-9-4-8-2 0-1-2 2-3 2-1 2-1 2-5-2-9-2-9-6-7-3 1-3 1-3-3-2-6-3-4-2 2m90-4c-6 3-6 4-1 9l4 4 3-1 5-2c3-1 2-3-1-8-4-5-4-5-10-2m-116 3l-5 3c0 2 5 7 6 6v1c-1 1 0 2 2 2l10-5c0-2-5-10-7-10l-6 3m13 10l-4 1c-6 2-7 3-3 8 3 5 3 6 7 4 2-1 3-1 2-6 0-6-1-9-2-7m-117 6a385 385 0 0 0-15 21l2-1 1-1 6-3c23-7 45 9 38 27l-1 2v-2l-1-3-3 4c-6 10-15 15-27 14-9-1-10 1-3 3l4 1h-4c-5 0-12-3-15-6l-3-2v2c0 2 0 2-1 1-2-3-3-2-8 3-6 8-9 11-10 9l-3-1c-5-2-3-6 7-17 4-4 5-5 6-4 3 2 5-3 4-8l1-5 1-2 1-2c5-8-1-3-13 11l-11 12c-6 7-9 12-8 14 2 3 5 6 7 6l3 2 4 2c2 1 2 2 2 4-1 2-1 2 1 1l2-2 5-4 4-5c-1-1 3-6 5-6l3 5 3 4c1 0 2 4 1 6l-4 1c-3 0-3 0-2 2 1 1 2 2 1 3l1 1 2 1v1l3 4 3 3 3 9 1 1v2c-1 0-2 3 0 3l3-4 1-2 5-4c5-5 11-8 11-4l-4 8-3 4c-7 10-9 12-12 11l-3-3-2-3-1-1-4-3-4-3c0-1-1-2-3-2s-12-5-13-7l-5-3-6-3c0-1-4 0-6 2v6c1 5 5 11 8 13l2 1 2 2c3 0 5 2 5 4l2 1c3 0 6 2 6 4l2 1 1 1 3 2 5 3c7 7 12 8 33 8h19l-1-3 1-3v-2c0-1 0-2 2-3 3-1 6-5 6-6v-2c1 0 2-1 1-2 0-3 1-5 5-5 2-1 5-5 3-5s0-3 2-4c2 0 3-3 1-5-1-1-1-1 2-2s3-2 3-5c0-4 0-4 3-4 2 0 2 0 3-3l2-6 1-3c-1-1 0-2 1-3 1-2 2-3 1-4l2-5c4-2 4-3 1-5-2-2-1-8 1-8l1-1h-4l-4-1c1-3-3-7-4-6h-3c-3 0-6 3-14 13l-4 5-3 4c-1 2-1 2-3 1-1-1-2-9 0-10s5-8 4-8l-1-2 2 1c1 2 2 1 2-3 0-3-1-3-1-2l-1 2v-5l-3 2-3 1c-1-1 0-3 1-2l1-1-1-1c-2 0-3-2-1-2 2-2-3-13-8-17l-4-3-3-1-1-4v-2h-2c1-3-1-5-8-9-7-5-6-5-10-1m-2 18c-4 1-11 6-14 10-6 10-1 24 10 24l9 1c6 1 9 1 6-1v-5l-1-1 4-1 4 1c0 4 4-1 5-7 1-8 1-9 3-9v-2c-2-8-14-13-26-10m116 85a1173 1173 0 0 1-38 31l-5 6 6-4 8-6 9-8 10-8a347 347 0 0 0 10-11m-55 14c1 2 0 3-2 0-1-1-1-1-2 1-3 3-2 10 2 12l2 2c0 1 3 2 8 1v-8l-1-3-4-5c-3-2-3-2-3 0m257 0c0 2 0 2-1 1 0-2-1-2-3 1l-1 2v2l-3 2-9 7c-6 7-7 8-5 8 3 0 24-21 23-23 0-3-1-2-1 0' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1.5002143163309045,src:"/static/6b6971baeb8265aadc7f014edaa6ff31/1a92f/bg.jpg",srcSet:"/static/6b6971baeb8265aadc7f014edaa6ff31/788f9/bg.jpg 250w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/06f71/bg.jpg 500w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/1a92f/bg.jpg 1000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/686ef/bg.jpg 1500w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/fe260/bg.jpg 2000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/d1018/bg.jpg 3000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/c8ccd/bg.jpg 7000w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),l=a.n(r),o=a(4),n=a.n(o),c=a(49),i=a(2),m=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=m},150:function(e,t,a){e.exports=a.p+"static/logo-7665f742d9402c726ad0cd313e098ef8.svg"},151:function(e){e.exports={data:{allMarkdownRemark:{totalCount:3,edges:[{node:{excerpt:"YoYoYo! Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem…",frontmatter:{title:"Our third post",slug:"/third-post",date:"November 15, 18"}}},{node:{excerpt:"Hello Lorem lorem ",frontmatter:{title:"Our first post",slug:"/first-post",date:"October 15, 18"}}},{node:{excerpt:"Yo Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem…",frontmatter:{title:"Our second post",slug:"/second-post",date:"October 15, 18"}}}]}}}},152:function(e,t,a){},153:function(e,t,a){"use strict";a(34);var r=a(148),l=a(0),o=a.n(l),n=a(4),c=a.n(n),i=a(154),m=a.n(i),s=a(146),d=a(156),u=a(155),p=a.n(u),f=a(145),g=a(150),h=a.n(g),v=s.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background:#524763;img{margin-bottom:0;}"]),b=s.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-1"})(["margin:0 auto;max-width:960px;padding:0.3rem;"]),L=function(e){e.siteTitle;return o.a.createElement(v,null,o.a.createElement(b,null,o.a.createElement("h1",{style:{margin:0}},o.a.createElement(f.Link,{to:"/",style:{color:"white",textDecoration:"none"}},o.a.createElement("img",{style:{width:"100px"},src:h.a,alt:"Level Up Tutorials Logo"})))))},y=(a(48),a(151)),w=function(){return o.a.createElement(f.StaticQuery,{query:"1398253974",render:function(e){var t=e.allMarkdownRemark;return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null,o.a.createElement("h3",null,"Archive"),o.a.createElement(j,null,t.edges.map(function(e){var t=e.node;return o.a.createElement("li",{key:t.frontmatter.slug},o.a.createElement(f.Link,{to:"/posts"+t.frontmatter.slug},t.frontmatter.title),o.a.createElement(E,null,o.a.createElement(k,null,t.frontmatter.date),o.a.createElement("p",null,t.excerpt)))}))))},data:y})},x=s.a.aside.withConfig({displayName:"archive__Wrap",componentId:"r2jo3a-0"})(["width:300px;"]),E=s.a.div.withConfig({displayName:"archive__ItemWrap",componentId:"r2jo3a-1"})(["margin-bottom:2rem;"]),k=s.a.span.withConfig({displayName:"archive__ItemDate",componentId:"r2jo3a-2"})(["font-size:14px;opacity:0.5;"]),j=s.a.ul.withConfig({displayName:"archive__ArchiveList",componentId:"r2jo3a-3"})(["list-style-type:none;"]),_=(a(152),s.a.main.withConfig({displayName:"layout__MainLayout",componentId:"ii2kc2-0"})(["max-width:90%;margin:0 auto;display:grid;grid-template-columns:3fr 1fr;grid-gap:40px;"])),C={height:100},S={height:200},q=function(e){var t=e.children,a=e.location;return o.a.createElement(f.StaticQuery,{query:"3793927926",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(L,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(d.a,{from:"/"===a.pathname?C:S,to:"/"===a.pathname?S:C},function(t){return o.a.createElement("div",{style:Object.assign({},t,{overflow:"hidden"})},o.a.createElement(p.a,{fluid:e.file.childImageSharp.fluid}))}),o.a.createElement(_,null,o.a.createElement("div",null,t),o.a.createElement(w,null)))},data:r})};q.propTypes={children:c.a.node.isRequired};t.a=q},175:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"YoYoYo! Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem…",frontmatter:{date:"November 15, 2018",title:"Our third post",slug:"/third-post"}}},{node:{excerpt:"Hello Lorem lorem ",frontmatter:{date:"October 15, 2018",title:"Our first post",slug:"/first-post"}}},{node:{excerpt:"Yo Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem lorem Lorem…",frontmatter:{date:"October 15, 2018",title:"Our second post",slug:"/second-post"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-153911d080b3f7d31027.js.map