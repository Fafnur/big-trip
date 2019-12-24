import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ResponsiveModule } from '@big-trip/responsive';
import { BrowserStorageModule } from '@big-trip/storage';
import { RootStoreModule } from '@big-trip/store';
import { BrowserTranslationModule } from '@big-trip/translation';

import { environment } from '../../environments/environment';
import { coreContainers, routes } from './core.common';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ResponsiveModule.forRoot(),
    BrowserStorageModule.forRoot(),
    BrowserTranslationModule.forRoot(),
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  declarations: [...coreContainers]
})
export class CoreModule {}
