import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { TaskMangementComponent } from './task-mangement/task-mangement.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'usermanage',component:UserManagementComponent},
  {path:'manageproducts',component:ProductManagementComponent},
  {path:'taskmanagement',component:TaskMangementComponent},
  {path:'task-list',component:TaskListComponent},
  {path:'user-list',component:UserListComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
