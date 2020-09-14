import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  search = this.fb.group({
    search: ['', Validators.required]
  })

  ngOnInit(): void {

  }

  submit() {

    const keyword = this.search.get("search").value;

    location.href = `/searchbar/${keyword}`;

  }

}
