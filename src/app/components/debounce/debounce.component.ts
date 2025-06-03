import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Country } from '@interfaces/country.interface';
import { CountryService } from '../../services/country/country.service';
import { StoreService } from '@services/store/store.service';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'eg-debounce',
	imports: [
		CommonModule
	],
	templateUrl: './debounce.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DebounceComponent {

	private readonly service = inject(CountryService);
	public readonly store = inject(StoreService);

	@Input() set name(data: string) {
		if(data.length < 3) {
			return;

		}
		this._name = data;
		this.listForName();

	};
	public _name: string = '';

	@Output() countrySelect = new EventEmitter<string>();

	private async listForName() {
		this.store.changeListcountries(await this.service.getByName(this._name));
	}

	public sendData(country: string) {
		this.countrySelect.emit(country);
		this.store.changeListcountries([]);
	}
}
