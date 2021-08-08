import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export default function ProjectCard (props) {
  return(
      <Container href={props.url} target="_blank">
        <LeftBar color={props.languageColor}/>
        <Content>
          <TitleContainer>
            <Title>{props.name}</Title>
            <StatsContainer>
              <Stat>
                <StatNumber>
                  {props.forks}
                </StatNumber>
                <Icon src="/git-fork.svg"/>
              </Stat>
              <Stat>
                <StatNumber>
                {props.stars}
                </StatNumber>
                <Icon src="/star.svg"/>
              </Stat>
            </StatsContainer>
          </TitleContainer>
          <Description>
            {props.description}
          </Description>
          <BottomContainer>
            <LanguageTag color={props.languageColor}>
              {props.language}
            </LanguageTag>
            <UpdatedAt>
              {props.updatedAt}
            </UpdatedAt>
          </BottomContainer>
        </Content>
      </Container>

  )
}

const Container = styled.a`
  flex: 45%;
  background-color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  display: flex;
  flex-direction: row;
  margin: 0 ${rhythm(3 / 8)} ${rhythm(3 / 4)} ${rhythm(3 / 8)};
  @media (max-width: 800px) {
    margin: 0 ${rhythm(1 / 4)} ${rhythm(1 / 2)} ${rhythm(1 / 4)};
  }
  min-width: 300px;
  box-shadow: 0 0 0;
`

const LeftBar = styled.div`
  width: ${rhythm(1 / 4)};
  flex-shrink: 0;
  background-color: ${props => props.color};
  border-radius: ${rhythm(1 / 4)} 0 0 ${rhythm(1 / 4)};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${rhythm(1 / 2)};
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 4)};
  }
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.accentColor};
  font-family: Montserrat,sans-serif;
  @media (max-width: 800px) {
    font-size: 5vw;
  }
`

const StatsContainer = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  height: min-content;
`

const Stat = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${rhythm(1 / 4)};
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.quaternaryColor};
`

const StatNumber = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 10)};
  font-size: ${rhythm(3/4)};
`

const Icon = styled.img`
  margin: 0;
  width: 100%;
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 4)};
  }
`

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`

const LanguageTag = styled.div`
  color: ${props => props.theme.primaryColor};
  border-radius: ${rhythm(1 / 4)};
  background-color: ${props => props.color};
  padding: 0 ${rhythm(1 / 4)} 0 ${rhythm(1 / 4)};
  margin-right: ${rhythm(1 / 4)};
`

const UpdatedAt = styled.p`
  font-size: ${rhythm(1/2)};
  color: ${props => props.theme.quaternaryColor};
  margin-left: auto;
  margin-bottom: 0;
  &:before {
    content: 'Updated ';
  }
`