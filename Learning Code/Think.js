/* Problem Breakdown 


1. Make sure you 100% understand the problem.
    - Ask the right questions


    Example: " We need a function that reverses whatever we pass into it"
        - What does whatever mean?
        - Only strings, numbers and arrays can be reversed
    
        - What to do if something else is passed in?

        - What should be returned? Should it always be a string, or 
        should the type be the same as passed in?

        - How to recognize whether the argument is a number, string or an array

        - How to reverse a number, a string and array?


    
2. Divide & Conquer: Break a big problem into smaller sub-problems

    - Check if argument is a number, a string, or an array

    - Implement reverse a number, string, an array

    - return reversed value 


    GOOGLE THINGS:
    - How to check if a value is a number, string, array
    - How to reverse a number in Javascript
    - How to reverse a string | Array in Javascript


                PSEUDOCODE

            function reverse(value) {
                if (value type !string && !number && !array) {
                    return value
                }

                if value type == string
                reverse string
                if value type == array
                reverse array
                if value type == number
                reverse number

                return reversed value
            }




*/

// Given an array of temps, calculate amplitude, keep in kind sensor erro

const temperatures = [3, -2, -6, 1, "error", 9, 13, 17, 15, 14, 9, 5];

/* 

1. Understand the problem
            - What is temperature amplitude?
                Difference between highest and lowest
            - What is a sensor error?
                Ignore error if string
            

2. Break into sub-problems

            - How to ignore errors?
            - Find max value in temp
            - Find min value in temp
            - Take difference between high - low




*/

const calculateAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calculateAmplitude(temperatures);

// Problem 2:
// Function should now receive two arrays of temps

/* 1. Understand the problem
    - With 2 arrays, should we implement functionality twice?
        No... just merge two arrays

   2. Sub Problems:
    - Merge 2 arrays




*/

const calculateAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== "number") continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calculateAmplitudeNew([1,5,6,3], [0, 1, 5, 9]);
console.log(amplitudeNew);
