import { checkInputs } from './checkInputs';
import { uploadFile } from './previewImg';

export const formValidate = () => {
  document.addEventListener('DOMContentLoaded', function () {
    document.forms.form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();

      let error = checkInputs(form);

      let formData = new FormData(document.forms.form);
      formData.append('image', formImage.files[0]);

      if (error === 0) {
        form.classList.add('_sending');

        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData,
        });
        if (response.ok || form.classList.contains('_sending')) {
          setTimeout(() => {
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
          }, 3000);
        } else {
          alert('Помилка');
          form.classList.remove('_sending');
        }
      } else {
        alert('Заповніть поля!');
      }
    }

    formImage.addEventListener('change', () => {
      uploadFile(formImage.files[0]);
    });
  });
};
