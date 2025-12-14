import { Route, Routes } from 'react-router-dom';
import CategoriesBar from './components/CategoriesBar.jsx';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import ProductPage from './pages/ProductPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';

const App = () => {
    return (
        <>
            <Header />
            <CategoriesBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
