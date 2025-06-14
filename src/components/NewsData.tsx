import NewsGrid from "./NewsGrid";
import { NewsPagination } from "./NewsPagination";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchNews(page = 1) {

  try {
    const res = await fetch(`${API_URL}?page=${page}`);
    const posts = await res.json();
    return { "news": posts?.results, "total": Math.ceil(posts?.count / 24) };
  } catch (error) {

    console.error(error);
    return { "news": [], "total": 0 };
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
    <>
      <NewsGrid newsItem={news} />
      <NewsPagination currentPage={Number(page)} total={total} />
    </>
  );
}
