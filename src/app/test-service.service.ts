import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class TestServiceService {

    counter = 0;

    constructor() {
    }

    someHeavyJob(): Observable<number> {
        return of(0)
            .pipe(delay(2000))
            .pipe(
                map((a) => {
                    this.counter++;
                    return this.counter;
                })
            );
    }
}
