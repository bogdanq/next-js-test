import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { NewsList, apiGetList } from "@api/news";
import { DefaultHeader } from "@components/default-header";
import { News } from "../../screens";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let list: NewsList[] = [];

  try {
    const { data } = await apiGetList();
    list = data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: { list },
  };
};

type Props = {
  list: NewsList[];
};

const Page: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>News page title</title>
      </Head>
      <DefaultHeader />
      <News {...props} />
    </>
  );
};

export default Page;
