import React from 'react';
import Button from '../Button/Button';
import { CardContent, CardWrapper } from './Products.styles';

const ProductItem = ({ product, onShowDetail, onAddToCart }) => {
  return (
    <CardWrapper
      onClick={() => {
        onShowDetail && onShowDetail(product);
      }}
    >
      <img src={product.image} alt={product.name} />
      <CardContent>
        <h3>{product.name}</h3>
        <h4>{`${product.price.currency} ${product.price.money}`}</h4>
        <Button
          text="Add to cart"
          onClick={(event) => {
            event.stopPropagation();
            onAddToCart && onAddToCart(product);
          }}
        />
      </CardContent>
    </CardWrapper>
  );
};

export default ProductItem;
