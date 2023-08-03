import './style.css';
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { LiaArrowDownSolid, LiaSunSolid } from "react-icons/lia";
import { MdNightlightRound, MdSunny } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { DarkModContext } from "../../../context/darkMoodContext";
import { useContext } from 'react';

/*===================================*/
/*===================================*/
/*===================================*/

const SideBar = ({ click }) => {

    const { isDark, toggle } = useContext(DarkModContext);

    const handleScroll = () => {
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth',
        });
        console.log(window.innerHeight);
    }

    return (
        <div className="sidebar" style={{ right: !click ? "0" : "-40%" }}>
            {isDark ? <MdSunny className='day-night' onClick={toggle} /> : <MdNightlightRound className='day-night' onClick={toggle} />}
            <div className="sidebar_content">
                <a href="">
                    <img src={logo} alt="logo" />
                </a>
                <h1>Embassy Of Happiness</h1>
                <p>provide professional mental health care and bring happiness.</p>
                <a className="book">book appointment</a>
                <div className="social_links">
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
                <span className="arrow_down" onClick={handleScroll}>
                    <LiaArrowDownSolid />
                </span>
            </div>
        </div>
    )
}

export default SideBar;