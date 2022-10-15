import { Link } from 'react-router-dom'
import styles from '../styl.css'
const BottomNav = () => {
    return (
        <div className="footer">
            <div className="FooterItem">
                <Link className="link" to="/">O projekcie</Link>
            </div>
            <div className="FooterItem">
                <Link className="link" to="/">Kontakt</Link>
            </div>
        </div>
    );
}

export default BottomNav;