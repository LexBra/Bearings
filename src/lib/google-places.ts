import { env } from "@/constants/env";
import type { PlacePrediction, PlaceDetails } from "@/types/places";

const PLACES_BASE_URL = "https://places.googleapis.com/v1";

type AutocompleteResponse = {
  suggestions?: Array<{
    placePrediction?: {
      placeId?: string;
      text?: { text?: string };
      structuredFormat?: {
        mainText?: { text?: string };
        secondaryText?: { text?: string };
      };
    };
  }>;
};

/**
 * Thin Google Places (New) API wrapper.
 * Keep network calls here so screens stay simple and testable.
 */
export async function autocompletePlaces(
  input: string,
  sessionToken?: string,
): Promise<PlacePrediction[]> {
  if (!input.trim()) {
    return [];
  }

  if (!env.googlePlacesApiKey) {
    throw new Error("Missing EXPO_PUBLIC_GOOGLE_PLACES_API_KEY");
  }

  const response = await fetch(`${PLACES_BASE_URL}/places:autocomplete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": env.googlePlacesApiKey,
    },
    body: JSON.stringify({
      input,
      sessionToken,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Places autocomplete failed: ${message}`);
  }

  const data = (await response.json()) as AutocompleteResponse;

  return (data.suggestions ?? [])
    .map((suggestion) => suggestion.placePrediction)
    .filter((prediction): prediction is NonNullable<typeof prediction> =>
      Boolean(prediction?.placeId),
    )
    .map((prediction) => ({
      placeId: prediction.placeId!,
      description: prediction.text?.text ?? "",
      mainText: prediction.structuredFormat?.mainText?.text ?? "",
      secondaryText: prediction.structuredFormat?.secondaryText?.text ?? "",
    }));
}

export async function getPlaceDetails(placeId: string): Promise<PlaceDetails> {
  if (!env.googlePlacesApiKey) {
    throw new Error("Missing EXPO_PUBLIC_GOOGLE_PLACES_API_KEY");
  }

  const fieldMask = [
    "id",
    "displayName",
    "formattedAddress",
    "location",
    "types",
  ].join(",");

  const response = await fetch(`${PLACES_BASE_URL}/places/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": env.googlePlacesApiKey,
      "X-Goog-FieldMask": fieldMask,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Place details failed: ${message}`);
  }

  const data = await response.json();

  return {
    placeId: data.id,
    name: data.displayName?.text ?? "",
    formattedAddress: data.formattedAddress ?? "",
    latitude: data.location?.latitude ?? 0,
    longitude: data.location?.longitude ?? 0,
    types: data.types ?? [],
  };
}
