(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5454],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9694:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:10},s="Modify Context",c={unversionedId:"Examples/modify-context",id:"version-0.7.8/Examples/modify-context",isDocsHomePage:!1,title:"Modify Context",description:'`go title="main.go"',source:"@site/versioned_docs/version-0.7.8/Examples/modify-context.md",sourceDirName:"Examples",slug:"/Examples/modify-context",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/modify-context",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.7.8/Examples/modify-context.md",version:"0.7.8",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"1/9/2021",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-0.7.8/tutorialSidebar",previous:{title:"HTTP Dynamic",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/http-dynamic"},next:{title:"Star Wars",permalink:"/example-graphql-go/es/docs/0.7.8/Examples/star-wars"}},p=[],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modify-context"},"Modify Context"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "log"\n\n    "github.com/graphql-go/graphql"\n)\n\ntype User struct {\n    ID int `json:"id"`\n}\n\nvar UserType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "User",\n    Fields: graphql.Fields{\n        "id": &graphql.Field{\n            Type: graphql.Int,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                rootValue := p.Info.RootValue.(map[string]interface{})\n                if rootValue["data-from-parent"] == "ok" &&\n                    rootValue["data-before-execution"] == "ok" {\n                    user := p.Source.(User)\n                    return user.ID, nil\n                }\n                return nil, nil\n            },\n        },\n    },\n})\n\nfunc main() {\n    schema, err := graphql.NewSchema(graphql.SchemaConfig{\n        Query: graphql.NewObject(graphql.ObjectConfig{\n            Name: "Query",\n            Fields: graphql.Fields{\n                "users": &graphql.Field{\n                    Type: graphql.NewList(UserType),\n                    Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                        rootValue := p.Info.RootValue.(map[string]interface{})\n                        rootValue["data-from-parent"] = "ok"\n                        result := []User{\n                            User{ID: 1},\n                        }\n                        return result, nil\n\n                    },\n                },\n            },\n        }),\n    })\n    if err != nil {\n        log.Fatal(err)\n    }\n    ctx := context.WithValue(context.Background(), "currentUser", User{ID: 100})\n    // Instead of trying to modify context within a resolve function, use:\n    // `graphql.Params.RootObject` is a mutable optional variable and available on\n    // each resolve function via: `graphql.ResolveParams.Info.RootValue`.\n    rootObject := map[string]interface{}{\n        "data-before-execution": "ok",\n    }\n    result := graphql.Do(graphql.Params{\n        Context:       ctx,\n        RequestString: "{ users { id } }",\n        RootObject:    rootObject,\n        Schema:        schema,\n    })\n    b, err := json.Marshal(result)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Printf("%s\\n", string(b)) // {"data":{"users":[{"id":1}]}}\n}\n')))}m.isMDXComponent=!0}}]);