import React, { useState } from "react";

function DisplayComments({ children }) {
  const [showComments, setShowComments] = useState(false);

  const toggleShow = () => {
    setShowComments((currState) => !currState);
  };

  return (
    <div>
      {showComments ? children : null}
      <button onClick={toggleShow}> Show Comments </button>
    </div>
  );
}

export default DisplayComments;
