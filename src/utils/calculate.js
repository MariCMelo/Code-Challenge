import {
  DOOR_HEIGHT,
  DOOR_WIDTH,
  LITER_PER_CAN,
  validateWallArea,
  validateDoorHeight,
  validateWindowDoorAreaRatio,
} from "./rules";

export function calculate(formData) {
  const { A, B, C, D } = formData;

  const calculateWallArea = (wall) =>
    parseFloat(wall.height) * parseFloat(wall.length);

  const wallA = calculateWallArea(A);
  const wallB = calculateWallArea(B);
  const wallC = calculateWallArea(C);
  const wallD = calculateWallArea(D);
  const walls = [A, B, C, D];
  const totalWallArea = walls.reduce((total, wall) => total + calculateWallArea(wall), 0);

  const totalDoors =
    (parseInt(A.door) +
      parseInt(B.door) +
      parseInt(C.door) +
      parseInt(D.door)) *
    (DOOR_HEIGHT * DOOR_WIDTH);

  const totalWindows =
    (parseInt(A.window) +
      parseInt(B.window) +
      parseInt(C.window) +
      parseInt(D.window)) *
    (DOOR_HEIGHT * DOOR_WIDTH);

  validateWallArea(wallA, wallB, wallC, wallD);
  validateDoorHeight(formData);
  validateWindowDoorAreaRatio(totalDoors, totalWindows, totalWallArea);

  const totalWallsArea = wallA + wallB + wallC + wallD;
  const totalPaintArea = totalWallsArea - (totalDoors + totalWindows);
  const totalPaintLiters = totalPaintArea / LITER_PER_CAN;

  const { large, medium, small, mini } = calculatePaintCans(totalPaintLiters);

  return generateResultPhrase(large, medium, small, mini);
}

function calculatePaintCans(totalLiters) {
  let largeCans = 0;
  let mediumCans = 0;
  let smallCans = 0;
  let miniCans = 0;

  if (totalLiters >= 18) {
    largeCans = Math.floor(totalLiters / 18);
    totalLiters -= largeCans * 18;
  }

  if (totalLiters >= 3.6) {
    mediumCans = Math.floor(totalLiters / 3.6);
    totalLiters -= mediumCans * 3.6;
  }

  if (totalLiters >= 2.5) {
    smallCans = Math.floor(totalLiters / 2.5);
    totalLiters -= smallCans * 2.5;
  }

  if (totalLiters >= 0.5) {
    miniCans = Math.floor(totalLiters / 0.5);
    totalLiters -= miniCans * 0.5;
  }

  if (totalLiters > 0 && totalLiters < 0.5) {
    miniCans += 1;
  }

  if (mediumCans === 5) {
    largeCans += 1;
    mediumCans = 0;
  }

  if (miniCans === 5) {
    smallCans += 1;
    miniCans = 0;
  }

  return {
    large: largeCans,
    medium: mediumCans,
    small: smallCans,
    mini: miniCans,
  };
}

function generateResultPhrase(large, medium, small, mini) {
  let resultPhrase = "Você precisará de ";

  if (large === 1) {
    resultPhrase += "1 lata de 18L";
  } else if (large > 1) {
    resultPhrase += `${large} latas de 18L`;
  }

  if (medium > 0) {
    if (large > 0) resultPhrase += " + ";
    resultPhrase += `${medium} lata${medium === 1 ? "" : "s"} de 3,6L`;
  }

  if (small > 0) {
    if (large > 0 || medium > 0) resultPhrase += " + ";
    resultPhrase += `${small} lata${small === 1 ? "" : "s"} de 2,5L`;
  }

  if (mini > 0) {
    if (large > 0 || medium > 0 || small > 0) resultPhrase += " + ";
    resultPhrase += `${mini} lata${mini === 1 ? "" : "s"} de 0,5L`;
  }

  return resultPhrase;
}
