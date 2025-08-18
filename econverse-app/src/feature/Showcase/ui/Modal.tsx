import { useState } from "react";
import type { ModalProps } from "../model/types";
import { formatCount } from "../model/formatCount";
import "../styles/modal.sass";
import decrementIcon from "../../../../public/decrement-showcase-modal.svg";
import incrementIcon from "../../../../public/increment-showcase-modal.svg";


export default function Modal({ isOpen, onClose, product }: ModalProps) {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  }

  if (!isOpen || !product) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__content">
        <button className="modal__close" onClick={onClose}></button>

        <div className="modal__wrapper">
          <div className="modal__image-wrapper">
            <img
              src={product.photo}
              alt={`Imagem do produto ${product.productName}`}
              className="modal__image"
            />
          </div>

          <div className="modal__details">
            <div className="modal__details-wrapper">
              <div className="modal__details-product">
                <h2 className="modal__title">{product.productName}</h2>
                <p className="modal__price">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </p>
              </div>

              <div className="modal__details-description">
                <p>
                  {product.descriptionShort ||
                    "Descrição do produto não disponível."}
                </p>
                <a href="#">Veja mais detalhes do produto {'>'}</a>
              </div>
            </div>

            <div className="modal__actions">
              <div className="modal__qty">
                <div className="modal__qty-decrement-wrapper">
                  <button
                    className="modal__qty-decrement"
                    onClick={handleDecrement}
                  >
                    <img
                      src={decrementIcon}
                      alt="decrement-icon"
                    />
                  </button>
                </div>

                <span className="modal__qty-count">{formatCount(count)}</span>

                <div className="modal__qty-increment-wrapper">
                  <button
                    className="modal__qty-increment"
                    onClick={handleIncrement}
                  >
                    <img
                      src={incrementIcon}
                      alt="increment-icon"
                    />
                  </button>
                </div>
              </div>

              <button className="modal__buy">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
