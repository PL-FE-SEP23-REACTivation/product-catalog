/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import leftArrowIcon from '../../icons/Chevron (Arrow Right).svg';
import homeIcon from '../../icons/home.svg';
import rightArrowIcon from '../../icons/right-arrow.svg';
import { TechSpec } from '../TechSpecs/TechSpecs';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import {
  getProductByIdAndCategory,
  getProductsRecommended,
} from '../../api/products';
import { DetailedProduct } from '../../types/detailedProductType';
import { Product } from '../../types/productType';

const ProductPage: React.FC = () => {
  const [productDetails, setproductDetails] =
    useState<DetailedProduct | null>();
  const [recommended, setRecommended] = useState<Product[] | null>();
  const { id, category } = useParams();

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
        <img className="pp_header_icon" src={homeIcon} alt="home" />
        <img className="pp_header_icon" src={rightArrowIcon} alt="arrow" />
        <div className="pp_header_category">{category}</div>
        <img className="pp_header_icon" src={rightArrowIcon} alt="arrow" />
        <div className="pp_header_name">{productDetails?.name}</div>
      </div>
      <div className="pp_return">
        <img className="pp_return_icon" src={leftArrowIcon} alt="arrow" />
        <div className="pp_return_text">Back</div>
      </div>
      <div className="pp_title">{productDetails?.name}</div>
      <div className="pp_photos">photos</div>
      <div className="pp_variants">variants</div>
      <div className="pp_about">about</div>
      <div className="pp_tech-specs">
        <TechSpec product={productDetails} />
      </div>
      {/* recommended products (12 pieces), ready data to put in recommend component with productCard */}
      <div className="pp_reccomended_goods">
        {recommended?.map((el) => <p key={el.id}>{el.name}</p>)}
      </div>
    </div>
  );
};

export default ProductPage;
