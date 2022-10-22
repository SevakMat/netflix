import "./ClosedLefBar.scss";
import LeftBarImg from "../LeftBarImg/LeftBarImg";
import Search from "../../../assets/icons/ICON - Search.png"
import Home from "../../../assets/icons/Group 46.png"
import Video from "../../../assets/icons/Group 56.png"
import Lent from "../../../assets/icons/Group 54.png"
import Mask from "../../../assets/icons/Group 53.png"
import Time from "../../../assets/icons/Group 47.png"

const ClosedLeftBar = ({ handleMouseOver }) => {
  return (
    <div onMouseOver={handleMouseOver} className="ClosedLeftBarContainer">
      <div className="iconsContent">
        <div className="icon closed" >
          <LeftBarImg path={Search} />
        </div>
        <div className="icon closed">
          <LeftBarImg path={Home} />
        </div>
        <div className="icon closed">
          <LeftBarImg path={Video} />
        </div>
        <div className="icon closed">
          <LeftBarImg path={Lent} />
        </div>
        <div className="icon closed">
          <LeftBarImg path={Mask} />
        </div>
        <div className="icon closed">
          <LeftBarImg path={Time} />
        </div>
      </div>
    </div>
  );
};

export default ClosedLeftBar

