import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import JobPic from "../pics/job-pic"

export default function JobEntry (props) {
  return(
    <Container>
      <PicContainer>
        <JobPic
          image={props.icon}
          company={props.company}
        />
        <VerticalLine/>
      </PicContainer>
      <TextContainer>
        <HeadlineContainer>
          <Position>
            {props.position} at {props.company}
          </Position>
          <Duration>
            {props.startDate} - {props.endDate}
          </Duration>
        </HeadlineContainer>
        <Description>
          {props.description}
        </Description>
        <AchievementList>
          {
            props.achievements.map(achievement => {
              return (
                <Achievement>
                  {achievement}  
                </Achievement>
              )
            })
          }
        </AchievementList>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const PicContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const VerticalLine = styled.div`
  border-left: 6px solid ${props => props.theme.accentColor};
  flex: 1;
  align-self: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => props.theme.primaryColor};
  padding: ${rhythm(1 / 2)};
  border-radius: ${rhythm(1 / 4)};
  margin-left: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1 / 2)};
`

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${rhythm(1 / 2)};
  @media (max-width: 800px) {
    margin-bottom: ${rhythm(1 / 4)};
  }
  flex: 1;
  align-items: top;
  justify-content: space-between;
  color: ${props => props.theme.tertiaryColor};
`

const Position = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 4)};
  font-size: 1.1em;
`

const Duration = styled.h6`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.9em;
  text-align: right;
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0;
  white-space: pre-line;
`

const AchievementList = styled.ul`
  margin-top: ${rhythm(1 / 4)};
  margin-bottom: 0;
  margin-left: ${rhythm(3 / 4)};
  @media (max-width: 800px) {
    display: none;
  }
`

const Achievement = styled.li`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0;
`