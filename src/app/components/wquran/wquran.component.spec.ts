import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WquranComponent } from './wquran.component';

describe('WquranComponent', () => {
  let component: WquranComponent;
  let fixture: ComponentFixture<WquranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WquranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WquranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
