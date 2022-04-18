import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/phone-number",
    pathMatch: 'full'
  },
  { path: 'phone-number', component: PhoneNumberComponent },
  { path: 'otp-verify', component: OtpVerifyComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

