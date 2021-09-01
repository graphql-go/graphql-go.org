---
sidebar_position: 12
---

# Go GraphQL ToDo example

An example that consists of basic core GraphQL queries and mutations.

To run the example navigate to the example directory by using your shell of choice.

```
cd examples/todo
```

Run the example, it will spawn a GraphQL HTTP endpoint

```
go run main.go
```

Execute queries via shell.

```
// To get single ToDo item by ID
curl -g 'http://localhost:8080/graphql?query={todo(id:"b"){id,text,done}}'

// To create a ToDo item
curl -g 'http://localhost:8080/graphql?query=mutation+_{createTodo(text:"My+new+todo"){id,text,done}}'

// To get a list of ToDo items
curl -g 'http://localhost:8080/graphql?query={todoList{id,text,done}}'

// To update a ToDo
curl -g 'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:"b",text:"My+new+todo+updated",done:true){id,text,done}}'
```

## Web App

Access the web app at `http://localhost:8080/`. It is work in progress and currently is simply loading todos by using jQuery ajax call.

## Main

```go title="main.go"
package main

import (
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"

	"github.com/graphql-go/graphql"
	"github.com/graphql-go/graphql/examples/todo/schema"
)

func init() {
	todo1 := schema.Todo{ID: "a", Text: "A todo not to forget", Done: false}
	todo2 := schema.Todo{ID: "b", Text: "This is the most important", Done: false}
	todo3 := schema.Todo{ID: "c", Text: "Please do this or else", Done: false}
	schema.TodoList = append(schema.TodoList, todo1, todo2, todo3)

	rand.Seed(time.Now().UnixNano())
}

func executeQuery(query string, schema graphql.Schema) *graphql.Result {
	result := graphql.Do(graphql.Params{
		Schema:        schema,
		RequestString: query,
	})
	if len(result.Errors) > 0 {
		fmt.Printf("wrong result, unexpected errors: %v", result.Errors)
	}
	return result
}

func main() {
	http.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {
		result := executeQuery(r.URL.Query().Get("query"), schema.TodoSchema)
		json.NewEncoder(w).Encode(result)
	})
	// Serve static files
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)
	// Display some basic instructions
	fmt.Println("Now server is running on port 8080")
	fmt.Println("Get single todo: curl -g 'http://localhost:8080/graphql?query={todo(id:\"b\"){id,text,done}}'")
	fmt.Println("Create new todo: curl -g 'http://localhost:8080/graphql?query=mutation+_{createTodo(text:\"My+new+todo\"){id,text,done}}'")
	fmt.Println("Update todo: curl -g 'http://localhost:8080/graphql?query=mutation+_{updateTodo(id:\"a\",done:true){id,text,done}}'")
	fmt.Println("Load todo list: curl -g 'http://localhost:8080/graphql?query={todoList{id,text,done}}'")
	fmt.Println("Access the web app via browser at 'http://localhost:8080'")

	http.ListenAndServe(":8080", nil)
}
```
