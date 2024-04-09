import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonesJAGFComponent } from './digimones-jagf.component';

describe('DigimonesJAGFComponent', () => {
  let component: DigimonesJAGFComponent;
  let fixture: ComponentFixture<DigimonesJAGFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigimonesJAGFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonesJAGFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
