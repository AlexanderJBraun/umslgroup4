import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {Customer} from '../../../../Customer';
import {AccordionModule} from '../primeng/primeng';     //accordion and accordion tab
import {MenuItem} from '../primeng/primeng';            //api
import {DataTableModule,SharedModule} from 'primeng/primeng';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {    
    username: String;
    firstName: String;
    lastName: String;
    businessName: String;
    passWord: String;
    email: String;
    customers: Customer[];

  constructor(    
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
        this.authService.getCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

      addCustomer(){
        var newCustomer = {
          uname: this.username,
          fName: this.firstName,
          lName: this.lastName,
          bName: this.businessName,
          pWord: this.passWord,
          email: this.email
        }
        
        this.authService.addCustomer(newCustomer)
            .subscribe(customer => {
                this.customers.push(customer);
                this.username = '';
                this.firstName = '';
                this.lastName = '';
                this.businessName = '';
                this.passWord = '';
                this.email = '';
            });

    }

    deleteCustomer(id){
      var customers = this.customers;

      this.authService.deleteCustomer(id).subscribe(data => {
        if(data.n == 1){
           for(var i = 0;i < customers.length;i++){
            if(customers[i]._id == id){
              customers.splice(i,1);
            }
          }
        }
      });
    }



}