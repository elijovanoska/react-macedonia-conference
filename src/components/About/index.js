import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TitleContainer = styled.div`
  width: 300px;
  padding: 5px;
  background-color: red;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 30px 0 10px 0;
`;
const DateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  font-size: 16px;
  font-weight: 700px;
`;
const MainTitle = styled.div`
color: #fff;
font-weight: 700;
font-size:28px;
width: 500px;
text-align: center;
`
const AboutContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 50px 0;
  flex-direction: row;
`;
const AboutTitle = styled.div`
font-size: 26px;
font-weight: 600;
width: 300px;
text-align: right;
padding-left: 50px;
`
const AboutText = styled.div`
font-size: 14px;
font-weight: 500;
text-align: left;
width: 300px;
`
const Paragraph = styled.p`
text-align: left;
`
function About() {
  return (
    <>
      <TitleWrapper>
        <TitleContainer>
          Learn how to create smarter, faster & better
        </TitleContainer>
      </TitleWrapper>
      <MainWrapper>
        <MainTitle>
                React Talks powered <i><span style={{fontSize: '22px'}}>by</span></i> IWConnect
            </MainTitle>
      </MainWrapper>
      <DateWrapper>
            13 & 14 October, 2023, Hilton Hotel, Skopje
      </DateWrapper>
      <AboutContentWrapper>
            <AboutTitle>Why to attend?</AboutTitle>
            <AboutText>
              <Paragraph>
              React and React Native are popular JavaScript libraries used for building highly 
              performant and efficient solutions for web and mobile applications.  
              </Paragraph>
              <Paragraph>
              Attending a conference focused on React and React Native can be a great way for developers to learn from experienced speakers and gain new insights into the latest trends and best practices in the field. The conference will provide a high level of knowledge and experience, 
              and it can help developers become smarter and better at their craft.
              </Paragraph>
              <Paragraph>
              If you’re a developer interested in React and React Native, consider attending a conference focused on these technologies. You will have the opportunity to learn from industry experts, network with other developers, and gain a deeper understanding of the latest solutions and trends in the field. This can be especially valuable for developers who have eager to learn more, but also for ones who are new to React and React Native so the conference will provide 
              them with a solid foundation for their future learning and development. 
              </Paragraph>

            </AboutText>
      </AboutContentWrapper>
    </>
  );
}

export default About;
