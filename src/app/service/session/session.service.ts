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
    let chkSessionVar = sessionStorage.getItem(GlobalConstant.userSession);
    if(chkSessionVar != "" && chkSessionVar!= null && chkSessionVar != undefined ){
      return true;
    }
    else{
      return false;
    }
  }

  setLoginUserSession(ssValue:string){
    sessionStorage.setItem(GlobalConstant.userSession, ssValue)
  }

  getLoginUserSession(){
    return sessionStorage.getItem(GlobalConstant.userSession)
  }

  logoutCurrentUser(){
    sessionStorage.removeItem(GlobalConstant.userSession);
  }
  
}
