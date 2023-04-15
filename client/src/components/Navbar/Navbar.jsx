import "./Navbar.css";
import { BrandLogo, DarkLightModeBtn } from "../index";

const Navbar = () => {
  return (
    <header className="navbar">
      <BrandLogo />
      <nav>
        <DarkLightModeBtn />
      </nav>
    </header>
  );
};

export default Navbar;
