import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-after-content-init-child',
  templateUrl: './after-content-init-child.component.html',
  styleUrls: ['./after-content-init-child.component.css']
})
export class AfterContentInitChildComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('DO CHECK INVOKED FROM CHILD COMPONENT')
  }

}
