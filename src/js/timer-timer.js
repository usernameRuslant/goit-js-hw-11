import { refs } from './refs.js';
import { userSelectedDate } from './timer-picker.js';
import { convertMs, pad } from './timer-convert.js';

export const timer = {
  intervalId: null,

  start() {
    this.intervalId = setInterval(() => {
      const ms = userSelectedDate - Date.now();

      if (ms <= 0) {
        this.stop();
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(ms);

      refs.timerFields.days.textContent = pad(days);
      refs.timerFields.hours.textContent = pad(hours);
      refs.timerFields.minutes.textContent = pad(minutes);
      refs.timerFields.seconds.textContent = pad(seconds);
    }, 1000);

    refs.inputTimer.disabled = true;
    refs.timerBtn.disabled = true;
  },

  stop() {
    clearInterval(this.intervalId);
    refs.inputTimer.disabled = false;

    refs.timerFields.days.textContent = '00';
    refs.timerFields.hours.textContent = '00';
    refs.timerFields.minutes.textContent = '00';
    refs.timerFields.seconds.textContent = '00';
  },
};

export const onClick = () => {
  if (!userSelectedDate) return;
  timer.start();
};
