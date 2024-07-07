import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';

  @Output("Click") OnClick = new EventEmitter();


  Click(){
    this.OnClick.emit();
  }
}
