import React from 'react';
import './Homepage.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import abouthome from '../../images/abouthome.jpg';

import featuresimg from '../../images/featuresimg2.png';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import subscribe from '../../images/subscribe.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Contactus from '../Contactus/Contactus';

function Homepage(props){
    
    return(
        <>
        <div>
        <div className="homepage-container">
        <h1>A Complete Solution For</h1>
        <h1>House Owner</h1>
        <h1>House management system</h1>
        
        <h1>Super easy to use & Time Saving</h1>
        <h1>Proper house management system</h1>
        
        <button className="homepage-btn">Search for House</button>
        </div>
        </div>

        {/* about div starts here */}

        <div className="about-container" ref={props.scrollabout}>
            <div className="about-inner-container-one">
                <h1>About us</h1>
                <h1>About <span className="about-inner-container-one-about-span">House Rent</span></h1>
                <div>
                    <CheckCircleIcon color="primary"/>
                    <div className='tick-line-blue'>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled 
                it to make a type specimen book. It has survived not only five centuries, but also 
                the leap into electronic typesetting, remaining essentially unchanged.</p>
                <button className="btn" onClick={()=>props.handlescroll('cmoreabout')}>
                    <span className="btn-text-one">More About Us</span>
                    <span className="btn-text-two">Great!</span>
                </button>
            </div>

            <div className="about-inner-container-two">
                <img src={abouthome} alt="homeimage" className="about-home-image"/>
            </div>
        </div>

        {/* wave image goes here */}

        <div className="waves-image-container">
        </div>

        {/* more about container */}
        <div className="more-about-container" ref={props.scrollmoreabout}>
            <div className="more-about-inner-container">
                <h1>About us</h1>
                <h1>About <span className="about-inner-container-one-about-span">House Rent</span></h1>
                <div className="more-about-inner-one">
                <hr/>
                </div>
                <p className="more-about-inner-one">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
            </div>
            {/* cards in inner container */}
            <div className="cards-container-about">
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
                <div className="cards-about-more-container">
                    <div className="cards-about-more-inner-container">
                        <h1>Super Easy</h1>
                        <p>Super easy to use & Time Saving.</p>
                        <p>Proper house management system.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* wavesbuilding Images */}
        <div className="wavesbuilding-images">
        </div>

        {/* features div */}
        <div className="features-container">
            <div>
            <img src={featuresimg} alt="featuresimg" className="features-container-img"/>
            </div>
            <div className="features-container-inner-two">
                <h1>Features</h1>
                <h1>Other <span className="features-container-inner-two-para-span">Features</span></h1>
                <div className="features-inner-container-hr">
                    <hr/>
                </div>
                <div>
                    <p className="features-inner-container-three-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <ul className="features-inner-container-list">
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                </ul>
            </div>
        </div>

        {/* Get started today */}
        <div className="subscribe-container">
            <div className="features-container-inner-two">
                <h1>Subscribe</h1>
                <h1>GET STARTED <span className="features-container-inner-two-para-span">Today</span></h1>
                <div className="features-inner-container-hr">
                    <hr/>
                </div>
                <div>
                    <p className="features-inner-container-three-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <ul className="features-inner-container-list">
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                    <li><ControlPointIcon color="white"/><p className="features-inner-container-list-p">Super easy to use & Time Saving</p></li>
                </ul>
                <button className="scbscribe-inner-now">Subscribe Now</button>
            </div>
            <div>
            <img src={subscribe} alt="subscribeimg" className="features-container-img"/>
            </div>
        </div>
       <Contactus userdetl={props.userdetl} scrollcontact={props.scrollcontact}/>
        {/* footer homepage container */}
        <div className="footer-container">
            {/* part1 */}
            <div className="footer-container-first-part">
                <h1>HouseRent</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui animi laboriosam 
                explicabo minus provident expedita saepe tenetur inventore </p>
                <h1>Follow Us</h1>
                <div className="footer-container-first-part-first">
                <WhatsAppIcon sx={{color:'white'}}/>
                <LinkedInIcon sx={{color:'white'}}/>
                <TwitterIcon sx={{color:'white'}}/>
                </div>
            </div>
            {/* part2 */}
            <div className="footer-container-first-part">
                <h1>Resource</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>features</p>
                <p>Contact Us</p>
            </div>
            {/* part3*/}
            <div className="footer-container-first-part">
                <h1>Give Us a Call</h1>
               
                <div className="footer-container-first-part-first">
                <WifiCalling3OutlinedIcon />
                <p>call: 999-999-9990</p>
                </div>
                <hr/>

                <h1>mail us</h1>
                <div className="footer-container-first-part-first">
                <MailOutlinedIcon />
                <p>mail: houserent@gmail.com</p>
                </div>
                <hr/>
                <p>Need Help?</p>
            </div>
        </div>
        
        </>
    );
}
export default Homepage;