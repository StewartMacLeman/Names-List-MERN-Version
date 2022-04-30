import React from "react";

const NameItem = () => {
  return (
    <>
      <p>
        <span className="firstName">FirstName</span>
        <span className="lastName"> LastName</span>
      </p>
      <div className="buttonsCont">
        <div className="hiddenDiv" data-id_value="<%= name._id %>"></div>
        <button className="deleteName delCol">Delete</button>
        <button className="editName">Edit</button>
      </div>
    </>
  );
};

export default NameItem;
