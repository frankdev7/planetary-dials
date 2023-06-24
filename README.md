# Planetary Dials 🌍

Planetary Dials is a utility library for mapping country codes, dial codes, and their flags.

## Installation

To install this library, you can use the following command:

```bash
npm install --save planetary-dials
```

## Usage

Here's an example of how you can use this library in your code:

```typescript
import {
    Country,
    getPlanetaryDials,
    getCountryDialCode,
    getCountryFlag,
    getCountryName
} from "planetary-dials";

// one country
console.log(getPlanetaryDials());
console.log(getCountryDialCode(Country.AF));
console.log(getCountryFlag(Country.AF));
console.log(getCountryName(Country.AF));

// multiple countries
const countryCodes: Country[] = [Country.US, Country.CA];
const result = getMultipleCountryDialInfo(countryCodes);
console.log(result);
```

## Contributing

Contributions to this project are welcome. Please open an issue or pull request on GitHub.

## License

This project is licensed under the ISC license.

This library is inspired by [michaelolof's country-flags-dial-codes](https://github.com/michaelolof/country-flags-dial-codes)".