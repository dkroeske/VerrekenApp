import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import {CalculateService} from './services/calculate.service';
import {HttpClientModule} from '@angular/common/http';
import { CalculatorComponent } from './calculator/calculator.component';
import { OverviewComponent } from './overview/overview.component';
import {AppRoutingModule} from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
