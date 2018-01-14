import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCatComponent } from './item-cat.component';

describe('ItemCatComponent', () => {
  let component: ItemCatComponent;
  let fixture: ComponentFixture<ItemCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
