/*

1. Identify there is a bug 


2. Find the bug


3. Fix the bug


4. Prevent the bug


*/

const measureKelvin = function () {
  const measurement = {
    type: "Temp",
    unit: "Celsius",
    value: 254,
  };

  console.log(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify the bug

console.log(measureKelvin());

// Challenge

/*

1) understanding the problem
    - Array transformed into string, seperated by...
    - What is the X days? answer = index + 1

2) Breaking up into sub problems

    - Transform each array into a string
    - Transform each element to string with C*
    - Strings needs to contain day (index + 1)
    - Add ... between elements and start

    */

const data112 = [17, 27, 32];
const data12 = [19, 47, 82];

const printForecast = (arr) => {
  // Cycle through the array
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} Degrees Celsius in ${i + 1} days` + "...";
  }
  // Grab [0] position and return num + statement
  // Continue looping
  console.log(str);
};

printForecast(data112);
