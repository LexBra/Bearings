/**
 * Navigation param lists for Bearings.
 * Empty params for now — extend when a screen needs route params.
 */
export type AuthStackParamList = {
  welcome: undefined;
  login: undefined;
  "sign-up": undefined;
};

export type MainTabParamList = {
  index: undefined;
  search: undefined;
  saved: undefined;
  map: undefined;
  profile: undefined;
};

export type RootStackParamList = {
  index: undefined;
  "(auth)": undefined;
  "(tabs)": undefined;
};
