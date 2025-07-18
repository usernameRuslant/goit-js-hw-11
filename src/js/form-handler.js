import { refs } from './refs.js';
import { showSuccess, showError } from './form-toast.js';

export function setupFormHandler() {
  refs.form.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(e) {
  e.preventDefault();

  const delay = Number(refs.delayInput.value);

  let state;

  for (let i = 0; i < refs.stateRadios.length; i++) {
    if (refs.stateRadios[i].checked) {
      state = refs.stateRadios[i].value;
      break;
    }
  }

  createPromise(delay, state).then(showSuccess).catch(showError);
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });
}
