import React from "react";
import "./FormDropdown.scss";
import useClickOutside from "@/hooks/useClickedOutside";
import { AiOutlineDown } from "react-icons/ai";

const FormDropdown = ({ data = [], placeholder, value, setValue }) => {
  const [show, setShow] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const outside = useClickOutside(dropdownRef, () => setShow(false));

  const Options = () => {
    return (
      <div>
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className={"option" + ` ${value === item.name ? "active" : ""}`}
              onClick={() => setValue(item.name)}
            >
              {item.icon && (
                <div
                  className="icon"
                  style={{
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
              )}
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={"Form_dropdown" + ` ${show ? "show" : ""}`}>
      <div
        className={"dropdown_select"}
        onClick={() => setShow((state) => !state)}
        ref={dropdownRef}
      >
        <div>{value || placeholder}</div>
        <AiOutlineDown />
      </div>
      <div
        className={"options" + " hide_scrollbar"}
        onClick={() => setShow(false)}
      >
        <Options />
      </div>
    </div>
  );
};

export default FormDropdown;
