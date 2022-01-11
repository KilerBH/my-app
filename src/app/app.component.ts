import {Component} from '@angular/core';
import {TestServiceService} from "./test-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    isLoading = false;
    result = 0;

    constructor(
        private service: TestServiceService,
    ) {
    }

    test() {
        console.log('function start', this.service.counter);
        this.isLoading = true;
        this.service.someHeavyJob()
            .subscribe(
                (c) => {
                    console.log('function next', this.service.counter);
                    this.result = c;
                    this.isLoading = false;
                },
                (e) => {
                    console.log('function error', this.service.counter);
                    this.isLoading = false;
                    console.log(e);
                },
            );
        console.log('function return', this.service.counter);
        this.result = this.service.counter;
    }
}
