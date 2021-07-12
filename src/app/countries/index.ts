import { combineReducers } from "redux";
import countries, { ICountriesReducer } from "./reducers/reducers";

export default combineReducers({
    countries
})

export interface IState{
    countries: ICountriesReducer
}