//variables timer
let minutesDisplay = document.querySelector("#minutes");
let secondsDisplay = document.querySelector("#seconds");
let points = document.querySelector(".points");

const btnPlay = document.querySelector("#btn_play");
const btnStop = document.querySelector("#btn_stop");
const btnUp = document.querySelector("#btn_up");
const btnDown = document.querySelector("#btn_down");

let pauseDisplay;
let newSeconds = Number(secondsDisplay.textContent);

//variables sounds
const soundFlorest = new Audio("./sounds/Floresta.wav");
const soundRain = new Audio("./sounds/Chuva.wav");
const soundCoffee = new Audio("./sounds/Cafeteria.wav");
const soundFire = new Audio("./sounds/Lareira.wav");

const sliderFlorest = document.getElementById("slider_florest");
const sliderRain = document.getElementById("slider_rain");
const sliderCoffee = document.getElementById("slider_coffee");
const sliderFire = document.getElementById("slider_fire");

const range = document.querySelectorAll(".range");

const btnFlorest = document.querySelector(".florest");
const btnRain = document.querySelector(".rain");
const btnCoffee = document.querySelector(".coffee");
const btnFire = document.querySelector(".fire");

const bgFlorest = document.getElementById("bg_florest");
const bgRain = document.getElementById("bg_rain");
const bgCoffee = document.getElementById("bg_coffee");
const bgFire = document.getElementById("bg_fire");

const svgFlorest = document.querySelector(".svg_florest");
const svgRain = document.querySelector(".svg_rain");
const svgCoffee = document.querySelector(".svg_coffee");
const svgFire = document.querySelector(".svg_fire");

let modeOnOff = true;

//variables stylemode
const svgPlay = document.querySelector(".svg_play");
const svgStop = document.querySelector(".svg_stop");
const svgUp = document.querySelector(".svg_up");
const svgDown = document.querySelector(".svg_down");

const btnSun = document.querySelector(".sun");
const btnMoon = document.querySelector(".moon");
const html = document.querySelector("html");
const colorhtml = window.getComputedStyle(html).getPropertyValue("");

//functions timer
function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
  newSeconds = seconds;
};

function oclock() {
  pauseDisplay = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent); 
    let seconds = Number(secondsDisplay.textContent);

    if(minutes <= 0 && seconds <= 0) {
      return
    };

    if(seconds == 0) {
      seconds = 60;
      --minutes
    };

    updateDisplay(minutes, seconds -1);
    oclock();
  }, 1000);
};

//function sounds
const colorStyle = (element, color) => element.style.backgroundColor = color;

const svgStyle = (element, color) => element.style.fill = color;

const svgClass = (element, svgclass) => element.classList.toggle(svgclass);

const settingVolume = (inputType, anyAudio) => {
  inputType.addEventListener("mousemove", function() {
    let settingsAtt = Number(anyAudio.volume = this.value);

    anyAudio.volume = settingsAtt
  });
};

const resetSlider = (any, Number) => any.value = Number; 

const sliderColor = any => {
  any.addEventListener("mousemove", function() {
    let numberSlider = any.value;
    let color = 'linear-gradient(90deg, hsla(240, 6%, 21%, 1)' + 
    (numberSlider) * 100 +'%, hsla(0, 0%, 100%, 1)' + (numberSlider) * 100 + '%)';
  
    any.style.background = color
  });  
};

//events timer
btnUp.onclick = () => {
  let minutes = Number(minutesDisplay.textContent);
  if(minutes > 55) {
    return
  };
  
  updateDisplay(minutes +5, newSeconds);
};

btnDown.onclick = () => {
  let minutes = Number(minutesDisplay.textContent);
  if(minutes < 5) {
    updateDisplay(0, 0);
    return
  };

  updateDisplay(minutes -5, newSeconds);
};

btnPlay.onclick = () => {
  oclock();
};

btnStop.onclick = () => {
  clearTimeout(pauseDisplay);
};

//events stylemode
btnSun.addEventListener("click", () => {
  btnSun.classList.add("hidden");
  btnMoon.classList.remove("hidden");

  html.classList.add("dark");
  
  svgClass(svgFlorest, "svgcolor");
  svgClass(svgRain, "svgcolor");
  svgClass(svgCoffee, "svgcolor");
  svgClass(svgFire, "svgcolor");

  svgClass(svgPlay, "svgcolor");
  svgClass(svgStop, "svgcolor");
  svgClass(svgUp, "svgcolor");
  svgClass(svgDown, "svgcolor");
});

btnMoon.addEventListener("click", () => {
  btnSun.classList.remove("hidden");
  btnMoon.classList.add("hidden");

  html.classList.remove("dark");
  
  svgClass(svgFlorest, "svgcolor");
  svgClass(svgRain, "svgcolor");
  svgClass(svgCoffee, "svgcolor");
  svgClass(svgFire, "svgcolor");

  svgClass(svgPlay, "svgcolor");
  svgClass(svgStop, "svgcolor");
  svgClass(svgUp, "svgcolor");
  svgClass(svgDown, "svgcolor");
});

//events sounds
sliderColor(sliderFlorest);
sliderColor(sliderRain);
sliderColor(sliderCoffee);
sliderColor(sliderFire);

btnFlorest.onclick = () => {
  if(modeOnOff == true) {
    colorStyle(bgFlorest, "#02799D");
    svgStyle(svgFlorest, "#FFFFFF");
    soundFlorest.play();
    settingVolume(sliderFlorest, soundFlorest);
    modeOnOff = false
    soundFlorest.loop = true;
  } else {
    colorStyle(bgFlorest, colorhtml);
    svgStyle(svgFlorest, colorhtml);
    soundFlorest.pause();
    modeOnOff = true;
    resetSlider(sliderFlorest, 0.5);
  };
};

btnRain.onclick = () => {
  if(modeOnOff == true) {
    colorStyle(bgRain, "#02799D");
    svgStyle(svgRain, "#FFFFFF");
    soundRain.play();
    settingVolume(sliderRain, soundRain);
    modeOnOff = false
    soundRain.loop = true;
  } else {
    colorStyle(bgRain, colorhtml);
    svgStyle(svgRain, colorhtml);
    soundRain.pause();
    modeOnOff = true;
    resetSlider(sliderRain, 0.5);
  };
};

btnCoffee.onclick = () => {
  if(modeOnOff == true) {
    colorStyle(bgCoffee, "#02799D");
    svgStyle(svgCoffee, "#FFFFFF");
    soundCoffee.play();
    settingVolume(sliderCoffee, soundCoffee);
    modeOnOff = false
    soundCoffee.loop = true;
  } else {
    colorStyle(bgCoffee, colorhtml);
    svgStyle(svgCoffee, colorhtml);
    soundCoffee.pause();
    modeOnOff = true;
    resetSlider(sliderCoffee, 0.5);
  };
};

btnFire.onclick = () => {
  if(modeOnOff == true) {
    colorStyle(bgFire, "#02799D");
    svgStyle(svgFire, "#FFFFFF");
    soundFire.play();
    settingVolume(sliderFire, soundFire);
    modeOnOff = false
    soundFire.loop = true;
  } else {
    colorStyle(bgFire, colorhtml);
    svgStyle(svgFire, colorhtml);
    soundFire.pause();
    modeOnOff = true;
    resetSlider(sliderFire, 0.5);
  };
};