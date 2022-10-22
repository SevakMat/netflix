import Button from "../../../../shared/components/button/Button"

const ContentInfoText = ({ movie }) => {
  return (
    <>
      <h1>{movie.Category}</h1>
      <img src={require(`../../../../assets/${movie.TitleImage}`)} />
      <div className="info">
        <h2>{movie.ReleaseYear}</h2>
        <h2>{movie.MpaRating}</h2>
        <h2>{movie.Duration}</h2>

      </div>
      <h3>{movie.Description}</h3>


      <div className="contentInfoButtonSection" >
        <Button style={{ color: 'black', background: "wheat" }} text={"Play"} />
        <Button style={{ color: 'wheat', background: "blue" }} text={"More Info"} />
      </div>
    </>
  )
}

export default ContentInfoText