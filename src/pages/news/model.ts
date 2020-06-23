import { forward, createEvent, createStore, createEffect } from "effector-next";
import { NewsList, apiGetList } from "@api/news";

export const getNewsList = createEvent();

const effectFx = createEffect().use(apiGetList);

export const $news = createStore<Array<NewsList>>(null);

export const $pending = effectFx.pending;

$news.on(effectFx.doneData, (_, { data }) => data);

forward({
  from: getNewsList.map(() => "nameFromPageLoaded"),
  to: effectFx,
});
