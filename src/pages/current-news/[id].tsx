import Head from "next/head";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { DefaultHeader } from "@components/default-header";
import { newsList, NewsList } from "@api/news";
import { slip } from "@api/slip";
import { CurrentNews } from "../../screens";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import * as fs from "fs";

type Props = {
  article?: NewsList;
};

const fileNames = [
  {
    params: {
      id: "current-news",
    },
  },
];

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;

  const finded = newsList.find((item) => item.title === id);

  await slip();

  return {
    props: {
      article: finded,
    },
  };
};

const Page: NextPage<Props> = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Curent news page title {id}</title>
      </Head>
      <DefaultHeader />
      <CurrentNews article={article} />
    </>
  );
};

export default Page;
