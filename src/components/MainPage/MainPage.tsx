import React, {FC} from 'react';
import styled from 'styled-components';

import {device} from './../../styledHelpers/deviceWidth';
import {colors} from './../../styledHelpers/colors';
import { Navbar } from '../Navbar/Navbar';
import { Searchbar} from '../Searchbar/Searchbar';

const MyComponent = styled.div`
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${colors.veryLightGrayLM};
    @media ${device.mobileS}{
    }

    .searchbar{
        width: 100vw;
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
    }
`;


export const MainPage: FC = () => {
    return (
        <MyComponent>
            <Navbar/>

            <div className="searchbar">
                <Searchbar/>
            </div>

        </MyComponent>
    )
}
