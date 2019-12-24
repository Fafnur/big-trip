import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {}
