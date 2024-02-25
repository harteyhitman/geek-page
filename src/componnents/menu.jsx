import {menu} from '../data/data/'
const Menu = () => {
  return (
    <div className='menu'>
        {menu.map((menus) => (
            <div key={menus.id} className="list">
                <ul>
                    <li>
                        <a href={`#${menus.id}`}>{menus.home}</a>
                    </li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Menu