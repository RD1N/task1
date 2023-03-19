const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {timerUI(seconds)};
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  let value = inputEl.value;
  inputEl.value = value.replace(/\D/g,'');
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  setInterval(() => {
    seconds--;
    animateTimer(seconds);
  }, 1000);

  inputEl.value = '';
});

let timerUI = (number) => {
  let hours = Math.floor(number / 3600);
  let minuts = Math.floor((number / 60) % 60);
  let seconds = Math.floor(number % 60);
  timerEl.textContent = `${hours}hh:${minuts}mm:${seconds}ss`
}
