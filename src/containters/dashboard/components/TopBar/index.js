import React from 'react';
import avatarImg from '../../../../assets/images/img_avatar.png';
import {
    Avatar,
    Container,
    UserInfo,
    UserName,
} from './style';

const TopBar = () => {
    return (
        <Container>
            <Avatar src={avatarImg}/>
            <UserInfo>
                <UserName>
                    Nikola Raicic
                </UserName>
                Status - in training
            </UserInfo>
        </Container>
    );
};

export default TopBar;