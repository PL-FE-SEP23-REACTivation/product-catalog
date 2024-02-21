/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import leftArrowIcon from '../../icons/Chevron (Arrow Right).svg';
import { TechSpec } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import {
  getProductByIdAndCategory,
  getProductsRecommended,
} from '../../api/products';
import { Product } from '../../types/productType';
import { ProductVariantSelector } from '../ProductVariantSelector/ProductVariantSelector';
import { DetailedProduct } from '../../types/detailedProductType';
import { About } from '../About/About';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

const ProductPage: React.FC = () => {
  const [productDetails, setproductDetails] =
    useState<DetailedProduct | null>();
  const [recommended, setRecommended] = useState<Product[] | null>();
  const { id, category } = useParams();

  let pathName: 'phones' | 'tablets' | 'accessories';

  switch (category) {
  case 'phones':
    pathName = 'phones';
    break;
  case 'accessories':
    pathName = 'accessories';
    break;
  case 'tablets':
    pathName = 'tablets';
    break;
  default:
    pathName = 'phones';
  }

  const [product, setProduct] = useState<DetailedProduct>({
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
  });
  const [selectedImg, setSelectedImg] = useState<string>(
    `${process.env.PUBLIC_URL}/${product.images[0]}`
  );

  console.log(recommended);

  useEffect(() => {
    const productDetailsData = async () => {
      if (id && category) {
        await getProductByIdAndCategory(id, category)
          .then((data) => setproductDetails(data))
          .catch((e) => console.log(e));
      }
    };

    const recommended = async () => {
      if (id) {
        await getProductsRecommended(id)
          .then((data) => setRecommended(data))
          .catch((e) => console.log(e));
      }
    };

    productDetailsData();
    recommended();
  }, []);

  return (
    <div className="pp">
      <div className="pp_header">
        <Breadcrumbs path={pathName} productName={productDetails?.name} />
      </div>
      <div className="pp_return">
        <img className="pp_return_icon" src={leftArrowIcon} alt="arrow" />
        <div className="pp_return_text">Back</div>
      </div>
      <div className="pp_title">{productDetails?.name}</div>
      <div className="pp_photos">
        <ProductGallery
          images={product.images}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
        />
      </div>
      <div className="pp_variants">
        <ProductVariantSelector
          product={product}
          setProduct={setProduct}
          setSelectedImg={setSelectedImg}
        />
      </div>
      <div className="pp_about">
        <About description={product.description} />
      </div>
      <div className="pp_tech-specs">
        <TechSpec product={productDetails} />
      </div>
      {/* recommended products (12 pieces), ready data to put in recommend component with productCard */}
      <div className="pp_reccomended_goods">
        {recommended?.map((el) => (
          <p key={el.id}>Object of product name {el.name}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
