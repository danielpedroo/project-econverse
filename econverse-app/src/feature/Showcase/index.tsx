import { useState, useEffect } from "react";
import { getProducts } from "./services/showcase-products-api";
import Modal from "./ui/modal";
import "./styles/showcase.sass";
import { formatPrice } from "./model/formatPrice";
import arrowIcon from "../../../public/vector-showcase.svg";
import NavLink from "./ui/NavLink";
import type { NavLinkProps, Product } from "./model/types";

export default function Showcase({isVisibleLinks} : NavLinkProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="showcase">
      <header className="showcase__header">
        <hr className="showcase__line" />
        <h2 className="showcase__title">Produtos relacionados</h2>
        <hr className="showcase__line" />
      </header>

      <NavLink isVisibleLinks={isVisibleLinks} />

      <div className="showcase__container">
        <button className="showcase__arrow showcase__arrow--left">
          <img src={arrowIcon} alt="Anterior" />
        </button>

        <div className="showcase__cards">
          {products.map((product) => (
            <article key={product.productName} className="showcase__card">
              <div className="showcase__card__wrapper">
                <div className="showcase__card__image-wrapper">
                  <img
                    src={product.photo}
                    alt={product.productName}
                    className="showcase__card__image"
                  />
                  <div className="showcase__card__description-wrapper">
                    <p className="showcase__card__description">
                      {product.descriptionShort}
                    </p>
                  </div>
                  <div className="showcase__card__pricing">
                    <div className="showcase__card__pricing-wrapper">
                      <p className="showcase__card__old-price">
                        {formatPrice(product.price + 2000)}
                      </p>
                      <p className="showcase__card__price">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>
                  <p className="showcase__card__installments">
                    ou 2x de {formatPrice(product.price / 2)} sem juros
                  </p>
                  <p className="showcase__card__shipping">Frete grátis</p>
                </div>
                <div className="showcase__card__action">
                  <button
                    className="showcase__card__button"
                    onClick={() => handleOpenModal(product)}
                  >
                    COMPRAR
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="showcase__arrow showcase__arrow--right">
          <img src={arrowIcon} alt="Próximo" />
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
}
