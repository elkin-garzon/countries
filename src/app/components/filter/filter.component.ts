import { Component, inject, Input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DebounceComponent } from '@components/debounce/debounce.component';
import { DataForm } from '@interfaces/index';


@Component({
	selector: 'eg-filter',
	imports: [
		ReactiveFormsModule,
		DebounceComponent
	],
	templateUrl: './filter.component.html',
	styleUrl: './filter.component.scss'
})
export class FilterComponent {

	private readonly formBuilder = inject(FormBuilder);
	public form!: FormGroup;

	@Input() set regions(data: string[]) {
		this._regions = data;
	};
	public _regions: string[] = [];

	public sendTextCountry = output<string>();
	public sendTextRegion = output<string>();

	ngOnInit(): void {
		this.createForm();
	}

	private createForm(): void {
		this.form = this.formBuilder.group({
			country: ['', [Validators.minLength(3)]],
			maskCountry: ['', [Validators.minLength(3)]],
			region: [''],
		});
		this.changeRegion();
		this.changeCountry();
	}

	public setCountry(country: string): void {
		this.form.get('maskCountry')?.setValue(country);
		this.form.get('country')?.setValue('');
		this.sendData();
	}

	private changeRegion(): void {
		this.form.get('region')?.valueChanges.subscribe(() => {
			this.form.get('country')?.setValue('');
			this.sendDataRegion();
		});
	}

	private changeCountry(): void {
		this.form.get('maskCountry')?.valueChanges.subscribe(() => {
			this.form.get('country')?.setValue(this.form.get('maskCountry')?.value);
		});
	}

	private sendData(): void {
		if (this.form.valid) {
			this.sendTextCountry.emit(this.form.value.maskCountry);
		}
	}

	private sendDataRegion(): void {
		if (this.form.valid) {
			this.sendTextRegion.emit(this.form.value.region);
		}
	}


}
