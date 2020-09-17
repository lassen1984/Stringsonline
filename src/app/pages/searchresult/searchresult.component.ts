import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {

  products: any;
  keyword: string = this.route.snapshot.params.keyword;


  constructor(private route: ActivatedRoute, private http: HttpService) { }

  async ngOnInit(): Promise<void> {

    let result = await <any>this.http.get(`https://api.mediehuset.net/stringsonline/search/${this.keyword}`).toPromise();
    this.products = result.items



  }




}
