import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { menu } from '../data/data';

function HamburgerMenu() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    setIsModalOpen(false);
    e.preventDefault();
    {}
  };

  return (
    <div className="mobile">
      <header>
        <div className="navbar_mobile">
          <div className="hamburger" onClick={handleMenuClick}>
          <GiHamburgerMenu id='menu_burger'/>
          </div>
        </div>
      </header>
      {isModalOpen && (
        <div className={`modal fixed top-0 left-${isModalOpen ? '0' : '[-250px]'} w-[240px] duration-300`}>
          <div className="modal-content">
            <a href="#"  onClick={handleCloseModal}><MdClose className="close"/></a>
            <div className="hambur">
                {menu.map((ham) =>(
                    <ul key={ham.id}>
                        <li>
                            <a href={`#${ham.home}`}>{ham.home}</a>
                        </li>
                    </ul>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




export default HamburgerMenu