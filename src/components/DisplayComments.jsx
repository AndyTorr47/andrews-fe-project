import React, { useState } from "react";

function DisplayComments({ children }) {
  const [showComments, setShowComments] = useState(false);

  const [buttonText, setButtonText] = useState("Show Comments");

  const toggleShow = () => {
    setShowComments((currState) => !currState);

    buttonText === "show comments"
      ? setButtonText("hide comments")
      : setButtonText("show comments");
  };

  return (
    <div>
      {showComments ? children : null}
      <button onClick={toggleShow}> {buttonText} </button>
    </div>
  );
}

export default DisplayComments;
