import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
