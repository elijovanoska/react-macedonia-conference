import { useState } from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";

const CardWrapper = styled.div`
display:flex;
flex-direction: column;
`


const CardImage = styled.img`
width: 180px;
height: 180px;
object-fit: cover;
opacity: 1;
position: relative;
z-index: 3;
border-radius: 20px;
`


const SpeakerName = styled.span`
color:white;
font-size: 20px;
font-weight: 700;
margin: 0;
padding: 10px 0 5px 0;
`

const SpeakerDescription = styled.span`
color: #9d9d9d;
font-size: 14px;
width: 180px;
`

const ButtonInfo = styled.button`
color: #CE1628;
font-size: 16px;
margin: 10px 0;
padding: 0;
border: none;
background: transparent;
width: 60px
`


const SpeakerCard = ({ picture, personName, index, id, description, fullDescription }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CardWrapper key={index}>
                <CardImage src={picture} alt={`Speaker ${personName}`} key={id} />
                <SpeakerName>{personName}</SpeakerName>
                <SpeakerDescription>{description}</SpeakerDescription>
                <ButtonInfo onClick={handleShow}>Full Info</ButtonInfo>

                <Modal
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{personName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><CardImage src={picture} alt={`Speaker ${personName}`} key={id} /><p>{fullDescription}</p></Modal.Body>
                </Modal>

            </CardWrapper>
        </>
    )
}

export default SpeakerCard