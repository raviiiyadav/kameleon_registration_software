import React from "react";
import "./App.css";

// import VisitorData from "./components/dashboard/VisitorData";
import SideBar from "./components/dashboard/SideBar";
// import Feed from "./components/dashboard/Feed";
// import NavBar from "./components/dashboard/NavBar";
// import { Box } from "@mui/material";
import Footer from "./components/dashboard/Footer";
// import { Stack } from "@mui/system";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <SideBar />
      <Footer />
    </>
  );
}

export default App;
