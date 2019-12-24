import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '@big-trip/layouts';

import { homeContainers, homeRoutes } from './home.common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, LayoutModule, RouterModule.forChild(homeRoutes)],
  declarations: [...homeContainers]
})
export class HomeModule {}
