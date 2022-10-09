export const BASE_URLS = {
  PARSERS_BASE_URL: "/converters",
  PLAYGROUND_BASE_URL: "/playgrounds",
};

export enum CATEGORIES {
  PARSERS = "Parsers",
  PLAYGROUNDS = "Playgrounds",
}

export type IRoutes = {
  url: string;
  title: string;
  category: CATEGORIES;
  description: string;
};
const Routes = {
  JSON_TO_TS: {
    url: BASE_URLS.PARSERS_BASE_URL + "/json-to-ts",
    title: "JSON to Typescript",
    category: CATEGORIES.PARSERS,
    description: "Transform your JSON into Typescript interfaces.",
  },

  PLAYGROUND_JS: {
    url: BASE_URLS.PLAYGROUND_BASE_URL + "/js",
    title: "Javascript playground",
    category: CATEGORIES.PLAYGROUNDS,
    description: "Try code fragments and run them in real time.",
  },
  PLAYGROUND_TS: {
    url: BASE_URLS.PLAYGROUND_BASE_URL + "/ts",
    title: "Typescript playground",
    category: CATEGORIES.PLAYGROUNDS,
    description: "Try code fragments and run them in real time.",
  },
};
export default Routes;
