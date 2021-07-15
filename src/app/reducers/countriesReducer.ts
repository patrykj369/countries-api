import {FETCH_DATA } from "../actions/countriesAction";

import {ICountry} from "../interfaces/ICountry"


export const getCountries = (state: ICountry[] = [], action: any ) => {
    switch(action.type) {
        case FETCH_DATA:
            return { ...state, data: action.data}
        default:
            return state;
    }
}