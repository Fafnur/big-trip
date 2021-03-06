import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

/**
 * Notice: Use root effect's only for root actions (like as router).
 * Anthers modules will be loaded with lazy loading.
 */
@Injectable()
export class RootEffects {
  constructor(private actions$: Actions) {}
}
