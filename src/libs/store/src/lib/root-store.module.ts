import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { RootEffects } from './+state/root.effects';
import { reducers, rootInitialState } from './+state/root.reducer';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer.service';

@NgModule({
  imports: [
    NxModule.forRoot(),
    RouterModule,
    StoreModule.forRoot(reducers, {
      initialState: rootInitialState,
      metaReducers: [],
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: StoreRouterStateSerializer
    }),
    EffectsModule.forRoot([RootEffects])
  ]
})
export class RootStoreModule {}
