import { Component } from '@angular/core';
import { AppConfigService } from '../common/app-config.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  public payload:any={
    email:"",
    password:"",
    userName:"",
    dispalyName:""
  }
  validateRequest(): boolean {
    return (
      this.payload.email.trim() != '' && this.payload.password.trim() != '' && this.payload.userName.trim() != '' && this.payload.dispalyName.trim() != ''
    );
  }
submit(){
  
}

}
