---
sidebar_position: 1
---

# GraphQL API

```go title="main.go"
package main

import (
  "log"
	"net/http"

	"github.com/graphql-go/graphql/testutil"
	"github.com/graphql-go/handler"
)

func main() {
	h := handler.New(&handler.Config{
		Schema:   &testutil.StarWarsSchema,
		Pretty:   true,
		GraphiQL: true,
		Playground: false,
	})

	http.Handle("/graphql", h)

	log.Println("GraphQL Server running on [POST]: localhost:8081/graphql")
	log.Println("GraphQL Playground running on [GET]: localhost:8081/graphql")

	http.ListenAndServe(":8080", nil)
}
```
