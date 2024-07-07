import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviyModalComponent } from './activiy-modal.component';

describe('ActiviyModalComponent', () => {
  let component: ActiviyModalComponent;
  let fixture: ComponentFixture<ActiviyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviyModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
