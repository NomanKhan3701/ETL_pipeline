import React from "react";
import "./Sidebar.scss";
import { LuFileJson } from "react-icons/lu";

const Sidebar = () => {
  const logout = () => {
    dispatch(actions.authLogout());
    navigate("/");
  };

  return (
    <div className="Sidebar">
      <div className="search">
        <input type="text" placeholder="Search component" />
      </div>
      <div className="Nodes_container">
        <div className="Node">
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Source </div>
        </div>
        <div className="Node">
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Transformer</div>
        </div>
        <div className="Node">
          <div className="img">
            <LuFileJson />
          </div>
          <div className="label">Sink</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
