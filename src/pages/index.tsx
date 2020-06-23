import Head from "next/head";
import { DefaultHeader } from "@components/default-header";
import { Home } from "@screens/home";

function MyImage() {
  return <img src="/svg/map.svg" alt="Vercel Logo" className="logo" />;
}

export default function Main() {
  return (
    <>
      <Head>
        <title>Main page title</title>
      </Head>
      <DefaultHeader />
      <Home />
      <MyImage />
    </>
  );
}
