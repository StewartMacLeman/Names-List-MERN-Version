import React from "react";

const DeleteForm = (props) => {
  return (
    <form className="deleteForm" onSubmit={props.confirmDelete}>
      <div className="buttonsCont">
        <input type="hidden" />
        <button type="submit" className="delCol">
          Confirm
        </button>
        <button type="button" onClick={props.cancelDelete}>Cancel</button>
      </div>
    </form>
  );
};

export default DeleteForm;
