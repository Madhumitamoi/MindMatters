import Science from "./Science";
import "./ScienceStyles.css";

function ScienceData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default ScienceData;
