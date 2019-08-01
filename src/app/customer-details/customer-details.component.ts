import { Component, OnInit, Input } from '@angular/core';

import { Customer } from '../customer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
 
  @Input() customer: Customer; //부모쪽(customer.component.html)의 13라인의 Customer 타입의 customer를 의미하는 것(부모에서 자식으로 값 전달받은 것)
 
  constructor(private dataService: DataService) {}
 
  ngOnInit() {
  }

  delete(): void { // event handler
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }
 
  private goBack(): void {
    window.location.replace('');
  }

}