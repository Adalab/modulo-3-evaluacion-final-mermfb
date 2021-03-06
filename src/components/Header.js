import logo from "../images/Rick_and_Morty_-_logo_(English).png";
import "../stylesheets/Header.scss";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <Link to="/" className="header">
        <img
          src={logo}
          title="Rick and Morty logo"
          alt="Rick and Morty logo"
          className="header__logo"
        />
      </Link>
    </header>
  );
}
export default Header;
