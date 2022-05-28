import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparelistComponent } from './sparelist.component';

describe('SparelistComponent', () => {
  let component: SparelistComponent;
  let fixture: ComponentFixture<SparelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
