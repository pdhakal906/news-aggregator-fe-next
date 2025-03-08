export interface NewsItemType {
  id: number;
  title: string;
  link: string;
  image_url: string;
  source: string;
  created_at: string;
}
export interface NewsPropType {
  newsItem: NewsItemType[];
}

// export interface NewsItem {
//   id: number;
//   title: string;
//   link: string;
//   image_url: string;
//   source: string;
//   created_at: string;
// }

// export interface NewsResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: NewsItem[];
// }