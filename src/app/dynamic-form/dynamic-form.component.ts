import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IFormField } from "../all.interface";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  @Input() dynamicForm: FormGroup;
  @Input() dynamicFormEntity: IFormField[];
  constructor() {}

  ngOnInit() {}
}
