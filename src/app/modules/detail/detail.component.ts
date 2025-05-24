import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Country } from '@interfaces/index';
import { DecimalPipe } from '@angular/common';
import { DataCountry } from './data';
import { CountryService } from '../../services/country/country.service';
import { CardCountryComponent } from '@components/card-country/card-country.component';

@Component({
	selector: 'eg-detail',
	imports: [
		RouterModule,
		CardCountryComponent
	],
	templateUrl: './detail.component.html',
	styleUrl: './detail.component.scss'
})
export class DetailComponent {
	private readonly service = inject(CountryService);
	public country: Country =DataCountry;
	private readonly route = inject(ActivatedRoute);

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			const code = params.get('code');
			if (code) {
				this.service.getByCode(code).then((result: Country) => {
					this.country = result;
				});
			}
		});

	}


}
