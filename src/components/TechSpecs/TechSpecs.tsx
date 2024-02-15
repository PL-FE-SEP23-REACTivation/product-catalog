import { FC } from 'react';
import { DetailedProduct } from '../../types/detailedProductType';
import { ProductSectionTitle } from '../ProductSectionTitle';
import './TechSpecs.scss';

type Props = {
  product: DetailedProduct;
};

export const TechSpec: FC<Props> = ({ product }) => {
  return (
    <div className="specs">
      <ProductSectionTitle>Tech specs</ProductSectionTitle>

      <div className="spec">
        <div className="spec__name">Screen</div>
        <div className="spec__value">{product.screen}</div>
      </div>
      <div className="spec">
        <div className="spec__name">Resolution</div>
        <div className="spec__value">{product.resolution}</div>
      </div>
      <div className="spec">
        <div className="spec__name">Processor</div>
        <div className="spec__value">{product.processor}</div>
      </div>
      <div className="spec">
        <div className="spec__name">RAM</div>
        <div className="spec__value">{product.ram}</div>
      </div>
      <div className="spec">
        <div className="spec__name">Built in memory</div>
        <div className="spec__value">{product.capacity}</div>
      </div>
      {product.camera && (
        <div className="spec">
          <div className="spec__name">Camera</div>
          <div className="spec__value">{product.camera}</div>
        </div>
      )}
      {product.zoom && (
        <div className="spec">
          <div className="spec__name">Zoom</div>
          <div className="spec__value">{product.zoom}</div>
        </div>
      )}
      <div className="spec">
        <div className="spec__name">Cell</div>
        <div className="spec__value">{product.cell.join(', ')}</div>
      </div>
    </div>
  );
};
