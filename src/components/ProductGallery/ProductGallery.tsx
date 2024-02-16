/* eslint-disable max-len */
import React, { useState } from 'react';
import './ProductGallery.scss';
import classNames from 'classnames';

type Props = {
  images: string[];
};

export const ProductGallery: React.FC<Props> = ({ images }) => {
  const defaultSelectedImg = `${process.env.PUBLIC_URL}/${images[0]}`;
  const [selectedImg, setSelectedImg] = useState(defaultSelectedImg);

  const handleImageClick = (image: string) => {
    const link = `${process.env.PUBLIC_URL}/${image}`;
    setSelectedImg(link);
  };

  return (
    <div className="gallery">
      <div className="gallery_allImages">
        {images.map((link) => (
          <img
            className={classNames('gallery_allImages_item', {
              gallery_allImages_item_selected:
                selectedImg === `${process.env.PUBLIC_URL}/${link}`,
            })}
            key={`${link}`}
            src={`${process.env.PUBLIC_URL}/${link}`}
            alt="photo"
            onClick={() => handleImageClick(link)}
          />
        ))}
      </div>
      <img className="gallery_selectedImage" src={selectedImg} alt="" />
    </div>
  );
};
