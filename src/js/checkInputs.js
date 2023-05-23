import { validateEmail } from './validateEmail';
import { formAddError } from './formAddError';
import { formRemoveError } from './formRemoveError';

export function checkInputs() {
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i];
    formRemoveError(input);

    if (input.classList.contains('_name')) {
      if (input.value === '') {
        formAddError(input);
        error++;
      }
    }
    if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
      formAddError(input);
      error++;
    }
    if (input.classList.contains('_email')) {
      if (validateEmail(input)) {
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}
