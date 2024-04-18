import React,{useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import "./footer.scss"
import video from "../Assets/footer.mp4"
import {FiSend} from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md';
import {FaTwitter,FaYoutube,FaGoogle  } from 'react-icons/fa'
import {FiInstagram,FiChevronRight} from 'react-icons/fi'


const Footer = () => {
    useEffect( () => {
        Aos.init({duration: 2000})
    },[])
    return (
       <section className='footer'>
        <div className="videoDiv">
            <video src={video}  muted autoPlay loop type="video/mp4"></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH </small>
                    <h2>Travel with us</h2>
                </div>
                <div data-aos="fade-up" className="inputDiv flex">
                    <input type="text" placeholder='enter email address'/>
                    <button  className='btn flex' type='submit'>SEND<FiSend className="icon"/></button>
                </div>
            </div>
            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="" className="logo flex">
                            <MdOutlineTravelExplore className='icon'/>
                            Travel.
                        </a>
                    </div>
                    <div data-aos="fade-up" className="footerParagraph">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis reiciendis praesentium, ipsum voluptates impedit magnam architecto nobis blanditiis alias ducimus molestias ipsa officiis culpa dicta provident, perspiciatis inventore, voluptatibus veritatis eveniet sit! Perspiciatis corrupti aliquid excepturi et. Sunt ipsa quidem cumque praesentium laudantium aspernatur cupiditate corporis eius cum quasi dolorem, dolorum molestias ab sint vitae ratione placeat! Possimus suscipit perferendis numquam fugiat optio error quo, voluptates culpa illum nostrum.
                    </div>
                    <div data-aos="fade-up" className="footerSocial flex">
                    <FaTwitter  className='icon' />
                    <FaYoutube  className='icon'/>
                    <FiInstagram  className='icon'/>
                    <FaGoogle className='icon'/>
                    </div>
                </div>
                <div className="footerLinks grid">
                    <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                        <span className="groupTitle">
                            OUR COMPANY
                        </span>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Services
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        incurance
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        comments
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Tourism
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Payment
                        </li>
                    </div>
                    {/* group two */}
                    <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                        <span className="groupTitle">
                            Partners
                        </span>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Bookings
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Rentcars
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        HostelWorld
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Trivago
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        TripAdvisor
                        </li>
                    </div>
                    {/* group three */}
                    <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                        <span className="groupTitle">
                            Last Minute
                        </span>
                        <li className="footerList flex">
                        <FiChevronRight />
                        London
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        California
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Indinesia
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        Turkey
                        </li>
                        <li className="footerList flex">
                        <FiChevronRight />
                        USA
                        </li>
                    </div>
                    <div className="footerDiv grid">
                    <small>BEST WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED-RUSSIA 2023</small>
                </div>
            </div>
            
                </div>
        </div>

       </section>
    );
};

export default Footer;