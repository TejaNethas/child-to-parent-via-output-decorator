import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{childToParentEventEmitterPassing}}
    <app-child (getFun)="reciveMsg($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  childToParentEventEmitterPassing:string;

reciveMsg($event){
  this.childToParentEventEmitterPassing = $event;
}
}
