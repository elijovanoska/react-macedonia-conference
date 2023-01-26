import styled from "styled-components";

import SpeakerCard from "./SpeakerCard";
import {cardsData} from '../../cardsData'

const SpeakersContentWrapper = styled.div`
  padding: 50px 15%;
  flex-direction: column;
`;

const SpeakersTitle = styled.h3`
font-size: 26px;
font-weight: 600;
`
const SpeakersText = styled.div`
font-size: 14px;
font-weight: 500;
color: #9d9d9d;
`
const SpeakersCardDisplay = styled.div`
display:grid;
gap: 40px 30px;
grid-template-columns: auto auto auto auto auto;
margin-top:70px;
`


const Speakers = () => {
    const cardDisplay = cardsData.map((card, i) => 
        <SpeakerCard
            picture={card.img}
            id={card.id}
            index={i}
            personName={card.personName}
            description={card.description}
            fullDescription={card.fullDescription}
        ></SpeakerCard> 
    )

    return (
        <SpeakersContentWrapper>
            <SpeakersTitle>Speakers</SpeakersTitle>
            <SpeakersText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
            </SpeakersText>
            <SpeakersCardDisplay>{cardDisplay}</SpeakersCardDisplay>
            
        </SpeakersContentWrapper>
    )
}

export default Speakers