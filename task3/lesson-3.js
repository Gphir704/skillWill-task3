//TASK 1

const rest = (num1, num2, ...parameters) => {
  const first = num1 + num2;
  const restNums = parameters.reduce((acc, cv) => acc * cv);
  return [first, restNums];
};

console.log(rest(1, 2, 4, 5, 6));

// TASK 1 / VERSION 2
const rest2 = (num1, num2, ...parameters) => {
  const first = num1 + num2;
  let restNums = 1;

  for (const number of parameters) {
    restNums *= number;
  }

  return [first, restNums];
};

console.log(rest(1, 2, 4, 5, 23, 323, 23232, 3, 23, 26));

//TASK 2
const user = {
  banks: [
    {
      noNeeded: true,
    },
    {
      noNeeded: true,
    },
    {
      adress: {
        city: "BATUMI",
      },
    },
  ],
};
const getCity = ({
  banks: [
    ,
    ,
    {
      adress: { city },
    },
  ],
}) => {
  return city;
};
console.log(getCity(user));

//Task 3

const objectCopy = (obj) => {
  const copyObj = {};

  for (const props in obj) {
    if (typeof obj[props] === "object") {
      if (Array.isArray(obj[props])) {
        copyObj[props] = obj[props].map((el) => {
          return objectCopy(el);
        });
      } else {
        copyObj[props] = objectCopy(obj[props]);
      }
    } else {
      copyObj[props] = obj[props];
    }
  }
  return copyObj;
};

console.log(objectCopy(user));
