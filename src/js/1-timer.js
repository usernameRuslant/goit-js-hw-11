import { refs } from './refs.js';
import { timer, onClick } from './timer-timer.js';
import { options } from './timer-picker.js';
import flatpickr from 'flatpickr';

flatpickr(refs.inputTimer, options);
refs.timerBtn.addEventListener('click', onClick);
