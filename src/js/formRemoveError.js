export function formRemoveError(input) {
  input.parentElement.classList.remove('validation-error');
  input.classList.remove('validation-error');
}
