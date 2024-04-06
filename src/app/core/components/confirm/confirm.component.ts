import { Component } from '@angular/core';
import { GlobalState } from '../../global/global-state';


@Component({
    selector: 'confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent extends GlobalState {}
