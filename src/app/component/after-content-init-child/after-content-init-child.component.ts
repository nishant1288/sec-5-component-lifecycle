import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-content-init-child',
  templateUrl: './after-content-init-child.component.html',
  styleUrls: ['./after-content-init-child.component.css']
})
export class AfterContentInitChildComponent implements AfterContentInit, AfterContentChecked {

  @ViewChild('childwrappercontent') childContentWrapper!: ElementRef;
  @ContentChild('parentcontentwrapper') parentContentWrapper!: ElementRef;

  // ngDoCheck(): void {
  //   console.log('DO CHECK INVOKED FROM CHILD COMPONENT')
  // }

  ngAfterContentInit(): void {
    console.log('child ngaftercontentint called');
    console.log('child wrapper', this.childContentWrapper);
    console.log('parent wrapper', this.parentContentWrapper);
  }

  ngAfterContentChecked(): void {
    console.log('after content checked called from child')
  }

}
