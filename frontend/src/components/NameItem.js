import React from "react";

const NameItem = (props) => {
  return (
    <>
      <p>{props.firstName} {props.lastName}</p>
      <div className="buttonsCont">
        <div className="hiddenDiv" data-id_value={`${props.id}`}></div>
        <button className="deleteName delCol">Delete</button>
        <button className="editName">Edit</button>
      </div>
    </>
  );
};

export default NameItem;
