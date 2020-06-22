import Head from "next/head";
import { DefaultHeader } from "@components/default-header";
import { Home } from "../screens";

export default function Main() {
  return (
    <>
      <Head>
        <title>Main page title</title>
      </Head>
      <DefaultHeader />
      <Home />
    </>
  );
}
