import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const ProductDetail = () => {
  const { productId } = useParams();
  const { state } = useLocation();

  console.log(state.product);
  return (
    <Layout>
      Product Detail - {productId}
      <br />
      <code>{JSON.stringify(state.product)}</code>
    </Layout>
  );
};

export default ProductDetail;
