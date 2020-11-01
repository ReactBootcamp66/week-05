import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Products from '../../components/Products/Products';

import CartContext from '../../contexts/CartContext';

import { products } from '../../products';
import { upsertProductToChart } from '../../utils/cartUtils';

const ProductsScreen = () => {
  const history = useHistory();

  const { updateCart } = useContext(CartContext);

  const handleShowDetailClick = (product) => {
    history.push(`/products/${product.id}`);
  };

  const handleAddToCartClick = (product) => {
    updateCart((prevCart) => upsertProductToChart(prevCart, product));
  };
  return (
    <Layout>
      <div></div>
      <Products
        products={products}
        onShowDetail={handleShowDetailClick}
        onAddToCart={handleAddToCartClick}
      />
    </Layout>
  );
};

export default ProductsScreen;
