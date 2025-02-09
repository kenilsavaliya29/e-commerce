import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Product_Details from './Pages/Product_Details';
import Category from './Pages/Category';
import Layout from './Contexts/Layout';
import Cart from './Pages/Cart';
import './App.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/category',
      element: <Layout><Category /></Layout>,
    },
    {
      path: '/product-details',
      element: <Layout><Product_Details /></Layout>,
    },
    {
      path: '/product-details/cart',
      element: <Layout><Cart /></Layout>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
