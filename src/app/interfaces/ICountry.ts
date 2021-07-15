export interface ICountry{
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    regiom: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeNames: string,
    numericCode: string,
    currencies: [{
        code: string,
        name: string,
        symbol: string,
    }],
    languages: [{
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeNames: string,
    }],
    translations: {
        de: string,
        es: string,
        fr: string,
        ja: string,
        it: string,
        br: string,
        pt: string,
        nl: string,
        hr: string,
        fa: string,
    },
    flag: string,
    regionalBlocs: [{
        acronym: string,
        name: string,
        otherAcronyms: [],
        otherNames: [],
    }],
    cioc: string;
}