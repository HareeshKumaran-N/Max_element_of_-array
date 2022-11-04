let input = "AaAaBbBCCDAABB";
// Output - A4B3C2D1A2B2

console.log("@HK", FindSequence(input));

function FindSequence(input) {
  if (typeof input === "string" && input.length > 0) {
    let inputArray = input.toUpperCase().split("");

    let i = 0,
      j = 0,
      result = "",
      counter = 0;

    while (i < inputArray.length) {
      if (inputArray[i] === inputArray[j]) {
        counter = counter + 1;
        j++;
      } else {
        result = result + inputArray[i] + counter;
        i = j;
        counter = 0;
      }
    }
    return result;
  }

  return "Invalid Input";
}

