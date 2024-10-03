import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppHttpService } from '../common/app-http';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService{

  static url = 'http://localhost:3000/';
  public static apiPaths = {
    signIn:`/signin`,
    getProducts:'/get-products',

  } 
  static async postMethod( apiPath: string, payLoad?: any): Promise<any> {
   
    try {
      await AppHttpService.prototype.post(apiPath,payLoad);
    } catch (error) {
      throw error;
    }
    
  }
  
}
  