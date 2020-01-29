import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingPageContainerComponent } from './shopping-page-container.component';

describe('ShoppingPageContainerComponent', () => {
  let component: ShoppingPageContainerComponent;
  let fixture: ComponentFixture<ShoppingPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
