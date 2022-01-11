import React from 'react'
import './Header.css';
import SearchIcon from "@mui/icons-material/Search";
function Header() {
    return (
      <div className="header">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo space"
        />

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          {/* Logo */}
          <SearchIcon className='header__searchIcon'/>
        </div>

        <div className="header__nav">
          <div className="header__options">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>

          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>
      </div>
    );
}

export default Header 