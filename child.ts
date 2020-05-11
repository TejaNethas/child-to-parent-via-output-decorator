import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button class="btn btn-danger m-1" (click)="getFuncEmit()">get Fun Output</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childToParentEventEmitterPassing: string = "Teja from Hyd"

   @Output() getFun: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  getFuncEmit(){
  this.getFun.emit(this.childToParentEventEmitterPassing);
}
}
