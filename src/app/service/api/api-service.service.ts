import { Injectable } from '@angular/core';
import { GlobalConstant } from '../../common/global.constant';
import { HttpClient } from '@angular/common/http'

@Injectable({
  //providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient : HttpClient) { }

  getApi(apiURL:string){
    return this.httpClient.get(apiURL);
  }

  postApi(){

  }

  putApi(){

  }
  deleteApi(){

  }


  getLoginUser(username:string, pswd:string){
    let apiURL = GlobalConstant.userApiURL+'?username='+username+'&password='+pswd;
    console.log(apiURL);
    return this.getApi(apiURL);
  }

  addExpenseApi(){

  }

  getExpenseApi(){
    let apiURL = GlobalConstant.expenseApiURL;
    console.log(apiURL);
    return this.getApi(apiURL);
  }

  getLoginUserExpenseApi(username:string){
    let apiURL = GlobalConstant.expenseApiURL+'?username='+username;
    return this.getApi(apiURL);
  }
}
