import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} className="popup">
      <Popup>
        <div className="popup-container">
          <img src={item.img} alt="" />
          <div className="textcontainer">
            <Link to={`/${item.id}`} className="title">
              {item.title}
            </Link>
            <span className="bed">
              {item.bedroom} {item.bedroom === 1 ? "bedroom" : "bedrooms"}
            </span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
