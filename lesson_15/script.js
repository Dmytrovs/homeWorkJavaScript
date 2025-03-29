// Задача 0 Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

// const object1 = {
//   wholeNum: [123, 43, 566, 34, 89],
//   findingAmount: function () {
//     let sum = this.wholeNum.reduce((prevSum, el) => prevSum + el, 0);
//     return sum;
//   },
// };

// document.writeln(
//   `object1 функція знаходження суми: ${object1.findingAmount()} <br>`
// );

// const object2 = {
//   wholeNum: [82, 45, 89, 3, 7],
//   productNumbers: function () {
//     let min = Math.min(...this.wholeNum);
//     let max = Math.max(...this.wholeNum);
//     let filtNum = this.wholeNum.filter((el) => el !== min && el !== max);
//     if (filtNum.length === 0) return 0;
//     else {
//       return filtNum.reduce((prevSum, elem) => prevSum * elem, 1);
//     }
//   },
// };

// document.writeln(
//   `object2 функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням: ${object2.productNumbers()} <br>`
// );
// let callUser = object1.findingAmount.call(object2);

// let applyUser = object2.productNumbers.apply(object1);

// document.writeln(`З використанням call для object2: ${callUser} <br>`);
// document.writeln(`З використанням aply для object1: ${applyUser} <br>`);

// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// Тир
// Поля(властивості)	Масив, у якому зберігається поле з зайцями
// Методи (дії)	Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

// const shot = {
//   arrSquareFieldRabbits: [
//     [1, 0, 1, 0],
//     [1, 1, 1, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1],
//   ],
//   showPlayingField: function (playField) {
//     for (const row of playField) {
//       document.writeln(`${row} <br>`);
//     }
//   },
//   shooting: function (quantityShots = 3) {
//     let fieldRabbits = this.arrSquareFieldRabbits;
//     let quantityRabbits = JSON.parse(JSON.stringify(fieldRabbits));
//     let rabbitsLeft = quantityRabbits
//       .flat()
//       .filter((rabbit) => rabbit === 1).length;
//     while (quantityShots > 0 && rabbitsLeft > 0) {
//       let userRow = parseInt(prompt("Введіть номер рядка 0 - 3 "));
//       let userColumn = parseInt(prompt("Введіть номер стовбця 0 - 3"));
//       if (quantityRabbits[userRow][userColumn] === 1) {
//         alert("Попав");
//         quantityRabbits[userRow][userColumn] = 0;
//         rabbitsLeft--;
//       } else alert("Не попав");
//       quantityShots--;
//       if (quantityShots === 0) {
//         alert("Постріли закінчилися");
//       }

//       if (rabbitsLeft === 0) {
//         alert("Вітаю! Зайці закінчилися.");
//       }
//     }
//     if (quantityShots === 0 || rabbitsLeft === 0) {
//       // за допомогою forOf
//       // for (const row of quantityRabbits) {
//       //   document.write(`${row} <br>`);
//       // }
//       this.showPlayingField.call(this, quantityRabbits);
//     }
//   },
// };

// shot.shooting();
// // shot.showPlayingField(shot.arrSquareFieldRabbits)

// Задача 2. Створити об’єкт «Авто».
// Авто
// Поля(властивості)	Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// Методи (дії)	Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

// function Auto(
//   initialMark,
//   initialTankSize,
//   initialQuantityLitersAvailable,
//   initialQuantityPlaces,
//   initialQuantityPassengers
// ) {
//   this.mark = initialMark;
//   this.tankSize = initialTankSize;
//   this.quantityLitersAvailable = initialQuantityLitersAvailable;
//   this.quantityPlaces = initialQuantityPlaces;
//   this.quantityPassengers = initialQuantityPassengers;
// }

// Auto.prototype.refuelingSpecifiedQuantityLiters = function () {
//   let quantityLiters = parseInt(
//     prompt(`Авто ${this.mark} Кількість літрів заправки?`)
//   );
//   if (quantityLiters <= this.tankSize - this.quantityLitersAvailable) {
//     this.quantityLitersAvailable += quantityLiters;
//     alert(
//       `Заправили бак на ${quantityLiters} в баці ${this.quantityLitersAvailable}`
//     );
//   } else alert("Перевищено обьєм баку авто");
//   return this.quantityLitersAvailable;
// };

// Auto.prototype.showQuantitypassengers = function () {
//   alert(`Кількість пасажирів ${this.quantityPassengers}`);
// };

// Auto.prototype.addingPassengers = function (addPasseng) {
//   if (addPasseng <= this.quantityPlaces - this.quantityPassengers) {
//     this.quantityPassengers += addPasseng;
//     alert("В авто є місця. Поїхали!");
//   } else
//     alert(
//       `Нажаль всі не помістимося! Максимальна к-сть ${this.quantityPlaces}`
//     );

//   return this.quantityPassengers;
// };

// Auto.prototype.passengerLanding = function (landingPerson) {
//   if (landingPerson > this.quantityPassengers) {
//     alert(
//       `В авто тільки ${this.quantityPassengers} не можна висадити ${landingPerson} пасажирів`
//     );
//   } else {
//     this.quantityPassengers -= landingPerson;
//     alert(
//       `Висадили ${landingPerson} залишилося в авто ${this.quantityPassengers}`
//     );
//   }

//   return this.quantityPassengers;
// };

// const Auto1 = new Auto("Skoda", 45, 10, 5, 2);
// Auto1.refuelingSpecifiedQuantityLiters();
// Auto1.showQuantitypassengers();
// Auto1.addingPassengers(3);
// Auto1.passengerLanding(1);

// document.writeln(
//   `Залишилося в авто пасажирів: ${Auto1.quantityPassengers}<br> к-сть літрів в баці: ${Auto1.quantityLitersAvailable}`
// );

// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля	Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

// class MultChecker {
//   constructor(
//     initialNumberCheck,
//     initialNumberTrueAnswers,
//     initialNumberFalseAnswers,
//     initialRandomNum
//   ) {
//     this.numCheck = initialNumberCheck;
//     this.numTrueAnswer = initialNumberTrueAnswers;
//     this.numFalseAnswer = initialNumberFalseAnswers;
//     this.randomNum = initialRandomNum;
//   }
//   generationExample() {
//     this.randomNum = 1 + Math.floor(Math.random() * 10);
//     return [this.numCheck, this.randomNum];
//   }
//   checkingAnswer() {
//     let result = this.numCheck * this.randomNum;
//     let userAnswer = parseInt(
//       prompt(`${this.numCheck} помножити на  ${this.randomNum} = ?`)
//     );
//     if (userAnswer === result) {
//       this.numTrueAnswer += 1;
//     } else {
//       this.numFalseAnswer += 1;
//     }
//     return [this.numTrueAnswer, this.numFalseAnswer];
//   }

//   render() {
//     document.writeln(
//       ` Кількість правильних: ${this.numTrueAnswer}<br> к-сть неправильних: ${this.numFalseAnswer}`
//     );
//   }
// }

// let checker = new MultChecker(4, 0, 0, 0);
// checker.generationExample();
// checker.checkingAnswer();
// checker.render();

// Задача 4. Розробити клас Baner
// Поля	Масив об’єктів ( графічних зображень та посилань на сайти)

// методи	Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

// class Baner {
//   constructor() {
//     this.baners = [
//       { img: "img/image-1.jpg", link: "https://uk.javascript.info/" },
//       { img: "img/image-2.jpg", link: "https://www.ukr.net/" },
//       { img: "img/image-3.jpg", link: "https://rozetka.com.ua/ua/" },
//       { img: "img/image-4.jpg", link: "https://comfy.ua/" },
//     ];
//     this.randBaner = null;
//   }
//   randomChoiceObject() {
//     let randomIndex = Math.floor(Math.random() * this.baners.length);
//     this.randBaner = this.baners[randomIndex];
//   }
//   showBaner() {
//     const { img, link } = this.randBaner;
//     document.writeln(`
//       <div>
//    <a href="${link}"><img src="${img}" alt="Image"></a>
//    </div>
//       `);
//   }
// }

// const createBaner = new Baner();
// createBaner.randomChoiceObject();
// createBaner.showBaner();

// Задача 5. Розробити клас «Керівник танців»
// Поля	Масив імен хлопців
// Масив імен дівчат
// Методи	Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

// class DanceHead {
//   constructor(initialnamesBoys, initialnamesGirls) {
//     this.namesBoys = initialnamesBoys;
//     this.namesGirls = initialnamesGirls;
//     this.randBoy = null;
//     this.randGirl = null;
//   }

//   randomChoiceBoysName() {
//     let randomIndexBoy = Math.floor(Math.random() * this.namesBoys.length);
//     this.randBoy = this.namesBoys[randomIndexBoy];
//   }

//   randomChoiceGirlName() {
//     let randomIndexGirl = Math.floor(Math.random() * this.namesGirls.length);
//     this.randGirl = this.namesGirls[randomIndexGirl];
//   }

//   bringingCoupleDancing() {
//     alert(`Пара для танців ${this.randBoy} та ${this.randGirl}`);
//   }

//   run() {
//     const swowCouple = () => {
//       this.randomChoiceBoysName();
//       this.randomChoiceGirlName();
//       this.bringingCoupleDancing();
//       setTimeout(swowCouple, 5000);
//     };
//     swowCouple();
//   }
// }

// const showDanceHead = new DanceHead(
//   ["Максим", "Олександр", "Дмитро"],
//   ["Ольга", "Катерина", "Наталя"]
// );

// showDanceHead.randomChoiceBoysName();
// showDanceHead.randomChoiceGirlName();
// showDanceHead.bringingCoupleDancing();
// showDanceHead.run();
