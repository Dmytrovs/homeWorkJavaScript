// Задача 1. Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
// ----- Властивості ------
// -	назва компанії на час розробки (назву періодично змінюють)
// -	власник компанії
// -	споснсори (масив спонсорів)
//              * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// -	рік випуску
// -	вартість сайту

// let productSites = [
//   {
//     nameCompany: "DevCorp",
//     ownerCompany: "Timothy Donald Cook",
//     sponsors: [
//       {
//         sponsorLastName: "Shevchenko",
//         sponsorName: "Pavlo",
//         sponsorInvestments: 40000,
//       },
//       {
//         sponsorLastName: "Oliver",
//         sponsorName: "Jake",
//         sponsorInvestments: 97000,
//       },
//     ],
//     yearRelease: 2021,
//     costSite: 306500,
//   },
//   {
//     nameCompany: "WebSolutions",
//     ownerCompany: "James Taylor",
//     sponsors: [
//       {
//         sponsorLastName: "Wilson",
//         sponsorName: "Martin",
//         sponsorInvestments: 60000,
//       },
//       {
//         sponsorLastName: "Anderson",
//         sponsorName: "Liam",
//         sponsorInvestments: 560780,
//       },
//     ],
//     yearRelease: 2005,
//     costSite: 760000,
//   },
//   {
//     nameCompany: "ProfiVisits",
//     ownerCompany: "Fasr John",
//     sponsors: [
//       {
//         sponsorLastName: "Monica",
//         sponsorName: "Spets",
//         sponsorInvestments: 60000,
//       },
//       {
//         sponsorLastName: "Georgi",
//         sponsorName: "Chain",
//         sponsorInvestments: 560780,
//       },
//     ],
//     yearRelease: 2024,
//     costSite: 9990,
//   },
// ];

// Знайти:
// 1) загальну вартість усіх сайтів
// const totalCost = productSites.reduce(
//   (prevSum, product) => prevSum + product.costSite,
//   0
// );
// document.writeln(`загальну вартість усіх сайтів: ${totalCost}`);
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.

// const numberSitesMade = productSites.reduce(
//   (prevElement, el) =>
//     el.yearRelease >= 2000 && el.yearRelease <= 2009
//       ? prevElement + 1
//       : prevElement,
//   0
// );
// document.writeln(
//   ` кількість сайтів, що було зроблено між 2000 та 2009 рр. : ${numberSitesMade}`
// );
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000

// const amountInvestmentSitesMore = productSites.reduce((prevCount, site) => {
//   const totalInvest = site.sponsors.reduce((sum, spons) => {
//     return sum + spons.sponsorInvestments;
//   }, 0);
//   if (totalInvest > 100000) {
//     return prevCount + 1;
//   }
//   return prevCount;
// }, 0);

// document.writeln(
//   `Кількість сайтів, де сума спонсорських вкладень була більшою за 100000 : ${amountInvestmentSitesMore}`
// );
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)

// let newListArrSponsors = [];
// for (const company of productSites) {
//   let totalListAllSponsors = company.sponsors.reduce((prevSpon, spon) => {
//     return [...prevSpon, `${spon.sponsorLastName}  ${spon.sponsorName}`];
//   }, []);
//   newListArrSponsors.push(totalListAllSponsors);
// }

// document.writeln(`Загальний список усіх спонсорів: ${newListArrSponsors}`);
// 5) знайти рік, коли прибуток був найбільшим
// const yearMostProfit = productSites.reduce((prevYear, curent) => {
//   if (curent.costSite > prevYear.costSite) {
//     return curent;
//   }
//   return prevYear;
// }).yearRelease;
// document.writeln(yearMostProfit);
// 6) упорядкувати список за спаданням прибутку
// let listDecreaseProfit = productSites.sort((el1, el2) => {
//   if (el1.costSite < el2.costSite) return 1;
//   if (el1.costSite > el2.costSite) return -1;
//   else return 0;
// });
// document.writeln(JSON.stringify(listDecreaseProfit));
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
// const sitesFromCostTo10000 = Object.assign(
//   productSites.filter((costTo) => costTo.costSite < 10000)
// );
// const sitesWithCostMoreThan10000 = Object.assign(
//   productSites.filter((costMore) => costMore.costSite > 10000)
// );

// document.writeln(
//   `Сайти з вартісю до 10000: ${JSON.stringify(
//     sitesFromCostTo10000
//   )} <br> Сайти з вартістю більше 10000: ${JSON.stringify(
//     sitesWithCostMoreThan10000
//   )}`
// );

//====================================================
// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

// let userDate = {
//   day: 1,
//   month: 1,
//   year: 2024,
// };

// function getYearWillThroughMonth({ year }, N) {
//   return year + Math.floor(N / 12);
// }

// document.writeln(
//   `Який буде рік через 30 місяців ${getYearWillThroughMonth(userDate, 30)}`
// );

//========================================================================================================================================================

// Задача 3. Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари)
// (весь текст масиву, що в кінці документу скопіюєте в код).
let dataList = [
  {
    id: 344277463,
    old_price: 1395,
    old_usd_price: "37.70",
    price: 1099,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "29.70",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363766641,
    old_price: 0,
    old_usd_price: "0.00",
    price: 90,
    min_month_price: 0,
    sell_status: "unavailable",
    status: "active",
    usd_price: "2.43",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339273715,
    old_price: 38,
    old_usd_price: "1.03",
    price: 25,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "0.68",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330746665,
    old_price: 3087,
    old_usd_price: "83.43",
    price: 2548,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "68.86",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 344972806,
    old_price: 699,
    old_usd_price: "18.89",
    price: 549,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "14.84",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302299,
    old_price: 0,
    old_usd_price: "0.00",
    price: 8500,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "229.73",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361430565,
    old_price: 3500,
    old_usd_price: "94.59",
    price: 1999,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "54.03",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 14429030,
    old_price: 3339,
    old_usd_price: "90.24",
    price: 2999,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "81.05",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 56340912,
    old_price: 2094,
    old_usd_price: "56.59",
    price: 1776,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "48.00",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 315292225,
    old_price: 1799,
    old_usd_price: "48.62",
    price: 1499,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "40.51",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 28437961,
    old_price: 42999,
    old_usd_price: "1162.14",
    price: 33999,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "918.89",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339896833,
    old_price: 6399,
    old_usd_price: "172.95",
    price: 5899,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "159.43",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 364354149,
    old_price: 1600,
    old_usd_price: "43.24",
    price: 1500,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "40.54",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: {
      id: 106,
      discount_price: 1300,
      title: "ціна по промокоду діє з 22.03 по 28.03",
      price_show_in_site_id: 5151,
      show_in_details: 1,
      show_in_catalog: 1,
      is_description: 1,
      description: "test",
      promo_code: "",
      url_for_image: "https://rozetka.com.ua/ua/promo/allgalaxies/",
      images: "",
      images_mobile: "",
      hide_price: 0,
    },
  },
  {
    id: 363184995,
    old_price: 0,
    old_usd_price: "0.00",
    price: 4499,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "121.59",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 98077846,
    old_price: 0,
    old_usd_price: "0.00",
    price: 3113,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "84.14",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694668,
    old_price: 0,
    old_usd_price: "0.00",
    price: 3000,
    min_month_price: 0,
    sell_status: "unavailable",
    status: "active",
    usd_price: "81.08",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362812029,
    old_price: 0,
    old_usd_price: "0.00",
    price: 21700,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "586.49",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361422708,
    old_price: 4100,
    old_usd_price: "110.81",
    price: 2699,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "72.95",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302257,
    old_price: 0,
    old_usd_price: "0.00",
    price: 8500,
    min_month_price: 0,
    sell_status: "unavailable",
    status: "active",
    usd_price: "229.73",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694498,
    old_price: 0,
    old_usd_price: "0.00",
    price: 2963,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "80.08",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363651273,
    old_price: 5199,
    old_usd_price: "140.51",
    price: 4890,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "132.16",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330747022,
    old_price: 3087,
    old_usd_price: "83.43",
    price: 2606,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "70.43",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362617635,
    old_price: 4872,
    old_usd_price: "131.68",
    price: 2436,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "65.84",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363614439,
    old_price: 5199,
    old_usd_price: "140.51",
    price: 4890,
    min_month_price: 0,
    sell_status: "available",
    status: "active",
    usd_price: "132.16",
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
];
// 1) Загальну вартість (нові ціни - price)
// const totalSumNew = dataList.reduce((prevSum, sum) => prevSum + sum.price, 0);
// document.writeln(`Загальна вартість (нові ціни - price) - ${totalSumNew}`);
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
// const quantityProductPriceDecreased = dataList.reduce(
//   (prevCount, el) => (el.price < el.old_price ? prevCount + 1 : prevCount),
//   0
// );
// document.writeln(
//   `кількість товарів, у яких ціна зменшилась (price < old_price): ${quantityProductPriceDecreased}`
// );
// 3) Товари, які доступні (sell_status:"available")
// const productAvailable = dataList.filter(
//   (status) => status.sell_status === "available"
// );
// document.writeln(
//   `Товари, які доступні (sell_status:"available"): ${JSON.stringify(
//     productAvailable
//   )}`
// );

// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)

// let copyDatalist = dataList
//   .filter((status) => status.sell_status === "available")
//   .map(({ id, price, old_price, usd_price }) => {
//     return {
//       id,
//       price,
//       old_price,
//       usd_price,
//     };
//   });
// document.writeln(
//   `Новий список об”єктів тільки доступних  для продажу товарів, які містять тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price): ${JSON.stringify(
//     copyDatalist
//   )}`
// );
// console.log(copyDatalist);
