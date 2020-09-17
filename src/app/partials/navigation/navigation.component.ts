import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('mainNav') mainNav;
  @ViewChild('hideme') hideme;

  isItLoggedIn = false;

  constructor(public basketService: BasketService, public userHandler: UserService) { }

  ngOnInit(): void {

  }



  toggleClass() {
    this.mainNav.nativeElement.classList.toggle('menu_cornered');
    this.hideme.nativeElement.classList.toggle('hideInCorner');

  };










}
