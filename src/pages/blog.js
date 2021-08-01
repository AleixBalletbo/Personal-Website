import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchArea from "../components/search-area"
import BlogEntry from "../components/blog-entry"

const Blog = props => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMdx.edges
  
  const [state, setState] = useState({
    query: "",
    filteredPosts: []
  })

  const handleInputChange = event => {
    const query = event.target.value

    const filteredPosts = allPosts.filter(post => {
      const {title, description} = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredPosts
    })
  }

  const {filteredPosts, query} = state
  const hasSearchResults = filteredPosts && query !== ""
  const posts = hasSearchResults ? filteredPosts : allPosts

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <SearchArea onChange={handleInputChange}/>
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
