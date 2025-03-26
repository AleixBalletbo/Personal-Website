import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <BlogContainer>
          <Cover
            image={post.frontmatter.cover.childImageSharp.gatsbyImageData}
            alt="cover"
          />
          <Body>
            <Title>{post.frontmatter.title}</Title>
            <TagContainer>
              <Category color={post.frontmatter.category.color}>
                {post.frontmatter.category.label}
              </Category>
              {post.frontmatter.tags.map(tag => {
                return <Tag key={tag}>#{tag}</Tag>
              })}
            </TagContainer>
            <DateTime>{post.frontmatter.date}</DateTime>
            <Content>
              <MDXRenderer>{post.body}</MDXRenderer>
            </Content>
          </Body>
        </BlogContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const BlogContainer = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
  @media (max-width: 800px) {
    background-color: ${props => props.theme.primaryColor};
    border-radius: 0;
    margin: ${rhythm(-1 / 2)};
  }
`

const Cover = styled(GatsbyImage)`
  aspect-ratio: 5/2;
  img {
    border-radius: ${rhythm(1 / 4)} ${rhythm(1 / 4)} 0 0;
    @media (max-width: 800px) {
      border-radius: 0;
    }
  }
`

const Body = styled.div`
  padding: ${rhythm(1 / 2)};
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(1 / 2)};
  color: ${props => props.theme.accentColor};
  @media (max-width: 800px) {
    font-size: 7vw;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex: row;
  margin: 0 ${rhythm(-1 / 8)} ${rhythm(1 / 4)} ${rhythm(-1 / 8)};
  gap: ${rhythm(1 / 4)};
`

const Tag = styled.div`
  color: ${props => props.theme.tertiaryColor};
  border-radius: ${rhythm(1 / 4)};
  background-color: ${props => props.theme.secondaryColor};
  padding: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
  height: min-content;
`
const Category = styled(Tag)`
  color: ${props => props.theme.tertiaryColor};
  background-color: ${props => props.color};
`

const DateTime = styled.p`
  margin-bottom: ${rhythm(1 / 4)};
  font-size: 0.9em;
  color: ${props => props.theme.tertiaryColor};
`

const Content = styled.div`
  color: ${props => props.theme.quaternaryColor};
  text-align: justify;
  p {
    margin-bottom: ${rhythm(1 / 2)};
  }
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
          catId
          label
          color
        }
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`
