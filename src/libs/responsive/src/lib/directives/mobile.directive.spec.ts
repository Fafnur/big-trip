import { Component, PLATFORM_ID } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getTestScheduler, readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { RESPONSIVE_MODE, RESPONSIVE_MODE_DEFAULT } from '@big-trip/responsive';

import { ResponsiveFacade } from '../+state/responsive.facade';
import { ResponsiveStorage } from '../interfaces/responsive-storage.interface';
import { MobileDirective } from './mobile.directive';

@Component({
  template: `
    <h1>
      <span *btMobile>Text</span>
    </h1>
  `
})
export class TestMsComponent {}

describe('BtMobileDirective', () => {
  let component: TestMsComponent;
  let fixture: ComponentFixture<TestMsComponent>;
  let facade: ResponsiveFacade;
  let scheduler: TestScheduler;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestMsComponent, MobileDirective],
      providers: [
        {
          provide: ResponsiveFacade,
          useValue: {
            mobile$: of(true)
          }
        },
        {
          provide: ResponsiveStorage,
          useValue: {}
        },
        {
          provide: RESPONSIVE_MODE,
          useValue: 'md'
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    facade = TestBed.get(ResponsiveFacade);
    scheduler = getTestScheduler();
    fixture = TestBed.createComponent(TestMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init() should load responsive mode', async done => {
    try {
      const compiled = fixture.debugElement.nativeElement;
      await readFirst(facade.mobile$);
      expect(compiled.querySelector('h1').textContent).toContain('Text');
      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
