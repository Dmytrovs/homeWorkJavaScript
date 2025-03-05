//Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)

// function generateTableNumber(row, coll, min, max) {
//   const table = [];
//   for (let rows = 0; rows < row; rows++) {
//     const collElement = [];
//     for (let colls = 0; colls < coll; colls++) {
//       // collElement.push(elementArrNum)
//       let randomNumber = min + Math.floor(Math.random() * max);
//       collElement.push(randomNumber);
//     }
//     table.push(collElement);
//   }
//   return table;
// }

// let tableArrNum = generateTableNumber(4, 4, 1, 100);
// console.log(tableArrNum);

//1)	номери рядків від 0 до половини, стовпці від 0 до половини

// let sumRowNumbersFrom0toHalfColumn0ToHalf = 0;
// for (let el = 0; el < tableArrNum.length / 2; el++) {
//   for (let coll = 0; coll < tableArrNum[el].length / 2; coll++) {
//     sumRowNumbersFrom0toHalfColumn0ToHalf += tableArrNum[el][coll];
//   }
// }
// document.write(
//   `1) Номери рядків від 0 до половини, стовпці від 0 до половини: ${sumRowNumbersFrom0toHalfColumn0ToHalf} <br>`
// );

//2)	номери рядків від 0 до половини, стовпці від половини до кінця

// let sumRowNumbers0halfColumnHalfEnd = 0;
// for (let el = 0; el < tableArrNum.length / 2; el++) {
//   for (let coll = tableArrNum.length / 2; coll < tableArrNum.length; coll++) {
//     sumRowNumbers0halfColumnHalfEnd += tableArrNum[el][coll];
//   }
// }
// document.write(
//   `2)	Номери рядків від 0 до половини, стовпці від половини до кінця: ${sumRowNumbers0halfColumnHalfEnd}<br>`
// );

//3)номери рядків (від половини до кінця, стовпці від 0 до половини

// let sumRowNumbersHalfEndColumn0Half = 0;
// for (let row = tableArrNum.length / 2; row < tableArrNum.length; row++) {
//   for (let coll = 0; coll < tableArrNum.length / 2; coll++) {
//     sumRowNumbersHalfEndColumn0Half += tableArrNum[row][coll];
//   }
// }
// document.write(
//   `3) Номери рядків (від половини до кінця, стовпці від 0 до половини: ${sumRowNumbersHalfEndColumn0Half}<br>`
// );

// 4) номери рядків від половини до кінця , стовпці від половини до кінця

// let sumRowNumHalfEndColumnHalfEnd = 0;
// for (let row = tableArrNum.length / 2; row < tableArrNum.length; row++) {
//   for (let coll = tableArrNum.length / 2; coll < tableArrNum.length; coll++) {
//     sumRowNumHalfEndColumnHalfEnd += tableArrNum[row][coll];
//   }
// }
// document.write(
//   `4) Номери рядків від половини до кінця , стовпці від половини до кінця: ${sumRowNumHalfEndColumnHalfEnd} <br>`
// );

// 5) Суму парних рядків

// let sumPairedRows = 0;
// for (const row of tableArrNum) {
//   for (const element of row) {
//     if (element % 2 === 0) {
//       sumPairedRows += element;
//     }
//   }
// }
// document.write(`5) Сума парних рядків: ${sumPairedRows} <br>`);

//  6) Суму непарних стовпців

// let sumOddColl = tableArrNum.reduce(
//   (prewRow, row) =>
//     prewRow +
//     row.reduce((prewColl, element) => {
//       if (element % 2 !== 0) {
//         return prewColl + element;
//       }
//       return prewColl;
//     }, 0),
//   0
// );
// document.write(`6) Сума непарних стовпців: ${sumOddColl} <br>`);

// 7) У парних рядках – непарні стовпці, у непарних – парні.

// function getNumberPairedOddSum(arr) {
//   let sum = 0;
//   for (let row = 0; row < arr.length; row += 2) {
//     for (let coll = 1; coll < arr.length; coll += 2) {
//       sum += arr[row][coll];
//     }
//   }
//   for (let rows = 1; rows < arr.length; rows += 2) {
//     for (let colls = 0; colls < arr.length; colls += 2) {
//       sum += arr[rows][colls];
//     }
//   }
//   return sum;
// }

// const resSumPairedOddCollOddPaired = getNumberPairedOddSum(tableArrNum);
// document.write(
//   `7) У парних рядках – непарні стовпці, у непарних – парні: ${resSumPairedOddCollOddPaired} <br>`
// );

//Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :

// let tableArrNum = [
//   [22, 17, 40, 2, 34, 56, 89],
//   [28, 17, 90, 546, 5434, 564, 234],
//   [26, 17, 11, 6, 5433, 67, 7867],
//   [26, 17, 393, 26, 34232, 12, 712],
// ];

// 1) загальний прибуток кожного масиву за тиждень;
// function getSumWeek(table) {
//   let arrSum = [];
//   for (let row = 0; row < table.length; row++) {
//     let sum = 0;
//     for (let coll = 0; coll < table[row].length; coll++) {
//       sum += table[row][coll];
//     }
//     arrSum.push(sum);
//   }
//   return arrSum;
// }

// let sumWeek = getSumWeek(tableArrNum);
// document.write(
//   ` 1) Загальний прибуток кожного масиву за тиждень: ${sumWeek} <br>`
// );

// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);

// function getSumDay(table) {
//   let rows = table.length;
//   let colls = table[0].length;
//   let arrSum = [];
//   for (let col = 0; col < colls; col++) {
//     let sum = 0;
//     for (let row = 0; row < rows; row++) {
//       sum += table[row][col];
//     }
//     arrSum.push(sum);
//   }
//   return arrSum;
// }

// const totalSumDayStores = getSumDay(tableArrNum);
// document.write(
//   `2) Загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.): ${totalSumDayStores} <br>`
// );

// 3) загальний прибуток за робочі дні

// function getSumWorkDay(table) {
//   let sum = 0;
//   for (let row = 0; row < table.length; row++) {
//     for (let coll = 0; coll < 5; coll++) {
//       sum += table[row][coll];
//     }
//   }
//   return sum;
// }

// let sumWorkDays = getSumWorkDay(tableArrNum);
// document.write(`3) Загальний прибуток за робочі дні: ${sumWorkDays} <br>`);

// 4) загальний прибуток за вихідні дні

// function getSumWeekendsDay(table) {
//   let sum = 0;
//   for (let row = 0; row < table.length; row++) {
//     for (let coll = 5; coll < 7; coll++) {
//       sum += table[row][coll];
//     }
//   }
//   return sum;
// }

// let totalSumWeekenDays = getSumWeekendsDay(tableArrNum);
// document.write(
//   `4) Загальний прибуток за вихідні дні: ${totalSumWeekenDays} <br>`
// );

// 5) максимальний прибуток за середу

// function maxWednesdayprofit(table) {
//   let max = 0;
//   for (let row = 0; row < table.length; row++) {
//     if (max < table[row][2]) {
//       max = table[row][2];
//     } else {
//       max = max;
//     }
//   }
//   return max;
// }

// let maxSumWednesdayProfits = maxWednesdayprofit(tableArrNum);
// document.write(
//   `5) Максимальний прибуток за середу: ${maxSumWednesdayProfits} <br>`
// );

// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200

// function generalListMore200(table) {
//   let newArr = [];
//   for (const row of table) {
//     for (const element of row) {
//       if (element > 200) {
//         newArr.push(element);
//       }
//     }
//   }
//   return newArr;
// }

// let totalListMore200 = generalListMore200(tableArrNum);
// document.write(
//   ` 6) Сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200: ${totalListMore200} <br>`
// );

// 7) відсортувати кожен тиждень за зростанням

// function everyWeekGrowth(table) {
//   table.forEach((row) => {
//     row.sort((el1, el2) => el1 - el2);
//   });
//   return table;
// }

// let newArrCrowth = everyWeekGrowth(tableArrNum);
// document.write(
//   `7) Відсортувати кожен тиждень за зростанням: Відповідь у console.log <br>`
// );
// console.log(newArrCrowth);

// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

// function ecliningMaximumElementWeek(table) {
//   table.forEach((element) => {
//     element.sort((el1, el2) => el2 - el1);
//   });
//   return table;
// }

// let decreaseSum = ecliningMaximumElementWeek(tableArrNum);
// document.write(
//   `8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків: ${decreaseSum} <br>`
// );

// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).

// function getSum(table) {
//   let arrSum = [];
//   for (let row = 0; row < table.length; row++) {
//     let sum = 0;
//     for (let coll = 0; coll < table[row].length; coll++) {
//       sum += table[row][coll];
//       table[row].sort((a, b) => b - a);
//     }
//     arrSum.push(sum);
//   }
//   let indeces = arrSum.map((sum, index) => index);
//   indeces.sort((a, b) => arrSum[b] - arrSum[a]);
//   let sortSumNum = indeces.map((row) => table[row]);
//   return sortSumNum;
// }

// let newSum = getSum(tableArrNum);
// document.write(
//   ` 9) Упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше): ${newSum} <br>`
// );

// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

// const row = 6;
// const coll = 6;
// const ship = [1, 1, 1, 1, 1];

// const twoDimensionalField = new Array(row)
//   .fill(null)
//   .map(() => new Array(coll).fill(0));
// function randShip(ship, field) {
//   let newField = field.map((field) => [...field]);
//   let replacements = ship.length;

//   while (replacements > 0) {
//     let rowRandom = Math.floor(Math.random() * newField.length);
//     let collRandom = Math.floor(Math.random() * newField[0].length);
//     if (newField[rowRandom][collRandom] === 0) {
//       newField[rowRandom][collRandom] = 1;
//       replacements--;
//     }
//   }
//   return newField;
// }

// const shipRandomPosition = randShip(ship, twoDimensionalField);

// function shortsUser(field, ships) {
//   let shipLeft = ships.length;
//   let quantityShells = parseInt(prompt("Кількість снадядів"));
//   while (shipLeft > 0 && quantityShells > 0) {
//     let userRow = parseInt(prompt("Введіть номер рядка 1 - 6 "));
//     let userColumn = parseInt(prompt("Введіть номер стовбця 1 - 6"));
//     if (field[userRow - 1][userColumn - 1] === 1) {
//       alert("Попав");
//       field[userRow][userColumn] = 0;
//       shipLeft--;
//     } else alert("Не попав");
//     quantityShells--;
//     if (quantityShells === 0) alert("Снаряди закінчилися");
//     if (shipLeft === 0) alert("Потопив");
//   }
// }
// const userShots = shortsUser(shipRandomPosition, ship);
