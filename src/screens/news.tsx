import Link from "next/link";
import { NewsList } from "@api/news";
import styled from "styled-components";

export function News({ list = [] }: { list: NewsList[] }) {
  return (
    <>
      <h1>News list</h1>
      <Flex>
        {(list || []).map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </Flex>
    </>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href="/current-news/[id]" as={`/current-news/${title}`}>
        <a>перейти</a>
      </Link>
    </Wrapper>
  );
}

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 15px;
  margin: 20px;
`;
