import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
