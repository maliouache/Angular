import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateShippingChoiceComponent } from './private-shipping-choice.component';

describe('PrivateShippingChoiceComponent', () => {
  let component: PrivateShippingChoiceComponent;
  let fixture: ComponentFixture<PrivateShippingChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateShippingChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateShippingChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
