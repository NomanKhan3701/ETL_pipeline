import React, { useState } from "react";
import "./Form.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { GoRepoPush } from "react-icons/go";
import moment from "moment/moment";

const Form = ({ formData = {}, setFormData, onSubmit, loading }) => {
  const updateFormData = (key, objKey, objValue) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [key]: {
          ...prevFormData[key],
          [`${objKey}`]: objValue,
        },
      };
    });
  };

  return (
    <div className="Form_wrapper">
      <div className="Form_container">
        <div
          className="back"
          onClick={() => {
            window.history.back();
          }}
        >
          <BsArrowLeftShort />
          Back
        </div>
        <div className="form">
          {Object.entries(formData).map(([key, value], index) => {
            if (value.Modal) {
              return (
                <div className="form_item" key={index}>
                  <label>{key.split(/(?=[A-Z])/).join(" ")}</label>
                  <div
                    className="modal_input"
                    onClick={() => {
                      updateFormData(key, "show", true);
                    }}
                  >
                    {value.value.length > 0 ? (
                      <span>{value.value[0]}</span>
                    ) : (
                      <span className="placeholder">{value.placeholder}</span>
                    )}
                    <GoRepoPush />
                  </div>
                  <value.Modal
                    show={value.show}
                    setShow={(value) => {
                      updateFormData(key, "show", value);
                    }}
                    setValue={(value) => {
                      updateFormData(key, "value", value);
                    }}
                  />
                </div>
              );
            } else if (value.Element) {
              return (
                <div className="form_item" key={index}>
                  <label>{key.split(/(?=[A-Z])/).join(" ")}</label>
                  <value.Element
                    data={value.data}
                    value={value.value}
                    placeholder={value.placeholder}
                    setValue={(value) => updateFormData(key, "value", value)}
                  />
                </div>
              );
            } else {
              return (
                <div className="form_item" key={index}>
                  <label>{key.split(/(?=[A-Z])/).join(" ")}</label>
                  <div className="flex_group">
                    <input
                      type={value.disabled ? "text" : value.type || "text"}
                      value={
                        value.disabled
                          ? value.type == "datetime-local"
                            ? moment(value.value).format("DD-MM-YYYY HH:mm A")
                            : value.value
                          : value.value
                      }
                      placeholder={"Enter " + key.split(/(?=[A-Z])/).join(" ")}
                      onChange={(e) =>
                        updateFormData(key, "value", e.target.value)
                      }
                      disabled={value.disabled}
                    />
                  </div>
                </div>
              );
            }
          })}
          <div className="form_submit" onClick={onSubmit}>
            {loading ? (
              <div className="loader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            ) : (
              "Submit"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
