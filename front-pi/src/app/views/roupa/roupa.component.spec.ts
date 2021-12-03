import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupaComponent } from './roupa.component';

describe('RoupaComponent', () => {
  let component: RoupaComponent;
  let fixture: ComponentFixture<RoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
