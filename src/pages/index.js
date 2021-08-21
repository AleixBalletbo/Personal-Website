import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import {rhythm, scale} from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSummary from "../components/blog/blog-summary"
import ProjectsSummary from "../components/projects/projects-summary"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle} header="index">
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <SummaryContainer>
          <BlogSummary/>
          <ProjectsSummary/>
        </SummaryContainer>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rhythm(-3 / 8)} 0 ${rhythm(-3 / 8)};
  @media (max-width: 800px) {
    margin: 0 ${rhythm(-1 / 4)} 0 ${rhythm(-1 / 4)};
  }
`

export default IndexPage
