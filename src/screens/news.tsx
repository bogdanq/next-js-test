import Link from "next/link";
import { newsList } from "@api/news";

export function News() {
  return (
    <div>
      <h1>News list</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {newsList.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div style={{ border: "1px solid #000", padding: 15, margin: 20 }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href="/current-news/[id]" as={`/current-news/${title}`}>
        <a>перейти</a>
      </Link>
    </div>
  );
}
