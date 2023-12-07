import React from "react";
import "./PipelinePage.scss";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import PipelineBuilder from "@/components/PipelineBuilder/PipelineBuilder";
import FormSidebar from "@/components/FormSidebar/FormSidebar";

const PipelinePage = () => {
  return (
    <div className="Pipeline_page">
      {/* <Navbar /> */}
      <div className="Main__container">
        <Sidebar />
        <PipelineBuilder />
        <FormSidebar />
      </div>
    </div>
  );
};

export default PipelinePage;
