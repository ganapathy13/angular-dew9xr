import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormValidation, IFormField } from "./all.interface";

@Injectable({ providedIn: "root" })
export class FormUtilsService {
  constructor(private formBuilder: FormBuilder) {}

  buildFormGroup(formObjects: IFormField[]) {
    const group = this.formBuilder.group({});
    for (const object of formObjects) {
      if (object.multiple && object.type === "checkbox") {
        group.addControl(
          object.controlName,
          this.formBuilder.array(this.buildFormArray(object.options))
        );
      } else {
        group.addControl(
          object.controlName,
          this.formBuilder.control(
            {
              value: object.value,
              disabled: object.disabled
            },
            this.buildFormControlValitaion(object.validations)
          )
        );
      }
    }
    //console.log(group);
    return group;
  }

  buildFormArray(formObject) {
    const controls = [];
    for (const object of formObject) {
      controls.push(
        this.formBuilder.control(
          {
            value: object.value,
            disabled: object.disabled
          },
          this.buildFormControlValitaion(object.validations)
        )
      );
    }
    //console.log(group);
    return controls;
  }

  buildFormControlValitaion(validations: FormValidation[]) {
    // Setting up form validations
    const controlValidations = [];
    if (validations !== null) {
      validations.forEach(validation => {
        controlValidations.push(
          this.setValidator(validation.validator, validation.value)
        );
      });
    }
    return controlValidations;
  }

  private setValidator(type, value) {
    switch (type) {
      case "min": {
        return Validators.min(value);
      }
      case "max": {
        return Validators.max(value);
      }
      case "required": {
        return Validators.required;
      }
      case "requiredTrue": {
        return Validators.requiredTrue;
      }
      case "email": {
        return Validators.email;
      }
      case "minLength": {
        return Validators.minLength(value);
      }
      case "maxLength": {
        return Validators.maxLength(value);
      }
      case "pattern": {
        return Validators.pattern(value);
      }
      default: {
        return Validators.nullValidator;
      }
    }
  }
}
