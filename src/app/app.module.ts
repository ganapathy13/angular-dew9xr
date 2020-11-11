import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FormUtilsService } from "./form-utils.service";
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, DynamicFormComponent],
  bootstrap: [AppComponent],
  providers: [FormUtilsService]
})
export class AppModule {}
