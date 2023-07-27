import './style.css';
import Container from '../helpers/Container';
import ContactBox from './ContactBox';
import { ContactData } from "../config/data";

/*===================================*/
/*===================================*/
/*===================================*/

const ContactUs = () => {
    return (
        <Container>
            <div className='contact'>
                <h2>Contact Us</h2>
                <div className="all-contacts">
                    {ContactData?.map(data => (<ContactBox data={data} key={data.id} />))}
                </div>
            </div>
        </Container>
    )
}

export default ContactUs;