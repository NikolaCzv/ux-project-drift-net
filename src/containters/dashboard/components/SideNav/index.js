import React from 'react';
import dashIcon from '../../../../assets/icons/dash.svg';
import accIcon from '../../../../assets/icons/account.svg';
import settingsIcon from '../../../../assets/icons/settings.svg';
import signOutIcon from '../../../../assets/icons/sign-out.svg';
import sideNavImg from '../../../../assets/images/sideNavImg.png';

import {
    BottomWrapper,
    Button,
    Container,
    IconHolder,
    ImgHolder,
    TopButtonsWrapper
 } from './style';

const SideNav = () => {
    return (
        <Container>
            <TopButtonsWrapper>
                <Button selected={true}>
                  <IconHolder src={dashIcon} alt="dash"/> Dashboard
                </Button>
                <Button>
                    <IconHolder src={accIcon} alt="account"/> Account
                </Button>
                <Button>
                    <IconHolder src={settingsIcon} alt="settings"/> Settings
                </Button>
            </TopButtonsWrapper>
            <BottomWrapper>
                <ImgHolder src={sideNavImg}/>
                <Button>
                    <IconHolder src={signOutIcon} alt="sign-out"/> Sign Out
                </Button>
            </BottomWrapper>
        </Container>
    );
};

export default SideNav;