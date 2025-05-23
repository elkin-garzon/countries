import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '@interfaces/index';

@Component({
    selector: 'eg-table-countries',
    imports: [
      RouterModule
    ],
    templateUrl: './table-countries.component.html'
})
export class TableCountriesComponent {
    public countries = input.required<Country[]>();
}
