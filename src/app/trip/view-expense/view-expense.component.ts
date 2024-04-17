import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/common/global.constant';
import { ApiServiceService } from 'src/app/service/api/api-service.service';
import { SessionService } from 'src/app/service/session/session.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.scss']
})
export class ViewExpenseComponent implements OnInit, OnDestroy{

  constructor(private SessionService: SessionService,
              private router: Router,
              private ApiServiceService : ApiServiceService
  ){}

  expenses:any;
  currentUserName:any ="";
  myExpense:boolean = false;


  ngOnInit(): void {
    // check user login starts  
    if(!this.SessionService.checkLoginUserSession()){
        this.router.navigate(['']);
    }
    // check user login ends

    if(this.SessionService.getLoginUserSession() != ""){
      this.currentUserName = this.SessionService.getLoginUserSession();
    }
    
    this.seeAllExpense();
  }

  ngOnDestroy(){
    console.log("View Expense Component destoyed")
  }
  seeAllExpense(){
    //load add expenses
    this.myExpense = false;
    this.ApiServiceService.getExpenseApi().subscribe(
      (response:any)=>{
        console.log(response);
        this.expenses = response;
      },
      (err:any) => {
        console.log('view all expense: '+err);
      }
    );
  }
  seeMyExpense(){
    this.ApiServiceService.getLoginUserExpenseApi(this.currentUserName).subscribe(
      (response:any) => {
        this.expenses = response;
        this.myExpense = true;
      },
      (err) => {
        console.log('seeMyExpense: '+err)
      }
    );
  }

  navigateAddExp(){
    this.router.navigate([GlobalConstant.addExpenseRoute]);
  }
  
  deleteExpense(expenseItem:any){

  }
}
