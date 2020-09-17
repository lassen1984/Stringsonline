import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/services/basket.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})

export class ProductdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpService, public basketservice: BasketService) { }

  details: any

  async ngOnInit(): Promise<void> {

    console.log(this.route.snapshot.params.id); //Snapper "id" fra url strengen vha ActivatedRoute

    const id = this.route.snapshot.params.id;

    let product = await <any>this.http.getProductDetails(id).toPromise(); //Brug "any" for at få adgang til array! strict
    // console.log(product);



    this.details = product.item;




  }




}
