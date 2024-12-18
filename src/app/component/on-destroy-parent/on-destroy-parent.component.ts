import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-destroy-parent',
  templateUrl: './on-destroy-parent.component.html',
  styleUrls: ['./on-destroy-parent.component.css']
})
export class OnDestroyParentComponent implements OnInit{

  isDisplay : boolean = false;

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  ngOnInit(): void {
    console.log('PARENT : ONINIT')
  }

}
