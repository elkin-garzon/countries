import { Injectable } from '@angular/core';
import { BaseService } from '../../base/base.service';
import { Country } from '@interfaces/index';
import { Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class CountryService extends BaseService {

	public getAll(): Promise<Country[]> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get<Country[]>(`${this.url_base}/all`).subscribe({
				next: (result: Country[]) => {
					resolve(result);
				},
				error: (error: any) => {
					reject(error);
				},
				complete: () => {
					if (subscription) {
						subscription.unsubscribe();
					}
				}
			})
		});
	}

	public getByName(name: string): Promise<Country[]> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			let params = new HttpParams();
			params = params.appendAll({
				fullText: false
			});
			subscription = this.http.get<Country[]>(`${this.url_base}/name/${name}`, { params }).subscribe({
				next: (result: Country[]) => {
					resolve(result);
				},
				error: (error: any) => {
					reject(error);
				},
				complete: () => {
					if (subscription) {
						subscription.unsubscribe();
					}
				}
			})
		});
	}

	public getByCode(code: string): Promise<Country> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get<Country[]>(`${this.url_base}/alpha/${code}`).subscribe({
				next: (result: Country[]) => {
					resolve(result[0]);
				},
				error: (error: any) => {
					reject(error);
				},
				complete: () => {
					if (subscription) {
						subscription.unsubscribe();
					}
				}
			})
		});
	}

	public getByRegion(region: string): Promise<Country[]> {
		return new Promise((resolve, reject) => {
			let subscription: Subscription;
			subscription = this.http.get<Country[]>(`${this.url_base}/region/${region}`).subscribe({
				next: (result: Country[]) => {
					resolve(result);
				},
				error: (error: any) => {
					reject(error);
				},
				complete: () => {
					if (subscription) {
						subscription.unsubscribe();
					}
				}
			})
		});
	}
}
