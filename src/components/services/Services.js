import './style.css';
import Container from "../helpers/Container";
import { ServiceData } from "../config/data";
import Service from './Service';

/*===================================*/
/*===================================*/
/*===================================*/

const Services = () => {
    return (
        <Container>
            <div className='services'>
                <div className="heading-box">
                    <h2>Services</h2>
                    <p>We have an exceptional range of services to help you.</p>
                </div>
                <div className="all-services">
                    {ServiceData?.map(ser => (
                        <Service data={ser} key={ser.id} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Services;