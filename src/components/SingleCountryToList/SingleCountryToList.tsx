import React, {FC} from 'react';
import styled from 'styled-components'
import { colors } from '../../styledHelpers/colors';

// import {device} from './../../styledHelpers/deviceWidth'

const Wrapper = styled.div`
    width: 75vw;
    height: 50vh;
    border-radius: 8px;
    box-shadow: 0px 2px 7px -1px rgb(185, 185, 185);
`;

const Flag = styled.div`
    height: 50%;
    border-radius: 8px 8px 0 0;

    img{
        height: 100%;
        width: 100%;
        border-radius: 8px 8px 0 0;
    }
`;

const Info = styled.div`
    height: 50%;
    background-color: ${colors.whiteDMLM};
    border-radius: 0 0 8px 8px;
    padding: 4vh;

    span{
        font-weight: 600;
    }
`;

const Country = styled.h1`
    font-size: 5.5vw;
    margin-bottom: 2vh;
`;

const Population = styled.p`
    margin: 1vh 0;
`;
const Region = styled.p`
    margin: 1vh 0;
`;
const Capital = styled.p`
    margin: 1vh 0;
`;

interface props {
    flagUrl: string,
    nameCountry: string,
    population: string,
    region: string,
    capital: string
}


export const SingleCountryToList: FC<props> = (props) => {
    return (
        <Wrapper>
            <Flag>
                <img src={props.flagUrl} alt="flag"></img>
            </Flag>
            <Info>
                <Country>{props.nameCountry}</Country>
                <Population><span>Population: </span>{props.population}</Population>
                <Region><span>Region: </span>{props.region}</Region>
                <Capital><span>Capital: </span>{props.capital}</Capital>
            </Info>
        </Wrapper>
    )
}
