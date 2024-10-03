import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';
import { AppConfigService } from '../common/app-config.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']  
})
export class ProductManagementComponent {
  public payload:any={
    productName:"",
    description:"",
    productType:"",
    endDate:null,
    startDate:null,
    productDescription:"",
    document:[],
    isActive:false
  }
  isSubmitted: boolean = false;
  constructor(private messageService: MessageService) { }

  onBasicUploadAuto(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }
  users=[
    { user: 'user1' ,id:1},
    { user: 'user2' ,id:2},
    { user: 'user3' ,id:3}
  ]
  public Users:any=[{
    "id": 1,
    "name": "John",
    "email": "john@example.com",
    "phone": "1234567890",
    "isEdit":true,
    "isUpdate":true,
    "isCreate":true,
    "phase":0

  }];
  validateRequest(): boolean {
    return (
      this.payload.productName.trim() != '' && this.payload.phase.trim() != '' && this.payload.productType.trim() != '' && this.payload.startDate.trim() != '' && this.payload.endDate.trim() != ''
    );
  }
  async submit(){
    if (this.validateRequest()) {
      let requestPayload = {
        userName: this.payload.productName.trim(),
        password: this.payload.productType.trim(),
      };
      try {
        this.isSubmitted = true;
        
        let productsResponse = await AppConfigService.postMethod(AppConfigService.apiPaths.getProducts,{})
        localStorage.setItem("productInfo",productsResponse);
      } catch (error) {
      } finally {
        this.isSubmitted = false;
      }
    }
    return false;
  }
}
