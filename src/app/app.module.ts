import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { TabsModule} from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from  'ng-otp-input';
import { MoveNextByMaxLengthDirective } from './auto-lib.directive';
// import { NgxOtpInputModule } from "ngx-otp-input";

@NgModule({
  declarations: [
    AppComponent,
    OtpVerifyComponent,
    PersonalDetailsComponent,
    PhoneNumberComponent,MoveNextByMaxLengthDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
