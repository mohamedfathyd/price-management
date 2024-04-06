import { Component } from '@angular/core';
import { GlobalState } from '../../global/global-state';


@Component({
    selector: 'confirm-input',
    templateUrl: './confirm-input.component.html',
    styleUrls: ['./confirm-input.component.scss']
})
export class ConfirmInputComponent extends GlobalState {
    valueInput:string;
}
