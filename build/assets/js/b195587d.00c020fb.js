(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4190],{3905:function(n,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return g}});var t=r(7294);function i(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function s(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function o(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function a(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},s=Object.keys(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)r=s[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}var c=t.createContext({}),u=function(n){var e=t.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):o(o({},e),n)),r},l=function(n){var e=u(n.components);return t.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},b=t.forwardRef((function(n,e){var r=n.components,i=n.mdxType,s=n.originalType,c=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),b=u(r),g=i,d=b["".concat(c,".").concat(g)]||b[g]||p[g]||s;return r?t.createElement(d,o(o({ref:e},l),{},{components:r})):t.createElement(d,o({ref:e},l))}));function g(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var s=r.length,o=new Array(s);o[0]=b;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:i,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2310:function(n,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return b}});var t=r(2122),i=r(9756),s=(r(7294),r(3905)),o=["components"],a={sidebar_position:14},c="Subscription",u={unversionedId:"Examples/subscription",id:"version-0.8.0/Examples/subscription",isDocsHomePage:!1,title:"Subscription",description:"An example project showing how to use graphql.Subscribe with GraphQL Playground.",source:"@site/versioned_docs/version-0.8.0/Examples/subscription.md",sourceDirName:"Examples",slug:"/Examples/subscription",permalink:"/graphql-go.org/docs/Examples/subscription",editUrl:"https://github.com/LuisIzarra/example-graphql-go/blob/main/versioned_docs/version-0.8.0/Examples/subscription.md",version:"0.8.0",lastUpdatedAt:1630538788,formattedLastUpdatedAt:"9/1/2021",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"version-0.8.0/tutorialSidebar",previous:{title:"Go GraphQL ToDo example",permalink:"/graphql-go.org/docs/Examples/todo-example"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Output:",id:"output",children:[]},{value:"Main",id:"main",children:[]}],p={toc:l};function b(n){var e=n.components,r=(0,i.Z)(n,o);return(0,s.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"subscription"},"Subscription"),(0,s.kt)("p",null,"An example project showing how to use graphql.Subscribe with GraphQL Playground."),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"To run the example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,s.kt)("h2",{id:"output"},"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"(subscription-example)-> go run main.go\n2021/07/24 18:37:57 GraphQL Server running on [POST]: localhost:8081/graphql\n2021/07/24 18:37:57 GraphQL Playground running on [GET]: localhost:8081/graphql\n")),(0,s.kt)("h2",{id:"main"},"Main"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "log"\n    "net/http"\n    "sync"\n    "time"\n\n    "github.com/google/uuid"\n    "github.com/gorilla/websocket"\n\n    "github.com/graphql-go/graphql"\n    "github.com/graphql-go/handler"\n)\n\ntype Feed struct {\n    ID string `graphql:"id"`\n}\n\nvar FeedType = graphql.NewObject(graphql.ObjectConfig{\n    Name: "FeedType",\n    Fields: graphql.Fields{\n        "id": &graphql.Field{\n            Type: graphql.ID,\n        },\n    },\n})\n\nvar RootSubscription = graphql.NewObject(graphql.ObjectConfig{\n    Name: "RootSubscription",\n    Fields: graphql.Fields{\n        "feed": &graphql.Field{\n            Type: FeedType,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                return p.Source, nil\n            },\n            Subscribe: func(p graphql.ResolveParams) (interface{}, error) {\n                c := make(chan interface{})\n\n                go func() {\n                    var i int\n\n                    for {\n                        i++\n\n                        feed := Feed{ID: fmt.Sprintf("%d", i)}\n\n                        select {\n                        case <-p.Context.Done():\n                            log.Println("[RootSubscription] [Subscribe] subscription canceled")\n                            close(c)\n                            return\n                        default:\n                            c <- feed\n                        }\n\n                        time.Sleep(250 * time.Millisecond)\n\n                        if i == 21 {\n                            close(c)\n                            return\n                        }\n                    }\n                }()\n\n                return c, nil\n            },\n        },\n    },\n})\n\nvar RootQuery = graphql.NewObject(graphql.ObjectConfig{\n    Name: "RootQuery",\n    Fields: graphql.Fields{\n        "ping": &graphql.Field{\n            Type: graphql.String,\n            Resolve: func(p graphql.ResolveParams) (interface{}, error) {\n                return "ok", nil\n            },\n        },\n    },\n})\n\nvar schema graphql.Schema\n\nfunc main() {\n    schemaConfig := graphql.SchemaConfig{\n        Query:        RootQuery,\n        Subscription: RootSubscription,\n    }\n\n    s, err := graphql.NewSchema(schemaConfig)\n    if err != nil {\n        log.Fatal(err)\n    }\n\n    schema = s\n\n    h := handler.New(&handler.Config{\n        Schema:     &s,\n        Pretty:     true,\n        GraphiQL:   false,\n        Playground: true,\n    })\n\n    http.Handle("/graphql", h)\n    http.HandleFunc("/subscriptions", SubscriptionsHandler)\n\n    log.Println("GraphQL Server running on [POST]: localhost:8081/graphql")\n    log.Println("GraphQL Playground running on [GET]: localhost:8081/graphql")\n\n    log.Fatal(http.ListenAndServe(":8081", nil))\n}\n\nvar upgrader = websocket.Upgrader{\n    ReadBufferSize:  1024,\n    WriteBufferSize: 1024,\n    CheckOrigin: func(r *http.Request) bool {\n        return true\n    },\n    Subprotocols: []string{"graphql-ws"},\n}\n\ntype ConnectionACKMessage struct {\n    OperationID string `json:"id,omitempty"`\n    Type        string `json:"type"`\n    Payload     struct {\n        Query string `json:"query"`\n    } `json:"payload,omitempty"`\n}\n\nfunc SubscriptionsHandler(w http.ResponseWriter, r *http.Request) {\n    conn, err := upgrader.Upgrade(w, r, nil)\n    if err != nil {\n        log.Printf("failed to do websocket upgrade: %v", err)\n        w.WriteHeader(http.StatusInternalServerError)\n        return\n    }\n\n    connectionACK, err := json.Marshal(map[string]string{\n        "type": "connection_ack",\n    })\n    if err != nil {\n        log.Printf("failed to marshal ws connection ack: %v", err)\n        w.WriteHeader(http.StatusInternalServerError)\n        return\n    }\n\n    if err := conn.WriteMessage(websocket.TextMessage, connectionACK); err != nil {\n        log.Printf("failed to write to ws connection: %v", err)\n        w.WriteHeader(http.StatusInternalServerError)\n        return\n    }\n\n    go handleSubscription(conn)\n}\n\nfunc handleSubscription(conn *websocket.Conn) {\n    var subscriber *Subscriber\n    subscriptionCtx, subscriptionCancelFn := context.WithCancel(context.Background())\n\n    handleClosedConnection := func() {\n        log.Println("[SubscriptionsHandler] subscriber closed connection")\n        unsubscribe(subscriptionCancelFn, subscriber)\n        return\n    }\n\n    for {\n        _, p, err := conn.ReadMessage()\n        if err != nil {\n            log.Printf("failed to read websocket message: %v", err)\n            return\n        }\n\n        var msg ConnectionACKMessage\n        if err := json.Unmarshal(p, &msg); err != nil {\n            log.Printf("failed to unmarshal websocket message: %v", err)\n            continue\n        }\n\n        if msg.Type == "stop" {\n            handleClosedConnection()\n            return\n        }\n\n        if msg.Type == "start" {\n            subscriber = subscribe(subscriptionCtx, subscriptionCancelFn, conn, msg)\n        }\n    }\n}\n\ntype Subscriber struct {\n    UUID          string\n    Conn          *websocket.Conn\n    RequestString string\n    OperationID   string\n}\n\nvar subscribers sync.Map\n\nfunc subscribersSize() uint64 {\n    var size uint64\n    subscribers.Range(func(_, _ interface{}) bool {\n        size++\n        return true\n    })\n    return size\n}\n\nfunc unsubscribe(subscriptionCancelFn context.CancelFunc, subscriber *Subscriber) {\n    subscriptionCancelFn()\n    if subscriber != nil {\n        subscriber.Conn.Close()\n        subscribers.Delete(subscriber.UUID)\n    }\n    log.Printf("[SubscriptionsHandler] subscribers size: %+v", subscribersSize())\n}\n\nfunc subscribe(ctx context.Context, subscriptionCancelFn context.CancelFunc, conn *websocket.Conn, msg ConnectionACKMessage) *Subscriber {\n    subscriber := &Subscriber{\n        UUID:          uuid.New().String(),\n        Conn:          conn,\n        RequestString: msg.Payload.Query,\n        OperationID:   msg.OperationID,\n    }\n    subscribers.Store(subscriber.UUID, &subscriber)\n\n    log.Printf("[SubscriptionsHandler] subscribers size: %+v", subscribersSize())\n\n    sendMessage := func(r *graphql.Result) error {\n        message, err := json.Marshal(map[string]interface{}{\n            "type":    "data",\n            "id":      subscriber.OperationID,\n            "payload": r.Data,\n        })\n        if err != nil {\n            return err\n        }\n\n        if err := subscriber.Conn.WriteMessage(websocket.TextMessage, message); err != nil {\n            return err\n        }\n\n        return nil\n    }\n\n    go func() {\n        subscribeParams := graphql.Params{\n            Context:       ctx,\n            RequestString: msg.Payload.Query,\n            Schema:        schema,\n        }\n\n        subscribeChannel := graphql.Subscribe(subscribeParams)\n\n        for {\n            select {\n            case <-ctx.Done():\n                log.Printf("[SubscriptionsHandler] subscription ctx done")\n                return\n            case r, isOpen := <-subscribeChannel:\n                if !isOpen {\n                    log.Printf("[SubscriptionsHandler] subscription channel closed")\n                    unsubscribe(subscriptionCancelFn, subscriber)\n                    return\n                }\n                if err := sendMessage(r); err != nil {\n                    if err == websocket.ErrCloseSent {\n                        unsubscribe(subscriptionCancelFn, subscriber)\n                    }\n                    log.Printf("failed to send message: %v", err)\n                }\n            }\n        }\n    }()\n\n    return subscriber\n}\n')))}b.isMDXComponent=!0}}]);