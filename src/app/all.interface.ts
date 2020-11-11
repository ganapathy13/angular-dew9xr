export interface IFormField {
  id?: number;
  label?: string;
  labelSecond?: string;
  value?: any;
  type?:
    | "InputText"
    | "ComboBox"
    | "CheckBox"
    | "RadioBox"
    | "TextArea"
    | "DateField"
    | "Hidden"
    | string;
  validations?: FormValidation[];
  disabled?: boolean;
  controlName: string;
  options?: any;
  multiple?: boolean;
}

export interface FormValidation {
  validator:
    | "min"
    | "max"
    | "required"
    | "requiredTrue"
    | "email"
    | "minLength"
    | "maxLength"
    | "pattern"
    | string;
  value: any;
  message: string;
}
