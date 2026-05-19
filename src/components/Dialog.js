function Dialog(props) {
  return (
    <div className="dialogCard">
      <p className="dialogText"> {props.text}</p>
      <button className="closeBtn" onClick={props.close}>
        Close
      </button>
    </div>
  );
}

export default Dialog;