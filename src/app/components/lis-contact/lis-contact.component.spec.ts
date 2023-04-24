import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisContactComponent } from './lis-contact.component';

describe('LisContactComponent', () => {
  let component: LisContactComponent;
  let fixture: ComponentFixture<LisContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
