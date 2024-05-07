export const RegexpPattern = {
  changePassword: /^[a-zA-Z0-9\W_]+$/,
  submitPassword: /^(?=.*[a-zA-Z]{3,})(?=.*\d)(?=.*[\W_]).+$/,
  numberDotComma: /^[\d,.]*$/,
}