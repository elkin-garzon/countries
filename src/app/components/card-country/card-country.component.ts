import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Country } from '@interfaces/index';

@Component({
    selector: 'eg-card-country',
    imports: [
        RouterModule,
        CommonModule
    ],
    templateUrl: './card-country.component.html'
})
export class CardCountryComponent {
    public country = input.required<Country>();
    public type = input.required<number>();
}
