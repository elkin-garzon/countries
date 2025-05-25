import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, Signal } from '@angular/core';
import { CardCountryComponent } from '@components/card-country/card-country.component';
import { TableCountriesComponent } from '@components/table-countries/table-countries.component';
import { Country } from '@interfaces/index';
import { CountryService } from '@services/index';
import { StoreService } from '@services/store/store.service';

@Component({
    selector: 'eg-view-countries',
    imports: [CommonModule, CardCountryComponent, TableCountriesComponent],
    templateUrl: './view-countries.component.html'
})
export class ViewCountriesComponent {
    private readonly service = inject(CountryService);
    public readonly store = inject(StoreService);
    public rows: Country[] = [];


    ngOnInit(): void {
        this.getCountries();
    }

    public async getCountries() {
        this.rows = await this.service.getAll();
        this.store.changeListRegions([
            ...new Set(this.rows.map((c: any) => c.region).filter(Boolean))
        ]);
    }
}
