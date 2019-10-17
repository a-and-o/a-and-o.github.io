import React from "react";
import SEO from "../components/SEO";
import Link from "gatsby-link";
import Layout from "../components/layout";

export default ({ pageContext: { tags } }) => {
  return (
    <Layout>
      <SEO title="Posts by Tag" />
      <section>
        <h1>Posts by Tag</h1>
        <ul>
          {tags.map(({ fieldValue: tag, totalCount }) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>
                {tag} ({totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
