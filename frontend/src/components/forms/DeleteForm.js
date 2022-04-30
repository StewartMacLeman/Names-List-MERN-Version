import React from "react";

const DeleteForm = () => {
  return (
    <form className="deleteForm hiddenDiv" onSubmit={(e) => e.preventDefault()}>
      <div className="buttonsCont">
        <input type="hidden" />
        <button type="button" className="delCol">
          Confirm
        </button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

export default DeleteForm;
