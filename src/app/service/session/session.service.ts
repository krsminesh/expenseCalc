import { Injectable } from '@angular/core';
import { GlobalConstant } from 'src/app/common/global.constant';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  checkSession(){

  }
  checkLoginUserSession(){

  }
  setLoginUserSession(ssValue:string){
    sessionStorage.setItem(GlobalConstant.userSession, ssValue)
  }

  getLoginUserSession(){
    sessionStorage.getItem(GlobalConstant.userSession)
  }
  
}
