import { Link } from "react-router-dom";

const NavElement = ( { link, text } ) => {
    let selectedClassName = (window.location.pathname === link) ? "selected" : "";

    if (window.location.pathname.substring(0, 5) === "/item" && link === "/catalog") {
        selectedClassName = "selected";
    } else if (window.location.pathname.substring(0, 7) === "/addcat" && link === "/catalog") {
        selectedClassName = "selected";
    } else if (window.location.pathname.substring(0, 8) === "/editcat" && link === "/catalog") {
        selectedClassName = "selected";
    } else if (window.location.pathname.substring(0, 14) === "/cart/checkout" && link === "/cart") {
        selectedClassName = "selected";
    } else if (window.location.pathname.substring(0, 13) === "/cart/success" && link === "/cart") {
        selectedClassName = "selected";
    }

    return(
        <li>
            <Link to={link} className={selectedClassName + " link"}><div className="text">{text}</div></Link>
        </li>
    );
}

export default NavElement;