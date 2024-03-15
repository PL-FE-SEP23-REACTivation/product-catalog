/* eslint-disable indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TechSpec } from '../TechSpecs/TechSpecs';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import {
  getProductByIdAndCategory,
  getProductsRecommended,
} from '../../api/products';
import { DetailedProduct } from '../../types/detailedProductType';
import { Product } from '../../types/productType';
import { About } from '../About/About';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';
import { useThemeStore } from '../../storage/ThemeStore';
import { Slider } from '../HomePage/Slider/Slider';
import { Loader } from '../Loader/Loader';
import { ProductGallery } from '../ProductGallery/ProductGallery';
import { ProductVariantSelector } from '../ProductVariantSelector/ProductVariantSelector';
import './ProductPage.scss';

const ProductPage: React.FC = () => {
  const [productDetails, setproductDetails] =
    useState<DetailedProduct | null>();
  const [recommended, setRecommended] = useState<Product[] | null>(null);
  const { darkMode } = useThemeStore();
  const [isLoadingRecommended, setIsLoadingRecommended] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isErrorRecommended, setIsErrorRecommended] = useState<boolean>(false);
  const { id, category } = useParams();

  type RouteType = 'phones' | 'tablets' | 'accessories';
  let pathName: RouteType;

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

  useEffect(() => {
    const productDetailsData = async () => {
      if (id && category) {
        setIsLoading(true);
        try {
          const data = await getProductByIdAndCategory(id, category);
          setproductDetails(data);
          setSelectedImg(`${process.env.PUBLIC_URL}/${data.images[0]}`);
        } catch (e) {
          console.log(e);
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const recommended = async () => {
      if (id) {
        setIsLoadingRecommended(true);
        try {
          const data = await getProductsRecommended(id);
          setRecommended(data);
          setIsLoadingRecommended(false);
        } catch (error) {
          console.log(error);
          setIsErrorRecommended(true);
          setIsLoadingRecommended(false);
        }
      }
    };

    productDetailsData();
    recommended();
  }, [id, category]);

  return (
    <>
      {isError ? (
        <ErrorNotification />
      ) : (
        <div className={`pp ${darkMode ? 'dark-mode' : ''}`}>
          <div className="pp_header">
            <Breadcrumbs path={pathName} productName={productDetails?.name} />
          </div>
          <Link className="pp_return" to={`/${category}`}>
            <div className="pp_return_text">&lt;&nbsp;&nbsp;&nbsp;Back</div>
          </Link>
          <div className="pp_title">{productDetails?.name}</div>
          {isLoading ? (
            <div className="pp_loader_container">
              <Loader />
            </div>
          ) : (
            <>
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
                    key={productDetails.id}
                    product={productDetails}
                    category={category}
                  />
                )}
              </div>
              <div className="pp_about">
                {productDetails && (
                  <About description={productDetails?.description} />
                )}
              </div>
              <div className="pp_tech-specs">
                <TechSpec product={productDetails} />
              </div>
              <div className="pp_reccomended_goods">
                <Slider
                  products={recommended || []}
                  title="You may also like"
                  isLoading={isLoadingRecommended}
                  isError={isErrorRecommended}
                />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ProductPage;
