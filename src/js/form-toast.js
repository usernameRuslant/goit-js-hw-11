import iziToast from 'izitoast';

export function showSuccess(delay) {
  iziToast.success({
    message: ` Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
}

export function showError(delay) {
  iziToast.error({
    message: ` Rejected promise in ${delay}ms`,
    position: 'topRight',
  });
}
