'use client';
import { Card, Text, Stack, Group, Box } from '@mantine/core';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import React from 'react';
import { NewsItemType } from './types';

interface NewsCardProps {
  newsItem: NewsItemType;
}

const NewsCard = ({ newsItem }: NewsCardProps) => {
  const date = new Date(newsItem.created_at);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <Card
      shadow="sm"
      padding="sm"
      component="a"
      href={newsItem.link}
      target="_blank"
      withBorder
    >
      <Group justify='space-between' align="center">
        <Box>
          <Text fw={300} size="lg">
            {newsItem.title}
          </Text>
          <Text fw={200} c={'dimmed'} size='sm' >
            {formattedDate}
          </Text>
        </Box>
      </Group>
    </Card>
  );
};

export default NewsCard;
