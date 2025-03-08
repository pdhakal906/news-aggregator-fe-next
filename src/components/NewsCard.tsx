'use client';
import NextImage from 'next/image';
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
            component={NextImage}
            src={newsItem?.image_url}
            height={160}
            width={200}
            alt="Featured Image"
            fallbackSrc="/fallback_image.jpeg"
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