/* eslint-disable max-len */
import React from 'react';
import './ProductPage.scss';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import leftArrowIcon from '../../icons/Chevron (Arrow Right).svg';

const ProductPage: React.FC = () => {
  return (
    <div className="pp">
      <div className="pp_header">
        <img className="pp_header_icon" src={homeIcon} alt="home" />
        <img className="pp_header_icon" src={rightArrowIcon} alt="arrow" />
        <div className="pp_header_category">Phones</div>
        <img className="pp_header_icon" src={rightArrowIcon} alt="arrow" />
        <div className="pp_header_name">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </div>
      </div>
      <div className="pp_return">
        <img className="pp_return_icon" src={leftArrowIcon} alt="arrow" />
        <div className="pp_return_text">Back</div>
      </div>
      <div className="pp_title">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </div>
      <div className="pp_photos">photos</div>
      <div className="pp_variants">variants</div>
      <div className="pp_about">about</div>
      <div className="pp_tech-specs">tech</div>
      <div className="pp_reccomended_goods">rec goods</div>
    </div>
  );
};

export default ProductPage;
