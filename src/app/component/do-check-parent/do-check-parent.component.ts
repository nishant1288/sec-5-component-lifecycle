import { Component } from '@angular/core';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent {

  parentUser = {
    name : 'Nishant'
  }

  updateUser() {
    this.parentUser.name = 'RAO';
    // this.parentUser = {
    //   name : 'RAO'
    // }
  }

}
