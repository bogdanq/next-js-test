export function GhInfo({
  stars,
  pending,
}: {
  stars: number;
  pending: boolean;
}) {
  if (pending) {
    return <h1>pending...</h1>;
  }

  return (
    <>
      <h1>GhInfo list stars: {stars}</h1>
    </>
  );
}
