import { refs } from './refs.js';
import { showDateError } from './timer-toast.js';

export let userSelectedDate = null;

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      showDateError();
      refs.timerBtn.disabled = true;
      userSelectedDate = null;
    } else {
      refs.timerBtn.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};
