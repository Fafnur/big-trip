import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { coreContainers, routes } from './core.common';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [...coreContainers]
})
export class CoreModule {}
