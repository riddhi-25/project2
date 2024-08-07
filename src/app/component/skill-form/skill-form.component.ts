import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css'],
})
export class SkillFormComponent implements OnInit {
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
    (this.skillForm.controls['primarySkills'] as FormArray).push(primarySkill);
  }

  addChildSkill(primarySkillIndex: number) {
    const childSkill = this.fb.group({
      name: [''],
    });
    const primarySkill = (
      this.skillForm.controls['primarySkills'] as FormArray
    ).at(primarySkillIndex);
    (primarySkill.get('childSkills') as FormArray).push(childSkill);
  }

  getPrimarySkills() {
    return (this.skillForm.controls['primarySkills'] as FormArray).controls;
  }

  getChildSkills(primarySkillIndex: number) {
    const primarySkill = (
      this.skillForm.controls['primarySkills'] as FormArray
    ).at(primarySkillIndex);
    return (primarySkill.get('childSkills') as FormArray).controls;
  }
}
