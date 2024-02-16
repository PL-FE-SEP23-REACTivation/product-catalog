/* eslint-disable max-len */
import React from 'react';
import leftArrowIcon from '../../icons/Chevron (Arrow Right).svg';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import { TechSpec } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { ProductVariantSelector } from '../ProductVariantSelector/ProductVariantSelector';

const ProductPage: React.FC = () => {
  const product = {
    id: 'apple-iphone-11-128gb-black',
    namespaceId: 'apple-iphone-11',
    name: 'Apple iPhone 11 128GB Black',
    capacityAvailable: ['64GB', '128GB', '256GB'],
    capacity: '128GB',
    priceRegular: 1100,
    priceDiscount: 1050,
    colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-11/black/00.webp',
      'img/phones/apple-iphone-11/black/01.webp',
      'img/phones/apple-iphone-11/black/02.webp',
      'img/phones/apple-iphone-11/black/03.webp',
      'img/phones/apple-iphone-11/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title:
          'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: '6.1\' IPS',
    resolution: '1792x828',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  };

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
      <div className="pp_variants">
        <ProductVariantSelector />
      </div>
      <div className="pp_about">about</div>
      <div className="pp_tech-specs">
        <TechSpec product={product} />
      </div>
      <div className="pp_reccomended_goods">rec goods</div>
    </div>
  );
};

export default ProductPage;
