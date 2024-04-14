import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(ssKey:string, ssValue:string){
    sessionStorage.setItem(ssKey, ssValue)
  }
  
}
