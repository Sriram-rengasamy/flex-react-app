import React from 'react';

const Header = () =>{
    return (  
    <header className="header">
      <img src="img/logo.png" alt="trillo logo" className="logo"/>
      <form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search Hotels"/>
          <button className="search__button">
            <svg className="search__icon">
                <use xlinkHref="img/sprite.svg#icon-magnifying-glass"></use>
            </svg>

          </button>
       </form>     
      <nav>
          navigation
      </nav>
    </header>)
    ;
}

export default Header;
