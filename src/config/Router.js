import Home from '../screens/Home/Home';
import Products from '../screens/Products/Products';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Login from '../screens/Login/Login';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Home',
    isLink: true,
    isPrivate: true,
  },

  {
    path: '/login',
    component: () => <Login />,
    title: 'Login',
    isPrivate: false,
  },
  {
    path: '/products',
    component: () => <Products />,
    title: 'Products',
    isLink: true,
    isPrivate: true,
  },
  {
    path: '/products/:productId',
    component: () => <ProductDetail />,
    title: 'Product Detail',
    isPrivate: true,
  },
];
