import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service'
import {AuthService} from '../../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {Product} from '../../../../Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {    
    name: string;
    itemDescription: String;
    price: Number;
    inStock: Number;
    products: Product[];

  constructor(    
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
        this.authService.getProduct().subscribe(products => {
      this.products = products;
    });
  }

      addProduct(){
        var newProduct = {
          name: this.name,
          description: this.itemDescription,
          price: this.price,
          inStock: this.inStock
        }
        
        this.authService.addProduct(newProduct)
            .subscribe(product => {
                this.products.push(product);
                this.name = '';
                this.itemDescription = '';
                this.price = null;
                this.inStock = null;
            });
    }

    deleteProduct(id){
      var products = this.products;

      this.authService.deleteProduct(id).subscribe(data => {
        if(data.n == 1){
           for(var i = 0;i < products.length;i++){
            if(products[i]._id == id){
              products.splice(i,1);
            }
          }
        }
      });
    }


}