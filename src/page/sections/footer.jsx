import { Connect, resources } from '../../data/data'
import GeekLogo from '../../assets/images/guruku_logo.svg'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="footer_border">
            <div className='footer-cont'>

                <div className="geeks">
                    <img src={GeekLogo} alt="" />
                    <p>Unleash the Power of Learning: Discover
                        a World of Possibilities
                        with our Cutting-edge Learning Management System.</p>
                </div>
                <div className="connect">
                    <h3>Connect</h3>
                    {Connect.map((connects) => (
                        <div key={connects.id} className="connects">
                            <ul>
                                <li>
                                    <a href={`#${connects.id}`}>
                                        {connects.link}
                                    </a>
                                </li>
                            </ul>

                        </div>
                    ))}
                </div>
                <div className="resources">
                    <h3>Resources</h3>
                    {resources.map((resource) => (
                        <div key={resource.id} className="resource">
                            <ul>
                                <li>
                                    <a href={`#${resource.id}`}>
                                        {resource.link}
                                    </a>
                                </li>
                            </ul>

                        </div>
                    ))}
                </div>
                <div className="get_in_touch">
                    <h3>Get in touch</h3>
                    <div className="social_media">
                        <FaFacebookF className='media' />
                        <FaTwitter className='media' />
                        <FaInstagram className='media' />
                        <FaLinkedinIn className='media' />
                    </div>
                    <h3>Contact us</h3>
                 <div className='phone'> <FaPhone /><span>+91 9109976089</span> </div>   
                    <div className='mail'><CiMail /><span>admin@geeksofgurukul.com</span></div>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright 2024 Skillscan Edtech India Private Ltd. All Rights Reserved.</p>
            </div>
        </div>

    )
}

export default Footer