import React from "react";

const NameItem = (props) => {
  return (
    <>
      <p>
        <span className="first">{props.firstName}</span>
        <span>{" "}</span>
        <span className="last">{props.lastName}</span>
      </p>
      <div className="buttonsCont">
        <button
          className="delCol"
          value={`${props.id}`}
          onClick={props.showDeleteModal}
        >
          Delete
        </button>
        <button
          className=""
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
