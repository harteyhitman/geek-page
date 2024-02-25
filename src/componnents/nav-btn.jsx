import Button from '../componnents/button'
import { FiMoon } from "react-icons/fi"
const NavBtn = () => {
    
  return (
    <div className='nav_btn_container'>
        <Button  label="Join our community" className='join_our_community'/>
        <Button  label ="Contact us" className='contact_us'/>
        <FiMoon className='moon'/>
    </div>
  )
}

export default NavBtn