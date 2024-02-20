import { FC } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import { RouteType } from '../../types/routeType';
import { capitalize } from '../../utils/helpers';
import './Breadcrumbs.scss';

type Props = {
  path: RouteType;
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
          <Link to={`/${path}`} className="icons_link">
            {capitalize(path)}
          </Link>
          <img src={rightArrowIcon} alt="arrow" className="icons_icon" />
          <div className="icons_text">{productName}</div>
        </>
      ) : (
        <div className="icons_text">{capitalize(path)}</div>
      )}
    </div>
  );
};
