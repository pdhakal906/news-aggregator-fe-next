'use client';
import NewsCard from './NewsCard'
import { SimpleGrid, Stack } from '@mantine/core';
import { NewsPropType } from './types';

const NewsGrid = (props: NewsPropType) => {
  const { newsItem } = props
  return (
    <Stack
      gap={20}>
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {newsItem.map((news) => (
          <NewsCard key={news.id} newsItem={news} />
        ))}
      </SimpleGrid>

    </Stack>
  );
}

export default NewsGrid
