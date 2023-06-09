import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepComponent } from './sheep.component';

describe('SheepComponent', () => {
  let component: SheepComponent;
  let fixture: ComponentFixture<SheepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
