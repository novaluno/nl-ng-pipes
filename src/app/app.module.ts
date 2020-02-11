import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PipesModule } from './pipes/pipes.module';
import { DatePipeDemosComponent } from './date-pipe-demos/date-pipe-demos.component';
import { BooleanPipeDemosComponent } from './boolean-pipe-demos/boolean-pipe-demos.component';
import { DatePipe, DecimalPipe } from '@angular/common';
import { DateTimePipeDemosComponent } from './date-time-pipe-demos/date-time-pipe-demos.component';
import { DateUtcPipeDemosComponent } from './date-utc-pipe-demos/date-utc-pipe-demos.component';
import { NumberPipeDemosComponent } from './number-pipe-demos/number-pipe-demos.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    HomeComponent,
    ErrorComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    DatePipeDemosComponent,
    BooleanPipeDemosComponent,
    DateTimePipeDemosComponent,
    DateUtcPipeDemosComponent,
    NumberPipeDemosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServicesModule.forRoot(),
    ComponentsModule.forRoot(),
    PipesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    Title,
    DatePipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
