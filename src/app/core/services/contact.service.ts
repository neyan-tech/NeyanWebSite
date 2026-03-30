import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ContactFormPayload } from '../models/contact-form.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submit(payload: ContactFormPayload): Observable<void> {
    // Placeholder integration point for API/webhook submission.
    console.log('Contact submission payload:', payload);
    return of(void 0).pipe(delay(400));
  }
}
