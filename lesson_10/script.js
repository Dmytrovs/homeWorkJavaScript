// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();

// document.write(`історію цін на цінні папери за деякий період: ${prices}`);

//       1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
// let newPrice = prices.filter((price) => price > 1000);
// document.write(
//   `Новий масив, у якому є тільки ті, що більші за 1000 грн: ${newPrice}`
// );
//       2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();

// let priceNew = prices.reduce((prevNum, element, index) => {
//   if (element > 1000) {
//     prevNum.push(index);
//   }
//   return prevNum;
// }, []);
// document.write(
//   `Новий масив, у якому є номери тільки тих, що більші за 1000 грн: ${priceNew}`
// );

// 3)Сформувати список з тих цін, які більші за попереднє значення
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();

// let newPrice = prices.filter(
//   (element, index, baseArr) => index > 0 && element > baseArr[index - 1]
// );
// document.write(
//   `Список з тих цін, які більші за попереднє значення: ${newPrice}`
// );
//       4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let max = prices.reduce((prevMax, element) => element > prevMax ? element : prevMax)

// let newPrice = prices.reduce(
//   (prevMax, elem) => {
//     if(elem) {
//       prevMax.push(elem / max * 100)
//     } return prevMax
//   }, []
// )
// document.write(
//   `Новий масив, що міститиме значення цін у відсотках стосовно максимального: ${newPrice}`
// );
//       5)Підрахувати кількість змін цін
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.reduce((prevCount, element, index, baseArr) => {
//   if (index > 0 && element !== baseArr[index - 1]) {
//     return prevCount + 1;
//   }
//   return prevCount;
// }, 0);
// document.write(`Кількість змін цін: ${newPrice}`);
//       6)Визначити, чи є ціна, що менше 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.some((price) => price < 1000);
// document.write(`Чи є ціна, що менше 1000: ${newPrice}`);

//       7)Визначати, чи усі ціни більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.every((price) => price > 1000);
// document.write(`Чи усі ціни більше за 1000: ${newPrice}`);

//       8)Підрахувати кількість цін, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.reduce((prev, el, index) => {
//   if (index > 0 && el > 1000) {
//     return prev + 1;
//   }
//   return prev;
// }, 0);
// document.write(`Кількість цін, що більше за 1000: ${newPrice}`);

//       9)Підрахувати суму цін, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.reduce((prev, elem) => {
//   if (elem > 1000) {
//     return prev + elem;
//   }
//   return prev;
// }, 0);
// document.write(`Підрахувати суму цін, що більше за 1000: ${newPrice}`);

//       10)Знайти першу ціну, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.find((evaluation) => evaluation > 1000);
// document.write(`Перша ціна, що більше за 1000: ${newPrice}`);

//       11)Знайти індекс першої ціни, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.findIndex((score) => score > 1000);
// document.write(`Знайти індекс першої ціни, що більше за 1000: ${newPrice}`);

//       12)Знайти останню ціну, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.findLast((score) => score > 1000);
// document.write(`Остання ціна, що більше за 1000: ${newPrice}`);

//13)Знайти індекс останньої ціни, що більше за 1000
// function generateNum(min = 1, max = 10000, quantity = 15) {
//   let arr = [];
//   for (let index = 0; index < quantity; index++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     arr.push(numRandom);
//   }
//   return arr;
// }

// let prices = generateNum();
// let newPrice = prices.findLastIndex((score) => score > 1000);
// document.write(`Індекс останньої ціни, що більше за 1000 ${newPrice}`);
