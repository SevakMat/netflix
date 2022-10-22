import ContentInfo from "./contentInfo/contentInfo";
import Slider from "./slider/slider";
import "./content.scss"
import { useState } from "react";

function Content() {

  const [movie, setMovie] = useState({
    Id: "1",
    Title: "Title 1",
    CoverImage: "https_specials-1.png",
    TitleImage: "FeaturedTitleImage.png",
    Date: "2021-10-24T12:16:50.894556",
    ReleaseYear: "2021",
    MpaRating: "18+",
    Category: "Movie",
    Duration: "2000",
    VideoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    Description: "Info About it"
  })

  return (
    <div className="contentContainer" >
      <ContentInfo movie={movie} />
      <Slider setMovie={setMovie} />
    </div>
  );
}

export default Content;
