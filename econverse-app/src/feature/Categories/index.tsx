import { ImagesCategoryProps } from './services/categories-image'
import './styles/categories.sass'

function Categories() {
  return (
    <div className="categories">
      {ImagesCategoryProps.map((category, index) => (
        <div className="categories__wrapper" key={index}>
          <div className="categories__item">
            <img src={category.image} alt={category.name} />
          </div>
          <span className="categories__label">{category.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Categories
