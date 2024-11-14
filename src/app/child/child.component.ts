import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
@Input() item:any;
// @Output() eventUpdateData = new EventEmitter<string>();
random(){
  this.item = Math.floor(Math.random()*10);
}
}
