import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './launch/launch.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BooleanPipeDemosComponent } from './boolean-pipe-demos/boolean-pipe-demos.component';
import { DatePipeDemosComponent } from './date-pipe-demos/date-pipe-demos.component';
import { DateTimePipeDemosComponent } from './date-time-pipe-demos/date-time-pipe-demos.component';
import { DateUtcPipeDemosComponent } from './date-utc-pipe-demos/date-utc-pipe-demos.component';
import { NumberPipeDemosComponent } from './number-pipe-demos/number-pipe-demos.component';

const routes: Routes = [
  {
    path: 'launch',
    component: LaunchComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Welcome!'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About NUVALUNO LLC'
    }
  },
  {
    path: 'boolean-pipe-demos',
    component: BooleanPipeDemosComponent,
    data: {
      title: 'Boolean Pipe Demos'
    }
  },
  {
    path: 'date-pipe-demos',
    component: DatePipeDemosComponent,
    data: {
      title: 'Date Pipe Demos'
    }
  },
  {
    path: 'date-utc-pipe-demos',
    component: DateUtcPipeDemosComponent,
    data: {
      title: 'Date UTC Pipe Demos'
    }
  },
  {
    path: 'date-time-pipe-demos',
    component: DateTimePipeDemosComponent,
    data: {
      title: 'Date Time Pipe Demos'
    }
  },
  {
    path: 'number-pipe-demos',
    component: NumberPipeDemosComponent,
    data: {
      title: 'Number Pipe Demos'
    }
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      title: 'Error'
    }
  },
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
