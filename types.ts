export interface GeneratedContent {
  about?: string;
  itinerary?: string;
  bestTime?: string;
  howToReach?: string;
  placeDetails?: string;
}

export interface Place {
  id: string;
  name: string;
  imageSeed: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string; // Short prompt description
  places: Place[];
  imageSeed: string;
  details?: GeneratedContent; // Optional pre-filled content
}

export interface StateData {
  id: string;
  name: string;
  destinations: Destination[];
  imageSeed: string;
}

export enum LoadState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}