import React, {FC} from 'react';
import styled from 'styled-components';

//import {device} from './../../styledHelpers/deviceWidth';
import {fontSize} from './../../styledHelpers/fontSize';
import {colors} from './../../styledHelpers/colors';

const Wrapper = styled.div`
    width: 100vw;
    height: 13vh;
    background-color: ${colors.whiteDMLM};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: ${fontSize[16]};

    box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);

    .wrapper-text {
        font-weight: 800;
    }

    .btn-dark-mode{
        display: flex;
        align-items: center;
        font-size: .95rem;
        font-weight: 600;
        border: none;
        background-color: transparent;

        img{
            height: ${fontSize[16]};
            margin-right: 10px;
        }
    }
`;

export const Navbar: FC = () => {
    return(
        <Wrapper>
            <p className="wrapper-text">Where in the world?</p>
            <button className="btn-dark-mode"><img src="./icons/moon.svg" alt="moon icon"></img> Dark Mode</button>
        </Wrapper>
    );
}