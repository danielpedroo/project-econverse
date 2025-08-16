import { headerIcon } from './services/icons-header';
import "./styles/header.sass";

const Header = () => {

  const {
    iconCreditCard,
    iconGroupBox,
    iconHeart,
    iconMagnifyngGlass,
    iconShield,
    iconShoppingCart,
    iconTruck,
    iconUserCircle,
  } = headerIcon

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <ul className="header-top__info-list">
            <li className="header-top__info-item">
              <img src={iconShield} alt="Shield icon" />
              <span>Compra <strong>100% segura</strong></span>
            </li>
            <li className="header-top__info-item">
              <img src={iconTruck} alt="Truck icon" />
              <span><strong>Frete grátis</strong> acima de R$ 200</span>
            </li>
            <li className="header-top__info-item">
              <img src={iconCreditCard} alt="Credit card icon" />
              <span><strong>Parcele</strong> suas compras</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main__content">
          <div className="header-main__logo">
            <img src="../../../public/econverse-logo-header.svg" alt="Econverse logo" />
          </div>

          <div className="header-main__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button><img src={iconMagnifyngGlass} alt="Search icon" /></button>
          </div>

          <div className="header-main__icons">
            <button><img src={iconGroupBox} alt="Orders icon" /></button>
            <button><img src={iconHeart} alt="Favorites icon" /></button>
            <button><img src={iconUserCircle} alt="User profile icon" /></button>
            <button><img src={iconShoppingCart} alt="Shopping cart icon" /></button>
          </div>
        </div>
      </div>

      <nav className="header-menu">
        <div className="container">
          <ul className="header-menu__list">
            <li><a href="#" className="header-menu__link">Todas Categorias</a></li>
            <li><a href="#" className="header-menu__link">Supermercado</a></li>
            <li><a href="#" className="header-menu__link">Livros</a></li>
            <li><a href="#" className="header-menu__link">Moda</a></li>
            <li><a href="#" className="header-menu__link">Lançamentos</a></li>
            <li><a href="#" className="header-menu__link">Ofertas do Dia</a></li>
            <li><a href="#" className="header-menu__link">Assinatura</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;