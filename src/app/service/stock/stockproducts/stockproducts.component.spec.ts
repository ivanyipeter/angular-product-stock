import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockproductsComponent } from './stockproducts.component';

describe('StockproductsComponent', () => {
  let component: StockproductsComponent;
  let fixture: ComponentFixture<StockproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
