import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
    },
    {
      path:'about',component:AboutComponent
    },
    {
      path:'works',component:WorksComponent
    },
    {
      path:'contact',component:ContactComponent
    },
    {
      path:'work_details/:Webpage',component:WorkDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
