import { Country, Name, Currencies, Idd, Languages, Demonyms, Maps, Car, Flags, CoatOfArms, CapitalInfo, PostalCode } from '@interfaces/index';

export const name: Name = {
    common: '',
    official: '',
    nativeName: {
        ara: {
            official: '',
            common: ''
        },
        eng: {
            official: '',
            common: ''
        },
        tir: {
            official: '',
            common: ''
        }
    }
}

export const currencies: Currencies = {
    ERN: {
        symbol: '',
        name: ''
    }
}

export const idd: Idd = {
    root: '',
    suffixes: []
}

export const languages: Languages = {
    ara: '',
    eng: '',
    tir: ''
}

export const demonyms: Demonyms = {
    eng: {
        f: '',
        m: ''
    },
    fra: {
        f: '',
        m: ''
    }
}

export const maps: Maps = {
    googleMaps: '',
    openStreetMaps: ''
}

export const car: Car = {
    signs: [],
    side: ''
}

export const flags: Flags = {
    png: '',
    svg: '',
    alt: ''
}

export const coatOfArms: CoatOfArms = {
    png: '',
    svg: ''
}

export const capitalInfo: CapitalInfo = {
    latlng: []
}

export const postalCode: PostalCode = {
    format: null,
    regex: null
}

export const DataCountry: Country = {
    name: name,
    tld: [],
    cca2: '',
    ccn3: '',
    cioc: '',
    independent: false,
    status: '',
    unMember: false,
    currencies: currencies,
    idd: idd,
    capital: [],
    altSpellings: [],
    region: '',
    subregion: '',
    languages: languages,
    latlng: [],
    landlocked: false,
    borders: [],
    area: 0,
    demonyms: demonyms,
    cca3: '',
    translations: {},
    flag: '',
    maps: maps,
    population: 0,
    fifa: '',
    car: car,
    timezones: [],
    continents: [],
    flags: flags,
    coatOfArms: coatOfArms,
    startOfWeek: '',
    capitalInfo: capitalInfo,
    postalCode: postalCode
}