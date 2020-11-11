import { v4 as uuidv4 } from "uuid";
import { IFormField } from "./all.interface";

export const dynamicFormObject: IFormField[] = [
  {
    id: uuidv4(),
    label: "Name",
    value: "",
    type: "input",
    validations: null,
    disabled: false,
    controlName: "name"
  },
  {
    id: uuidv4(),
    label: "City",
    value: "Tiruchirappalli",
    type: "select",
    validations: null,
    disabled: false,
    controlName: "city",
    options: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"]
  },
  {
    id: uuidv4(),
    label: "Sex",
    value: "Male",
    type: "radio",
    validations: null,
    disabled: false,
    controlName: "sex",
    options: ["Male", "Female", "others"]
  },
  {
    id: uuidv4(),
    label: "Education",
    value: "10",
    type: "checkbox",
    validations: null,
    disabled: false,
    controlName: "education",
    options: [
      {
        id: uuidv4(),
        label: "10",
        value: "",
        type: "checkbox",
        validations: null,
        disabled: false,
        controlName: "10"
      },
      {
        id: uuidv4(),
        label: "12",
        value: "12",
        type: "checkbox",
        validations: null,
        disabled: false,
        controlName: "12"
      }
    ],
    multiple: true
  }
];
