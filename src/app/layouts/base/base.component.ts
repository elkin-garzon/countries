import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalErrorComponent } from '@components/modal-error/modal-error.component';

@Component({
  selector: 'eg-base',
  imports: [
    RouterOutlet,
    ModalErrorComponent
  ],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss'
})
export class BaseComponent {

}
