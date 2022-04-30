import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const starterData = [
    {
      _id: "name_1",
      f_name: "Bob",
      l_name: "Smith"
    },
    {
      _id: "name_2",
      f_name: "Anne",
      l_name: "Jones"
    },
    {
      _id: "name_3",
      f_name: "Bobby",
      l_name: "Dazzler"
    },
  ]
  return (
    <>
      <Header />
      <Main starterData={starterData}/>
      <Footer />
    </>
  );
};

export default App;
