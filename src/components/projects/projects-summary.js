import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import ProjectSummaryCard from "./projects-summary-card"

export default function ProjectsSummary () {
  return(
    <StaticQuery
      query={projectsSummaryQuery}
      render={data => {
        const allProjects = data.allGithubData.nodes[0].data.user.pinnedItems.nodes
        const firstProjects = allProjects.slice(0, 3)
        return (
        <ProjectsSummaryContainer>
          <Title>Featured Projects</Title>
          {
            firstProjects.map(project => {
              return (
                <ProjectSummaryCard
                  name={project.name}
                  forks={project.forkCount}
                  stars={project.stargazerCount}
                  languageColor={project.primaryLanguage.color}
                  description={project.description}
                  url={project.url}/>
              )
            })
          }
        </ProjectsSummaryContainer>)
      }}
    />
  )
}

const ProjectsSummaryContainer = styled.div`
  flex: 45%;
  margin: 0 ${rhythm(3 / 8)} 0 ${rhythm(3 / 8)};
  @media (max-width: 800px) {
    margin: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
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

export const projectsSummaryQuery = graphql`
  query {
    allGithubData(limit: 3) {
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
                stargazerCount
                url
              }
            }
          }
        }
      }
    }
  }
`