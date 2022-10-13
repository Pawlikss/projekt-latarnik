import { Link } from 'react-router-dom'

const BottomNav = () => {
    return ( 
        <ul className="nav justify-content-end pad">
            <li className="nav-item">
                <Link className="nav-link" to="/">O PROJEKCIE</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">KONTAKT</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/test">WYPEŁNIJ TEST</Link>
            </li>
        </ul>
    );
}
 
export default BottomNav;