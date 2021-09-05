import styled from "styled-components";
import { colors } from '../../../../utils/colors';

export const Container = styled.div`
    height: 18vh;
    width: 50vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    overflow: scroll;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Tab = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const TabButton = styled.button`
    width: 100%;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    height: 4vh;
    background-color: ${props => props.selected ? colors.mainColor : colors.white};
    color: ${props => props.selected ? colors.white : colors.black};
    &:hover {
        color: ${colors.black};
        background-color: ${colors.subColor};
      }
`;