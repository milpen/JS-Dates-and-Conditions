const inputDate = document.getElementById('date');
const text = document.getElementById('text');

function calculate(event) {
    event.preventDefault();
    const birthdayDate = inputDate.value;
    const birthdayDateStamp = Date.parse(birthdayDate);
    const currentTimestamp = Date.now();
    const timeDiff = birthdayDateStamp - currentTimestamp;
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
// часть для изменения слова день
  //  const daysPronunciation = daysLeft;
/*    if (daysLeft % 10 === 5 && daysLeft % 10 === 6 && daysLeft % 10 === 7 && daysLeft % 10 === 8 && daysLeft % 10 === 9) {
        daysPronunciation.textContent = 'дней';
    } else if (daysLeft % 10 === 2 || daysLeft % 10 === 3 || daysLeft % 10 === 4) {
        daysPronunciation.textContent = 'дня';
    } else {
        daysPronunciation.textContent = 'день';
    }*/

    if (birthdayDate === '') {
        text.textContent = 'Пожалуйста, введите дату рождения';
        text.style.color = 'red';
    } else {
        text.textContent = `До вашего дня рождения осталось ${daysLeft} ВСТАВИТЬ РЕЗУЛЬТАТ ФУНКЦИИ dayName`;
        text.style.color = 'black';
    }
    return daysLeft;
}
function dayName(daysLeft) {
    if (daysLeft > 10 && [11, 12, 13, 14].includes(daysLeft%100)) return 'дней';
    last_num = daysLeft%10;
    if (last_num == 1) return 'день';
    if ([2,3,4].includes(last_num)) return 'дня';
    if ([5,6,7,8,9, 0].includes(last_num)) return 'дней';
}

button.addEventListener('click', calculate);

function finalCall(evt) {
    evt.preventDefault();
    calculate();
    dayName();
}
