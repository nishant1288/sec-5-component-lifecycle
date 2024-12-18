import { AfterContentChecked, AfterContentInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-after-content-init-parent',
  templateUrl: './after-content-init-parent.component.html',
  styleUrls: ['./after-content-init-parent.component.css']
})
export class AfterContentInitParentComponent implements DoCheck {

  parentData = '';

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.parentData = `Random number from parent : ${random}`;
  }

  // ngAfterContentInit(): void {
  //   console.log('After content init called');
  // }
  ngDoCheck(): void {
    console.log('Do check from parent is called')
  }
  ngAfterContentChecked(): void {
    console.log('After content checked called');
  }

}
