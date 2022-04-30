import React from "react";
import NameItem from "./NameItem";

// const NoNames = () => {
//     return (
//         <h3>You have no names!</h3>
//     )
// }
// const OneName = () => {
//     return (
//         <h3>You have one name!</h3>
//     )
// }
// const ManyNames = (props) => {
//     return (
//         <h3>You have {props.names.length} names!</h3>
//     )
// }

const NamesCont = (props) => {

  return (
    <section className="namesCont">
      {(props.names.length === 0) && <h3>You have no names!</h3>}
      {(props.names.length === 1) && <h3>You have one name!</h3>}
      {(props.names.length > 1) && <h3>You have {props.names.length} names!</h3> }
      {props.names.map((item) => {
        return (
          <NameItem
            key={item._id}
            id={item._id}
            firstName={item.f_name}
            lastName={item.l_name}
          />
        );
      })}
    </section>
  );
};

export default NamesCont;
