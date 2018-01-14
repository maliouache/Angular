import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListCatComponent } from './item-list-cat.component';

describe('ItemListCatComponent', () => {
  let component: ItemListCatComponent;
  let fixture: ComponentFixture<ItemListCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
