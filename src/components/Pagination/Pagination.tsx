import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationArrow } from '../PaginationArrow';
import { PaginationButton } from '../PaginationButton';
import './Pagination.scss';

type Props = {
  total: number;
  perPage: number;
  currentPage?: number | null;
};

export const Pagination: FC<Props> = ({ total, perPage }) => {
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page'));

  const numberOfPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Number(pages.at(-1));

  return (
    <ul className="pagination">
      <li>
        <PaginationButton prev disabled={isFirstPage}>
          <PaginationArrow />
        </PaginationButton>
      </li>

      {pages.map((page) => (
        <li key={page}>
          <PaginationButton>{page}</PaginationButton>
        </li>
      ))}

      <li>
        <PaginationButton next disabled={isLastPage}>
          <PaginationArrow className="pagination__next-arrow" />
        </PaginationButton>
      </li>
    </ul>
  );
};
