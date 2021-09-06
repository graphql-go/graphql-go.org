(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3061],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=o,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},389:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},c="Context",s={unversionedId:"Examples/context",id:"version-0.7.9/Examples/context",isDocsHomePage:!1,title:"Context",description:'`go title="main.go"',source:"@site/i18n/es/docusaurus-plugin-content-docs/version-0.7.9/Examples/context.md",sourceDirName:"Examples",slug:"/Examples/context",permalink:"/graphql-go.org/es/docs/0.7.9/Examples/context",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.7.9/Examples/context.md",version:"0.7.9",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"1/9/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.7.9/tutorialSidebar",previous:{title:"Concurrent Resolvers",permalink:"/graphql-go.org/es/docs/0.7.9/Examples/concurrent-resolvers"},next:{title:"Go GraphQL CRUD Example",permalink:"/graphql-go.org/es/docs/0.7.9/Examples/crud"}},p=[],u={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/graphql-go/graphql"\n)\n\nvar Schema graphql.Schema\n\nvar userType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "User",\n        Fields: graphql.Fields{\n            "id": &graphql.Field{\n                Type: graphql.String,\n            },\n            "name": &graphql.Field{\n                Type: graphql.String,\n            },\n        },\n    },\n)\n\nvar queryType = graphql.NewObject(\n    graphql.ObjectConfig{\n        Name: "Query",\n        Fields: graphql.Fields{\n            "me": &graphql.Field{\n                Type: userType,\n                Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                    return p.Context.Value("currentUser"), nil\n                },\n            },\n        },\n    })\n\nfunc graphqlHandler(w http.ResponseWriter, r *http.Request) {\n    user := struct {\n        ID   int    `json:"id"`\n        Name string `json:"name"`\n    }{1, "cool user"}\n    result := graphql.Do(graphql.Params{\n        Schema:        Schema,\n        RequestString: r.URL.Query().Get("query"),\n        Context:       context.WithValue(context.Background(), "currentUser", user),\n    })\n    if len(result.Errors) > 0 {\n        log.Printf("wrong result, unexpected errors: %v", result.Errors)\n        return\n    }\n    json.NewEncoder(w).Encode(result)\n}\n\nfunc main() {\n    http.HandleFunc("/graphql", graphqlHandler)\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Test with Get      : curl -g \'http://localhost:8080/graphql?query={me{id,name}}\'")\n    http.ListenAndServe(":8080", nil)\n}\n\nfunc init() {\n    s, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: queryType,\n    })\n    if err != nil {\n        log.Fatalf("failed to create schema, error: %v", err)\n    }\n    Schema = s\n}\n')))}m.isMDXComponent=!0}}]);