import { FC } from 'react';

type Props = {
  className?: string;
};

export const PaginationArrow: FC<Props> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M10.471 3.529a.667.667 0 0 0-.943 0l-4 4a.667.667 0 0 0 0 .943l4 4a.667.667 0 0 0 .943-.943L6.943 8l3.528-3.528a.667.667 0 0 0 0-.943Z"
      clipRule="evenodd"
    />
  </svg>
);
