import React, { useState } from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const Main = (props) => {
  const [names, setNames] = useState(props.starterData);
  const [showModalDiv, setShowModalDiv] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
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
    // Temp functions!
    setDeleteId("");
    setShowModalDiv(false);
    setShowDelete(false);
  };
  // Edit functions. -----------------------------------
  const showEditModal = (e) => {
    let id = e.target.value;
    console.log(`Value: ${id}`);
    setEditId(id);
    setShowModalDiv(true);
    setShowEdit(true);
  };
  const cancelEdit = () => {
    setEditId("");
    setShowModalDiv(false);
    setShowEdit(false);
  };
  const confirmEdit = () => {
    console.log("The item was confirmed for an edit!");
    // Temp functions!
    setEditId("");
    setShowModalDiv(false);
    setShowEdit(false);
  };

  return (
    <main className="main">
      <h3>Add your names below!</h3>
      <CreateForm />
      <NamesCont
        names={names}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal}
      />
      {showModalDiv && <ModalDiv />}
      {showEdit && (
        <EditForm confirmEdit={confirmEdit} cancelEdit={cancelEdit} />
      )}
      {showDelete && (
        <DeleteForm confirmDelete={confirmDelete} cancelDelete={cancelDelete} />
      )}
    </main>
  );
};

export default Main;
