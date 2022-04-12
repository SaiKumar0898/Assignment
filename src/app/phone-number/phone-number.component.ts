import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss']
})
export class PhoneNumberComponent implements OnInit {
  show:boolean=false;
  disable:boolean=false;
  phonenum:number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  showOTP(){
    console.log(this.phonenum)
    this.show=true;
    this.router.navigateByUrl('/otp-verify');
  }

}
