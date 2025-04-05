// Задача 1. Створити клас TDate для роботи із датами у форматі “день.місяць.рік”. Дата представляється структурою із трьома полями. Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років. Введення та виведення дати реалізувати за допомогою методу  toString.

// class TDate {
//   #year;
//   get Year() {
//     return this.#year;
//   }
//   set Year(newYear) {
//     if (newYear < 0) {
//       throw new Error("Рік не може бути від'ємним!");
//     }
//     this.#year = newYear;
//     this.correctDay();
//   }
//   #month;
//   get Month() {
//     return this.#month;
//   }

//   set Month(newMonth) {
//     if (newMonth < 1 || newMonth > 12) {
//       throw new Error("Місяць має бути від 1 до 12");
//     }
//     this.#month = newMonth;
//     this.correctDay();
//   }
//   #day;
//   get Day() {
//     return this.#day;
//   }
//   set Day(newDay) {
//     if (newDay < 1 || newDay > this.getDayInMonth()) {
//       throw new Error(
//         `Некоректний день! У місяці ${
//           this.Month
//         } повино бути ${this.getDayInMonth()} `
//       );
//     }
//     this.#day = newDay;
//   }

//   constructor(year, month, day) {
//     this.Year = year;
//     this.Month = month;
//     this.Day = day;
//   }

//   getDayInMonth() {
//     const dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (this.Month === 2) {
//       if (
//         (this.Year % 4 === 0 && this.Year % 100 !== 0) ||
//         this.Year % 400 === 0
//       ) {
//         return 29;
//       }
//     }
//     return dayInMonth[this.Month - 1];
//   }

//   correctDay() {
//     if (this.Day > this.getDayInMonth()) {
//       this.Day = this.getDayInMonth();
//     }
//   }

//   increaceDay(quantityDay) {
//     for (let i = 0; i < quantityDay; i++) {
//       this.#day++;
//       if (this.#day > this.getDayInMonth()) {
//         this.#day = 1;
//         this.increaceMonth(1);
//       }
//     }
//   }
//   decreaceDay(quantityDay) {
//     for (let i = 0; i < quantityDay; i++) {
//       this.#day--;
//       if (this.#day < 1) {
//         this.decreaceMonth(1);
//         this.#day = this.getDayInMonth();
//       }
//     }
//   }
//   increaceMonth(quantityMonth) {
//     for (let i = 0; i < quantityMonth; i++) {
//       this.#month++;
//       if (this.#month > 12) {
//         this.#month = 1;
//         this.increaceYear(1);
//       }
//     }
//     this.correctDay();
//   }
//   decreaceMonth(quantityMonth) {
//     for (let i = 0; i < quantityMonth; i++) {
//       this.#month--;
//       if (this.#month < 1) {
//         this.#month = 12;
//         this.decreaceYear(1);
//       }
//     }
//     this.correctDay();
//   }
//   increaceYear(quantityYear) {
//     this.#year += quantityYear;
//     this.correctDay();
//   }
//   decreaceYear(quantityYear) {
//     if (this.#year - quantityYear < 1) {
//       throw new Error("Рік менше 1");
//     }
//     this.#year -= quantityYear;
//     this.correctDay();
//   }
//   toString() {
//     return `День:${this.Day}  Місяць:${this.Month} Рік:${this.Year}`;
//   }
// }

// try {
//   const newDate = new TDate(2025, 3, 14);
//   newDate.increaceDay(3);
//   // newDate.increaceMonth(3)
//   // newDate.decreaceYear(1);
//   // newDate.decreaceMonth(5)
//   document.writeln(newDate.toString());
// } catch (error) {
//   document.writeln("Щось пішло не так <br>");
//   document.writeln(error.message);
// }

// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі.

// class TMoney {
//   #money;
//   get Money() {
//     return this.#money;
//   }
//   set Money(newMoney) {
//     if (newMoney < 0) {
//       throw new Error("Кількість грошей не може бути від'ємною!");
//     }
//     this.#money = newMoney;
//   }
//   #courseDollars;
//   get CourseDollars() {
//     return this.#courseDollars;
//   }
//   set CourseDollars(newCourseDollars) {
//     if (newCourseDollars < 0) {
//       throw new Error("Курс долара не може бути від'ємним!");
//     }
//     if (typeof newCourseDollars !== "number") {
//       throw new Error("Курс долара має бути числом!");
//     }
//     this.#courseDollars = newCourseDollars;
//   }
//   constructor(money, courseDollars) {
//     this.Money = money;
//     this.CourseDollars = courseDollars;
//   }

//   dolarEquivalent() {
//     return this.Money / this.CourseDollars;
//   }

//   newCourseDollarsCalculate() {
//     return (this.Money + 100) / this.dolarEquivalent();
//   }

//   addMoney(newMoney) {
//     this.Money += newMoney;
//   }
//   withdrawalMoney(withdrawal) {
//     if (withdrawal > this.Money) {
//       throw new Error("Недостатньо коштів для вилучення!");
//     }
//     this.Money -= withdrawal;
//   }

//   toString() {
//     return `Гривні: ${this.Money}  Долари:${this.dolarEquivalent().toFixed(
//       2
//     )}  Курс:${this.CourseDollars.toFixed(2)}`;
//   }
// }

// try {
//   const newUserMoney = new TMoney(42000, 42);
//   newUserMoney.addMoney(1500);
//   newUserMoney.withdrawalMoney(55);
//   const newCurse = newUserMoney.newCourseDollarsCalculate();
//   document.writeln(`Новий курс: ${newCurse.toFixed(2)} <br>`);
//   newUserMoney.CourseDollars = newCurse;
//   document.writeln(newUserMoney.toString());
// } catch (error) {
//   document.writeln(`Упс щось пішло не так <br>`);
//   document.writeln(error.message);
// }

// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля	▪	назва фірми;
// ▪	дата заснування (рік, місяць);
// ▪	послуги (назва послуги, вартість, термін виконання);
// ▪	адреси філіалів (країна, місто, вулиця, номер будинку);
// методи	▪	визначення кількості років існування фірми;
// ▪	виведення всіх філіалів фірми у вказаному місті;
// ▪	виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

// class DateFoundation {
//   #year;
//   get Year() {
//     return this.#year;
//   }
//   set Year(newYear) {
//     if (newYear < 0) {
//       throw new Error("Рік не може бути від'ємним!");
//     }
//     return (this.#year = newYear);
//   }
//   #month;
//   get Month() {
//     return this.#month;
//   }
//   set Month(newMonth) {
//     if (newMonth < 0 || newMonth > 12) {
//       throw new Error("Номер місяця повинен бути в діапазоні від 1 до 12");
//     }
//     return (this.#month = newMonth);
//   }
//   constructor(initialYear, initialMonth) {
//     this.Year = initialYear;
//     this.Month = initialMonth;
//   }
// }

// class Services {
//   #nameService;
//   get NameService() {
//     return this.#nameService;
//   }
//   set NameService(newName) {
//     if (newName.length === 0) {
//       throw new Error("Назва не може бути порожньою!");
//     }
//     return (this.#nameService = newName);
//   }
//   #cost;
//   get Cost() {
//     return this.#cost;
//   }
//   set Cost(newCost) {
//     if (newCost < 0) {
//       throw new Error("Вартість не може бути від'ємною!");
//     }
//     return (this.#cost = newCost);
//   }
//   #deadline;
//   get Deadline() {
//     return this.#deadline;
//   }
//   set Deadline(newValue) {
//     if (newValue < 0) {
//       throw new Error("Термін виконання не може бути від'ємним!");
//     }
//     return (this.#deadline = newValue);
//   }
//   constructor(initialNameService, initialCost, initialDeadline) {
//     this.NameService = initialNameService;
//     this.Cost = initialCost;
//     this.Deadline = initialDeadline;
//   }
// }

// class BranchAddresses {
//   #country;
//   get Country() {
//     return this.#country;
//   }
//   set Country(newCountry) {
//     if (newCountry.length === 0) {
//       throw new Error("Назва країни не може бути порожньою!");
//     }
//     return (this.#country = newCountry);
//   }
//   #city;
//   get City() {
//     return this.#city;
//   }
//   set City(newCity) {
//     if (newCity.length === 0) {
//       throw new Error("Назва міста не може бути порожнім!");
//     }
//     return (this.#city = newCity);
//   }
//   #street;
//   get Street() {
//     return this.#street;
//   }
//   set Street(newStreet) {
//     if (newStreet.length === 0) {
//       throw new Error("Назва вулиці не може бути порожньою!");
//     }
//     return (this.#street = newStreet);
//   }
//   #houseNumber;
//   get HouseNumber() {
//     return this.#houseNumber;
//   }
//   set HouseNumber(newHouseNumber) {
//     if (newHouseNumber < 0) {
//       throw new Error("Номер дома не може бути порожнім!");
//     }
//     return (this.#houseNumber = newHouseNumber);
//   }
//   constructor(initialCountry, initialCity, initialStreet, initialHouseNumber) {
//     this.Country = initialCountry;
//     this.City = initialCity;
//     this.Street = initialStreet;
//     this.HouseNumber = initialHouseNumber;
//   }
// }

// class Firm {
//   #nameFirm;
//   get NameFirm() {
//     return this.#nameFirm;
//   }
//   set NameFirm(newNameFirm) {
//     if (newNameFirm.length === 0) {
//       throw new Error("Назва фірми не може бути порожньою!");
//     }
//     return (this.#nameFirm = newNameFirm);
//   }
//   constructor(
//     initialNameFirm,
//     initialDateFoundation,
//     initialServices,
//     initialBranchAddresses
//   ) {
//     this.NameFirm = initialNameFirm;
//     this.DateFoundation = initialDateFoundation;
//     this.Services = initialServices;
//     this.BranchAddresses = initialBranchAddresses;
//   }

//   definitionQuantityYearsExistenceFirms() {
//     return 2025 - this.DateFoundation.Year;
//   }

//   withdrawingAllBranchesFirmSpecifiedCity(findCity) {
//     let findCityText = "";
//     for (const branch of this.BranchAddresses) {
//       if (branch.City.toLowerCase() === findCity.toLowerCase()) {
//         findCityText += `країна: ${branch.Country}, місто: ${branch.City}, вулиця: ${branch.Street}, номер будинку: ${branch.HouseNumber} <br>`;
//       }
//     }
//     if (findCityText === "") {
//       throw new Error("Не знайдено такого філіалу у вказаному місті!");
//     }
//     return `Виведення всіх філіалів фірми у вказаному місті: ${findCity}: <br> ${findCityText}`;
//   }
//   servicesPerformedAmountMoneyTime(money, time) {
//     let performadAmountText = "";
//     for (const specified of this.Services) {
//       if (specified.Cost <= money && specified.Deadline <= time) {
//         performadAmountText += `${specified.NameService} - ${specified.Cost} грн, ${specified.Deadline} днів <br>`;
//       }
//     }
//     if (performadAmountText === "") {
//       throw new Error(
//         "Не знайдено послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу"
//       );
//     }
//     return performadAmountText;
//   }
//   toString() {
//     let servisesText = "";
//     for (const serv of this.Services) {
//       servisesText += `${serv.NameService}, ${serv.Cost} грн, ${serv.Deadline} днів <br>`;
//     }
//     let branchText = "";
//     for (const branch of this.BranchAddresses) {
//       branchText += `країна: ${branch.Country}, місто: ${branch.City}, вулиця: ${branch.Street}, номер будинку: ${branch.HouseNumber} <br>`;
//     }
//     return `Назва фірми:${
//       this.NameFirm
//     } <br> Заснована: ${this.definitionQuantityYearsExistenceFirms()} років тому у ${
//       this.DateFoundation.Year
//     } році <br> Послуги: <br> ${servisesText} Адреси філіалів: <br> ${branchText}`;
//   }
// }

// try {
//   const yearEstablishmentTehno = new DateFoundation(2020, 5);
//   const providingServicesTehno = [
//     new Services("Діагностика пристроїв", 800, 1),
//     new Services("Ремонт та заміна комплектуючих", 10000, 14),
//     new Services("Встановлення віндовс та додаткових програм", 7000, 1),
//     new Services("Відновлення даних", 2500, 4),
//     new Services("Чищення та профілактика", 2000, 3),
//     new Services("Ремонт корпусних елементів", 3000, 10),
//   ];
//   const adreseBranchTehno = [
//     new BranchAddresses("Україна", "Київ", "Хрещатик", 54),
//     new BranchAddresses("Україна", "Київ", "Бульвар Тараса Шевченка", 30),
//     new BranchAddresses("Україна", "Київ", "Сагайдачного", 17),
//     new BranchAddresses("Україна", "Запоріжжя", "проспект Соборний", 175),
//     new BranchAddresses("Україна", "Полтава", "Європейська", 83),
//     new BranchAddresses("Україна", "Запоріжжя", "Космічна", 121),
//   ];

//   const tehnoFirm = new Firm(
//     "FastFix",
//     yearEstablishmentTehno,
//     providingServicesTehno,
//     adreseBranchTehno
//   );
//   document.writeln(tehnoFirm.toString());
//   document.writeln(tehnoFirm.withdrawingAllBranchesFirmSpecifiedCity("Київ"));
//   document.writeln(tehnoFirm.servicesPerformedAmountMoneyTime(5000, 3));
// } catch (error) {
//   document.writeln(`Упс щось пішло не так! <br>`);
//   document.writeln(error.message);
// }

// Задача 4. Створити клас TBankomat, який моделює роботу банкомата. Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми.

// class TBankomat {
//   #denom_5;
//   get Denom_5() {
//     return this.#denom_5;
//   }
//   set Denom_5(value) {
//     if (value > 0) {
//       this.#denom_5 = value;
//     } else {
//       this.#denom_5 = 0;
//     }
//   }
//   #denom_10;
//   get Denom_10() {
//     return this.#denom_10;
//   }
//   set Denom_10(value) {
//     if (value > 0) {
//       this.#denom_10 = value;
//     } else {
//       this.#denom_10 = 0;
//     }
//   }
//   #denom_20;
//   get Denom_20() {
//     return this.#denom_20;
//   }
//   set Denom_20(value) {
//     if (value > 0) {
//       this.#denom_20 = value;
//     } else {
//       this.#denom_20 = 0;
//     }
//   }
//   #denom_50;
//   get Denom_50() {
//     return this.#denom_50;
//   }
//   set Denom_50(value) {
//     if (value > 0) {
//       this.#denom_50 = value;
//     } else {
//       this.#denom_50 = 0;
//     }
//   }
//   #denom_100;
//   get Denom_100() {
//     return this.#denom_100;
//   }
//   set Denom_100(value) {
//     if (value > 0) {
//       this.#denom_100 = value;
//     } else {
//       this.#denom_100 = 0;
//     }
//   }
//   #denom_200;
//   get Denom_200() {
//     return this.#denom_200;
//   }
//   set Denom_200(value) {
//     if (value > 0) {
//       this.#denom_200 = value;
//     } else {
//       this.#denom_200 = 0;
//     }
//   }

//   constructor() {
//     this.#denom_5 = Math.floor(Math.random() * 800);
//     this.#denom_10 = Math.floor(Math.random() * 700);
//     this.#denom_20 = Math.floor(Math.random() * 600);
//     this.#denom_50 = Math.floor(Math.random() * 400);
//     this.#denom_100 = Math.floor(Math.random() * 200);
//     this.#denom_200 = Math.floor(Math.random() * 100);
//   }

//   maxSumIssuance() {
//     let maxSum =
//       this.Denom_5 * 5 +
//       this.Denom_10 * 10 +
//       this.Denom_20 * 20 +
//       this.Denom_50 * 50 +
//       this.Denom_100 * 100 +
//       this.Denom_200 * 200;
//     if (maxSum === 0) {
//       throw new Error("В банкоматі немає грошей!");
//     }
//     return maxSum;
//   }

//   findMinSumIssuance() {
//     if (
//       this.Denom_5 === 0 &&
//       this.Denom_10 === 0 &&
//       this.Denom_20 === 0 &&
//       this.Denom_50 === 0 &&
//       this.Denom_100 === 0 &&
//       this.Denom_200 === 0
//     ) {
//       throw new Error("В банкоматі немає жодної купюри!");
//     }
//     if (this.Denom_5 > 0) return 5;
//     if (this.Denom_10 > 0) return 10;
//     if (this.Denom_20 > 0) return 20;
//     if (this.Denom_50 > 0) return 50;
//     if (this.Denom_100 > 0) return 100;
//     if (this.Denom_200 > 0) return 200;
//   }

//   removalSomeAmount(amount) {
//     if (amount > this.maxSumIssuance()) {
//       throw new Error("В банкоматі немає таких коштів!");
//     }
//     let sumAmountRemainder = amount;
//     let publishedBills = { 200: 0, 100: 0, 50: 0, 20: 0, 10: 0, 5: 0 };
//     let denomition = [
//       { bills: 200, count: this.Denom_200 },
//       { bills: 100, count: this.Denom_100 },
//       { bills: 50, count: this.Denom_50 },
//       { bills: 20, count: this.Denom_20 },
//       { bills: 10, count: this.Denom_10 },
//       { bills: 5, count: this.Denom_5 },
//     ];

//     for (const denom of denomition) {
//       let needBill = Math.floor(sumAmountRemainder / denom.bills);
//       let minAvailableIssue = Math.min(needBill, denom.count);
//       sumAmountRemainder -= minAvailableIssue * denom.bills;
//       publishedBills[denom.bills] = minAvailableIssue;

//       if (denom.bills === 200) this.Denom_200 -= minAvailableIssue;
//       if (denom.bills === 100) this.Denom_100 -= minAvailableIssue;
//       if (denom.bills === 50) this.Denom_50 -= minAvailableIssue;
//       if (denom.bills === 20) this.Denom_20 -= minAvailableIssue;
//       if (denom.bills === 10) this.Denom_10 -= minAvailableIssue;
//       if (denom.bills === 5) this.Denom_5 -= minAvailableIssue;
//     }

//     if (sumAmountRemainder > 0) {
//       throw new Error("В банкоматі немає купюр для видачі такої суми!");
//     }

//     let result = `Видано: ${amount} <br> Номінали купюр: `;
//     for (const bill in publishedBills) {
//       if (publishedBills[bill] > 0) {
//         result += `${bill} грн - ${publishedBills[bill]},  `;
//       }
//     }
//     return result;
//   }
//   toString() {
//     return ` Доступна кількість всіх купюр у банку: <br>  
//       200 грн - ${this.Denom_200} <br>
//       100 грн - ${this.Denom_100} <br>
//       50 грн - ${this.Denom_50} <br>
//       20 грн - ${this.Denom_20} <br>
//       10 грн - ${this.Denom_10} <br>
//       5 грн - ${this.Denom_5} <br>
//     `;
//   }
// }

// try {
//   let bankomatDnipro = new TBankomat();
//   document.writeln(bankomatDnipro.toString());

//   document.writeln(`${bankomatDnipro.removalSomeAmount(1995)} <br>`);

//   document.writeln(
//     `Мінімальна сума видачі: ${bankomatDnipro.findMinSumIssuance()} <br>`
//   );

//   document.writeln(
//     `Максимальна сума видачі: ${bankomatDnipro.maxSumIssuance()} <br>`
//   );
//   bankomatDnipro.Denom_5 = 0;
//   bankomatDnipro.Denom_10 = 0;
//   bankomatDnipro.Denom_20 = 44;
//   bankomatDnipro.Denom_50 = 78;
//   bankomatDnipro.Denom_100 = 53;
//   bankomatDnipro.Denom_200 = 92;
//   document.writeln(bankomatDnipro.toString());
//   document.writeln(
//     `Максимальна сума видачі: ${bankomatDnipro.maxSumIssuance()} <br>`
//   );
//   document.writeln(
//     `Мінімальна сума видачі: ${bankomatDnipro.findMinSumIssuance()} <br>`
//   );
// } catch (error) {
//   document.writeln(`Упс щось пішло не так! <br>`);
//   document.writeln(error.message);
// }
