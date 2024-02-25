import MainLogo from '../../assets/images/guruku_large-logo.png'
import Menu from '../../componnents/menu'
import NavBtn from '../../componnents/nav-btn'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="logo">
            <img src={MainLogo} alt="" />
        </div>
        <div className="menu-container">
            <Menu />
        </div>
        <div className="community">
          <NavBtn />
        </div>
    </div>
  )
}

export default Navbar