'use server';
import Header from "@/components/Header";
import NewsData from "@/components/NewsData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // const { page = '1', sort = 'asc', query = '' } = await searchParams
  const { page = '1' } = await searchParams

  return (
    <>
      <Header />
      <NewsData page={page} />
    </>
  );
}
