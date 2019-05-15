import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {
  }

showSearch() {
  this.show = true;
}

}