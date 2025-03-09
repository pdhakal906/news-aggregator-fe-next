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
