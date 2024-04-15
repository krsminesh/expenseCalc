import { AfterContentChecked, Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './service/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'expenseCalc';

  currentUserName:any ="";

  constructor(private SessionService: SessionService,
              private router: Router 
  ){}

  ngOnInit() {
    this.appSessionUserName();
  }
  ngAfterContentChecked() {
    console.log("UUUUU NNNNN: "+this.currentUserName)
    this.appSessionUserName();
  }

  appSessionUserName(){
    if(this.SessionService.getLoginUserSession() != ""){
      this.currentUserName = this.SessionService.getLoginUserSession();
    }
  }

  userLogout(){
    this.SessionService.logoutCurrentUser();
    this.router.navigate([""])
  }

}
