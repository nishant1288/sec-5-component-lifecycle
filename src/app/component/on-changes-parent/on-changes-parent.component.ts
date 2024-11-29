import { Component } from '@angular/core';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent {
  parentInputValue : string = 'New Value';

  updateParentInputValue() {
    this.parentInputValue = 'UPDATED BY CLICKING BUTTON'
  }
}
