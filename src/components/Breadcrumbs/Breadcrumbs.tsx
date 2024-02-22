import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteType } from '../../types/routeType';
import { capitalize } from '../../utils/helpers';
import './Breadcrumbs.scss';
import { useThemeStore } from '../../storage/ThemeStore';

type Props = {
  path: RouteType;
  productName?: string;
};

export const Breadcrumbs: FC<Props> = ({ path, productName }) => {
  const { darkMode } = useThemeStore();

  const homeIconPath = process.env.PUBLIC_URL + '/icons/home.svg';
  const homeIconWhitePath = process.env.PUBLIC_URL + '/icons/home-white.svg';
  const rightArrowIconPath = process.env.PUBLIC_URL + '/icons/right-arrow.svg';
  return (
    <div className={`icons ${darkMode ? 'dark-mode' : ''}`}>
      <div className="icons_icon">
        <Link to="/">
          <img src={darkMode ? homeIconWhitePath : homeIconPath} alt="home" />
        </Link>
      </div>
      <img src={rightArrowIconPath} alt="arrow" className="icons_icon" />
      {productName ? (
        <>
          <Link to={`/${path}`} className="icons_link">
            {capitalize(path)}
          </Link>
          <img src={rightArrowIconPath} alt="arrow" className="icons_icon" />
          <div className="icons_text">{productName}</div>
        </>
      ) : (
        <div className="icons_text">{capitalize(path)}</div>
      )}
    </div>
  );
};
