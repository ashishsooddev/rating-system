import { useState } from "react";
import Star from "./Star";

function StarRating(props) {
  const [count, setCount] = useState(0);

  const words = [
    "Very Bad",
    "Poor",
    "Okay",
    "Good",
    "Excellent"
  ];

  return (
      <section className="ratingArea">
      <h2 className="ratingTitle">{props.title}</h2>
      <div className="starRow">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star key={item} ok={item <= count} hit={() => setCount(item)}/>
        ))}
      </div>
      <p className="ratingText">
        {count === 0 ? "Choose Rating" : words[count - 1]}
      </p>
    </section>
  );
}

export default StarRating;   