import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBasket } from './fruit-basket';

describe('FruitBasket', () => {
  let component: FruitBasket;
  let fixture: ComponentFixture<FruitBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruitBasket],
    }).compileComponents();

    fixture = TestBed.createComponent(FruitBasket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
