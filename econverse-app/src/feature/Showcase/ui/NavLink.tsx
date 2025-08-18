import { navLinks } from '../model/nav-links'
import '../styles/navlink.sass'
import type { NavLinkProps } from '../model/types'


function NavLink({ isVisibleLinks }: NavLinkProps) {
  return (
    <>
      {isVisibleLinks ? (
        <nav className="showcase__nav">
          <ul className="showcase__nav-list">
            {navLinks.map((label, index) => (
              <li key={index} className="showcase__nav-item">
                <a href="#" className="showcase__nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <div className='navlink__wrapper'>
          <a href='#'>Ver todos</a>
        </div>
      )}
    </>
  )
}

export default NavLink
