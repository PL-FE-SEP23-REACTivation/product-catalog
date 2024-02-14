import classNames from 'classnames';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './PaginationButton.scss';

type Props = {
  children: React.ReactNode;
  darkBorder?: boolean;
  disabled?: boolean;
  next?: boolean;
  prev?: boolean;
};

export const PaginationButton: FC<Props> = ({
  children,
  disabled,
  next,
  prev,
}) => {
  let toPage = Number(children);
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page'));

  if (next) {
    toPage = currentPage + 1;
  }

  if (prev) {
    toPage = currentPage - 1;
  }

  return (
    <Link
      to={{ search: `?page=${toPage}` }}
      className={classNames('pagination-button', {
        'pagination-button--prev': prev,
        'pagination-button--next': next,
        disabled: disabled,
        'pagination-button--is-active': toPage === currentPage,
      })}
    >
      {children}
    </Link>
  );
};
