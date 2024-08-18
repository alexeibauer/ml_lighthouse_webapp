import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs, 'es-MX', localeEsExtra);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class AngularMaterialModule { }
