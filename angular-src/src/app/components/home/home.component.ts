import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Product} from '../../../../Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products: Product[];


  constructor(private authService:AuthService) { 
    this.authService.getProduct().subscribe(products => {
      this.products = products;
    });
    }

  ngOnInit() {
  }

}
