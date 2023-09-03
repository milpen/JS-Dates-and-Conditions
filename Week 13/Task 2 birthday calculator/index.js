const inputDate = document.getElementById('date');
const text = document.getElementById('text');

function calculate(event) {
    event.preventDefault();
    const birthdayDate = inputDate.value;
    const birthdayDateStamp = Date.parse(birthdayDate);// перевели в таймстемп
    console.log(1, birthdayDateStamp);
    const currentTimestamp = Date.now();// текущий таймстемп
    const timeDiff = birthdayDateStamp - currentTimestamp;   // разница в таймстемпах
    console.log(2, timeDiff);
    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    console.log(3, daysLeft);

    if (birthdayDate === '') {
        text.textContent = 'Пожалуйста, введите дату рождения';
        text.style.color = 'red';
    } else {
        text.textContent = `До вашего дня рождения осталось ${daysLeft} дней`;
        text.style.color = 'black';
    }
}
  // function calculateBMI(event) {
  //   event.preventDefault();
  //   const weight =+weightInput.value;
  //   const height = +heightInput.value / 100;
  //   const doubledHeight = Math.pow(height, 2);
  //   const BMI = weight / doubledHeight;
  //   const finalBMI = BMI.toFixed(2);
  //   result.innerHTML = finalBMI;
    
  //   const p = document.createElement('p');
  
  //   if (result.innerHTML < 18.5) {
  //     p.textContent = "Недостаточный вес"; 
  //   } else if(result.innerHTML >= 18.5 && result.innerHTML < 24.9) {
  //     p.textContent = "Нормальный вес";
  //   } else if(result.innerHTML >=24.9 && result.innerHTML < 29.9) {
  //     p.textContent = "Избыточный вес";
  //   }
  // result.appendChild(p);
  // }
  
  button.addEventListener('click', calculate);
