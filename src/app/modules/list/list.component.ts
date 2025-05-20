import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '@components/filter/filter.component';
import { Country, DataForm } from '@interfaces/index';
import { CountryService } from '@services/services/country/country.service';
import { ObservablesService } from '@services/services/observables/observables.service';

@Component({
	selector: 'eg-list',
	imports: [
		RouterModule,
		FilterComponent
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.scss'
})
export class ListComponent {

	private readonly service = inject(CountryService);
	private _observables = inject(ObservablesService);
	public rows: Country[] = [];
	public regions: string[] = [];

	ngOnInit(): void {
		this._observables.receiptModalError.subscribe((data: boolean) => {
			if (!data) {
				this.getCountries();
			}
		});
		this.getCountries();
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
