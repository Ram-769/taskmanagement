import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMangementComponent } from './task-mangement.component';

describe('TaskMangementComponent', () => {
  let component: TaskMangementComponent;
  let fixture: ComponentFixture<TaskMangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskMangementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
