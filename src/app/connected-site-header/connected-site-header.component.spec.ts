import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedSiteHeaderComponent } from './connected-site-header.component';

describe('ConnectedSiteHeaderComponent', () => {
  let component: ConnectedSiteHeaderComponent;
  let fixture: ComponentFixture<ConnectedSiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedSiteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
