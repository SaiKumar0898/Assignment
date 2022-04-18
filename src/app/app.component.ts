import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Assignment';
  phone_number: any;
  otpflag: boolean=false;
  personalflag: boolean=false;
  phnflag:boolean=true;
  route: boolean;
  constructor(private router: Router) {

  }
  keyword = "";
  token_new="";
  send(keyword:any){
    this.keyword = keyword;
    this.otpflag=true;
    console.log(this.keyword);
    this.phnflag=false;
    this.personalflag=false;
  }
  sendtoken(token_new:any){
this.token_new=token_new;
console.log(this.token_new)


  }
  output(route:boolean){
    this.route=route;
    this.personalflag=true;
    this.otpflag=false;


  }
  ngOninit(){
    this.router.navigate(['/phone-number'])
  .then(() => {
    window.location.reload();
  });
  }
  
}
