const ContactBox = ({ data: { icon, title, contactDesc } }) => {
    return (
        <div className="contact-box">
            <img src={icon} alt="" />
            <h5>{title}</h5>
            <p>{contactDesc}</p>
        </div>
    )
}

export default ContactBox;