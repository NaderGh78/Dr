import './style.css';
import Container from '../helpers/Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GalleryData } from "../config/data";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";

/*===================================*/
/*===================================*/
/*===================================*/

const Gallery = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <LiaAngleRightSolid /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <LiaAngleLeftSolid /> </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (

        <Container>
            <div className='gallery'>
                <h1 className="header">Gallery</h1>
                <Slider {...settings}>
                    {GalleryData.map((item) => (
                        <div key={item.id}>
                            <img src={item.galleryImg} alt="" className="img" />
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    )
}

export default Gallery;