import { Link } from "react-router-dom";

const NavElement = ( { link, text } ) => {
    let selectedClassName = (window.location.pathname === link) ? "selected" : "";

    if (window.location.pathname.substring(0, 5) === "/item" && link === "/catalog") {
        selectedClassName = "selected";
    }

    return(
        <li>
            <div className={selectedClassName}>
                <Link to={link} className="link">{text}</Link>
            </div>
        </li>
    );
}

export default NavElement;