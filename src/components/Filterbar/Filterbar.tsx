import React, {FC} from 'react';
import styled from 'styled-components';

import {colors} from './../../styledHelpers/colors';
import { fontSize } from '../../styledHelpers/fontSize';

const Wrapper = styled.div`
    width: 50vw;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);
    background-color: ${colors.whiteDMLM};
    font-size: ${fontSize[14]};
    .arrow-down{
        height: 1rem;
    }
`;

export const Filterbar: FC = () => {
    return(
        <Wrapper>
            <p>Filter by Region</p>
            <img className="arrow-down" src="./icons/keyboard_arrow_down.svg" alt="Arrow Down"></img>
        </Wrapper>
    );
}