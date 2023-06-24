export type CountryDialInfo = {
    flag: string;
    code: string;
    name: string;
    dialCode: string;
}

export interface PlanetartDials {
    [code: string]: CountryDialInfo;
}