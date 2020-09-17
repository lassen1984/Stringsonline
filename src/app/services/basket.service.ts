import { HttpParams } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketSubject = new Subject();

  basketKey: string = 'basket';

  basketItems: any = [];


  constructor(private http: HttpService) {
    this.populateBasket();
  }



  addToBasket(productId: number) {

    if (this.basketItems.some(e => e.id === productId)) {

      for (let i = 0; i < this.basketItems.length; i++) {

        if (this.basketItems[i].id === productId) {

          this.basketItems[i].quantity++;
          break;
        }
      }
    } else {
      this.basketItems.push({ id: productId, quantity: 1 })
    }

    localStorage.setItem(this.basketKey, JSON.stringify(this.basketItems));
    this.basketSubject.next('Basket changed');

    //TODO: If logged in. Add to backend basket
    //API: Opret linje i kurv - Opdater linje i kurv
  }

  minusQuantity(productId: number) {

    if (this.basketItems.some(e => e.id === productId)) {

      for (let i = 0; i < this.basketItems.length; i++) {

        if (this.basketItems[i].id === productId) {

          if (this.basketItems[i].quantity > 1) {

            this.basketItems[i].quantity--;

            break;

          } else {

            setTimeout(() => {

              this.removeFromBasket(this.basketItems[i].id);
              this.basketSubject.next('Basket changed');



            }, 150);
          }


        }

      }
    }



    localStorage.setItem(this.basketKey, JSON.stringify(this.basketItems));
    this.basketSubject.next('Basket changed');

    //TODO: Tæl en ned

    //API: Opdater linje i kurv
  }

  removeFromBasket(productId: number) {

    let basketItems;
    let index;
    basketItems = JSON.parse(localStorage.getItem(this.basketKey));
    for (let i in basketItems) {
      if (productId == basketItems[i].id) {
        index = i;
      }
    }
    basketItems.splice(index, 1);
    localStorage.setItem(this.basketKey, JSON.stringify(basketItems));
    location.reload();
    //TODO: fjern linje helt

    //API: Slet linje fra kurv
  }

  updateBasketFromLogin() {
    if (this.basketItems.length > 0) {
      this.http.delete('https://api.mediehuset.net/stringsonline/cart')
        .subscribe((res: any) => {

          for (let i = 0; i < this.basketItems.length; i++) {
            let body = new HttpParams()
              .set('product_id', this.basketItems[i].id)
              .set('quantity', this.basketItems[i].quantity)

            this.http.post('https://api.mediehuset.net/stringsonline/cart', body).subscribe((res: any) => {

              let added = res;
            })
          }
        })
    } else {
      this.http.get('https://api.mediehuset.net/stringsonline/cart')
        .subscribe((res: any) => {
          localStorage.setItem(this.basketKey, JSON.stringify(res.cartLines));
        })
    }


    this.http.get('https://api.mediehuset.net/stringsonline/cart').subscribe((res: any) => {
      let items = res;
    })
  }


  populateBasket() {
    let basket = localStorage.getItem(this.basketKey);
    if (basket) {
      this.basketItems = JSON.parse(basket);
    }
  }

  deleteBasket() {
    localStorage.setItem(this.basketKey, '[]');

    location.reload();

  }


  totalBasketQuantity() {
    let quantity = 0;

    for (let i = 0; i < this.basketItems.length; i++) {

      quantity += this.basketItems[i].quantity

    }
    return quantity;
  }

  // jasonParse = JSON.parse(localStorage.getItem(this.basketKey)).length;




  // countItemsInBasket() {

  //   console.log(this.jasonParse);

  // return JSON.parse(localStorage.getItem(this.basketKey)).length
  // }




}
