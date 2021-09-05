import React from 'react';
import { 
    Container,
    Header,
    ListItem
 } from './style';

const WeeklyGoals = () => {
    return (
        <Container>
            <Header>Weekly Goals</Header>
            <ul>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</ListItem>
            </ul>
        </Container>
    );
};

export default WeeklyGoals;