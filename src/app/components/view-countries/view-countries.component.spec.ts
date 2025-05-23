import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountriesComponent } from './view-countries.component';

describe('ViewCountriesComponent', () => {
  let component: ViewCountriesComponent;
  let fixture: ComponentFixture<ViewCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCountriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
