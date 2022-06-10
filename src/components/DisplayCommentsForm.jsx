import React, { useState } from "react";

function DisplayCommentsForm({ children }) {
  const [form, setForm] = useState(false);
  const [buttonText, setButtonText] = useState("add comment");

  const toggleForm = () => {
    setForm((currState) => !currState);

    buttonText === "add comment"
      ? setButtonText("Back")
      : setButtonText("add comment");
  };

  return (
    <div>
      {form ? children : null}
      <button onClick={toggleForm}> {buttonText} </button>
    </div>
  );
}

export default DisplayCommentsForm;
