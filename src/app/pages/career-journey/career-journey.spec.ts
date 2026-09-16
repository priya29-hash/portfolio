import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerJourney } from './career-journey';

describe('CareerJourney', () => {
  let component: CareerJourney;
  let fixture: ComponentFixture<CareerJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerJourney],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerJourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
