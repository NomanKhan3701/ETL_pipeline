import React, { useEffect } from "react";
import "./UserSelectorModal.scss";
import { useSelector } from "react-redux";
import Modal from "@/components/Modal";
import Table from "@/components/Table/Table";

const UserSelectorModal = ({ show, setShow, setValue }) => {
  const users = useSelector((state) => state.auth.users);

  return (
    <Modal
      show={show}
      // show={true}
      hideBackdrop={() => setShow(false)}
      className="User_selector_modal"
    >
      <div>
        <Table
          rows={users}
          columns={["name", "email", "phone", "Parking owned"]}
          onRowClick={(row) => {
            setValue(row);
            setShow(false);
          }}
        />
      </div>
    </Modal>
  );
};

export default UserSelectorModal;
