import Home from '../screens/Home/Home';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Login from '../screens/Login/Login';
import Test from '../screens/Test/Test';

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
    component: () => <ProductsScreen />,
    title: 'Products',
    isLink: true,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/Test',
    component: () => <Test />,
    title: 'Test',
    isLink: true,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/products/:productId',
    component: () => <ProductDetail />,
    title: 'Product Detail',
    isPrivate: true,
  },
];
