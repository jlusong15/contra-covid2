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

  resetClass(el, newClass) {
    console.log("reset", el , newClass)
    if (el && newClass) {
      console.log("el.getAttribute('class')", )
      if (el.getAttribute('class')) {
        let classes = el.getAttribute('class').split(' '); // get all classes
        console.log("classes", classes)
        classes.forEach((cl) => {
          console.log("remove")
          this.renderer.removeClass(el, cl);
        });
      }
      this.renderer.addClass(el, newClass);
    }
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.currentPath = this.router.url.replace('/','')
      this.currentPath = (this.currentPath == "") ? 'home': this.currentPath;
      this.resetClass(document.body, "body-" + this.currentPath)
      document.documentElement.style.height = "100%"
    })
  }

}
