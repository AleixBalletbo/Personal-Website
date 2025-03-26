import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/projects/project-card"
import { rhythm } from "../utils/typography"

const Projects = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allGithubData.nodes[0].data.user.pinnedItems.nodes

  return (
    <Layout location={props.location} title={siteTitle}>
      <Seo title="Projects" />

      <ProjectsContainer>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            forks={project.forkCount}
            stars={project.stargazerCount}
            description={project.description}
            language={project.primaryLanguage.name}
            languageColor={project.primaryLanguage.color}
            updatedAt={project.updatedAt}
            url={project.url}
          />
        ))}
      </ProjectsContainer>
    </Layout>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rhythm(-3 / 8)} 0 ${rhythm(-3 / 8)};
  @media (max-width: 800px) {
    margin: 0 ${rhythm(-1 / 4)} 0 ${rhythm(-1 / 4)};
  }
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allGithubData {
      nodes {
        data {
          user {
            name
            pinnedItems {
              nodes {
                description
                forkCount
                id
                name
                primaryLanguage {
                  color
                  name
                }
                repositoryTopics {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                stargazerCount
                updatedAt(formatString: "MMMM YYYY")
                url
              }
            }
          }
        }
      }
    }
  }
`
