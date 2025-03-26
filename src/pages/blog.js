import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SearchArea from "../components/blog/search-area"
import BlogEntry from "../components/blog/blog-entry"

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMdx.edges

  // Prepare state objects

  const [queryState, setQueryState] = useState({
    query: "",
  })

  const [categoryState, setCategoryState] = useState({
    categoryId: "0",
  })

  const [postsState, setPostsState] = useState({
    filteredPosts: allPosts,
  })

  // Handle changes in input text

  const handleInputChange = event => {
    const query = event.target.value

    const filteredPosts = filterPostsByQuery(
      query,
      filterPostsByCategory(categoryState.categoryId, allPosts)
    )

    setQueryState({
      query,
    })

    setPostsState({
      filteredPosts,
    })
  }

  function filterPostsByQuery(query, posts) {
    return posts.filter(post => {
      const { title, description, tags } = post.node.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join("")
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
  }

  // Handle changes in category selector

  const handleCategoryChange = event => {
    const categoryId = event.target.value

    const categoryPosts = filterPostsByQuery(
      queryState.query,
      filterPostsByCategory(categoryId, allPosts)
    )

    setCategoryState({
      categoryId,
    })

    setPostsState({
      filteredPosts: categoryPosts,
    })
  }

  function filterPostsByCategory(categoryId, posts) {
    return posts.filter(post => {
      const postCategoryId = post.node.frontmatter.category.catId
      return categoryId === "0" || categoryId === postCategoryId.toString()
    })
  }

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="Blog" />
      <SearchArea
        onTextChange={handleInputChange}
        onCategoryChange={handleCategoryChange}
      />
      <div>
        {postsState.filteredPosts.map(({ node }) => {
          return (
            <BlogEntry
              key={node.fields.slug}
              title={node.frontmatter.title || node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              description={node.frontmatter.description}
              tags={node.frontmatter.tags}
              category={node.frontmatter.category}
              excerpt={node.excerpt}
              cover={node.frontmatter.cover.childImageSharp.gatsbyImageData}
            />
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
            tags
            category {
              catId
              label
              color
            }
            cover {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
