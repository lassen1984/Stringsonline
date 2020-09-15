import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketKey: string = 'basket';

  basketItems: any = {};

  constructor() {
    this.getBasket();
  }

  addToBasket(productId: number) {
    // debugger;
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

            }, 150);
          }


        }

      }
    }



    localStorage.setItem(this.basketKey, JSON.stringify(this.basketItems));
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

  getBasket() {
    //TODO: Check if logged in -> Get basket from backend and add to localstorage

    let basket = localStorage.getItem(this.basketKey);

    if (basket) {
      this.basketItems = JSON.parse(basket);
    }

    // API - Hent kurv
  }

  deleteBasket() {
    localStorage.setItem(this.basketKey, '[]');

    location.reload();

  }




}
