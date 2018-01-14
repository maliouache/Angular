import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListSearchComponent } from './item-list-search.component';

describe('ItemListSearchComponent', () => {
  let component: ItemListSearchComponent;
  let fixture: ComponentFixture<ItemListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
