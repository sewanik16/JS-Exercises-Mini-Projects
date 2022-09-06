
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')


function clock(){

    // setTimeout(clock,1000) // by setTimeout() method

    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()

    let hourDegree = Math.floor((hour + minute /60) * 30);
    let minuteDegree = minute * 6;
    let secondDegree = (second / 60) * 360;

    // console.log(hourDegree, minuteDegree, secondDegree)
    hourElement.style.transform = `rotate(${hourDegree}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`;
    secondElement.style.transform = `rotate(${secondDegree}deg)`;

}
// clock()     // by setTimeout() method

setInterval(clock,1000);