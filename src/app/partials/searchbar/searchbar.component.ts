import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {


  constructor(private router: Router, private fb: FormBuilder, private http: HttpService) { }

  search = this.fb.group({

    search: ['', Validators.required]

  })

  ngOnInit(): void { }


  async submit() {

    const keyword = this.search.get("search").value;

    console.log(keyword);


    this.router.navigateByUrl(`/resultater/${keyword}`);

  }

}
