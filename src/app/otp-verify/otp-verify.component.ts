import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnyForUntypedForms, FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ AppService} from '../app.service';
@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent implements OnInit {
 event:any;
  public myForm: FormGroup;
  @Input() keyword:string;
  @Input() token_new:string;
  @Output() flag = new EventEmitter<boolean>();
  display: any;
  resendflag: boolean=false;
  value1: string;
  greeting: string;
  greeting1: string;
  routeflag: boolean=false;
  errormessage: string;
  constructor(private router: Router,private formBuilder: FormBuilder,private service:AppService) {
    this.timer(1);
    this.myForm = formBuilder.group({
      otp1: ['', [Validators.required, Validators.maxLength(1)]],
      otp2: ['', [Validators.required, Validators.maxLength(1)]],
      otp3: ['', [Validators.required, Validators.maxLength(1)]],
      otp4: ['', [Validators.required, Validators.maxLength(1)]],
      otp5: ['', [Validators.required, Validators.maxLength(1)]],
      otp6: ['', [Validators.required, Validators.maxLength(1)]],

    })
  } 

  ngOnInit(): void {
  }
  
  showPersonalDetails(){
   
    const otpvalue=this.myForm.value.otp1+""+this.myForm.value.otp2+""+this.myForm.value.otp3+""+this.myForm.value.otp4+""+this.myForm.value.otp5+""+this.myForm.value.otp6;
    const body={
      "msisdn": this.keyword,
        "partner_code":"yabxdemo_in",
        "purpose":"customer_verification",
        "otp":otpvalue,
    }
   
    this.service.verifyotp(body,this.token_new).subscribe(res=>{
      console.log(res);
      // if(res.message=="OTP verified successfully"){
        this.routeflag=true;
        this.flag.emit(this.routeflag);
        this.router.navigateByUrl('/personal-details');
      // }
      // else if(res.message=="Otp is Invalid"){
        // this.errormessage=res.message;
      // }
    })
    console.log(body);
    // this.router.navigateByUrl('/personal-details');

  }
  resendotp(){
    this.myForm.reset();
    this.resendflag=false;
    this.timer(1);
    const body2={
        "msisdn": this.keyword,
        "partner_code":"yabxdemo_in",
        "purpose":"customer_verification",
        // "otp":otpvalue,
    }
    console.log(body2);
    this.service.resendotp(body2,this.token_new).subscribe(res=>{
      console.log(res);
    })

  }
  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 30;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      // else statSec = 30;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (this.display == "00:00") {
        this.resendflag=true;
        clearInterval(timer);
      }
    }, 1000);
  }
}
