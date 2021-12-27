import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import IndexPic from "../components/pics/index-pic"
import JobEntry from "../components/about/job-entry"

const AboutMe = props => {

  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const jobs = data.allJobsJson.nodes

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="About Me" />
      <Title>
        About Me
      </Title>
      <IndexPicContainer>
       <IndexPic/>
      </IndexPicContainer>
      <Description>
        Hi there 👋! I'm Aleix Balletbó, software & data engineer and technology enthusiast.
      </Description>
      <Description>
        I'm specialized in data technologies, and I've been working the last years in Big Data projects. 
        However, I'm passionate about all the fields related to software engineering, and I have experience developing projects for mobile, web and videogames.
      </Description>
      <Description>
        I believe that a strong knowledge of software architecture and best practices, combined with agile methodologies and a product mindset are the key principles 
        to achieve the best possible outcome and deliver value that makes a diference. 
      </Description>
      <Section>
        Work Experience
      </Section>
      <div>
        {
          jobs.map(job => {
            return (
              <JobEntry
                key={job.id}
                company={job.company}
                icon={job.icon.src.childImageSharp.gatsbyImageData}
                position={job.position}
                startDate={job.startDate}
                endDate={job.endDate}
                description={job.description}
                achievements={job.achievements}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default AboutMe

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: ${rhythm(3 / 4)};
  text-align: center;
  color: ${props => props.theme.accentColor};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
    font-size: 7vw;
  }
`

const IndexPicContainer = styled.div`
  align-self: center;
  margin-bottom: ${rhythm(1 / 2)};
`

const Description = styled.p`
  margin-bottom: ${rhythm(1 / 2)};
  color: ${props => props.theme.quaternaryColor};
  white-space: pre-line;
  text-align: justify;
`

const Section = styled.h2`
  margin-top: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1 / 2)};
  color: ${props => props.theme.accentColor};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 2)};
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allJobsJson {
      nodes {
        id
        company
        icon {
          src {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 80, height: 80, quality: 100)
            }
          }
        }
        position
        startDate
        endDate
        description
        achievements
      }
    }
  }
`