'use client';

import { useSyncExternalStore } from 'react';

/** First day at American Circuits Inc. */
const START = new Date(2025, 5, 26);

function monthsSince(from: Date, to: Date) {
  const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  return months > 0 ? months : 0;
}

/* The prerendered HTML is frozen at build time, so the client would compute a
 * larger number once a month rolls over. useSyncExternalStore lets React use
 * the build-time value for hydration and swap in the live one right after,
 * instead of tripping a hydration mismatch. */
const BUILD_TIME_MONTHS = monthsSince(START, new Date());
const subscribe = () => () => {};

export function useMonthsOfExperience() {
  return useSyncExternalStore(
    subscribe,
    () => monthsSince(START, new Date()),
    () => BUILD_TIME_MONTHS,
  );
}
