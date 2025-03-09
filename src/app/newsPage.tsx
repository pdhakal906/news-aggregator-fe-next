'use server';
import NewsData from "@/components/NewsData";


export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // const { page = '1', sort = 'asc', query = '' } = await searchParams
  const { page = '1' } = await searchParams

  return (
    <>
      <NewsData page={page} />
    </>
  );
}
