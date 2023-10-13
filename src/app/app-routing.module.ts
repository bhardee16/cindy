import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { combineLatest } from 'rxjs';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'volunteering', component: VolunteeringComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
