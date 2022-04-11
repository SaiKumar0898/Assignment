import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { TabsModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerifyComponent,
    PersonalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // TabsModule.forRoot(),
    // MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
