// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування  бульбашкою
// function generateRandomNum(min = 1, max = 30, quantity = 30) {
//   let random = [];
//   for (let i = 0; i < quantity; i++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     random.push(numRandom);
//   }
//   return random;
// }
// let arr = generateRandomNum();

// function sortingBubble(arr) {
//   let changed;
//   let comparison = 0;
//   let exchange = 0;
//   do {
//     changed = false;
//     for (let i = 0; i < arr.length; i++) {
//       comparison++;
//       if (arr[i - 1] > arr[i]) {
//         let tmp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = tmp;
//         changed = true;
//         exchange++;
//       }
//     }
//   } while (changed);
//   return [arr, comparison, exchange];
// }

// const [arrBubleResult, comparisonBubleResult, exchangeBubleResult] =sortingBubble(arr);

// document.write(
//   `Сортування  бульбашкою: ${arrBubleResult}<br> Кількість порівнянь: ${comparisonBubleResult} <br> Кількість обмінів: ${exchangeBubleResult}`
// );
// Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.
// function generateRandomNum(min = 1, max = 30, quantity = 30) {
//   let random = [];
//   for (let i = 0; i < quantity; i++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     random.push(numRandom);
//   }
//   return random;
// }
// let arr = generateRandomNum();
// function shakerSort(arr) {
//   let comparison = 0;
//   let exchange = 0;
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex < rightIndex) {
//     let changed = false;
//     for (let i = leftIndex; i <= rightIndex; i++) {
//        comparison++;
//       if (arr[i - 1] > arr[i]) {
//         let tmp = arr[i - 1];
//         arr[i - 1] = arr[i];
//         arr[i] = tmp;
//         changed = true;
//         exchange++;
//       }
//     }
//     rightIndex--;
//     if (changed === false) break;
//     changed = false;
//     for (let j = rightIndex; j > leftIndex; j--) {
//        comparison++;
//       if (arr[j - 1] > arr[j]) {
//         let tmp = arr[j - 1];
//         arr[j - 1] = arr[j];
//         arr[j] = tmp;
//         changed = true;
//         exchange++;
//       }
//     }
//     leftIndex++;
//     if (changed === false) break;
//   }
//   return [arr, exchange, comparison];
// }
// let [arrResultShaker, exchangeResultShaker, comparisonResultShaker] =
//   shakerSort(arr);

// document.write(
//   `Сортування змішуванням: ${arrResultShaker}<br> Кількість порівнянь: ${comparisonResultShaker} <br> Кількість обмінів: ${exchangeResultShaker}`
// );
// Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.
// function generateRandomNum(min = 1, max = 30, quantity = 30) {
//   let random = [];
//   for (let i = 0; i < quantity; i++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     random.push(numRandom);
//   }
//   return random;
// }
// let arr = generateRandomNum();

// function insertSort(arr) {
//   let comparisonInsert = 0;
//   let exchangeInsert = 0;
//   for (let k = 1; k < arr.length; k++) {
//     let currentElement = arr[k];
//     let i = k - 1;
//     while (i >= 0 && arr[i] > currentElement) {
//       comparisonInsert++;
//       arr[i + 1] = arr[i];
//       i = i - 1;
//       exchangeInsert++;
//     }
//     arr[i + 1] = currentElement;
//     comparisonInsert++;
//   }
//   return [arr, comparisonInsert, exchangeInsert];
// }
// const [arrInsertResult, comparisonInsertResult, exchangeInsertResult] =
//   insertSort(arr);
// document.write(
//   `Сортування включеннями: ${arrInsertResult}<br> Кількість порівнянь: ${comparisonInsertResult} <br> Кількість обмінів: ${exchangeInsertResult}`
// );
// Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком .
// Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран (стрілки не потрібні).
// function generateRandomNum(min = 1, max = 30, quantity = 30) {
//   let random = [];
//   for (let i = 0; i < quantity; i++) {
//     let numRandom = Math.floor(Math.random() * (max - min + 1) + min);
//     random.push(numRandom);
//   }
//   return random;
// }
// const arr = generateRandomNum();

// document.write(`Сортування бульбашкою: <br>`);
// function sortingBubble(arr) {
//   let arrBuble = [...arr];
//   let changed;
//   let comparison = 0;
//   let exchange = 0;
//   do {
//     changed = false;
//     for (let i = 0; i < arrBuble.length; i++) {
//       comparison++;
//       if (arrBuble[i - 1] > arrBuble[i]) {
//         let tmp = arrBuble[i - 1];
//         arrBuble[i - 1] = arrBuble[i];
//         arrBuble[i] = tmp;
//         changed = true;
//         exchange++;
//         document.write(`${arrBuble} <br>`);
//       }
//     }
//   } while (changed);
//   return [arrBuble, comparison, exchange];
// }

// const [arrBubleResult, comparisonBubleResult, exchangeBubleResult] =
//   sortingBubble(arr);
// document.write(`Cортування змішуванням: <br>`);
// function shakerSort(arr) {
//   let comparison = 0;
//   let exchange = 0;
//   let leftIndex = 0;
//   let arrShaker = [...arr];
//   let rightIndex = arrShaker.length - 1;
//   while (leftIndex < rightIndex) {
//     let changed = false;
//     for (let i = leftIndex; i <= rightIndex; i++) {
//       comparison++;
//       if (arrShaker[i - 1] > arrShaker[i]) {
//         let tmp = arrShaker[i - 1];
//         arrShaker[i - 1] = arrShaker[i];
//         arrShaker[i] = tmp;
//         changed = true;
//         exchange++;
//         document.write(`${arrShaker} <br>`);
//       }
//     }
//     rightIndex--;
//     if (changed === false) break;
//     changed = false;
//     for (let j = rightIndex; j > leftIndex; j--) {
//       comparison++;
//       if (arrShaker[j - 1] > arrShaker[j]) {
//         let tmp = arrShaker[j - 1];
//         arrShaker[j - 1] = arrShaker[j];
//         arrShaker[j] = tmp;
//         changed = true;
//         exchange++;
//         document.write(`${arrShaker} <br>`);
//       }
//     }
//     leftIndex++;
//     if (changed === false) break;
//   }
//   return [arrShaker, exchange, comparison];
// }
// const [arrResultShaker, exchangeResultShaker, comparisonResultShaker] =
//   shakerSort(arr);

// document.write(`Сортування включеннями: <br>`);

// function insertSort(arr) {
//   let comparisonInsert = 0;
//   let exchangeInsert = 0;
//   let arrInsert = [...arr];
//   for (let k = 1; k < arrInsert.length; k++) {
//     let currentElement = arrInsert[k];
//     let i = k - 1;
//     while (i >= 0 && arrInsert[i] > currentElement) {
//       comparisonInsert++;
//       arrInsert[i + 1] = arrInsert[i];
//       i = i - 1;
//       exchangeInsert++;
//       document.write(`${arrInsert} <br>`);
//     }
//     arrInsert[i + 1] = currentElement;
//     comparisonInsert++;
//   }
//   return [arrInsert, comparisonInsert, exchangeInsert];
// }
// const [arrInsertResult, comparisonInsertResult, exchangeInsertResult] =
//   insertSort(arr);

// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
// let names = [
//   "John",
//   "Paul",
//   "Dmytro",
//   "Andrew",
//   "Abrams",
//   "Abba",
//   "Peter",
//   "Tina",
//   "Olga",
//   "Jack",
//   "Peter",
// ];
// names.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   return 0;
// });
// const searchElement = "Olga";
// function binarySearch(names, searchElement) {
//   let start = 0;
//   let end = names.length - 1;
//   while (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if(names[middle] === searchElement) return middle
//     if(names[middle] < searchElement) start = middle + 1
//     if (names[middle] > searchElement) end = middle - 1
//   }
//   return -1
// }

// let findNameIndex = binarySearch(names, searchElement)
// if(searchElement !==-1) {
//   document.write(`Так у масиві є ім’я «Olga» і знаходиться під індексом ${findNameIndex}`);
// } else document.write('Немає такого ім,я!')

// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
// let namesLeng = [
//   "John",
//   "Paul",
//   "Dmytro",
//   "Peter",
//   "Andrew",
//   "Abrams",
//   "Valensiya",
//   "Tina",
//   "Jack",
//   "John",
// ];

// namesLeng.sort((a, b) =>{
//   if(a.length < b.length) return -1
//   if(a.length > b.length) return 1
//   return 0
// })
// const searchElementLength = 5

// function binarySearchLength(namesLeng, searchElementLength) {
//   let start = 0
//   let end = namesLeng.length - 1
//   while (start <= end) {
//     const middle = Math.floor((start + end) / 2)
//     if(namesLeng[middle].length === searchElementLength) return middle
//     if(namesLeng[middle].length < searchElementLength) start = middle + 1
//     if(namesLeng[middle].length > searchElementLength) end = middle -1
//   }
//   return -1
// }

// let findNameIndexLength = binarySearchLength(namesLeng, searchElementLength)
// if(searchElementLength !==-1) {
//   document.write(`Так у масиві є ім’я довжиною 5 символів і знаходиться під індексом ${findNameIndexLength}`);
// } else document.write('Немає такого ім,я!')
