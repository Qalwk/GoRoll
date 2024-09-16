import { useState } from 'react'
import "./Header.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const handleLangClick = (lang: string) => {
      // Обработка клика по языку
      console.log(`Selected language: ${lang}`);
      // Здесь можно добавить логику для изменения языка, например, с помощью i18n-библиотеки
    };

  return (
    <div className=''>
    <header className='header'>
      <a href="#!" className="logo">
        <img src="logo.svg" alt="logo" />
      </a>
      {isMenuOpen ? (
      <nav className="nav open">
      <ul className="nav-list">
        <li className="nav-list__item">
          <a href="#partners" className="anchor" onClick={toggleMenu}>
            Для партнеров
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#geo" className="anchor" onClick={toggleMenu}>
            Провайдеры и гео
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#about" className="anchor" onClick={toggleMenu}>
            Связаться с нами
          </a>
        </li>
      </ul>
    </nav>
      )
      :
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="#partners" className="anchor">
              Для партнеров
            </a>
          </li>
          <li className="nav-list__item">
            <a href="#geo" className="anchor">
              Провайдеры и гео
            </a>
          </li>
          <li className="nav-list__item">
            <a href="#about" className="anchor">
              Связаться с нами
            </a>
          </li>
        </ul>
      </nav>}
      
      <div className="menu">
        <a href="#" className="user">
          <img src="user.svg" alt="user" />
        </a>
        <a href="#" className="menu__btn">
          Стать партнером
        </a>
        <div className="lang">
          <img src="div.svg" alt="" />
          <div className="lang-selector">
            <ul className="lang-list">
              <li data-lang="RU" onClick={() => handleLangClick('RU')}>
                RU
              </li>
              <li data-lang="EN" className="hidden" onClick={() => handleLangClick('EN')}>
                EN
              </li>
              <li data-lang="ES" className="hidden" onClick={() => handleLangClick('ES')}>
                ES
              </li>
              <li data-lang="UA" className="hidden" onClick={() => handleLangClick('UA')}>
                UA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
      <div className="burger active" onClick={toggleMenu}>
        <span></span>
      </div>
      )
      :
      <div className="burger" onClick={toggleMenu}>
        <span></span>
      </div>}

      {/* Условное рендеринг меню */}
      {/* {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#partners">Для партнеров</a>
            </li>
          </ul>
        </div>
      )} */}
    </header>

    {/* <div className="promo">
        <h1>Прямой рекламодатель <span>iGaming</span> с высокими ставками</h1>
        <div className="promo__text">
            <span> и локализацией</span> <span>для вашего гео</span>
        </div>
        <a href="#" className="promo__btn">Стать партнером</a>
      </div>
      
      <div className="laptops">
        <img className="laptop" src="laptop.png" alt="background" />
        <img className="laptop_m" src="laptop_m.png" alt="background" />
      </div> */}
    </div>
  )
}

export default Header
