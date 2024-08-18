import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlloginredirectscreenComponent } from './mlloginredirectscreen.component';

describe('MlloginredirectscreenComponent', () => {
  let component: MlloginredirectscreenComponent;
  let fixture: ComponentFixture<MlloginredirectscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlloginredirectscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlloginredirectscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
