import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogLink = styled(Link)`
  text-decoration: none;
`;

const BlogTitle = styled.span`
  margin-bottom: 20px;
  color: blue;
`;


export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>MoyArt's Thoutghts</h1>
      <h4>{`Number of posts: ${data.allMarkdownRemark.totalCount}`}</h4>
      <hr></hr>
      <div className="post-main__wrapper">
        {
          data.allMarkdownRemark.edges.map( ({node}) => {
            return (
              <div className="post" key={node.id}>
                <div className="post-metadata">
                  <BlogLink to={node.fields.slug}>
                    <h2 className="post-title">
                      {node.frontmatter.title}
                      <BlogTitle> - {node.frontmatter.date}</BlogTitle>
                    </h2>
                  </BlogLink>
                </div>
                <p className="post-excerpt">
                  {node.excerpt}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
  `;