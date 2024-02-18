import React, { useState } from 'react';
import './ProductVariantSelector.scss';
import classNames from 'classnames';
import whiteHeart from '../ProductCard/WhiteHeart.png';
import redHeart from '../ProductCard/RedHeart.png';
import { DetailedProduct } from '../../types/detailedProductType';

type Props = {
  product: DetailedProduct;
};

export const ProductVariantSelector: React.FC<Props> = ({ product }) => {
  const {
    colorsAvailable,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    ram,
    resolution,
    processor,
  } = product;
  const [selectedCapacity, setSelectedCapacity] = useState<string>();
  const [isAdded, setIsAdded] = useState<boolean>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleAddToCart = () => {
    setIsAdded(!isAdded);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="variants">
      <div className="variants_text-1">Avaliable Colors</div>
      <div className="variants_colors">
        {colorsAvailable.map((color, index) => (
          <button
            key={index}
            className={classNames('variants_colors_value', {
              variants_colors_value_picked: color === selectedColor,
            })}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </div>
      <div className="variants_text-2">Select capacity</div>
      <div className="variants_capacity">
        {capacityAvailable.map((cpc, index) => (
          <button
            key={index}
            className={classNames('variants_capacity_block', {
              'selected-capacity': selectedCapacity === cpc,
            })}
            onClick={() => handleCapacityClick(cpc)}
          >
            <p className="variants_capacity_text">{cpc.replace('GB', ' GB')}</p>
          </button>
        ))}
      </div>
      <div className="variants_price">
        <div className="variants_price_actual">{priceRegular}</div>
        <div className="variants_price_discount">{priceDiscount}</div>
      </div>
      <div className="variants_buttons">
        <button
          className={classNames('variants_buttons_add', {
            variants_buttons_added: isAdded,
          })}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <button
          className={classNames('variants_buttons_favourite', {
            variants_buttons_favourite_selected: isFavourite,
          })}
          onClick={() => setIsFavourite(!isFavourite)}
        >
          <img src={isFavourite ? redHeart : whiteHeart} alt="heart" />
        </button>
      </div>
      <div className="variants_info_container">
        <div className="variants_info">
          <div className="variants_info_property">Screen</div>
          <div className="variants_info_value">{screen}</div>
        </div>
        <div className="variants_info">
          <div className="variants_info_property">Resolution</div>
          <div className="variants_info_value">{resolution}</div>
        </div>
        <div className="variants_info">
          <div className="variants_info_property">Processor</div>
          <div className="variants_info_value">{processor}</div>
        </div>
        <div className="variants_info">
          <div className="variants_info_property">Ram</div>
          <div className="variants_info_value">{ram}</div>
        </div>
      </div>
    </div>
  );
};
