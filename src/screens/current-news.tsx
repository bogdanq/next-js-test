import { useRouter } from "next/router";
import { NewsList } from "@api/news";

type Props = {
  article?: NewsList;
};

export function CurrentNews({ article }: Props) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>CurrentNews {id}</h1>
      <h2>{article?.title || "default title"}</h2>
      <h2>{article?.description || "default description"}</h2>
    </div>
  );
}
