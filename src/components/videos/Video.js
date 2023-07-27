const Video = ({ data: { videoUrl, videoDesc } }) => {
    return (
        <div className="video-box">
            <video controls>
                <source src={videoUrl} type="video/mp4">
                </source>
            </video>
            <p>{videoDesc}</p>
        </div>
    )
}

export default Video;