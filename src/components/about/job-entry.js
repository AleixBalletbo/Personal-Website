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
            props.achievements.map((achievement, index) => {
              return (
                <Achievement key={index}>
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
  margin-bottom: ${rhythm(3 / 4)};
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
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
`

const Position = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 4)};
  color: ${props => props.theme.tertiaryColor};
`

const Duration = styled.h6`
  margin-top: 0;
  margin-bottom: 0;
  text-align: right;
  color: ${props => props.theme.tertiaryColor};
`

const Description = styled.p`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0;
  white-space: pre-line;
  text-align: justify;
`

const AchievementList = styled.ul`
  margin-top: ${rhythm(1 / 4)};
  margin-bottom: 0;
  margin-left: ${rhythm(3 / 4)};
  text-align: justify;
  @media (max-width: 800px) {
    display: none;
  }
`

const Achievement = styled.li`
  color: ${props => props.theme.quaternaryColor};
  margin-bottom: 0;
`