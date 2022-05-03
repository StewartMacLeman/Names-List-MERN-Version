import React from "react";
import NameItem from "./NameItem";

const NamesCont = (props) => {
  return (
    <section className="namesCont">
      {props.fetchError && <h3>Opps! Something went wrong! {props.fetchError}</h3>}
      {!props.fetchError && props.names.length === 0 && <h3>You have no names!</h3>}
      {props.names.length === 1 && <h3>You have one name!</h3>}
      {props.names.length > 1 && <h3>You have {props.names.length} names!</h3>}
      {props.names.map((item) => {
        return (
          <NameItem
            key={item._id}
            id={item._id}
            firstName={item.f_name}
            lastName={item.l_name}
            showDeleteModal={props.showDeleteModal}
            showEditModal={props.showEditModal}
          />
        );
      })}
    </section>
  );
};

export default NamesCont;
