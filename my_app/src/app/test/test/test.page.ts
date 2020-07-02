import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
})
export class TestPage implements OnInit {
  constructor(private test_service: TestService) {}

  ngOnInit() {
    this.test_service.get_trains();
  }

  clicked() {
    this.test_service.googleSignin();
  }
  signout() {
    this.test_service.signOut();
  }
}
