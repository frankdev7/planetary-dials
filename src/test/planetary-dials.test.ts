import {
  Country,
  CountryDialInfo,
  getCountryDialCode,
  getCountryFlag,
  getCountryName,
  getMultipleCountryDialInfo
} from "../index";

describe('PlanetaryDials', () => {
  let expectedCountry: CountryDialInfo;
  let multipleCountryDialInfo: CountryDialInfo[];

  beforeAll(() => {
    expectedCountry = {
      "flag": "https://flagsapi.com/AF/shiny/64.png",
      "code": "AF",
      "name": "Afghanistan",
      "dialCode": "+93"
    };

    multipleCountryDialInfo = [
      {
        flag: "https://flagsapi.com/US/shiny/64.png",
        code: "US",
        name: "United States",
        dialCode: "+1"
      },
      {
        flag: "https://flagsapi.com/CA/shiny/64.png",
        code: "CA",
        name: "Canada",
        dialCode: "+1"
      }
    ];
  });

  it('should get dial code for AF', () => {
    const result = getCountryDialCode(Country.AF);
    console.log(result);
    expect(result).toBe(expectedCountry.dialCode);
  });

  it('should get flag for AF', () => {
    const result = getCountryFlag(Country.AF);
    console.log(result);
    expect(result).toBe(expectedCountry.flag);
  });

  it('should get name for AF', () => {
    const result = getCountryName(Country.AF);
    console.log(result);
    expect(result).toBe(expectedCountry.name);
  });

  it('should return an array of country dial info', () => {
    const countryCodes: Country[] = [Country.US, Country.CA];
    const result = getMultipleCountryDialInfo(countryCodes);

    expect(result).toEqual(multipleCountryDialInfo);
  });
});
