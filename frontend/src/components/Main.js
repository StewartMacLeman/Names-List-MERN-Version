import React from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const Main = () => {
    return (
        <main className="main">
            <h3>Add your names below!</h3>
            <CreateForm />
            <NamesCont />
            <ModalDiv />
            <EditForm />
            <DeleteForm />
        </main>
    )
}

export default Main;