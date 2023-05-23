export function validateEmail(email) {
  return !/^\w+([\.-]?\2+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value);
}