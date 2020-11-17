import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  pageTitle: string = "About Us";
  pageContent: object = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie arcu eu augue scelerisque, quis maximus nunc luctus. Donec tellus enim, rhoncus sed nibh sed, aliquet varius mauris. Ut vestibulum enim lorem. Mauris accumsan arcu lacus, ac laoreet lacus facilisis at. Aenean vulputate molestie erat nec rutrum. Duis iaculis posuere dui, vel egestas urna tempor in. Nullam porttitor enim vitae justo dapibus mattis.",
    "Fusce fringilla lectus sem, id malesuada urna efficitur faucibus. Sed feugiat sit amet orci ac scelerisque. Duis et lorem lectus. Cras non leo posuere, blandit leo a, sodales lacus. Nunc rutrum tincidunt fermentum. In et mattis ante. Proin aliquet sapien quis facilisis luctus.",
    "Aliquam aliquet tempor justo ac eleifend. Sed ac luctus magna. Etiam euismod fermentum nunc, eu tempor ex posuere eu. Aenean mollis sem at pretium euismod. Praesent vitae quam feugiat, dignissim quam nec, ullamcorper purus. Mauris faucibus, sapien in aliquet ornare, orci ex sollicitudin magna, quis finibus erat nulla a lorem. Aenean scelerisque vel mauris vel scelerisque. Curabitur a varius ipsum, ut euismod quam. Proin eget iaculis enim."
  ];
  articles: object = [
      {"title": "Featured article 1", "img": "assets/images/articles/feat1.jpg", "description": "Nunc dictum euismod elit sit amet finibus. Nullam tortor orci, tincidunt nec pellentesque eget, varius id dolor. Vivamus ac mattis odio, vel aliquet enim. Curabitur justo quam, convallis eu purus in, venenatis sodales nisl. Morbi volutpat accumsan lectus, et ultrices metus luctus sed."},
      {"title": "Featured article 2", "img": "assets/images/articles/feat2.jpg", "description": "Nunc dictum euismod elit sit amet finibus. Nullam tortor orci, tincidunt nec pellentesque eget, varius id dolor. Vivamus ac mattis odio, vel aliquet enim. Curabitur justo quam, convallis eu purus in, venenatis sodales nisl. Morbi volutpat accumsan lectus, et ultrices metus luctus sed."},
      {"title": "Featured article 3", "img": "assets/images/articles/feat3.jpg", "description": "Nunc dictum euismod elit sit amet finibus. Nullam tortor orci, tincidunt nec pellentesque eget, varius id dolor. Vivamus ac mattis odio, vel aliquet enim. Curabitur justo quam, convallis eu purus in, venenatis sodales nisl. Morbi volutpat accumsan lectus, et ultrices metus luctus sed."},
  ];
  teamPhoto: string = "assets/images/articles/team.jpg";
  teamDescription: object = [
    "Fusce fringilla lectus sem, id malesuada urna efficitur faucibus. Sed feugiat sit amet orci ac scelerisque. Duis et lorem lectus. Cras non leo posuere, blandit leo a, sodales lacus. Nunc rutrum tincidunt fermentum. In et mattis ante. Proin aliquet sapien quis facilisis luctus.",
    "Aliquam aliquet tempor justo ac eleifend. Sed ac luctus magna. Etiam euismod fermentum nunc, eu tempor ex posuere eu. Aenean mollis sem at pretium euismod. Praesent vitae quam feugiat, dignissim quam nec, ullamcorper purus. Mauris faucibus, sapien in aliquet ornare, orci ex sollicitudin magna, quis finibus erat nulla a lorem. Aenean scelerisque vel mauris vel scelerisque. Curabitur a varius ipsum, ut euismod quam. Proin eget iaculis enim."
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
