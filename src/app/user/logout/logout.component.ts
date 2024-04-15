import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnChanges{
  @Input() text ="";

  constructor(
    private SessionService: SessionService,
    private router : Router
  ){}

  ngOnChanges(){
    console.log("logout component change detected")
  }

  // userLogout(){
  //   this.SessionService.logoutCurrentUser();
  //   this.router.navigate([""])
  // }
}
