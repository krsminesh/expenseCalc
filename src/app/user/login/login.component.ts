import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';
import { ApiServiceService } from 'src/app/service/api/api-service.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{
  rLViewExpense:string = '/view-expense';

  constructor(
        private SessionService:SessionService, 
        private router: Router,
        private ApiServiceService : ApiServiceService
  ){}

  ngOnInit(): void {
      if(!this.SessionService.checkLoginUserSession()){
        this.router.navigate(['']);
    }
  }

  ngOnDestroy(){
    console.log("Login Component Destroyed")
  }

  /* ng model method starts */

  ngMUserName:string ="Anand";
  ngMPswd:string="123";
  ngMMsg:string="";
  ngMMsgSuccess:string ="";
  //apiUrl = 'https://retoolapi.dev/EYB0o0/expenseCalcLogin';

  ngCheckLogin(){
    if(this.ngMUserName != "" && this.ngMPswd != ""){
      this.ngMMsg = GlobalConstant.loginWaitMsg;
      this.ngMMsgSuccess = "success";
      this.ApiServiceService.getLoginUser(this.ngMUserName, this.ngMPswd).subscribe(
        (user:any)=>{
          console.log(user);
          if(user.length > 0 && user && user[0].username == this.ngMUserName && user[0].password == this.ngMPswd){
            this.SessionService.setLoginUserSession(this.ngMUserName);
            this.SessionService.setLoginUserType(user[0].lgtype);
            this.router.navigate([GlobalConstant.viewExpLink])
          }
          else{
            this.ngMMsgSuccess = "failed";
            this.ngMMsg = GlobalConstant.loginErrMsg;
          }
        },
        (err)=>{
          console.log('login check: '+err)
        }
      );
    }
    else{
      this.ngMMsgSuccess = "failed";
      this.ngMMsg = GlobalConstant.mandatoryTxt;
    }
  }

  /* ng model method ends */


}
