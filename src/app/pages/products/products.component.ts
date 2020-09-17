import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: any;

  productId = this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.product = await this.http.getProduct(this.productId).toPromise();
    this.product = this.product.group.products;
    // console.log(this.product);


    this.router.events.subscribe(async res => {


      if (res instanceof NavigationEnd) {
        this.productId = this.route.snapshot.params.id;
        this.product = await this.http.getProduct(this.productId).toPromise();
        this.product = this.product.group.products;
      }
    });
  }

}
