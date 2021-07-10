import React, {FC} from 'react';
import styled from 'styled-components';

import {device} from './../../styledHelpers/deviceWidth';
import {colors} from './../../styledHelpers/colors';
import { Navbar } from '../Navbar/Navbar';
import { Searchbar} from '../Searchbar/Searchbar';
import { Filterbar} from '../Filterbar/Filterbar';
import { SingleCountryToList } from '../SingleCountryToList/SingleCountryToList';

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

    .filterbar{
        margin-top: 2rem;
        margin-left: 5vw;
    }

    .countries-cards{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
    }

`;


export const MainPage: FC = () => {
    return (
        <MyComponent>
            <Navbar/>

            <div className="searchbar">
                <Searchbar/>
            </div>

            <div className="filterbar">
               <Filterbar></Filterbar>
            </div>

            <div className="countries-cards">
                <SingleCountryToList
                    flagUrl= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png"
                    nameCountry = "Germany"
                    population = "81,770,900"
                    region = "Europe"
                    capital = "Berlin"
                />
            </div>


        </MyComponent>
    )
}
