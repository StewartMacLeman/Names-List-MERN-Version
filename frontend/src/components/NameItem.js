import React from "react";

const NameItem = (props) => {
  return (
    <>
      <p>
        {props.firstName} {props.lastName}
      </p>
      <div className="buttonsCont">
        <button
          className="deleteName delCol"
          value={`${props.id}`}
          onClick={props.showDeleteModal}
        >
          Delete
        </button>
        <button
          className="editName"
          value={`${props.id}`}
          onClick={props.showEditModal}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default NameItem;
