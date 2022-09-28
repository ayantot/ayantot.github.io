import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SchoolComponent } from './school/school.component';
import { WhoIamComponent } from './who-iam/who-iam.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
    { path: '#', redirectTo: 'homepage', pathMatch: 'full'},
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    { path: 'homepage', component: HomepageComponent},
    {path: 'whoiam', component: WhoIamComponent, pathMatch: 'full'},
    {path: 'school', component: SchoolComponent, pathMatch: 'full'},
    {path: 'work', component: WorkComponent, pathMatch: 'full'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
