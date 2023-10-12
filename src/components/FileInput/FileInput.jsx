import React, { useRef, useState } from "react";
import "./FileInput.scss";

const FileInput = ({ prevImg, setPrevImg, files, setFiles }) => {
  const fileRef = useRef();
  const dragRef = useRef(null);

  const handleFileBtnClick = () => {
    fileRef.current.click();
  };

  const handleFile = async (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      setFiles((prevFiles) => {
        return [...prevFiles, e.target.files[i]];
      });
    }
  };

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "dragOver") dragRef.current.classList.add("active");
    else if (type === "dragLeave") dragRef.current.classList.remove("active");
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current.classList.remove("active");
    const uploadedFiles = e.dataTransfer.files;
    dragRef.current.classList.add("uploading");
    for (let i = 0; i < uploadedFiles.length; i++) {
      setFiles((prevFiles) => {
        return [...prevFiles, uploadedFiles[i]];
      });
    }
    dragRef.current?.classList.remove("uploading");
  };

  return (
    <div className="File_upload">
      <input type="file" hidden />
      <div className="Drag_drop_container">
        <div
          ref={dragRef}
          className={"drop_area"}
          onDragOver={(e) => handleDrag(e, "dragOver")}
          onDragLeave={(e) => handleDrag(e, "dragLeave")}
          onDrop={handleDrop}
        >
          <h2>Drag & Drop your profile photo here</h2>
          <div className="or">OR</div>
          <div className={"browse_btn"} onClick={handleFileBtnClick}>
            Browse Files
          </div>
          <input
            ref={fileRef}
            type="file"
            onChange={handleFile}
            multiple
            hidden
            id="myFile"
            name="filename"
          />
        </div>
      </div>
    </div>
  );
};

export default FileInput;
