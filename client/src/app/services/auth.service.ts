import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    login(email: string) {
        // Simulate API call
        return of({ success: true, email }).pipe(delay(1000));
    }

    registerCompany(data: any) {
        // Simulate API call
        return of({ success: true, data }).pipe(delay(1000));
    }
}
