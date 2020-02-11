import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { TranslateBooleanPipe } from './translate-boolean.pipe';

@NgModule({
  declarations: [
    ShortenPipe,
    FilterPipe,
    TranslateBooleanPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortenPipe,
    FilterPipe,
    TranslateBooleanPipe
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

      ]
    };
  }
}
