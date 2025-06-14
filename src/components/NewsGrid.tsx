'use client';
import NewsCard from './NewsCard'
import { Stack } from '@mantine/core';
import { NewsPropType } from './types';

const NewsGrid = ({ newsItem }: NewsPropType) => {
  return (
    <Stack gap="md">
      {newsItem.map((news) => (
        <NewsCard key={news.id} newsItem={news} />
      ))}
    </Stack>
  );
};
export default NewsGrid
