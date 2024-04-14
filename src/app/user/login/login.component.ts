import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  rLViewExpense:string = '/view-expense';

  constructor(private SessionService:SessionService, private router: Router){}

  /* ng model method starts */

  ngMUserName:string ="";
  ngMPswd:string="";
  ngMMsg:string="";
  ngMMsgSuccess:string ="";
  apiUrl = 'https://retoolapi.dev/EYB0o0/expenseCalcLogin';

  ngCheckLogin(){
    if(this.ngMUserName != "" && this.ngMPswd != ""){
      this.ngMMsg = "Success";
      this.ngMMsgSuccess = "success";
      this.SessionService.setSession("CurrentLoginUser", this.ngMUserName);
      this.router.navigate(['/view-expense']);
    }
    else{
      this.ngMMsg = "Error in user name or password"
    }
  }

  /* ng model method ends */


}
