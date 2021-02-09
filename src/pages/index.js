import React from 'react';
import { graphql, Link } from 'gatsby';
import { MdLabel, MdLocalActivity } from "react-icons/md";

import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h2>Posts created with Markdown and love!</h2>
      <h4>{`Number of posts: ${data.allMarkdownRemark.totalCount}`}</h4>
      <hr></hr>
      <div className="post-main__wrapper">
        {
          data.allMarkdownRemark.edges.map( ({node}) => {
            return (
              <div className="post" key={node.id}>
                <div className="post-metadata">
                  <Link to={node.fields.slug} className="post-link">
                    <p className="post-title">
                      <span className="title-icon"><MdLocalActivity /></span> 
                      <span>{node.frontmatter.title}</span>
                    </p>
                    <p className="post-date">
                      <span className="title-icon"><MdLabel /></span>
                      <span>{node.frontmatter.date}</span>
                    </p>
                  </Link>
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