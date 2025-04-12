// 1.	Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

// class OperationsOnArrays {
//   static findingNumberPositives(listArr) {
//     return listArr.reduce(
//       (prevCount, el) => (el > 0 ? prevCount + 1 : prevCount),
//       0
//     );
//   }
//   static numNegative(listArrays) {
//     return listArrays.filter((el) => el < 0).length;
//   }
//   static qualityEntriesNumber(listArr, findElement) {
//     return listArr.reduce(
//       (prevCount, el) => (el === findElement ? prevCount + 1 : prevCount),
//       0
//     );
//   }
// }
// let numList = [54, 3, 87, -4, 658, 3];
// document.writeln(
//   `К-сть додатних: ${OperationsOnArrays.findingNumberPositives(numList)} <br>`
// );
// document.writeln(
//   `К-сть від’ємних: ${OperationsOnArrays.numNegative(numList)}<br>`
// );
// document.writeln(
//   `Кількість входжень деякого числа: ${OperationsOnArrays.qualityEntriesNumber(
//     numList,
//     3
//   )}`
// );

// 2.	Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

// class Auto {
//   static serviceCar;
//   constructor(driver, mark, number) {
//     if (Auto.serviceCar) {
//       return Auto.serviceCar;
//     }
//     this.driver = driver;
//     this.markAuto = mark;
//     this.number = number;
//     Auto.serviceCar = this;
//   }
// }

// const mazda = new Auto("Dmytro", "Mazda", "AA5643SD");
// const audi = new Auto("Alex", "Audi", "JK7657LO");

// document.writeln(
//   `Водій: ${mazda.driver} <br> Марка: ${mazda.markAuto} <br> Номер: ${mazda.number} <br>`
// );
// document.writeln(`<br>`);
// document.writeln(
//   `Водій: ${audi.driver} <br> Марка: ${audi.markAuto} <br> Номер: ${audi.number}`
// );
// document.writeln(`<br>`);
// document.writeln(mazda === audi);

// 3.	Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

// class Reminder {
//   static eventRemind;
//   static counter = 0;
//   static intervalRemind;
//   constructor(text, milliseconds) {
//     if (Reminder.eventRemind) {
//       return Reminder.eventRemind;
//     }
//     this.text = text;
//     this.milliseconds = milliseconds;
//     Reminder.intervalRemind = setInterval(() => {
//       Reminder.counter++;
//       alert(`${this.text}. Було: ${Reminder.counter} нагадування!`);
//     }, this.milliseconds);
//     Reminder.eventRemind = this;
//   }

//   static stop() {
//     clearInterval(Reminder.intervalRemind);
//     Reminder.intervalRemind = null;
//     Reminder.eventRemind = null;
//     Reminder.counter = 0;
//   }
//   static changeMessage(newText) {
//     if (Reminder.eventRemind) {
//       Reminder.eventRemind.text = newText;
//     }
//   }
// }

// const playText = new Reminder("Зробити звіт", 5000);
// // Перевірка чи можна створити одночасно декілька об’єктів-нагадувачів
// const rest = new Reminder("Перерва!", 5000);

// setTimeout(() => {
//   Reminder.changeMessage("Допрацювати звіт №3");
// }, 20000);

// setTimeout(() => {
//   Reminder.stop();
// }, 35000);

// setTimeout(() => {
//   const rest = new Reminder("Перерва!", 5000);
// }, 40000);

// setTimeout(() => {
//   Reminder.stop();
// }, 60000);

// 4.	Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми

// class Product {
//   #title;
//   get Title() {
//     return this.#title;
//   }
//   set Title(newTitle) {
//     if (newTitle.length === 0) {
//       throw new Error("Назва не може бути пустою!");
//     }
//     this.#title = newTitle;
//   }
//   #unit;
//   get Unit() {
//     return this.#unit;
//   }
//   set Unit(newUnit) {
//     if (newUnit.length === 0) {
//       throw new Error("Значення не може бути пустим!");
//     }
//     this.#unit = newUnit;
//   }
//   #quantity;
//   get Quantity() {
//     return this.#quantity;
//   }
//   set Quantity(newQuantity) {
//     if (newQuantity < 0) {
//       throw new Error("К-сть не може бути від'ємною!");
//     }
//     this.#quantity = newQuantity;
//   }
//   #nameManufacturer;
//   get NameManufacturer() {
//     return this.#nameManufacturer;
//   }
//   set NameManufacturer(newName) {
//     if (newName.length === 0) {
//       throw new Error("Ім'я не може бути пустим!");
//     }
//     this.#nameManufacturer = newName;
//   }
//   #registrationNumber;
//   get RegistrationNumber() {
//     return this.#registrationNumber;
//   }
//   set RegistrationNumber(newNum) {
//     if (newNum < 0) {
//       throw new Error("Значення не може бути від'ємним!");
//     }
//     this.#registrationNumber = newNum;
//   }
//   constructor(
//     initialTitle,
//     initialUnit,
//     initialQuantity,
//     initialNameManufacturer,
//     initialRegistrationNumber
//   ) {
//     this.Title = initialTitle;
//     this.Unit = initialUnit;
//     this.Quantity = initialQuantity;
//     this.NameManufacturer = initialNameManufacturer;
//     this.RegistrationNumber = initialRegistrationNumber;
//   }
//   toString() {
//     return `Назва товару: ${this.Title}, одиниця виміру: ${this.Unit}, кількість: ${this.Quantity}, фірма виробник: ${this.NameManufacturer}, реєстраційний номер: ${this.RegistrationNumber}<br>`;
//   }
// }

// const prod1 = [
//   new Product("Картопля", "кг", 40, "Прогрес", 7690945),
//   new Product("Молоко", "літр", 60, "Простоквашено", 9812764),
//   new Product("Кефір", "літр", 30, "Простоквашено", 9812764),
// ];

// class Warehouse {
//   #products;
//   constructor(initialProducts = []) {
//     this.#products = initialProducts;
//   }
//   addProduct(product) {
//     this.#products.push(product);
//   }
//   shipmentProduct(title, amount) {
//     const product = this.#products.find((prod) => prod.Title === title);
//     if (product) {
//       if (product.Quantity >= amount) {
//         product.Quantity -= amount;
//         return `Відвантажено: ${amount} ${product.Unit} ${product.Title}. Залишок: ${product.Title} ${product.Quantity} ${product.Unit}`;
//       } else throw new Error("Недостатня к-сть товару!");
//     } else throw new Error("Такого товару немає!");
//   }
//   filteringProductName(findTitle) {
//     const result = this.#products.filter((prod) => prod.Title === findTitle);
//     if (result.length > 0) {
//       return result;
//     } else throw new Error("Такого товару немає!");
//   }
//   filteringCompanyName(findName) {
//     const result = this.#products.filter(
//       (company) => company.NameManufacturer === findName
//     );
//     if (result.length > 0) {
//       return result;
//     } else throw new Error("Такої фірми немає!");
//   }
//   toString() {
//     return this.#products.map((el) => el.toString()).join("<br>");
//   }
// }

// try {
//   const wereHouse = new Warehouse(prod1);
//   document.writeln(wereHouse);
//   wereHouse.addProduct(new Product("Банан", "кг", 10, "Юнікс", 6565347));
//   document.writeln(wereHouse);
//   document.writeln(`${wereHouse.shipmentProduct("Банан", 2)}<br> <br>`);
//   document.writeln(wereHouse);
//   wereHouse.filteringProductName("Молоко");
//   document.writeln(
//     `Фільтрація за назвою товару: ${wereHouse.filteringProductName(
//       "Молоко"
//     )}<br> <br>`
//   );
//   document.writeln(
//     `Фільтрація за назвою фірми: ${wereHouse.filteringCompanyName(
//       "Простоквашено"
//     )}`
//   );
// } catch (error) {
//   document.writeln(`Щось пішло не так! <br> <br>`);
//   document.writeln(error.message);
// }

// 5.	Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів
// Приклад.
// testsList= [
//    {firstNum:1, secondNum:5,opration:’*’, userAnswer:7, correctAnswer:5},
//    {firstNum:3, secondNum:4,opration:’+’, userAnswer:7, correctAnswer:7},
// ]
// Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
// Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування. Результати тестування додаються в об’єкт History.  Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.

// class TestData {
//   constructor(firstNum, secondNum, opration, userAnswer, correctAnswer) {
//     this.firstNum = firstNum;
//     this.secondNum = secondNum;
//     this.opration = opration;
//     this.userAnswer = userAnswer;
//     this.correctAnswer = correctAnswer;
//   }
// }

// class History {
//   constructor() {
//     this.testList = [];
//   }
//   addTest(testData) {
//     this.testList.push(testData);
//   }
//   toString() {
//     return this.testList
//       .map(
//         (test) =>
//           `${test.firstNum} ${test.opration} ${test.secondNum} = ${test.userAnswer} Правильна відповідь: ${test.correctAnswer}`
//       )
//       .join("<br>");
//   }
// }

// class MultChecker {
//   constructor(history) {
//     this.history = history;
//   }
//   question() {
//     const num1 = 1 + Math.floor(Math.random() * 10);
//     const num2 = 1 + Math.floor(Math.random() * 10);
//     const correctAnswer = num1 * num2;
//     const userAnswer = prompt(`Скільки буде ${num1} * ${num2} ?`);
//     this.history.addTest(
//       new TestData(num1, num2, "*", userAnswer, correctAnswer)
//     );
//   }
// }

// class AddChecker {
//   constructor(history) {
//     this.history = history;
//   }
//   question() {
//     const num1 = 1 + Math.floor(Math.random() * 40);
//     const num2 = 1 + Math.floor(Math.random() * 40);
//     const correctAnswer = num1 + num2;
//     const userAnswer = prompt(`Скільки буде ${num1} + ${num2} ?`);
//     this.history.addTest(
//       new TestData(num1, num2, "+", userAnswer, correctAnswer)
//     );
//   }
// }

// class TestManager {
//   static testManagerRef = null;
//   constructor() {
//     if (TestManager.testManagerRef) {
//       return TestManager.testManagerRef;
//     }
//     TestManager.testManagerRef = this;
//     this.history = new History();
//     this.multChecker = new MultChecker(this.history);
//     this.addChecker = new AddChecker(this.history);
//     this.n = 0;
//   }

//   static testManagerComplited() {
//     if (!TestManager.testManagerRef) {
//       TestManager.testManagerRef = new TestManager();
//     }
//     return TestManager.testManagerRef;
//   }
//   start() {
//     this.n = parseInt(prompt("Скільки тестів?"));
//     let count = 0;
//     const begin = () => {
//       if (count >= this.n) {
//         alert("тест завершено!");
//         document.writeln(this.history.toString());
//         return;
//       }
//       const randomlyChoose = Math.random() < 0.5;
//       if (randomlyChoose) {
//         this.multChecker.question();
//       } else {
//         this.addChecker.question();
//       }
//       count++;
//       setTimeout(begin, 3000);
//     };
//     begin();
//   }
// }

// const test = TestManager.testManagerComplited();
// test.start();
