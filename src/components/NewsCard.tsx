'use client';
import { Card, Text, Image } from '@mantine/core'
import React from 'react'
import { NewsItemType } from './types';
interface NewsCardProps {
  newsItem: NewsItemType;
}

const NewsCard = ({ newsItem }: NewsCardProps) => {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href={newsItem.link}
      target="_blank"
    >
      <Card.Section>
        <Image
          fallbackSrc='fallback_image.jpeg'
          src={newsItem.image_url}
          h={160}
          alt="Featured Image"
        />
      </Card.Section>

      <Text fw={600} size="xl" mt="md">
        {newsItem.title}
      </Text>
    </Card>
  );
}

export default NewsCard