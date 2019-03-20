import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileserviceComponent } from './fileservice.component';

describe('FileserviceComponent', () => {
  let component: FileserviceComponent;
  let fixture: ComponentFixture<FileserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
