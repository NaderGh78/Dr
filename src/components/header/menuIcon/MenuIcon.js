import './style.css';

/*===================================*/
/*===================================*/
/*===================================*/

const MenuIcon = ({ menuClick }) => {
    return (
        <div className="menu_icon" onClick={menuClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuIcon;