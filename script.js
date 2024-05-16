///1

function calculation(a, b) {
  if (a === b) {
    return "They are Equal";
  } else if (a !== b) {
    return "They are not Equal";
  }
}

console.log(calculation(7, "7"));

/// 2

let fahrenheit = "Black";
let celsius = fahrenheitToCelsius(fahrenheit);

function fahrenheitToCelsius(fahrenheit) {
  if (fahrenheit === "number") {
    return ((fahrenheit - 32) * 5) / 9;
  } else if (typeof fahrenheit !== "number") {
    return "false";
  }
}

console.log(fahrenheitToCelsius(fahrenheit));
