import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EducationAndWorkHistoryComponent } from './education-and-work-history.component';

describe('EducationAndWorkHistoryComponent', () => {
  let component: EducationAndWorkHistoryComponent;
  let fixture: ComponentFixture<EducationAndWorkHistoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EducationAndWorkHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationAndWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
