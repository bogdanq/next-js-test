type Props = {
  id: number;
  title: string;
};

export function ServerRender({ id, title }: Props) {
  return (
    <>
      <h1>server side render data (для запросов подходит)</h1>
      <h1>id {id}</h1>
      <h1>{title}</h1>
      <p>
        Eсли нужно предварительно визуализировать страницу, данные которой
        получены во время запроса для панели юзера, для seo - она не важна, но
        имеет мног динамических данных поэтому можно отдать собранную страницу,
        а запрос выполнить на клиенте (client-side render)
      </p>
    </>
  );
}
