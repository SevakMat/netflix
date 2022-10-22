import "./button.scss"

const Button = ({ style, text }) => {
  return (
    <div style={style} className="buttonContainer">
      {text}
    </div>
  )
}
export default Button