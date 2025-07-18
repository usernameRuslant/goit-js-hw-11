export const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stateRadios: document.querySelectorAll('input[name="state"]'),

  inputTimer: document.querySelector('#datetime-picker'),
  timerBtn: document.querySelector('[data-start]'),
  timerFields: {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  },
};
