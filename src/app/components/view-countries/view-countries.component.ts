import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardCountryComponent } from '@components/card-country/card-country.component';
import { TableCountriesComponent } from '@components/table-countries/table-countries.component';
import { Country } from '@interfaces/index';
import { CountryService } from '@services/index';

@Component({
    selector: 'eg-view-countries',
    imports: [CommonModule, CardCountryComponent, TableCountriesComponent],
    templateUrl: './view-countries.component.html'
})
export class ViewCountriesComponent {
    private readonly service = inject(CountryService);
    public rows: Country[] = [];

    ngOnInit(): void {
        this.getCountries();
    }

    public async getCountries() {
        this.rows = await this.service.getAll();
    }
}
