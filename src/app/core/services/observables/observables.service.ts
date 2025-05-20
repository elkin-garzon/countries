import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ObservablesService {

	private showModalError = new BehaviorSubject<boolean>(false)
	receiptModalError = this.showModalError.asObservable()
	passScreenShowLoader(showModalError: boolean) { 
		this.showModalError.next(showModalError)
	 }
}
