import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked{
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
