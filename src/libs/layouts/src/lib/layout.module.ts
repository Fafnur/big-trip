import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { layoutsComponents, layoutsContainers } from './layout.common';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...layoutsComponents, ...layoutsContainers],
  exports: [...layoutsComponents, ...layoutsContainers]
})
export class LayoutModule {}
