import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../../../core/global/global-state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import regex from '../../../../../shared/validators/regex';
import { HomeScreenService } from '../../../servcies/homeScreen.service';

@Component({
  selector: 'sectors-request',
  templateUrl: './sectors-request.component.html',
  styleUrls: ['./sectors-request.component.scss']
})
export class SectorsRequestComponent extends GlobalState implements OnInit {
  requestForm: FormGroup;
  requestSubmitFrom: FormGroup;
  isLoading = false;
  viewPassbool = false;
  display: any;
  resultData;
  constructor(
    private fb: FormBuilder, private router: Router, private service: HomeScreenService) {
    super();
    this.setRequestForm();
    this.setRequestSubmitForm();
  }
  get f() {
    return this.requestForm.controls;
  }
  ngOnInit(): void { }
  setRequestForm() {
    this.requestForm = this.fb.group({
      cRNumber: ['', [Validators.required]],
      civilIdNumber: ['', [Validators.required]],
    });
  }
  setRequestSubmitForm() {
    this.requestSubmitFrom = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }
  submit() {
    this.resultData = {
      name: "Mohamed",
      age: "20",
      job: "doctor"
    }
    this.requestSubmitFrom.controls['name'].setValue(this.resultData.name);
    this.requestSubmitFrom.controls['age'].setValue(this.resultData.age);
    this.requestSubmitFrom.controls['job'].setValue(this.resultData.job);
    this.isLoading = true;
    this.service.request(this.requestForm.value).subscribe(
      (res) => {
        if (res.success) {

        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
  SubmitForm() { 
    this.service.requestSubmit(this.requestSubmitFrom.value).subscribe(
      (res) => {
        if (res.success) {

        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
}
