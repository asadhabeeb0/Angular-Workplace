import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { CustomSlice } from './customslice.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ServicesComponent } from './services/services.component';
import { BioPhyDataService } from './bio-phy-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CustomSlice,
    SimpleFormComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BioPhyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
