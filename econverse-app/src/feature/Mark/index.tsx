import { itemsMark } from './model/items-mark'
import './styles/mark.sass'

function Marks() {
  return (
    <section className="brands">
      <div className='brands__title-wrapper'>
        <h2 className="brands__title">Navegue por marcas</h2>
      </div>
      <div className="brands__list">
        {itemsMark.map(item => (
          <div key={item.id} className="brands__item">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marks
