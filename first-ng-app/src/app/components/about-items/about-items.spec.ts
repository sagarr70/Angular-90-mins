import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItems } from './about-items';

describe('AboutItems', () => {
  let component: AboutItems;
  let fixture: ComponentFixture<AboutItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
