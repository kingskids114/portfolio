import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/cloud.jpeg"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__wrap">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <ul>
                <li>
                    <Link to='/students'>Ученики</Link>
                </li>
                <li>
                    <Link to='/teachers'>Учителя</Link>
                </li>
                <li>
                    <Link to='/projects'>Проекты</Link>
                </li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;