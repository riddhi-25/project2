import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() parentForm!: FormGroup;
  @Input() parentFormArray!: FormArray;

  constructor(private fb: FormBuilder) {}

  addChildSkill(control: AbstractControl) {
    const parentFormGroup = control as FormGroup;
    const childSkills = parentFormGroup.get('childSkills') as FormArray;
    const childSkill = this.fb.group({
      name: [''],
      childSkills: this.fb.array([]),
    });
    childSkills.push(childSkill);
  }

  getChildSkillFormGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  getChildSkillsFormArray(control: AbstractControl): FormArray {
    return (control as FormGroup).get('childSkills') as FormArray;
  }

  hasChildSkills(control: AbstractControl): boolean {
    if (this.isFormGroup(control)) {
      const childSkills = control.get('childSkills') as FormArray;
      return childSkills && childSkills.length > 0;
    }
    return false;
  }

  isFormGroup(control: AbstractControl): control is FormGroup {
    return control instanceof FormGroup;
  }
}