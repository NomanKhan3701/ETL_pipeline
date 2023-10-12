export const updateObject = (oldObject, updatedProperties) => {
  const updated = {
    ...oldObject,
    ...updatedProperties,
  };
  return updated;
};

export const randomInRange = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

export const getAlphabet = (num) => {
  return String.fromCharCode(97 + num);
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isName) {
    const pattern = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

export const splitArray = (arr, pos) =>
  arr.length > pos ? [...arr.splice(0, pos)] : [...arr];

export const isObject = (obj) =>
  obj && typeof obj === "object" && !Array.isArray(obj);

export const isObjectEmpty = (obj) =>
  obj &&
  typeof obj === "object" &&
  !Array.isArray(obj) &&
  Object.keys(obj).length === 0;



