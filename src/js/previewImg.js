const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

export function uploadFile(file) {
  if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
    alert('Дозволені тільки зображення!');
    formImage.value = '';
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert('Файл має бути менше 2 мб');
    return;
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
  };
  reader.onerror = function (e) {
    alert('Помилка');
  };
  reader.readAsDataURL(file);
}
