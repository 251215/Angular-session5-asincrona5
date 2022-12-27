import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacioneComponent } from './operacione.component';

describe('OperacioneComponent', () => {
  let component: OperacioneComponent;
  let fixture: ComponentFixture<OperacioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
