(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{164:function(e,t,n){"use strict";var i=n(0),r=n.n(i),o=n(205),s=n.n(o);s.a.initialize({startOnLoad:!0});t.a=function(e){var t=e.chart;return Object(i.useEffect)((function(){s.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},t)}},278:function(e,t,n){var i={"./locale":160,"./locale.js":160};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=278},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var i=n(3),r=n(7),o=(n(0),n(94)),s=n(164),a={id:"pipelines",title:"Worker pipelines"},c={unversionedId:"contributing/pipelines",id:"contributing/pipelines",isDocsHomePage:!1,title:"Worker pipelines",description:"Commitsar uses pipelines in order to use as much CPU power as possible. These are based on number of CPU \\* 2 (assuming 1 physical and 1 logical core available). In order to add a new pipeline",source:"@site/docs/contributing/pipelines.mdx",slug:"/contributing/pipelines",permalink:"/docs/contributing/pipelines",editUrl:"https://github.com/aevea/commitsar/edit/master/www/docs/contributing/pipelines.mdx",version:"current",sidebar:"someSidebar",previous:{title:"How commit filtering works",permalink:"/docs/contributing/filtering"}},p=[],l={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Commitsar uses pipelines in order to use as much CPU power as possible. These are based on number of CPU ","*"," 2 (assuming 1 physical and 1 logical core available). In order to add a new pipeline\nyou just need to build a pipeline that adheres to the types provided here: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/aevea/commitsar/blob/master/internal/dispatcher/pipeline.go"}),"https://github.com/aevea/commitsar/blob/master/internal/dispatcher/pipeline.go")," and register it in the root_runner.\nEach pipeline returns either a success type or pushes errors into the error channel."),Object(o.b)("p",null,"At the end all of this is collected and the results are presented to the user."),Object(o.b)("p",null,"This will also be used to introduce an easy plugin system in the future."),Object(o.b)(s.a,{chart:"\n\tgraph TD\n  A(Dispatcher)--\x3eB(Commit pipeline)\n  A--\x3eC(PR title pipeline)\n",mdxType:"Mermaid"}))}u.isMDXComponent=!0}}]);