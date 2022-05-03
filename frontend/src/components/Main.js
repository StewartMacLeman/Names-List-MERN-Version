import React, { useState, useEffect } from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const Main = (props) => {
  // const [names, setNames] = useState(props.starterData);
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

  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";
  // Read Functions. --------------------------------------
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("The data was not returned!");
        }
        const nameItems = await response.json();
        // To be removed!
        console.log(nameItems);
        setNames(nameItems);
        setFetchError(null);
      } catch (error) {
        // To be removed!
        console.log(error.message);
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, []);

  // Create Functions. ------------------------------------
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
    console.log("The submit button was clicked!");
    console.log(`The name submitted was ${newFirstName} ${newLastName}`);
    // Fetch function call!
    createName(newFirstName, newLastName);
    // Temporary re-render values --------
    let tempObject = {
      _id: Math.random(),
      f_name: newFirstName,
      l_name: newLastName,
    };
    setNames([...names, tempObject]);
    // -------------------------------------
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
    console.log(`The id value is: ${deleteId}`);
    // --------------------------------------------
    let idPresent = names
      .map((item) => {
        return item._id;
      })
      .includes(deleteId);
    console.log(`Id state: ${idPresent}`);
    if (!idPresent) {
      let amendedNames = names.filter((name) => {
        return name._id != deleteId;
      });
      setNames(amendedNames);
    } else if (idPresent) {
      // Fetch function call!
      deleteName(deleteId);
      let amendedNames = names.filter((name) => {
        return name._id != deleteId;
      });
      setNames(amendedNames);
    }
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
        fetchError={fetchError}
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
