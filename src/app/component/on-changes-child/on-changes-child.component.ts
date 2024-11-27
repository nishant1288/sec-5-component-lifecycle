import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrls: ['./on-changes-child.component.css']
})
export class OnChangesChildComponent implements OnChanges {

  @Input() childInputValue : string = ''
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Calling from ngOnchanges hook');
    console.log('simple changes object', changes)
  }

}
