import styled from "styled-components";
import { colors } from '../../../../utils/colors';

export const Container = styled.div`
    height: 18vh;
    width: 50vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
`;

export const Header = styled.div`
    font-size: 28px;
    color: ${colors.mainColor};
    margin: 10px;
`;

export const Meter = styled.div`
    width: 40vw;
    height: 20px;
    background: ${colors.silver};
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
`;

export const Span = styled.span`
    width: 30%;
    display: block;
    height: 100%;
    border-radius: 20px;
    background-color: rgb(43,194,83);
    background-image: linear-gradient(
        center bottom,
        rgb(43,194,83) 37%,
        rgb(84,240,84) 69%
    );
    box-shadow: 
    inset 0 2px 9px  rgba(255,255,255,0.3),
    inset 0 -2px 6px rgba(0,0,0,0.4);
    position: relative;
    overflow: hidden;
`;