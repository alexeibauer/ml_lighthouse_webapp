import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AngularMaterialModule } from './angular-material/angular-material/angular-material.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

//Libraries
import { CookieService } from 'ngx-cookie-service';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { environment } from 'src/environments/environment';
import { MlloginredirectscreenComponent } from './screens/mlloginredirectscreen/mlloginredirectscreen.component';
import { MlconectadoscreenComponent } from './screens/mlconectadoscreen/mlconectadoscreen.component';
registerLocaleData(localeEs, 'es-MX', localeEsExtra);

@NgModule({
  declarations: [
    AppComponent,
    MlloginredirectscreenComponent,
    MlconectadoscreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_maps_javascript_api
    }),
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    CookieService,
    CurrencyPipe,
    DecimalPipe,
    {provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
