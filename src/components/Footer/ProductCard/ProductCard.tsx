import React from 'react';
import * as style from './index';
import image1 from './00.webp';
import IMGofHeart from './RedHeart.png';
import IMGofWhiteHeart from './WhiteHeart.png';
import { Product } from '../../../types/protuctType';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    itemId,
    name,
    fullPrice,
    price,
    // id, category, color, year, image,  <- not used in the creation process
    screen,
    capacity,
    ram,
  } = product;

  // demo data
  const card = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  const favorite = ['apple-iphone-7-32gb-black', 'apple-iphone-7-64gb-black'];

  const isProductDiscount = fullPrice === price;

  const isAddedToCard = card.includes(itemId);

  const isFavoriteProduct = favorite.includes(itemId);
  // end of demo data

  return (
    <style.Card>
      <style.CardImgContainer>
        <img src={image1} alt="img of phone" />
      </style.CardImgContainer>
      <style.CardTitle>{name}</style.CardTitle>
      <style.CardPrice>
        {!isProductDiscount ? (
          <>
            <style.CardPriceRegular>{price}</style.CardPriceRegular>
            <style.CardPriceDiscount>{fullPrice}</style.CardPriceDiscount>
          </>
        ) : (
          <style.CardPriceRegular>{price}</style.CardPriceRegular>
        )}
      </style.CardPrice>
      <style.Line />
      <style.CardProperties>
        <style.CardSpec>
          <style.CardSpecValue>Screen</style.CardSpecValue>
          <style.CardSpecValue>{screen}</style.CardSpecValue>
        </style.CardSpec>
        <style.CardSpec>
          <style.CardSpecValue>Capacity</style.CardSpecValue>
          <style.CardSpecValue>{capacity}</style.CardSpecValue>
        </style.CardSpec>
        <style.CardSpec>
          <style.CardSpecValue>RAM</style.CardSpecValue>
          <style.CardSpecValue>{ram}</style.CardSpecValue>
        </style.CardSpec>
      </style.CardProperties>
      <style.Buttons>
        {!isAddedToCard ? (
          <style.ButtonAdd>Add to cart</style.ButtonAdd>
        ) : (
          <style.ButtonAdded>Added</style.ButtonAdded>
        )}
        <style.ButtonFavorite>
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
