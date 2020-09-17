import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  allProducts: any;
  productsToShow: any;
  choosenBrand: string = '';
  brands: any = [];

  productId = this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  async ngOnInit(): Promise<void> {

    this.getProducts(this.productId);
    this.productsToShow = this.allProducts;
    // this.populateBands();
    // this.product = 



    // .toPromise();
    // this.product = this.product.group.products;
    // console.log(this.product);


    this.router.events.subscribe(async res => {


      if (res instanceof NavigationEnd) {
        this.productId = this.route.snapshot.params.id;
        this.getProducts(this.productId);
        // this.populateBands();
        // this.product = await this.http.getProduct(this.productId).toPromise();
        // this.product = this.product.group.products;
      }
    });
  }

  getProducts(groupId: number) {
    this.allProducts = [];
    this.productsToShow = [];
    this.http.getProduct(groupId).subscribe((res: any) => {
      this.allProducts = res.group.products;
      this.populateBands();
      this.productsToShow = this.allProducts;
    })
  }

  populateBands() {
    this.brands = [];
    for (let i = 0; i < this.allProducts.length; i++) {
      if (!this.brands.some(e => e === this.allProducts[i].brand)) {
        this.brands.push(this.allProducts[i].brand)
      }
    }
  }

  chooseProducer(brand: string) {
    // this.choosenBrand = brand;
    this.productsToShow = [];
    if (brand) {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i].brand === brand) {
          this.productsToShow.push(this.allProducts[i]);
        }
      }
    }
    else {
      this.productsToShow = this.allProducts;
    }
  }






}
