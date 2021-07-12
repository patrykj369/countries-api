import { Dispatch } from 'redux';
import * as countriesTypes from "../types/types"
import { ICountries } from "../entities/ICountries";


export const getCountries = (): Promise<ICountries[]> => ((dispatch: Dispatch) => {
    return fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then((countriesList: ICountries[]) =>{
            dispatch({
                type: countriesTypes.GET_COUNTRIES,
                countriesList
            })
        })
}) as any;

