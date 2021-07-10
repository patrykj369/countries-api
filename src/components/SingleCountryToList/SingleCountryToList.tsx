import React, {FC} from 'react';
import styled from 'styled-components'
import { colors } from '../../styledHelpers/colors';

import {device} from './../../styledHelpers/deviceWidth'

const Wrapper = styled.div`
    width: 75vw;
    height: 50vh;
    border-radius: 8px;
`;

const Flag = styled.div`
    height: 50%;
    background-color: aqua;
    border-radius: 8px 8px 0 0;

    img{
        width: 100%;
        border-radius: 8px 8px 0 0;
    }
`;

const Info = styled.div`
    height: 50%;
    background-color: ${colors.whiteDMLM};
    border-radius: 0 0 8px 8px;
`;

const Country = styled.h1`

`;

const Population = styled.p``;
const Region = styled.p``;
const Capital = styled.p``;

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
                <Population>{props.population}</Population>
                <Region>{props.region}</Region>
                <Capital>{props.capital}</Capital>
            </Info>
        </Wrapper>
    )
}
