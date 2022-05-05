import React, { useState, useEffect } from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";
import ReloadButton from "./forms/ReloadButton";

const Main = (props) => {
  const [names, setNames] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [showModalDiv, setShowModalDiv] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [editId, setEditId] = useState("");
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");
  const [showReload, setShowReload] = useState(false);
  const [reload, setReload] = useState(false);

  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";

  // Read Functions. ----------------------------------------
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("The data was not returned!");
        }
        const nameItems = await response.json();
        setNames(nameItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, [reload]);

  // Create Functions. ---------------------------------------
  const createName = async (firstName, lastName) => {
    let newNameObject = {
      f_name: firstName,
      l_name: lastName,
    };
    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNameObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleNewName = (e) => {
    e.preventDefault();
    if (
      (!newFirstName && !newLastName) ||
      (newFirstName && !newLastName) ||
      (!newFirstName && newLastName)
    ) {
      return;
    }
    // Fetch function call!
    createName(newFirstName, newLastName);
    // -----------------------------------
    setNewFirstName("");
    setNewLastName("");
    showReloadModal();
  };
  // Show reload. -------------------------------------------
  const showReloadModal = () => {
    setShowModalDiv(true);
    setShowReload(true);
  };
  const handleReload = () => {
    setShowModalDiv(false);
    setShowReload(false);
    setReload((reload) => !reload);
  };

  // Delete functions. ---------------------------------------
  const showDeleteModal = (e) => {
    let id = e.target.value;
    setDeleteId(id);
    setShowModalDiv(true);
    setShowDelete(true);
  };
  const cancelDelete = () => {
    setDeleteId("");
    setShowModalDiv(false);
    setShowDelete(false);
  };
  const deleteName = async (delId) => {
    let newNameObject = {
      id: delId,
    };
    try {
      await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNameObject),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDelete = (e) => {
    e.preventDefault();
    // Fetch function call!
    deleteName(deleteId);
    // ---------------------
    let amendedNames = names.filter((name) => {
      return name._id != deleteId;
    });
    setNames(amendedNames);
    setDeleteId("");
    setShowModalDiv(false);
    setShowDelete(false);
  };

  // Edit functions. ----------------------------------------
  const showEditModal = (e) => {
    let id = e.target.value;
    let firstName =
      e.target.parentElement.previousSibling.querySelector(
        ".first"
      ).textContent;
    let lastName =
      e.target.parentElement.previousSibling.querySelector(".last").textContent;
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
  const editName = async (id, firstName, lastName) => {
    let editedNameObject = {
      id: id,
      f_name_edit: firstName,
      l_name_edit: lastName,
    };
    try {
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedNameObject),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const confirmEdit = (e) => {
    e.preventDefault();
    // Fetch function call!
    editName(editId, editedFirstName, editedLastName);
    // -----------------------------------------------
    let editedObject = {
      _id: editId,
      f_name: editedFirstName,
      l_name: editedLastName,
    };
    let idArray = names.map((item) => item._id);
    let idIndexNumber = idArray.indexOf(editId);
    let editedNames = names.map((item, index) => {
      if (index == idIndexNumber) {
        return editedObject;
      } else {
        return item;
      }
    });
    setNames(editedNames);
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
        fetchError={fetchError}
        names={names}
        showDeleteModal={showDeleteModal}
        showEditModal={showEditModal}
      />
      {showModalDiv && <ModalDiv />}
      {showReload && <ReloadButton reloadList={handleReload} />}
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
