import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSellFormComponent } from './new-sell-form.component';

describe('NewSellFormComponent', () => {
  let component: NewSellFormComponent;
  let fixture: ComponentFixture<NewSellFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSellFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
