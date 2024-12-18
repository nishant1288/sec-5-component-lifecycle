import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-destroy-child',
  templateUrl: './on-destroy-child.component.html',
  styleUrls: ['./on-destroy-child.component.css']
})
export class OnDestroyChildComponent implements OnInit, OnDestroy{

    ngOnInit(): void {
      console.log('CHILD : ON INIT');
    }

    ngOnDestroy(): void {
      console.log('CHILD : ONDESTROY')
    }
}
