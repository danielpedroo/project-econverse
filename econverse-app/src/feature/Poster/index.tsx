import './styles/poster.sass'

function Poster() {
  return (
    <div className="poster">
      <div className="poster__overlay"></div>
      <div className="poster__content">
        <h1>
          Venha conhecer nossas <br /> promoções
        </h1>
        <div className="poster__discount">
          <p>
            <span className="highlight">50% Off</span> nos produtos
          </p>
        </div>
        <button className="poster__button" type="button">
          Ver produto
        </button>
      </div>
    </div>
  )
}

export default Poster
