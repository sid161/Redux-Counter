
  
console.log(Redux);
let store = Redux.createStore(reducer);

let counter = store.getState();

let h1 = document.querySelector('h1');
let increment = document.querySelector('.inc');
let decrement = document.querySelector('.dec');
let reset = document.querySelector('.reset');
let step5 = document.querySelector('.step5');
let step10 = document.querySelector('.step10');
let step15 = document.querySelector('.step15');
let max15 = document.querySelector('.max15');
let max100 = document.querySelector('.max100');
let max200 = document.querySelector('.max200');

let countSteps = {
  stepValue: '',
  maxValue: Infinity,
};

h1.innerText = counter;

increment.addEventListener('click', () => {
  console.log('hello');
  store.dispatch({
    type: 'increment',
    step: countSteps.stepValue,
    max: countSteps.maxValue,
  });
});
decrement.addEventListener('click', () => {
  store.dispatch({
    type: 'decrement',
    step: countSteps.stepValue,
    max: countSteps.maxValue,
  });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
});

step5.addEventListener('click', () => {
  countSteps.stepValue = 5;

  if (countSteps.stepValue === 5) {
    step5.classList.add('active');
    step10.classList.remove('active');
    step15.classList.remove('active');
  }
});
step10.addEventListener('click', () => {
  countSteps.stepValue = 10;
  if (countSteps.stepValue === 10) {
    step10.classList.add('active');
    step5.classList.remove('active');
    step15.classList.remove('active');
  }
});
step15.addEventListener('click', () => {
  countSteps.stepValue = 15;
  if (countSteps.stepValue === 15) {
    step15.classList.add('active');
    step10.classList.remove('active');
    step5.classList.remove('active');
  }
});
max15.addEventListener('click', () => {
  countSteps.maxValue = 15;
  if (countSteps.maxValue == 15) {
    max15.classList.add('active');
    max100.classList.remove('active');
    max200.classList.remove('active');
  }
});
max100.addEventListener('click', () => {
  countSteps.maxValue = 100;

  if (countSteps.maxValue === 100) {
    max100.classList.add('active');
    max15.classList.remove('active');
    max200.classList.remove('active');
  }
});
max200.addEventListener('click', () => {
  countSteps.maxValue = 200;
  if (countSteps.maxValue === 200) {
    max200.classList.add('active');
    max100.classList.remove('active');
    max15.classList.remove('active');
  }
});

store.subscribe(() => {
  counter = store.getState();

  h1.innerText = counter;
});
function reducer(state = 0, action) {
  let { type, step } = action;

  switch (type) {
    case 'increment':
      return countSteps.maxValue > state
        ? state + (step || 1)
        : alertMaxm(countSteps.maxValue, state);
    case 'decrement':
      return state - (step || 1);
    case 'reset':
      return 0;
    default:
      return state;
  }
}

function alertMaxm(maxm, state) {
  alert(`you have exceeded maximum value ${maxm}`);
  return state;
}