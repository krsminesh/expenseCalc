import { AfterContentChecked, AfterContentInit, Component, OnInit, } from '@angular/core';
import { SessionService } from './service/session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'expenseCalc';

  currentUserName:any ="";

  constructor(private SessionService: SessionService){}

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

}
