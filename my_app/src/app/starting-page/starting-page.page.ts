import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-page',
  templateUrl: './starting-page.page.html',
  styleUrls: ['./starting-page.page.scss'],
})
export class StartingPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click(){
    console.log("hello")
  }

}
