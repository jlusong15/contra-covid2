import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  currentPath: string = "";
  isHome: boolean = false

  constructor(private router : Router) { }

  isPageHome() {
    this.router.events.subscribe((res) => {
      this.currentPath = this.router.url.replace('/','')
      this.isHome = (this.currentPath == "" || this.currentPath == "home");
    })
  }

  ngOnInit(): void {
    this.isPageHome()
    console.log("this.Home", this.isHome)
  }

}
