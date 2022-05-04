import React from "react";

const ReloadButton = (props) => {
    return (
        <div className="reloadDiv">
            <button onClick={props.reloadList}>Click to refresh!</button>
        </div>
    )
}

export default ReloadButton;