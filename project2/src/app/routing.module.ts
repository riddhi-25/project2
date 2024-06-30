import { NgModule } from "@angular/core";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { SignupComponent } from "./components/signup/signup.component";

const routes:Routes=[
    {path:'',component:LoginComponent},
    {path:'Welcome',component:WelcomeComponent, canActivate: [AuthGuard]},
    {path:'Todo',component:TodoComponent,canActivate: [AuthGuard]},
    {path:'signup',component:SignupComponent},
    {path:'**',component:NotFoundComponent}
   
  ]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class RoutingModule{

}