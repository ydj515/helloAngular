import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit { // 생성자가 불리고 OnInit 불림

  customers: Customer[];
  selectedCustomer: Customer;

  // 생성자로 인해 Dataservice 의존성 주입
  constructor(private dataService: DataService) {}
 
  getCustomers() {
     this.dataService.getCustomers().then(customers => this.customers = customers); // promise를 넘겨줌. 비동기
  }
 
  ngOnInit(): void { // 생성자가 불리고 OnInit 불림
     this.getCustomers();
  }
 
  onSelect(cust: Customer): void { // event handler
    this.selectedCustomer = cust;
  }
}
