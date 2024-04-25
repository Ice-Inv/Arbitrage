export type useTextFieldProps = {
  initValue: string | number;
  regexp?: RegExp;
  errorText?: string;
  checkValidate?: (value: string | number) => boolean;
  isRequired?: boolean;
}
