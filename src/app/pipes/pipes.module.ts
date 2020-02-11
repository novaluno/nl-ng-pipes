import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { TranslateBooleanPipe } from './translate-boolean.pipe';
import { DateOriginPipe } from './date-origin.pipe';
import { DateTimeOriginPipe } from './date-time-origin.pipe';
import { DateUtcPipe } from './date-utc.pipe';
import { LocalizeNumberPipe } from './localize-number.pipe';

@NgModule({
  declarations: [
    ShortenPipe,
    FilterPipe,
    TranslateBooleanPipe,
    DateOriginPipe,
    DateTimeOriginPipe,
    DateUtcPipe,
    LocalizeNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenPipe,
    FilterPipe,
    TranslateBooleanPipe,
    DateOriginPipe,
    DateTimeOriginPipe,
    DateUtcPipe,
    LocalizeNumberPipe
  ]
})
export class PipesModule {

  constructor(@Optional() @SkipSelf() parentModule: PipesModule) {
    if (parentModule) {
      throw new Error(
        'PipesModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<PipesModule> {
    return {
      ngModule: PipesModule,
      providers: [
        ShortenPipe,
        FilterPipe,
        TranslateBooleanPipe,
        DateOriginPipe,
        DateTimeOriginPipe,
        DateUtcPipe,
        LocalizeNumberPipe
      ]
    };
  }
}
