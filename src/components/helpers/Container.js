const Container = ({ children }) => {
    const style = {
        width: "85%",
        margin: "auto"
    }
    return (
        <div className="container" style={style}>{children}</div>
    )
}

export default Container;