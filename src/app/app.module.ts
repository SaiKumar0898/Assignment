import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerifyComponent,
    PersonalDetailsComponent,
    PhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
