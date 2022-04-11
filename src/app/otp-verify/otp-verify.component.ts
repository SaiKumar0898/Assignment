import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }
  showPersonalDetails(){
    this.router.navigateByUrl('/personal-details');

  }

}
