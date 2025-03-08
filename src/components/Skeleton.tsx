import { SimpleGrid, Skeleton } from "@mantine/core";
const NewsSkeleton = () => {

  return (
    <SimpleGrid
      p={10}
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      {[...Array(12)].map((_, index) => (
        <Skeleton key={index} height={200} width={320}>
        </Skeleton>
      ))}
    </SimpleGrid>
  );

}

export default NewsSkeleton