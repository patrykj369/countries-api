import React, {FC} from 'react';
import styled from 'styled-components';
// import { fontSize } from '../../styledHelpers/fontSize';
import {colors} from './../../styledHelpers/colors';

const Wrapper = styled.div`
    height: 8vh;
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);
    background-color: ${colors.whiteDMLM};

    input {
        height: 7.8vh;
        width: 70%;
        font-size: 4vw;
        border: none;
    }

    img {
        height: 5vw;
        margin-right: 1.5rem;
    }
`;

export const Searchbar: FC = () => {
    return(
        <Wrapper>
            <img src="./icons/search.svg" alt="searchbar"/>
            <input type="text" placeholder="Search for a country..."></input>
        </Wrapper>
    )
}