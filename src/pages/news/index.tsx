import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { NewsList } from "@api/news";
import { DefaultHeader } from "@components/default-header";
import { withStart, combine } from "effector-next";
import { useStore } from "effector-react";
import { News } from "../../screens";
import { $news, getNewsList, $pending } from "./model";

const enhance = withStart(getNewsList as any);

type Props = {
  list: NewsList[];
};

const $store = combine({
  news: $news,
  pending: $pending,
});

const Page: NextPage<Props> = () => {
  const { news, pending } = useStore($store);

  React.useEffect(() => {
    if (!news) {
      getNewsList();
    }
  }, [news]);

  if (pending) {
    return <h1>pending...</h1>;
  }

  return (
    <>
      <Head>
        <title>News page title</title>
      </Head>
      <DefaultHeader />
      <News list={news} />
    </>
  );
};

export default enhance(Page);
