import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TaskMangementComponent } from './task-mangement/task-mangement.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { MasterService } from './master.service';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskMangementComponent,
    UserManagementComponent,
    ProductManagementComponent,
    PagenotfoundComponent,
    UserListComponent,
    ProductListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [
    provideHttpClient(withFetch()),
    MessageService,
   MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
