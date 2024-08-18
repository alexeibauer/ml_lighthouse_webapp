import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlconectadoscreenComponent } from './mlconectadoscreen.component';

describe('MlconectadoscreenComponent', () => {
  let component: MlconectadoscreenComponent;
  let fixture: ComponentFixture<MlconectadoscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlconectadoscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlconectadoscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
