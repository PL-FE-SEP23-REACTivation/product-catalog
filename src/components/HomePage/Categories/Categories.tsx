import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';
import { getQuantityByCategory } from '../../../api/products';

const Categories: React.FC = () => {
  const [phones, setPhones] = useState<number>(0);
  const [tablets, setTablets] = useState<number>(0);
  const [accessories, setAccessories] = useState<number>(0);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const getProductsQuantity = async () => {
      await getQuantityByCategory('phones')
        .then((data) => setPhones(data.quantity))
        .catch((e) => console.log(e));

      await getQuantityByCategory('tablets')
        .then((data) => setTablets(data.quantity))
        .catch((e) => console.log(e));

      await getQuantityByCategory('accessories')
        .then((data) => setAccessories(data.quantity))
        .catch((e) => console.log(e));
    };

    getProductsQuantity();
  }, []);

  return (
    <section className="category">
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

              <span className="category__amount">{`${phones} models`}</span>
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

              <span className="category__amount">{`${tablets} models`}</span>
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
                {`${accessories} models`}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
