import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: '', component: SignupComponent },
    {path:'blog' , loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
