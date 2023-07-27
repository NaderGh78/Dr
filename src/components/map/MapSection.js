import './style.css';
import Container from '../helpers/Container';

/*===================================*/
/*===================================*/
/*===================================*/

const MapSection = () => {
  return (
    <Container>
      <div className='map-section'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55201.93836522968!2d31.588611994765216!3d30.14795218918133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f7d7c85c1e63%3A0xa16c80a505d27145!2sEl%20Shorouk%20City%2C%20El%20Shorouk%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2slb!4v1690414640227!5m2!1sen!2slb" style={{ border: "0", width: "100%", height: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
  )
}

export default MapSection;