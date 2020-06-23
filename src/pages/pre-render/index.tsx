import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import { DefaultHeader } from "@components/default-header";
import { slip } from "@api/slip";
import { PreRender } from "../../screens";

type Props = {
  id: number;
  title: string;
};

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps");
  await slip();

  return {
    props: {
      id: 12,
      title: "pre rendering",
    },
  };
};

const Page: NextPage<Props> = ({ id, title }) => {
  return (
    <>
      <Head>
        <title>pre render title</title>
      </Head>
      <DefaultHeader />
      <PreRender id={id} title={title} />
    </>
  );
};

export default Page;
