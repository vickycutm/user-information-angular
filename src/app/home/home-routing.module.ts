import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'user-information', pathMatch: 'full' },
      { path: 'user-information', component: UserInformationComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
