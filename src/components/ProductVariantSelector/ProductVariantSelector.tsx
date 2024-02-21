/* eslint-disable max-len */
import React, { useState } from 'react';
import './ProductVariantSelector.scss';
import classNames from 'classnames';
import whiteHeart from '../ProductCard/WhiteHeart.png';
import redHeart from '../ProductCard/RedHeart.png';
import { DetailedProduct } from '../../types/detailedProductType';
import { useNavigate } from 'react-router-dom';
import { CustomColors } from '../../types/customColorsType';
import { useTContext } from '../../store/cartStore';
import { Product } from '../../types/productType';
import { getItemById } from '../../api/products';
import { useFavoritesStore } from '../../storage/FavouritesStore';

type Props = {
  product: DetailedProduct;
  category: string | undefined;
};

export const ProductVariantSelector: React.FC<Props> = ({
  product,
  category,
}) => {
  const {
    id,
    colorsAvailable,
    capacityAvailable,
    priceRegular,
    priceDiscount,
    screen,
    ram,
    resolution,
    processor,
  } = product;
  const [selectedCapacity, setSelectedCapacity] = useState<string>(
    product.capacity
  );
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>(product.color);
  const navigate = useNavigate();
  const { setCart } = useTContext();
  const isFavoriteProduct = useFavoritesStore((state) =>
    state.favoriteProducts.some((p) => p.itemId === id)
  );

  const handleAddToCart = async () => {
    const searchedProduct = await getItemById(product.id);
    console.log(searchedProduct);
    console.log(product.id);
    setCart((prevCart) => [...(prevCart as Product[]), searchedProduct[0]]);
    setIsAdded(true);
  };

  const toggleFavorite = async () => {
    const searchedProduct = await getItemById(product.id);
    console.log(searchedProduct);
    console.log(product.id);
    if (isFavoriteProduct) {
      useFavoritesStore.getState().removeFromFavorites(searchedProduct[0].id);
    } else {
      useFavoritesStore.getState().addToFavorites(searchedProduct[0]);
    }
  };

  const customColorMap: CustomColors = {
    rosegold: '#E0BFB8',
    sierrablue: '#9BB5CE',
    spacegray: '#5e5e5e',
    gold: '#FBD8BD',
    midnight: '#191F28',
    midnightgreen: '#576159',
    silver: '#D6D5DC',
    skyblue: '#B4C6D5',
    purple: '#B6ADE4',
    white: '#FBF7F4',
    green: '#B4C5B0',
    graphite: '#615F5B',
    spaceblack: '#353331',
    blue: '#215E7C',
    starlight: '#D9D2C7',
  };

  const handleCapacityClick = (capacity: string) => {
    const newPath = `/${category}/${product.id.replace(
      product.capacity.toLowerCase(),
      capacity.toLocaleLowerCase()
    )}`;

    navigate(newPath);
    setSelectedCapacity(capacity);
  };

  //  replace methods are needed because of colors difference in apis: spacegray, space gray, space-gray
  const handleColorSelect = (color: string) => {
    if (category) {
      const newPath = `/${category}/${product.id.replace(
        product.color.replace(' ', '-'),
        color.replace(' ', '-')
      )}`;

      navigate(newPath);
    }
    setSelectedColor(color);
  };

  return (
    <div className="variants">
      <div className="variants_text-1">Avaliable Colors</div>
      <div className="variants_colors">
        {colorsAvailable.sort().map((color, index) => (
          <button
            key={index}
            className={classNames('variants_colors_value', {
              variants_colors_value_picked: color === selectedColor,
            })}
            style={{
              backgroundColor:
                customColorMap[color.replace(/[\s-]/g, '')] || color,
            }}
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
          onClick={() => {
            if (!isAdded) {
              handleAddToCart();
            }
          }}
        >
          {isAdded ? 'Added' : 'Add to cart'}
        </button>
        <button
          className={classNames('variants_buttons_favourite', {
            variants_buttons_favourite_selected: isFavoriteProduct,
          })}
          onClick={toggleFavorite}
        >
          <img src={isFavoriteProduct ? redHeart : whiteHeart} alt="heart" />
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
