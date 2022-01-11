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
        this.isLoading = true;
        this.service.someHeavyJob()
            .subscribe(
                (c) => {
                    this.isLoading = false;
                },
                (e) => {
                    this.isLoading = false;
                    console.log(e);
                },
            );
        this.result = this.service.counter;
    }
}
