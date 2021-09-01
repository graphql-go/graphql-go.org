---
sidebar_position: 3
---

# Inicio Rápido

The following is a simple example which defines a schema with a single `hello` string-type field and a `Resolve` method which returns the string `world`. A GraphQL query is performed against this schema with the resulting output printed in JSON format.

```go title="main.go"
    package main

    import (
      "encoding/json"
      "fmt"
      "log"

      "github.com/graphql-go/graphql"
    )

    func main() {
      // Schema
      fields := graphql.Fields{
        "hello": &graphql.Field{
          Type: graphql.String,
          Resolve: func(p graphql.ResolveParams) (interface{}, error) {
            return "world", nil
          },
        },
      }
      rootQuery := graphql.ObjectConfig{Name: "RootQuery", Fields: fields}
      schemaConfig := graphql.SchemaConfig{Query: graphql.NewObject(rootQuery)}
      schema, err := graphql.NewSchema(schemaConfig)
      if err != nil {
        log.Fatalf("failed to create new schema, error: %v", err)
      }

      // Query
      query := `
        {
          hello
        }
      `
      params := graphql.Params{Schema: schema, RequestString: query}
      r := graphql.Do(params)
      if len(r.Errors) > 0 {
        log.Fatalf("failed to execute graphql operation, errors: %+v", r.Errors)
      }
      rJSON, _ := json.Marshal(r)
      fmt.Printf("%s \n", rJSON) // {"data":{"hello":"world"}}
    }
```

<!-- Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`. -->
