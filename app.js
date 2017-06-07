const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform= `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getMinutes();
    const hourDegree = ((minute / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
