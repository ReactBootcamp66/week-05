import Home from '../screens/Home/Home';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ProductDetail from '../screens/ProductDetail/ProductDetail';
import Login from '../screens/Login/Login';
import Test from '../screens/Test/Test';
import PostsScreen from '../screens/PostsScreen/PostsScreen';
import PostDetail from '../screens/PostDetail/PostDetail';
import AddPostScreen from '../screens/AddPostScreen/AddPostScreen';

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
    path: '/posts',
    component: () => <PostsScreen />,
    title: 'Post',
    isLink: true,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/posts/new',
    component: () => <AddPostScreen />,
    title: 'Add a new post',
    isPrivate: true,
    exact: true,
  },
  {
    path: '/posts/:postId',
    component: () => <PostDetail />,
    title: 'Post Detail',
    isPrivate: true,
  },
  {
    path: '/products/:productId',
    component: () => <ProductDetail />,
    title: 'Product Detail',
    isPrivate: true,
  },
];
