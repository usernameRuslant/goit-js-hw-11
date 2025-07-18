import iziToast from 'izitoast';
import xIcon from '../img/x.svg';

export function showDateError() {
  iziToast.error({
    message: 'Please choose a date in the future',
    position: 'topRight',
    backgroundColor: ' #ef4040;', // ярко-красный фон
    messageColor: '#ffffff', // белый текст
    titleColor: '#ffffff',
    iconUrl: xIcon,

    iconColor: '#fff',
  });
}
