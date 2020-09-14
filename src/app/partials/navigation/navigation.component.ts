import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('mainNav') mainNav;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.mainNav.nativeElement.classList.toggle('menu_cornered');
  }

}
