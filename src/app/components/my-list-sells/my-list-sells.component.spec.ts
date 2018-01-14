import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListSellsComponent } from './my-list-sells.component';

describe('MyListSellsComponent', () => {
  let component: MyListSellsComponent;
  let fixture: ComponentFixture<MyListSellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListSellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListSellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
