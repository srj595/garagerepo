import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobcardServicesComponent } from './jobcard-services.component';

describe('JobcardServicesComponent', () => {
  let component: JobcardServicesComponent;
  let fixture: ComponentFixture<JobcardServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobcardServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobcardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
