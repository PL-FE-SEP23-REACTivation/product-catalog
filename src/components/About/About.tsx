import classNames from 'classnames';
import React from 'react';
import { Description } from '../../types/descriptionType';
import { ProductSectionTitle } from '../ProductSectionTitle';
import './About.scss';
import { useThemeStore } from '../../storage/ThemeStore';

type Props = {
  description: Description[];
};

export const About: React.FC<Props> = ({ description }) => {
  const { darkMode } = useThemeStore();
  return (
    <div className={`about-section ${darkMode ? 'dark-mode' : ''}`}>
      <ProductSectionTitle>About</ProductSectionTitle>
      {description.map((el, index) => (
        <div key={el.title}>
          <h2
            className={classNames('about-title', {
              'about-title-1': index !== 0,
            })}
          >
            {el.title}
          </h2>
          <p className="about-text">
            {el.text.map((line, index) => (
              <React.Fragment key={line}>
                {line}
                {index !== el.text.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
