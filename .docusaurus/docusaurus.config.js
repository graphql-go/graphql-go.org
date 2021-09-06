export default {
  "title": "graphql-go/graphql",
  "tagline": "An implementation of GraphQL for Go",
  "url": "https://github.com/graphql-go",
  "baseUrl": "/graphql-go.org/es/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/GraphQL_Logo.ico",
  "organizationName": "graphql-go",
  "projectName": "graphql-go.org",
  "themeConfig": {
    "navbar": {
      "title": "graphql-go/graphql",
      "logo": {
        "alt": "graphql-go/graphql Logo",
        "src": "img/GraphQL_Logo.png",
        "srcDark": "img/GraphQL_Logo.png"
      },
      "hideOnScroll": true,
      "items": [
        {
          "to": "/docs/tutorial-basics/overview",
          "label": "Documentación",
          "position": "left"
        },
        {
          "href": "https://github.com/graphql-go/graphql",
          "label": "GitHub",
          "position": "left"
        },
        {
          "href": "https://github.com/graphql-go/graphql/stargazers",
          "position": "right",
          "className": "github-stargazers"
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Documentación",
          "items": [
            {
              "label": "Empezar",
              "to": "/docs/tutorial-basics/overview"
            },
            {
              "label": "Ejecutando GraphQL API",
              "to": "/docs/examples/graphql-api"
            }
          ]
        },
        {
          "title": "Comunidad",
          "items": [
            {
              "label": "Gitter",
              "href": "https://gitter.im/graphql-go/graphql"
            }
          ]
        },
        {
          "title": "Más",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/graphql-go/graphql"
            },
            {
              "label": "GoDoc",
              "href": "https://pkg.go.dev/github.com/graphql-go/graphql"
            }
          ]
        }
      ],
      "copyright": "The Go gopher was designed by <a href=\"http://reneefrench.blogspot.com/\">Renee French</a>.</br>\n      The design is licensed under the Creative Commons 3.0 Attributions license. Read this <a href=\"https://blog.golang.org/gopher\">article</a> for more details.</br>\n      Design by Moriah Rich, illustration by Ariel Mashraki."
    },
    "googleAnalytics": {
      "trackingID": "UA-201621393-1",
      "anonymizeIP": true
    },
    "colorMode": {
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "☀",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      },
      "disableSwitch": false
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "/Users/luisrodriguez/graphql-go.org/sidebars.js",
          "editUrl": "https://github.com/LuisIzarra/example-graphql-go/blob/main/",
          "includeCurrentVersion": false,
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/LuisIzarra/example-graphql-go/edit/tree/main/blog/"
        },
        "theme": {
          "customCss": "/Users/luisrodriguez/graphql-go.org/src/css/custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "es"
    ],
    "localeConfigs": {
      "en": {
        "label": "English",
        "direction": "ltr"
      },
      "es": {
        "label": "Español",
        "direction": "ltr"
      }
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};