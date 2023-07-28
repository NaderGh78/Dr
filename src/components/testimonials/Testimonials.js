import './style.css';
import Container from "../helpers/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LiaAngleRightSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { TestimonialData } from "../config/data";
import SingleTestimonial from './SingleTestimonial';

/*===================================*/
/*===================================*/
/*===================================*/

const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
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
            <div className='testimonial' id='Testimonials'>
                <h2>Testimonials</h2>
                <div className="all-testimonials">
                    <Slider {...settings}>
                        {TestimonialData.map((item) => (
                            <SingleTestimonial data={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default Testimonials;