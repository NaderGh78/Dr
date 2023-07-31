import './style.css';
import Container from "../helpers/Container";
import AboutImg from "../../assets/about-bg.jpg";

/*===================================*/
/*===================================*/
/*===================================*/

const About = () => {
    return (
        <Container>
            <div className='about' id='About-Us'>
                <div className="about-box">
                    <img src={AboutImg} alt="" />
                    <div className="about-desc">
                        <h3>about us</h3>
                        <p>
                            Sound mental health is important for a healthy and balanced lifestyle, and in our clinic we work for the same. Our objective is making people happy and healthy through our authentic treatments. We Physio Care, situated at Kohalli, Aigali, Karnataka have experienced and skilled doctors. All patients are assured of the best service in a very non-stressful ambience and thorough attention is paid to hygiene and sanitation.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About;