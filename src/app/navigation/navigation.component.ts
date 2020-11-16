import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  navList : object = [];
  test : string = ""

  constructor(
    private router: Router,
    private location: Location
    ) {}

  ngOnInit(): void {
    this.navList = this.router.config.filter(object => {
      if (object.path != 'home') {
        return object
      }
    });
    console.log('configured routes: ', this.navList);
  }

}
