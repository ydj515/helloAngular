import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // 비동기 처리. Promise or Observable
 
import { Customer } from './customer'; // model

@Injectable({ // angular 모델이므로 @가 붙는다
  providedIn: 'root'
})  
export class DataService {

  private baseUrl = 'api/customers';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
 
  constructor(private http: Http) {}
 
  // Get all customers
  getCustomers(): Promise<Customer[]> { // promise형으로 return

    return this.http.get(this.baseUrl)
      .toPromise() // promise로 변경해줌
      .then(response => response.json() as Customer[]) // 성공시 callback function
      .catch(this.handleError);
  }
 
  getCustomersByLastName(lastName: string): Promise<Customer[]> {
    const url= `${this.baseUrl}/${lastName}`; // back tick. esc 밑키. string 마냥 +로 안묶어도 된다는 장점이 있다

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Customer[])
      .catch(this.handleError);
  }
  
  create(customer: Customer): Promise<Customer> {
   
    return this.http
      .post(this.baseUrl, JSON.stringify(customer), {headers : this.headers}) // stringify : Customer 객체를 json 형태로 변환(serialization)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  delete(id: number): Promise<void> {
   const url= `${this.baseUrl}/${id}`;

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error:', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
