import React, {FC, useEffect} from 'react';
import styled from 'styled-components';

import {device} from './../../styledHelpers/deviceWidth';
import {colors} from './../../styledHelpers/colors';
import { Navbar } from '../Navbar/Navbar';
import { Searchbar} from '../Searchbar/Searchbar';
import { Filterbar} from '../Filterbar/Filterbar';
import { SingleCountryToList } from '../SingleCountryToList/SingleCountryToList';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../app/actions/countriesAction';


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

    .single-card{
        margin-bottom: 5vh;
    }

`;


export const MainPage: FC = () => {
     const {data} = useSelector((state: RootStateOrAny) => state.getCountries);

    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(fetchData());
    }, [dispatch])


    console.log(data)

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
                <div>
                    {
                        data?.map((data: any)=>{
                            return(
                                <div className="single-card" key={"key"+ data.alpha3Code}>
                                    <SingleCountryToList
                                        flagUrl= {data.flag}
                                        nameCountry = "test"
                                        population = "81,770,900"
                                        region = "Europe"
                                        capital = "Berlin"
                                    />
                                </div>
                            )

                        })
                    }
                </div>

            </div>


        </MyComponent>
    )
}
