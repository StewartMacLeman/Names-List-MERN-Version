import React, { useState } from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const Main = (props) => {
  const [names, setNames] = useState(props.starterData);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [showModalDiv, setShowModalDiv] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  // Read Functions. --------------------------------------
  // Create Functions. ------------------------------------
  const handleNewName = (e) => {
    e.preventDefault();
    if (
      (!newFirstName && !newLastName) ||
      (newFirstName && !newLastName) ||
      (!newFirstName && newLastName)
    ) {
      return;
    }
    console.log("The submit button was clicked!");
    console.log(`The name submitted was ${newFirstName} ${newLastName}`);
    // Fetch function call!
    setNewFirstName("");
    setNewLastName("");
  };
  // Delete functions. -----------------------------------
  const showDeleteModal = (e) => {
    let id = e.target.value;
    console.log(`Value: ${id}`);
    setDeleteId(id);
    setShowModalDiv(true);
    setShowDelete(true);
  };
  const cancelDelete = () => {
    setDeleteId("");
    setShowModalDiv(false);
    setShowDelete(false);
  };
  const confirmDelete = () => {
    console.log("The item was confirmed for deletion");
    // Fetch function call!
    // Temp functions!
    setDeleteId("");
    setShowModalDiv(false);
    setShowDelete(false);
  };
  // Edit functions. -----------------------------------
  const showEditModal = (e) => {
    let id = e.target.value;
    let firstName =
      e.target.parentElement.previousSibling.querySelector(
        ".first"
      ).textContent;
    let lastName =
      e.target.parentElement.previousSibling.querySelector(".last").textContent;
    console.log(`Value: ${id}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    setEditId(id);
    setEditedFirstName(firstName);
    setEditedLastName(lastName);
    setShowModalDiv(true);
    setShowEdit(true);
  };
  const cancelEdit = () => {
    setEditId("");
    setEditedFirstName("");
    setEditedLastName("");
    setShowModalDiv(false);
    setShowEdit(false);
  };
  const confirmEdit = (e) => {
    e.preventDefault();
    console.log("The item was confirmed for an edit!");
    // Fetch function call!
    // Temp functions!
    setEditId("");
    setEditedFirstName("");
    setEditedLastName("");
    setShowModalDiv(false);
    setShowEdit(false);
  };

  return (
    <main className="main">
      <h3>Add your names below!</h3>
      <CreateForm
        newFirstName={newFirstName}
        newLastName={newLastName}
        setNewFirstName={setNewFirstName}
        setNewLastName={setNewLastName}
        handleNewName={handleNewName}
      />
      <NamesCont
        names={names}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal}
      />
      {showModalDiv && <ModalDiv />}
      {showEdit && (
        <EditForm
          editedFirstName={editedFirstName}
          setEditedFirstName={setEditedFirstName}
          setEditedLastName={setEditedLastName}
          editedLastName={editedLastName}
          confirmEdit={confirmEdit}
          cancelEdit={cancelEdit}
        />
      )}
      {showDelete && (
        <DeleteForm confirmDelete={confirmDelete} cancelDelete={cancelDelete} />
      )}
    </main>
  );
};

export default Main;
