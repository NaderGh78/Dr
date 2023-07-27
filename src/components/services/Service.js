const Service = ({ data: { serviceImg, serviceHeading, serviceDesc } }) => {
    return (
        <div className="service">
            <img src={serviceImg} alt="" />
            <h3>{serviceHeading}</h3>
            <p>{serviceDesc}</p>
            <button>enquire now</button>
        </div>
    )
}

export default Service;