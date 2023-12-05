
import './ImageBox.css'

const ImageBox = () => {
  return (
    <div className="box">
      <div className="box-content">
        <div className="box-content-icon">
          <img className="box-content-icon-img" src="imgs/jordanIcon.svg" />
          <h1 className="box-content-icon-text">JordanShoes</h1>
        </div>
        <h1 className="box-content-title">A melhor loja de Jordan</h1>
        <h2 className="box-content-subtitle">O tênis Jordan é fruto de uma velha e forte <br />
          parceria entre a Nike e o jogador Michael Jordan.</h2>
      </div>

    </div>
  )
}

export default ImageBox