'use server';
import NewsPage from "./newsPage";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // const { page = '1', sort = 'asc', query = '' } = await searchParams
  const { page = '1' } = await searchParams
  console.log(page)

  return (
    <>

      <NewsPage searchParams={searchParams} ></NewsPage>
    </>
  );
}
