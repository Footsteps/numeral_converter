const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
  if (!number.value) {
    output.innerText = "Please enter a valid number";
    output.style.display = "block";
    number.value = "";
    return;
  } else if (number.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    output.style.display = "block";
    number.value = "";
    return;
  } else if (number.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    output.style.display = "block";
    number.value = "";
    return;
  }
  let input = number.value;
    

  let romanNumeral = "";
  const numbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

for (let i of Object.keys(numbers)) {
  let q = Math.floor(input / numbers[i]);
  input -= q * numbers[i];
  romanNumeral += i.repeat(q);
}

output.innerText = romanNumeral;

/*
let numbers = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

const convert = (input) => {
  if (input === 0) return "";
  for(let i = 0; i < numbers.length; i++) {
    if (input >= numbers[i][0]) return numbers[i][1] + convert(input - numbers[i][0]);
  }
}
  

output.innerText = convert(input);
*/

  output.style.display = "block";
  number.value = "";
  return;

};

//event listeners
convertBtn.addEventListener("click", checkUserInput);
