import React, { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({
  uploadPreview = null,
  show = null,
  children = null,
  style = null,
  loginOrUserNotificationModal = null,
  hideBackdrop = null,
  className = null,
  videoPreview = null,
  name = null,
  ref = null,
  onDragOver = null,
  onDrop = null,
  onDragLeave = null,
}) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    show && setRender(true);
    let timeout = null;
    if (!show) {
      timeout = setTimeout(() => {
        setRender(false);
      }, 290);
    }
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    shouldRender && (
      <React.Fragment>
        <div
          className={"Backdrop"}
          onClick={hideBackdrop}
          style={{
            animation: `${show ? "fadeIn" : "fadeOut"} 0.3s`,
          }}
        ></div>
        <div
          className={[
            "Modal",
            className ? className : "",
            uploadPreview ? "UploadPreview" : "",
            videoPreview ? "VideoPreview" : "",
          ].join(" ")}
          style={{
            animation: `${show ? "slideIn" : "slideOut"} 0.3s`,
            width: loginOrUserNotificationModal ? "40rem" : null,
            ...style,
          }}
          name={name}
          ref={ref}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onDragLeave={onDragLeave}
        >
          {children}
        </div>
      </React.Fragment>
    )
  );
};

export default React.memo(Modal);
