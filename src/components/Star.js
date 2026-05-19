import { FaStar } from "react-icons/fa";

function Star(props) {
  return (
    <FaStar
      className={props.ok ? "st on" : "st"}
      onClick={props.tap}
    />
  );
}

export default Star;