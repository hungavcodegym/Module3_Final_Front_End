import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeAddComponent } from './awesome-add.component';

describe('AwesomeAddComponent', () => {
  let component: AwesomeAddComponent;
  let fixture: ComponentFixture<AwesomeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
