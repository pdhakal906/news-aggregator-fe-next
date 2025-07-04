'use client';
import { Center, Pagination } from "@mantine/core";
import { useRouter } from "next/navigation";

interface NewsPaginationPropType {
  currentPage: number;
  total: number;
}

export function NewsPagination(props: NewsPaginationPropType) {
  const { currentPage, total } = props

  const router = useRouter();


  const handlePageChange = (newPage: number) => {
    router.push(`/news?page=${newPage}`);
  };

  return (
    <Center>
      <Pagination
        size={'lg'}
        value={currentPage}
        mb={20}
        onChange={handlePageChange}
        total={total}
      />
    </Center>
  );
}
