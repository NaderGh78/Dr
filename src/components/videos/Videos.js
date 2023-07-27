import './style.css';
import Container from '../helpers/Container';
import { VideoData } from "../config/data";
import Video from "./Video";
import { useEffect, useRef } from 'react';

/*===================================*/
/*===================================*/
/*===================================*/

const Videos = () => {

    return (
        <Container>
            <div className='videos'>
                <h2>Videos</h2>
                <div className="videos-boxes">
                    {VideoData?.map(v => (<Video data={v} key={v.id} />))}
                </div>
            </div>
        </Container>
    )
}

export default Videos;