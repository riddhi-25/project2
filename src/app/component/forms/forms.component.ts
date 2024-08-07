import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      primarySkills: this.fb.array([]),
    });
    this.addPrimarySkill();
  }

  addPrimarySkill() {
    const primarySkill = this.fb.group({
      name: [''],
      childSkills: this.fb.array([]),
    });
    (this.skillForm.get('primarySkills') as FormArray).push(primarySkill);
  }

  addChildSkill(index: number) {
    const primarySkills = this.skillForm.get('primarySkills') as FormArray;
    const primarySkill = primarySkills.at(index) as FormGroup;
    const childSkills = this.getChildSkills(primarySkill);

    const childSkill = this.fb.group({
      name: [''],
      childSkills: this.fb.array([]),
    });

    childSkills.push(childSkill);
  }

  getPrimarySkills(): FormGroup[] {
    console.log('Skill Form Value:', this.skillForm.value);
    return (this.skillForm.get('primarySkills') as FormArray).controls as FormGroup[];
  }

  getChildSkills(primarySkill: FormGroup): FormArray {

    return primarySkill.get('childSkills') as FormArray;
  }
}
