import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import BlogSummaryEntry from "./blog-summary-entry"

export default function BlogSummary () {
  return(
    <StaticQuery
      query={blogSummaryQuery}
      render={data => {
        const allPosts = data.allMdx.edges
        return (
        <BlogSummaryContainer>
          <Title>Latest Posts</Title>
          {
            allPosts.map(({node}) => {
              return (
                <BlogSummaryEntry
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  category={node.frontmatter.category}
                  tags={node.frontmatter.tags}
                />
              )
            })
          }
        </BlogSummaryContainer>)
      }}
    />
  )
}

const BlogSummaryContainer = styled.div`
  flex: 45%;
  margin: 0 ${rhythm(3 / 8)} ${rhythm(3 / 4)} ${rhythm(3 / 8)};
  @media (max-width: 800px) {
    margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 2)} ${rhythm(1 / 4)};
  }
  min-width: 300px;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 2)};
  color: ${props => props.theme.accentColor};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

export const blogSummaryQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            category {
              id
              label
              color
            }
          }
        }
      }
    }
  }
`