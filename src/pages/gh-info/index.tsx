import React from "react";
import Head from "next/head";
import { useStore } from "effector-react";
import { withStart, combine } from "effector-next";
import { DefaultHeader } from "@components/default-header";
import { GhInfo } from "../../screens";
import { getStars, $stars, $pending } from "./model";

const enhancer = withStart(getStars as any);

const $store = combine({
  pending: $pending,
  stars: $stars,
});

function Page() {
  const { stars, pending } = useStore($store);

  React.useEffect(() => {
    if (!stars) {
      getStars();
    }
  }, [stars]);

  return (
    <>
      <Head>
        <title>GhInfo title</title>
      </Head>
      <DefaultHeader />
      <GhInfo stars={stars} pending={pending} />
    </>
  );
}

export default enhancer(Page);
