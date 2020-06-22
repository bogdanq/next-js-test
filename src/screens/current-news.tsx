import { useRouter } from "next/router";

export function CurrentNews() {
  const router = useRouter();
  const { id } = router.query;

  return <div>CurrentNews {id}</div>;
}
