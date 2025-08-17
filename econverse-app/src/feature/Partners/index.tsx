import './styles/partners.sass';
import partnersImage from '../../../public/partners-image.svg';

const Partners = () => {
  return (
    <>
      <section className='grid_columns_partners'>
        <section className="partners">
          <div className="partners__background">
            <img src={partnersImage} alt="Apple products" />
          </div>

          <div className="partners__overlay">
            <div className="partners__overlay__section">
              <h2 className="partners__overlay__section__title">Parceiros</h2>
            </div>
            <div className="partners__overlay__description">
              <p className="partners__overlay__description__text">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="partners__overlay__button">
              <button className="partners__overlay__button__cta">Confira</button>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="partners__background">
            <img src={partnersImage} alt="Apple products" />
          </div>

          <div className="partners__overlay">
            <div className="partners__overlay__section">
              <h2 className="partners__overlay__section__title">Parceiros</h2>
            </div>
            <div className="partners__overlay__description">
              <p className="partners__overlay__description__text">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className="partners__overlay__button">
              <button className="partners__overlay__button__cta">Confira</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Partners;
