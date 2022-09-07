export interface Country {
  code: string;
  name: string;
  capital: string;
  languages: Array<Language>;
}

interface Language {
  name: string;
}

export interface Countries {
  countries: Array<Country>;
}

export interface MappedCountry extends Omit<Country, 'languages'> {
  languages: Array<string>;
}

export type MappedCountries = Record<string, MappedCountry>;
