import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { NewsList } from "@api/news";
import { DefaultHeader } from "@components/default-header";
import { withStart, combine } from "effector-next";
import { useStore } from "effector-react";
import { News } from "../../screens";
import { $news, getNewsList, $pending } from "./model";

// внутри getInitialProps, выполняется только при сср
const enhance = withStart(getNewsList as any);

/*
export async function getStaticProps() {
  // вызывается всегда но с withStart не работает
  return {
    props: {
      id: 12,
    },
  };
}
*/

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

  return (
    <>
      <Head>
        <title>News page title</title>
      </Head>
      <DefaultHeader />
      <News list={news} pending={pending} />
    </>
  );
};

// export default Page;
export default enhance(Page);
