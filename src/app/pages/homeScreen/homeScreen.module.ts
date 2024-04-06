import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routes } from './homeScreen.routing';

import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MaterialModule } from 'src/app/material.module';
import { OnlyNumberDirective } from 'src/app/shared/directives/NumberOnly.directive';
import { HomeScreenComponent } from './homeScreen/homeScreen.component';
import { SectorsRequestComponent } from './components/requests/sectors-request/sectors-request.component';

@NgModule({
  declarations: [HomeScreenComponent, SectorsRequestComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    OnlyNumberDirective,
    DatePipe
  ]
})


export class HomeScreenModule { }
