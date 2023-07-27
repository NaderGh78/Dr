import './style.css'
import Container from "../helpers/Container";

/*===================================*/
/*===================================*/
/*===================================*/

const FormSection = () => {
    return (
        <Container>
            <div className='from-section'>
                <div className="form-box">
                    <form>
                        <div className="flex-box">
                            <div className="left">
                                <input type="text" placeholder='Full Name' />
                                <input type="number" placeholder='Mobile Number' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <div className="right">
                                <textarea name="" placeholder='Message'></textarea>
                            </div>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default FormSection;