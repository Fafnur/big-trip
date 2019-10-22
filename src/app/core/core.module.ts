import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootStoreModule } from '@big-trip/store';

import { environment } from '../../environments/environment';
import { coreContainers, routes } from './core.common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : []
  ],
  declarations: [...coreContainers]
})
export class CoreModule {}
