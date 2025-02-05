//Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
// let userMonthNumber = parseInt(prompt("введіть номер місяця"));
// function getMonthYear(timeYear) {
//   let quantityMonth;
//   switch (timeYear) {
//     case 12:
//     case 1:
//     case 2:
//       quantityMonth = "Зима";
//       break;

//     case 3:
//     case 4:
//     case 5:
//       quantityMonth = "Весна";
//       break;

//     case 6:
//     case 7:
//     case 8:
//       quantityMonth = "Літо";
//       break;

//     case 9:
//     case 10:
//     case 11:
//       quantityMonth = "Осінь";
//       break;
//   }

//   return quantityMonth;
// }

// let monthUser = getMonthYear(userMonthNumber);

// document.write(`${monthUser}`);

// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
// let userMonthNumber = parseInt(prompt("введіть номер місяця"));

// function getMonthNumber(Month) {
//   let month;
//   switch (Month) {
//     case 12:
//       month = "Грудень";
//       break;

//     case 1:
//       month = "Січень";
//       break;

//     case 2:
//       month = "Лютий";
//       break;

//     case 3:
//       month = "Березень";
//       break;

//     case 4:
//       month = "Квітень";
//       break;

//     case 5:
//       month = "Травень";
//       break;

//     case 6:
//       month = "Червень";
//       break;

//     case 7:
//       month = "Липень";
//       break;

//     case 8:
//       month = "Серпень";
//       break;

//     case 9:
//       month = "Вересень";
//       break;

//     case 10:
//       month = "Жовтень";
//       break;

//     case 11:
//       month = "Листопад";
//       break;
//   }

//   return month
// }

// let userMonthResult = getMonthNumber(userMonthNumber)

// document.write(`${userMonthResult}`)

//Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
// let userNumber = parseInt(prompt("введіть номер дня"));
// function numberDayWork (numUser) {
//   if (numUser <= 5) {
//     alert('Робочій день')
//   } else alert('Вихідний день')
//   return numUser
// }

// const numDayResult = numberDayWork(userNumber)
// document.write(numDayResult)

// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

// let a = parseInt(prompt("введіть число 1"));
// let b = parseInt(prompt("введіть число 2"));
// let c = parseInt(prompt("введіть число 3"));
// let d = parseInt(prompt("введіть число 4"));

// function getSum(a, b, c, d) {
//   return a + b + c + d;
// }

// function getMultiplication(a, b, c, d) {
//   return a * b * c * d;
// }

// function mediumArithmetic(a, b, c, d) {
//   return (a + b + c + d) / 4;
// }

// function minimalValue(a, b, c, d) {
//   let minimalValue;
//   if (a < b) {
//     minimalValue = a;
//   } else if (c < d) {
//     minimalValue = c;
//   } else if (b < c) {
//     minimalValue = b;
//   } else {
//     minimalValue = d;
//   }
//   return minimalValue;
// }

// let getsSum = getSum(a, b, c, d);
// let getMultiplications = getMultiplication(a, b, c, d);
// let mediumArithmetics = mediumArithmetic(a, b, c, d);
// let minimalValues = minimalValue(a, b, c, d);

// document.write(
//   ` 1)сума: ${getsSum} <br> 2)добуток: ${getMultiplications} <br> 3)середнє арифметичне: ${mediumArithmetics} <br> 4)мінімальне значення: ${minimalValues}`
// );

// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

// let a = parseInt(prompt("введіть число 1"));
// let b = parseInt(prompt("введіть число 2"));
// let c = parseInt(prompt("введіть число 3"));

// function findRezalt(a, b, c) {
//   let numberPaired = 0;
//   let numberAdditional = 0;
//   let numberLargerForOneHundred = 0;
//   if (a % 2 == 0) numberPaired++;
//   if (a > 0) numberAdditional++;
//   if (a > 100) numberLargerForOneHundred++;

//   if (b % 2 == 0) numberPaired++;
//   if (b > 0) numberAdditional++;
//   if (b > 100) numberLargerForOneHundred++;

//   if (c % 2 == 0) numberPaired++;
//   if (c > 0) numberAdditional++;
//   if (c > 100) numberLargerForOneHundred++;

//   return `кількість парних = ${numberPaired} <br> кількість додатних = ${numberAdditional} <br> кількість більших за 100 =  ${numberLargerForOneHundred} <br>`;
// }

// document.write(`${findRezalt(a, b, c)}`);

// Задача 5. Створити окремі функції, які переводять:
// 1)Сантиметри у дюйми;
// 2)Кілограми у фунти;
// 3)Кілометри у милі.

// let userCentimeters = parseInt(prompt("введіть сантиметри"));
// let userKilogram = parseInt(prompt("введіть кілограми"));
// let userKilometers = parseInt(prompt("введіть кілометри"));

// function transferCentimetersInches(userCentimeters) {
//   let inches = 2.54;
//   return userCentimeters / inches;
// }

// function calculateKilogramPounds(userKilogram) {
//   let pounds = 2.20462;
//   return userKilogram / pounds;
// }

// function calculateKilometersMiles(userKilometers) {
//   let miles = 1.609344;
//   return userKilometers / miles;
// }

// document.write(
//   `${userCentimeters} сантиметрів це ${transferCentimetersInches(
//     userCentimeters
//   ).toFixed(4)} дюймів <br>`
// );
// document.write(
//   `${userKilogram} кілограмів це ${calculateKilogramPounds(
//     userKilogram
//   ).toFixed(4)} фунтів <br>`
// );
// document.write(
//   `${userKilometers} кілометрів це ${calculateKilometersMiles(
//     userKilometers
//   ).toFixed(4)} милів <br>`
// );

// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).

// let userAmountRows = parseInt(prompt("введіть кількість рядків"));
// let userAmountColums = parseInt(prompt("введіть кількість колонок"));

// function createTable(amountRows, amountColums) {
//   let counter = 0;
//   let rows = amountRows;
//   let colums = amountColums;
//   let tableUserCreate = document.write(`<table border="2px">`);
//   for (let i = 0; i < rows; i++) {
//     document.write(`<tr>`);
//     for (let j = 0; j < colums; j++) {
//       counter++;
//       document.write(`<td>${counter}</td>`);
//     }
//     document.write(`</tr>`);
//   }

//   document.write(`</table>`);

//   return tableUserCreate;
// }

// createTable(userAmountRows, userAmountColums);

// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

// let randomNumberImage = 1 + Math.floor(Math.random() * 4);
// function createRandomImage(randomNumberImage) {
//   let imagerandom = `<img src="img/${randomNumberImage}.jpg" alt="Image">`;
//   return imagerandom;
// }

// document.write(`${createRandomImage(randomNumberImage)}`);

// Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>

// let userImg = parseInt(prompt("Введіть номер зображення від 1 - 4"));
// let userTitle = prompt("Введіть заголовок до зображення");
// let userLinks = prompt("назва посилання");

// function showSimpleBanner(img, title) {
//   let imgUsers = img;
//   let titleUsers = title;
//   let userAnswerBaner = `

//      <a href="img/${imgUsers}.jpg">
//     <h1>${titleUsers}</h1>
//  </a>
//   `;

//   return userAnswerBaner;
// }
// document.write(showSimpleBanner(userImg, userTitle));

// function showFullBanner(img, title, link) {
//   let imgBody = img;
//   let titleBody = title;
//   let linkBody = link;
//   let bannerBlock = `
//     <div>
//       <a href="img/${imgBody}.jpg" target="_blank"><img src="img/${imgBody}.jpg" alt="${titleBody}"> ${linkBody}</a>
//     </div>
//   `;

//   return bannerBlock;
// }
// document.write(showFullBanner(userImg, userTitle, userLinks));

// Задача 9. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати кількість від’ємних показів температури.
// let userNumber = parseInt(prompt("Скільки питати раз?"));
// function calculateNumberNegativeShows(userNumber) {
//   let usNum = userNumber;
//   let counter = 0;
//   for (let i = 0; i < usNum; i++) {
//     let userTemperature = parseInt(prompt("Яка температура?"));
//     if (userTemperature < 0) {
//       document.write(`Відємна температура ${userTemperature} <br>`);
//       counter++;
//     }
//   }
//   return counter;
// }

// document.write(
//   `Усього було введено ${userNumber} раз <br>  Кількість відЄмних ${calculateNumberNegativeShows(
//     userNumber
//   )} `
// );

// Задача 10. Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

// let userNumber = parseInt(prompt("Скільки питати раз?"));
// function calculateNumberNegativeShows(userNumber) {
//   let usNum = userNumber;
//   let counter = 0;
//   let counterPositive = 0;
//   let mediumValue = 0;
//   for (let i = 0; i < usNum; i++) {
//     let userTemperature = parseInt(prompt("Яка температура?"));
//     if (userTemperature < 0) {
//       document.write(`Відємна температура ${userTemperature} <br>`);
//       counter++;
//     } else if (userTemperature > 0) {
//       mediumValue += userTemperature;
//       counterPositive++;
//     }
//   }
//   let sum = mediumValue / counterPositive;
//   document.write(
//     `середнє значення для додатних показів температури ${sum} <br>`
//   );
//   return counter;
// }

// document.write(
//   `Усього було введено ${userNumber} раз <br>  Кількість відЄмних ${calculateNumberNegativeShows(
//     userNumber
//   )} `
// );
