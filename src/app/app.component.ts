import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IFormField } from "./all.interface";
import { dynamicFormObject } from "./form-object";
import { FormUtilsService } from "./form-utils.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public dynamicFormEntity: IFormField[] = dynamicFormObject;
  public dynamicForm: FormGroup;
  constructor(private formUtilsService: FormUtilsService) {}
  ngOnInit() {
    this.dynamicForm = this.formUtilsService.buildFormGroup(
      this.dynamicFormEntity
    );
  }
  submit() {
    console.log(this.dynamicForm);
  }
}
