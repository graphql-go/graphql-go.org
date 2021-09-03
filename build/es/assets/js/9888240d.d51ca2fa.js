(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7676],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,f=m["".concat(p,".").concat(g)]||m[g]||u[g]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3554:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},p="GraphQL API",c={unversionedId:"Examples/graphql-api",id:"version-0.7.8/Examples/graphql-api",isDocsHomePage:!1,title:"GraphQL API",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.7.8/Examples/graphql-api.md",sourceDirName:"Examples",slug:"/Examples/graphql-api",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/graphql-api",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.7.8/Examples/graphql-api.md",version:"0.7.8",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"1/9/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-0.7.8/tutorialSidebar",previous:{title:"Quick Start",permalink:"/example-graphql-go/es/docs/0.7.8/tutorial-basics/quick-start"},next:{title:"Concurrent Resolvers",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/concurrent-resolvers"}},s=[],u={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql-api"},"GraphQL API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "log"\n    "net/http"\n    \n    "github.com/graphql-go/graphql/testutil"\n    "github.com/graphql-go/handler"\n)\n\nfunc main() {\n    h := handler.New(&handler.Config{\n        Schema:   &testutil.StarWarsSchema,\n        Pretty:   true,\n        GraphiQL: true,\n        Playground: false,\n    })\n\n    http.Handle("/graphql", h)\n\n    log.Println("GraphQL Server running on [POST]: localhost:8081/graphql")\n    log.Println("GraphQL Playground running on [GET]: localhost:8081/graphql")\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}m.isMDXComponent=!0}}]);