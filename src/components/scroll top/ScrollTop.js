import './style.css';
import React, { useState } from 'react';
import { LiaAngleUpSolid } from "react-icons/lia";

/*===================================*/
/*===================================*/
/*===================================*/

const ScrollTop = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    /*===================================*/
    /*===================================*/
    /*===================================*/

    return (
        <div className='scroll-top'>
            <LiaAngleUpSolid
                onClick={scrollToTop}
                style={{ display: visible ? 'inline-block' : 'none' }}
            />
        </div>
    )
}

export default ScrollTop;