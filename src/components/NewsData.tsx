import { Space } from "@mantine/core";
import NewsGrid from "./NewsGrid";
import { NewsPagination } from "./NewsPagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchNews(page = 1) {
  try {
    const res = await fetch(
      `${API_URL}?page=${page}`
      // , {
      //   cache: 'force-cache',
      //   next: { revalidate: 3600 }, // 1 hour
      // }
    );
    const posts = await res.json();
    return { news: posts?.results, total: Math.ceil(posts?.count / 24) };
  } catch (error) {
    console.error(error);
    return { news: [], total: 0 };
  }
}

interface NewsDataPropType {
  page: string | string[];
}

export default async function NewsData(props: NewsDataPropType) {
  const { page } = props;
  const { news, total } = await fetchNews(Number(page));
  if (!news.length) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <p className="text-3xl font-bold">No News Found</p>;
        </div>
      </>
    );
  }
  return (
    <div className=" border border-gray-200  p-5">
      <NewsGrid newsItem={news} />
      <Space h={"lg"}></Space>
      <NewsPagination currentPage={Number(page)} total={total} />
    </div>
  );
}
