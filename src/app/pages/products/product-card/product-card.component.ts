import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('image') image
  @Input('price') price
  @Input('name') name
  @Input('description_short') description_short
  @Input('stock') stock
  @Input('id') id

  constructor(public basket: BasketService) { }



  ngOnInit(): void {
  }



}
