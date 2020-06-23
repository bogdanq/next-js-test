import Head from "next/head";
import { GetServerSideProps, NextPage, GetServerSidePropsContext } from "next";
import { DefaultHeader } from "@components/default-header";
import { slip } from "@api/slip";
import { ServerRender } from "../../screens";

type Props = {
  id: number;
  title: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  // console.log("context", context); - получит весб обьект запроса
  await slip();

  return {
    props: {
      id: 1,
      title: "server side render",
    },
  };
};

const Page: NextPage<Props> = ({ id, title }) => {
  return (
    <>
      <Head>
        <title>ssr title</title>
      </Head>
      <DefaultHeader />
      <ServerRender id={id} title={title} />
    </>
  );
};

export default Page;
