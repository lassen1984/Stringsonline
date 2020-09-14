import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sidecategory',
  templateUrl: './sidecategory.component.html',
  styleUrls: ['./sidecategory.component.scss']
})
export class SidecategoryComponent implements OnInit {

  products: any;

  constructor(private http: HttpService) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.http.getProducts().toPromise();
    this.products = this.products.productgroups.items
    console.log(this.products);

  }
}
