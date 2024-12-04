import { Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-do-check-child',
  templateUrl: './do-check-child.component.html',
  styleUrls: ['./do-check-child.component.css']
})
export class DoCheckChildComponent implements DoCheck {

  @Input() childUser : any;

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges from child called', changes)
  // }

  private previousValue : string | undefined;

  ngDoCheck(): void {
    if(this.childUser.name != this.previousValue )
    {
      this.previousValue = this.childUser.name;
      console.log('ngDoCheck is called form child', this.childUser);
    }
  }
}
