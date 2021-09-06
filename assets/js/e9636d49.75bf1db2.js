(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6570],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8146:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],p={sidebar_position:7},l="HTTP - Post",s={unversionedId:"Examples/http-post",id:"version-0.8.0/Examples/http-post",isDocsHomePage:!1,title:"HTTP - Post",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.8.0/Examples/http-post.md",sourceDirName:"Examples",slug:"/Examples/http-post",permalink:"/graphql-go.org/docs/Examples/http-post",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.8.0/Examples/http-post.md",version:"0.8.0",lastUpdatedAt:1630856275,formattedLastUpdatedAt:"9/5/2021",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"version-0.8.0/tutorialSidebar",previous:{title:"Hello World",permalink:"/graphql-go.org/docs/Examples/hello-world"},next:{title:"HTTP",permalink:"/graphql-go.org/docs/Examples/http"}},c=[],u={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http---post"},"HTTP - Post"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/examples/todo/schema"\n)\n\ntype postData struct {\n    Query     string                 `json:"query"`\n    Operation string                 `json:"operation"`\n    Variables map[string]interface{} `json:"variables"`\n}\n\nfunc main() {\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, req *http.Request) {\n        var p postData\n        if err := json.NewDecoder(req.Body).Decode(&p); err != nil {\n            w.WriteHeader(400)\n            return\n        }\n        result := graphql.Do(graphql.Params{\n            Context:        req.Context(),\n            Schema:         schema.TodoSchema,\n            RequestString:  p.Query,\n            VariableValues: p.Variables,\n            OperationName:  p.Operation,\n        })\n        if err := json.NewEncoder(w).Encode(result); err != nil {\n            fmt.Printf("could not write result to response: %s", err)\n        }\n    })\n\n    fmt.Println("Now server is running on port 8080")\n\n    fmt.Println("")\n\n    fmt.Println(`Get single todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "{ todo(id:\\"b\\") { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Create new todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "mutation { createTodo(text:\\"My New todo\\") { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Update todo:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "mutation { updateTodo(id:\\"a\\", done: true) { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    fmt.Println("")\n\n    fmt.Println(`Load todo list:\ncurl \\\n-X POST \\\n-H "Content-Type: application/json" \\\n--data \'{ "query": "{ todoList { id text done } }" }\' \\\nhttp://localhost:8080/graphql`)\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}d.isMDXComponent=!0}}]);