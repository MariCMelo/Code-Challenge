const LITER_PER_CAN = 5;
const WINDOW_AREA = 2.4;
const DOOR_AREA = 1.5;

let largeCans = 0;
let mediumCans = 0;
let smallCans = 0;
let miniCans = 0;

export function calculate(formData) {
    const { A, B, C, D } = formData;
    const wallA = parseFloat(A.height) * parseFloat(A.length);
    const wallB = parseFloat(B.height) * parseFloat(B.length);
    const wallC = parseFloat(C.height) * parseFloat(C.length);
    const wallD = parseFloat(D.height) * parseFloat(D.length);
    const totalDoors = (parseInt(A.door) + parseInt(B.door) + parseInt(C.door) + parseInt(D.door)) * DOOR_AREA;
    const totalWindows = (parseInt(A.window) + parseInt(B.window) + parseInt(C.window) + parseInt(D.window)) * WINDOW_AREA;
  
    const totalWallsArea = wallA + wallB + wallC + wallD;
    const totalPaintArea = totalWallsArea - (totalDoors + totalWindows);
    const totalPaintLiters = totalPaintArea / LITER_PER_CAN;
  
    const { large, medium, small, mini } = calculatePaintCans(totalPaintLiters);
  
    let resultPhrase = 'Você precisará de ';
  
    if (large === 1) {
        resultPhrase += '1 lata de 18L';
    } else if (large > 1) {
        resultPhrase += `${large} latas de 18L`;
    }
  
    if (medium > 0) {
        if (large > 0) resultPhrase += ' + ';
        resultPhrase += `${medium} lata${medium === 1 ? '' : 's'} de 3,6L`;
    }
  
    if (small > 0) {
        if (large > 0 || medium > 0) resultPhrase += ' + ';
        resultPhrase += `${small} lata${small === 1 ? '' : 's'} de 2,5L`;
    }
  
    if (mini > 0) {
        if (large > 0 || medium > 0 || small > 0) resultPhrase += ' + ';
        resultPhrase += `${mini} lata${mini === 1 ? '' : 's'} de 0,5L`;
    }
  
    console.log(resultPhrase);
    
    return resultPhrase;
}

function calculatePaintCans(totalLiters) {
    largeCans = 0;
    mediumCans = 0;
    smallCans = 0;
    miniCans = 0;

    if (totalLiters >= 18) {
        largeCans += Math.floor(totalLiters / 18);
        totalLiters -= largeCans * 18;
    }

    if (totalLiters >= 3.6) {
        mediumCans += Math.floor(totalLiters / 3.6);
        totalLiters -= mediumCans * 3.6;
    }

    if (totalLiters >= 2.5) {
        smallCans += Math.floor(totalLiters / 2.5);
        totalLiters -= smallCans * 2.5;
    }
  
    if (totalLiters >= 0.5) {
        miniCans += Math.floor(totalLiters / 0.5);
        totalLiters -= miniCans * 0.5;
    }
  
    if (totalLiters > 0 && totalLiters < 0.5) {
        miniCans += 1;
    }
  
    return {
        large: largeCans,
        medium: mediumCans,
        small: smallCans,
        mini: miniCans,
    };
}
