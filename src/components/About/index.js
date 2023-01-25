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
  padding: 30px 0;
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
width: 400px;
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
padding-right: 50px;
width: 300px;
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
          BIGGEST REACT MACEDONIA CONFERENCE <i><span style={{ fontSize: '22px' }}>by</span></i> IWC
        </MainTitle>
      </MainWrapper>
      <DateWrapper>
        13 & 14 October, 2023, Hilton Hotel, Skopje
      </DateWrapper>
      <AboutContentWrapper>
        <AboutTitle>REACT is just getting better and better</AboutTitle>
        <AboutText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.</AboutText>
      </AboutContentWrapper>
    </>
  );
}

export default About;
