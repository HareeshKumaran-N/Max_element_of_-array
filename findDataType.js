// We need to write a function to find the data type of the input

// Note: It should throw error message if the input is null or undefined
// - It should show Number, String, Object, Array, Boolean & Function

let val = () => {
  console.log("input function");
};


console.log(findDataType(val));

function findDataType(x) {
  if (typeof x === "undefined") {
    return "input cannot be undefined";
  } else if (x === null) {
    return "input  cannot be null";
  } else if (typeof x === "number") {
    return "input is number";
  } else if (typeof x === "string") {
    return "input is string";
  } else if (typeof x === "boolean") {
    return "input is boolean";
  } else if (typeof x === "object") {
    if (Array.isArray(x)) {
      return "input is array";
    } else return "input is object";
  } else if (typeof x === "function") {
    return "input is function";
  }
}
