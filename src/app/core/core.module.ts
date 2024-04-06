import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { NotifierComponent } from './components/notifier/notifier.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './main.interceptor';
import { MaterialModule } from '../material.module';
import { ConfirmInputComponent } from './components/confirm-input/confirm-input.component';
import { PdfDialogComponent } from './components/pdf-dialog/pdf-dialog.component';
import { NotificationComponent } from './components/notificaiton/notification.component';


@NgModule({
  declarations: [LoadingComponent,NotifierComponent,ConfirmComponent,
    ConfirmInputComponent, PdfDialogComponent,NotificationComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,MaterialModule,
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    DatePipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    NotifierComponent,
    ConfirmComponent,
    ConfirmInputComponent,
    PdfDialogComponent,
    NotificationComponent
  ]
})
export class CoreModule { }
