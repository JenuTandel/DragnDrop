import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperForm } from 'ngvs-stepper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements StepperForm {
  submitForm(): void {
    console.log('submitted');
  }
  getFormData(): FormGroup<any> {
    return new FormGroup({});
  }
}
