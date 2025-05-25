import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '@components/filter/filter.component';
import { Country, DataForm } from '@interfaces/index';
import { CountryService } from '../../services/country/country.service';
import { ViewCountriesComponent } from '@components/view-countries/view-countries.component';
import { StoreService } from '@services/store/store.service';

@Component({
    selector: 'eg-list',
    imports: [RouterModule, FilterComponent, ViewCountriesComponent],
    templateUrl: './list.component.html'
})
export class ListComponent {

    ngOnInit(): void {
    }


    // public async dataCountry() {
    //     let data: string = this.store.txtCountry();
	// 	console.log(data);
    //     if (data.length > 0) {
	// 		debugger
    //         this.rows = [];
    //         this.rows = await this.service.getByName(data);
	// 		debugger
    //     }
    // }

    // public async dataRegion(data: string) {
    //     if (data.length > 0) {
    //         this.rows = [];
    //         this.rows = await this.service.getByRegion(data);
    //     }
    // }
}
