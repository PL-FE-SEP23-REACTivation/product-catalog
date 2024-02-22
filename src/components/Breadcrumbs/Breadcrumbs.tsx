import { FC } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../icons/home.svg';
import homeIconWhite from '../../icons/home-white.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
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
  return (
    <div className={`icons ${darkMode ? 'dark-mode' : ''}`}>
      <div className="icons_icon">
        <Link to="/">
          <img src={darkMode ? homeIconWhite : homeIcon} alt="home" />
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
