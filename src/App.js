import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <main className="wrapBox">
      <h1 className="mainTitle">Rating System</h1>
      <StarRating title="Movie Review" />
      <button
        className="openBtn"
        onClick={openDialog}
      >
        Open Dialog
      </button>

      {showDialog && (
        <Dialog text="Thanks for visiting our website!" close={closeDialog}/>
      )}
    </main>
  );
}

export default App;