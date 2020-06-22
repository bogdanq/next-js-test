import Head from "next/head";
import { DefaultHeader } from "@components/default-header";
import { News } from "../../screens";

export default function () {
  return (
    <>
      <Head>
        <title>News page title</title>
      </Head>
      <DefaultHeader />
      <News />
    </>
  );
}
