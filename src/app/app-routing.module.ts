import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { WhoIamComponent } from './who-iam/who-iam.component';

const routes: Routes = [
    { path: '#', redirectTo: 'homepage', pathMatch: 'full'},
    { path: '', redirectTo: 'homepage', pathMatch: 'full'},
    { path: 'homepage', component: HomepageComponent},
    {path: 'whoiam', component: WhoIamComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
