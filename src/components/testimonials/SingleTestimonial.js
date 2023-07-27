const SingleTestimonial = ({ data: { testiImg, testiName, testiDesc } }) => {
    return (
        <div className="single-testi">
            <img src={testiImg} alt="" />
            <h4>{testiName}</h4>
            <p>{testiDesc}</p>
        </div>
    )
}

export default SingleTestimonial;