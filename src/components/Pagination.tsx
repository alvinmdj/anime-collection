type TPaginationProps = {
  currentPage: number;
  totalPage: number;
  hasNextPage: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPage,
  hasNextPage,
  onPageChange,
}: TPaginationProps) => {
  return (
    <>
      <button onClick={() => onPageChange(1)}>First</button>

      <button onClick={() => onPageChange(totalPage)}>Last</button>
    </>
  );
};

export default Pagination;
