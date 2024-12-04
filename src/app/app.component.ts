import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sec-5-component-lifecycle';

  constructor() {
    // console.log('Constructor is called')
  }

  ngOnInit() {
    // console.log('ngOnInit is called')
  }
}
