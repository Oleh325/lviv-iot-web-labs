import { Link } from "react-router-dom";

const NavElement = ( { link, text } ) => {
    return(
        <li>
            <div className={(window.location.pathname === link) ? "selected" : ""}>
                <Link to={link} className="link">{text}</Link>
            </div>
        </li>
    );
}

export default NavElement;