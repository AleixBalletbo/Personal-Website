import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>{post.frontmatter.title}</Title>
        <TagContainer>
          <Category color={post.frontmatter.category.color}>
            {post.frontmatter.category.label}
          </Category>
          {post.frontmatter.tags.map(tag => {
            console.log(this.props)
            return (
              <Tag key={tag}>
                #{tag}
              </Tag>
            )
          })}
        </TagContainer>
        <Content>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1)
            }}
          >
            {post.frontmatter.date}
          </p>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Content>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default BlogPostTemplate

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;
  color: ${props => props.theme.accentColor};
`

const TagContainer = styled.div`
  display: flex;
  flex: row;
  margin: 0 ${rhythm(-1 / 8)} ${rhythm(1 / 4)} ${rhythm(-1 / 8)};
`

const Tag = styled.div`
  color: ${props => props.theme.tertiaryColor};
  border-radius: ${rhythm(1 / 4)};
  background-color: ${props => props.theme.primaryColor};
  padding: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
  margin: 0 ${rhythm(1 / 8)} 0 ${rhythm(1 / 8)};
  height: min-content;
`
const Category = styled(Tag)`
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.color};
`

const Content = styled.div`
  color: ${props => props.theme.quaternaryColor};
`

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`
