import './style.css';
import { LiaTimesSolid } from 'react-icons/lia';
import myVideo from "../../../assets/video/myVideo.mp4";

/*===================================*/
/*===================================*/
/*===================================*/

const VideoPoPup = ({ play, close, rff }) => {
    return (
        <div className="video-popup" style={{ display: play ? "block" : "none" }}>
            <span className='close-video' onClick={close}>
                <LiaTimesSolid />
            </span>
            <div className="video-box">
                <video className="backVideo" controls ref={rff}>
                    <source src={myVideo} type="video/mp4">
                    </source>
                </video>
            </div>
        </div>
    )
}

export default VideoPoPup;