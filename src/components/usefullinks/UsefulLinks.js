import './style.css';
import Container from "../helpers/Container";
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

/*===================================*/
/*===================================*/
/*===================================*/

const UsefulLinks = () => {
    return (
        <Container>
            <div className='useful'>
                <div className="all-usefuls">
                    <div className="usefull-box">
                        <h5>useful links</h5>
                        <ul>
                            <li><a href="">Services</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Gallery</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">Testimonials</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="usefull-box">
                        <h5>contact</h5>
                        <ul>
                            <li><a href="">Egypt - Cairo Main Street</a></li>
                            <li><a href="">+20-123456789</a></li>
                            <li><a href="">example77@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="usefull-box">
                        <h5>connect</h5>
                        <ul>
                            <li><a href=""><FaYoutube /></a></li>
                            <li><a href=""><FaFacebook /></a></li>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><FaTiktok /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UsefulLinks;