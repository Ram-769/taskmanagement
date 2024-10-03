import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppHttpService{
  constructor(private http: HttpClient) { }
  public async post( apiPath: string, payLoad?: any): Promise<any> {
   
    try {
      return await this.http.get<any>(apiPath).toPromise();
    } catch (error) {
      throw error;
    }
    
    // try {
    //     this.response = this.http.post(apiURL, payLoad); 
    // } catch (error:any) {
    //   console.error('Error occurred while fetching data:', error.message);
    //   // throw error; // Re-throw the error for further handling
    //   this.response['error']=error.message || ""
    // }
  }
  
}
