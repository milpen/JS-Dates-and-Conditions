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
    const daysPronunciation = daysLeft;
    if (daysLeft % 100 /10 === 0 && daysLeft % 100 /10 === 5 && daysLeft % 100 /10 === 6 && daysLeft % 100 /10 === 7 && daysLeft % 100 /10 === 8 && daysLeft % 100 /10 === 9) {
        daysPronunciation.textContent = 'дней';
    } else if (daysLeft % 100 /10 === 2 || daysLeft % 100 /10 === 3 || daysLeft % 100 /10 === 4) {
        daysPronunciation.textContent = 'дня';
    } else {
        daysPronunciation.textContent = 'день';
    }

    if (birthdayDate === '') {
        text.textContent = 'Пожалуйста, введите дату рождения';
        text.style.color = 'red';
    } else {
        text.textContent = `До вашего дня рождения осталось ${daysLeft} ${daysPronunciation.textContent}`;
        text.style.color = 'black';
    }
}
button.addEventListener('click', calculate);
