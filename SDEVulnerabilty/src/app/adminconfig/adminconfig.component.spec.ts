import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconfigComponent } from './adminconfig.component';

describe('AdminconfigComponent', () => {
  let component: AdminconfigComponent;
  let fixture: ComponentFixture<AdminconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
