import React, {useState} from "react";
import NamesCont from "./NamesCont";
import CreateForm from "./forms/CreateForm";
import ModalDiv from "./forms/ModalDiv";
import EditForm from "./forms/EditForm";
import DeleteForm from "./forms/DeleteForm";

const Main = (props) => {
    const [names, setNames] = useState(props.starterData)
    return (
        <main className="main">
            <h3>Add your names below!</h3>
            <CreateForm />
            <NamesCont names={names}/>
            <ModalDiv />
            <EditForm />
            <DeleteForm />
        </main>
    )
}

export default Main;