import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button" to="/docs/tutorial-basics/quick-start">
            Quick Start →
          </Link>
        </div>
      </div>
    </header>
  );
}

function GitHubStargazersShield() {
  return (
    <div style={{ paddingTop: "8px", paddingRight: "10px" }}>
      <a
        href="https://github.com/graphql-go/graphql/stargazers"
        className="github-stargazers"
        target="_blank"
      >
        <img src="https://img.shields.io/github/stars/graphql-go/graphql?style=social"></img>
      </a>
    </div>
  );
}

function Imagehomepage() {
  return (
    <div
      className="imagesHomepage"
      style={{ position: "absolute", width: "10px", height: "10px" }}
    >
      <image scr="http://assets.stickpng.com/images/5847fb26cef1014c0b5e48d4.png">
        {siteConfig.image}
      </image>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    const githubStargazersNodes =
      document.getElementsByClassName("github-stargazers");
    const githubStargazersNode = githubStargazersNodes[0];
    const githubStargazersParent = githubStargazersNode.parentNode;

    const temp = document.createElement("div");
    ReactDOM.render(<GitHubStargazersShield />, temp);

    githubStargazersParent.replaceChild(temp, githubStargazersNode);
  }, []);
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
