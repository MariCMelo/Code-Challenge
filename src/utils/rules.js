import Swal from "sweetalert2";
import { errors } from "../errors/errors";

function throwError(errorType) {
  const errorMessage = errors[errorType].message;
  Swal.fire({
    icon: "error",
    title: "Erro!",
    text: errorMessage,
  });
  throw new Error(errorMessage);
}

export const WALL_MIN_AREA = 1; // 1 metro quadrado
export const WALL_MAX_AREA = 50; // 50 metros quadrados
export const MAX_WINDOW_DOOR_AREA_RATIO = 0.5;
export const MIN_WALL_HEIGHT_FOR_DOOR = 0.3; // 30 centímetros

export const WINDOW_WIDTH = 2;
export const WINDOW_HEIGHT = 1.2;
export const DOOR_WIDTH = 0.8;
export const DOOR_HEIGHT = 1.9;
export const LITER_PER_CAN = 5;

// Função para validar a área da parede
export function validateWallArea(wallA, wallB, wallC, wallD) {
  const isValidArea = (area) => area >= WALL_MIN_AREA && area <= WALL_MAX_AREA;

  if (![wallA, wallB, wallC, wallD].every(isValidArea)) {
    throwError("invalidAreaError");
  }
}

// Função para validar a altura da porta em relação à altura da parede
export function validateDoorHeight(formData) {
  const { A, B, C, D } = formData;
  const walls = [A, B, C, D];

  for (let wall of walls) {
    if (
      wall.door >= 1 &&
      wall.height - DOOR_HEIGHT <= MIN_WALL_HEIGHT_FOR_DOOR
    ) {
      throwError("invalidWallHeightError");
    }
  }
}

// Função para validar a proporção da área de portas e janelas em relação à área total da parede
export function validateWindowDoorAreaRatio(
  totalDoors,
  totalWindows,
  totalWallArea
) {
  if (totalDoors + totalWindows >= totalWallArea * MAX_WINDOW_DOOR_AREA_RATIO) {
    throwError("invalidDoorWindowAreaError");
  }
}
