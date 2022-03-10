import './footer.css'
import logo from '../images/logo.svg'
import twitter from "../images/icon-twitter.svg"
import youtube from '../images/icon-youtube.svg';
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import Button from './Button';


function Footer() {
      return (
            <footer>
                  <div className='footer-primary'>
                        <img src={logo} alt="" srcset="" />
                        <span>
                              <img src={facebook} alt="" /><img src={youtube} alt="" /><img src={twitter} alt="" /><img src={pinterest} alt="" /><img src={instagram} alt="" />
                        </span>
                  
                  </div>

                  <div className='footer-list-primary'>
                        <ul>
                              <li><a href='#'>About Us</a></li>
                              <li><a href='#'>Contact</a></li>
                              <li><a href='#'>Blog</a></li>
                        </ul>

                  </div>

                  <div className='footer-list-secondary'>
                        <ul>
                              <li><a href='#'>Careers</a></li>
                              <li><a href='#'>Support</a></li>
                              <li><a href='#'>Privacy Policy</a></li>
                        </ul>

                  </div>

                  <div className='footer-tetiary'>
                        <Button />
                        <p> &copy;EasyBank. All Rights Reserved</p>

                  </div>


            </footer>
            
      )
}

export default Footer;