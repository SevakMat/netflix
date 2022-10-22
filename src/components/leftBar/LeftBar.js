import { useState } from "react";
import ClosedLeftBar from "./ClosedLeftBar/ClosedLeftBar";
import OpenedLeftBar from "./OpenedLeftBar/OpenedLeftBar";

function LeftBar() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    < >
      <ClosedLeftBar handleMouseOver={handleMouseOver} />
      {isHovering === true && <OpenedLeftBar handleMouseOut={handleMouseOut} />}
    </>
  );
}

export default LeftBar;
