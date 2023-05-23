export function formAddError(input) {
  input.parentElement.classList.add('validation-error');
  input.classList.add('validation-error');

  const div = document.createElement('div');
  div.classList.add('_show-message');
  input.parentElement.prepend(div);
}
