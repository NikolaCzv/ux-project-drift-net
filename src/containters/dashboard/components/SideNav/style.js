import styled from "styled-components";
import { colors } from '../../../../utils/colors';

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    border-radius: 10px;
    display: flex;
    align-items: center;
    height: 5vh;
    border: none;
    cursor: pointer;
    background-color: ${props => props.selected ? colors.mainColor : colors.white};
    color: ${props => props.selected ? colors.white : colors.black};
    &:hover {
        color: ${colors.black};
        background-color: ${colors.subColor};
      }
`;

export const Container = styled.div`
    height: 90vh;
    width: 20vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const IconHolder = styled.img`
    margin: 10px;
`;

export const ImgHolder = styled.img`
    
`;

export const TopButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 20vh;
`;