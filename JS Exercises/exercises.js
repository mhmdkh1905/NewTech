//Ex1.1 - Yes or No
function yesOrNo(value) {
  return value ? "Yes" : "No";
}

//Ex2.1 - Sum of lowest numbers
function sumOfLowestNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

//Ex2.2 - One and Zero - Binary
function binaryArrayToNumber(arr) {
  return parseInt(arr.join(""), 2);
}

//Ex2.4 - Unique
function findUniq(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] === sortedArr[1]
    ? sortedArr[sortedArr.length - 1]
    : sortedArr[0];
}

//Ex2.5 - Summation
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

//Ex2.6 - Years and Centuries
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

//Ex2.7 - Basic Math
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return null;
  }
}

//Ex3.1 - Growth Of population
function nb_year(p0, percent, aug, p) {
  let n = 0;
  while (p0 < p) {
    p0 += p0 * (percent / 100) + aug;
    n++;
  }
  return n;
}

//Ex4.1 - Fibonacci
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Ex5.1 - trimming string
function trimString(str) {
  if (str.length <= 2) return str;
  return str.slice(1, str.length - 1);
}

//Ex5.2 - String Repeat
function repeatString(n, str) {
  return str.repeat(n);
}

//Ex5.3 - To Camel Case
function toCamelCase(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      i++;
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

//Ex5.4 - To Weird Case
function toWeirdCase(str) {
  let newStr = "";
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += " ";
      index = 0;
    } else {
      if (index % 2 === 0) {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
      index++;
    }
  }
  return newStr;
}

//Ex5.5 - Abbreviate two words
function abbrevName(name) {
  let names = name.split(" ");
  return names[0][0].toUpperCase() + "." + names[1][0].toUpperCase();
}

//Ex5.6 - Mask
function maskify(str) {
  if (str.length <= 4) return str;
  let maskedPart = "#".repeat(str.length - 4);
  let visiblePart = str.slice(str.length - 4);
  return maskedPart + visiblePart;
}

//Ex5.7 - shortest words
function findShort(s) {
  let words = s.split(" ");
  let shortest = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest) {
      shortest = words[i].length;
    }
  }
  return shortest.length;
}

//Ex5.8 - shortest words version 2
function findLong(s) {
  let words = s.split(" ");
  let longest = words[0].length;
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

//Ex6.1 - Mumbling
function accum(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i !== str.length - 1) {
      result += "-";
    }
  }
  return result;
}

//Ex6.4 - isogram
function isIsogram(str) {
  let lowerStr = str.toLowerCase();
  let sortedStr = lowerStr.split("").sort();
  for (let i = 0; i < sortedStr.length - 1; i++) {
    if (sortedStr[i] === sortedStr[i + 1]) {
      return false;
    }
  }
  return true;
}

//Ex 8 - Find the Perimeter of a Rectangle
function perimeter(lenght, width) {
  return 2 * (lenght + width);
}
