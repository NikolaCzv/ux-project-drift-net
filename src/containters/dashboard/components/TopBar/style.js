import styled from "styled-components";
import { colors } from '../../../../utils/colors'; 

export const Avatar = styled.img`
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
`;

export const Container = styled.div`
    width: 50vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
`;

export const UserName = styled.div`
    font-size: 38px;
    font-weight: bold;
    color: ${colors.mainColor};
`;