(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[450],{3905:function(n,e,r){"use strict";r.d(e,{Zo:function(){return c},kt:function(){return d}});var t=r(7294);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,a=function(n,e){if(null==n)return{};var r,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(a[r]=n[r]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(a[r]=n[r])}return a}var s=t.createContext({}),p=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},c=function(n){var e=p(n.components);return t.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var r=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?t.createElement(g,o(o({ref:e},c),{},{components:r})):t.createElement(g,o({ref:e},c))}));function d(n,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9702:function(n,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:9},s="HTTP Dynamic",p={unversionedId:"Examples/http-dynamic",id:"version-0.7.8/Examples/http-dynamic",isDocsHomePage:!1,title:"HTTP Dynamic",description:"Basically, if we have data.json like this:",source:"@site/versioned_docs/version-0.7.8/Examples/http-dynamic.md",sourceDirName:"Examples",slug:"/Examples/http-dynamic",permalink:"/graphql-go.org/docs/0.7.8/Examples/http-dynamic",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.7.8/Examples/http-dynamic.md",version:"0.7.8",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"9/1/2021",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"version-0.7.8/tutorialSidebar",previous:{title:"HTTP",permalink:"/graphql-go.org/docs/0.7.8/Examples/http"},next:{title:"Modify Context",permalink:"/graphql-go.org/docs/0.7.8/Examples/modify-context"}},c=[{value:"Data",id:"data",children:[]},{value:"Main",id:"main",children:[]}],u={toc:c};function m(n){var e=n.components,r=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-dynamic"},"HTTP Dynamic"),(0,i.kt)("p",null,"Basically, if we have ",(0,i.kt)("inlineCode",{parentName:"p"},"data.json")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.json"',title:'"data.json"'},'[\n  { id: "1", name: "Dan" },\n  { id: "2", name: "Lee" },\n  { id: "3", name: "Nick" },\n];\n')),(0,i.kt)("p",null,"... and ",(0,i.kt)("inlineCode",{parentName:"p"},"go run main.go"),", we can query records:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'$ curl -g \'http://localhost:8080/graphql?query={user(name:"Dan"){id}}\'\n{"data":{"user":{"id":"1"}}}\n')),(0,i.kt)("p",null,"... now let's give Dan a surname:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.json"',title:'"data.json"'},'[\n  { id: "1", name: "Dan", surname: "Jones" },\n  { id: "2", name: "Lee" },\n  { id: "3", name: "Nick" },\n];\n')),(0,i.kt)("p",null,"... and kick the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kill -SIGUSR1 52114\n")),(0,i.kt)("p",null,"And ask for Dan's surname:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -g \'http://localhost:8080/graphql?query={user(name:"Dan"){id,surname}}\'\n{"data":{"user":{"id":"1","surname":"Jones"}}}\n')),(0,i.kt)("p",null,"... or ask Jones's name and ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl -g \'http://localhost:8080/graphql?query={user(surname:"Jones"){id,name}}\'\n{"data":{"user":{"id":"1","name":"Dan"}}}\n')),(0,i.kt)("p",null,"If you look at ",(0,i.kt)("inlineCode",{parentName:"p"},"main.go"),", the file is not field-aware. That is, all it knows is how to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"[]map[string]string")," type."),(0,i.kt)("p",null,"With this, we are not that far from exposing dynamic fields and filters which fully depend on what we have stored, all without changing our tooling."),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.json"',title:'"data.json"'},'[\n  {\n    id: "1",\n    name: "Dan",\n    surname: "Jones",\n  },\n  {\n    id: "2",\n    name: "Lee",\n  },\n  {\n    id: "3",\n    name: "Nick",\n  },\n];\n')),(0,i.kt)("h2",{id:"main"},"Main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "io/ioutil"\n    "net/http"\n    "os"\n    "os/signal"\n    "strconv"\n    "syscall"\n\n    "github.com/graphql-go/graphql"\n)\n\n/*****************************************************************************/\n/* Shared data variables to allow dynamic reloads\n/*****************************************************************************/\n\nvar schema graphql.Schema\n\nconst jsonDataFile = "data.json"\n\nfunc handleSIGUSR1(c chan os.Signal) {\n    for {\n        <-c\n        fmt.Printf("Caught SIGUSR1. Reloading %s\\n", jsonDataFile)\n        err := importJSONDataFromFile(jsonDataFile)\n        if err != nil {\n            fmt.Printf("Error: %s\\n", err.Error())\n            return\n        }\n    }\n}\n\nfunc filterUser(data []map[string]interface{}, args map[string]interface{}) map[string]interface{} {\n    for _, user := range data {\n        for k, v := range args {\n            if user[k] != v {\n                goto nextuser\n            }\n            return user\n        }\n\n    nextuser:\n    }\n    return nil\n}\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("wrong result, unexpected errors: %v\\n", result.Errors)\n    }\n    return result\n}\n\nfunc importJSONDataFromFile(fileName string) error {\n    content, err := ioutil.ReadFile(fileName)\n    if err != nil {\n        return err\n    }\n\n    var data []map[string]interface{}\n\n    err = json.Unmarshal(content, &data)\n    if err != nil {\n        return err\n    }\n\n    fields := make(graphql.Fields)\n    args := make(graphql.FieldConfigArgument)\n    for _, item := range data {\n        for k := range item {\n            fields[k] = &graphql.Field{\n                Type: graphql.String,\n            }\n            args[k] = &graphql.ArgumentConfig{\n                Type: graphql.String,\n            }\n        }\n    }\n\n    var userType = graphql.NewObject(\n        graphql.ObjectConfig{\n            Name:   "User",\n            Fields: fields,\n        },\n    )\n\n    var queryType = graphql.NewObject(\n        graphql.ObjectConfig{\n            Name: "Query",\n            Fields: graphql.Fields{\n                "user": &graphql.Field{\n                    Type: userType,\n                    Args: args,\n                    Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                        return filterUser(data, p.Args), nil\n                    },\n                },\n            },\n        })\n\n    schema, _ = graphql.NewSchema(\n        graphql.SchemaConfig{\n            Query: queryType,\n        },\n    )\n\n    return nil\n}\n\nfunc main() {\n    // Catch SIGUSR1 and reload the data file\n    c := make(chan os.Signal, 1)\n    signal.Notify(c, syscall.SIGUSR1)\n    go handleSIGUSR1(c)\n\n    err := importJSONDataFromFile(jsonDataFile)\n    if err != nil {\n        fmt.Printf("Error: %s\\n", err.Error())\n        return\n    }\n\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema)\n        json.NewEncoder(w).Encode(result)\n    })\n\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Test with Get      : curl -g \'http://localhost:8080/graphql?query={user(name:\\"Dan\\"){id,surname}}\'")\n    fmt.Printf("Reload json file   : kill -SIGUSR1 %s\\n", strconv.Itoa(os.Getpid()))\n    http.ListenAndServe(":8080", nil)\n}\n')))}m.isMDXComponent=!0}}]);