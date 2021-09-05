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

export const Header = styled.div`
    font-size: 28px;
    color: ${colors.mainColor};
    margin: 10px;
`;

export const ListItem = styled.li`
    margin-top: 10px;
`;
