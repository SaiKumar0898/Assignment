import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';
  show:boolean=false;
  constructor(private router: Router) {

  }
  showOTP(){
    this.show=true;
    this.router.navigateByUrl('/otp-verify');
  }
}
