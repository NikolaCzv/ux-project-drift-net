import React from 'react';
import notesImg from '../../../../assets/images/notes-img.png';
import { 
    AddBtn,
    Card,
    Container,
    Header,
    HeaderWrapper,
    Image,
    NotesWrapper
 } from './style';

const Notes = () => {
    return (
        <Container>
            <Image src={notesImg}/>
            <HeaderWrapper>
                <Header>Notes</Header>
                <AddBtn>Add Notes</AddBtn>
            </HeaderWrapper>
            <NotesWrapper>
                <Card>Note Content Here</Card>
                <Card>Note Content Here</Card>
                <Card>Note Content Here</Card>
            </NotesWrapper>
        </Container>
    );
};

export default Notes;