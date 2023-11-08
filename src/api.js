// src/api.js

import mockData from './mock-data';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

export const extractSummaries = (events) => {
  const extractedSummaries = events.map((event) => event.summary);
  const summaries = [...new Set(extractedSummaries)];
  return summaries;
};

export const extractStartDateTime = (events) => {
    const extractedDateTime = events.map((event) => event.DateTime);
    const dateTime = [...new Set(extractedDateTime)];
    return dateTime;
}

export const extractDescriptions = (events) => {
  const extractedDescriptions = events.map((event) => event.description);
  const descriptions = [...new Set(extractedDescriptions)];
  return descriptions;
};

/**
 *
 * This function will fetch the list of all events
 */
export const getEvents = async () => {
    return mockData;
  };
 