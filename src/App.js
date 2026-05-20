import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [showBox, setShowBox] = useState(false);

  const openBox = () => {
    setShowBox(true);
  };

  const closeBox = () => {
    setShowBox(false);
  };

  return (
    <main className="wrapBox">
      <h1 className="mainTitle">Rating System</h1>
      <StarRating title="Movie Review" />
      <button
        className="openBtn"
        onClick={openBox}
      >
        Open Dialog
      </button>

      {showBox && (
        <Dialog text="Thanks for visiting our website!" close={closeBox}/>
      )}
    </main>
  );
}

export default App;