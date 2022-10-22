import { useSelector } from "react-redux"
import "./slider.scss"


function Slider({ setMovie }) {

  const muviesList = useSelector((state) => state.muviesList)

  return (
    <div className="sliderContainer" >
      {muviesList && muviesList.TendingNow?.map((item, i) => {
        return (
          <div className='sliderItem' onClick={() => setMovie(item)} key={i} >
            <img src={require(`../../../../assets/${item.CoverImage}`)} alt="alt" />
          </div>
        )
      })}

    </div>
  );
}

export default Slider;
