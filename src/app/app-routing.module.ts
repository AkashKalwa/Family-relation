import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { GallaryComponent } from './gallary/gallary.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'members',component:MembersComponent},
  {path:'gallery',component:GallaryComponent},
  {path:'details',component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
