const Video = ({ data: { videoUrl, videoDesc } }) => {
    return (
        <div className="video-box">
            <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
            ></iframe>
            <p>{videoDesc}</p>
        </div>
    )
}

export default Video;