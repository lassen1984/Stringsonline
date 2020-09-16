import { Component, OnInit, ViewChild } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('mainNav') mainNav;

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.mainNav.nativeElement.classList.toggle('menu_cornered');
  }




}
