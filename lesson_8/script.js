// DZ --------------------------------------------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).

// function getAverageRating(quantityItem) {
//   let arr = [];
//   for (let i = 0; i < quantityItem; i++) {
//     let ratingStudens = parseInt(prompt(`Яка оцінка предмета № ${i + 1}`));
//     arr.push(ratingStudens);
//   }
//   return arr;
// }

// function totalSum(...sumMedium) {
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < sumMedium.length; i++) {
//     sum += sumMedium[i];
//     count++;
//   }
//   return sum / count;
// }

// function categoryStudent(...estimates) {
//   let rating = "";
//   let minNumber = Math.min(...estimates);
//   switch (minNumber) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       if (minNumber === 2) {
//         rating = "двійочник";
//       } else if (minNumber === 3) {
//         rating = "трійочник";
//       } else if (minNumber === 4) {
//         rating = "хорошист";
//       } else if (minNumber === 5) {
//         rating = "Відміник";
//       } else rating = "Відчислити";
//       break;
//     default:
//       break;
//   }

//   return rating;
// }

// let quantityItem = parseInt(prompt("Cкільки предметів?"));

// let getAverageRatingsShov = getAverageRating(quantityItem);

// let showTotalSum = totalSum(...getAverageRatingsShov);

// let showCategory = categoryStudent(...getAverageRatingsShov);

// document.write(` Середній бал ${showTotalSum}`);
// document.write(` відноситься  до ${showCategory}`);

// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// ●	номер дня, коли кількість відвідувачів була мінімальною;
// ●	номер дня, коли кількість відвідувачів була максимальною;
// ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.

// function getNumberVisitorsStoreWeek(userNumberWeek) {
//   let arr = [];
//   for (let i = 1; i <= 7; i++) {
//     let userNumberPeople = parseInt(
//       prompt(`Введіть кількість відвідувачів за день № ${i}`)
//     );
//     arr.push(userNumberPeople);
//   }
//   return arr;
// }

// // ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;
// function daysPeopleLessTwenty(...daysPeople) {
//   let countDay = [];
//   for (let i = 0; i <= daysPeople.length; i++) {
//     if (daysPeople[i] < 20) {
//       countDay.push(i + 1);
//     }
//   }
//   return countDay;
// }

// // ●	номер дня, коли кількість відвідувачів була мінімальною;
// function dayNumberMinPeople(...people) {
//   let minPeople = Math.min(...people);
//   return minPeople;
// }

// // ●	номер дня, коли кількість відвідувачів була максимальною;
// function dayNumberMaxPeople(...people) {
//   let maxPeople = Math.max(...people);
//   return maxPeople;
// }

// // ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
// function peopleWorksDay(...worksDay) {
//   let sum = 0;
//   for (let i = 0; i < worksDay.length; i++) {
//     if (i >= 0 && i <= 5) {
//       sum += worksDay[i];
//     }
//   }
//   return sum;
// }

// function peopleWekendDay(...wekendDay) {
//   let sum = 0;
//   for (let i = 0; i < wekendDay.length; i++) {
//     if (i >= 5 && i <= 7) {
//       sum += wekendDay[i];
//     }
//   }
//   return sum;
// }

// let totalGetPeopleWeek = getNumberVisitorsStoreWeek();
// const dayPeopleMinTwenty = daysPeopleLessTwenty(...totalGetPeopleWeek);
// const minPeopleDay = dayNumberMinPeople(...totalGetPeopleWeek);
// const maxPeopleDay = dayNumberMaxPeople(...totalGetPeopleWeek);
// const totalWorksDay = peopleWorksDay(...totalGetPeopleWeek);
// const totalWekendksDay = peopleWekendDay(...totalGetPeopleWeek);
// document.write(`Кількість відвідувачів магазину протягом тижня ${totalGetPeopleWeek} <br>
//   Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${dayPeopleMinTwenty} <br>
//   Номер дня, коли кількість відвідувачів була мінімальною: ${minPeopleDay} <br>
//   Номер дня, коли кількість відвідувачів була максимальною: ${maxPeopleDay} <br>
//   Загальну кількість клієнтів у робочі дні ${totalWorksDay} та окремо загальну кількість днів на вихідних ${totalWekendksDay}
//   `);

// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
// function getNamesStudents(peopleNumber) {
//   let arr = [];
//   for (let i = 0; i < peopleNumber; i++) {
//     let peopleName = prompt(
//       `Як вас звати людина в черзі № ${i + 1}?`
//     ).toLowerCase();
//     arr.push(peopleName);
//   }
//   return arr;
// }

// function findTimesMeetsNameIvan(...names) {
//   let count = 0;
//   for (let i = 0; i < names.length; i++) {
//     if (names[i] == "іван") {
//       count++;
//     }
//   }
//   return count;
// }

// let peopleNum = parseInt(prompt("Скільки буде людей?"));

// let nameStudent = getNamesStudents(peopleNum);
// let nameIvan = findTimesMeetsNameIvan(...nameStudent);

// document.write(
//   ` Всі імена ${nameStudent} <br> Скільки разів зустрічається ім’я «Іван» = ${nameIvan}`
// );

// Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
// •	починаються на букву «А»;
// •	перша і остання літери співпадають;
// •	складаються з більше ніш 5 символів;

// function getNamesCar(quantityCar) {
//   let arr = [];
//   for (let i = 0; i < quantityCar; i++) {
//     let numberCar = prompt(`Номер автомобіля №${i + 1}`).toUpperCase();
//     arr.push(numberCar);
//   }
//   return arr;
// }

// function findLetterA(...latterA) {
//   let count = 0;
//   for (let i = 0; i < latterA.length; i++) {
//     if (latterA[i][0] == "А") {
//       count++;
//     }
//   }
//   return count;
// }

// function firstLatterLastCorrect(...lateerCorrect) {
//   let count = 0;
//   for (let i = 0; i < lateerCorrect.length; i++) {
//     if (lateerCorrect[i][0] === lateerCorrect[i].at(-1)) {
//       count++;
//     }
//     return count;
//   }
// }

// function quantitySymbolsMoreFive(...symbols) {
//   let count = 0;
//   for (let i = 0; i < symbols.length; i++) {
//     if (symbols[i].length > 5) {
//       count++;
//     }
//   }
//   return count;
// }

// let numCar = parseInt(prompt("Скільки авто?"));

// let nameCar = getNamesCar(numCar);
// let latterToA = findLetterA(...nameCar);

// let correctLaterCar = firstLatterLastCorrect(...nameCar);
// let moreSymbol = quantitySymbolsMoreFive(...nameCar);
// document.write(`номера ${nameCar} <br>
//    К-сть авто, яка починаються на букву «А» ${latterToA} <br>
//    перша і остання літери співпадають ${correctLaterCar} <br>
//    Номер складаються з більше ніш 5 символів ${moreSymbol}
//    `);

// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

// function getSequenceGradesStudent(userSubj) {
//   let arr = [];
//   for (let i = 0; i < userSubj; i++) {
//     let evaluationObjects = parseInt(prompt(`Яка оцінка предмета №${i + 1}`));
//     arr.push(evaluationObjects);
//   }
//   return arr;
// }

// function averageCoupleTho(...gradesStudent) {
//   let count = 0;
//   for (let i = 0; i < gradesStudent.length; i++) {
//     if (gradesStudent[i] >= 2 && gradesStudent[i] < 3) {
//       count++;
//     }
//   }
//   return count;
// }

// function averageCoupleFors(...gradesStudent) {
//   let count = 0;
//   for (let i = 0; i < gradesStudent.length; i++) {
//     if (gradesStudent[i] >= 3 && gradesStudent[i] < 5) {
//       count++;
//     }
//   }
//   return count;
// }

// function averageCoupleFives(...gradesStudent) {
//   let count = 0;
//   for (let i = 0; i < gradesStudent.length; i++) {
//     if (gradesStudent[i] === 5) {
//       count++;
//     }
//   }
//   return count;
// }

// function numberGradesLowerMedium(...gradesStudent) {
//   let count = 0;
//   let sum = 0;
//   let countLow = 0;
//   for (let i = 0; i < gradesStudent.length; i++) {
//     sum += gradesStudent[i];
//     count++;
//   }
//   let mediumSum = sum / count;
//   for (let k = 0; k < gradesStudent.length; k++) {
//     if (mediumSum > gradesStudent[k]) {
//       countLow++;
//     }
//   }
//   return countLow;
// }

// let userSubjects = parseInt(prompt("Скільки буде предметів?"));

// let getAverageRatingStudent = getSequenceGradesStudent(userSubjects);
// let coupleTho = averageCoupleTho(...getAverageRatingStudent);
// let coupleFors = averageCoupleFors(...getAverageRatingStudent);
// let coupleFives = averageCoupleFives(...getAverageRatingStudent);
// let sumLowerMedium = numberGradesLowerMedium(...getAverageRatingStudent);
// document.write(`Послідовність оцінок учня ${getAverageRatingStudent} <br>
//   1)	двійок: ${coupleTho}<br>
//   2)	кількість хороших оцінок добре: ${coupleFors}<br>
//   3)	кількість хороших оцінок відмінно: ${coupleFives}<br>
//   4)	кількість оцінок, які нижче середнього: ${sumLowerMedium}<br>
//   `);

//Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

// let userMoney = parseInt(prompt("Скільки у вас грошей?"));

// function productUsersPermit(userMoney) {
//   let arrMoney = [];
//   let arrProduct = [];
//   let productsPrices = [1000, 20, 31];
//   let productsTitles = ["cheese", "juice", "bread"];
//   for (let i = 0; i < productsPrices.length; i++) {
//     if (productsPrices[i] <= userMoney) {
//       arrMoney.push(i);
//       for (let k = 0; k < productsTitles.length; k++) {
//         if (k == arrMoney) {
//           arrProduct.push(productsTitles[k]);
//         }
//       }
//     }
//   }
//   return arrProduct;
// }

// let permitUsers = productUsersPermit(userMoney);

// document.write(`може собі дозволити користувач ${permitUsers}`);
