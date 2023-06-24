import {
    Country,
    CountryDialInfo,
    getCountryDialCode,
    getCountryFlag,
    getCountryName
} from "../index";

describe('PlanetaryDials', () => {
  let expectedCountry: CountryDialInfo;

  beforeAll(() => {
    expectedCountry = {
      "flag": "https://flagsapi.com/AF/shiny/64.png",
      "code": "AF",
      "name": "Afghanistan",
      "dialCode": "+93"
    };
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
});
