import { ICountries } from "../entities/ICountries";
import {GET_COUNTRIES} from "../types/types";

export interface ICountriesReducer {
    countriesList: ICountries[];
}

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = {}, action: any) =>{
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state
            }
        default:
            return state;
    }
}