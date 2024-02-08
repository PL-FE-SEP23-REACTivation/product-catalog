import React from 'react';
import * as style from './index';
import image1 from './00.webp';
import IMGofHeart from './RedHeart.png';
import IMGofWhiteHeart from './WhiteHeart.png';

export const ProductCard = () => {
  // demo data
  const card = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  // demo data
  const favorite = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  // demo data
  const product = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 370,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  };

  const isProductDiscount = product.fullPrice === product.price;

  const isAddedToCard = card.includes(product.itemId);

  const isFavoriteProduct = favorite.includes(product.itemId);

  // demo editor of favorite products to be thrown away when merging
  const editFavorite = (itemId: string) => {
    console.log(favorite);
    if (!isFavoriteProduct) {
      favorite.push(itemId);
    } else {
      const index = favorite.findIndex((el) => el === itemId);
      favorite.splice(index, 1);
    }
    console.log(favorite);

    return;
  };

  // demo editor of favorite products to be thrown away when merging
  const editCard = (itemId: string) => {
    console.log(favorite);
    if (!isAddedToCard) {
      card.push(itemId);
    } else {
      const index = card.findIndex((el) => el === itemId);
      card.splice(index, 1);
    }
    console.log(card);

    return;
  };

  return (
    <style.Card>
      <style.CardImgContainer>
        <img className="productCard__img" src={image1} alt="img of phone" />
      </style.CardImgContainer>
      <style.CardTitle>{product.name}</style.CardTitle>
      <style.CardPrice>
        {!isProductDiscount ? (
          <>
            <style.CardPriceRegular>{product.price}</style.CardPriceRegular>
            <style.CardPriceDiscount>
              {product.fullPrice}
            </style.CardPriceDiscount>
          </>
        ) : (
          <style.CardPriceRegular>{product.price}</style.CardPriceRegular>
        )}
      </style.CardPrice>
      <style.Line />
      <style.CardProperties>
        <style.CardSpec>
          <style.CardSpecValue>Screen</style.CardSpecValue>
          <style.CardSpecValue>{product.screen}</style.CardSpecValue>
        </style.CardSpec>
        <style.CardSpec>
          <style.CardSpecValue>Capacity</style.CardSpecValue>
          <style.CardSpecValue>{product.capacity}</style.CardSpecValue>
        </style.CardSpec>
        <style.CardSpec>
          <style.CardSpecValue>RAM</style.CardSpecValue>
          <style.CardSpecValue>{product.ram}</style.CardSpecValue>
        </style.CardSpec>
      </style.CardProperties>
      <style.Buttons>
        {!isAddedToCard ? (
          <style.ButtonAdd onClick={() => editCard(product.itemId)}>
            Add to cart
          </style.ButtonAdd>
        ) : (
          <style.ButtonAdded onClick={() => editCard(product.itemId)}>
            Added
          </style.ButtonAdded>
        )}
        <style.ButtonFavorite onClick={() => editFavorite(product.itemId)}>
          {isFavoriteProduct ? (
            <img src={IMGofHeart} alt="IMG of heart" />
          ) : (
            <img src={IMGofWhiteHeart} alt="IMG of heart" />
          )}
        </style.ButtonFavorite>
      </style.Buttons>
    </style.Card>
  );
};
