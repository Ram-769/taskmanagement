import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private baseUrl = "http://localhost:3000/manage"; // Include the protocol (http://)

  constructor(private http: HttpClient) { }

  public response: any;

  public async getData(apiType: string, apiPath: string, payLoad?: any): Promise<any> {
    const fullUrl = `${this.baseUrl}/${apiPath}`; 

    try {
      if (apiType === "Get") {
        this.response = await this.http.get(fullUrl).toPromise();
      } else if (apiType === "Post") {
        this.response = await this.http.post(fullUrl, payLoad).toPromise(); 
      } else {
        throw new Error('Invalid API type'); 
      }
      console.log(this.response,"this.response")
      return this.response;
    } catch (error:any) {
      console.error('Error occurred while fetching data:', error.message);
      // throw error; // Re-throw the error for further handling
      // this.response['error']=error.message || ""
    }
  }



}