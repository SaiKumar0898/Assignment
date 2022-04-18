import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  lmsStandardHeaders: new HttpHeaders({
    "partner-code": "yabxdemo_in",
    "os": "web_application",
    "package-id": "f88723dc39b92ee5"
  })
};
const API_URL = 'https://yabxdemo-in.yabx.co';
const TOKEN_URL = API_URL + '/apis/v1/auth/token';
const auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIiwiZXhwIjoxNjQ5ODQyNjMyfQ.R-ujAgNDx_kYMQV4JWY0uPMgK2RU5LLTxD_ShcMR15w'
const secret =
{
  "client_secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIn0.asTHljqR3Gr9EgkMpkrDskbgidJw6B3KFpcz0du_PUs"
}
const lmsStandardHeaders = {
  "partner-code": "yabxdemo_in",
  "os": "web_application",
  "package-id": "f88723dc39b92ee5",
}

const body =
{
  "client_secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJ5YWJ4ZGVtb19pbiIsIm9zIjoid2ViX2FwcGxpY2F0aW9uIiwicGFja2FnZV9pZCI6ImY4ODcyM2RjMzliOTJlZTUiLCJjbGllbnRfa2V5IjoiYzBhNDliMjctNGI5Yi00NjU4LTk2YTMtOGU1YzQ2YTg2YzQwIn0.asTHljqR3Gr9EgkMpkrDskbgidJw6B3KFpcz0du_PUs"
}
const requestHeaders = {
  header: new Headers(lmsStandardHeaders),
};

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: Subject<string> = new Subject();
  data1: Subject<string> = new Subject();
  constructor(private http: HttpClient) { }
  //   https://yabxdemo-in.yabx.co/apis/v1/auth/token
  public get(): Observable<any> {
    return this.http.post(TOKEN_URL, body, { 'headers': lmsStandardHeaders }).pipe(map(res => { return res }));
  }
  sendOtp(auth_token1: any, phonenum: any,): Observable<any> {
    const TOKEN_URL = API_URL + '/apis/v1/otps/generate';
    const body =
    {
      "msisdn": phonenum,
      "partner_code": "yabxdemo_in",
      "purpose": "customer_verification"
    }
    const lmsStandardHeaders1 = {
      "partner-code": "yabxdemo_in",
      "os": "web_application",
      "package-id": "f88723dc39b92ee5",
      "Authorization": `Bearer ${auth_token1}`

    }
    // console.log(auth_token1,phonenum)
    return this.http.post(TOKEN_URL, body, { 'headers': lmsStandardHeaders1 }).pipe(map(res => { return res }));
  }
  verifyotp(body: any, auth_token_otp: any): Observable<any> {
    const TOKEN_URL = API_URL + '/apis/v1/otps/authenciate_otp';

    const lmsStandardHeaders1 = {
      "partner-code": "yabxdemo_in",
      "os": "web_application",
      "package-id": "f88723dc39b92ee5",
      "Authorization": `Bearer ${auth_token_otp}`

    }
    return this.http.post(TOKEN_URL, body, { 'headers': lmsStandardHeaders1 }).pipe(map(res => { return res }));
  }
  resendotp(body: any, auth_token_otp: any): Observable<any> {
    const TOKEN_URL = API_URL + '/apis/v1/otps/resend';

    const lmsStandardHeaders1 = {
      "partner-code": "yabxdemo_in",
      "os": "web_application",
      "package-id": "f88723dc39b92ee5",
      "Authorization": `Bearer ${auth_token_otp}`

    }
    return this.http.post(TOKEN_URL, body, { 'headers': lmsStandardHeaders1 }).pipe(map(res => { return res }));
  }

}
