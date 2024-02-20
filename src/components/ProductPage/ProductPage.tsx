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

  const [selectedImg, setSelectedImg] = useState<string>(
    `${process.env.PUBLIC_URL}/${productDetails?.images[0]}`
  );

  console.log(recommended);

  useEffect(() => {
    const productDetailsData = async () => {
      if (id && category) {
        try {
          const data = await getProductByIdAndCategory(id, category);
          setproductDetails(data);
          setSelectedImg(`${process.env.PUBLIC_URL}/${data.images[0]}`);
        } catch (e) {
          console.log(e);
        }
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
  }, [id, category]);

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
        {productDetails && (
          <ProductGallery
            images={productDetails.images}
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
          />
        )}
      </div>
      <div className="pp_variants">
        {productDetails && (
          <ProductVariantSelector
            product={productDetails}
            category={category}
          />
        )}
      </div>
      <div className="pp_about">
        {productDetails && <About description={productDetails?.description} />}
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
