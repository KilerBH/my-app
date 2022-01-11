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
        console.log('function start');
        this.isLoading = true;
        this.service.someHeavyJob()
            .subscribe(
                (c) => {
                    console.log('function next');
                    this.isLoading = false;
                },
                (e) => {
                    console.log('function error');
                    this.isLoading = false;
                    console.log(e);
                },
            );
        console.log('function return');
        this.result = this.service.counter;
    }
}
