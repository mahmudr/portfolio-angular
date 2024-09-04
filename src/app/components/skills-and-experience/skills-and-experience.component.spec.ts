import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillsAndExperienceComponent } from './skills-and-experience.component';

describe('SkillsAndExperienceComponent', () => {
  let component: SkillsAndExperienceComponent;
  let fixture: ComponentFixture<SkillsAndExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SkillsAndExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsAndExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
