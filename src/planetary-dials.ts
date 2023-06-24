import { Country } from './country.enum';
import { PlanetaryDials } from './dials.data';
import { CountryDialInfo, PlanetartDials } from './types';

export const getPlanetaryDials = (): PlanetartDials => {
    return PlanetaryDials;
}

export const getCountryDialInfo = (countryCode: Country): CountryDialInfo => {
    const country = PlanetaryDials[countryCode];
    return country;
}

export const getCountryDialCode = (countryCode: Country): string => {
    const country = PlanetaryDials[countryCode];
    return country && country.dialCode;
}

export const getCountryName = function (countryCode: Country): string {
    const country: CountryDialInfo = PlanetaryDials[countryCode];
    return country && country.name;
}

export const getCountryFlag = function (countryCode: Country): string {
    const country = PlanetaryDials[countryCode];
    return country && country.flag;
}

export const getMultipleCountryDialInfo = (countryCodes: Country[]): CountryDialInfo[] => {
    let countryDialInfos: CountryDialInfo[] = [];

    countryCodes.forEach((countryCode) => {
        const countryDialInfo = getCountryDialInfo(countryCode);
        if (countryDialInfo) {
            countryDialInfos.push(countryDialInfo);
        }
    });
    return countryDialInfos;
}
