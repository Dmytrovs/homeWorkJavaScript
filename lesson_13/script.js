// Задача 1. Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
// function generationAllSubsets(arr, index = 0, current = []) {
//   if (index === arr.length) {
//     document.writeln(`${current} <br>`);
//     return;
//   }
//   generationAllSubsets(arr, index + 1, current);
//   generationAllSubsets(arr, index + 1, [...current, arr[index]]);
// }
// generationAllSubsets([1, 2, 3]);

// Задача 2.  Дано масив імен спортсменів. Розробити програму для виведення усіх можливих результатів змагань (списки імен у відповідності до місць, які вони займуть).
// let arr = ["Дмитро", "Ivan", "Alex"];
// function resultsCompetitions(baseArr, resArr) {
//   if (baseArr.length === 0) {
//     document.writeln(`${resArr} <br>`);
//   } else {
//     for (let i = 0; i < baseArr.length; i++) {
//       resultsCompetitions(
//         baseArr.filter((el, index) => index !== i),
//         [...resArr, baseArr[i]]
//       );
//     }
//   }
// }

// resultsCompetitions(arr, []);

// Задача 3. Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
// const board = [
//   [" ", 1, 1],
//   [0, 0, " "],
//   [1, " ", 1],
// ];
// function combinationsUserMoves(board, freeItems) {
//   if (freeItems === 0) document.writeln(`${JSON.stringify(board)}<br>`);
//   else {
//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         if (board[i][j] === " ") {
//           let boardCopy1 = JSON.parse(JSON.stringify(board));
//           boardCopy1[i][j] = 0;
//           combinationsUserMoves(boardCopy1, freeItems - 1);
//           let boardCopy2 = JSON.parse(JSON.stringify(board));
//           boardCopy2[i][j] = 1;
//           combinationsUserMoves(boardCopy2, freeItems - 1);
//         }
//       }
//     }
//   }
// }
// combinationsUserMoves(board, 3);

// Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
// const boys = ["Олександр", "Іван", "Дмитро"];
// const girls = ["Марія", "Олена", "Наталя"];
// function combinationsPossible(boys, girls, index = 0) {
//   if (index === boys.length) return;

//   for (const girl of girls) {
//     document.writeln(`${boys[index]} + ${girl} <br>`);
//   }
//   combinationsPossible(boys, girls, index + 1);
// }

// combinationsPossible(boys, girls);

//    // ======= За допомогою ForOf
// for (const boy of boys) {
//   for (const girl of girls) {
//     document.writeln(`${boy} + ${girl} <br>`)
//   }
// }

// Задача 5.  З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.
// function burningNumMonths(min, max) {
//   function generationValue() {
//     let current = min;
//     if (min >= max) {
//       min = 1;
//     } else {
//       min++;
//     }
//     return current;
//   }
//   return generationValue;
// }

// let counter = burningNumMonths(1, 12);

// function showResultUser(counter) {
//   let howManyTimesCall = parseInt(prompt("Скільки разів викликати функцію?"));
//   for (let i = 0; i < howManyTimesCall; i++) {
//     document.writeln(`${counter()} <br>`);
//   }
//   return counter;
// }
// showResultUser(counter);

// Задача 6. З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одну букву наперед заданого слова. З використанням нього розробити гру «Прекладач». Виводимо для користувача опис цього слова і по одну букву користувач вводить переклад цього слова. Підрахувати кількість вгаданих букв.
// const givenWords = ["winter", "summer"];
// const message = [
//   "пора року коли холодно та мороз на вулиці",
//   "пора року коли дуже спекотно на вулиці",
// ];

// function playBrisket(givenWords) {
//   return function descriptionWord() {
//     let count = 0;
//     for (let i = 0; i < givenWords.length; i++) {
//       let word = givenWords[i];
//       for (let j = 0; j < word.length; j++) {
//         alert(message[i]);
//         let userLetter = prompt(`Введі ${j + 1} букву`);
//         if (userLetter === word[j]) {
//           count++;
//         }
//       }
//     }
//     return count;
//   };
// }

// let geme = playBrisket(givenWords);
// let resustGameLetterGuessed = geme();
// document.writeln(`Кількість вгаданих букв = ${resustGameLetterGuessed}`);

// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
// function userRandomeXample() {
//   let firstRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
//   let secondRandomNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1);
//   let addingTwoDigits = firstRandomNumber + secondRandomNumber;
//   alert(`firstNum: ${firstRandomNumber} + secondNum: ${secondRandomNumber}`);
//   let userAnswer = parseInt(prompt("Введіть результат"));
//   if (addingTwoDigits === userAnswer) {
//     alert(
//       `Правильно firstNum ${firstRandomNumber} + secondNum${secondRandomNumber} = ${addingTwoDigits}`
//     );
//   } else {
//     alert(
//       `Неправильно ви помилились firstNum ${firstRandomNumber} + secondNum ${secondRandomNumber} = ${addingTwoDigits}`
//     );
//   }
//   setTimeout(userRandomeXample, 10000);
// }
// userRandomeXample();

// Задача 8. При старті питаємо у користувача чи хоче він читати новини. Якщо так, то одразу переходимо до сайту Ukr.Net, якщо ні, то через 20 секунд самі переходимо на сайт ukr.net. Для цього через 20 секунд після відкриття треба виконати команду
// window.location.href = 'https://www.ukr.net/'

// function askTheUser() {
//   if (confirm(" Хочете читати новини?")) {
//     window.location.href = "https://www.ukr.net/";
//   } else {
//     setTimeout(() => (window.location.href = "https://www.ukr.net/"), 20000);
//   }
// }
