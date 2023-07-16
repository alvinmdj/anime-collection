import styled from '@emotion/styled';

const PaginationContainer = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  justifyContent: 'center',
  alignItems: 'center',
}));

const PaginationButton = styled.button((props) => ({
  color: 'white',
  backgroundColor: '#2b2d42',
  padding: '8px 16px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s',

  '&:hover': {
    backgroundColor: '#394168',
  },

  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
}));

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
      <PaginationButton
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePagination('PREV')}
      >
        Prev
      </PaginationButton>
      <PaginationButton
        type="button"
        disabled={!hasNextPage}
        onClick={() => handlePagination('NEXT')}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
