import { FC } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import './Breadcrumbs.scss';

type Props = {
  path: 'Phones' | 'Tablets' | 'Accessories' | 'Cart' | 'Favourites';
  productName?: string;
};

export const Breadcrumbs: FC<Props> = ({ path, productName }) => {
  return (
    <div className="icons">
      <div className="icons_icon">
        <Link to="/">
          <img src={homeIcon} alt="home" />
        </Link>
      </div>
      <img src={rightArrowIcon} alt="arrow" className="icons_icon" />
      {productName ? (
        <>
          <Link to={`/${path.toLowerCase()}`} className="icons_link">
            {path}
          </Link>
          <img src={rightArrowIcon} alt="arrow" className="icons_icon" />
          <div className="icons_text">{productName}</div>
        </>
      ) : (
        <div className="icons_text">{path}</div>
      )}
    </div>
  );
};
