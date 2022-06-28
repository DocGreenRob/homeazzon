import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
