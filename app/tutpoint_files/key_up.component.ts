import {Component} from 'angular2/core';
@Component({
  selector: 'my-key',
  template: `<h2>Key Up Event Example</h2>
    <input (keyup)="onKey($event)">
    <p>{{val}}</p>
  `
})
export class KeyUpComponent {
  val='';
  onKey(event:KeyboardEvent) {
    // console.log(event.target.value);
    // event is a large objet
    this.val += (event.target).value + ' | ';
  }
}