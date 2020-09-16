import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket-card',
  templateUrl: './basket-card.component.html',
  styleUrls: ['./basket-card.component.scss']
})
export class BasketCardComponent implements OnInit {

  @Input('image') image
  @Input('price') price
  @Input('name') name
  @Input('description_short') description_short
  @Input('stock') stock
  @Input('id') id
  @Input('quantity') quantity

  constructor(public bs: BasketService) { }

  ngOnInit(): void {
  }

}
