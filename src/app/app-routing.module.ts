import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  { path: 'otp-verify', component: OtpVerifyComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

