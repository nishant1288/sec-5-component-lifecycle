import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-after-content-init-parent',
  templateUrl: './after-content-init-parent.component.html',
  styleUrls: ['./after-content-init-parent.component.css']
})
export class AfterContentInitParentComponent implements AfterContentInit {

  parentData = '';

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.parentData = `Random number from parent : ${random}`;
  }

  ngAfterContentInit(): void {
    console.log('After content init called');
  }

}
