import { Container } from "@mantine/core";
import Header from "../components/header/Header";
import React from "react";
import { graphql } from "gatsby";
import { ContentfulPost } from "../types/post";
import Post from "../components/post/Post";
import SEO from "../components/SEO/SEO";


type IndexPageProps = {
  data: {
    allContentfulBlogPost: {
      edges: {node: ContentfulPost}[]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({data: {allContentfulBlogPost: {edges: posts}}}) => {
  return (
    <Container>
      <SEO />
      <Header />
      {posts.map(({node}) => (
        <Post key={node.id} {...node} />
      ))}
    </Container>
  );
};

export default IndexPage;

export const allBlogPostQuery = graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishDate, order: DESC}) {
        edges {
          node {
            body {
              raw
            }
            id
            feelsLike
            title
            publishDate
          }
        }
      }
    }
`;

