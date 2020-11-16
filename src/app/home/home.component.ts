import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bannerTitle: string = "";
  bannerDetails: object = [];

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this.bannerTitle = "Hello World";
    this.bannerDetails = [
      "ConTra means Contact Tracing.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a augue neque. Integer ullamcorper tempor tempor. Aenean blandit.",
      "To view a sample form using AngularJS, click the button."
    ];
  }

}
