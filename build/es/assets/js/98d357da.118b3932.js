(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6373],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8699:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:13},p="Go GraphQL ToDo example",s={unversionedId:"Examples/todo-example",id:"version-0.8.0/Examples/todo-example",isDocsHomePage:!1,title:"Go GraphQL ToDo example",description:"An example that consists of basic core GraphQL queries and mutations.",source:"@site/versioned_docs/version-0.8.0/Examples/todo-example.md",sourceDirName:"Examples",slug:"/Examples/todo-example",permalink:"/example-graphql-go/es/docs/Examples/todo-example",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.8.0/Examples/todo-example.md",version:"0.8.0",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"1/9/2021",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"version-0.8.0/tutorialSidebar",previous:{title:"Star Wars",permalink:"/example-graphql-go/es/docs/Examples/star-wars"},next:{title:"Subscription",permalink:"/example-graphql-go/es/docs/Examples/subscription"}},c=[{value:"Web App",id:"web-app",children:[]},{value:"Main",id:"main",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-graphql-todo-example"},"Go GraphQL ToDo example"),(0,a.kt)("p",null,"An example that consists of basic core GraphQL queries and mutations."),(0,a.kt)("p",null,"To run the example navigate to the example directory by using your shell of choice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd examples/todo\n")),(0,a.kt)("p",null,"Run the example, it will spawn a GraphQL HTTP endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,a.kt)("p",null,"Execute queries via shell."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// To get single ToDo item by ID\ncurl -g 'http://localhost:8080/graphql?query={todo(id:\"b\"){id,text,done}}'\n\n// To create a ToDo item\ncurl -g 'http://localhost:8080/graphql?query=mutation+_{createTodo(text:\"My+new+todo\"){id,text,done}}'\n\n// To get a list of ToDo items\ncurl -g 'http://localhost:8080/graphql?query={todoList{id,text,done}}'\n\n// To update a ToDo\ncurl -g 'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:\"b\",text:\"My+new+todo+updated\",done:true){id,text,done}}'\n")),(0,a.kt)("h2",{id:"web-app"},"Web App"),(0,a.kt)("p",null,"Access the web app at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/"),". It is work in progress and currently is simply loading todos by using jQuery ajax call."),(0,a.kt)("h2",{id:"main"},"Main"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "encoding/json"\n    "fmt"\n    "math/rand"\n    "net/http"\n    "time"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/graphql/examples/todo/schema"\n)\n\nfunc init() {\n    todo1 := schema.Todo{ID: "a", Text: "A todo not to forget", Done: false}\n    todo2 := schema.Todo{ID: "b", Text: "This is the most important", Done: false}\n    todo3 := schema.Todo{ID: "c", Text: "Please do this or else", Done: false}\n    schema.TodoList = append(schema.TodoList, todo1, todo2, todo3)\n\n    rand.Seed(time.Now().UnixNano())\n}\n\nfunc executeQuery(query string, schema graphql.Schema) *graphql.Result {\n    result := graphql.Do(graphql.Params{\n        Schema:        schema,\n        RequestString: query,\n    })\n    if len(result.Errors) > 0 {\n        fmt.Printf("wrong result, unexpected errors: %v", result.Errors)\n    }\n    return result\n}\n\nfunc main() {\n    http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {\n        result := executeQuery(r.URL.Query().Get("query"), schema.TodoSchema)\n        json.NewEncoder(w).Encode(result)\n    })\n    // Serve static files\n    fs := http.FileServer(http.Dir("static"))\n    http.Handle("/", fs)\n    // Display some basic instructions\n    fmt.Println("Now server is running on port 8080")\n    fmt.Println("Get single todo: curl -g \'http://localhost:8080/graphql?query={todo(id:\\"b\\"){id,text,done}}\'")\n    fmt.Println("Create new todo: curl -g \'http://localhost:8080/graphql?query=mutation+_{createTodo(text:\\"My+new+todo\\"){id,text,done}}\'")\n    fmt.Println("Update todo: curl -g \'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:\\"a\\",done:true){id,text,done}}\'")\n    fmt.Println("Load todo list: curl -g \'http://localhost:8080/graphql?query={todoList{id,text,done}}\'")\n    fmt.Println("Access the web app via browser at \'http://localhost:8080\'")\n\n    http.ListenAndServe(":8080", nil)\n}\n')))}d.isMDXComponent=!0}}]);