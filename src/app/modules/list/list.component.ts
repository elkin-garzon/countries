import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '@components/filter/filter.component';
import { Country, DataForm } from '@interfaces/index';
import { CountryService } from '../../services/country/country.service';
import { ViewCountriesComponent } from '@components/view-countries/view-countries.component';

@Component({
	selector: 'eg-list',
	imports: [
		RouterModule,
		ViewCountriesComponent
	],
	templateUrl: './list.component.html'
})
export class ListComponent {

	private readonly service = inject(CountryService);
	public rows: Country[] = [];
	public regions: string[] = [];

	ngOnInit(): void {

	}

	public async getCountries() {
		this.rows = await this.service.getAll();
		this.regions = [...new Set(this.rows.map((c: any) => c.region).filter(Boolean))];
	}


	public async dataCountry(data: string) {
		if (data.length > 0) {
			this.rows = [];
			this.rows = await this.service.getByName(data);

		}
	}

	public async dataRegion(data: string) {
		if (data.length > 0) {
			this.rows = [];
			this.rows = await this.service.getByRegion(data);

		}
	}
}
