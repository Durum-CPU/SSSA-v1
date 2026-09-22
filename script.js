// Birthday countdown

const birthday= document.getElementById("birthday-countdown");

const today = new Date();
const currentYear = today.getFullYear();

let nextBirthday = new Date(currentYear, 6, 26);

if(today>nextBirthday) {
    nextBirthday = new Date(currentYear + 1,6,26);
}

const difference =nextBirthday-today;
const days =Math.ceil(difference/(1000*60*60*24));

birthday.textContent = ` ${days} days until my next birthday! 🎂`;

// Next element



// Next element