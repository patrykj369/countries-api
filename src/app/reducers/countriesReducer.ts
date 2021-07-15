import {FETCH_DATA } from "../actions/countriesAction";
import { FETCH_EUROPE_COUNTRIES } from "../actions/countriesAction";
import { FETCH_ASIA_COUNTRIES } from "../actions/countriesAction";
import { FETCH_AFRICA_COUNTRIES } from "../actions/countriesAction";
import { FETCH_AMERICA_COUNTRIES } from "../actions/countriesAction";
import { FETCH_OCEANIA_COUNTRIES } from "../actions/countriesAction";

import {ICountry} from "../interfaces/ICountry"


export const getCountries = (state: ICountry[] = [], action: any ) => {
    switch(action.type) {
        case FETCH_DATA:
            return { ...state, data: action.data}
        case FETCH_EUROPE_COUNTRIES:
            return {...state, data: action.data}
        case FETCH_ASIA_COUNTRIES:
                return {...state, data: action.data}
        case FETCH_AFRICA_COUNTRIES:
                return {...state, data: action.data}
        case FETCH_AMERICA_COUNTRIES:
                return {...state, data: action.data}
        case FETCH_OCEANIA_COUNTRIES:
                return {...state, data: action.data}
        default:
            return state;
    }
}