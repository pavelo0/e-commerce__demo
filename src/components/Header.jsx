import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const state = useSelector((state) => state.cart);

    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <h1>E_Commerce Demo</h1>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__nav-item">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/products">Товары</Link>
                            </li>
                            <li className="header__nav-item">
                                <Link to="/about">О нас</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="" style={{ display: 'flex', gap: '10px' }}>
                    <div
                        className="
                    "
                    >
                        <Link to="/cart">Cart</Link>
                        <span>{state?.totalQuantity || 0}</span>
                    </div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
