import { Injectable, signal } from '@angular/core';

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
}
