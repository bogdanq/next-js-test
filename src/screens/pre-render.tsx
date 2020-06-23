type Props = {
  id: number;
  title: string;
};

export function PreRender({ id, title }: Props) {
  return (
    <>
      <h1>PreRender data (для статики подходит)</h1>
      <h1>id {id}</h1>
      <h1>{title}</h1>
      <p>
        Cтатическая генерация с помощью getStaticProps. В dev - запускается
        всегда выполняется во время сборки, поэтому не возможно получить http
        заголовки
      </p>
    </>
  );
}
