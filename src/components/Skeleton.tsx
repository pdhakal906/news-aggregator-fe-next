import { Stack, Skeleton } from "@mantine/core";
const NewsSkeleton = () => {

  return (
    <Stack gap="md">
      {[...Array(12)].map((_, index) => (
        <Skeleton key={index} height={50}>
        </Skeleton>
      ))}
    </Stack>
  );

}

export default NewsSkeleton