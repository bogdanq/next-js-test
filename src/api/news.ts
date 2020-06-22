import React from "react";

export const newsList = [
  { title: "news_1", description: "description" },
  { title: "news_2", description: "description" },
  { title: "news_3", description: "description" },
  { title: "news_4", description: "description" },
  { title: "news_5", description: "description" },
  { title: "news_6", description: "description" },
];

export type NewsList = { title: string; description: string };

export function apiGetList(): Promise<{ data: Array<NewsList> }> {
  console.log("api call");
  return new Promise((rs) => setTimeout(() => rs({ data: newsList }), 1500));
}
