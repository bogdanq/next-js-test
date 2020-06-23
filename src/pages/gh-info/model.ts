import { createEffect, createEvent, createStore, forward } from "effector-next";
import { fetchStars } from "@api/stars";

export const getStars = createEvent();

export const getStarsFx = createEffect<void, { stars: number }>().use(
  fetchStars
);

export const $stars = createStore<null | number>(null);

export const $pending = getStarsFx.pending;

$stars.on(getStarsFx.doneData, (_, data) => data.stars);

forward({ from: getStars, to: getStarsFx });
