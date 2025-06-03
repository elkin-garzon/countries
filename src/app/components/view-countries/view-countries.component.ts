import { CommonModule } from '@angular/common';
import { Component, computed, effect, HostListener, inject, signal, Signal } from '@angular/core';
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

    constructor() {
        effect(() => {
            this.dataRegion();
        });

        effect(() => {
            this.dataCountry();
        });
    }

    ngOnInit(): void {
        this.getCountries();
    }

    public async getCountries() {
        let rows: Country[] = await this.service.getAll();
        this.store.changeRowsCountries(rows);
        this.store.changeListRegions([...new Set(rows.map((c: any) => c.region).filter(Boolean))]);
        this.store.changeRowsCountries(rows);
    }

    public async dataRegion() {
        if (this.store.txtRegion().length > 0) {
            let rows: Country[] = await this.service.getByRegion(this.store.txtRegion());
            this.store.changeRowsCountries(rows);
        }
    }

    public async dataCountry() {
        if (this.store.txtCountry().length > 0) {
            let rows: Country[] = await this.service.getByName(this.store.txtCountry());
            this.store.changeRowsCountries(rows);
        }
    }

    // private updateDimensions() {
    //     this.width = window.innerWidth;
    //     this.height = window.innerHeight;
    //     if(this.width < 768) {
    //         this.mobile = true;
    //     }else {
    //         this.mobile = false;
    //     }
    // }
}
