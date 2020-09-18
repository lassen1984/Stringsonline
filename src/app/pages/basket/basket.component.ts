import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BasketService } from '../../services/basket.service'



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  products = [];

  constructor(public bs: BasketService, private http: HttpService) {


  }


  async ngOnInit(): Promise<void> {

    for (const iterator of this.bs.basketItems) {
      let data = await <any>this.http.getProductDetails(iterator.id).toPromise();
      data = data.item;
      // console.log(data);
      this.products.push({

        image: data.image.fullpath,
        price: data.price,
        name: data.name,
        stock: data.stock,
        id: data.id,
        quantity: iterator.quantity

      })
    }

    this.bs.basketSubject.subscribe(async status => {
      this.products = [];
      for (const iterator of this.bs.basketItems) {
        let data = await <any>this.http.getProductDetails(iterator.id).toPromise();
        data = data.item;
        // console.log(data);
        this.products.push({

          image: data.image.fullpath,
          price: data.price,
          name: data.name,
          stock: data.stock,
          id: data.id,
          quantity: iterator.quantity

        })
      }
    })

  }







}