import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ObservablesService } from '@services/services/observables/observables.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

	const _observables = inject(ObservablesService);

	return next(req).pipe(
		catchError((error: HttpErrorResponse) => {
			_observables.passScreenShowLoader(true)
			return throwError(() => error);
		})
	);
};
