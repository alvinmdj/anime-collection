import styled from '@emotion/styled';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: darkblue;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: navy;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(Button)`
  margin-right: 8px;
`;

const NextButton = styled(Button)`
  margin-left: 8px;
`;

type TPaginationProps = {
  currentPage: number;
  // totalPage: number;
  hasNextPage: boolean;
  // onPageChange: (pageNumber: number) => void;
  handlePagination: (type: 'PREV' | 'NEXT') => void;
};

const Pagination = ({
  currentPage,
  // totalPage,
  hasNextPage,
  // onPageChange,
  handlePagination,
}: TPaginationProps) => {
  return (
    <PaginationContainer>
      <PrevButton
        disabled={currentPage === 1}
        onClick={() => handlePagination('PREV')}
      >
        Prev
      </PrevButton>
      <NextButton
        disabled={!hasNextPage}
        onClick={() => handlePagination('NEXT')}
      >
        Next
      </NextButton>
    </PaginationContainer>
  );
};

export default Pagination;
