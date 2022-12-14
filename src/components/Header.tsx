import HeaderStyle from '../styles/Header.styled';
import logo from '/assets/shared/desktop/logo.svg';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';

const Header = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

  return (
    <HeaderStyle>
      <div className='wrapper'>
        <img src={logo} alt="Cofeeroaster logo" />
        <div
          className={isOpenNavbar ? 'icon-menu active' : 'icon-menu'}
          onClick={() => setIsOpenNavbar(!isOpenNavbar)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isOpenNavbar ? 'navbar active' : 'navbar'}>
          <ul>
            <li className="navbar__list">
              <NavLink className="navbar__link" to="/">
                Home
              </NavLink>
            </li>

            <li className="navbar__list">
              <NavLink className="navbar__link" to="/about">
                About us
              </NavLink>
            </li>

            <li className="navbar__list">
              <NavLink className="navbar__link" to="/plan">
                Create your plan
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
