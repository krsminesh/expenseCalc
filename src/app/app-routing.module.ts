import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './trip/add-expense/add-expense.component';
import { ViewExpenseComponent } from './trip/view-expense/view-expense.component';
import{LoginComponent} from './user/login/login.component'

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"view-expense",component:ViewExpenseComponent},
  {path:"add-expense", component: AddExpenseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
