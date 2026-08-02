export type PlacePrediction = {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
};

export type PlaceDetails = {
  placeId: string;
  name: string;
  formattedAddress: string;
  latitude: number;
  longitude: number;
  types: string[];
};
