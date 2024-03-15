import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getQuantity } from '../../../api/products';
import { AllQuantity } from '../../../types/quantityType';
import { useThemeStore } from '../../../storage/ThemeStore';
import './Categories.scss';

const Categories: React.FC = () => {
  const [quantity, setQuantity] = useState<Partial<AllQuantity>>();
  const [searchParams] = useSearchParams();
  const { darkMode } = useThemeStore();
  const category = searchParams.get('category') || '';

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getProductsQuantity = async () => {
      await getQuantity(category)
        .then((data) => {
          const result = data.reduce(
            (acc: { [key: string]: number }, { category, count }) => {
              acc[category] = +count;
              return acc;
            },
            {}
          );
          setQuantity(result);
        })
        .catch((e) => console.log(e));
    };

    getProductsQuantity();
  }, []);

  return (
    <section className={`category${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="category__content">
        <h1 className="category__title">Shop by category</h1>

        <ul className="category__list" data-cy="categoryLinksContainer">
          <li className="category__item">
            <Link
              to="/phones"
              className="category__image-link category__image-link--phones"
              onClick={backToTop}
            >
              <img
                src={process.env.PUBLIC_URL + '/img/category-phones.png'}
                alt="phones"
                className="category__image"
              />
            </Link>

            <div className="category__name-block">
              <Link to="/phones" className="category__name" onClick={backToTop}>
                Mobile phones
              </Link>

              <span className="category__amount">
                {`${quantity?.phones} models`}
              </span>
            </div>
          </li>

          <li className="category__item">
            <Link
              to="/tablets"
              className="category__image-link category__image-link--tablets"
              onClick={backToTop}
            >
              <img
                src={process.env.PUBLIC_URL + '/img/category-tablets.png'}
                alt="tablets"
                className="category__image"
              />
            </Link>

            <div className="category__name-block">
              <Link to="/phones" className="category__name" onClick={backToTop}>
                Tablets
              </Link>

              <span className="category__amount">
                {`${quantity?.tablets} models`}
              </span>
            </div>
          </li>

          <li className="category__item">
            <Link
              to="/accessories"
              className="category__image-link category__image-link--accessories"
              onClick={backToTop}
            >
              <img
                src={process.env.PUBLIC_URL + '/img/category-accessories.png'}
                alt="accessories"
                className="category__image"
              />
            </Link>

            <div className="category__name-block">
              <Link to="/phones" className="category__name" onClick={backToTop}>
                Accessories
              </Link>

              <span className="category__amount">
                {`${quantity?.accessories} models`}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
