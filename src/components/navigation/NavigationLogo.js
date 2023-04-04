import { NavLink } from "react-router-dom";
import Photo from "../../assets/images/photo.png";
import ResetLocation from '../../helpers/ResetLocation'

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="logo-section"
      onClick={() => {
        ResetLocation();
        props.closeMenu();
      }}
    >
      <img src={Photo} alt="logo"></img>
    </NavLink>
  );
};

export default NavigationLogo;
