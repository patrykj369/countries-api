import { Dispatch } from "redux";

export const FETCH_DATA = "FETCH_DATA";

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