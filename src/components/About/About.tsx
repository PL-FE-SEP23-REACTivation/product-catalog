import React from 'react';
import './About.scss';
import { Description } from '../../types/descriptionType';
import { ProductSectionTitle } from '../ProductSectionTitle';
import classNames from 'classnames';

type Props = {
  description: Description[];
};

export const About: React.FC<Props> = ({ description }) => {
  return (
    <div className="about-section">
      <ProductSectionTitle>About</ProductSectionTitle>
      {description.map((el, index) => (
        <>
          <h2
            key={el.title}
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
        </>
      ))}
    </div>
  );
};
