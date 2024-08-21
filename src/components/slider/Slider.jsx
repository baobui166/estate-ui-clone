import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(null);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" || event.key === "Esc") {
      setImgIndex(null);
    }
  });

  function btnNextImage() {
    if (imgIndex <= images.length - 2) {
      setImgIndex((pre) => pre + 1);
    } else {
      setImgIndex(0);
    }
  }
  function btnPrevImage() {
    if (imgIndex >= 1) {
      setImgIndex((pre) => pre - 1);
    } else {
      setImgIndex(images.length - 1);
    }
  }
  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="full">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={btnPrevImage} />
          </div>
          <div className="img_full">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              className="right"
              onClick={btnNextImage}
            />
          </div>

          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="big_images">
        <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
      </div>
      <div className="small_images">
        {images.slice(1).map((img, index) => {
          return (
            <img src={img} key={index} onClick={() => setImgIndex(index + 1)} />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
