import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Country } from '@interfaces/country.interface';
import { CountryService } from '../../services/country/country.service';
@Component({
	selector: 'eg-debounce',
	imports: [],
	templateUrl: './debounce.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebounceComponent {

	private readonly service = inject(CountryService);

	@Input() set name(data: string) {
		if(data.length < 3) {
			this.countries = [];
			return;

		}
		this._name = data;
		this.listForName();

	};
	public _name: string = '';

	@Output() countrySelect = new EventEmitter<string>();

	public countries: Country[] = [];

	private async listForName() {
		this.countries = await this.service.getByName(this._name);
		console.log(this.countries);
	}

	public sendData(country: string) {
		this.countrySelect.emit(country);
		this.countries = [];
	}
}
