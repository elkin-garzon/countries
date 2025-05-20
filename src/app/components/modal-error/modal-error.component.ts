import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ObservablesService } from '@services/services/observables/observables.service';

@Component({
  selector: 'eg-modal-error',
  imports: [
    CommonModule 
  ],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.scss'
})
export class ModalErrorComponent {

  public _observables = inject(ObservablesService);

  public closeModal(): void {
    this._observables.passScreenShowLoader(false);
  }
}
