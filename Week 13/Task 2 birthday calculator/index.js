const inputDate = document.getElementById('date');
const text = document.getElementById('text');

function calculate(event) {
    event.preventDefault();
    const birthdayDate = inputDate.value;
    const birthdayDateStamp = Date.parse(birthdayDate);
    const currentTimestamp = Date.now();
    const timeDiff = birthdayDateStamp - currentTimestamp;
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (birthdayDate === '') {
        text.textContent = 'Пожалуйста, введите дату рождения';
        text.style.color = 'red';
    } else {
        text.textContent = `До вашего дня рождения осталось ${daysLeft} ${dayName(daysLeft)}`;
        text.style.color = 'black';
    }
}
function dayName(daysLeft) {
    if (daysLeft ===1) {
        return 'день';
    } else if (daysLeft > 1 && daysLeft < 5) {
        return 'дня';
    } else {
        return 'дней';
    }
}

button.addEventListener('click', calculate);


//ВОПРОС: я хотела сделать вызов нескольких функций через нажатие на кнопку, т.е. код строки 30 и далее был бы таким, как ниже, но этот вариант у меня работать отказался. Что я сделала не так? (хочу понять, т.к. написать несколько функций и объединить их вызов общим действием, например, нажатием на конпку, это жизненно необходимая вещь)):

/*function finalCall(evt) {
    evt.preventDefault();
    calculate();
    dayName();
}
button.addEventListener('click', finalCall); //нажатием на кнопку вызываю финальную функцию, которая запустит функции calculate() и dayName()
*/
