import { FC, ReactNode } from 'react';
import './ProductSectionTitle.scss';

type Props = {
  children: ReactNode;
};

export const ProductSectionTitle: FC<Props> = ({ children }) => {
  return <h2 className="section_title">{children}</h2>;
};
