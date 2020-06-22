import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultHeader } from "@components/default-header";
import { CurrentNews } from "../../screens";

export default function () {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Curent news page title {id}</title>
      </Head>
      <DefaultHeader />
      <CurrentNews />
    </>
  );
}
