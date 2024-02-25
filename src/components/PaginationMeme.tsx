import { useState } from 'react';
import { Pagination } from 'react-bootstrap';

interface paginationProps {
  totalItems: number;
  itemsPerPage: number;
  setPageNumber: (value: React.SetStateAction<number>) => void;
}
const PaginationMeme: React.FC<paginationProps> = ({ totalItems, itemsPerPage, setPageNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber)
    setCurrentPage(pageNumber);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination size="sm">{items}</Pagination>
  );
};

export default PaginationMeme;