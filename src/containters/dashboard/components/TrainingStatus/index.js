import React from 'react';
import { 
    Container,
    Content,
    Header,
    Meter,
    Span
} from './style';

const TrainingStatus = () => {
    return (
        <Container>
            <Header>Training Progress</Header>
            <Content>
                <Meter>
                    <Span />
                </Meter>
                30%
            </Content>
        </Container>
    );
};

export default TrainingStatus;