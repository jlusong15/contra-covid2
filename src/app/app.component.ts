import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentPath: string = "";
  
  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.currentPath = this.router.url.replace('/','')
      this.currentPath = (this.currentPath == "") ? 'home': this.currentPath;
      this.renderer.addClass(document.body, "body-" + this.currentPath);
    })
  }

}
