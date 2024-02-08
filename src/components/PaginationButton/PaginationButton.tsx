import classNames from 'classnames';
import { FC } from 'react';
import './PaginationButton.scss';

type Props = {
  children: React.ReactNode;
  darkBorder?: boolean;
  disabled?: boolean;
};

export const PaginationButton: FC<Props> = ({
  children,
  darkBorder,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames('pagination-button', {
        'pagination-button--dark': darkBorder,
      })}
    >
      {children}
    </button>
  );
};
