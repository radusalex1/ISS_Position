import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISSComponent } from './iss.component';

describe('ISSComponent', () => {
  let component: ISSComponent;
  let fixture: ComponentFixture<ISSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ISSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ISSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
