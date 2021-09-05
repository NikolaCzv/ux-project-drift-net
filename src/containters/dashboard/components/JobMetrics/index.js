import React from 'react';
import { 
    Container,
    Content,
    Tab,
    TabButton
} from './style';

const JobMetrics = () => {
    return (
        <Container>
            <Tab>
                <TabButton selected={true}>Training</TabButton>
                <TabButton>Productivity Quota</TabButton>
                <TabButton>Goals</TabButton>
            </Tab>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Content>
        </Container>
    );
};

export default JobMetrics;