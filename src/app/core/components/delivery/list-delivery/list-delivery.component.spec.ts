import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryComponent } from './list-delivery.component';

describe('ListDeliveryComponent', () => {
  let component: ListDeliveryComponent;
  let fixture: ComponentFixture<ListDeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeliveryComponent]
    });
    fixture = TestBed.createComponent(ListDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
