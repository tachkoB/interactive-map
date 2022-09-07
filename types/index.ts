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

export interface MappedCountry {
  [id: string]: Country;
}

export interface TooltipState {
  name: string;
  capital: string;
  languages: Array<string>;
}
