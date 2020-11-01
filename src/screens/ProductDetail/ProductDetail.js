import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

const ProductDetail = () => {
  const { productId } = useParams();
  return <Layout>Product Detail - {productId}</Layout>;
};

export default ProductDetail;
