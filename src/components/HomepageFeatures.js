import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Go",
    Svg: require("../../static/img/graphql2.svg").default,
    description: <>Pure Go implementation with zero dependencies.</>,
  },
  {
    title: "GraphQL Spec Compliant",
    Svg: require("../../static/img/graphql1.svg").default,
    description: (
      <>
        Follows the official reference implementation:{" "}
        <code>
          <a href="https://github.com/graphql/graphql-js" target="_blank">
            graphql-js
          </a>
        </code>
        .
      </>
    ),
  },
  {
    title: "Tooling",
    Svg: require("../../static/img/graphql3.svg").default,
    description: (
      <>
        Seamlessly integration with other third party libraries that extends the{" "}
        <code>
          <a href="https://github.com/graphql-go/graphql" target="_blank">
            graphql-go/graphql
          </a>
        </code>{" "}
        functionality.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
