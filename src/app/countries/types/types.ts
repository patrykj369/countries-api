import { ICountries } from "../entities/ICountries";

export const GET_COUNTRIES = "GET_COUNTRIES";

export interface ICountriesTypes {
    GET_COUNTRIES: {
        countries: ICountries[];
    }
}