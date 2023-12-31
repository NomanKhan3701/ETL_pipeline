import React from "react";
import "./FormDropdown.scss";
import useClickOutside from "@/hooks/useClickedOutside";
import { AiOutlineDown } from "react-icons/ai";

const FormDropdown = ({
  data = [],
  placeholder,
  value,
  setValue,
  sendAll = false,
}) => {
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
              onClick={() => setValue(sendAll ? item : item.name)}
            >
              {item.Icon && (
                <div
                  className="icon"
                  style={{
                    color: item.color,
                  }}
                >
                  {<item.Icon />}
                </div>
              )}
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };

  console.log(value);

  return (
    <div className={"Form_dropdown" + ` ${show ? "show" : ""}`}>
      <div
        className={"dropdown_select"}
        onClick={() => setShow((state) => !state)}
        ref={dropdownRef}
      >
        <div>{(sendAll ? value?.name : value) || placeholder}</div>
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
