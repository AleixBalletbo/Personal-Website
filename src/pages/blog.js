import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogEntry from "../components/blog-entry"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div>
          {posts.map(({ node }) => {
            return (
              <BlogEntry
                key={node.fields.slug}
                cover={node.frontmatter.cover.publicURL}
                title={node.frontmatter.title || node.fields.slug}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                excerpt={node.excerpt}/>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              publicURL
            }
          }
        }
      }
    }
  }
`
