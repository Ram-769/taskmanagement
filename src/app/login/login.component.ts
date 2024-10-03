import { Component } from '@angular/core';
import { AppConfigService } from '../common/app-config.service';
import { MasterService } from '../master.service';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public payload: any = {
    userName: '',
    password: '',
  };
  keyFilterPattern: RegExp = /[^\s]/;
  isSubmitted: boolean = false;

  constructor(public ms: MasterService) {}

  ngOnInit() {}

  validateRequest(): boolean {
    return (
      this.payload.userName.trim() != '' && this.payload.password.trim() != ''
    );
  }

  async submit() {
    if (this.validateRequest()) {
      let requestPayload = {
        userName: this.payload.userName.trim(),
        password: this.payload.password.trim(),
      };
      try {
        this.isSubmitted = true;
        let apiType = 'Post';
        let apiPath = 'signin';
        let payload = {
          userName: this.payload.userName,
          Password: this.payload.password,
        };
        let signinResponse = await this.ms.getData(apiType, apiPath, payload);
        localStorage.setItem('userInfo', signinResponse);
      } catch (error) {
      } finally {
        this.isSubmitted = false;
      }
    }
    return false;
  }
}
