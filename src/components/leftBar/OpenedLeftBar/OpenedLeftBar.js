import "./OpenedLeftBar.scss";

import LeftBarImg from "../LeftBarImg/LeftBarImg";
import Search from "../../../assets/icons/ICON - Search.png"
import Home from "../../../assets/icons/Group 46.png"
import Video from "../../../assets/icons/Group 56.png"
import Lent from "../../../assets/icons/Group 54.png"
import Mask from "../../../assets/icons/Group 53.png"
import Time from "../../../assets/icons/Group 47.png"


const OpenedLeftBar = ({ handleMouseOut }) => {
  return (
    <div className="OpenedLeftBarContainer test">
      <div onMouseOut={handleMouseOut} className="iconsContent">
        <div className="barRow">
          <LeftBarImg path={Search} />
          <h1>Search</h1>
        </div>

        <div className="barRow">
          <LeftBarImg path={Home} />
          <h1>Home</h1>
        </div>

        <div className="barRow">
          <LeftBarImg path={Video} />
          <h1>TV Shows</h1>
        </div>

        <div className="barRow">
          <LeftBarImg path={Lent} />
          <h1>Movies</h1>
        </div>

        <div className="barRow">
          <LeftBarImg path={Mask} />
          <h1>Genres</h1>
        </div>

        <div className="barRow">
          <LeftBarImg path={Time} />
          <h1>Watch later</h1>
        </div>
      </div>
    </div>
  );
};

export default OpenedLeftBar


