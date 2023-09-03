//Задание 1+
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(1, currentDate);
//console.log(1, currentDate.toLocaleString());//перевод времени UTC в местное

//Задание 2+
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date();
currentYear.setFullYear(2023);
console.log(2, currentYear);
//Задание 3+
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = new Date();
currentMonth.setMonth(7);
console.log(3, currentMonth);

//Задание 4+
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = new Date();
currentDay.setDate(25);
console.log(4, currentDay);

//Задание 5+
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date('2023-03-27');
console.log(5, birthday);
//Задание 6+
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date (2023, 9, 5);
console.log(6, futureDate);
//Задание 7+
// Выведите в консоль разницу в днях между futureDate и currentDate
const difference = Math.floor((futureDate - currentDate) / 1000 / 60 / 60 / 24);
console.log(7, 'Разница: ' + difference + ' дня/дней');
//Задание 8+
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date (2023, 7, 20);
console.log(8, pastDate);
//Задание 9+
// Выведите в консоль разницу в днях между currentDate и pastDate
const dayDifference = Math.floor((currentDate - pastDate) / 1000 / 60 / 60 /24);
console.log(9, dayDifference);

//Задание 10+
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date(2023, 7, 31);
console.log(10, nextWeek);

//Задание 11+
// Выведите в консоль день недели для nextWeek
console.log(11, nextWeek.getDay());
//Задание 12+
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = new Date();
futureYear.setFullYear(2023 + 5);
console.log(12, futureYear);
//Задание 13+
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(2024, 2, 27);
console.log(13, futureDateInFutureYear);
//Задание 14+
// Выведите в консоль разницу в годах между futureYear и текущим годом
const yearDifference = Math.floor((futureYear - currentYear) / 1000 / 60 / 60 / 24 / 365);
console.log(14, yearDifference);
//Задание 15? не поняла задание, сделала, как поняла
// Используя метод Date.parse(), создайте новый объект date15 и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date15 = Date.parse(strDate); //таймстамп = кол-во миллисекунд с 01.01.1970 до даты strDate
const realDate15 = new Date(date15);// переводим таймстамп в дату
console.log(15, date15, realDate15);

//Задание 16+
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const date16 = Date.parse(strDate); //таймстамп = кол-во миллисекунд с 01.01.1970 до даты strDate
console.log(16, date16);
//Задание 17+
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
const correctDate = Date.parse(wrongDate);
if (correctDate === NaN){
console.log('Неправильный формат даты')
} else {
console.log('Правильный формат даты')
}
console.log (17, correctDate);

//Задание 18+
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0){
console.log(18, "Положительное число");
} else {
    console.log(18, "Отрицательное число");
}

//Задание 19+
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
console.log(19, "Четное число");
} else {
console.log(19, "Нечетное число");
}
//Задание 20+
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
console.log(20, "Число, кратное трем");
} else {
console.log(20, "Число не кратно трем");
}
//Задание 21+
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number <= 9) {
console.log(21, "Это - однозначное число");
} else {
console.log(21, "Это - неоднозначное число");
}
//Задание 22+
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

// if (number <= 99 && number >9) {
//   console.log(22, "Это - двузначное число");
// } else {
//   console.log(22, "Это - недвузначное число");
// }

if (number <= 99) {
console.log(22, "Это - двузначное число");
} else if (number > 9){
console.log(22, "Это - недвузначное число");
} else {
console.log(22, "Это - недвузначное число");
}
//Задание 23+
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number >= 0) {
console.log(23, "Переменная является положительным числом или нулем");
} else {
console.log(23, "Переменная не является положительным числом или нулем");
}
//Задание 24+
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0) {
console.log(24, "Переменная кратна 5");
} else if (number % 7 === 0) {
console.log(24, "Переменная кратна 7");
} else {
console.log(24, "Переменная не делится на 5 или 7 без остатка");
}
//Задание 25+
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number <= 0) {
console.log(25, "Переменная является отрицательным числом или нулем");
} else {
console.log(25, "Переменная не является отрицательным числом или нулем");
}

//Задание 26+
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number >0 && number > 99) {
console.log(26, "Переменная является трехзначным положительным числом");
} else {
console.log(26, "Переменная не является трехзначным положительным числом");
}
//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const day = "";
switch(day) {
case '1':
    console.log(27, 'Понедельник');
    break;
case '2':
    console.log(27, 'Вторник');
    break;
case '3':
    console.log(27, 'Среда');
    break;
case '4':
    console.log(27, 'Четверг');
    break;
case '5':
    console.log(27, 'Пятница');
    break;
case '6':
    console.log(27, 'Суббота');
    break;
case '7':
    console.log(27, 'Воскресенье');
    break;
default:
    console.log(27, "Неизвестный день недели");
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
case 'N':
    fullname = "Север";
    console.log(28, fullname);
    break;
case 'S':
    fullname = "Юг";
    console.log(28, fullname);
    break;
case 'E':
    fullname = "Восток";
    console.log(28, fullname);
    break;
case 'W':
    fullname = "Запад";
    console.log(28, fullname);
    break;
}
