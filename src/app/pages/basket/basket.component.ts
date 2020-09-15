import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service'
import { ProductCardComponent } from '../../pages/products/product-card/product-card.component'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {



  constructor(public bs: BasketService) {


  }

  ngOnInit(): void {


  }



}