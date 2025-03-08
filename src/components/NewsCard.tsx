'use client';
import { Box, Card, Text, Image } from '@mantine/core'
import React from 'react'
import { NewsItemType } from './types';
interface NewsCardProps {
  newsItem: NewsItemType;
}

const NewsCard = ({ newsItem }: NewsCardProps) => {
  return (
    <Box>
      <Card shadow="sm"
        padding="sm"
        component="a"
        href={newsItem?.link}
        target="_blank"
      >
        <Card.Section>
          <Image
            src={newsItem?.image_url}
            height={160}
            alt="Featured Image"
          />

        </Card.Section>
        <Text fw={"unset"} size="lg" mt="md">
          {newsItem?.title}
        </Text>
      </Card>
    </Box>
  );
}

export default NewsCard