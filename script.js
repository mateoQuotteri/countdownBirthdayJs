let añoNacimiento = 2004;
let añoActual = new Date().getFullYear()
const fechaNacimiento = new Date("2004-10-15")
const inicioDeAño = new Date(añoActual + '-01-01');
const now = new Date()

const birthday = new Date(añoActual + '-10-15');
let edad = document.getElementById("edad")
function updateCountdown() {
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);


window.onload = function (e) {

  let cumpleañosNumero = añoActual - añoNacimiento;
  edad.textContent = cumpleañosNumero
}

function getTimeOfLife() {
  let daysOfLife = document.getElementById("daysOfLife");
  let minutesOfLife = document.getElementById("minutesOfLife");
  let hoursOfLife = document.getElementById("hoursOfLife");
  let secondsOfLife = document.getElementById("secondsOfLife");
  let life = now - fechaNacimiento ;

  let days = Math.floor(life / (1000 * 60 * 60 * 24));
  let hours = Math.floor((life % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((life % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((life % (1000 * 60)) / 1000);

  daysOfLife.textContent = days.toString().padStart(2, '0');
   hoursOfLife.textContent = hours.toString().padStart(2, '0');;
   minutesOfLife.textContent = minutes.toString().padStart(2, '0');
   secondsOfLife.textContent = seconds.toString().padStart(2, '0');

}

setInterval(getTimeOfLife, 1000);


function getTimePassedOfYear() {
  let daysOfYear = document.getElementById("daysOfYear");
  let minutesOfYear = document.getElementById("minutesOfYear");
  let hoursOfYear = document.getElementById("hoursOfYear");
  let secondsOfYear = document.getElementById("secondsOfYear");

  let tiempoTranscurrido = now - inicioDeAño;
  let days = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
  let hours = Math.floor((tiempoTranscurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000);

  daysOfYear.textContent = days.toString().padStart(2, '0');
   hoursOfYear.textContent = hours.toString().padStart(2, '0');;
   minutesOfYear.textContent = minutes.toString().padStart(2, '0');
   secondsOfYear.textContent = seconds.toString().padStart(2, '0');
}


setInterval(getTimePassedOfYear, 1000);