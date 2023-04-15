import { Fragment } from "react";
import { LogoSymbol } from "./BrandLogo.styled";

const BrandLogo = () => {
  return (
    <Fragment>
      {/* <img src={logo} alt="jobify" className="logo"/> */}
      <div className="logo-block">
        <LogoSymbol>
          <img
            alt="jobify"
            src="https://cdn1.iconfinder.com/data/icons/round-mobile-ui-set/512/kid-alphabet-latin-j-letter-child-512.png"
            className="logo-symbol"
          />
        </LogoSymbol>
        <span className="brand-typo">Jobify</span>
      </div>
    </Fragment>
  );
};

export default BrandLogo;
