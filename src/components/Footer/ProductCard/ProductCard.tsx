import React from 'react';
import './ProductCard.css';
import {
  Card,
  CardImgContainer,
  CardTitle,
  CardPrice,
  CardPriceRegular,
  CardPriceDiscount,
  Line,
  CardProperties,
  CardSpec,
  CardSpecValue,
  Buttons,
  ButtonAdd,
  ButtonFavorite,
} from './ProductCard.styled';
import image1 from './00.jpg';

export const ProductCard: React.FC = () => {
  return (
    // <Root>
    <Card>
      <CardImgContainer>
        <img
          className="productCard__img"
          src={image1}
          alt="img of Apple iPhone Xs 64GB Silver (....)"
        />
      </CardImgContainer>
      <CardTitle>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</CardTitle>
      <CardPrice>
        <CardPriceRegular>799</CardPriceRegular>
        <CardPriceDiscount>899</CardPriceDiscount>
      </CardPrice>
      <Line />
      <CardProperties>
        <CardSpec>
          <CardSpecValue>Screen</CardSpecValue>
          <CardSpecValue>5.8 OLED</CardSpecValue>
        </CardSpec>
        <CardSpec className="productCard__spec">
          <CardSpecValue>Capacity</CardSpecValue>
          <CardSpecValue>65 GB</CardSpecValue>
        </CardSpec>
        <CardSpec className="productCard__spec">
          <CardSpecValue>RAM</CardSpecValue>
          <CardSpecValue>4 GB</CardSpecValue>
        </CardSpec>
      </CardProperties>
      <Buttons>
        <ButtonAdd>Add to cart</ButtonAdd>
        <ButtonFavorite>heart</ButtonFavorite>
      </Buttons>
    </Card>
    // </Root>
  );
};
