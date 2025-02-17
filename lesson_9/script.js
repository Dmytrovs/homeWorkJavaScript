// 1. Користувач вводить кількість елементів. Створити масив, що складається з вказаної кількості елементів заповнених нулями.

// let numberItems = parseInt(prompt("кількість елементів"));
// let arr = [];
// function createItemArr(numberItems, arr) {
//   for (let i = 0; i < numberItems; i++) {
//     arr.push(0);
//   }
//   return arr;
// }
// let arrUser = createItemArr(numberItems, arr);
// document.write(arrUser);

// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
// let numberUser = parseInt(prompt("кількість елементів"));
// let arreyNumber = [];
// function greatingNumber(numberUser, arreyNumber) {
//   let quantity = Math.ceil(numberUser / 2);
//   for (let i = 0; i < numberUser; i++) {
//     arreyNumber.push(1);
//   }
//   arreyNumber.fill(7, quantity);
//   return arreyNumber;
// }

// let arrUser = greatingNumber(numberUser, arreyNumber);
// document.write(arrUser);

// 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
// let numberUser = parseInt(prompt("кількість елементів"));
// let arreyNumber = [];

// function greatingNumber(numberUser, arreyNumber) {
//   for (let i = 0; i < numberUser; i++) {
//     arreyNumber.push(7);
//   }
//   return arreyNumber.fill(1, 0, 5);
// }

// document.write(greatingNumber(numberUser, arreyNumber));

// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100

// let arrayNumber = [21, 213, 34, 56, 101, 1994, 4];

// function numberMore(arrayNumber) {
//   let moreScore = [];
//   for (const item of arrayNumber) {
//     if (item > 100) {
//       moreScore.push(item);
//     }
//   }
//   return moreScore;
// }

// document.write(numberMore(arrayNumber));

// 5.Дано масив елементів. Знайти добуток додатних елементів
// let arrayNumber = [10, 10, 10, 10, 10, 1, 4, 300];

// function getSumNumbers(arrayNumber) {
//   let sum = 0;
//   for (const element of arrayNumber) {
//     sum += element;
//   }
//   return sum;
// }

// document.write(getSumNumbers(arrayNumber));

// 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2

// let arrayNumber = [2, 10, 10, 10, 10, 1, 4, 300];

// let twoArr = arrayNumber.map((element, index, baseArr) => {
//   if (element > baseArr[0]) {
//     return element * 2;
//   } else {
//     return element;
//   }
// });

// document.write(twoArr);
// function numberMoreTwo(arrayNumber) {
//   arrayNumber.forEach((element, index, baseArr) => {
//     if (element > baseArr[0]) {
//       baseArr[index] = baseArr[index] * 2;
//     }
//   });
//   return arrayNumber;
// }

// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
// let arrayNumber = [2500, 3210, 1054, 10454, 8984, 300, 250, 1001];
// let discountPercentage = 30;
// let newPrices = arrayNumber.map((element, index, baseArr) => {
//   if (element > 1000) {
//     return (element - (baseArr[index] / 100) * discountPercentage).toFixed(2);
//   } else {
//     return element;
//   }
// });
// arrayNumber.forEach((element, index, baseArr) => {
//   if (element > 1000) {
//     baseArr[index] = ((baseArr[index] / 100) * discountPercentage).toFixed(2);
//   }
// });
// document.write(arrayNumber);

// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»

// let carNumbers = [
//   "AB1234CD",
//   "EF5678GH",
//   "IJ9012KL",
//   "MN3456OP",
//   "QR7890ST",
//   "AA7563RS",
// ];

// const resultCar = carNumbers.filter((element, index, baseArr) => {
//   if (baseArr[index].at(0) == "A") {
//     return element;
//   }
// });

// document.write(resultCar);

// 9. Дано масив імен. Сформувати масив з перших літер цих імен.

// let moreUkrainianNames = [
//   "Марія",
//   "Володимир",
//   "Олена",
//   "Сергій",
//   "Наталія",
//   "Dima",
// ];

// let newName = moreUkrainianNames.map((element, index, baseArr) => {
//   if (baseArr[index]) {
//     return element.at(0);
//   }
// });

// document.write(newName);

// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.

// let arrayNumber = [2500, 3210, 1054, 10454, 8984, 300, 250, 1001, 10];

// const tax = 20;

// const newPrices = arrayNumber.map((element) => (element / 100) * tax);
// document.write(newPrices);
// let sum = 0;

// function containAmountOfTaxPaid(arrayNumber) {
//   let sum = 0;
//   let newPrices = [];
//   arrayNumber.forEach((element) => {
//     sum += element;
//   });
//   return (newPrices += (sum / 100) * tax);
// }

// const resultTax = containAmountOfTaxPaid(arrayNumber);
// document.write(resultTax);
