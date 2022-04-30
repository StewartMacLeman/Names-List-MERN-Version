import React from "react";

const DeleteForm = (props) => {
  return (
    <form className="deleteForm" onSubmit={(e) => e.preventDefault()}>
      <div className="buttonsCont">
        <input type="hidden" />
        <button type="button" className="delCol" onClick={props.confirmDelete}>
          Confirm
        </button>
        <button type="button" onClick={props.cancelDelete}>Cancel</button>
      </div>
    </form>
  );
};

export default DeleteForm;
