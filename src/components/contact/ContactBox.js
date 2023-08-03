const ContactBox = ({ data: { icon, title, contactDesc } }) => {
    const Icon = icon;
    return (
        <div className="contact-box">
            <Icon />
            <h5>{title}</h5>
            <p>{contactDesc}</p>
        </div>
    )
}

export default ContactBox;