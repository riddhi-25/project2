import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './component/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillFormComponent } from './component/skill-form/skill-form.component';
import { ChildComponent } from './component/forms/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SkillFormComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
