import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

import StarImage from "../../../static/svg/star.svg"
import ForkImage from "../../../static/svg/fork.svg"

export default function ProjectSummaryCard (props) {
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
              <ForkIcon/>
            </Stat>
            <Stat>
              <StatNumber>
              {props.stars}
              </StatNumber>
              <StarIcon/>
            </Stat>
          </StatsContainer>
        </TitleContainer>
        <Description>
          {props.description}
        </Description>
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
  margin-bottom: ${rhythm(1 / 2)};
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
  padding: ${rhythm(1 / 4)};
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rhythm(1 / 8)}
`

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.tertiaryColor};
  font-family: Montserrat,sans-serif;
  font-size: larger;
  align-self: center;
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
  font-size: ${rhythm(3 / 4)};
`

const StarIcon = styled(StarImage)`
  margin: 0;
  fill: ${props => props.theme.accentColor};
`

const ForkIcon = styled(ForkImage)`
  margin: 0;
  fill: ${props => props.theme.accentColor};
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0;
  font-size: 0.9em;
  line-height: normal;
`