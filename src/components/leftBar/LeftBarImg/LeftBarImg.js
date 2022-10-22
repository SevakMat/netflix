import "./LeftBarImg.scss"

const LeftBarImg = ({ path }) => {
  return (
    <div className="ClosedLeftBarImgContainer" >
      <img src={path} alt="path" />
    </div>
  );
};

export default LeftBarImg


