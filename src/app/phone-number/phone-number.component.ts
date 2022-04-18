import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import{ AppService} from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {
  @Output() emitter = new EventEmitter<string>();
  @Output() token_new = new EventEmitter<string>();

  public myForm: FormGroup;
  disable:boolean=false;
  token:any;
  constructor(private router: Router,private service:AppService,private formBuilder: FormBuilder) { 
    this.myForm = formBuilder.group({
      mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }
  get m(){
    return this.myForm.controls;
  }
  

  ngOnInit(): void {
    this.service.get().subscribe(res=>{
      this.token=res.access_token
      console.log(this.token);
    })
  }
  
  emit(keyword :any){
    // console.log(keyword);

}
  showOTP(){
    console.log(this.myForm.value.mob)
    this.token_new.emit(this.token);
    this.emitter.emit(this.myForm.value.mob);
    this.service.data.next(this.token);
    this.service.data1.next(this.myForm.value.mob);
    this.service.sendOtp(this.token,this.myForm.value.mob).subscribe(res=>{
      console.log(res);
    
    if(res.message=="OTP sent"){
    this.router.navigateByUrl('/otp-verify');
    }
  })
  }

}
