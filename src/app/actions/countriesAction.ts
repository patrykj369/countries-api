import { Dispatch } from "redux";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_EUROPE_COUNTRIES = "FETCH_EUROPE_COUNTRIES";
export const FETCH_ASIA_COUNTRIES = "FETCH_ASIA_COUNTRIES";
export const FETCH_AFRICA_COUNTRIES = "FETCH_AFRICA_COUNTRIES";
export const FETCH_AMERICA_COUNTRIES = "FETCH_AMERICA_COUNTRIES";
export const FETCH_OCEANIA_COUNTRIES = "FETCH_OCEANIA_COUNTRIES";

export  const  fetchData = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_DATA, data: json
                }
            ))
    }
}

export const fetchDataEurope = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/region/europe')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_EUROPE_COUNTRIES, data: json
                }
            ))
    }
}

export const fetchDataAsia = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/region/asia')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_ASIA_COUNTRIES, data: json
                }
            ))
    }
}

export const fetchDataAfrica = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/region/africa')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_AFRICA_COUNTRIES, data: json
                }
            ))
    }
}

export const fetchDataAmerica = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/region/americas')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_AMERICA_COUNTRIES, data: json
                }
            ))
    }
}

export const fetchDataOceania = () => {
    return (dispatch: Dispatch) => {
        return fetch('https://restcountries.eu/rest/v2/region/oceania')
            .then(response => response.json())
            .then(json=> dispatch(
                {
                    type: FETCH_OCEANIA_COUNTRIES, data: json
                }
            ))
    }
}