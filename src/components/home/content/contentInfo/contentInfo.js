import "./contentInfo.scss"
import test from "../../../../assets/FeaturedCoverImage.png"
import ContentInfoText from "./contentInfoText";
import ContentInfoVideo from "./contentInfoVideo";


function ContentInfo({ movie }) {
  return (
    <div className="ContentInfoContainer"
      style={{
        backgroundImage: `url(${test})`,
        backgroundSize: 'cover',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        color: 'white'
      }}
    >
      <ContentInfoText movie={movie} />
      <ContentInfoVideo movie={movie} />
    </div>
  );
}



export default ContentInfo;
