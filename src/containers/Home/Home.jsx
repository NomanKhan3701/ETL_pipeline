import React from "react";
import "./Home.scss";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import PipelineBuilder from "@/components/PipelineBuilder/PipelineBuilder";
import FormSidebar from "@/components/FormSidebar/FormSidebar";

const Home = () => {
  return (
    <div className="Home_container">
      {/* <Navbar /> */}
      <div className="Main__container">
        <Sidebar />
        <PipelineBuilder />
        <FormSidebar />
      </div>
    </div>
  );
};

export default Home;
