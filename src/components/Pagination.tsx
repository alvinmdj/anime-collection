import styled from '@emotion/styled';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  color: white;
  background-color: #2b2d42;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #394168;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(Button)`
  margin-right: 4px;
`;

const NextButton = styled(Button)`
  margin-left: 4px;
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
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePagination('PREV')}
      >
        Prev
      </PrevButton>
      <NextButton
        type="button"
        disabled={!hasNextPage}
        onClick={() => handlePagination('NEXT')}
      >
        Next
      </NextButton>
    </PaginationContainer>
  );
};

export default Pagination;
