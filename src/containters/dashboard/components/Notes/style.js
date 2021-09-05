import styled from "styled-components";
import { colors } from '../../../../utils/colors';

export const AddBtn = styled.button`
    border: none;
    background-color: ${colors.mainColor};
    border-radius: 10px;
    height: 2rem;
    color: ${colors.white};
    margin-right: 15px;
    cursor: pointer;
`;

export const Card = styled.div`
    height: 18vh;
    width: 18vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    height: 90vh;
    width: 20vw;
    display: flex;
    flex-direction: column; 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    overflow: scroll;
`;

export const Header = styled.div`
    font-size: 28px;
    color: ${colors.mainColor};
    margin-left: 15px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Image = styled.img``;

export const NotesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;