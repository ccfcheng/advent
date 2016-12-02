/* eslint no-console: "off" */
const directions = 'R4, R5, L5, L5, L3, R2, R1, R1, L5, R5, R2, L1, L3, L4, R3, L1, L1, R2, R3, R3, R1, L3, L5, R3, R1, L1, R1, R2, L1, L4, L5, R4, R2, L192, R5, L2, R53, R1, L5, R73, R5, L5, R186, L3, L2, R1, R3, L3, L3, R1, L4, L2, R3, L5, R4, R3, R1, L1, R5, R2, R1, R1, R1, R3, R2, L1, R5, R1, L5, R2, L2, L4, R3, L1, R4, L5, R4, R3, L5, L3, R4, R2, L5, L5, R2, R3, R5, R4, R2, R1, L1, L5, L2, L3, L4, L5, L4, L5, L1, R3, R4, R5, R3, L5, L4, L3, L1, L4, R2, R5, R5, R4, L2, L4, R3, R1, L2, R5, L5, R1, R1, L1, L5, L5, L2, L1, R5, R2, L4, L1, R4, R3, L3, R1, R5, L1, L4, R2, L3, R5, R3, R1, L3';
const dirArr = directions.split(', ');

// const test = 'R5, L5, R5, R3';
// const testArr = test.split(', ');

// console.log('dirArr:', dirArr);

let currentDirection = 0;

let currentPos = [0, 0];

const visitedCoords = {};

const dirMatrix = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const getDirection = (dirStr) => {
  const direction = dirStr[0];
  // const magnitude = parseInt(dirStr.substr(1));
  if (direction === 'L') {
    currentDirection = currentDirection === 0 ? 3 : currentDirection - 1;
  } else if (direction === 'R') {
    currentDirection = currentDirection === 3 ? 0 : currentDirection + 1;
  }
  // return dirMatrix[currentDirection].map(num => num * magnitude);
  return dirMatrix[currentDirection];
};

const addVector = (vector) => {
  currentPos = [currentPos[0] + vector[0], currentPos[1] + vector[1]];
};

const storeCoords = (position) => {
  const posString = position.join(',');
  if (visitedCoords.hasOwnProperty(posString)) {
    console.log('Already visited:', position);
  }
  visitedCoords[posString] = true;
};

dirArr.forEach((dir) => {
  const vector = getDirection(dir);
  const steps = parseInt(dir.substr(1));
  for (let i = steps; i > 0; i--) {
    addVector(vector);
    storeCoords(currentPos);
  }
  // console.log('Current position:', currentPos);
});

// testArr.forEach((dir) => {
//   const vector = getDirection(dir);
//   addVector(vector);
//   console.log('Current position:', currentPos);
// });
