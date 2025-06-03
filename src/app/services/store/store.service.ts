import { Injectable, signal } from '@angular/core';
import { Country } from '@interfaces/index';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    public txtCountry = signal<string>('');
    public changeTxtCountry(value: string): void {
        this.txtCountry.set(value);
    }

    public txtRegion = signal<string>('');
    public changeTxtRegion(value: string): void {
        this.txtRegion.set(value);
    }

    public listRegions = signal<string[]>([]);
    public changeListRegions(values: string[]): void {
        this.listRegions.set(values);
    }

    public listCountries = signal<Country[]>([]);
    public changeListcountries(values: Country[]): void {
        this.listCountries.set(values);
    }

     public rowsCountries = signal<Country[]>([]);
    public changeRowsCountries(values: Country[]): void {
        this.rowsCountries.set(values);
    }
}
