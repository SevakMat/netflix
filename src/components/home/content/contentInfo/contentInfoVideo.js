import "./contentInfoVideo.scss"

const ContentInfoVideo = ({ movie }) => {
  return (
    <iframe className="ContentInfoVideoContent" src={movie.VideoUrl} />
  )
}

export default ContentInfoVideo