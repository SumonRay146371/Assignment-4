// problem 1

function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  } else {
    const ticketPrice = 120;
    const payment_Darowan = 500;
    const staffNo = 8;
    const payment_staff = 50;
    const totalSale = ticketSale * ticketPrice;
    const totalExpense = payment_Darowan + staffNo * payment_staff;
    const remainingTaka = totalSale - totalExpense;
    return remainingTaka;
  }
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));

// problem 2

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    const lastCharacter = ["a", "e", "i", "o", "u", "y", "w"];
    const lastWord = name.slice(-1).toLowerCase();
    let result = lastCharacter.includes(lastWord) ? "Good Name" : "Bad Name";
    return result;
  }
}

console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

// problem 3

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  const onlyNumbers = [];
  for (let numbers of array) {
    if (typeof numbers === "number" && !isNaN(numbers)) {
      onlyNumbers.push(numbers);
    }
  }
  return onlyNumbers;
}

console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));

// problem 4

function password(obj) {
  const { name, birthYear, siteName } = obj;
  if (
    name === undefined ||
    birthYear === undefined ||
    siteName === undefined ||
    birthYear.toString().length !== 4
  ) {
    return "invalid";
  } else {
    let siteNameUpperletter = siteName[0].toUpperCase() + siteName.slice(1);
    return `${siteNameUpperletter}#${name}@${birthYear}`;
  }
}

console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

// problem 5

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let sum = 0;

  for (let income of arr) {
    if (income >= 3000) {
      let bankDiscount = (income * 20) / 100;
      let total = income - bankDiscount;
      sum += total;
    } else {
      sum = sum + income;
    }
  }
  let savings = sum - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
